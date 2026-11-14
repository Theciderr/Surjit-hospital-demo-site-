export type PagePhoto = { src: string; alt: string; stock?: boolean };

export const pagePhotos = {
  hospital: { src: "/images/unnamed.jpg", alt: "Front entrance of Dr. Surjit Singh Super Speciality Hospital" },
  consultation: { src: "/images/consultation.jpg", alt: "A doctor reviewing notes during a consultation", stock: true },
  orthopaedics: { src: "/images/rehabilitation.jpg", alt: "A physiotherapist assisting with a leg exercise", stock: true },
  women: { src: "/images/womens-care.jpg", alt: "A doctor discussing care with an expectant mother", stock: true },
  children: { src: "/images/child-care.jpg", alt: "A doctor examining a child with a stethoscope", stock: true },
  neuro: { src: "/images/specialist-care.jpg", alt: "A specialist discussing care with a patient near diagnostic equipment", stock: true },
  surgery: { src: "/images/surgery-care.jpg", alt: "A surgical team at work in an operating theatre", stock: true },
  skin: { src: "/images/skin-care.jpg", alt: "A clinician performing a skin treatment", stock: true },
  blood: { src: "/images/blood-bank.jpg", alt: "Labelled blood bags for blood bank services", stock: true },
  intensive: { src: "/images/intensive-care.jpg", alt: "A patient receiving oxygen support in hospital", stock: true }
} satisfies Record<string, PagePhoto>;

const departmentPhotos: Record<string, PagePhoto> = {
  orthopaedics: pagePhotos.orthopaedics,
  "obstetrics-and-gynaecology": pagePhotos.women,
  "paediatrics-and-neonatology": pagePhotos.children,
  neurosurgery: pagePhotos.neuro,
  "general-and-laparoscopic-surgery": pagePhotos.surgery,
  "plastic-surgery-and-cosmetology": pagePhotos.surgery,
  "dermatology-and-cosmetology": pagePhotos.skin,
  "physical-rehabilitation": pagePhotos.orthopaedics,
  "blood-bank": pagePhotos.blood,
  "intensive-care-unit": pagePhotos.intensive
};

export function departmentPhoto(slug: string): PagePhoto {
  return departmentPhotos[slug] ?? pagePhotos.consultation;
}
