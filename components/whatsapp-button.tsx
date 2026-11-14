import { hospital } from "@/data/site";
import Link from "next/link";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello, I would like to know more about ${hospital.name}.`
  );

  return (
    <>
    <nav className="mobile-care-bar" aria-label="Quick contact">
      <a href={`tel:${hospital.phone}`}>Call hospital</a>
      <Link href="/book-appointment">Appointment</Link>
    </nav>
    <a
      href={`https://wa.me/${hospital.whatsapp.replace(/\D/g, "")}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with the hospital on WhatsApp"
      className="floating-whatsapp fixed bottom-5 right-5 z-20 grid min-h-12 place-items-center rounded-full bg-[#167442] px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#125f36] active:scale-95"
    >
      WhatsApp
    </a>
    </>
  );
}
