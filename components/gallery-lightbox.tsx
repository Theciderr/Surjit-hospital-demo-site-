"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryLightboxProps = {
  images: string[];
};

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className="group overflow-hidden rounded-panel border border-line bg-mist text-left focus-visible:outline-offset-4"
            onClick={() => setActiveImage(image)}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Hospital gallery image ${index + 1}`}
              width={900}
              height={600}
              className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-40 grid place-items-center bg-ink/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90dvh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage}
              alt="Expanded hospital gallery image"
              width={1600}
              height={1000}
              className="max-h-[80dvh] w-full rounded-panel object-contain"
              sizes="100vw"
            />
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-2 top-2 grid size-11 place-items-center rounded-full bg-white text-2xl text-ink"
              aria-label="Close expanded image"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
