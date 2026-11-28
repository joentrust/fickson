import { z } from "zod";
import { CONTACT_TOPICS } from "./content";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Tell us your name.").max(120),
  email: z.email("Enter a valid email address.").max(254),
  topic: z.enum(CONTACT_TOPICS),
  message: z.string().trim().min(10, "Write a little more so we can help.").max(5000),
  website: z.string().max(0),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = "name" | "email" | "topic" | "message";

export type ContactState =
  | { kind: "idle" }
  | { kind: "sent" }
  | { kind: "invalid"; errors: Partial<Record<ContactField, string>> }
  | { kind: "failed" };
