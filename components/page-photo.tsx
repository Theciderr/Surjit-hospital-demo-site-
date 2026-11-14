import Image from "next/image";
import type { PagePhoto as Photo } from "@/data/imagery";

export function PagePhoto({ photo, priority = false, compact = false }: { photo: Photo; priority?: boolean; compact?: boolean }) {
  return <figure className={compact ? "page-photo page-photo-compact" : "page-photo"}>
    <div className="page-photo-image"><Image src={photo.src} alt={(photo.stock ? "Illustrative stock photograph: " : "") + photo.alt} fill priority={priority} sizes={compact ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 1023px) 100vw, 45vw"} className="object-cover" /></div>
    {photo.stock && <figcaption>Illustrative photograph · Not hospital staff, patients or facilities</figcaption>}
  </figure>;
}
