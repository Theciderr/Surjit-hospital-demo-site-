"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { departments, doctors, hospital, testimonials } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const carePhotos = [
  { src: "/images/rehabilitation.jpg", alt: "Stock photograph of a physiotherapist helping with a leg exercise" },
  { src: "/images/womens-care.jpg", alt: "Stock photograph of a doctor consulting with an expectant mother" },
  { src: "/images/child-care.jpg", alt: "Stock photograph of a doctor examining a child" },
  { src: "/images/specialist-care.jpg", alt: "Stock photograph of a specialist discussing care with a patient" }
];
const Arrow = () => <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;

export function HospitalHome() {
  const root = useRef<HTMLDivElement>(null);
  const [specialty, setSpecialty] = useState(0);
  const [quote, setQuote] = useState(0);
  const [search, setSearch] = useState("");
  const aliases: Record<string, string> = { "bone": "ortho", "joint": "ortho", "child": "paediatrics", "baby": "paediatrics", "skin": "dermatology", "women": "gynaecology", "physio": "rehabilitation", "brain": "neurosurgery" };
  const query = search.trim().toLowerCase();
  const term = aliases[query] ?? query;
  const matches = doctors.filter(d => (d.name + d.department).toLowerCase().includes(term));
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
      gsap.from(".hero-copy > *", { y: 22, opacity: 0, stagger: .12, duration: .8, ease: "power2.out" });
      gsap.utils.toArray<HTMLElement>(".reveal-media").forEach(el => gsap.fromTo(el, { scale: .94 }, { scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "center center", scrub: true } }));
      gsap.utils.toArray<HTMLElement>(".chapter-heading").forEach(el => gsap.from(el, { y: 25, opacity: .2, duration: .7, scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" } }));
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className="hospital-home">
    <section className="hospital-hero">
      <div className="hero-copy site-container">
        <p className="eyebrow">Super speciality care · Landran, Mohali</p>
        <h1 className="mx-auto max-w-5xl">Specialist care.<br /><span>For your family.</span></h1>
        <p className="hero-description">Doctors for bone and joint problems, women’s health, children’s health and surgery. Visit us in Landran, Mohali.</p>
        <div className="hero-actions"><Link href="/book-appointment" className="button-primary">Request an appointment <Arrow /></Link><Link href="/doctors" className="button-secondary">Find your doctor <Arrow /></Link></div>
      </div>
      <div className="hero-image-wrap site-container">
        <div className="hero-photo-grid"><div className="hero-image reveal-media"><Image src={hospital.heroImage} alt="Front entrance of Dr. Surjit Singh Super Speciality Hospital" fill priority sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" /><div className="hero-image-shade" /><div className="hero-image-caption"><p>Here for Mohali.<br /><strong>Here for you.</strong></p><Link href="/contact">Plan your visit <Arrow /></Link></div></div>
        <figure className="hero-care-photo"><Image src="/images/consultation.jpg" alt="Stock photograph of a doctor reviewing notes during a consultation" fill sizes="(max-width: 767px) 100vw, 32vw" className="object-cover" /><figcaption><span>Start with a conversation.</span><Link href="/book-appointment">Request an appointment <Arrow /></Link><small>Illustrative stock photograph</small></figcaption></figure></div>
        <div className="patient-bar">
          <a href={`tel:${hospital.phone}`}><span className="service-symbol">+</span><span><small>Hospital open 24/7</small><strong>Call +91 78787 97960</strong></span><Arrow /></a>
          <Link href="/departments"><span className="service-symbol"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M4 21V5h16v16M8 5V2h8v3M1 21h22M9 21v-6h6v6M8 9h2m4 0h2M8 12h2m4 0h2" /></svg></span><span><small>Explore your options</small><strong>Find a department</strong></span><Arrow /></Link>
          <a href={hospital.mapLink} target="_blank" rel="noopener noreferrer"><span className="service-symbol"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></svg></span><span><small>Sector 94, Landran</small><strong>Get directions</strong></span><Arrow /></a>
        </div>
      </div>
    </section>

    <section className="site-container hospital-chapter" id="specialities">
      <div className="chapter-top"><div><p className="eyebrow">Specialities</p><h2 className="chapter-heading">Find the care<br /><span>you need.</span></h2></div><p>Choose a department to see its services. Not sure which doctor to consult? Call us for help.</p></div>
      <div className="specialty-grid">
        {departments.slice(0, 4).map((d, i) => <button key={d.slug} type="button" className={specialty === i ? "specialty-tab active" : "specialty-tab"} onClick={() => setSpecialty(i)} aria-pressed={specialty === i}><span className="specialty-photo"><Image src={carePhotos[i].src} alt={carePhotos[i].alt} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover" /></span><strong>{d.name}</strong><small className="specialty-help">{["Bones & joints", "Women’s health & pregnancy", "Children & newborns", "Brain & nerve surgery"][i]}</small><Arrow /></button>)}
      </div>
      <div className="specialty-detail" aria-live="polite"><div><p className="eyebrow">Department services</p><h3>{departments[specialty].name}</h3><p>{departments[specialty].description}</p><div className="service-tags">{departments[specialty].services.map(s => <span key={s}>{s}</span>)}</div></div><Link className="button-primary" href={`/departments/${departments[specialty].slug}`}>Explore department <Arrow /></Link></div>
      <p className="stock-photo-note">Department photographs are illustrative stock images, not photographs of this hospital or its staff.</p>
      <Link className="underlined-link" href="/departments">Explore all {departments.length} departments <Arrow /></Link>
    </section>

    <section className="doctor-section"><div className="site-container hospital-chapter">
      <div className="chapter-top"><div><p className="eyebrow">Our doctors</p><h2 className="chapter-heading">Meet our<br /><span>specialist doctors.</span></h2></div><div className="doctor-search"><label htmlFor="doctor-search">Search by doctor or speciality</label><input id="doctor-search" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctor or department" /></div></div>
      <div className="home-doctors">{matches.slice(0, 4).map(d => <article key={d.slug} className="home-doctor"><Link href={`/doctors/${d.slug}`} className="doctor-photo"><Image src={d.photo} alt={d.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" /></Link><div><p className="doctor-specialty">{d.department}</p><h3><Link href={`/doctors/${d.slug}`}>{d.name}</Link></h3><p className="doctor-qualification">{d.qualification}</p><Link className="underlined-link" href={`/book-appointment?doctor=${d.slug}`}>Request appointment <Arrow /></Link></div></article>)}</div>
      {matches.length === 0 && <p role="status" className="py-8">No doctors match this search. Try another name or call the hospital for help.</p>}
      <Link className="underlined-link" href="/doctors">View all doctors <Arrow /></Link>
    </div></section>

    <section className="site-container hospital-chapter hospital-story"><div className="story-image reveal-media"><Image src="/images/unnamed (1).jpg" alt="A view of the hospital facilities" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div><p className="eyebrow">Care closer to home</p><h2 className="chapter-heading">Healthcare for you<br /><span>and your family.</span></h2><p className="story-body">Visit our hospital in Landran, Mohali for specialist consultations, surgery and physiotherapy. For doctor timings, appointments or help with your visit, please call our team.</p><Link href="/about" className="underlined-link">Get to know the hospital <Arrow /></Link><div className="story-facts"><div><strong>24/7</strong><span>Hospital timings</span></div><div><strong>{departments.length}</strong><span>Departments</span></div><div><strong>{doctors.length}</strong><span>Doctors</span></div></div></div></section>

    <section className="patient-stories"><div className="site-container hospital-chapter"><p className="eyebrow">Patient experiences</p><div className="quote-layout"><div><h2 className="chapter-heading">What our<br /><span>patients say.</span></h2><Link href="/testimonials" className="underlined-link">Read patient stories <Arrow /></Link></div><div><blockquote key={quote} aria-live="polite"><p>“{testimonials[quote].text}”</p><cite>{testimonials[quote].name}</cite></blockquote><div className="quote-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setQuote((quote + testimonials.length - 1) % testimonials.length)}>←</button><span>{quote + 1} / {testimonials.length}</span><button type="button" aria-label="Next testimonial" onClick={() => setQuote((quote + 1) % testimonials.length)}>→</button></div></div></div></div></section>

    <section className="booking-banner"><div className="site-container"><p className="eyebrow">Let’s take the next step</p><h2 className="chapter-heading">Need an appointment?<br />We are here to help.</h2><div className="hero-actions"><Link href="/book-appointment" className="button-primary">Request an appointment <Arrow /></Link><a href={`tel:${hospital.phone}`} className="button-secondary">Call +91 78787 97960 <Arrow /></a></div><p className="booking-address">{hospital.address}</p></div></section>
  </div>;
}
