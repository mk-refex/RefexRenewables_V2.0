import nodemailer from "nodemailer";
import { SmtpConfig } from "../models/index.js";

async function getActiveSmtpConfig() {
  const config = await SmtpConfig.findOne({
    order: [["updatedAt", "DESC"]],
  });
  return config;
}

function getFromHeader(config) {
  if (config.fromName && config.fromName.trim()) {
    return `"${config.fromName.trim()}" <${config.fromEmail}>`;
  }
  return config.fromEmail;
}

function createTransporter(config) {
  return nodemailer.createTransport({
    host: config.host,
    port: Number(config.port),
    secure: Boolean(config.secure),
    auth: {
      user: config.username,
      pass: config.password,
    },
  });
}

export async function getConfiguredTransporter() {
  const config = await getActiveSmtpConfig();
  if (!config || !config.isEnabled) {
    throw new Error("SMTP is not configured or disabled.");
  }
  if (
    !config.host ||
    !config.port ||
    !config.username ||
    !config.password ||
    !config.fromEmail
  ) {
    throw new Error("SMTP configuration is incomplete.");
  }
  return { transporter: createTransporter(config), config };
}

export async function verifySmtpConnection() {
  const { transporter } = await getConfiguredTransporter();
  await transporter.verify();
}

export async function sendTestEmail(testEmail) {
  const { transporter, config } = await getConfiguredTransporter();
  const info = await transporter.sendMail({
    from: getFromHeader(config),
    to: testEmail,
    replyTo: config.replyToEmail || undefined,
    subject: "SMTP Test Email - Refex Renewables",
    text: "This is a test email. Your SMTP configuration is working correctly.",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>SMTP Test Email</h2>
        <p>Your SMTP configuration is working correctly.</p>
        <p>This email was sent from the Refex Renewables admin settings page.</p>
      </div>
    `,
  });
  return info;
}

export async function sendContactAcknowledgement(form) {
  const { transporter, config } = await getConfiguredTransporter();
  const info = await transporter.sendMail({
    from: getFromHeader(config),
    to: form.email,
    replyTo: config.replyToEmail || undefined,
    subject: "We received your enquiry - Refex Renewables",
    text: `Hello ${form.fullName},\n\nThank you for contacting Refex Renewables. We have received your enquiry and our team will get back to you shortly.\n\nYour details:\n- Email: ${form.email}\n- Phone: ${form.phone || "N/A"}\n- Department: ${form.sales || "N/A"}\n- Message: ${form.message}\n\nRegards,\nRefex Renewables`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 8px;">Thank you for contacting Refex Renewables</h2>
        <p>Hello ${form.fullName},</p>
        <p>We have received your enquiry and our team will get back to you shortly.</p>
        <div style="margin: 16px 0; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;">
          <p style="margin: 0 0 6px;"><strong>Email:</strong> ${form.email}</p>
          <p style="margin: 0 0 6px;"><strong>Phone:</strong> ${form.phone || "N/A"}</p>
          <p style="margin: 0 0 6px;"><strong>Department:</strong> ${form.sales || "N/A"}</p>
          <p style="margin: 0;"><strong>Message:</strong> ${form.message}</p>
        </div>
        <p>Regards,<br/>Refex Renewables</p>
      </div>
    `,
  });
  return info;
}
