export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  quote?: string;
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole?: string;
  image: string;
  tags: string[];
  hue: number;
  body: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "quiet-burnout",
    title: "The Quiet Burnout: When You're Still Functioning But No Longer Feeling",
    excerpt:
      "Modern burnout doesn't always announce itself with collapse. More often, it shows up as a slow numbing — productive on the outside, hollow on the inside.",
    category: "Burnout",
    readTime: "8 min",
    date: "June 18, 2026",
    author: "Dr. Aparna Ladha Somani",
    authorRole: "Founder & Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2000&q=80",
    tags: ["Burnout", "Workplace", "Self-care"],
    hue: 215,
    body: [
      {
        paragraphs: [
          "There is a particular kind of exhaustion that doesn't look like exhaustion. You're meeting deadlines. You're answering messages. You're showing up to dinners and birthdays. But somewhere underneath the routine, a small steady voice keeps whispering: I am not really here.",
          "This is what clinicians increasingly describe as quiet burnout — a state where the body keeps producing output while the inner life slowly empties. The World Health Organization formally recognises burnout as a syndrome resulting from chronic workplace stress that has not been successfully managed, marked by exhaustion, mental distance from one's job, and reduced effectiveness. But research from organisations like Gallup and the American Psychological Association keeps reminding us of something more uncomfortable: most people in burnout don't know they are in it.",
        ],
      },
      {
        heading: "How quiet burnout actually shows up",
        paragraphs: [
          "It rarely looks dramatic. It looks like waking up already tired. Like reading the same paragraph four times. Like feeling irritated at the people you love for reasons you can't quite name. Like a Sunday evening that arrives with a soft dread you've learned to ignore.",
        ],
        list: [
          "Emotional flatness — joy and sadness both feel further away than they used to",
          "Tasks that once took thirty minutes now require half a day",
          "A sense that rest doesn't actually restore you anymore",
          "Cynicism towards work, colleagues, or commitments you once cared about",
          "Physical signals: tension headaches, jaw clenching, disturbed sleep, frequent low-grade illness",
        ],
      },
      {
        heading: "Why it happens — and why willpower won't fix it",
        paragraphs: [
          "Burnout is not a character flaw or a productivity problem. It is a physiological response to prolonged stress without adequate recovery. The nervous system, when kept in a low-grade fight-or-flight state for months, begins to down-regulate emotion itself as a protective measure. You stop feeling deeply because feeling deeply has become too expensive.",
          "This is why 'just take a weekend off' rarely works for someone in real burnout. The system has adapted. Recovery has to be slower, longer, and more relational than a single weekend can offer.",
        ],
        quote: "Burnout is not a sign that you are weak. It is a sign that you have been strong, for too long, without enough support.",
      },
      {
        heading: "Small, evidence-based ways to begin",
        paragraphs: [
          "Start by noticing rather than fixing. For one week, simply observe when in the day your energy actually rises and falls — without changing anything. Most people are surprised by what they discover.",
          "Then build what researchers call 'recovery experiences' into ordinary days: psychological detachment from work (a real boundary, not just a closed laptop), relaxation, mastery activities that are not performance-based, and a sense of control over how you spend at least one part of your day.",
          "And if the heaviness has been with you for months — please consider speaking to someone. Burnout that goes unaddressed often deepens into depression, and there is real, gentle, evidence-based help for both.",
        ],
      },
    ],
  },
  {
    slug: "anxiety-modern-mind",
    title: "Anxiety and the Modern Mind: Why So Many of Us Feel Wired and Worried",
    excerpt:
      "Generalised anxiety is rising across age groups. Understanding why your nervous system feels so loud is the first step to gently turning the volume down.",
    category: "Anxiety",
    readTime: "7 min",
    date: "June 4, 2026",
    author: "Swati",
    authorRole: "Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    tags: ["Anxiety", "Nervous system", "Mental health"],
    hue: 200,
    body: [
      {
        paragraphs: [
          "Anxiety, in clinical terms, is not the same as fear. Fear is your body's response to a real, present threat. Anxiety is your body's response to a threat that hasn't happened yet — and may never happen. It is the mind preparing for danger that lives almost entirely in the future.",
          "What's striking about the last decade is how normalised this state has become. The Lancet's global mental health reports estimate that anxiety disorders affect more than 300 million people worldwide, and post-pandemic data shows a sharp rise in younger adults reporting persistent worry, restlessness, and difficulty switching off.",
        ],
      },
      {
        heading: "Why modern life is so anxiety-producing",
        paragraphs: [
          "Three forces compound each other. First, information density — the average person now processes more news in a week than someone in the 1980s did in a year, and the brain is not designed for that volume of alarm. Second, the erosion of natural pauses — meals, commutes, queues — that used to be unspoken nervous-system breaks are now filled with screens. Third, a quiet loss of community: anxiety is significantly higher in people who feel they have no one to call at 2 a.m.",
        ],
      },
      {
        heading: "What actually helps (and what doesn't)",
        paragraphs: [
          "Trying to argue an anxious thought into being logical almost never works. The anxious brain is not asking for facts; it is asking for safety. This is why the most effective evidence-based approaches — Cognitive Behavioural Therapy, Acceptance and Commitment Therapy, somatic and breath-based work — all involve the body, not just the mind.",
        ],
        list: [
          "Slow, extended exhales (longer out than in) directly signal the vagus nerve to calm the body",
          "Naming what you feel out loud — 'I notice anxiety is here' — reduces amygdala activation in fMRI studies",
          "Regular, gentle movement is one of the most consistently effective non-pharmacological treatments for anxiety",
          "Limiting caffeine, especially after noon, has a larger effect on anxiety than most people expect",
          "Therapy, particularly CBT-based approaches, has decades of evidence for sustained reduction in symptoms",
        ],
        quote: "Anxiety is not asking you to solve something. It is asking you to be with yourself, kindly, until the alarm quiets.",
      },
      {
        heading: "When to seek support",
        paragraphs: [
          "Anxiety becomes a clinical concern when it lasts most days for six months or more, when it disrupts sleep, work, or relationships, or when it begins to shrink the life you want to live. None of these mean something is wrong with you. They mean a nervous system that has been carrying too much, for too long, is asking for help.",
        ],
      },
    ],
  },
  {
    slug: "social-media-loneliness",
    title: "The Loneliness of Being Always Connected",
    excerpt:
      "Why scrolling can leave us feeling more alone, and how to build a healthier relationship with the small glowing rectangle in your hand.",
    category: "Social Media",
    readTime: "6 min",
    date: "May 22, 2026",
    author: "Swati",
    authorRole: "Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=2000&q=80",
    tags: ["Social media", "Loneliness", "Digital wellness"],
    hue: 250,
    body: [
      {
        paragraphs: [
          "A 2023 study published in JAMA Psychiatry found that adolescents spending more than three hours a day on social media had double the risk of experiencing symptoms of depression and anxiety, compared to peers who used it less. The story is similar in adults — though usually less talked about.",
          "The mechanism is not just 'comparison'. It is something subtler: the brain treats parasocial connection as a kind of social nourishment, but it is the equivalent of eating air. You feel full enough to skip the meal, but you are quietly starving.",
        ],
      },
      {
        heading: "The paradox of curated connection",
        paragraphs: [
          "We see hundreds of faces a day and speak meaningfully to almost none of them. We know what an acquaintance ate for breakfast in another city but haven't asked our closest friend how their week really was. This is the modern loneliness — not a lack of contact, but a lack of being known.",
        ],
        quote: "We were not designed to witness the highlight reels of a thousand strangers and still feel at home in our own ordinary life.",
      },
      {
        heading: "Building a kinder relationship with your phone",
        list: [
          "Notice the trigger — most compulsive scrolling begins with discomfort: boredom, anxiety, loneliness. Name it before reaching for the phone",
          "Replace, don't restrict — when you remove a scroll, give your nervous system something else: a short walk, a conversation, three slow breaths",
          "Curate ruthlessly — unfollow anything that consistently leaves you feeling smaller. The algorithm will not protect you",
          "Protect the bookends of your day — the first and last 30 minutes are when your nervous system is most porous",
          "Audit weekly — once a week, ask: did my phone serve my life this week, or did my life serve my phone?",
        ],
      },
      {
        heading: "A gentle reframe",
        paragraphs: [
          "The goal is not to abandon social media. The goal is to make sure that when you put the phone down, the life you return to is one you actually want to be in. If it isn't yet — that is information, not failure. It is the beginning of a different kind of choice.",
        ],
      },
    ],
  },
  {
    slug: "parenting-emotional-regulation",
    title: "Raising Emotionally Regulated Children in a Dysregulated World",
    excerpt:
      "Children learn emotional regulation not from what we say about feelings, but from how we are with our own.",
    category: "Parenting",
    readTime: "9 min",
    date: "May 8, 2026",
    author: "Dr. Aparna Ladha Somani",
    authorRole: "Founder & Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=2000&q=80",
    tags: ["Parenting", "Children", "Emotional regulation"],
    hue: 30,
    body: [
      {
        paragraphs: [
          "Decades of attachment research — from John Bowlby's foundational work to Allan Schore's modern neurobiological extensions — point to a humbling truth for parents: a child's capacity to regulate emotion develops through co-regulation with an adult long before it develops on its own. In other words, your nervous system is your child's first classroom.",
          "This is both freeing and demanding. Freeing, because you do not have to find the perfect words during a meltdown. Demanding, because the work begins with your own regulation, not theirs.",
        ],
      },
      {
        heading: "The myth of the calm parent",
        paragraphs: [
          "Emotional regulation does not mean you never feel frustrated, exhausted, or overwhelmed. It means you have a relationship with those feelings — you can notice them, name them, and choose your response rather than be hijacked by it. Children do not need a parent who never gets angry. They need a parent who can repair after getting angry.",
        ],
        quote: "Rupture is unavoidable. Repair is what builds secure attachment.",
      },
      {
        heading: "What the research actually recommends",
        list: [
          "Name feelings, including your own — 'I'm feeling frustrated, I need a minute' teaches more than any lecture about emotions",
          "Co-regulate before you correct — a dysregulated child cannot learn. Soothe first, teach later (sometimes much later)",
          "Validate the feeling, hold the limit — 'You're really angry that screen time is over. I understand. And it's still time to stop.'",
          "Repair after rupture — apologising to a child when you've over-reacted models accountability and protects attachment",
          "Protect their boredom — unscheduled, unscreened time is where children learn to tolerate the small discomforts that build resilience",
        ],
      },
      {
        heading: "The world they're growing up in",
        paragraphs: [
          "Today's children are absorbing more sensory and emotional input than any generation before them. School pressure, social comparison through screens, and an undercurrent of global uncertainty all sit in their small nervous systems. They need adults who can be steady — not perfect, not always patient, but reliably willing to come back, soften, and try again.",
          "That is the work. And it is, in every meaningful way, enough.",
        ],
      },
    ],
  },
  {
    slug: "workplace-wellbeing",
    title: "Workplace Well-Being Isn't a Perk. It's a Public Health Issue.",
    excerpt:
      "Why mental health at work is no longer a soft conversation — and what individuals can do when systems are slow to change.",
    category: "Workplace",
    readTime: "7 min",
    date: "April 24, 2026",
    author: "Swati",
    authorRole: "Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
    tags: ["Workplace", "Stress", "Mental health"],
    hue: 190,
    body: [
      {
        paragraphs: [
          "The WHO and ILO jointly estimate that 12 billion working days are lost globally every year to depression and anxiety, costing the economy nearly a trillion dollars in lost productivity. But behind those numbers is something quieter and more personal: people who used to love their work and no longer remember why.",
        ],
      },
      {
        heading: "What actually predicts well-being at work",
        paragraphs: [
          "Decades of organisational psychology — particularly the Job Demands-Resources model — keep returning to the same conclusion. It is not the volume of work that breaks people. It is the imbalance between what is demanded and the resources available to meet it. Autonomy, fairness, recognition, social support, and a sense of meaning are not luxuries. They are protective factors.",
        ],
        list: [
          "Psychological safety — being able to disagree, ask questions, and admit mistakes without fear",
          "Autonomy — even small choices about how and when you work reduce stress significantly",
          "Recognition that is specific, timely, and genuine",
          "Boundaries that the organisation models, not just permits",
          "A manager who treats you as a person before a resource",
        ],
      },
      {
        heading: "What you can do when the system is slow",
        paragraphs: [
          "You may not be able to redesign your workplace this week. But there are smaller acts of preservation that matter.",
        ],
        list: [
          "Build a real end-of-day ritual — even a five-minute walk between work and home creates a psychological boundary",
          "Protect one meeting-free block in your week and defend it as you would a medical appointment",
          "Find one colleague you can be honest with — connection at work is one of the strongest buffers against burnout",
          "Stop wearing exhaustion as a value. It is not a virtue, and it does not make you more promotable",
          "Use leave fully — research is consistent that unused leave correlates with higher depression and lower productivity",
        ],
        quote: "You are not a machine that has occasionally human moments. You are a human being who is occasionally productive.",
      },
    ],
  },
  {
    slug: "relationship-repair",
    title: "The Art of Repair: What Long-Lasting Relationships Actually Do Differently",
    excerpt:
      "Healthy couples don't fight less. They repair faster. A look at what the research really shows about love that lasts.",
    category: "Relationships",
    readTime: "8 min",
    date: "April 10, 2026",
    author: "Swati",
    authorRole: "Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2000&q=80",
    tags: ["Relationships", "Couples", "Communication"],
    hue: 340,
    body: [
      {
        paragraphs: [
          "John Gottman's relationship research, spanning more than four decades, found something counter-intuitive about couples who stay happy together. They don't have fewer arguments. They have better repairs. Within a difficult conversation, they reach for each other — a small joke, an admission, a softening — long before the conversation ends.",
        ],
      },
      {
        heading: "The four predictors of disconnection",
        paragraphs: [
          "Gottman identified four communication patterns so corrosive he called them the Four Horsemen: criticism (attacking the person, not the behaviour), contempt (mockery, sarcasm, eye-rolling), defensiveness (counter-attacking instead of receiving), and stonewalling (shutting down the conversation entirely). Of these, contempt is the single strongest predictor of relationship breakdown.",
        ],
      },
      {
        heading: "What healthy couples actually do",
        list: [
          "Soften the start-up — how a difficult conversation begins almost entirely predicts how it will end",
          "Turn toward bids for connection — small attempts at attention, humour, or affection are the daily currency of love",
          "Take physiological breaks — when your heart rate is over 100 bpm, you cannot have a productive conversation. Pause, breathe, return",
          "Make repair attempts — and accept your partner's, even when they're clumsy",
          "Build a culture of appreciation — five positive interactions to every negative one is the ratio that predicts lasting love",
        ],
        quote: "Healthy love is not the absence of conflict. It is the presence of repair.",
      },
      {
        heading: "When to seek help",
        paragraphs: [
          "Couples therapy is most effective when sought early — research suggests most couples wait an average of six years after problems begin before reaching out. You do not need a crisis to deserve support. Sometimes the most loving thing you can do for a relationship is to bring a thoughtful third person into it, before resentment becomes the third person.",
        ],
      },
    ],
  },
  {
    slug: "emotional-resilience",
    title: "Emotional Resilience Is Not About Bouncing Back. It's About Bending Well.",
    excerpt:
      "Resilience is often misunderstood as toughness. The research tells a softer, more accurate story.",
    category: "Resilience",
    readTime: "6 min",
    date: "March 27, 2026",
    author: "Dr. Aparna Ladha Somani",
    authorRole: "Founder & Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1470114716159-e389f8712fda?auto=format&fit=crop&w=2000&q=80",
    tags: ["Resilience", "Mental health", "Growth"],
    hue: 160,
    body: [
      {
        paragraphs: [
          "Popular culture often paints resilience as a kind of emotional armour — the ability to push through, not break, keep going. But decades of psychological research, particularly the work of George Bonanno and the post-traumatic growth literature, describe something far gentler.",
          "Resilient people are not unaffected by hardship. They are deeply affected — and they have access to flexible internal and external resources that help them metabolise what happened, rather than swallow it whole.",
        ],
      },
      {
        heading: "What resilient people actually share",
        list: [
          "Cognitive flexibility — the ability to reframe a situation without denying it",
          "Strong relationships — at least one person who knows them honestly",
          "A sense of meaning — a 'why' that survives the 'what'",
          "Practices that regulate the body — movement, sleep, breath, time outside",
          "Permission to feel — they do not skip grief or rush sadness",
        ],
        quote: "Resilience is not refusing to bend. It is bending without breaking, and standing up again with a slightly different shape.",
      },
      {
        heading: "How to build it gently",
        paragraphs: [
          "Resilience is built in small, ordinary moments — the conversations you choose to have, the rest you allow yourself, the meaning you make of what is hard. It is not a personality trait you either have or don't. It is a set of relationships and practices, almost all of which can be slowly grown.",
          "And if the hardship has been heavy — please remember that asking for help is itself a resilient act. Therapy, community, faith, friendship, medication when needed: these are not failures of strength. They are the resources that make strength possible.",
        ],
      },
    ],
  },
  {
    slug: "sleep-mental-health",
    title: "Sleep Is Not a Luxury. It's the Foundation of Mental Health.",
    excerpt:
      "Why protecting sleep is one of the single most powerful — and most overlooked — mental health interventions.",
    category: "Sleep",
    readTime: "7 min",
    date: "March 14, 2026",
    author: "Swati",
    authorRole: "Consultant Psychologist",
    image:
      "https://images.unsplash.com/photo-1455642305367-68834a1da7ab?auto=format&fit=crop&w=2000&q=80",
    tags: ["Sleep", "Anxiety", "Wellness"],
    hue: 270,
    body: [
      {
        paragraphs: [
          "Matthew Walker's research at UC Berkeley has shown, with unsettling consistency, that sleep is not merely restorative — it is regulatory. During REM sleep, the brain processes emotional experiences, dampens the amygdala's reactivity, and consolidates memory. Without enough of it, the emotional brain wakes up louder and the rational brain wakes up quieter.",
          "This is why sleep deprivation feels like anxiety. Often, it is.",
        ],
      },
      {
        heading: "The two-way street",
        paragraphs: [
          "Mental health and sleep have a bidirectional relationship. Anxiety disrupts sleep, and disrupted sleep deepens anxiety. Depression alters sleep architecture, and altered sleep worsens depression. Treating one almost always improves the other — which is why sleep is now a primary target in evidence-based therapy for anxiety, depression, PTSD, and ADHD.",
        ],
        quote: "If there were a single intervention that improved mood, memory, immunity, longevity, and emotional regulation — and it were free — most of us would still struggle to take it. It exists. It's sleep.",
      },
      {
        heading: "Evidence-based ways to protect sleep",
        list: [
          "Keep a consistent wake time, even on weekends — it anchors your circadian rhythm more than bedtime does",
          "Get morning sunlight within the first hour of waking, ideally outside",
          "Stop caffeine by early afternoon — it has a six-to-eight hour half-life in most adults",
          "Create a wind-down ritual that the brain can recognise — same time, same low light, same simple sequence",
          "Get out of bed if you've been awake for more than 20 minutes — the brain should associate the bed with sleep, not with worrying",
          "If sleep has been disturbed for more than a few weeks, consider Cognitive Behavioural Therapy for Insomnia (CBT-I) — it has stronger long-term evidence than sleep medication",
        ],
      },
      {
        heading: "A gentle note",
        paragraphs: [
          "If you are someone who has been told to 'just sleep better' and found it impossibly hard, you are not failing. You are likely dealing with a nervous system that has been on alert for too long. That is exactly the kind of thing therapy can quietly, effectively help with.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);
