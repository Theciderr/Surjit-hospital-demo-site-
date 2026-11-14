import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctors, hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "Doctors",
  description: `Meet the doctors at ${hospital.name}.`
};

export default function DoctorsPage() {
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">Doctors</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Meet your care team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find a doctor by speciality and explore their qualifications. Call the hospital to confirm consultation timings before your visit.
          </p>
        </div><PagePhoto photo={pagePhotos.consultation} priority /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          {doctors.map((doctor) => (
            <article key={doctor.slug} className="rounded-panel border border-line bg-white p-7 shadow-soft">
              <Image src={doctor.photo} alt={`Portrait of ${doctor.name}`} width={640} height={420} className="aspect-[3/2] w-full rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <h2 className="mt-6 text-2xl font-semibold text-ink">{doctor.name}</h2>
              <p className="mt-2 text-medical">{doctor.department}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{doctor.qualification}</p>
              <Link href={`/doctors/${doctor.slug}`} className="mt-6 inline-flex font-semibold text-medical hover:text-medical-dark">
                View profile
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
