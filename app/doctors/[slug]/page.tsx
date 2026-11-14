import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PagePhoto } from "@/components/page-photo";
import { departmentPhoto } from "@/data/imagery";
import { doctors, hospital } from "@/data/site";

type DoctorPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export function generateMetadata({ params }: DoctorPageProps): Metadata {
  const doctor = doctors.find((item) => item.slug === params.slug);
  return {
    title: doctor?.name ?? "Doctor",
    description: doctor ? `${doctor.name} at ${hospital.name}.` : `[PLACEHOLDER]`
  };
}

export default function DoctorDetailPage({ params }: DoctorPageProps) {
  const doctor = doctors.find((item) => item.slug === params.slug);

  if (!doctor) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl font-semibold text-ink">Doctor not found</h1>
        <Link href="/doctors" className="mt-6 inline-flex font-semibold text-medical">
          Back to doctors
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
      <Link href="/doctors" className="text-sm font-semibold text-medical hover:text-medical-dark">
        Back to doctors
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Image src={doctor.photo} alt={`Portrait of ${doctor.name}`} width={800} height={600} className="aspect-[4/3] w-full rounded-panel object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{doctor.name}</h1>
          <p className="mt-4 text-lg text-medical">{doctor.department}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div><dt className="text-sm font-semibold text-ink">Qualification</dt><dd className="mt-2 text-slate-600">{doctor.qualification}</dd></div>
            <div><dt className="text-sm font-semibold text-ink">Availability</dt><dd className="mt-2 text-slate-600">Call to confirm consultation timings</dd></div>
            <div><dt className="text-sm font-semibold text-ink">OPD days</dt><dd className="mt-2 text-slate-600">{doctor.opdDays}</dd></div>
          </dl>
          <Link href={`/book-appointment?doctor=${doctor.slug}`} className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-medical px-6 font-semibold text-white hover:bg-medical-dark">
            Book appointment
          </Link>
        </div>
      </div>
      <div className="mt-14 border-t border-line pt-10">
        <h2 className="mb-6 text-2xl font-semibold text-ink">Care in {doctor.department}</h2>
        <PagePhoto photo={departmentPhoto(doctor.department.toLowerCase().includes("orthopaedic") ? "orthopaedics" : doctor.department.toLowerCase().replaceAll(" ", "-"))} compact />
      </div>
    </section>
  );
}
