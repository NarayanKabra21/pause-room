import aparnaImg from "@/assets/team/aparna.jpg";
import swatiImg from "@/assets/team/swati.jpg";
import prernaImg from "@/assets/team/prerna.jpg";
import familyImg from "@/assets/team/family.jpg";
import relImg from "@/assets/team/relationship.jpg";
import wellImg from "@/assets/team/wellness.jpg";

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
  {
    slug: "ramesh-kumar",
    name: "Dr. Ramesh Kumar",
    role: "Family Therapist",
    specialization: "Family Systems & Couples Therapy",
    qualifications: ["PhD (Family Therapy)", "M.A. (Counselling Psychology)"],
    certifications: ["Gottman Method Level 2", "Systemic Family Therapy"],
    experience: "15+ years",
    expertise: ["Couples therapy", "Family systems", "Co-parenting", "Inter-generational patterns"],
    languages: ["English", "Hindi", "Tamil"],
    shortBio: "A family therapist who sees relationships as living systems worth tending with patience.",
    bio: [
      "Dr. Ramesh has spent over fifteen years helping families and couples find their way back to each other. His work blends systemic family therapy with the Gottman Method, offering structure without ever losing warmth.",
      "He is particularly skilled with co-parenting after separation, inter-generational difficulties, and couples navigating ruptures of trust.",
      "His sessions are known for their steady neutrality — never taking sides, always seeking the truth that lives between people.",
    ],
    photo: familyImg,
  },
  {
    slug: "ananya-rao",
    name: "Ananya Rao",
    role: "Relationship Counsellor",
    specialization: "Couples Work & Emotional Connection",
    qualifications: ["M.A. (Counselling Psychology)"],
    certifications: ["Emotionally Focused Therapy", "Attachment-Based Couples Work"],
    experience: "8+ years",
    expertise: ["Couples therapy", "Pre-marital counselling", "Attachment & intimacy", "Communication patterns"],
    languages: ["English", "Hindi", "Telugu"],
    shortBio: "A relationship counsellor whose room makes hard conversations feel possible.",
    bio: [
      "Ananya works primarily with couples and pre-married partners, using Emotionally Focused Therapy and attachment-based approaches to rebuild safety, intimacy and honest dialogue.",
      "She has a particular gift for slowing down reactive cycles in real time — helping partners hear each other beneath the noise of long-held hurt.",
      "Her sessions are warm, structured, and quietly hopeful.",
    ],
    photo: relImg,
  },
  {
    slug: "meera-jain",
    name: "Meera Jain",
    role: "Mental Wellness Coach",
    specialization: "Workshops, Wellness & Emotional Resilience",
    qualifications: ["M.A. (Applied Psychology)", "PG Diploma (Mindfulness-Based Therapy)"],
    certifications: ["Certified Mindfulness Teacher", "Positive Psychology Coach"],
    experience: "6+ years",
    expertise: ["Workshop facilitation", "Mindfulness", "Stress & burnout", "Women's wellness"],
    languages: ["English", "Hindi"],
    shortBio: "A wellness coach who turns psychology into rituals you can carry home.",
    bio: [
      "Meera leads workshops, group programmes and one-on-one wellness coaching at The Pause Room. Her work bridges psychological depth and everyday practicality — designed for people who don't (yet) want or need therapy.",
      "She specialises in mindfulness-based approaches, stress recovery and women's wellness, and is the steady force behind many of our community seminars and workplace sessions.",
      "Her work answers a simple question: what would it look like to feel a little better tomorrow than you did today?",
    ],
    photo: wellImg,
  },
];

export const getTeamMember = (slug: string): TeamMember | undefined =>
  team.find((m) => m.slug === slug);
