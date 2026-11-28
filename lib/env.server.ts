import "server-only";
import { z } from "zod";

const contactEnvSchema = z.object({
  KAZUNI_API_KEY: z.string().min(1),
  CONTACT_FROM_EMAIL: z.email(),
  CONTACT_TO_EMAIL: z.email(),
});

export type ContactEnv = z.infer<typeof contactEnvSchema>;

export function readContactEnv(): ContactEnv {
  const parsed = contactEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const missing = parsed.error.issues.map((issue) => issue.path.join(".")).join(", ");
    throw new Error(`Contact form is not configured. Set: ${missing}`);
  }
  return parsed.data;
}
