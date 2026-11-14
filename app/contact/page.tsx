import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${hospital.name} in ${hospital.city}.`
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            We are here to help you find the next step.
          </h1>
        </div><PagePhoto photo={pagePhotos.hospital} priority /></div></section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Visit or call</h2>
            <address className="mt-4 not-italic leading-7 text-slate-600">{hospital.address}</address>
            <div className="mt-5 grid gap-2 text-slate-600">
              <a href={`tel:${hospital.phone}`} className="font-semibold text-medical hover:text-medical-dark">{hospital.phone}</a>
              <p>Email: {hospital.email}</p>
              <p>Timings: {hospital.timings}</p>
              <p>Emergency: {hospital.emergencyAvailable}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-panel border border-line bg-mist">
            <iframe
              title="Hospital location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(hospital.name + " " + hospital.address)}&output=embed`}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href={hospital.mapLink} target="_blank" rel="noopener noreferrer" className="button-primary w-fit">Open directions in Google Maps</a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
