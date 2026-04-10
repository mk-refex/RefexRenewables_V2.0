import { z } from "zod";
import { SmtpConfig } from "../models/index.js";
import { sendTestEmail, verifySmtpConnection } from "../services/mail.service.js";

const smtpConfigSchema = z.object({
  host: z.string().trim().min(1, "SMTP host is required"),
  port: z.coerce.number().int().min(1).max(65535),
  secure: z.coerce.boolean().default(false),
  username: z.string().trim().min(1, "SMTP username is required"),
  password: z.string().trim().min(1, "SMTP password is required"),
  fromEmail: z.string().trim().email("Invalid from email"),
  fromName: z.string().trim().optional().default(""),
  replyToEmail: z
    .string()
    .trim()
    .optional()
    .default("")
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Invalid reply-to email",
    }),
  isEnabled: z.coerce.boolean().default(true),
});

const smtpConfigUpdateSchema = smtpConfigSchema.extend({
  password: z.string().trim().optional(),
});

const testEmailSchema = z.object({
  testEmail: z.string().trim().email("Invalid test email"),
});

function toResponsePayload(config) {
  return {
    id: config.id,
    host: config.host,
    port: config.port,
    secure: config.secure,
    username: config.username,
    fromEmail: config.fromEmail,
    fromName: config.fromName || "",
    replyToEmail: config.replyToEmail || "",
    isEnabled: config.isEnabled,
    hasPassword: Boolean(config.password),
    updatedAt: config.updatedAt,
  };
}

export async function getSmtpConfig(_req, res) {
  try {
    const config = await SmtpConfig.findOne({ order: [["updatedAt", "DESC"]] });
    if (!config) {
      return res.json({
        host: "",
        port: 587,
        secure: false,
        username: "",
        fromEmail: "",
        fromName: "",
        replyToEmail: "",
        isEnabled: true,
        hasPassword: false,
      });
    }
    return res.json(toResponsePayload(config));
  } catch (error) {
    console.error("Get SMTP config error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function saveSmtpConfig(req, res) {
  try {
    const parse = smtpConfigUpdateSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: parse.error.flatten().fieldErrors,
      });
    }

    const payload = parse.data;
    const existing = await SmtpConfig.findOne({ order: [["updatedAt", "DESC"]] });
    const finalPassword =
      payload.password && payload.password.trim()
        ? payload.password.trim()
        : existing?.password || "";

    const strictParse = smtpConfigSchema.safeParse({
      ...payload,
      password: finalPassword,
    });
    if (!strictParse.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: strictParse.error.flatten().fieldErrors,
      });
    }

    let config = existing;
    if (!config) {
      config = await SmtpConfig.create(strictParse.data);
    } else {
      await config.update(strictParse.data);
    }

    return res.json(toResponsePayload(config));
  } catch (error) {
    console.error("Save SMTP config error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function sendSmtpTest(req, res) {
  try {
    const parse = testEmailSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: parse.error.flatten().fieldErrors,
      });
    }
    await verifySmtpConnection();
    await sendTestEmail(parse.data.testEmail);
    return res.json({ message: "Test email sent successfully" });
  } catch (error) {
    console.error("SMTP test error:", error);
    return res.status(400).json({
      message: error?.message || "Failed to send test email",
    });
  }
}
