"use client";

import { FormEvent, useState } from "react";
import { hospital } from "@/data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [handoff, setHandoff] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = ["Hello, I have an enquiry.", "Name: " + data.get("name"), "Phone: " + data.get("phone"), "Message: " + data.get("message")].join("\n");
    setHandoff("https://wa.me/" + hospital.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(text));
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-panel border border-line bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold text-ink">Full name</label>
        <input id="contact-name" name="name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-ink" />
      </div>
      <div>
        <label htmlFor="contact-phone" className="text-sm font-semibold text-ink">Phone number</label>
        <input id="contact-phone" name="phone" required type="tel" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-ink" />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-ink">Message</label>
        <textarea id="contact-message" name="message" required rows={5} className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-ink" />
      </div>
      <button type="submit" className="min-h-12 rounded-full bg-medical px-6 font-semibold text-white transition hover:bg-medical-dark">
        Prepare WhatsApp message
      </button>
      <p className="text-xs leading-6 text-slate-500">Review and send your enquiry in WhatsApp. Please avoid sharing medical records here.</p>
      {submitted ? <div role="status" className="rounded-lg bg-mist p-5"><p className="mb-4 text-sm">Your message is ready. Nothing has been sent yet.</p><a href={handoff} target="_blank" rel="noopener noreferrer" className="button-primary">Continue to WhatsApp</a></div> : null}
    </form>
  );
}
