import type { ServiceDetail } from "./services";

// Unique hero images, opening/closing quotes, and section images for every
// service that doesn't already have a `detail`. Nothing here is repeated
// across services (or across the existing detail entries in services.ts).
export const extraServiceDetails: Record<string, ServiceDetail> = {
  // ====== ASSESSMENTS ======
  "career-assessment": {
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85",
    heroAlt: "A quiet forked path through a sunlit meadow",
    tagline: "Direction, drawn from your own strengths.",
    openingQuote: "The two most important days in your life are the day you are born and the day you find out why.",
    openingQuoteAuthor: "Mark Twain",
    sections: [
      {
        heading: "What a Career Assessment Truly Offers",
        paragraphs: [
          "A good career assessment is not a verdict. It is a quiet mirror — a way of seeing your own strengths, interests and values reflected back to you with clarity.",
          "Most people arrive carrying borrowed expectations: a parent's hope, a friend's path, an idea of success that never quite fit. Standardised tools help us separate what is truly yours from what was simply handed to you.",
          "From that clearer ground, choices become lighter. You stop choosing against your nature and begin choosing with it.",
        ],
        image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1200&q=80",
        imageAlt: "A wooden desk with open notebook and warm tea",
      },
      {
        heading: "How We Hold This Process",
        paragraphs: [
          "We begin with conversation, not paperwork. Before any test, we want to understand the season of life you are in and the question you are really asking.",
          "Then we use scientifically validated aptitude, interest and personality inventories — interpreted by a trained psychologist, not by software alone. Your scores meet your story.",
          "The result is a warm, detailed debrief: a roadmap of paths that genuinely match who you are, with practical next steps you can actually take.",
        ],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
        imageAlt: "Soft pencils on a clean white workspace",
        sideQuote: "Your work is to discover your work and then with all your heart to give yourself to it. — Buddha",
      },
      {
        heading: "Walking Forward With Confidence",
        paragraphs: [
          "Clarity does not erase uncertainty. It simply gives you a steadier place to stand inside it.",
          "Many of those we work with describe a quiet relief afterwards — the sense that the next step, whatever it is, finally belongs to them.",
        ],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        imageAlt: "A misty mountain trail opening into morning light",
      },
    ],
    closingStatement: "You do not have to choose your future in a hurry. You only have to choose your next honest step — and we are here to help you see it clearly.",
    closingQuote: "Don't ask what the world needs. Ask what makes you come alive, and go do it.",
    closingQuoteAuthor: "Howard Thurman",
  },

  "personality-profile": {
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&q=85",
    heroAlt: "A still mirror-like lake at first light",
    tagline: "Meet yourself, more fully.",
    openingQuote: "Knowing yourself is the beginning of all wisdom.",
    openingQuoteAuthor: "Aristotle",
    sections: [
      {
        heading: "Why Understanding Personality Matters",
        paragraphs: [
          "We spend most of our lives reacting to ourselves — our impatience, our quiet retreats, the way we love and the way we protect. Rarely do we get to understand the patterns underneath.",
          "Personality profiling offers a careful, compassionate map of how you think, feel and relate. Not a label. Not a box. A clearer sense of the inner architecture you have been living inside.",
          "From that understanding, growth becomes targeted — and self-acceptance becomes much easier.",
        ],
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80",
        imageAlt: "An open journal beside a softly lit window",
      },
      {
        heading: "Our Careful, Clinical Approach",
        paragraphs: [
          "We use well-established personality inventories alongside a detailed clinical conversation. Tests alone never tell the whole story; context always does.",
          "Where helpful, we also screen for personality-related concerns that may quietly be shaping relationships, work or mood — so that what you have been struggling with can finally be named.",
          "Every finding is held gently, in plain language, with no jargon between you and yourself.",
        ],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
        imageAlt: "Hands writing thoughtfully in a notebook",
        sideQuote: "Until you make the unconscious conscious, it will direct your life and you will call it fate. — C.G. Jung",
      },
      {
        heading: "Living With New Self-Knowledge",
        paragraphs: [
          "After a profile, many people describe a softening — toward themselves and toward those around them. Patterns that felt like flaws begin to look like understandable adaptations.",
          "From that place, change is no longer a war against yourself. It is a quieter, kinder process of becoming.",
        ],
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
        imageAlt: "A wildflower meadow at dusk",
      },
    ],
    closingStatement: "You are not a problem to be solved. You are a person to be understood — and that understanding is one of the most healing gifts you can give yourself.",
    closingQuote: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do.",
    closingQuoteAuthor: "Brené Brown",
  },

  "diagnostic-psychometry": {
    heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1920&q=85",
    heroAlt: "An open book resting on warm linen by morning light",
    tagline: "Clarity that holds, never labels.",
    openingQuote: "It is okay to have a mental illness. It is not okay to be alone in it.",
    openingQuoteAuthor: "Glenn Close",
    sections: [
      {
        heading: "What Diagnostic Assessments Are For",
        paragraphs: [
          "When something inside has felt off for a long time — focus that slips, moods that swing, anxiety that will not lift — a careful diagnostic picture can be deeply grounding.",
          "Psychometric assessments use standardised tools to evaluate concerns like ADHD, autism spectrum traits, anxiety, depression and bipolar spectrum patterns, among others.",
          "The aim is never to label you. It is to help you and your care team understand what you have been quietly living with, so support can finally be matched to the actual need.",
        ],
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&q=80",
        imageAlt: "A pen resting on a clean notepad",
      },
      {
        heading: "How We Conduct the Process",
        paragraphs: [
          "We begin with a detailed clinical interview, taking time to understand your history, symptoms and the context they live in. Tests are chosen carefully, not generically.",
          "Scoring is done by trained clinicians who know that a number on a scale only matters in the light of a whole person. Findings are then woven together into a coherent, human picture.",
          "Your debrief is warm, thorough and unhurried. You leave with a written report and a clear sense of next steps — therapeutic, medical or both.",
        ],
        image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=1200&q=80",
        imageAlt: "A quiet office desk with thoughtful workspace",
        sideQuote: "Mental health is not a destination, but a process. — Noam Shpancer",
      },
      {
        heading: "What Clarity Makes Possible",
        paragraphs: [
          "Naming what you have been living with often brings an unexpected softness. The story you have been telling about yourself shifts; the shame loosens.",
          "From there, treatment can be precise. Conversations with family become easier. The road forward becomes one you can actually walk.",
        ],
        image: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=1200&q=80",
        imageAlt: "Light breaking through a window in a quiet room",
      },
    ],
    closingStatement: "Behind every score is a person, and behind every assessment is the hope of being truly seen. We promise to hold both with the care they deserve.",
    closingQuote: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared or anxious. Having feelings doesn't make you a negative person. It makes you human.",
    closingQuoteAuthor: "Lori Deschene",
  },

  "neuropsychological-assessment": {
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=85",
    heroAlt: "A starlit landscape over silent mountains",
    tagline: "Understanding how your mind moves.",
    openingQuote: "The mind is everything. What you think you become.",
    openingQuoteAuthor: "Buddha",
    sections: [
      {
        heading: "What a Neuropsychological Assessment Examines",
        paragraphs: [
          "Your brain is doing extraordinary things every moment — paying attention, remembering, planning, switching between tasks, holding language. When something in that system is straining, daily life quietly grows harder.",
          "Neuropsychological assessments evaluate attention, memory, language, executive functioning, processing speed and learning. They help us understand how cognition is actually working — not in theory, but in your life.",
        ],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80",
        imageAlt: "A peaceful library nook with warm light",
      },
      {
        heading: "How We Approach the Work",
        paragraphs: [
          "We begin by understanding your history and what you have been noticing. Then we move through a carefully chosen battery of tasks — none of them designed to make you feel tested as a person.",
          "Findings are integrated with developmental, medical and emotional context. The result is a real-world picture of how your mind works, where it strains, and where its quieter strengths live.",
          "Your report is thorough and practical, written to support medical teams, schools or workplaces in giving you the right kind of help.",
        ],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80",
        imageAlt: "A gentle morning routine of coffee and notes",
        sideQuote: "What we know matters, but who we are matters more. — Brené Brown",
      },
      {
        heading: "Turning Insight Into Support",
        paragraphs: [
          "An assessment is only useful if it changes something. Our recommendations are specific, actionable and tailored to the life you are actually living.",
          "Many of those we work with describe a quiet relief afterwards — finally understanding why certain things have always felt harder, and finally having a plan that respects how their mind works.",
        ],
        image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1200&q=80",
        imageAlt: "A calm path of stepping stones across water",
      },
    ],
    closingStatement: "Understanding your mind is not about fixing it. It is about meeting it kindly, and giving it the support it has been quietly asking for.",
    closingQuote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    closingQuoteAuthor: "Buddha",
  },

  "iq-assessment": {
    heroImage: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=1920&q=85",
    heroAlt: "A child reading by a warm window in soft daylight",
    tagline: "A holistic look at how you think.",
    openingQuote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    openingQuoteAuthor: "Albert Einstein",
    sections: [
      {
        heading: "What IQ Really Measures (and What It Doesn't)",
        paragraphs: [
          "IQ assessments measure specific kinds of reasoning, problem-solving, memory, verbal comprehension and processing speed. They are useful — but they were never meant to measure the whole of a person.",
          "We treat IQ scores as one careful instrument among many: a way of seeing cognitive strengths and stretches, never a verdict on intelligence or worth.",
        ],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
        imageAlt: "Open textbook and notes on a sunny desk",
      },
      {
        heading: "How We Hold the Assessment",
        paragraphs: [
          "Sessions are calm, paced and child-friendly where needed. For adults, we make the room a place where you can think honestly without performance pressure.",
          "Validated IQ batteries assess multiple domains, and a trained psychologist interprets them in light of culture, language, background and emotional state.",
          "The feedback session is the most important part. We translate numbers into useful understanding — for school, for work, for life.",
        ],
        image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1200&q=80",
        imageAlt: "A child drawing thoughtfully in soft light",
        sideQuote: "The true sign of intelligence is not knowledge but imagination. — Albert Einstein",
      },
      {
        heading: "Using What You Learn",
        paragraphs: [
          "A clearer cognitive picture supports better academic decisions, accommodations where helpful, and a more compassionate sense of self.",
          "For children, it often means parents and teachers finally meet them where they actually are. For adults, it can mean a quiet reframing of years of self-doubt.",
        ],
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
        imageAlt: "A bright classroom corner with picture books",
      },
    ],
    closingStatement: "Your mind is more than any number. Our work is to help you understand it well enough to set it free.",
    closingQuote: "Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.",
    closingQuoteAuthor: "Daniel Kahneman",
  },

  "sld-assessment": {
    heroImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=85",
    heroAlt: "An open picture book and crayons on a wooden table",
    tagline: "Understanding the way your child learns.",
    openingQuote: "Children must be taught how to think, not what to think.",
    openingQuoteAuthor: "Margaret Mead",
    sections: [
      {
        heading: "When Learning Feels Harder Than It Should",
        paragraphs: [
          "When a child is bright and curious yet keeps struggling with reading, writing, spelling or maths, the gap between effort and outcome can quietly hurt them.",
          "Specific Learning Disability (SLD) assessments help identify whether a particular learning difference is at play. Naming it gently is the beginning of supporting it.",
        ],
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=80",
        imageAlt: "A child concentrating on a notebook",
      },
      {
        heading: "How We Assess With Care",
        paragraphs: [
          "We begin by listening — to parents, to teachers and most importantly to the child. Their experience matters as much as any score.",
          "Through playful, validated tasks across reading, writing, spelling and mathematics, we map specific learning patterns. Findings are integrated with developmental and emotional context.",
          "The result is a clear, school-ready report and a debrief that helps families and educators move from confusion to confident action.",
        ],
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=1200&q=80",
        imageAlt: "Coloured pencils arranged in a row",
        sideQuote: "Every child you encounter is a divine appointment. — Wess Stafford",
      },
      {
        heading: "What Changes Afterwards",
        paragraphs: [
          "When a child finally understands that their effort is real and their brain simply learns differently, something quietly heals. The self-blame loosens.",
          "With the right accommodations and support, learning becomes possible again — and often, joyful again.",
        ],
        image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=80",
        imageAlt: "A child smiling while reading a book",
      },
    ],
    closingStatement: "Learning differences are not failures. They are invitations to teach in a way that finally fits — and your child deserves to be met exactly there.",
    closingQuote: "There is no greater agony than bearing an untold story inside you.",
    closingQuoteAuthor: "Maya Angelou",
  },

  // ====== THERAPY (those without detail) ======
  "child-adolescent-counselling": {
    heroImage: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=1920&q=85",
    heroAlt: "A child's hand reaching toward warm afternoon light",
    tagline: "A quiet room for young hearts.",
    openingQuote: "If we don't stand up for children, then we don't stand for much.",
    openingQuoteAuthor: "Marian Wright Edelman",
    sections: [
      {
        heading: "Why Children and Teens Need Their Own Space",
        paragraphs: [
          "Young people carry more than they often have language for. Their worries hide inside stomachaches, tantrums, withdrawal, perfectionism — the quiet codes only a careful listener can read.",
          "Our counselling rooms are designed to feel safe and developmentally tuned. The work is playful where it needs to be and serious where it needs to be, always paced to the child in front of us.",
        ],
        image: "https://images.unsplash.com/photo-1490726050329-b6ac95303d80?w=1200&q=80",
        imageAlt: "A cozy reading corner with cushions and books",
      },
      {
        heading: "How We Walk Alongside Them",
        paragraphs: [
          "We start with a conversation with parents — to understand context without making the child feel watched. Then their own sessions become a private, judgment-free space.",
          "Depending on age, we draw on play therapy, CBT for young people, expressive techniques and gentle skill-building. Nothing is forced; everything is offered.",
          "Periodic parent sessions translate the work into practical, kind strategies that support real change at home.",
        ],
        image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=1200&q=80",
        imageAlt: "Soft toys arranged thoughtfully in a play space",
        sideQuote: "It's not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. — Ann Landers",
      },
      {
        heading: "What Begins to Shift",
        paragraphs: [
          "Over time, young people often grow calmer, more willing to talk, more curious about their own feelings. Big emotions stop being emergencies.",
          "Families describe a quieter home — not because problems vanish, but because everyone has more tools to meet them.",
        ],
        image: "https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?w=1200&q=80",
        imageAlt: "A family walking together along a sunlit path",
      },
    ],
    closingStatement: "A young person who feels truly heard learns something that lasts: that their inner world matters, and that they are never alone in it.",
    closingQuote: "There is no such thing as a baby — there is a baby and someone.",
    closingQuoteAuthor: "D.W. Winnicott",
  },

  "adult-counselling": {
    heroImage: "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=1920&q=85",
    heroAlt: "A quiet armchair beside a window opening to a soft garden",
    tagline: "A space carved just for you.",
    openingQuote: "There is no greater agony than bearing an untold story inside you, but every story longs to be listened to.",
    openingQuoteAuthor: "Adapted from Maya Angelou",
    sections: [
      {
        heading: "What Adult Counselling Holds",
        paragraphs: [
          "Most adults arrive carrying things they have never quite put down — old griefs, quiet resentments, the steady weight of being responsible for everyone but themselves.",
          "Counselling is a slow, weekly returning to a place where you do not have to perform. Where the only person you have to take care of, for one hour, is you.",
        ],
        image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&q=80",
        imageAlt: "A warm cup of tea by an open window",
      },
      {
        heading: "How the Work Unfolds",
        paragraphs: [
          "There is no script. We start with what brought you in, and let the deeper themes emerge in their own time. Some weeks are practical. Some are quiet. All of it matters.",
          "Our approach is integrative — drawing on psychodynamic insight, CBT, mindfulness and compassion-focused work — chosen for you, not for a generic version of your problem.",
          "Slowly, patterns soften. The inner voice grows kinder. Life feels a little more yours.",
        ],
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80",
        imageAlt: "A still pond reflecting trees at dusk",
        sideQuote: "Be patient toward all that is unsolved in your heart. — Rainer Maria Rilke",
      },
      {
        heading: "The Quieter Changes",
        paragraphs: [
          "People rarely leave counselling having solved everything. They leave with a steadier inner companion — a self that can meet life with more tenderness and less war.",
          "The changes are often quiet at first: less reactivity, more pauses, a softer relationship with the past. Over time, these quiet changes become a different way of living.",
        ],
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80",
        imageAlt: "Soft golden light through open curtains",
      },
    ],
    closingStatement: "You do not need to be in crisis to deserve care. You simply need to want a kinder relationship with yourself — and that begins the moment you reach out.",
    closingQuote: "The privilege of a lifetime is to become who you truly are.",
    closingQuoteAuthor: "Carl Jung",
  },

  "career-counselling": {
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=85",
    heroAlt: "A person standing on a hill at sunrise overlooking a wide valley",
    tagline: "Work, aligned with who you are.",
    openingQuote: "Choose a job you love, and you will never have to work a day in your life.",
    openingQuoteAuthor: "Confucius",
    sections: [
      {
        heading: "When Work Becomes a Question",
        paragraphs: [
          "Career questions are rarely only about work. They are about identity, belonging, money, fear, freedom and the quiet question of whether you are spending your days in a way that feels true.",
          "Career counselling makes room for all of it — the practical and the emotional — without rushing you to a tidy answer.",
        ],
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200&q=80",
        imageAlt: "A notebook and laptop on a sunlit cafe table",
      },
      {
        heading: "How We Work With You",
        paragraphs: [
          "We start by listening to where you are stuck — burnout, indecision, a longing for change you cannot quite name. From there we explore values, strengths, interests and the emotional barriers that have quietly been in the way.",
          "Where useful, we integrate career assessments to add structure. But the heart of the work is reflective: a real understanding of what you want your work to make possible in your life.",
          "Together we build a grounded, realistic plan — and a way of revisiting it as life changes.",
        ],
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80",
        imageAlt: "Hands resting on an open planner",
        sideQuote: "Don't aim at success. The more you aim at it and make it a target, the more you are going to miss it. — Viktor Frankl",
      },
      {
        heading: "What Becomes Possible",
        paragraphs: [
          "People often arrive at career counselling expecting a decision. They usually leave with something steadier: a clearer relationship with their own ambition, fear and worth.",
          "From that ground, the next decision — whether to stay, leave, retrain or rest — becomes one you can actually trust.",
        ],
        image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=1200&q=80",
        imageAlt: "An open road winding toward distant hills",
      },
    ],
    closingStatement: "Your career is one of the longest relationships of your life. It deserves the same care and honesty as any other — and we are here to help you tend to it.",
    closingQuote: "The only way to do great work is to love what you do — and to know yourself well enough to find it.",
    closingQuoteAuthor: "Adapted from Steve Jobs",
  },

  "grief-counselling": {
    heroImage: "https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=1920&q=85",
    heroAlt: "Soft candlelight in a quiet, peaceful room",
    tagline: "You do not have to carry this alone.",
    openingQuote: "Grief is the price we pay for love.",
    openingQuoteAuthor: "Queen Elizabeth II",
    sections: [
      {
        heading: "The Many Shapes of Grief",
        paragraphs: [
          "Grief is not only what arrives after a death. It lives inside the ending of relationships, the loss of health, the closing of a chapter, the dream that did not unfold the way you imagined.",
          "It does not move in stages, no matter what the books say. It moves in waves — sometimes gentle, sometimes tidal — for as long as it needs to.",
          "All of this is normal. All of this is allowed.",
        ],
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1200&q=80",
        imageAlt: "A single lit candle by a window at dusk",
      },
      {
        heading: "How We Hold Grief Together",
        paragraphs: [
          "Our work begins with simply making room. Not for advice or timelines, but for what is actually inside you — the love, the anger, the disbelief, the quiet relief sometimes folded inside loss.",
          "Where helpful, we draw on evidence-based grief frameworks to gently support sleep, appetite and daily functioning. But mostly we walk beside you, at the pace your grief asks for.",
          "There is no rush here. Grief is not a problem to solve. It is a love that has nowhere to go yet.",
        ],
        image: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?w=1200&q=80",
        imageAlt: "A hand resting gently on a folded blanket",
        sideQuote: "What we have once enjoyed deeply we can never lose. All that we love deeply becomes a part of us. — Helen Keller",
      },
      {
        heading: "Carrying Love Forward",
        paragraphs: [
          "Healing from grief does not mean forgetting. It means slowly finding ways to carry what was lost inside a life that continues — with all of its small joys, returning shyly.",
          "Many of those we walk with describe, in time, a quieter relationship with their loss. The love stays. The unbearable sharpness softens.",
        ],
        image: "https://images.unsplash.com/photo-1490730141103-6cac27a73b40?w=1200&q=80",
        imageAlt: "A single tree standing in a quiet field at dawn",
      },
    ],
    closingStatement: "You do not have to be done with your grief to deserve care inside it. We are here to sit with you for as long as you need.",
    closingQuote: "Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.",
    closingQuoteAuthor: "José N. Harris",
  },

  "behaviour-modification": {
    heroImage: "https://images.unsplash.com/photo-1490100050794-c5fa993e9525?w=1920&q=85",
    heroAlt: "Small stepping stones across a calm stream in soft light",
    tagline: "Small shifts, gently practiced.",
    openingQuote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    openingQuoteAuthor: "Will Durant",
    sections: [
      {
        heading: "Why Patterns Are So Hard to Change",
        paragraphs: [
          "The behaviours that no longer serve us were almost always solutions once. They soothed something, protected something, helped us cope in a moment we could not otherwise meet.",
          "Real change does not come from shame or force. It comes from understanding what the old pattern was doing for you — and gently offering a kinder, more effective replacement.",
        ],
        image: "https://images.unsplash.com/photo-1505739679850-7adfb98b5746?w=1200&q=80",
        imageAlt: "Two cups of tea on a sunlit table",
      },
      {
        heading: "How Behaviour Work Actually Helps",
        paragraphs: [
          "Drawing on CBT, behaviour therapy and reinforcement principles, we identify specific patterns, map their triggers, and design small, supported steps toward change.",
          "Sessions are warm and practical. You leave with tools you can actually use — not theory, not pep talks — and gentle weekly accountability that meets you where you are.",
          "Change is built slowly. Each small win quietly rebuilds your trust in yourself.",
        ],
        image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=1200&q=80",
        imageAlt: "Pebbles stacked carefully on a calm shore",
        sideQuote: "Motivation is what gets you started. Habit is what keeps you going. — Jim Rohn",
      },
      {
        heading: "Lasting, Honest Change",
        paragraphs: [
          "Patterns built with understanding hold longer than patterns built with willpower alone. The change becomes part of who you are, not something you have to fight for every day.",
          "Over time, what once felt impossible begins to feel ordinary — and that ordinariness is the proof of real growth.",
        ],
        image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?w=1200&q=80",
        imageAlt: "A clear path winding gently uphill",
      },
    ],
    closingStatement: "You do not need to overhaul yourself overnight. You need a steady, kind plan — and a place that will walk it with you.",
    closingQuote: "Watch your thoughts, they become words; watch your words, they become actions; watch your actions, they become habits.",
    closingQuoteAuthor: "Lao Tzu",
  },

  "parental-counselling": {
    heroImage: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1920&q=85",
    heroAlt: "A parent and child holding hands while walking on a quiet beach",
    tagline: "Parenting, held with the same care you give.",
    openingQuote: "There is no way to be a perfect parent, and a million ways to be a good one.",
    openingQuoteAuthor: "Jill Churchill",
    sections: [
      {
        heading: "The Weight You Don't Talk About",
        paragraphs: [
          "Parenting asks more of you than almost anything else, and offers very few quiet places to put down the weight. The exhaustion, the guilt, the fear of getting it wrong — most parents carry all of it in private.",
          "Parental counselling is a space designed for that weight. It is not about being assessed as a parent. It is about being supported as a person who is also a parent.",
        ],
        image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1200&q=80",
        imageAlt: "A mother and child sitting together by a sunlit window",
      },
      {
        heading: "How We Hold This Work",
        paragraphs: [
          "We begin with your story — your childhood, your child, your present-day struggle. Not in search of blame, but in search of understanding.",
          "Together we look at the reactive cycles between you and your child, the inherited patterns you might be quietly repeating, and the strategies that actually fit your child's age and temperament.",
          "Sessions are practical and tender. You leave with tools you can try this week, and a softer inner voice as you try them.",
        ],
        image: "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=1200&q=80",
        imageAlt: "A hand gently holding a small child's hand",
        sideQuote: "Your children will become what you are; so be what you want them to be. — David Bly",
      },
      {
        heading: "What Begins to Change",
        paragraphs: [
          "Parents often describe a calmer home — not because the children magically change, but because they themselves are responding rather than reacting.",
          "Over time, the relationship with your child grows steadier, and so does your relationship with yourself. Both are necessary. Both are possible.",
        ],
        image: "https://images.unsplash.com/photo-1591348122449-02525d70379b?w=1200&q=80",
        imageAlt: "Family silhouettes at sunset",
      },
    ],
    closingStatement: "You are doing one of the hardest jobs in the world. You deserve more than tips — you deserve real support, held with care.",
    closingQuote: "When you change the way you look at your children, the children you look at change.",
    closingQuoteAuthor: "Adapted from Wayne Dyer",
  },

  "group-therapy": {
    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85",
    heroAlt: "A small circle of chairs in a warm, sunlit room",
    tagline: "You are not alone in this.",
    openingQuote: "We are all just walking each other home.",
    openingQuoteAuthor: "Ram Dass",
    sections: [
      {
        heading: "Why Healing in Community Matters",
        paragraphs: [
          "Some of the deepest healing happens not in being told you are not alone, but in actually feeling it — in a room, with other people, in real time.",
          "Group therapy offers what individual work sometimes cannot: the relief of recognition, the surprise of being understood by a stranger, the slow trust that grows between people walking similar paths.",
        ],
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
        imageAlt: "People sitting together in a soft, welcoming space",
      },
      {
        heading: "How Our Groups Are Held",
        paragraphs: [
          "Each group is carefully curated and facilitated by trained clinicians. Themes range from anxiety and grief to women's wellness and emotional resilience.",
          "We begin with a private call to make sure the group is right for you, and the first session establishes shared agreements around confidentiality, safety and respect.",
          "From there, weekly sessions blend gentle structure with real, honest conversation. Closing rituals honour what was shared and what you carry forward.",
        ],
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
        imageAlt: "Hands resting together on a wooden table",
        sideQuote: "Alone we can do so little; together we can do so much. — Helen Keller",
      },
      {
        heading: "What You Take Home",
        paragraphs: [
          "Members often describe leaving with more than insight — with a quiet, lasting sense of belonging. The voices of others in the room stay with them.",
          "For many, group therapy becomes a turning point: the place where shame finally loosened its grip.",
        ],
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
        imageAlt: "A circle of lanterns lit at twilight",
      },
    ],
    closingStatement: "Your story is not too much. Inside the right circle, it becomes the very thing that helps someone else feel less alone too.",
    closingQuote: "There is no power for change greater than a community discovering what it cares about.",
    closingQuoteAuthor: "Margaret J. Wheatley",
  },

  // ====== CLASSES & EVENTS ======
  "attention-training": {
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=85",
    heroAlt: "A young student focused on a workbook in warm light",
    tagline: "Building the muscle of attention.",
    openingQuote: "Where attention goes, energy flows.",
    openingQuoteAuthor: "James Redfield",
    sections: [
      {
        heading: "Why Attention Is a Skill, Not a Trait",
        paragraphs: [
          "Attention is not something you either have or don't. It is a quiet skill — one that can be strengthened with the right practice, just like any other.",
          "For children and teens, especially those who have been told too often to 'just focus', a different message is needed: your brain can learn this, and we will help you.",
        ],
        image: "https://images.unsplash.com/photo-1503676593831-d72e6a13ad05?w=1200&q=80",
        imageAlt: "Colourful learning tools on a tidy desk",
      },
      {
        heading: "How Our Classes Build Focus",
        paragraphs: [
          "We use evidence-based exercises — gamified attention tasks, working memory practice, mindfulness for young minds — designed to feel engaging rather than corrective.",
          "Sessions are structured but warm. Children build skills progressively, with short home practices woven gently into daily life. Parents are kept informed at each step.",
          "Over time, focus grows from a struggle into something they begin to take quiet pride in.",
        ],
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
        imageAlt: "Bright, organised classroom corner",
        sideQuote: "Concentration is the secret of strength. — Ralph Waldo Emerson",
      },
      {
        heading: "What Parents Begin to See",
        paragraphs: [
          "Homework becomes shorter. Transitions become smoother. Frustration around tasks softens. The child begins to believe that focus is something they can grow into.",
          "These shifts are quiet at first, then unmistakable.",
        ],
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80",
        imageAlt: "A child smiling while completing homework",
      },
    ],
    closingStatement: "Your child is not lazy or broken. They simply need a kind, structured place to grow a skill no one ever taught them — and that is exactly what we offer.",
    closingQuote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    closingQuoteAuthor: "Aristotle",
  },

  "social-skills": {
    heroImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=85",
    heroAlt: "Young friends sitting together laughing in soft daylight",
    tagline: "Connection, taught with kindness.",
    openingQuote: "We are hardwired to connect with others, it's what gives purpose and meaning to our lives.",
    openingQuoteAuthor: "Brené Brown",
    sections: [
      {
        heading: "Why Social Skills Deserve Real Practice",
        paragraphs: [
          "Conversation, friendship, conflict — these are skills, even though our culture often pretends they should come naturally. For many children, teens and young adults, they do not. And that is okay.",
          "Social skills classes offer a kind, structured place to practice the small acts of human connection without fear of getting it wrong.",
        ],
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80",
        imageAlt: "A small group sitting together in a warm room",
      },
      {
        heading: "How Our Sessions Work",
        paragraphs: [
          "Classes are held in small, carefully matched cohorts. Through role-play, group exercises and gentle, structured feedback, participants build comfort in real-life situations.",
          "We cover starting and holding conversations, navigating friendship, repairing after conflict, recognising and expressing feelings, and reading social cues.",
          "Nothing is staged for performance. Everything is paced for genuine growth.",
        ],
        image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=1200&q=80",
        imageAlt: "Young people in conversation around a table",
        sideQuote: "The most basic of all human needs is the need to understand and be understood. — Ralph G. Nichols",
      },
      {
        heading: "What Changes At Home and At School",
        paragraphs: [
          "Parents and teachers often notice it before the young person can name it themselves — easier mornings, a friend's name mentioned at dinner, less retreat after school.",
          "Slowly, the world begins to feel a little less sharp, and friendship begins to feel possible.",
        ],
        image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=1200&q=80",
        imageAlt: "Two friends walking together under trees",
      },
    ],
    closingStatement: "You do not have to be naturally outgoing to belong. You only need a place that believes you can learn — and gently shows you how.",
    closingQuote: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    closingQuoteAuthor: "C.S. Lewis",
  },

  "special-education": {
    heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=85",
    heroAlt: "Open books and warm afternoon sunlight on a wooden desk",
    tagline: "Education, shaped around the learner.",
    openingQuote: "Education is not the filling of a pail, but the lighting of a fire.",
    openingQuoteAuthor: "W.B. Yeats",
    sections: [
      {
        heading: "When Learning Needs Something Different",
        paragraphs: [
          "Not every mind learns the way a standard classroom expects. For some children, that mismatch becomes a quiet, daily injury — to confidence, to motivation, to the love of learning itself.",
          "Special education honours how each child actually learns. It is not lesser support; it is more precise support.",
        ],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
        imageAlt: "A bright workspace with colourful learning materials",
      },
      {
        heading: "How We Build Each Programme",
        paragraphs: [
          "We begin with an educational assessment to understand the child's learning profile, strengths and challenges. From there, a structured, individualised plan is designed around them.",
          "Sessions are warm and consistent — one-on-one or in tiny groups — and progress is reviewed regularly with both family and school.",
          "Our educators work closely with parents and teachers, so the child experiences a coherent, supportive web rather than a scattered one.",
        ],
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80",
        imageAlt: "A teacher gently helping a child with reading",
        sideQuote: "If a child can't learn the way we teach, maybe we should teach the way they learn. — Ignacio Estrada",
      },
      {
        heading: "Reclaiming the Love of Learning",
        paragraphs: [
          "Slowly, children begin to enjoy what they used to dread. Reading becomes possible. Maths becomes less frightening. Confidence returns in small, quiet ways.",
          "Behind every academic gain is something more important: the belief that they can grow.",
        ],
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80",
        imageAlt: "A smiling child holding an open storybook",
      },
    ],
    closingStatement: "Every learner deserves to be met with patience, expertise and belief. Your child is no exception — and we will hold them with all three.",
    closingQuote: "Children must be taught how to think, not what to think.",
    closingQuoteAuthor: "Margaret Mead — held alongside her words for every child",
  },

  "workshops": {
    heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=85",
    heroAlt: "A small group gathered in a warm, sunlit workshop space",
    tagline: "Skills you can quietly take home.",
    openingQuote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    openingQuoteAuthor: "Benjamin Franklin",
    sections: [
      {
        heading: "Why Experiential Learning Works",
        paragraphs: [
          "Information rarely changes us on its own. What changes us is practice — small, supported, repeatable experiences that slowly become part of how we live.",
          "Our workshops are built on that principle. They are not lectures. They are quiet laboratories for becoming.",
        ],
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&q=80",
        imageAlt: "Notebooks and warm light on a workshop table",
      },
      {
        heading: "How Our Workshops Are Designed",
        paragraphs: [
          "Themes are chosen to meet real, current needs — emotional regulation, stress, parenting, communication, mindfulness, self-compassion. Each is grounded in contemporary psychology.",
          "We work in small cohorts, blending experiential exercises, gentle reflection and group discussion. Everyone gets to participate; no one is asked to perform.",
          "You leave with practices and resources you can genuinely keep using, long after the workshop ends.",
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
        imageAlt: "A group in conversation in a warm workshop setting",
        sideQuote: "Learning is the only thing the mind never exhausts, never fears, and never regrets. — Leonardo da Vinci",
      },
      {
        heading: "What Participants Take Forward",
        paragraphs: [
          "Most participants describe a quiet shift — a new vocabulary for what they feel, a few practices they actually return to, a sense of community that lingers.",
          "The change is not dramatic. It is durable.",
        ],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
        imageAlt: "Hands writing notes in a workbook",
      },
    ],
    closingStatement: "You do not need to be in therapy to deserve growth. Sometimes a small, well-held workshop is exactly the doorway you have been looking for.",
    closingQuote: "The beautiful thing about learning is that no one can take it away from you.",
    closingQuoteAuthor: "B.B. King",
  },

  "seminars-webinars": {
    heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=85",
    heroAlt: "A lecture hall softly lit, with empty chairs awaiting an audience",
    tagline: "Mental health, made approachable.",
    openingQuote: "The greatest weapon against stress is our ability to choose one thought over another.",
    openingQuoteAuthor: "William James",
    sections: [
      {
        heading: "Why These Conversations Matter",
        paragraphs: [
          "Mental health is still wrapped in too much silence. Seminars and webinars are one of the most quietly powerful ways to soften that — by inviting honest, informed conversation into rooms where it rarely happens.",
          "Whether it is a school, a workplace or a community group, accessible psychological knowledge has the power to change how people understand themselves and one another.",
        ],
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
        imageAlt: "An audience listening attentively in a warm hall",
      },
      {
        heading: "How We Design Each Session",
        paragraphs: [
          "Topics are chosen with you. We adapt content to the audience — students, parents, employees, leaders — and to the questions they are actually carrying.",
          "Sessions are conversational rather than clinical. We use real stories, evidence-based frameworks and clear, jargon-free language so that no one leaves feeling lost.",
          "Time for Q&A and follow-up resources is built in, so the conversation continues long after the session ends.",
        ],
        image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=1200&q=80",
        imageAlt: "A speaker addressing a small attentive group",
        sideQuote: "There is no health without mental health. — World Health Organization",
      },
      {
        heading: "What Communities Carry Forward",
        paragraphs: [
          "Organisers often describe a softer culture afterwards — easier conversations, earlier help-seeking, a gentler way of speaking about struggle.",
          "These are quiet wins. They are also exactly how stigma loosens, one room at a time.",
        ],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
        imageAlt: "People talking warmly after an event",
      },
    ],
    closingStatement: "Awareness is the first kindness a community can offer itself. If you are looking to bring that kindness to your space, we would be honoured to help.",
    closingQuote: "Be kind, for everyone you meet is fighting a hard battle.",
    closingQuoteAuthor: "Ian Maclaren",
  },
};
