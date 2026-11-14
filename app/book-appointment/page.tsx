import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import type { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment-form";
import { hospital, doctors } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Request an appointment at ${hospital.name}.`
};

export default function BookAppointmentPage({ searchParams }: { searchParams: { doctor?: string } }) {
  const doctor = doctors.find(d => d.slug === searchParams.doctor);
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">Appointments</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Request an appointment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {doctor ? "Request a consultation with " + doctor.name + ". " : ""}Prepare your request, then send it to the hospital in WhatsApp for confirmation.
          </p>
        </div><PagePhoto photo={pagePhotos.consultation} priority /></div></section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Before you submit</h2>
          <p className="mt-5 leading-7 text-slate-600">For urgent care, call {hospital.emergencyPhone}.</p>
          <a href={`tel:${hospital.phone}`} className="mt-7 inline-flex font-semibold text-medical hover:text-medical-dark">Call the hospital</a>
        </div>
        <AppointmentForm />
      </section>
    </div>
  );
}
