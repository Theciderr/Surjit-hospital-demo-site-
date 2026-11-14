export type HospitalInfo = {
  name: string;
  city: string;
  address: string;
  phone: string;
  emergencyPhone: string;
  whatsapp: string;
  email: string;
  timings: string;
  emergencyAvailable: string;
  tagline: string;
  story: string;
  mission: string;
  vision: string;
  infrastructure: string;
  heroImage: string;
  logo: string;
  mapLink: string;
};

export type Department = {
  name: string;
  slug: string;
  description: string;
  services: string[];
};

export type Doctor = {
  name: string;
  slug: string;
  qualification: string;
  department: string;
  experience: string;
  opdDays: string;
  photo: string;
};

export type Testimonial = {
  name: string;
  text: string;
};

export const hospital: HospitalInfo = {
  name: "Dr. Surjit Singh Super Specialty Hospital",
  city: "Mohali",
  address:
    "Sector 94, Sahibzada Ajit Singh Nagar, Landran, Mohali-140307, Punjab",
  phone: "+917878797960",
  emergencyPhone: "+917878797960",
  whatsapp: "+917878797960",
  email: "Not available",
  timings: "24/7",
  emergencyAvailable: "Same contact number",
  tagline:
    "Specialist care for orthopaedics, surgery, women’s health, children’s care and rehabilitation.",
  story:
    "The hospital website describes Dr. Surjit Singh Super Speciality Hospital as a 100-bedded hospital spread over 1.2 acres, with services across orthopaedics, women’s health, children’s care, neurosurgery, general and laparoscopic surgery, plastic surgery, dermatology and physical rehabilitation.",
  mission:
    "To serve healthcare of international standards within the reach of every individual.",
  vision:
    "To bring high standards of expertise and skill, using recent techniques and making their benefits available at an affordable rate.",
  infrastructure:
    "The official hospital information describes a 100-bedded facility spread over 1.2 acres, with state-of-the-art equipment and a focus on personalised, comprehensive healthcare.",
  heroImage: "/images/unnamed.jpg",
  logo: "/images/hospital-symbol.png",
  mapLink:
    "https://maps.google.com/maps?rlz=1C1RXQR_enIN1218IN1218&sca_esv=df679996c20fc648&udm&fvr=1&pvq=Cg0vZy8xMXk0ZDNkdmptIiYKIGRyIHN1cmppdCBzaW5naCBzdXBlciBzcGVjaWFsaXR5EAIYA4kBxuB0oOQnbtI&lqi=CiBkciBzdXJqaXQgc2luZ2ggc3VwZXIgc3BlY2lhbGl0eUiT1NnBkb2AgAhaNhAAEAEQAhADEAQYABgBGAIYAxgEIiBkciBzdXJqaXQgc2luZ2ggc3VwZXIgc3BlY2lhbGl0eZIBEm9ydGhvcGVkaWNfc3VyZ2Vvbg&vet=10CAAQoqAOahcKEwjggZHZtIeYAxUAAAAAHQAAAAAQCQ..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390fef68ba7d78dd:0xd26e27e4a074e0c6"
};

export const departments: Department[] = [
  {
    name: "Orthopaedics",
    slug: "orthopaedics",
    description: "Orthopaedic surgery and joint care.",
    services: ["Arthroplasty", "Arthroscopy", "Knee care", "Joint replacement surgery", "Shoulder replacement"]
  },
  {
    name: "Obstetrics and Gynaecology",
    slug: "obstetrics-and-gynaecology",
    description: "Obstetrics and gynaecology care.",
    services: ["Obstetrics and gynaecology"]
  },
  {
    name: "Paediatrics and Neonatology",
    slug: "paediatrics-and-neonatology",
    description: "Care for children and newborns.",
    services: ["Paediatrics and neonatology"]
  },
  {
    name: "Neurosurgery",
    slug: "neurosurgery",
    description: "Neurosurgery services.",
    services: ["Neurosurgery"]
  },
  {
    name: "General and Laparoscopic Surgery",
    slug: "general-and-laparoscopic-surgery",
    description: "General and laparoscopic surgery services.",
    services: ["General surgery", "Laparoscopic surgery"]
  },
  {
    name: "Plastic Surgery and Cosmetology",
    slug: "plastic-surgery-and-cosmetology",
    description: "Plastic, reconstructive and cosmetology services.",
    services: ["Plastic surgery", "Reconstructive surgery", "Micro-vascular surgery", "Cosmetology"]
  },
  {
    name: "Dermatology and Cosmetology",
    slug: "dermatology-and-cosmetology",
    description: "Dermatology and cosmetology care.",
    services: ["Dermatology", "Cosmetology"]
  },
  {
    name: "Physical Rehabilitation",
    slug: "physical-rehabilitation",
    description: "Physical rehabilitation services.",
    services: ["Physical rehabilitation", "Physiotherapy"]
  },
  {
    name: "Blood Bank",
    slug: "blood-bank",
    description: "Blood bank services listed by the hospital.",
    services: ["Blood bank"]
  },
  {
    name: "Intensive Care Unit",
    slug: "intensive-care-unit",
    description: "Intensive care services listed by the hospital.",
    services: ["Intensive care unit"]
  }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Surjit Singh",
    slug: "dr-surjit-singh",
    qualification: "M.S (Ortho)",
    department: "Orthopaedic surgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/1982d008-9fc0-4fe7-bbb0-431c695e2b01.jpeg"
  },
  {
    name: "Dr. Sirpuneet Singh",
    slug: "dr-sirpuneet-singh",
    qualification: "M.S (Ortho)",
    department: "Orthopaedic surgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/fff1104f-7f95-4d6f-a59e-a80535c2d243.jpeg"
  },
  {
    name: "Dr. Karmesh Kumar",
    slug: "dr-karmesh-kumar",
    qualification: "M.S (Ortho)",
    department: "Orthopaedic surgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/e5dae0f7-b5b4-463f-bf1f-81c5e0688dc4.jpeg"
  },
  {
    name: "Dr. Siddharth Aggarwal",
    slug: "dr-siddharth-aggarwal",
    qualification: "M.S, M.Ch (Ortho)",
    department: "Orthopaedic surgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/c6bc76aa-899a-446a-a695-da34ce5214e4.jpeg"
  },
  {
    name: "Dr. Harinder Kaur",
    slug: "dr-harinder-kaur",
    qualification: "M.S (Gynae)",
    department: "Obstetrics and Gynaecology",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/7139b842-4074-4b82-bcc3-e2adecbcf94e.jpeg"
  },
  {
    name: "Dr. Prabhneet Kaur",
    slug: "dr-prabhneet-kaur",
    qualification: "M.S (Gynae)",
    department: "Obstetrics and Gynaecology",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/5d60b299-03ca-45a4-9fe6-499e16a61b79.jpeg"
  },
  {
    name: "Dr. Jagdeep Chaudhary",
    slug: "dr-jagdeep-chaudhary",
    qualification: "M.S. (Surgery)",
    department: "General and Laparoscopic Surgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/b92d2195-35ea-4d27-8039-984060e7af4a.jpeg"
  },
  {
    name: "Dr. Navjot Singh",
    slug: "dr-navjot-singh",
    qualification: "M.S., M.Ch. (Plastic surgery)",
    department: "Plastic Surgery and Cosmetology",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/a2d26812-2d20-4308-8a2c-2a2c9c18c511.jpeg"
  },
  {
    name: "Dr. Monica Kalia",
    slug: "dr-monica-kalia",
    qualification: "FMC (Germany), M.Sc. (USA)",
    department: "Dermatology and Cosmetology",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2025/01/IMG-20250125-WA0103-e1737803730748.jpg"
  },
  {
    name: "Dr. Ajay Singh",
    slug: "dr-ajay-singh",
    qualification: "M.S, M.Ch (Neurosurgery)",
    department: "Neurosurgery",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/10/884102bb-f58a-48cf-ae63-8df02a2f3175.jpeg"
  },
  {
    name: "Dr. Mankirat Singh",
    slug: "dr-mankirat-singh",
    qualification: "B.P.T, M.P.T (Ortho) M.I.A.P",
    department: "Physical Rehabilitation",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2023/12/WhatsApp-Image-2025-01-23-at-11.49.18_c04b6e3e.jpg"
  },
  {
    name: "Dr. Harbhajan Singh",
    slug: "dr-harbhajan-singh",
    qualification: "DCH (paediatrics)",
    department: "Paediatrics and Neonatology",
    experience: "Example: 10+ years (replace with verified figure)",
    opdDays: "Monday to Sunday",
    photo: "https://surjitsuperspecialityhospital.in/wp-content/uploads/2025/01/IMG-20250125-WA0105-e1737803912880.jpg"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Adv gurvinder Dhillon",
    text:
      "I had my shoulder surgery done at Dr. Surjit Singh Super Speciality Hospital, and my experience was excellent. The doctor is highly experienced and performed the surgery exceptionally well. The nursing staff is very caring, cooperative, and supportive. The cleanliness and overall management of the hospital are top-notch. I highly recommend this hospital for any shoulder or orthopedic treatments."
  },
  {
    name: "Tanudeep Singh",
    text:
      "I am extremely grateful to Dr. Surjit Singh, Dr. VishalPreet Singh, and the entire team at Dr. Surjit Singh Super Speciality Hospital for the exceptional care they provided during my grandmother’s hip replacement surgery in age of 90yr, which was an extremely high-risk surgery given her age and the fact that her heart function was at only 40%"
  },
  {
    name: "jashan goyal",
    text:
      "Went to this hospital for seasonal allergy. They gave me eye drops which works well. Now eyes redness is reducing"
  }
];

export const facilities = [
  "100-bedded hospital",
  "State-of-the-art equipment",
  "Orthopaedics",
  "Obstetrics and gynaecology",
  "Paediatrics and neonatology",
  "Neurosurgery",
  "General and laparoscopic surgery",
  "Plastic surgery and cosmetology",
  "Dermatology and cosmetology",
  "Physical rehabilitation",
  "Blood bank",
  "Intensive care unit"
];

export const gallery = [
  "/images/unnamed.jpg",
  "/images/unnamed (1).jpg",
  "/images/unnamed (2).jpg",
  "/images/unnamed (3).jpg",
  "/images/unnamed (4).jpg",
  "/images/Screenshot 2026-11-14 173703.png",
  "/images/Screenshot 2026-11-14 173734.png",
  "/images/Screenshot 2026-11-14 173748.png",
  "/images/Screenshot 2026-11-14 180101.png"
];
