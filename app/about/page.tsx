import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import type { Metadata } from "next";
import { facilities, hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${hospital.name}.`
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">About the hospital</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">About the hospital</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{hospital.story}</p>
        </div><PagePhoto photo={pagePhotos.hospital} priority /></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <PagePhoto photo={{ src: "/images/unnamed (1).jpg", alt: "View of hospital facilities" }} compact />
          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-ink">Our vision</h2>
          <p className="mt-5 leading-7 text-slate-600">{hospital.vision}</p>
        </div>
        <div className="rounded-panel border border-line bg-white p-7 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">Facilities</h2>
          <ul className="mt-6 grid gap-3">
            {facilities.map((facility) => (
              <li key={facility} className="rounded-xl bg-mist px-4 py-4 text-slate-700">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Infrastructure</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">{hospital.infrastructure}</p>
          <h2 className="mt-10 text-3xl font-semibold tracking-tight text-ink">Mission</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">{hospital.mission}</p>
        </div>
      </section>
    </div>
  );
}
