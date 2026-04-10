import { z } from "zod";
import { sendContactAcknowledgement } from "../services/mail.service.js";
import { sendToKissflowWebhook } from "../helpers/kissflowWebhook.js";
import { getRequestMeta, phoneToDigitsOnly } from "../helpers/requestMeta.js";

const WEBSITE_NAME = "Refex Renewables";

const contactSubmissionSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().default(""),
  sales: z.string().trim().optional().default("Sales"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(500, "Message must be 500 characters or less"),
});

export async function submitContactForm(req, res) {
  try {
    const parse = contactSubmissionSchema.safeParse(req.body);
    if (!parse.success) {
      const emailErrors = parse.error.flatten().fieldErrors.email;
      if (emailErrors?.length) {
        return res.status(400).json({ message: emailErrors[0] });
      }
      return res.status(400).json({
        message: "Please fill in all required fields correctly.",
        errors: parse.error.flatten().fieldErrors,
      });
    }

    await sendContactAcknowledgement(parse.data);

    const meta = getRequestMeta(req);
    const phoneDigits = phoneToDigitsOnly(parse.data.phone);
    const webhookData = {
      name: parse.data.fullName,
      email: parse.data.email,
      phone: phoneDigits,
      Phone_Number: phoneDigits,
      company: parse.data.sales || "",
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
