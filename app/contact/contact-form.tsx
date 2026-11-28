"use client";

import { useActionState } from "react";
import type { ContactState } from "@/lib/contact.schema";
import { CONTACT_TOPICS } from "@/lib/content";
import { sendContactMessage } from "./actions";

const INITIAL: ContactState = { kind: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, INITIAL);
  const errors = state.kind === "invalid" ? state.errors : {};

  if (state.kind === "sent") {
    return (
      <p className="form-note ok" role="status">
        Thank you. Your message is with the trustees and one of us will reply.
      </p>
    );
  }

  return (
    <form action={action} noValidate>
      <div className="two">
        <label>
          Your name
          <input name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>
      </div>
      <label>
        What is it about?
        <select name="topic" defaultValue={CONTACT_TOPICS[0]}>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
        {errors.topic && <span className="field-error">{errors.topic}</span>}
      </label>
      <label>
        Message
        <textarea name="message" required aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </label>
      <label className="trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state.kind === "failed" && (
        <p className="form-note fail" role="alert">
          Your message did not send. Please try again, or write to info@joentrust.com.
        </p>
      )}
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
