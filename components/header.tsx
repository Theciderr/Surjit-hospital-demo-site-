"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { hospital } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book-appointment", label: "Appointments" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    function closeMenu(event: KeyboardEvent) { if (event.key === "Escape") setMenuOpen(false); }
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="bg-ink text-white">
        <div className="mx-auto flex min-h-9 max-w-[1440px] items-center justify-between gap-4 px-5 text-[11px] font-semibold tracking-wide sm:px-8 lg:px-14">
          <p className="hidden sm:block">Landran, Mohali · Open 24/7</p>
          <a href={`tel:${hospital.phone}`} className="shrink-0 text-teal-200 hover:text-white">Emergency: +91 78787 97960</a>
        </div>
      </div>
      <div className="hospital-header-main mx-auto flex min-h-[96px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="hospital-brand flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image src="/images/hospital-symbol.png" alt="Hospital logo" width={64} height={76} priority className="hospital-brand-logo h-[76px] w-16 shrink-0 object-contain" />
          <span className="brand-name">Dr. Surjit Singh<span>Super Speciality Hospital</span></span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              className="text-[13px] font-semibold text-slate-600 transition hover:text-medical"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${hospital.phone}`}
            className="hidden min-h-11 items-center justify-center border border-medical px-4 text-sm font-semibold text-medical transition hover:bg-mist active:scale-[0.98] sm:inline-flex"
          >
            Call hospital
          </a>
          <Link href="/book-appointment" className="hidden min-h-11 items-center justify-center bg-medical px-5 text-sm font-semibold text-white transition hover:bg-medical-dark active:scale-[0.98] md:inline-flex">
            Book appointment
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center border border-line text-ink xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true"><span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} /><span className={`absolute left-0 top-2 h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 h-px w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} /></span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" className="max-h-[70dvh] overflow-y-auto border-t border-line bg-white px-5 py-4 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-medium text-ink hover:bg-mist"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${hospital.phone}`} className="mt-2 rounded-lg border border-medical px-3 py-3 text-center font-semibold text-medical">Call hospital</a>
            <Link href="/book-appointment" className="rounded-lg bg-medical px-3 py-3 text-center font-semibold text-white" onClick={() => setMenuOpen(false)}>Book appointment</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
