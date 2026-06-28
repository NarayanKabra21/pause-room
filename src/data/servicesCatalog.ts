import {
  Brain, Compass, ClipboardList, Lightbulb, BookOpen,
  Baby, User, UserCheck, Briefcase, Heart, Wrench, Users, UsersRound,
  GraduationCap, Presentation, Sparkles, Leaf,
  HeartHandshake, Building2, School, Globe, Focus,
  type LucideIcon,
} from "lucide-react";

export type CatalogCategorySlug =
  | "assessments"
  | "therapy"
  | "workshops"
  | "classes";

export type CatalogCategory = {
  slug: CatalogCategorySlug;
  title: string;
  description: string;
  items: CatalogItem[];
};

export type CatalogSubsection = {
  title: string;
  what: string;
  why: string;
  outcomes: string[];
  benefits: { title: string; desc: string }[];
  whoCanBenefit: string[];
};

export type CatalogItem = {
  slug: string;
  title: string;
  shortDesc: string;
  cardImage: string;
  heroImage: string;
  icon: LucideIcon;
  category: CatalogCategorySlug;
  categoryLabel: string;
  quote: string;
  quoteAuthor: string;
  what: string;
  why: string;
  whoCanBenefit: string[];
  outcomes: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  subsections?: CatalogSubsection[];
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

const sharedProcess = [
  { step: "01", title: "Gentle intake", desc: "A first conversation to understand your story, context, and what you hope for." },
  { step: "02", title: "Tailored plan", desc: "An approach shaped around you — never a template, never rushed." },
  { step: "03", title: "Held sessions", desc: "Warm, confidential meetings that meet you exactly where you are." },
  { step: "04", title: "Integration", desc: "Tools and reflections that quietly travel with you into daily life." },
];

const sharedFaqs = [
  { q: "How do I begin?", a: "Reach out through our contact form, phone or email. We'll guide you gently from the very first message." },
  { q: "Is everything confidential?", a: "Yes. What you share stays inside our therapeutic walls, with rare safety-related exceptions." },
  { q: "Can this happen online?", a: "Yes. Our online sessions are designed to feel as warm and grounded as in-person." },
];

// ===== ASSESSMENTS =====
const assessments: CatalogItem[] = [
  {
    slug: "career-aptitude-assessment",
    title: "Career Aptitude & Interest Assessment",
    shortDesc: "Discover the work that quietly matches who you already are.",
    cardImage: u("photo-1454165804606-c3d57bc86b40"),
    heroImage: u("photo-1500382017468-9049fed747ef", 1920),
    icon: Compass,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    quoteAuthor: "Mark Twain",
    what: "A scientifically validated assessment that maps your aptitudes, abilities, interests and values to careers and fields where you are naturally likely to thrive.",
    why: "Most life and career choices are quietly borrowed — from family, peers, or culture. A careful assessment helps separate what is truly yours from what was simply handed to you, so the next chapter is one you actually want to write.",
    whoCanBenefit: [
      "Students choosing streams, colleges, or majors",
      "Young adults exploring early career paths",
      "Professionals considering a meaningful change",
      "Parents seeking informed guidance for their child",
    ],
    outcomes: [
      "A clearer picture of your natural strengths and inclinations",
      "Confidence in academic and career decisions",
      "A roadmap of paths aligned with who you are",
      "Practical next steps you can actually take",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Clarity of fit", desc: "Understand the environments and roles where you naturally thrive." },
      { title: "Confident choices", desc: "Make academic and career decisions with calm certainty." },
      { title: "Strengths-based view", desc: "See yourself through what you do well, not what you lack." },
      { title: "Honest direction", desc: "A roadmap of paths shaped around who you already are." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "personality-profile-assessment",
    title: "Personality Profile Assessment",
    shortDesc: "A gentler, more honest mirror for understanding yourself.",
    cardImage: u("photo-1499209974431-9dddcece7f88"),
    heroImage: u("photo-1518709268805-4e9042af2176", 1920),
    icon: User,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "Knowing yourself is the beginning of all wisdom.",
    quoteAuthor: "Aristotle",
    what: "A clinical exploration of enduring traits, emotional patterns, temperament and behavioural tendencies that shape how you think, feel and relate.",
    why: "Personality patterns quietly shape every relationship, every decision, every reaction. Understanding them with compassion makes growth targeted — and self-acceptance much easier.",
    whoCanBenefit: [
      "Adults wanting to understand their inner patterns",
      "Those navigating recurring relationship difficulties",
      "Anyone considering long-term therapy",
      "Individuals seeking clinical clarity on personality concerns",
    ],
    outcomes: [
      "A clearer map of your inner architecture",
      "Language for things you've never been able to name",
      "Direction for the most meaningful inner work",
      "A softer, more honest relationship with yourself",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Self-awareness", desc: "See the patterns shaping your life from the inside." },
      { title: "Better relationships", desc: "Understand how you connect, withdraw and react under stress." },
      { title: "Targeted growth", desc: "Direct your inner work where it will matter most." },
      { title: "Clinical clarity", desc: "Identify personality-related concerns early and gently." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "diagnostic-psychometry",
    title: "Diagnostic Psychometry",
    shortDesc: "Careful clarity around ADHD, anxiety, depression and more.",
    cardImage: u("photo-1532012197267-da84d127e765"),
    heroImage: u("photo-1456406644174-8ddd4cd52a06", 1920),
    icon: ClipboardList,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "It is okay to have a mental illness. It is not okay to be alone in it.",
    quoteAuthor: "Glenn Close",
    what: "Standardised psychological assessments used to evaluate concerns such as ADHD, autism spectrum traits, anxiety, depression, bipolar spectrum patterns and other emotional or behavioural difficulties.",
    why: "When something inside has felt off for a long time, a careful diagnostic picture can be grounding. The goal is never a label — it is shared language so that support can finally match the actual need.",
    whoCanBenefit: [
      "Adults exploring possible ADHD or autism",
      "Individuals with persistent anxiety or mood difficulties",
      "Families seeking diagnostic clarity for a loved one",
      "Anyone preparing for psychiatric or therapeutic care",
    ],
    outcomes: [
      "An accurate, clinically grounded diagnostic picture",
      "Clear direction for therapy, medication and lifestyle",
      "Validation for what you've quietly been carrying",
      "A written report and warm, unhurried debrief",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Accurate diagnosis", desc: "Move from guesswork to a clear clinical picture." },
      { title: "Treatment direction", desc: "Findings guide therapy, medication and lifestyle decisions." },
      { title: "Quiet validation", desc: "Naming what you've carried can be its own relief." },
      { title: "Family understanding", desc: "Loved ones gain language for what they're witnessing." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "neuropsychological-assessment",
    title: "Neuropsychological Assessment",
    shortDesc: "Understanding attention, memory and how your mind moves.",
    cardImage: u("photo-1519681393784-d120267933ba"),
    heroImage: u("photo-1517842645767-c639042777db", 1920),
    icon: Brain,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "The mind is everything. What you think you become.",
    quoteAuthor: "Buddha",
    what: "A detailed evaluation of cognitive functions — attention, memory, language, executive functioning, processing speed and learning abilities — and how they shape your real, everyday life.",
    why: "When something in the cognitive system is straining, daily life quietly grows harder. A careful assessment helps you and your care team understand exactly where support belongs.",
    whoCanBenefit: [
      "Individuals with concerns about memory or focus",
      "Those recovering from injury or neurological illness",
      "Students whose learning doesn't match their effort",
      "Adults seeking clarity around cognitive change",
    ],
    outcomes: [
      "A real-world picture of how your mind works",
      "Specific, actionable recommendations",
      "Documentation for medical, educational or workplace teams",
      "A quieter relationship with your own brain",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Cognitive clarity", desc: "Understand the specific shape of your attention and memory." },
      { title: "Tailored support", desc: "Interventions matched to your real strengths and gaps." },
      { title: "Functional insight", desc: "See how cognition shows up in school, work or daily life." },
      { title: "Care planning", desc: "Findings inform medical, therapeutic and educational teams." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "iq-assessment",
    title: "IQ Assessment",
    shortDesc: "A holistic look at reasoning, memory and intellectual functioning.",
    cardImage: u("photo-1513569771920-c9e1d31714af"),
    heroImage: u("photo-1503676260728-1c00da094a0b", 1920),
    icon: Lightbulb,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    quoteAuthor: "Albert Einstein",
    what: "Validated IQ batteries that measure reasoning, problem-solving, verbal comprehension, memory and processing speed — interpreted by a trained psychologist as one careful instrument among many.",
    why: "An IQ score is never a verdict. It is a useful lens on cognitive strengths and stretches that, in the right hands, supports better academic, developmental and personal decisions.",
    whoCanBenefit: [
      "Children with learning or developmental questions",
      "Students seeking academic accommodations",
      "Adults curious about their cognitive profile",
      "Families exploring giftedness or learning needs",
    ],
    outcomes: [
      "A clearer view of your cognitive strengths",
      "Direction for academic planning and support",
      "A more compassionate sense of self",
      "Practical recommendations you can act on",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Strengths revealed", desc: "Identify the cognitive areas where you naturally excel." },
      { title: "Targeted support", desc: "Direct help where it will make the biggest difference." },
      { title: "Academic planning", desc: "Informed decisions about learning paths and accommodations." },
      { title: "Developmental clarity", desc: "Understand a child's profile with compassion, not pressure." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "sld-assessment",
    title: "Learning Disability Assessment",
    shortDesc: "Naming and supporting specific learning differences.",
    cardImage: u("photo-1497486751825-1233686d5d80"),
    heroImage: u("photo-1456513080510-7bf3a84b82f8", 1920),
    icon: BookOpen,
    category: "assessments",
    categoryLabel: "Assessments",
    quote: "Children must be taught how to think, not what to think.",
    quoteAuthor: "Margaret Mead",
    what: "A child-friendly evaluation of specific learning difficulties in reading, writing, spelling and mathematics, integrated with developmental and emotional context.",
    why: "When a bright child keeps struggling despite real effort, the gap between work and outcome quietly erodes confidence. Naming a learning difference is the beginning of supporting it properly.",
    whoCanBenefit: [
      "Children struggling with reading, writing or maths",
      "Students whose effort doesn't match their results",
      "Parents seeking clarity around school recommendations",
      "Families preparing for accommodation requests",
    ],
    outcomes: [
      "A clear, school-ready report",
      "Evidence-based recommendations for home and school",
      "Documentation that supports accommodations",
      "A child who finally feels understood",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Early identification", desc: "Recognise learning challenges before they erode confidence." },
      { title: "Educational planning", desc: "Evidence-based recommendations for school and home." },
      { title: "Accommodation support", desc: "Documentation that helps schools provide the right help." },
      { title: "Self-understanding", desc: "Children stop blaming themselves for how their brain learns." },
    ],
    faqs: sharedFaqs,
  },
];

// ===== THERAPY & COUNSELLING =====
const therapy: CatalogItem[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    shortDesc: "One-on-one care for every season of life — from childhood to grief.",
    cardImage: u("photo-1573497019940-1c28c88b4f3e"),
    heroImage: u("photo-1499209974431-9dddcece7f88", 1920),
    icon: User,
    category: "therapy",
    categoryLabel: "Therapy & Counselling",
    quote: "Out of your vulnerabilities will come your strength.",
    quoteAuthor: "Sigmund Freud",
    what: "Individual therapy at The Pause Room holds the full arc of a person — children learning their feelings, adolescents finding their voice, adults carrying long-held weight, and those walking through loss. Each conversation is shaped around the human in the room.",
    why: "Personal struggles deserve personal care. A space designed for one person at a time allows feelings, patterns and stories to be met without rush — and quietly reshaped.",
    whoCanBenefit: [
      "Children, adolescents and adults of any age",
      "Anyone navigating anxiety, mood or behavioural concerns",
      "Those moving through grief, transition or change",
      "People wanting deeper self-understanding",
    ],
    outcomes: [
      "Steadier inner ground across life's seasons",
      "Healthier coping with feelings and stress",
      "Tools that travel with you beyond the room",
      "A softer, more honest relationship with yourself",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Lifespan care", desc: "Therapy attuned to every age and stage." },
      { title: "Held listening", desc: "Weekly sessions that meet you where you are." },
      { title: "Evidence-based", desc: "Approaches grounded in contemporary psychology." },
      { title: "Whole-person view", desc: "Inner work that respects your full story." },
    ],
    faqs: sharedFaqs,
    subsections: [
      {
        title: "Child Counselling",
        what: "Play-based and developmentally tuned therapy that helps children understand their feelings, regulate behaviour, and feel safe in their inner world.",
        why: "Children often carry more than they have words for. A careful therapeutic space gives those quiet feelings a place to land — and quietly grows confidence, regulation and connection.",
        outcomes: [
          "Better emotional regulation",
          "Stronger confidence at home and school",
          "Healthier coping skills",
          "A calmer, more connected family rhythm",
        ],
        benefits: [
          { title: "Emotional regulation", desc: "Tools to recognise and ride big feelings safely." },
          { title: "Confidence", desc: "A stronger sense of self in school and at home." },
          { title: "Healthier coping", desc: "Skills that replace withdrawal or acting out." },
          { title: "Family understanding", desc: "Parents gain strategies that actually work." },
        ],
        whoCanBenefit: [
          "Children with anxiety, anger or sadness",
          "Children navigating family changes",
          "Young ones with behavioural difficulties",
          "Children recovering from difficult experiences",
        ],
      },
      {
        title: "Adolescent Counselling",
        what: "Confidential, age-attuned therapy for teenagers navigating identity, friendships, academic pressure, mood, family dynamics and the noisy weight of becoming.",
        why: "Adolescence is a season of intense change. A space that listens before it advises gives teens room to think, feel and find their own voice.",
        outcomes: [
          "A safer relationship with their own emotions",
          "More effective coping with school and social stress",
          "A stronger, clearer sense of self",
          "Quieter, more honest communication at home",
        ],
        benefits: [
          { title: "Inner safety", desc: "A confidential space designed for adolescents." },
          { title: "Real coping skills", desc: "Tools that actually fit a teen's daily life." },
          { title: "Identity work", desc: "Support for the quiet questions of becoming." },
          { title: "Family bridges", desc: "Periodic parent sessions that ease the home." },
        ],
        whoCanBenefit: [
          "Teens struggling with school or friendships",
          "Adolescents with anxiety, low mood or anger",
          "Young people exploring identity and selfhood",
          "Families navigating a tense teenage season",
        ],
      },
      {
        title: "Adult Counselling",
        what: "One-on-one therapy for adults navigating stress, relationships, emotional weight, life transitions, or simply the quiet need to be heard with care.",
        why: "Adult life often asks us to hold a great deal in silence. Therapy returns the breath — a place to lay things down, look at them honestly, and gently reshape them.",
        outcomes: [
          "A steadier inner ground",
          "Healthier relationships with self and others",
          "Tools for emotion, stress and self-talk",
          "A more compassionate inner voice",
        ],
        benefits: [
          { title: "Held listening", desc: "A weekly space that doesn't rush you." },
          { title: "Pattern insight", desc: "Understanding the loops that shape your life." },
          { title: "Practical tools", desc: "Skills for emotion, communication and stress." },
          { title: "Self-compassion", desc: "A softer, kinder relationship with yourself." },
        ],
        whoCanBenefit: [
          "Adults carrying long-held emotional weight",
          "Those navigating life transitions or burnout",
          "Anyone wanting deeper self-understanding",
          "People seeking ongoing, weekly support",
        ],
      },
      {
        title: "Cognitive Rehabilitation",
        what: "Evidence-based therapy designed to help people improve or compensate for difficulties in attention, memory, and executive functioning which may be caused by brain injury, neurological conditions, or neurocognitive conditions.",
        why: "When the mind's usual pathways are disrupted, everyday tasks can feel unfamiliar and exhausting. Cognitive rehabilitation offers structured, compassionate support to rebuild lost skills, develop compensatory strategies, and restore confidence in daily life.",
        outcomes: [
          "Improved attention and concentration in daily tasks",
          "Better memory recall and organisational skills",
          "Stronger executive functioning and problem-solving",
          "Renewed confidence in work, home and social life",
        ],
        benefits: [
          { title: "Targeted recovery", desc: "Interventions focused on the specific cognitive areas affected." },
          { title: "Practical strategies", desc: "Compensatory tools that make daily life manageable again." },
          { title: "Holistic support", desc: "Care that considers emotional well-being alongside cognition." },
          { title: "Progress tracking", desc: "Clear milestones that honour every step forward." },
        ],
        whoCanBenefit: [
          "Individuals recovering from brain injury or stroke",
          "Those living with neurological or neurocognitive conditions",
          "People experiencing attention or memory difficulties",
          "Anyone seeking to rebuild cognitive confidence after illness",
        ],
      },
      {
        title: "Behaviour Modification Therapy",
        what: "Structured behavioural approaches that help children and adults shift specific behaviours, build new habits, and replace unhelpful patterns with sustainable ones.",
        why: "Some changes ask for more than insight. Targeted behavioural work makes change measurable, gentle and lasting — without shaming the person inside the pattern.",
        outcomes: [
          "Specific, lasting behavioural shifts",
          "Healthier daily routines",
          "Calmer family or work dynamics",
          "Tools that outlive the therapy itself",
        ],
        benefits: [
          { title: "Targeted change", desc: "Clear behavioural goals you can actually feel." },
          { title: "Measurable progress", desc: "Small, honest wins that build into momentum." },
          { title: "Sustainable habits", desc: "Patterns built to last beyond the room." },
          { title: "Compassion first", desc: "Change without shaming who you've been." },
        ],
        whoCanBenefit: [
          "Children with behavioural difficulties",
          "Adults wanting to break a stuck pattern",
          "Families navigating recurring conflict",
          "People building new lifestyle habits",
        ],
      },
      {
        title: "Grief Counselling",
        what: "Gentle, patient therapy for the many shapes of loss — death, relationships, health, identity, possibility — held without timelines or expectations.",
        why: "Grief is not a problem to be solved. It is a love that needs somewhere to go. Therapy offers a steady place for it to be witnessed, honoured and slowly carried.",
        outcomes: [
          "A safe, unhurried place for your loss",
          "Tools for the harder waves",
          "Gentle integration of the loss into your life",
          "A continued relationship with what you've loved",
        ],
        benefits: [
          { title: "Witnessed sorrow", desc: "Your loss met with presence, never urgency." },
          { title: "Permission to feel", desc: "A space free of timelines and expectations." },
          { title: "Gentle integration", desc: "Carrying loss without being carried away by it." },
          { title: "Quiet meaning", desc: "Finding what your love still asks of you." },
        ],
        whoCanBenefit: [
          "Those grieving the death of a loved one",
          "People processing relationship loss or divorce",
          "Anyone navigating health, identity or life loss",
          "People whose grief has gone quiet but not away",
        ],
      },
    ],
  },
  {
    slug: "family-relationship-support",
    title: "Family & Relationship Support",
    shortDesc: "Therapy for the bonds that hold us — parents, partners, families and groups.",
    cardImage: u("photo-1476703993599-0035a21b17a9"),
    heroImage: u("photo-1591779051696-1c3fa1469a79", 1920),
    icon: HeartHandshake,
    category: "therapy",
    categoryLabel: "Therapy & Counselling",
    quote: "We are all just walking each other home.",
    quoteAuthor: "Ram Dass",
    what: "Support for the relationships that shape us most — between parents and children, partners, family members, and the wider circles of belonging that quietly carry our well-being.",
    why: "Healing rarely happens alone. When the relationships around us shift, the inner weather changes too. This work tends to the connections that quietly hold a life together.",
    whoCanBenefit: [
      "Parents navigating a child's emotional or behavioural needs",
      "Couples and families seeking deeper connection",
      "Individuals wanting community in healing",
      "Anyone working on relational patterns",
    ],
    outcomes: [
      "Calmer, more connected family rhythms",
      "Healthier communication and repair",
      "A sense of being seen within your relationships",
      "Skills that ripple beyond the therapy room",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Relational lens", desc: "Care that holds you within your full context." },
      { title: "Practical tools", desc: "Communication and repair skills you can use." },
      { title: "Shared healing", desc: "Spaces where growth happens together." },
      { title: "Belonging", desc: "Therapy that softens isolation." },
    ],
    faqs: sharedFaqs,
    subsections: [
      {
        title: "Parental Counselling",
        what: "Reflective, practical support for parents navigating a child's emotional, behavioural or developmental needs — and the inner weight of parenting itself.",
        why: "Parenting is one of the most demanding emotional labours in any life. A space designed for parents — not just children — softens the home from the inside.",
        outcomes: [
          "Calmer, more confident parenting",
          "Strategies that fit your child and family",
          "A softer relationship with your own parenting",
          "Stronger emotional attunement at home",
        ],
        benefits: [
          { title: "Real strategies", desc: "Approaches matched to your specific child." },
          { title: "Inner steadying", desc: "Support for the parent's own emotional load." },
          { title: "Communication", desc: "Language that lowers conflict and raises connection." },
          { title: "Family rhythm", desc: "A home that breathes a little more easily." },
        ],
        whoCanBenefit: [
          "Parents of children with anxiety or behavioural concerns",
          "Couples navigating parenting differences",
          "Single parents seeking grounded support",
          "Parents of adolescents or neurodivergent children",
        ],
      },
      {
        title: "Group Therapy",
        what: "Carefully held therapy groups where individuals walking similar paths can listen, share and grow together under the guidance of a trained therapist.",
        why: "Some kinds of healing only happen in the presence of others. Group work softens isolation, normalises experience, and builds emotional skills through real connection.",
        outcomes: [
          "Reduced isolation and shame",
          "New language through hearing others",
          "Real interpersonal practice",
          "A quiet sense of belonging",
        ],
        benefits: [
          { title: "Shared humanity", desc: "The relief of not being alone in your story." },
          { title: "Live practice", desc: "Relational skills you can only build with others." },
          { title: "Multiple mirrors", desc: "Insight that comes from many gentle perspectives." },
          { title: "Belonging", desc: "A small, steady circle that holds your weeks." },
        ],
        whoCanBenefit: [
          "People struggling with isolation or loneliness",
          "Those navigating anxiety, grief or burnout",
          "Adults wanting a sense of community in healing",
          "Anyone curious about a different therapeutic form",
        ],
      },
    ],
  },
  {
    slug: "personal-growth-life-transitions",
    title: "Personal Growth & Life Transitions",
    shortDesc: "Direction and grounding for the turning points of an adult life.",
    cardImage: u("photo-1521791136064-7986c2920216"),
    heroImage: u("photo-1434030216411-0b793f4b4173", 1920),
    icon: Compass,
    category: "therapy",
    categoryLabel: "Therapy & Counselling",
    quote: "Your work is to discover your work and then with all your heart to give yourself to it.",
    quoteAuthor: "Buddha",
    what: "Therapy for the seasons of choice and change — career questions, life transitions, identity shifts, and the quiet search for direction that asks for more than advice.",
    why: "Transitions ask us to become someone slightly new. A steady, reflective space helps that becoming happen with clarity instead of confusion.",
    whoCanBenefit: [
      "Students and professionals facing decisions",
      "Adults in mid-life or career re-evaluation",
      "Anyone navigating burnout or change",
      "People searching for direction and meaning",
    ],
    outcomes: [
      "Clarity around what matters most to you",
      "A grounded framework for decisions",
      "Permission to choose your own next chapter",
      "Confidence rooted in self-knowledge",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Reflective space", desc: "Room to think before you decide." },
      { title: "Honest direction", desc: "Insight shaped around who you actually are." },
      { title: "Practical framing", desc: "Decision tools that quiet the spiral." },
      { title: "Grounded confidence", desc: "Choices you can stand behind." },
    ],
    faqs: sharedFaqs,
    subsections: [
      {
        title: "Career Counselling",
        what: "Reflective conversations and structured assessments that help you understand your skills, values and direction — and make career decisions you can actually stand behind.",
        why: "Career stuckness is rarely just professional. Underneath it lives identity, fear, family expectations and quiet self-doubt. We hold the whole picture.",
        outcomes: [
          "Clarity around your skills and values",
          "A grounded decision-making framework",
          "Practical next steps for your next chapter",
          "Quieter inner permission to choose",
        ],
        benefits: [
          { title: "Honest reflection", desc: "Space to sift through what you actually want." },
          { title: "Structured insight", desc: "Assessments that bring real data into the room." },
          { title: "Decision support", desc: "A framework for choosing without spiralling." },
          { title: "Confidence", desc: "Clarity that quietly lifts the next step." },
        ],
        whoCanBenefit: [
          "Students choosing a path",
          "Mid-career professionals reconsidering direction",
          "Adults navigating burnout or job dissatisfaction",
          "People returning to work after a break",
        ],
      },
    ],
  },
];

// ===== WORKSHOPS, SEMINARS & WEBINARS =====
const workshops: CatalogItem[] = [
  {
    slug: "corporate-workshops",
    title: "Corporate",
    shortDesc: "Workplace wellbeing, resilience and emotionally intelligent leadership.",
    cardImage: u("photo-1556761175-5973dc0f32e7"),
    heroImage: u("photo-1521737604893-d14cc237f11d", 1920),
    icon: Building2,
    category: "workshops",
    categoryLabel: "Workshops, Seminars & Webinars",
    quote: "Take care of your employees, and they'll take care of your business.",
    quoteAuthor: "Richard Branson",
    what: "Workshops designed for organisations and teams — focused on employee mental health, workplace wellbeing, stress management, resilience, leadership, emotional intelligence and team wellness.",
    why: "Well-being is the quiet foundation of sustainable, humane work. Teams that feel emotionally safe think more clearly, collaborate more honestly and stay longer.",
    whoCanBenefit: [
      "Organisations of any size",
      "People & culture and HR teams",
      "Leadership and management groups",
      "Teams navigating change, stress or burnout",
    ],
    outcomes: [
      "Stronger team well-being and morale",
      "Practical tools for stress and burnout",
      "Healthier communication and leadership norms",
      "A more psychologically safe workplace",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Tailored content", desc: "Designed around your team's real context." },
      { title: "Leadership-aware", desc: "Tools for managers and individual contributors." },
      { title: "Resilience-building", desc: "Skills that hold up under pressure." },
      { title: "Measured impact", desc: "Outcomes you can actually feel in the team." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "child-adolescent-workshops",
    title: "School and College",
    shortDesc: "Emotional wellbeing for children, teens, parents, teachers and schools.",
    cardImage: u("photo-1523580494863-6f3031224c94"),
    heroImage: u("photo-1509062522246-3755977927d7", 1920),
    icon: School,
    category: "workshops",
    categoryLabel: "Workshops, Seminars & Webinars",
    quote: "The way we talk to our children becomes their inner voice.",
    quoteAuthor: "Peggy O'Mara",
    what: "Workshops for children, teenagers, parents, teachers and schools — covering emotional wellbeing, behavioural development, social skills, academic stress and parenting support.",
    why: "Reaching young people early — and the adults around them — gently changes how a whole generation relates to its own mind.",
    whoCanBenefit: [
      "Schools, colleges and educators",
      "Parents and caregivers",
      "Teenagers and young adults",
      "Counsellors and youth-focused organisations",
    ],
    outcomes: [
      "Practical mental-health literacy for young people",
      "Calmer, more attuned parenting",
      "Healthier classroom and home dynamics",
      "Earlier support-seeking and reduced stigma",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Age-attuned", desc: "Sessions built for the developmental moment." },
      { title: "Whole-system", desc: "Holds children, parents and teachers together." },
      { title: "Interactive", desc: "Engagement that meets young people where they are." },
      { title: "Stigma-softening", desc: "Conversations that quietly change culture." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "mental-health-awareness-workshops",
    title: "Other Mental Healths",
    shortDesc: "Anxiety, depression, relationships, mindfulness and personal growth.",
    cardImage: u("photo-1545389336-cf090694435e"),
    heroImage: u("photo-1499914485622-a88fac536970", 1920),
    icon: Sparkles,
    category: "workshops",
    categoryLabel: "Workshops, Seminars & Webinars",
    quote: "Mental health is not a destination, but a process.",
    quoteAuthor: "Noam Shpancer",
    what: "Workshops on general mental health themes — anxiety, depression, relationships, self-care, mindfulness, emotional regulation, grief, personal growth and community awareness.",
    why: "Communities change when accurate, compassionate knowledge becomes ordinary. These workshops translate ideas into lived skills people can carry home.",
    whoCanBenefit: [
      "Individuals exploring their inner life",
      "Community and faith groups",
      "People not yet ready for individual therapy",
      "Anyone seeking grounded mental-health knowledge",
    ],
    outcomes: [
      "Practical, daily-use skills",
      "Greater self-awareness and self-compassion",
      "A small community of practice",
      "Tools rooted in contemporary psychology",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Experiential", desc: "Practice and reflection, not lectures." },
      { title: "Evidence-based", desc: "Drawn from contemporary psychology." },
      { title: "Community", desc: "Held alongside others walking similar paths." },
      { title: "Take-home", desc: "Practices that travel with you afterwards." },
    ],
    faqs: sharedFaqs,
  },
];

// ===== CLASSES & TRAINING =====
const classes: CatalogItem[] = [
  {
    slug: "attention-training",
    title: "Attention Training",
    shortDesc: "Structured programmes to strengthen focus and attention.",
    cardImage: u("photo-1503676260728-1c00da094a0b"),
    heroImage: u("photo-1497486751825-1233686d5d80", 1920),
    icon: Focus,
    category: "classes",
    categoryLabel: "Classes & Training Programs",
    quote: "Where attention goes, energy flows.",
    quoteAuthor: "James Redfield",
    what: "Evidence-based programmes designed to strengthen attention, concentration and working memory in children and adults — through structured cognitive tasks and gentle daily practice.",
    why: "Attention is the doorway through which almost everything in life passes. Training it gently widens the door — and quiet things grow easier.",
    whoCanBenefit: [
      "Children with attention difficulties",
      "Students struggling with focus",
      "Adults with ADHD or attention concerns",
      "Anyone wanting sharper, calmer focus",
    ],
    outcomes: [
      "Measurable gains in focus and concentration",
      "Better academic and work performance",
      "Reduced overwhelm",
      "A calmer relationship with attention",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Structured practice", desc: "A clear, progressive programme." },
      { title: "Real outcomes", desc: "Gains you can feel in daily life." },
      { title: "Age-flexible", desc: "Adapted for children, teens and adults." },
      { title: "Compassionate pacing", desc: "Training without pressure or shame." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "social-skills-training",
    title: "Social Skills Training",
    shortDesc: "Building confidence, friendship and connection.",
    cardImage: u("photo-1543269865-cbf427effbad"),
    heroImage: u("photo-1529156069898-49953e39b3ac", 1920),
    icon: Users,
    category: "classes",
    categoryLabel: "Classes & Training Programs",
    quote: "We are wired to connect. Neuroscience has discovered that our brain's very design makes it sociable.",
    quoteAuthor: "Daniel Goleman",
    what: "Group and individual programmes that build conversation, friendship, emotional reading and confident social engagement — especially helpful for children and adolescents.",
    why: "Social skills are quietly learnable. With the right space and practice, even children who have always struggled with connection can find their way into easier friendships.",
    whoCanBenefit: [
      "Children with social difficulties",
      "Adolescents wanting more social confidence",
      "Neurodivergent young people",
      "Adults seeking to grow socially",
    ],
    outcomes: [
      "Real, transferable social skills",
      "Greater confidence in groups",
      "Healthier peer relationships",
      "A quieter relationship with social anxiety",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Skill building", desc: "Specific, teachable social skills." },
      { title: "Safe practice", desc: "A held space to try, fumble and grow." },
      { title: "Confidence", desc: "Small wins that build into ease." },
      { title: "Friendship", desc: "The quiet relief of belonging." },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "special-education-support",
    title: "Special Education Support",
    shortDesc: "Individualised learning for diverse minds.",
    cardImage: u("photo-1580582932707-520aed937b7b"),
    heroImage: u("photo-1607453998774-d533f65dac99", 1920),
    icon: GraduationCap,
    category: "classes",
    categoryLabel: "Classes & Training Programs",
    quote: "Every child you encounter is a divine appointment.",
    quoteAuthor: "Wess Stafford",
    what: "Individualised academic and developmental support for children with diverse learning needs, designed in close collaboration with parents and schools.",
    why: "Children deserve to be taught in the way they actually learn. Tailored special-education support quietly returns confidence to children who have begun to doubt themselves.",
    whoCanBenefit: [
      "Children with specific learning disabilities",
      "Students needing one-on-one academic support",
      "Families seeking school-aligned intervention",
      "Children with developmental learning differences",
    ],
    outcomes: [
      "Real, measurable academic growth",
      "Restored confidence in learning",
      "A clear plan shared with the child's school",
      "A calmer learning life at home",
    ],
    process: sharedProcess,
    benefits: [
      { title: "Personalised pace", desc: "Programmes shaped around each child." },
      { title: "Academic growth", desc: "Honest, measurable progress." },
      { title: "Confidence", desc: "Children rediscover that learning can feel good." },
      { title: "Family alignment", desc: "Parents and educators on the same page." },
    ],
    faqs: sharedFaqs,
  },
];


export const serviceCategories: CatalogCategory[] = [
  {
    slug: "assessments",
    title: "Assessments",
    description:
      "Our comprehensive psychological assessments help individuals understand their strengths, challenges, emotional functioning, learning patterns, and cognitive abilities through scientifically validated tools.",
    items: assessments,
  },
  {
    slug: "therapy",
    title: "Therapy & Counselling",
    description:
      "Therapy provides a safe and supportive space to understand emotions, overcome challenges, build resilience, and create meaningful change.",
    items: therapy,
  },
  {
    slug: "workshops",
    title: "Workshops, Seminars & Webinars",
    description:
      "Interactive learning experiences designed to spread awareness, build skills, encourage self-growth, and promote emotional well-being.",
    items: workshops,
  },
];

export const allCatalogItems: CatalogItem[] = serviceCategories.flatMap(
  (c) => c.items,
);

export const getCatalogItem = (slug: string): CatalogItem | undefined =>
  allCatalogItems.find((s) => s.slug === slug);

export const getAdjacent = (slug: string) => {
  const i = allCatalogItems.findIndex((s) => s.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? allCatalogItems[i - 1] : undefined,
    next: i < allCatalogItems.length - 1 ? allCatalogItems[i + 1] : undefined,
  };
};

export const servicesHeroImage = "/__l5e/assets-v1/c7eac256-0116-49c9-b1c5-b5acc4b1a336/services-hero.jpg";
