import aparnaImg from "@/assets/team/aparna.jpg";
import swatiImg from "@/assets/team/swati.jpg";
import prernaImg from "@/assets/team/prerna.jpg";

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
    expertise: ["Anxiety disorders", "Mood disorders", "ADHD", "Bipolar spectrum", "Integrative psychiatric care"],
    languages: ["English", "Hindi", "Bengali"],
    shortBio: "A psychiatrist whose practice is rooted in deep listening, integrative care and unhurried compassion.",
    bio: [
      "Dr. Aparna is the lead psychiatrist and co-founder of The Pause Room. Her clinical work blends evidence-based psychiatry with a deeply humane, integrative approach — one that honours the body, the story and the relationships that shape every person who arrives in her room.",
      "She works extensively with anxiety, mood disorders, ADHD and complex emotional difficulties, and is known for the calm, careful pace of her consultations. Medication, when prescribed, is always discussed openly and held within a wider plan of care.",
      "She believes psychiatric care should never feel cold or rushed — and built The Pause Room as the kind of space she always wished her patients had access to.",
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
  {
    slug: "prerna",
    name: "Prerna",
    role: "Child & Adolescent Psychologist",
    specialization: "Child Therapy, Assessments & Family Work",
    qualifications: ["M.A. (Clinical Psychology)", "Diploma in Child Psychology"],
    certifications: ["Play Therapy", "Child CBT", "SLD Assessment Certification"],
    experience: "7+ years",
    expertise: ["Child & adolescent therapy", "Psychological assessments", "Learning differences", "Parent guidance"],
    languages: ["English", "Hindi"],
    shortBio: "A child psychologist whose warmth makes therapy feel like the safest room in the house.",
    bio: [
      "Prerna brings a rare gentleness to her work with children, teens and families. She specialises in play therapy, child-friendly CBT and developmental assessments — including IQ, learning and behavioural evaluations.",
      "She works closely with parents and schools, translating clinical findings into compassionate, practical support that honours how each child actually learns and grows.",
      "Children describe her room as the place where they don't have to pretend to be okay.",
    ],
    photo: prernaImg,
  },
];

export const getTeamMember = (slug: string): TeamMember | undefined =>
  team.find((m) => m.slug === slug);
