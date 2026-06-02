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

  // ====== HEALING-LED THERAPY SUBPAGES ======
  {
    slug: "anxiety-therapy",
    title: "Anxiety Therapy",
    category: "Therapy",
    icon: Activity,
    card: "Find calm beneath the noise of an anxious mind.",
    hero: anxietyImg,
    tagline: "You are not your anxiety. You are the calm beneath it.",
    headline: "Therapy for the mind that won't quiet down.",
    intro: "A gentle, evidence-based space to understand anxiety and slowly soften its grip on your days.",
    story: "We weave together CBT, mindfulness, breathwork and gradual exposure to help your nervous system learn that it is safe — moment by moment, breath by breath.",
    benefits: [
      { title: "Quieter mind", desc: "Tools to interrupt spirals before they take hold." },
      { title: "Calmer body", desc: "Practices that settle the nervous system over time." },
      { title: "Confidence", desc: "Re-entering the places anxiety has narrowed for you." },
      { title: "Self-trust", desc: "Knowing your own signals and how to meet them." },
    ],
    process: [
      { step: "01", title: "Soft beginning", desc: "An unhurried first conversation about what you're carrying." },
      { step: "02", title: "Mapping", desc: "Understanding your triggers, patterns and inner narratives." },
      { step: "03", title: "Practice", desc: "Weekly sessions building tools you can actually use." },
      { step: "04", title: "Integration", desc: "Slowly returning to a life that feels yours again." },
    ],
    forWho: [
      "People living with chronic worry or overthinking",
      "Those experiencing panic, palpitations or restlessness",
      "Anyone whose world has quietly grown smaller",
      "High-functioning adults who look fine on the outside",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I stopped fighting my mind and started understanding it.", author: "Client, 31" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85",
      heroAlt: "A person sitting peacefully by a calm lake at sunrise",
      tagline: "You are not your anxiety. You are the calm beneath it.",
      openingQuote: "You don't have to control your thoughts. You just have to stop letting them control you.",
      openingQuoteAuthor: "Dan Millman",
      sections: [
        {
          heading: "What Anxiety Really Is",
          paragraphs: [
            "Anxiety is, at its root, an old and loyal survival response. It is the part of you that scans for danger, prepares the body, and tries — sometimes a little too hard — to keep you safe. It becomes painful only when it forgets to rest.",
            "It can show up as a racing heart, shallow breath, restlessness, sleeplessness, or a mind that will not stop rehearsing what could go wrong. It can also live quietly as a low hum of worry that follows you through ordinary days.",
            "None of this means anything is wrong with you. It means a system inside you is working overtime, and it has been waiting a long time for someone to gently help it stand down.",
          ],
          image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&q=80",
          imageAlt: "Soft morning mist over still water",
        },
        {
          heading: "How We Help You Find Calm",
          paragraphs: [
            "Our work begins with listening. Before any technique, we want to understand the shape of your anxiety — when it began, what feeds it, and what you have already tried to soothe it.",
            "From there we draw on Cognitive Behavioural Therapy to soften unhelpful thought patterns, mindfulness-based practices to bring you back into the present, and breath regulation to remind your body it is safe.",
            "When the time feels right, we use gentle, gradual exposure to help you re-enter the parts of life anxiety has narrowed. There is no rushing here. Only steady, kind progress.",
          ],
          image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80",
          imageAlt: "A quiet meditation space with soft light",
          sideQuote: "Breath is the bridge which connects life to consciousness. — Thich Nhat Hanh",
        },
        {
          heading: "Your Journey Toward Peace",
          paragraphs: [
            "Healing rarely moves in a straight line. There will be lighter weeks and harder ones, breakthroughs and quiet plateaus. All of it is part of the same returning to yourself.",
            "Over time, the anxious voice grows softer. You begin to recognise it earlier, meet it with more tenderness, and trust that you can move through your days without bracing for them.",
          ],
          image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80",
          imageAlt: "A winding forest path lit by golden afternoon sun",
        },
      ],
      closingStatement: "You came here carrying something heavy. Our promise is to sit with you, understand you, and gently help you set it down — at your own pace, in your own time.",
      closingQuote: "Almost everything will work again if you unplug it for a few minutes — including you.",
      closingQuoteAuthor: "Anne Lamott",
    },
  },
  {
    slug: "depression-counseling",
    title: "Depression Counselling",
    category: "Therapy",
    icon: Heart,
    card: "Quiet, evidence-based support through the heaviness.",
    hero: depressionImg,
    tagline: "Even the darkest night will end, and the sun will rise.",
    headline: "Therapy that meets depression with patience.",
    intro: "A compassionate space to slowly find light again — at your own pace.",
    story: "Through CBT, interpersonal therapy, behavioural activation, and coordinated psychiatric care where helpful, we walk with you through the fog and back into your life.",
    benefits: [
      { title: "Lifting fog", desc: "Gentle clarity returning to thought and feeling." },
      { title: "Restored rhythm", desc: "Sleep, food and movement, slowly re-finding shape." },
      { title: "Reconnection", desc: "With people, work and the parts of life that mattered." },
      { title: "Self-compassion", desc: "A softer inner voice as the harshest one quiets." },
    ],
    process: [
      { step: "01", title: "First listening", desc: "We begin by simply hearing where you are." },
      { step: "02", title: "Understanding", desc: "Mapping the shape of your depression and what feeds it." },
      { step: "03", title: "Gentle action", desc: "Small, supported steps back into engagement." },
      { step: "04", title: "Steady return", desc: "Building a life that feels worth being present for." },
    ],
    forWho: [
      "People living with persistent low mood or numbness",
      "Those struggling with fatigue, fog or loss of interest",
      "Anyone whose depression has lasted longer than it should",
      "Adults wanting therapy alongside or instead of medication",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I forgot what mornings could feel like. They are slowly coming back.", author: "Client, 36" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=85",
      heroAlt: "Soft morning light pouring through a window",
      tagline: "Even the darkest night will end, and the sun will rise.",
      openingQuote: "There is hope, even when your brain tells you there isn't.",
      openingQuoteAuthor: "John Green",
      sections: [
        {
          heading: "Understanding Depression",
          paragraphs: [
            "Depression is far more than sadness. It is fatigue that sleep does not touch, a quiet numbness where joy used to live, a fog that settles over thinking and makes even small choices feel heavy.",
            "It can change how food tastes, how mornings begin, how you see yourself and the people you love. It can convince you, quietly and persuasively, that this is simply who you are now.",
            "It is not. Depression is an experience you are moving through, not a verdict on your worth. What you are feeling makes sense, and it can change.",
          ],
          image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=1200&q=80",
          imageAlt: "A still lake reflecting a soft, cloudy sky",
        },
        {
          heading: "Our Approach to Healing",
          paragraphs: [
            "We work with evidence-based therapies chosen for the shape of your depression, not a textbook version of it. Cognitive Behavioural Therapy helps untangle the thoughts that keep you stuck. Interpersonal Therapy supports the relationships that hold you.",
            "Behavioural activation gently rebuilds engagement with the small acts of living — a walk, a meal, a conversation — that depression has slowly stripped away. We move at the pace your body can actually meet.",
            "When medication may help, we work in close coordination with a psychiatrist. You are never asked to choose between feeling held and being well cared for clinically.",
          ],
          image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80",
          imageAlt: "A quiet open book by a warm window",
          sideQuote: "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives. — Akshay Dubey",
        },
        {
          heading: "Small Steps, Real Change",
          paragraphs: [
            "Recovery does not arrive in one bright morning. It comes in small returns — the day you notice the light, the meal you actually taste, the conversation you stay present for.",
            "Much of the change happens inside the relationship itself: a steady, weekly place where you are not too much, not too quiet, not too tired to be welcomed exactly as you are.",
          ],
          image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&q=80",
          imageAlt: "A solitary tree at dawn, mist rising",
        },
      ],
      closingStatement: "Depression lies. It tells you that nothing will change, that you are alone, that this is all there is. We are here to gently prove it wrong — with you, every step of the way.",
      closingQuote: "One small crack does not mean that you are broken. It means that you were put to the test and you didn't fall apart.",
      closingQuoteAuthor: "Linda Poindexter",
    },
  },
  {
    slug: "trauma-counseling",
    title: "Trauma Counselling",
    category: "Therapy",
    icon: Heart,
    card: "Trauma-informed care that honours your pace.",
    hero: traumaImg,
    tagline: "What happened to you does not define you. Healing does.",
    headline: "Therapy for what your body has been quietly holding.",
    intro: "Slow, safety-led trauma work using EMDR, somatic and trauma-focused approaches.",
    story: "We never push toward your story faster than your nervous system can hold it. Healing here is patient, embodied and entirely yours.",
    benefits: [
      { title: "Felt safety", desc: "A nervous system that learns it is no longer in danger." },
      { title: "Integration", desc: "Memories that move from the body into your story." },
      { title: "Reclaiming agency", desc: "Choices that feel like yours again." },
      { title: "Post-traumatic growth", desc: "A self that is changed, and also more whole." },
    ],
    process: [
      { step: "01", title: "Establishing safety", desc: "Before anything else, we build a steady, trusted base." },
      { step: "02", title: "Resourcing", desc: "Skills for grounding, regulation and self-care." },
      { step: "03", title: "Gentle processing", desc: "EMDR, somatic or narrative work, only when you are ready." },
      { step: "04", title: "Integration", desc: "Weaving the experience into a life that continues forward." },
    ],
    forWho: [
      "Survivors of childhood or relational trauma",
      "People living with PTSD or complex PTSD",
      "Those affected by accidents, loss or medical trauma",
      "Anyone whose past is quietly shaping their present",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "For the first time, I did not feel rushed through my own story.", author: "Anonymous" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1920&q=85",
      heroAlt: "A calm forest path with soft dappled light",
      tagline: "What happened to you does not define you. Healing does.",
      openingQuote: "The wound is the place where the light enters you.",
      openingQuoteAuthor: "Rumi",
      sections: [
        {
          heading: "What Trauma Does to the Mind and Body",
          paragraphs: [
            "Trauma is not only what happened. It is what your body learned to do to survive it. Long after the event has passed, the nervous system can stay braced — scanning, flinching, holding its breath.",
            "It can show up as hypervigilance, numbness, sudden waves of emotion, sleep that will not come, or a quiet sense of never fully belonging in your own life.",
            "These are not flaws. They are intelligent responses from a system that was once trying to protect you. With time and the right support, that system can learn to rest.",
          ],
          image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=1200&q=80",
          imageAlt: "Sunlight filtering through a quiet forest canopy",
        },
        {
          heading: "Trauma-Informed Care at Our Practice",
          paragraphs: [
            "Our trauma work is built on one principle: nothing happens before safety. Before we touch any memory, we make sure you have the inner and outer resources to hold what arises.",
            "We draw on EMDR to help the brain reprocess what it could not metabolise at the time, somatic approaches to release what the body has been carrying, narrative therapy to help you tell your story on your own terms, and trauma-focused CBT where it fits.",
            "You are never asked to relive anything. You are invited, gently, to revisit what is ready to be witnessed — and only that.",
          ],
          image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1200&q=80",
          imageAlt: "Hands held softly in a warm, calm setting",
          sideQuote: "You are not what happened to you. You are what you choose to become. — Carl Jung",
        },
        {
          heading: "Reclaiming Your Story",
          paragraphs: [
            "Post-traumatic growth does not erase what happened. It changes your relationship to it. Survivors often describe a deeper compassion, a clearer sense of what matters, and a quiet, hard-won strength.",
            "Therapy is one of the places this becomes possible — not by rewriting the past, but by giving you the space, safety and tools to carry it differently.",
          ],
          image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80",
          imageAlt: "A person walking peacefully along a quiet shoreline",
        },
      ],
      closingStatement: "Trauma is not your fault. But healing is your journey — and you do not have to walk it alone. We will hold space for all of it, without judgment, without rush.",
      closingQuote: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
      closingQuoteAuthor: "Khalil Gibran",
    },
  },
  {
    slug: "relationship-counseling",
    title: "Relationship Counselling",
    category: "Therapy",
    icon: Heart,
    card: "Couples and family therapy held with care.",
    hero: relationshipImg,
    tagline: "Every relationship deserves the chance to be truly understood.",
    headline: "Therapy for the relationships that matter most.",
    intro: "Evidence-based couples and family work, built on emotional safety.",
    story: "We use the Gottman Method, Emotionally Focused Therapy and structured communication work to help you understand each other — and yourselves — more deeply.",
    benefits: [
      { title: "Better communication", desc: "Conversations that connect rather than wound." },
      { title: "Repair skills", desc: "Knowing how to come back after rupture." },
      { title: "Emotional safety", desc: "A relationship that feels like a soft place to land." },
      { title: "Renewed intimacy", desc: "Closeness rebuilt from understanding outward." },
    ],
    process: [
      { step: "01", title: "Joint intake", desc: "We hear from both partners about what brings you in." },
      { step: "02", title: "Individual sessions", desc: "Space for each person's perspective, separately." },
      { step: "03", title: "Shared work", desc: "Structured sessions to rebuild communication and trust." },
      { step: "04", title: "Maintenance", desc: "Tools and check-ins for the relationship going forward." },
    ],
    forWho: [
      "Couples navigating conflict or distance",
      "Partners considering or recovering from rupture",
      "Families wanting healthier patterns of relating",
      "Anyone wanting to understand their relational self",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "We learned how to actually hear each other, maybe for the first time.", author: "Couple, married 9 years" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1920&q=85",
      heroAlt: "Two people sitting together in warm golden hour light",
      tagline: "Every relationship deserves the chance to be truly understood.",
      openingQuote: "The meeting of two personalities is like the contact of two chemical substances — if there is any reaction, both are transformed.",
      openingQuoteAuthor: "Carl Jung",
      sections: [
        {
          heading: "Why Relationships Struggle",
          paragraphs: [
            "Relationships rarely break down because of a single moment. They quietly drift through a thousand small misunderstandings, unmet needs and conversations that ended too soon.",
            "Old attachment wounds, inherited patterns, broken trust and the sheer pressure of modern life can all settle into the space between two people, making closeness feel harder than it once did.",
            "None of this means love is gone. Often it means love is buried under things you have not had the right space to untangle together.",
          ],
          image: "https://images.unsplash.com/photo-1516401266446-7d200bc40fd3?w=1200&q=80",
          imageAlt: "Two cups of tea on a wooden table at dusk",
        },
        {
          heading: "How Couples and Family Therapy Works",
          paragraphs: [
            "We bring structure to conversations that have gone in circles for too long. Using the Gottman Method, we work with the specific patterns research shows protect or erode relationships.",
            "Through Emotionally Focused Therapy, we move beneath the arguments to the softer emotions underneath — the longing, the fear, the wish to be chosen. This is where real repair begins.",
            "Sessions include practical communication tools, conflict resolution frameworks and gentle exercises in listening — so that what you learn in the room becomes how you live with each other outside it.",
          ],
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
          imageAlt: "Two people in conversation in a warm, softly lit room",
          sideQuote: "Love is not about possession. It's about appreciation. — Osho",
        },
        {
          heading: "Growing Together",
          paragraphs: [
            "Healthier relationships are not relationships without conflict. They are relationships that know how to repair, how to soften, how to come back to each other after the door has been slammed.",
            "Over time, couples and families often describe a quieter ease — a shared sense that even when things get hard, the relationship itself can be trusted to hold them.",
          ],
          image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=80",
          imageAlt: "Two silhouettes walking together at sunset",
        },
      ],
      closingStatement: "Every relationship has seasons. If you are in a difficult one right now, we are here to help you find warmth again — whether together or in understanding your own needs more clearly.",
      closingQuote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      closingQuoteAuthor: "Lao Tzu",
    },
  },
  {
    slug: "child-adolescent-therapy",
    title: "Child & Adolescent Therapy",
    category: "Therapy",
    icon: Baby,
    card: "Warm, developmentally tuned therapy for young people.",
    hero: studentImg,
    tagline: "Every child deserves to be heard, understood, and celebrated.",
    headline: "Therapy that meets children where they are.",
    intro: "Play therapy, art therapy and talk therapy for children and teens.",
    story: "We work with the whole family, the school where helpful, and most of all the child — at their pace, in their language.",
    benefits: [
      { title: "Emotional language", desc: "Words and tools for what they could not name before." },
      { title: "Calmer behaviour", desc: "Big feelings met with skills rather than meltdowns." },
      { title: "Stronger self", desc: "A sense of being seen, capable and good enough." },
      { title: "Family ease", desc: "Less reactivity, more connection at home." },
    ],
    process: [
      { step: "01", title: "Parent conversation", desc: "We begin with the family's concerns and context." },
      { step: "02", title: "Child sessions", desc: "Developmentally appropriate space just for the young person." },
      { step: "03", title: "Skill-building", desc: "Play, art or talk-based work depending on age and need." },
      { step: "04", title: "Family integration", desc: "Ongoing parent sessions to support change at home." },
    ],
    forWho: [
      "Children with anxiety, anger or sadness",
      "Teens navigating identity, school or friendships",
      "Young people recovering from difficult experiences",
      "Families seeking developmentally informed support",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "She finally has somewhere that feels like hers.", author: "Parent of a 13-year-old" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=85",
      heroAlt: "A child playing in warm afternoon light",
      tagline: "Every child deserves to be heard, understood, and celebrated.",
      openingQuote: "Children are not things to be molded, but people to be unfolded.",
      openingQuoteAuthor: "Jess Lair",
      sections: [
        {
          heading: "Understanding Children and Teens",
          paragraphs: [
            "Young people experience mental health in their own language. A struggling child may not say they are anxious — they may simply not want to go to school. A teenager in pain may not speak of sadness — they may withdraw, or rage, or fall silent.",
            "Signs to gently notice include changes in sleep, appetite, mood, energy, friendships or interest in things once loved. None of these alone mean something is wrong, but together they ask us to lean in.",
            "Early, warm intervention does not pathologise childhood. It honours it — by making sure a young person does not have to carry their inner world alone.",
          ],
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
          imageAlt: "A child looking thoughtfully out of a window",
        },
        {
          heading: "Play Therapy, Art Therapy, and Talk Therapy",
          paragraphs: [
            "Play is the natural language of children. Through carefully chosen toys, stories and games, younger children show us what they cannot yet say — and slowly find new endings for old feelings.",
            "Art therapy gives shape to what does not have words yet. For older children and teens, drawing, collage and creative expression often open doors that direct conversation cannot.",
            "With adolescents, talk therapy is offered as a real conversation — not a lecture, not an interview. A quiet, non-judgmental space where they get to be the expert on their own life.",
          ],
          image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80",
          imageAlt: "Colourful art supplies on a sunlit table",
          sideQuote: "It's not our job to toughen our children up. It's to keep the world from doing that. — L.R. Knost",
        },
        {
          heading: "Supporting the Whole Family",
          paragraphs: [
            "Children do not heal in isolation from their world. We offer parent guidance sessions so that the work happening in the therapy room is gently mirrored at home.",
            "Where helpful, we coordinate with schools, paediatricians and other carers — always with your consent — so that your child is met with consistency across the parts of their life.",
          ],
          image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=80",
          imageAlt: "A family walking together in soft evening light",
        },
      ],
      closingStatement: "A child who feels seen, safe, and valued grows into an adult who knows their worth. Let us help you give your child that foundation.",
      closingQuote: "There are no perfect parents, and there are no perfect children, but there are plenty of perfect moments along the way.",
      closingQuoteAuthor: "Dave Willis",
    },
  },
  {
    slug: "stress-management",
    title: "Stress Management",
    category: "Therapy",
    icon: Activity,
    card: "Reclaim stillness in a constantly busy life.",
    hero: burnoutImg,
    tagline: "Stillness is not a luxury. It is a necessity.",
    headline: "Therapy and skills for a nervous system that has forgotten how to rest.",
    intro: "Mindfulness-based stress reduction, cognitive tools and sustainable lifestyle work.",
    story: "We help you move from constant reaction to genuine response — at work, at home and in your own body.",
    benefits: [
      { title: "Calmer baseline", desc: "A quieter inner setting to return to." },
      { title: "Clear thinking", desc: "Decisions made from steadiness, not pressure." },
      { title: "Better sleep", desc: "A body that knows how to settle again." },
      { title: "Sustainable rhythms", desc: "Boundaries and habits you can actually keep." },
    ],
    process: [
      { step: "01", title: "Stress mapping", desc: "Understanding the shape and sources of your stress." },
      { step: "02", title: "Skills training", desc: "Mindfulness, breath and cognitive tools you can use daily." },
      { step: "03", title: "Lifestyle review", desc: "Gentle, realistic changes to your week." },
      { step: "04", title: "Maintenance", desc: "Periodic sessions to keep your system in balance." },
    ],
    forWho: [
      "Professionals living near or in burnout",
      "Parents and caregivers stretched too thin",
      "Students under chronic academic pressure",
      "Anyone who feels they cannot remember how to rest",
    ],
    expectations: sharedExpectations,
    faqs: sharedFaqs,
    testimonial: { quote: "I had forgotten what it felt like to exhale.", author: "Client, 40" },
    detail: {
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85",
      heroAlt: "A misty mountain landscape at dawn",
      tagline: "Stillness is not a luxury. It is a necessity.",
      openingQuote: "Almost everything will work again if you unplug it for a few minutes — including you.",
      openingQuoteAuthor: "Anne Lamott",
      sections: [
        {
          heading: "What Chronic Stress Does to You",
          paragraphs: [
            "When stress is brief, it sharpens us. When it becomes a constant companion, it begins to wear down the very systems that were designed to protect us.",
            "Cortisol stays high. Sleep becomes thin. Digestion suffers. Memory blurs. The body that was meant to move between effort and rest becomes stuck in one gear — and over time, that gear breaks.",
            "Modern life often quietly applauds this state, calling it productivity or dedication. The cost shows up later, in burnout, in illness, in a slow erosion of the parts of yourself you most love.",
          ],
          image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80",
          imageAlt: "A quiet desk by a window at the end of a long day",
        },
        {
          heading: "Learning to Respond, Not React",
          paragraphs: [
            "Our work begins by gently helping your nervous system remember a different setting. Through Mindfulness-Based Stress Reduction (MBSR), you learn to notice the moment stress begins, rather than discovering it hours later in your shoulders or sleep.",
            "Cognitive restructuring helps soften the thoughts that quietly drive much of your stress — the inner standards, the catastrophising, the constant sense of falling behind.",
            "We also draw on the neuroscience of the relaxation response: the simple, repeatable practices that teach your body it is safe to come down.",
          ],
          image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80",
          imageAlt: "A peaceful meditation cushion in soft light",
          sideQuote: "Within you, there is a stillness and sanctuary to which you can retreat at any time. — Hermann Hesse",
        },
        {
          heading: "Building a Life With More Space",
          paragraphs: [
            "True stress management is not another thing on your list. It is a slow, honest redesign of how you spend your hours, your attention and your yes.",
            "Together we look at boundaries, recovery, rest and the small daily rituals that protect your energy — so that calm becomes a place you live in, not a place you visit on weekends.",
          ],
          image: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=1200&q=80",
          imageAlt: "A wide quiet field under an open sky",
        },
      ],
      closingStatement: "You were not built to be constantly busy. You were built to feel alive — and we can help you remember what that feels like.",
      closingQuote: "Tension is who you think you should be. Relaxation is who you are.",
      closingQuoteAuthor: "Chinese Proverb",
    },
  },
];

// Attach unique hero+quote detail pages to every service that didn't already have one.
import { extraServiceDetails } from "./serviceDetailsExtra";
for (const s of services) {
  if (!s.detail && extraServiceDetails[s.slug]) {
    s.detail = extraServiceDetails[s.slug];
  }
}

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
