import type { Metadata } from "next";
import Link from "next/link";
import { PagePhoto } from "@/components/page-photo";
import { departmentPhoto } from "@/data/imagery";
import { departments, hospital } from "@/data/site";

type DepartmentPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }));
}

export function generateMetadata({ params }: DepartmentPageProps): Metadata {
  const department = departments.find((item) => item.slug === params.slug);
  return {
    title: department?.name ?? "Department",
    description: department?.description ?? `[PLACEHOLDER] at ${hospital.name}`
  };
}

export default function DepartmentDetailPage({ params }: DepartmentPageProps) {
  const department = departments.find((item) => item.slug === params.slug);

  if (!department) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl font-semibold text-ink">Department not found</h1>
        <Link href="/departments" className="mt-6 inline-flex font-semibold text-medical">
          Back to departments
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
      <Link href="/departments" className="text-sm font-semibold text-medical hover:text-medical-dark">
        Back to departments
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{department.name}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{department.description}</p>
      <div className="mt-9"><PagePhoto photo={departmentPhoto(department.slug)} priority compact /></div>
      <div className="mt-12 rounded-panel border border-line bg-mist p-7">
        <h2 className="text-2xl font-semibold text-ink">Services</h2>
        <ul className="mt-5 grid gap-3 text-slate-700">
          {department.services.map((service) => (
            <li key={service} className="rounded-xl bg-white px-4 py-4">{service}</li>
          ))}
        </ul>
      </div>
      <Link
        href="/book-appointment"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-medical px-6 font-semibold text-white hover:bg-medical-dark"
      >
        Book appointment
      </Link>
    </section>
  );
}
