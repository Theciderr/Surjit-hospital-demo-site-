import Link from "next/link";
import { hospital } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:px-10">
        <div>
          <p className="max-w-md text-2xl font-semibold leading-8">Care that feels close to home.</p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{hospital.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">{hospital.address}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-200">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/departments" className="hover:text-white">Departments</Link>
            <Link href="/doctors" className="hover:text-white">Doctors</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/book-appointment" className="hover:text-white">Request an appointment</Link>
            <Link href="/gallery" className="hover:text-white">Hospital gallery</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-200">Contact</p>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
            <a href={`tel:${hospital.phone}`} className="hover:text-white">{hospital.phone}</a>
            <p>Email: {hospital.email}</p>
            <p>Timings: {hospital.timings}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} {hospital.name}</span>
          <span>Appointments and emergency calls: {hospital.phone}</span>
        </div>
      </div>
    </footer>
  );
}
