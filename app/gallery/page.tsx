import { PagePhoto } from "@/components/page-photo";
import { pagePhotos } from "@/data/imagery";
import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { gallery, hospital } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `View images from ${hospital.name}.`
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-mist">
        <div className="inner-page-hero mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-medical">Gallery</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            A look inside the hospital.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Select an image to view it larger.
          </p>
        </div><PagePhoto photo={pagePhotos.hospital} priority /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <GalleryLightbox images={gallery} />
      </section>
    </div>
  );
}
