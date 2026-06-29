import aparnaImg from "@/assets/team/Aparna_ma'am.jpeg";
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
    name: "Aparna Ladha Somani",
    role: "Founder & Clinical Psychologist",
    specialization: "Clinical Psychology · CRR Registered",
    qualifications: [
      "M.Phil. in Clinical Psychology — Amity University, Kolkata",
      "M.A. in Clinical Psychology — SNDT Women's University, Mumbai",
      "B.A. (Honours) in Psychology — Jai Hind College, Mumbai",
    ],
    certifications: [
      "Clinical Psychology & Cognitive Psychology — University of California, Berkeley",
      "Grief Therapy — Psychoshiksha (ICPEM Associated)",
    ],
    experience: "8+ years",
    expertise: [
      "Cognitive Behaviour Therapy (CBT)",
      "Acceptance & Commitment Therapy (ACT)",
      "Dialectical Behaviour Therapy (DBT)",
      "Gestalt Therapy",
      "Mindfulness-Based Therapy",
      "Behaviour Modification",
      "Psychometric Assessments",
      "ADHD & Autism Assessments",
      "Personality & IQ Assessments",
      "Anxiety, Depression & Stress Management",
      "Child & Adolescent Mental Health",
    ],
    languages: ["English", "Hindi", "Bengali"],
    shortBio: "A clinical psychologist whose work is rooted in evidence-based care, compassion and meaningful change.",
    bio: [
      "Aparna Ladha Somani is the Founder of The Pause Room and a Clinical Psychologist (CRR Registered) with over 8 years of experience in psychological assessment, psychotherapy, counselling, and rehabilitation.",
      "She specializes in providing evidence-based mental health care for children, adolescents, and adults, combining clinical expertise with a compassionate, person-centred approach.",
      "Her work spans hospitals, rehabilitation centres, corporate wellness programs, and private practice, with a focus on helping individuals build resilience, emotional well-being, and meaningful change.",
    ],
    photo: aparnaImg,
  },
  {
    slug: "swati",
    name: "Swati Periwal",
    role: "Clinical Psychologist",
    specialization: "Child, Adolescent & Adult Mental Health",
    qualifications: [
      "M.Sc. in Psychology (Clinical Specialization) — Mount Carmel College, Bengaluru",
      "B.A. in Journalism, English & Psychology — Bangalore University · Indian Institute of Psychology & Research",
    ],
    certifications: [
      "NLP — Emotional Intelligence & Leadership Skills",
      "Advanced Handwriting Analysis",
      "Dream Analysis",
      "Drawing Analysis",
    ],
    experience: "",
    expertise: [
      "Psychological Counselling",
      "Psychometric Assessments",
      "Child & Adolescent Mental Health",
      "Attention & Social Skills Training",
      "Anxiety & Stress Management",
      "Emotional Regulation",
      "Anger Management",
      "Learning Disabilities",
      "Behavioural Interventions",
      "Mental Health Workshops",
    ],
    languages: ["English", "Hindi"],
    shortBio: "A clinical psychology professional dedicated to creating safe, empathetic spaces for emotional growth and resilience.",
    bio: [
      "Swati Periwal is a Clinical Psychology professional dedicated to supporting the emotional well-being of children, adolescents, and adults.",
      "She has experience in psychological assessments, counselling, psychometric testing, and mental health workshops across hospitals, rehabilitation centres, and clinical settings.",
      "She believes in creating a safe, empathetic space where individuals can build resilience, develop healthy coping strategies, and work towards lasting emotional growth.",
    ],
    photo: swatiImg,
  },
];

export const getTeamMember = (slug: string): TeamMember | undefined =>
  team.find((m) => m.slug === slug);
