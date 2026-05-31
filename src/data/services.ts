import {
  Brain, Compass, ClipboardList, Activity, Lightbulb, BookOpen,
  Baby, User, Briefcase, Heart, Wrench, Users, UsersRound,
  Target, MessageCircle, GraduationCap, Presentation, Sparkles,
  type LucideIcon,
} from "lucide-react";

import individualImg from "@/assets/services/individual-therapy.jpg";
import anxietyImg from "@/assets/services/anxiety-stress.jpg";
import relationshipImg from "@/assets/services/relationship.jpg";
import depressionImg from "@/assets/services/depression.jpg";
import traumaImg from "@/assets/services/trauma.jpg";
import studentImg from "@/assets/services/student.jpg";
import burnoutImg from "@/assets/services/burnout.jpg";
import onlineImg from "@/assets/services/online.jpg";
import natureImg from "@/assets/about-nature.jpg";
import lakeImg from "@/assets/hero-lake.jpg";
import roomImg from "@/assets/hero-room.jpg";

export type ServiceCategory = "Assessments" | "Therapy" | "Classes & Events";

export type ServiceDetailSection = {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  sideQuote?: string;
};

export type ServiceDetail = {
  heroImage: string;
  heroAlt: string;
  tagline: string;
  openingQuote: string;
  openingQuoteAuthor: string;
  sections: ServiceDetailSection[];
  closingStatement: string;
  closingQuote: string;
  closingQuoteAuthor: string;
};

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  card: string;
  hero: string;
  tagline: string;
  headline: string;
  intro: string;
  story: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  forWho: string[];
  expectations: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string };
  detail?: ServiceDetail;
};

// Shared, gentle defaults so each service still feels complete.
const sharedExpectations = [
  { title: "Held, unhurried sessions", desc: "We move at the pace your inner world needs — never the clock's." },
  { title: "Warm, private setting", desc: "In-person at our studio or in our online sanctuary." },
  { title: "Care without jargon", desc: "Honest human conversation, supported by clinical expertise." },
];

const sharedFaqs = [
  { q: "How do I begin?", a: "Reach out through our contact form, phone or email. We'll guide you through a gentle first conversation." },
  { q: "Is everything confidential?", a: "Yes. What you share stays within our therapeutic walls, with rare safety-related exceptions." },
  { q: "Can sessions be online?", a: "Yes. Online sessions are designed to feel just as warm and grounded as in-person." },
];

export const services: Service[] = [
  // ====== ASSESSMENTS ======
  {
    slug: "career-assessment",
    title: "Career & Aptitude Assessment",
    category: "Assessments",
    icon: Compass,
    card: "Discover the work that fits who you truly are.",
    hero: natureImg,
    tagline: "Direction, drawn from your own strengths.",
    headline: "Find a path that quietly matches you.",
    intro:
      "Career assessments at The Pause Room evaluate your aptitudes, abilities, and interests to identify the careers best suited to your strengths and preferences.",
    story:
      "Whether you're a student standing at a crossroads or a professional seeking change, we use scientifically validated tools to map your inner world of skills, motivations and values — and translate them into clear, grounded direction.",
    benefits: [
      { title: "Clarity of fit", desc: "Understand which environments and roles you naturally thrive in." },
      { title: "Confidence in choice", desc: "Make academic and career decisions with calm certainty." },
      { title: "Strengths-based view", desc: "See yourself through what you do well, not what you lack." },
      { title: "Future direction", desc: "A roadmap of paths shaped around who you already are." },
    ],
    process: [
      { step: "01", title: "Intake conversation", desc: "We understand your stage of life and what you hope to clarify." },
      { step: "02", title: "Standardised testing", desc: "Validated aptitude, interest and personality inventories." },
      { step: "03", title: "Detailed analysis", desc: "Your responses are interpreted by a trained psychologist." },
      { step: "04", title: "Insight session", desc: "A warm debrief with personalised, practical recommendations." },
    ],
    forWho: [
      "Students choosing streams, colleges or majors",
      "Young adults exploring early career paths",
      "Professionals considering a change of direction",
      "Parents seeking informed guidance for their child",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "For the first time, my choices felt like mine — not borrowed from anyone else.", author: "Aarav, 18" },
  },
  {
    slug: "personality-profile",
    title: "Personality Profiling",
    category: "Assessments",
    icon: User,
    card: "Understand your patterns, temperament and traits.",
    hero: individualImg,
    tagline: "Meet yourself, more fully.",
    headline: "A quieter, more honest mirror.",
    intro:
      "Personality profiling explores enduring traits, emotional patterns, temperament, and behavioural tendencies that shape how you think, feel and relate.",
    story:
      "It can also help identify maladaptive patterns or personality-related concerns that may quietly affect your relationships, work or emotional well-being. The result is not a label — it is a more compassionate, useful map of who you are.",
    benefits: [
      { title: "Self-awareness", desc: "See the patterns that have been shaping your life from the inside." },
      { title: "Better relationships", desc: "Understand how you connect, withdraw and react under stress." },
      { title: "Targeted growth", desc: "Direct your inner work where it will matter most." },
      { title: "Clinical clarity", desc: "Identify personality-related concerns early and gently." },
    ],
    process: [
      { step: "01", title: "Concern mapping", desc: "We listen to what brings you here and what you'd like to understand." },
      { step: "02", title: "Profile assessment", desc: "Standardised inventories of traits, temperament and patterns." },
      { step: "03", title: "Clinical interpretation", desc: "A psychologist reviews and contextualises every response." },
      { step: "04", title: "Reflection session", desc: "We walk through findings in plain, human language." },
    ],
    forWho: [
      "Adults wanting to understand their inner patterns",
      "Those navigating recurring relationship difficulties",
      "Anyone considering long-term therapy",
      "Individuals seeking clinical clarity on personality concerns",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I left with language for things I'd never been able to name.", author: "Riya, 34" },
  },
  {
    slug: "diagnostic-psychometry",
    title: "Diagnostic Psychometry",
    category: "Assessments",
    icon: ClipboardList,
    card: "ADHD, ASD, anxiety, depression, BPAD and more.",
    hero: anxietyImg,
    tagline: "Clarity that holds, never labels.",
    headline: "An honest, careful look at what is going on.",
    intro:
      "Diagnostic psychometric assessments use standardized psychological tools to evaluate concerns such as ADHD, ASD, anxiety, depression, BPAD, and other emotional or behavioural difficulties.",
    story:
      "These assessments support accurate diagnosis, treatment planning, and a clearer understanding of cognitive, emotional and behavioural functioning. We hold every step with reverence — because behind every score is a person.",
    benefits: [
      { title: "Accurate diagnosis", desc: "Move from guesswork to a clear clinical picture." },
      { title: "Treatment direction", desc: "Findings guide therapy, medication and lifestyle decisions." },
      { title: "Validation", desc: "Naming what you've quietly carried can be its own relief." },
      { title: "Family understanding", desc: "Loved ones gain language for what they're witnessing." },
    ],
    process: [
      { step: "01", title: "Clinical interview", desc: "A detailed conversation about history, symptoms and context." },
      { step: "02", title: "Standardised tools", desc: "Carefully chosen psychometric and diagnostic inventories." },
      { step: "03", title: "Scoring & analysis", desc: "Interpreted by trained clinicians, never by software alone." },
      { step: "04", title: "Feedback session", desc: "A warm, thorough debrief with clear next steps." },
    ],
    forWho: [
      "Adults exploring possible ADHD or autism",
      "Individuals with persistent anxiety or mood difficulties",
      "Families seeking diagnostic clarity for a loved one",
      "Anyone preparing for psychiatric or therapeutic care",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I finally had words for what I'd been living with my whole life.", author: "Nikhil, 29" },
  },
  {
    slug: "neuropsychological-assessment",
    title: "Neuropsychological Assessment",
    category: "Assessments",
    icon: Brain,
    card: "Cognitive functioning across attention, memory and more.",
    hero: traumaImg,
    tagline: "Understanding how your mind moves.",
    headline: "A gentle map of your cognitive landscape.",
    intro:
      "Neuropsychological assessments evaluate cognitive functions such as attention, memory, language, executive functioning, processing speed, and learning abilities.",
    story:
      "They help identify the impact of neurological, developmental, or psychological conditions on daily functioning and support targeted intervention planning that honours how you actually live.",
    benefits: [
      { title: "Cognitive clarity", desc: "Understand the specific shape of your attention and memory." },
      { title: "Tailored support", desc: "Interventions matched to your real strengths and gaps." },
      { title: "Functional insight", desc: "See how cognition shows up in school, work or daily life." },
      { title: "Care planning", desc: "Findings inform medical, therapeutic and educational teams." },
    ],
    process: [
      { step: "01", title: "Background interview", desc: "We learn about your history, concerns and goals." },
      { step: "02", title: "Test battery", desc: "Tasks across attention, memory, language and executive function." },
      { step: "03", title: "Clinical integration", desc: "Findings are interpreted in light of your real-world context." },
      { step: "04", title: "Detailed report", desc: "A written report and feedback session with clear recommendations." },
    ],
    forWho: [
      "Individuals with concerns about memory or focus",
      "Those recovering from injury or neurological illness",
      "Students whose learning doesn't match their effort",
      "Adults seeking clarity around cognitive change",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "The report explained things I'd struggled to articulate for years.", author: "Anonymous" },
  },
  {
    slug: "iq-assessment",
    title: "IQ Assessment",
    category: "Assessments",
    icon: Lightbulb,
    card: "Reasoning, problem-solving and intellectual functioning.",
    hero: studentImg,
    tagline: "A holistic look at how you think.",
    headline: "More than a number — an understanding.",
    intro:
      "IQ assessments measure intellectual functioning, including reasoning, problem-solving, memory, verbal comprehension, and processing abilities.",
    story:
      "They help understand an individual's cognitive strengths and challenges for academic planning, developmental evaluation and psychological support — always interpreted as one part of a whole person.",
    benefits: [
      { title: "Strengths revealed", desc: "Identify the cognitive areas where you naturally excel." },
      { title: "Targeted support", desc: "Direct help where it makes the biggest difference." },
      { title: "Academic planning", desc: "Informed decisions about learning paths and accommodations." },
      { title: "Developmental clarity", desc: "Understand a child's profile with compassion, not pressure." },
    ],
    process: [
      { step: "01", title: "Intake & history", desc: "A warm conversation about goals and context." },
      { step: "02", title: "Standardised testing", desc: "Validated IQ batteries across multiple domains." },
      { step: "03", title: "Scoring & analysis", desc: "Interpretation in light of background and culture." },
      { step: "04", title: "Feedback session", desc: "A clear, human explanation of what the numbers mean." },
    ],
    forWho: [
      "Children with learning or developmental questions",
      "Students seeking academic accommodations",
      "Adults curious about their cognitive profile",
      "Families seeking clarity around giftedness or learning needs",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "The conversation after the test was more useful than the number itself.", author: "Parent of a teen" },
  },
  {
    slug: "sld-assessment",
    title: "Specific Learning Disability Assessment",
    category: "Assessments",
    icon: BookOpen,
    card: "Reading, writing, spelling and mathematical difficulties.",
    hero: onlineImg,
    tagline: "Understanding the way your child learns.",
    headline: "Learning differences, named and supported.",
    intro:
      "SLD assessments evaluate difficulties in areas such as reading, writing, spelling, and mathematics to identify specific learning challenges.",
    story:
      "They help understand a child's learning profile and support recommendations for appropriate educational interventions and accommodations — so that effort is finally met with the right kind of support.",
    benefits: [
      { title: "Early identification", desc: "Recognise specific learning challenges before they erode confidence." },
      { title: "Educational planning", desc: "Evidence-based recommendations for school and home." },
      { title: "Accommodation support", desc: "Documentation that helps schools provide the right help." },
      { title: "Self-understanding", desc: "Children stop blaming themselves for how their brain learns." },
    ],
    process: [
      { step: "01", title: "Parent & teacher input", desc: "We gather observations from every part of the child's world." },
      { step: "02", title: "Child-friendly testing", desc: "Playful, validated assessments across academic skills." },
      { step: "03", title: "Detailed analysis", desc: "Findings integrated with developmental and emotional context." },
      { step: "04", title: "School-ready report", desc: "Clear documentation and a debrief with the family." },
    ],
    forWho: [
      "Children struggling with reading, writing or maths",
      "Students whose effort doesn't match their results",
      "Parents seeking clarity around school recommendations",
      "Families preparing for accommodation requests",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "Once we knew, everything at school changed for our daughter.", author: "Parent" },
  },

  // ====== THERAPY ======
  {
    slug: "child-adolescent-counselling",
    title: "Child & Adolescent Counselling",
    category: "Therapy",
    icon: Baby,
    card: "Safe support for younger minds finding their voice.",
    hero: studentImg,
    tagline: "A quiet room for young hearts.",
    headline: "Therapy that meets children where they are.",
    intro:
      "Children and adolescents carry far more than they often have words for. Our therapy spaces are designed to be playful, safe and developmentally tuned.",
    story:
      "We work with children and teens around emotional regulation, behavioural concerns, school stress, anxiety, friendships, confidence and family difficulties — using approaches like play therapy, CBT and expressive techniques that feel natural to young people.",
    benefits: [
      { title: "Emotional regulation", desc: "Tools to recognise and ride big feelings safely." },
      { title: "Confidence", desc: "A stronger sense of self in school and at home." },
      { title: "Healthier coping", desc: "Skills that replace withdrawal or acting out." },
      { title: "Family understanding", desc: "Parents gain language and strategies that actually work." },
    ],
    process: [
      { step: "01", title: "Parent conversation", desc: "We begin by understanding the family's concerns and context." },
      { step: "02", title: "Child sessions", desc: "Warm, developmentally tuned spaces just for the child." },
      { step: "03", title: "Skill-building", desc: "Age-appropriate tools for emotions, behaviour and relationships." },
      { step: "04", title: "Family integration", desc: "Periodic parent sessions to support change at home." },
    ],
    forWho: [
      "Children with anxiety, anger or sadness",
      "Teens struggling with school, friendships or identity",
      "Families navigating behavioural difficulties",
      "Young people recovering from difficult experiences",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "My son finally has somewhere that feels like his.", author: "Parent of a 12-year-old" },
  },
  {
    slug: "adult-counselling",
    title: "Adult Counselling",
    category: "Therapy",
    icon: User,
    card: "One-on-one therapy for life's quieter weight.",
    hero: individualImg,
    tagline: "A space carved just for you.",
    headline: "Therapy that listens before it speaks.",
    intro:
      "Adult counselling at The Pause Room is a slow, intentional space for everything you've been quietly carrying. We move at the pace of your breath, not the pace of the world.",
    story:
      "Whether you are arriving with something specific to untangle or simply with the weight of a long season, your sessions become a steady, weekly returning. Together we explore patterns, soften old narratives and gently build a more compassionate inner voice.",
    benefits: [
      { title: "A private sanctuary", desc: "A confidential space held just for your story." },
      { title: "Personalised care", desc: "Therapy shaped around your history and pace." },
      { title: "Lasting clarity", desc: "Tools and reflections you carry well beyond sessions." },
      { title: "Gentle accountability", desc: "A consistent presence as you practice new ways of being." },
    ],
    process: [
      { step: "01", title: "Arrive softly", desc: "We begin with a short call to understand what you're carrying." },
      { step: "02", title: "Map your inner world", desc: "Across early sessions, we chart the themes that matter most." },
      { step: "03", title: "Walk together", desc: "Weekly sessions blending talk therapy with grounded practice." },
      { step: "04", title: "Pause and reflect", desc: "Regular check-ins to honour what has shifted." },
    ],
    forWho: [
      "Anyone feeling quietly overwhelmed by daily life",
      "Those navigating change, loss or transition",
      "People wanting to understand themselves more deeply",
      "Adults who have never felt fully heard before",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "For the first time in years, I felt listened to without being fixed.", author: "Ananya, 32" },
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    category: "Therapy",
    icon: Briefcase,
    card: "Clarity for work, identity and direction.",
    hero: natureImg,
    tagline: "Work, aligned with who you are.",
    headline: "When the next step isn't clear, we sit with it together.",
    intro:
      "Career counselling combines emotional support with practical exploration — for students, professionals and anyone standing at a crossroads of work and identity.",
    story:
      "Together we explore values, strengths and emotional barriers, often integrating career assessments and reflection work to help you move forward with both confidence and self-knowledge.",
    benefits: [
      { title: "Direction with calm", desc: "Decisions that come from clarity, not panic." },
      { title: "Confidence", desc: "A stronger sense of why you're choosing what you choose." },
      { title: "Aligned work", desc: "Paths that match your strengths, values and life stage." },
      { title: "Emotional support", desc: "Space for the doubt, grief and fear underneath career questions." },
    ],
    process: [
      { step: "01", title: "Listening session", desc: "We start with where you are and what feels stuck." },
      { step: "02", title: "Self-exploration", desc: "Values, strengths, interests and barriers, gently mapped." },
      { step: "03", title: "Optional assessments", desc: "Career or aptitude tools when they would add clarity." },
      { step: "04", title: "Action and review", desc: "A grounded plan, revisited as life unfolds." },
    ],
    forWho: [
      "Students choosing their direction",
      "Professionals considering a career change",
      "Returning-to-work parents and carers",
      "Anyone navigating burnout or work-related crisis",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I left with a plan that finally felt like mine.", author: "Saanvi, 27" },
  },
  {
    slug: "grief-counselling",
    title: "Grief Counselling",
    category: "Therapy",
    icon: Heart,
    card: "Gentle company through loss in any form.",
    hero: depressionImg,
    tagline: "You do not have to carry this alone.",
    headline: "Grief, held with the tenderness it deserves.",
    intro:
      "Grief is not something to fix or rush. Whether the loss is recent or has been quietly living in you for years, we offer a space that simply makes room for it.",
    story:
      "We support people through bereavement, anticipatory grief, loss of relationships, identity, health or roles. Our work is shaped by compassion, evidence-based grief frameworks, and a deep respect for your pace.",
    benefits: [
      { title: "Space to feel", desc: "A place where your grief is not too much for anyone." },
      { title: "Gentle structure", desc: "Frameworks that help without flattening your experience." },
      { title: "Restored functioning", desc: "Slowly returning to sleep, food and the simple acts of living." },
      { title: "Meaning-making", desc: "Carrying love forward, even alongside the loss." },
    ],
    process: [
      { step: "01", title: "Soft beginnings", desc: "An unhurried first session focused entirely on you." },
      { step: "02", title: "Story and ritual", desc: "Space to honour the person, place or part of life lost." },
      { step: "03", title: "Gentle skills", desc: "Tools for waves of grief, anniversary dates and triggers." },
      { step: "04", title: "Integration", desc: "Slowly weaving the loss into the larger fabric of your life." },
    ],
    forWho: [
      "Those grieving a death, recent or long-ago",
      "People living with anticipatory loss or illness",
      "Anyone mourning relationships, identity or roles",
      "Families wanting to grieve together",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "They didn't try to take it away. They sat with me inside it.", author: "Anonymous" },
  },
  {
    slug: "behaviour-modification",
    title: "Behaviour Modification",
    category: "Therapy",
    icon: Wrench,
    card: "Evidence-based change for stuck patterns.",
    hero: burnoutImg,
    tagline: "Small shifts, gently practiced.",
    headline: "Change that respects how change actually happens.",
    intro:
      "Behaviour modification uses structured, evidence-based techniques to gently shift patterns that no longer serve you — without shame, force or quick fixes.",
    story:
      "Drawing on CBT, behaviour therapy and reinforcement principles, we work with you (or your child) on specific behaviours, building new patterns one small, supported step at a time.",
    benefits: [
      { title: "Targeted change", desc: "Clear focus on the patterns that matter most to you." },
      { title: "Practical tools", desc: "Skills you can use between sessions, not just inside them." },
      { title: "Confidence", desc: "Each small win rebuilds trust in yourself." },
      { title: "Lasting shifts", desc: "Changes that hold because they're built on understanding." },
    ],
    process: [
      { step: "01", title: "Behaviour mapping", desc: "We gently identify the patterns and what fuels them." },
      { step: "02", title: "Goal setting", desc: "Small, specific, achievable shifts you actually want." },
      { step: "03", title: "Skill practice", desc: "Structured techniques with kind, weekly accountability." },
      { step: "04", title: "Review and refine", desc: "Adjusting as life and you continue to change." },
    ],
    forWho: [
      "Children with specific behavioural concerns",
      "Adults with habits they want to change with support",
      "Individuals managing impulsivity or compulsions",
      "Families seeking structured behavioural strategies",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "Small, consistent steps. That's what finally worked.", author: "Vikram, 38" },
  },
  {
    slug: "parental-counselling",
    title: "Parental Counselling",
    category: "Therapy",
    icon: UsersRound,
    card: "Support for the quietly exhausted parent.",
    hero: relationshipImg,
    tagline: "Parenting, held with the same care you give.",
    headline: "A space for the part of you that is also a parent.",
    intro:
      "Parental counselling supports you through the emotional, relational and practical weight of raising children — including the parts no one talks about.",
    story:
      "Whether you're navigating a child's struggle, your own reactivity, co-parenting after separation, or simply parental burnout, we offer a non-judgmental space to think, feel and recalibrate.",
    benefits: [
      { title: "Calmer parenting", desc: "Tools to regulate yourself before responding to your child." },
      { title: "Better connection", desc: "Approaches that strengthen the parent-child bond." },
      { title: "Reduced guilt", desc: "Space to soften the constant inner critic." },
      { title: "Practical strategies", desc: "Approaches tailored to your child's age and temperament." },
    ],
    process: [
      { step: "01", title: "Listening session", desc: "We begin with your story — not parenting advice." },
      { step: "02", title: "Pattern awareness", desc: "Gently mapping reactive cycles and inherited patterns." },
      { step: "03", title: "Skill-building", desc: "Strategies for connection, limits and emotional regulation." },
      { step: "04", title: "Ongoing support", desc: "A steady space to return to as your child grows." },
    ],
    forWho: [
      "Parents of children with emotional or behavioural concerns",
      "Co-parents navigating separation or blended families",
      "Parents recovering from burnout or postnatal struggles",
      "Caregivers wanting to break inherited family patterns",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "Finally, somewhere that listens to me as a parent, not just to my child.", author: "Mother of two" },
  },
  {
    slug: "group-therapy",
    title: "Group Therapy",
    category: "Therapy",
    icon: Users,
    card: "Healing alongside others who understand.",
    hero: traumaImg,
    tagline: "You are not alone in this.",
    headline: "A circle of quiet understanding.",
    intro:
      "Group therapy offers the unique power of healing in community — a small, carefully held space of people working through similar themes.",
    story:
      "Facilitated by trained clinicians, our groups blend structured therapeutic work with the deep relief of being witnessed by others who truly understand. Themes range from anxiety and grief to women's wellness and emotional resilience.",
    benefits: [
      { title: "Shared experience", desc: "The relief of realising you're not the only one." },
      { title: "Different perspectives", desc: "Insights from others walking similar paths." },
      { title: "Relational practice", desc: "A safe space to try new ways of relating." },
      { title: "Affordable depth", desc: "Therapeutic depth at a more accessible price point." },
    ],
    process: [
      { step: "01", title: "Pre-group call", desc: "A private conversation to see if the group is right for you." },
      { step: "02", title: "Group agreements", desc: "Confidentiality, safety and respect are established together." },
      { step: "03", title: "Weekly sessions", desc: "Structured, facilitated meetings over a defined period." },
      { step: "04", title: "Integration", desc: "Closing rituals to honour the journey and what you take forward." },
    ],
    forWho: [
      "Adults seeking community alongside therapy",
      "Those who feel isolated in their experience",
      "People who learn well through shared reflection",
      "Individuals looking for an affordable therapeutic option",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "Hearing other people's words for what I felt — that was the medicine.", author: "Group member" },
  },

  // ====== CLASSES & EVENTS ======
  {
    slug: "attention-training",
    title: "Attention Training",
    category: "Classes & Events",
    icon: Target,
    card: "Structured classes for focus and concentration.",
    hero: studentImg,
    tagline: "Building the muscle of attention.",
    headline: "Focus, as a skill that can be quietly grown.",
    intro:
      "Our attention training classes use evidence-based exercises to strengthen focus, sustained attention and working memory — especially helpful for children and teens.",
    story:
      "Through gamified tasks, mindfulness practices and cognitive exercises, participants build attention capacity in a way that feels engaging rather than corrective.",
    benefits: [
      { title: "Sustained focus", desc: "The ability to stay with a task for longer." },
      { title: "Less restlessness", desc: "Calmer transitions between activities." },
      { title: "Better learning", desc: "Improvements that show up in school work." },
      { title: "Confidence", desc: "Children stop seeing focus as 'something I can't do'." },
    ],
    process: [
      { step: "01", title: "Initial screening", desc: "Understanding the child's attention profile and goals." },
      { step: "02", title: "Structured curriculum", desc: "Weekly sessions building skills progressively." },
      { step: "03", title: "Home practice", desc: "Short, playful exercises woven into daily life." },
      { step: "04", title: "Progress review", desc: "Regular check-ins with parents and child." },
    ],
    forWho: [
      "Children with attention difficulties",
      "Students struggling with sustained focus",
      "Children diagnosed with ADHD seeking adjunct support",
      "Families looking for skill-based support outside therapy",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "His homework time has changed completely.", author: "Parent of a 9-year-old" },
  },
  {
    slug: "social-skills",
    title: "Social Skills Classes",
    category: "Classes & Events",
    icon: MessageCircle,
    card: "Practice the quiet art of connection.",
    hero: relationshipImg,
    tagline: "Connection, taught with kindness.",
    headline: "Friendship and conversation, gently practiced.",
    intro:
      "Social skills classes offer children, teens and young adults a safe space to practice the small, important skills of human connection.",
    story:
      "Through role-play, group exercises and structured feedback, participants build skills in conversation, friendship, conflict, empathy and emotional expression — at their own pace.",
    benefits: [
      { title: "Confident conversation", desc: "Comfort in starting and holding conversations." },
      { title: "Friendship skills", desc: "Tools for making and keeping friends." },
      { title: "Conflict resilience", desc: "Healthier ways to navigate disagreement." },
      { title: "Emotional literacy", desc: "Naming feelings — your own and others'." },
    ],
    process: [
      { step: "01", title: "Skill assessment", desc: "Understanding strengths and areas of growth." },
      { step: "02", title: "Small group work", desc: "Weekly classes in safe, supportive cohorts." },
      { step: "03", title: "Practiced scenarios", desc: "Realistic role-play with gentle, structured feedback." },
      { step: "04", title: "Real-world bridging", desc: "Carrying skills into school, home and friendships." },
    ],
    forWho: [
      "Children and teens with social anxiety",
      "Young people on the autism spectrum",
      "Students adjusting to new schools or environments",
      "Anyone wanting to feel more comfortable in social settings",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "She came home from school last week saying she made a friend.", author: "Parent" },
  },
  {
    slug: "special-education",
    title: "Special Education",
    category: "Classes & Events",
    icon: GraduationCap,
    card: "Individualised learning for diverse minds.",
    hero: onlineImg,
    tagline: "Education, shaped around the learner.",
    headline: "Learning support that honours how each child grows.",
    intro:
      "Our special education sessions provide individualised academic and developmental support for children with diverse learning needs.",
    story:
      "Working closely with parents and schools, our educators design programmes that meet children where they are — building academic skills, confidence and a more loving relationship with learning.",
    benefits: [
      { title: "Personalised pace", desc: "Programmes shaped around each child's profile." },
      { title: "Academic growth", desc: "Real, measurable progress in core skills." },
      { title: "Confidence", desc: "Children rediscover that learning can feel good." },
      { title: "Family alignment", desc: "Parents and educators working from the same page." },
    ],
    process: [
      { step: "01", title: "Educational assessment", desc: "Understanding learning profile and goals." },
      { step: "02", title: "Individualised plan", desc: "A structured curriculum shaped around the child." },
      { step: "03", title: "Regular sessions", desc: "Warm, consistent one-on-one or small-group work." },
      { step: "04", title: "Progress reviews", desc: "Ongoing check-ins with families and schools." },
    ],
    forWho: [
      "Children with specific learning disabilities",
      "Students needing one-on-one academic support",
      "Families seeking school-aligned intervention",
      "Children with developmental learning differences",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "She started enjoying reading again. That's the part that matters.", author: "Parent" },
  },
  {
    slug: "workshops",
    title: "Interactive Workshops",
    category: "Classes & Events",
    icon: Sparkles,
    card: "Experiential learning for everyday well-being.",
    hero: lakeImg,
    tagline: "Skills you can quietly take home.",
    headline: "Workshops that turn knowledge into practice.",
    intro:
      "Interactive workshops are conducted to build practical psychological skills, increase self-awareness, and promote emotional well-being through experiential learning.",
    story:
      "They provide participants with evidence-based strategies that can be applied in everyday personal, academic and professional life — in groups small enough that everyone is held, large enough that everyone learns from each other.",
    benefits: [
      { title: "Practical skills", desc: "Tools you start using the moment you leave the room." },
      { title: "Self-awareness", desc: "New language for your own inner world." },
      { title: "Community", desc: "Connection with others walking similar paths." },
      { title: "Evidence-based", desc: "Approaches drawn from contemporary psychology." },
    ],
    process: [
      { step: "01", title: "Theme selection", desc: "We offer workshops on themes that meet real, current needs." },
      { step: "02", title: "Small group format", desc: "Held in cohorts that allow real participation." },
      { step: "03", title: "Experiential learning", desc: "Practice, reflection and group discussion — not lectures." },
      { step: "04", title: "Take-home practice", desc: "Resources and rituals you carry into daily life." },
    ],
    forWho: [
      "Anyone seeking growth without committing to therapy",
      "Teams, schools and organisations",
      "Students and young professionals",
      "Parents and caregivers",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I came for ideas. I left with practices I still use months later.", author: "Workshop attendee" },
  },
  {
    slug: "seminars-webinars",
    title: "Seminars & Webinars",
    category: "Classes & Events",
    icon: Presentation,
    card: "Awareness sessions, online and in-person.",
    hero: roomImg,
    tagline: "Mental health, made approachable.",
    headline: "Conversations that quietly change communities.",
    intro:
      "Seminars and webinars are conducted to spread awareness about mental health, psychological concerns, parenting, relationships, education, and overall well-being.",
    story:
      "They aim to make psychological knowledge accessible, encourage early intervention and help create informed, mentally healthy communities — held both in-person and online for schools, workplaces and the wider public.",
    benefits: [
      { title: "Accessible knowledge", desc: "Clear, evidence-based information without jargon." },
      { title: "Reduced stigma", desc: "Open conversation that softens shame and silence." },
      { title: "Early awareness", desc: "Recognise concerns in yourself and loved ones earlier." },
      { title: "Wide reach", desc: "Bring psychological insight into your home, school or workplace." },
    ],
    process: [
      { step: "01", title: "Request a topic", desc: "Schools, workplaces and groups can request themes." },
      { step: "02", title: "Tailored content", desc: "Sessions shaped around your audience and needs." },
      { step: "03", title: "Live delivery", desc: "Engaging in-person or online formats with Q&A." },
      { step: "04", title: "Follow-up resources", desc: "Reading lists and next steps after the session." },
    ],
    forWho: [
      "Schools wanting mental health awareness sessions",
      "Workplaces investing in employee well-being",
      "Community groups seeking informed conversation",
      "Individuals looking for accessible introductions",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "Our whole school felt the shift after that session.", author: "School counsellor" },
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const servicesByCategory = (): Record<ServiceCategory, Service[]> => ({
  Assessments: services.filter((s) => s.category === "Assessments"),
  Therapy: services.filter((s) => s.category === "Therapy"),
  "Classes & Events": services.filter((s) => s.category === "Classes & Events"),
});

// Subset surfaced on the landing page Services preview.
export const featuredServiceSlugs = [
  "adult-counselling",
  "child-adolescent-counselling",
  "diagnostic-psychometry",
  "workshops",
];
