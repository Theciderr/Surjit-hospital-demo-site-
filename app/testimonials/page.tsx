import type { Metadata } from "next";
import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import { testimonials, hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Patient testimonials for ${hospital.name}.`
};

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="testimonial-intro">
        <div><p className="eyebrow">Patient experiences</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Patient testimonials</h1><p className="mt-6 max-w-lg leading-8 text-slate-600">Read the experiences shared by patients and their families.</p></div>
        <PagePhoto photo={pagePhotos.hospital} priority />
      </div>
      {testimonials.length === 0 ? <p className="mt-6 max-w-xl leading-7 text-slate-600">No testimonials have been supplied yet.</p> : <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((testimonial) => <blockquote key={testimonial.name} className="rounded-panel border border-line bg-mist p-6 text-slate-700">“{testimonial.text}”<cite className="mt-4 block text-sm font-semibold not-italic text-ink">{testimonial.name}</cite></blockquote>)}</div>}
    </section>
  );
}
