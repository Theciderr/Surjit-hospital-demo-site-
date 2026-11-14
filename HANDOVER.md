# Dr. Surjit Singh Super Speciality Hospital

## Project

Next.js 14 App Router website using TypeScript and Tailwind CSS.

Run locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production verification:

```bash
npm run build
```

The latest production build passes successfully and generates 36 routes.

## Current design direction

The site was redesigned using the following hospital websites as visual references:

- https://hilltophospitalkharar.com/
- https://www.highlandhospitalkharar.com/
- https://clearmedi.in/hospital/clearmedi-bahra-multispeciality-hospital-mohali

Do not copy their text, branding, or proprietary assets. The current design uses:

- Navy, teal, white, and pale medical-blue palette
- Utility strip with 24/7 status and emergency phone
- Image-led asymmetric hero
- Appointment and phone CTAs
- Stats, mission/vision, departments, doctors, testimonials, gallery, location
- Mobile-first navigation and visible focus states

## Important files

- `app/page.tsx`: redesigned homepage
- `app/layout.tsx`: global metadata, Hospital JSON-LD, optional GA
- `app/about/page.tsx`: hospital story, mission, vision, infrastructure
- `app/departments/page.tsx`: departments listing
- `app/departments/[slug]/page.tsx`: department detail pages
- `app/doctors/page.tsx`: doctor listing
- `app/doctors/[slug]/page.tsx`: doctor detail pages
- `app/gallery/page.tsx`: image gallery
- `app/testimonials/page.tsx`: testimonials page
- `app/book-appointment/page.tsx`: appointment form
- `app/contact/page.tsx`: contact page and map
- `app/api/appointments/route.ts`: appointment POST endpoint
- `components/header.tsx`: utility bar, navigation, mobile menu
- `components/footer.tsx`: footer
- `components/gallery-lightbox.tsx`: accessible gallery lightbox
- `data/site.ts`: central hospital, department, doctor, testimonial, and gallery data
- `public/images/logo.png`: logo cropped from the supplied hospital sign image

## Source-of-truth client details

Keep these client-provided details unless the client explicitly changes them:

- Hospital: Dr. Surjit Singh Super Specialty Hospital
- Address: Sector 94, Sahibzada Ajit Singh Nagar, Landran, Mohali-140307, Punjab
- Phone / WhatsApp / emergency: `+917878797960`
- Timings: `24/7`
- Email: not available
- Google Maps link: stored in `data/site.ts`

The official public website showed different Ropar contact details. The client-provided Mohali address and phone were intentionally kept as authoritative.

## Current content state

Verified public information from the hospital website has been added:

- Hospital story
- Mission and vision
- 100-bed and 1.2-acre claims
- Departments and services
- Publicly listed doctors and qualifications
- Public doctor image URLs

The following doctor fields are intentionally example content and must be replaced before launch:

```text
Example: 10+ years (replace with verified figure)
```

OPD days currently show `Monday to Sunday` per client instruction.

Testimonials were transcribed from the three screenshots supplied by the client. Do not rewrite them into new medical claims.

## Production follow-ups

1. Replace example doctor experience values with verified figures.
2. Confirm that all online doctor photo URLs remain available, or download approved copies into `public/images`.
3. Connect `app/api/appointments/route.ts` to email, Formspree, or another approved submission service. It currently logs the request and returns success.
4. Replace `https://example.com` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the final domain.
5. Add `NEXT_PUBLIC_GA_ID` only when the client provides the real Analytics ID.
6. Confirm the long Google Maps URL still embeds correctly. The current Google page may block iframe rendering; use an approved embed URL if needed.
7. Review the official remote image usage and obtain permission or use locally supplied/approved assets.
8. Re-run:

```bash
npm run build
```

## Guardrails

- Do not invent doctor qualifications, experience, awards, outcomes, statistics, or testimonials.
- Keep missing client data visibly marked or use an explicit unavailable state.
- Preserve the client-provided phone and Mohali address unless confirmed otherwise.
- Keep `next/image` for all images and retain meaningful alt text.
- Maintain mobile layout, keyboard focus states, and reduced-motion-safe behavior.
- Do not commit credentials, API keys, or email service secrets.
