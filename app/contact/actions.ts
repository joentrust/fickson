"use server";

import { Kazuni } from "@kazuni/sdk";
import { type ContactField, type ContactState, contactSchema } from "@/lib/contact.schema";
import { readContactEnv } from "@/lib/env.server";

const FIELDS: ContactField[] = ["name", "email", "topic", "message"];

function isField(value: unknown): value is ContactField {
  return typeof value === "string" && (FIELDS as string[]).includes(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  });

  if (!parsed.success) {
    if (parsed.error.issues.some((issue) => issue.path[0] === "website")) {
      return { kind: "sent" };
    }
    const errors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (isField(field) && !errors[field]) errors[field] = issue.message;
    }
    return { kind: "invalid", errors };
  }

  const { name, email, topic, message } = parsed.data;
  const text = `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`;
  const html = `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br><strong>Topic:</strong> ${escapeHtml(topic)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  try {
    const env = readContactEnv();
    const kazuni = new Kazuni({ apiKey: env.KAZUNI_API_KEY });
    await kazuni.send.email({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: env.CONTACT_TO_EMAIL,
      subject: `Website: ${topic} from ${name}`,
      text,
      html,
    });
  } catch (error) {
    console.error("contact form send failed", error);
    return { kind: "failed" };
  }

  return { kind: "sent" };
}
