import { PagePhoto } from "@/components/page-photo";
import { pagePhotos, departmentPhoto } from "@/data/imagery";
import type { Metadata } from "next";
import Link from "next/link";
import { departments, hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "Departments",
  description: `Explore departments at ${hospital.name}.`
};

export default function DepartmentsPage() {
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">Departments</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Find the right place to start.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore care for bones and joints, women and children, surgery, rehabilitation and more. Select a department to view its services.
          </p>
        </div><PagePhoto photo={pagePhotos.consultation} priority /></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          {departments.map((department) => (
            <article key={department.slug} className="rounded-panel border border-line bg-white p-7 shadow-soft">
              <PagePhoto photo={departmentPhoto(department.slug)} compact />
              <h2 className="mt-6 text-2xl font-semibold text-ink">{department.name}</h2>
              <p className="mt-4 leading-7 text-slate-600">{department.description}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-ink">Services</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                  {department.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/departments/${department.slug}`}
                className="mt-7 inline-flex font-semibold text-medical hover:text-medical-dark"
              >
                View department
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
