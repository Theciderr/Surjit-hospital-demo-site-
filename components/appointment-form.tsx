"use client";

import { FormEvent, useState } from "react";
import { departments, doctors, hospital } from "@/data/site";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [handoff, setHandoff] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const chosen = doctors.find(d => d.slug === new URLSearchParams(window.location.search).get("doctor"));
      const text = ["Hello, I would like to request an appointment.", "Name: " + payload.name, "Phone: " + payload.phone, chosen ? "Doctor: " + chosen.name : "", "Department: " + payload.department, "Preferred date: " + payload.preferredDate, payload.message ? "Message: " + payload.message : ""].filter(Boolean).join("\n");
      setHandoff("https://wa.me/" + hospital.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(text));
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit the request.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-panel border border-line bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-ink">Full name</label>
        <input id="name" name="name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-ink" />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-ink">Phone number</label>
        <input id="phone" name="phone" required type="tel" minLength={10} maxLength={16} pattern="[+0-9 ()-]{10,16}" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-ink" />
      </div>
      <div>
        <label htmlFor="department" className="text-sm font-semibold text-ink">Department</label>
        <select id="department" name="department" required defaultValue="" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-ink">
          <option value="" disabled>Select a department</option>
          {departments.map((department) => <option key={department.slug} value={department.name}>{department.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="preferredDate" className="text-sm font-semibold text-ink">Preferred date</label>
        <input id="preferredDate" name="preferredDate" required type="date" min={new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())} className="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-ink" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">Message <span className="font-normal text-slate-500">(optional)</span></label>
        <textarea id="message" name="message" rows={4} className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-ink" />
      </div>
      <button type="submit" disabled={status === "loading"} className="min-h-12 rounded-full bg-medical px-6 font-semibold text-white transition hover:bg-medical-dark disabled:cursor-wait disabled:opacity-70">
        {status === "loading" ? "Preparing message..." : "Prepare appointment request"}
      </button>
      <p className="text-xs leading-6 text-slate-500">This form prepares a WhatsApp message. Review it and press Send in WhatsApp. The hospital must confirm your appointment. Please avoid sharing medical records here.</p>
      {status === "success" ? <div role="status" className="rounded-lg bg-mist p-5"><p className="mb-4 text-sm text-ink">Your message is ready. Nothing has been sent yet.</p><a href={handoff} target="_blank" rel="noopener noreferrer" className="button-primary">Continue to WhatsApp</a></div> : null}
      {status === "error" ? <p role="alert" className="text-sm font-medium text-red-700">{errorMessage}</p> : null}
    </form>
  );
}
