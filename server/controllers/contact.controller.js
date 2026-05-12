import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";
import { sendContactAcknowledgement } from "../services/mail.service.js";
import { sendToKissflowWebhook } from "../helpers/kissflowWebhook.js";
import { getRequestMeta, phoneToDigitsOnly } from "../helpers/requestMeta.js";

const WEBSITE_NAME = "Refex Renewables";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const DUPLICATE_WINDOW_MS = 60 * 60 * 1000;
const recentEnquiryKeys = new Map();

const PRODUCT_OPTIONS = [
  "Solar Energy",
  "Energy Storage Solutions",
  "Compressed Bio-Gas",
  "Spectrum Renewables",
  "Vyzag Bio-Energy",
  "Refex Bio-Dhanic",
];

function fingerprint(email, phoneDigits) {
  return `${String(email).trim().toLowerCase()}:${phoneDigits}`;
}

function pruneRecentEnquiries(now) {
  for (const [k, t] of recentEnquiryKeys) {
    if (now - t > DUPLICATE_WINDOW_MS) {
      recentEnquiryKeys.delete(k);
    }
  }
}

const DISALLOWED_MOBILE_TYPES = new Set([
  "FIXED_LINE",
  "TOLL_FREE",
  "PREMIUM_RATE",
  "SHARED_COST",
  "PAGER",
  "VOICEMAIL",
  "UAN",
]);

function isValidContactMobile(phone) {
  const raw = String(phone ?? "").trim();
  if (!raw) return false;
  const e164 = raw.startsWith("+")
    ? raw
    : `+${String(phone ?? "").replace(/\D/g, "")}`;
  const parsed = parsePhoneNumberFromString(e164);
  if (!parsed?.isValid()) return false;
  const t = parsed.getType();
  if (t && DISALLOWED_MOBILE_TYPES.has(t)) return false;
  return true;
}

const contactSubmissionSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a valid mobile number")
    .refine((val) => isValidContactMobile(val), "Enter a valid mobile number"),
  company: z.string().trim().min(1, "Company name is required"),
  product: z
    .string()
    .trim()
    .refine(
      (val) => PRODUCT_OPTIONS.includes(val),
      "Please select a valid product / business line",
    ),
  enquiryType: z.string().trim().min(1, "Please select an enquiry type"),
  city: z.string().trim().min(1, "City is required"),
  message: z
    .string()
    .trim()
    .min(15, "Message must be at least 15 characters")
    .max(500, "Message must be 500 characters or less"),
});

export async function checkEnquiry(req, res) {
  try {
    const email = String(req.body?.email ?? "").trim();
    const phone = String(req.body?.phone ?? "").trim();
    const phoneDigits = phoneToDigitsOnly(phone);
    if (!email || !phoneDigits) {
      return res.status(400).json({
        message: "Email and phone are required.",
      });
    }
    const now = Date.now();
    pruneRecentEnquiries(now);
    const key = fingerprint(email, phoneDigits);
    const last = recentEnquiryKeys.get(key);
    const duplicate = Boolean(last && now - last < DUPLICATE_WINDOW_MS);
    return res.json({ duplicate });
  } catch (error) {
    console.error("Contact check-enquiry error:", error);
    return res.status(500).json({ message: "Unable to check enquiry." });
  }
}

export async function submitContactForm(req, res) {
  try {
    const parse = contactSubmissionSchema.safeParse(req.body);
    if (!parse.success) {
      const emailErrors = parse.error.flatten().fieldErrors.email;
      if (emailErrors?.length) {
        return res.status(400).json({ message: emailErrors[0] });
      }
      const phoneErrors = parse.error.flatten().fieldErrors.phone;
      if (phoneErrors?.length) {
        return res.status(400).json({ message: phoneErrors[0] });
      }
      const cityErrors = parse.error.flatten().fieldErrors.city;
      if (cityErrors?.length) {
        return res.status(400).json({ message: cityErrors[0] });
      }
      const productErrors = parse.error.flatten().fieldErrors.product;
      if (productErrors?.length) {
        return res.status(400).json({ message: productErrors[0] });
      }
      return res.status(400).json({
        message: "Please fill in all required fields correctly.",
        errors: parse.error.flatten().fieldErrors,
      });
    }

    const meta = getRequestMeta(req);
    const phoneDigits = phoneToDigitsOnly(parse.data.phone);
    const now = Date.now();
    pruneRecentEnquiries(now);
    const dupKey = fingerprint(parse.data.email, phoneDigits);
    const lastSubmit = recentEnquiryKeys.get(dupKey);
    if (lastSubmit && now - lastSubmit < DUPLICATE_WINDOW_MS) {
      return res.status(409).json({
        message:
          "This enquiry was already submitted recently. Please try again later.",
      });
    }

    await sendContactAcknowledgement(parse.data);
    recentEnquiryKeys.set(dupKey, Date.now());
    const webhookData = {
      name: parse.data.fullName,
      email: parse.data.email,
      phone: phoneDigits,
      Phone_Number: phoneDigits,
      company: parse.data.company,
      Product: parse.data.product,
      enquiryType: parse.data.enquiryType,
      city: parse.data.city,
      message: parse.data.message,
      ...meta,
    };

    // Fire-and-forget queue submission. Must not block API response.
    sendToKissflowWebhook(WEBSITE_NAME, "Contact form", webhookData);

    return res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form submit error:", error);
    return res.status(400).json({
      message:
        error?.message ||
        "Unable to send message right now. Please try again later.",
    });
  }
}
