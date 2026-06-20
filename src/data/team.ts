import aparnaImg from "@/assets/team/aparna.jpg";
import swatiImg from "@/assets/team/swati.jpg";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialization: string;
  qualifications: string[];
  certifications: string[];
  experience: string;
  expertise: string[];
  languages: string[];
  shortBio: string;
  bio: string[];
  photo: string;
};

export const team: TeamMember[] = [
  {
    slug: "aparna",
    name: "Dr. Aparna",
    role: "Lead Psychiatrist & Co-Founder",
    specialization: "Adult Psychiatry & Integrative Mental Health",
    qualifications: ["MBBS", "MD (Psychiatry)"],
    certifications: ["CBT Practitioner", "Trauma-Informed Care"],
    experience: "12+ years",
    expertise: ["Anxiety disorders", "Mood disorders", "ADHD", "Bipolar spectrum", "Integrative psychological care"],
    languages: ["English", "Hindi", "Bengali"],
    shortBio: "A psychiatrist whose practice is rooted in deep listening, integrative care and unhurried compassion.",
    bio: [
      "Dr. Aparna is the lead psychiatrist and co-founder of The Pause Room. Her clinical work blends evidence-based psychiatry with a deeply humane, integrative approach — one that honours the body, the story and the relationships that shape every person who arrives in her room.",
      "She works extensively with anxiety, mood disorders, ADHD and complex emotional difficulties, and is known for the calm, careful pace of her consultations. Medication, when prescribed, is always discussed openly and held within a wider plan of care.",
      "She believes psychological care should never feel cold or rushed — and built The Pause Room as the kind of space she always wished her patients had access to.",
    ],
    photo: aparnaImg,
  },
  {
    slug: "swati",
    name: "Swati",
    role: "Clinical Psychologist & Co-Founder",
    specialization: "Adult Psychotherapy & Trauma Work",
    qualifications: ["M.Phil (Clinical Psychology)", "RCI Licensed Clinical Psychologist"],
    certifications: ["EMDR Practitioner", "CBT", "Trauma Therapy Certification"],
    experience: "10+ years",
    expertise: ["Trauma & PTSD", "Anxiety", "Depression", "Relationship difficulties", "Self-development"],
    languages: ["English", "Hindi", "Marathi"],
    shortBio: "A clinical psychologist who holds her clients with steadiness, depth and quiet rigour.",
    bio: [
      "Swati is a clinical psychologist and co-founder of The Pause Room. Her work draws on a strong evidence base — CBT, EMDR, and trauma-informed somatic approaches — while remaining deeply relational and warm.",
      "She has spent the last decade working with adults navigating trauma, anxiety, depression and complex relational patterns, and is known for the safety and care she brings into the therapeutic space.",
      "Outside of sessions, Swati trains young therapists and quietly mentors the wider clinical team — bringing the same warmth to colleagues that she brings to clients.",
    ],
    photo: swatiImg,
  },
];

export const getTeamMember = (slug: string): TeamMember | undefined =>
  team.find((m) => m.slug === slug);
