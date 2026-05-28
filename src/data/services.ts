import {
  HeartPulse, Wind, Users, CloudRain, ShieldCheck, GraduationCap, Flame, Video,
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

export type Service = {
  slug: string;
  title: string;
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
};

export const services: Service[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    icon: HeartPulse,
    card: "One-on-one sessions tailored to your inner world.",
    hero: individualImg,
    tagline: "One soul. One hour. One safe room.",
    headline: "Therapy that listens before it speaks.",
    intro:
      "Individual therapy at The Pause Room is a slow, intentional space carved just for you. We move at the pace of your breath, not the pace of the world outside.",
    story:
      "Whether you are arriving with something specific to untangle, or simply with the weight of a season that has been too long — your sessions become a steady, weekly returning. Together we explore patterns, soften old narratives, and quietly build a more compassionate inner voice. Nothing is rushed. Nothing is judged.",
    benefits: [
      { title: "A private sanctuary", desc: "A completely confidential space held just for your story." },
      { title: "Personalised care", desc: "An approach shaped around your history, values and pace." },
      { title: "Lasting clarity", desc: "Tools and reflections you can carry well beyond the session." },
      { title: "Gentle accountability", desc: "A consistent presence as you practice new ways of being." },
    ],
    process: [
      { step: "01", title: "Arrive softly", desc: "We begin with a free 15-minute call to understand what you are carrying." },
      { step: "02", title: "Map your inner world", desc: "Across the first sessions, we gently chart the themes that matter most." },
      { step: "03", title: "Walk together", desc: "Weekly sessions that blend talk therapy with grounded, evidence-based practice." },
      { step: "04", title: "Pause and reflect", desc: "Regular check-ins to honour what has shifted and what still needs care." },
    ],
    forWho: [
      "Anyone feeling quietly overwhelmed by everyday life",
      "Those navigating change, loss or transition",
      "People wanting to understand themselves more deeply",
      "Adults who have never felt fully heard before",
    ],
    expectations: [
      { title: "50 minute sessions", desc: "Long enough to settle, deep enough to matter." },
      { title: "Warm, private setting", desc: "In-person at our studio or in our online sanctuary." },
      { title: "No clinical jargon", desc: "Just honest, human conversation held with care." },
    ],
    faqs: [
      { q: "How long will I need therapy?", a: "Some find clarity in a few sessions, others stay for a season. There is no fixed length — we follow what your story needs." },
      { q: "Is everything confidential?", a: "Absolutely. What you share stays inside the room, protected by strict therapeutic ethics." },
      { q: "What if I don't know where to start?", a: "You don't need to. Just arrive. We will gently begin wherever feels safe." },
    ],
    testimonial: {
      quote: "For the first time in years, I felt like I was being listened to without being fixed. That changed everything.",
      author: "Ananya, 32",
    },
  },
  {
    slug: "anxiety-stress",
    title: "Anxiety & Stress",
    icon: Wind,
    card: "Tools to soften racing thoughts and find your breath.",
    hero: anxietyImg,
    tagline: "When the mind races, we slow it down together.",
    headline: "A softer relationship with your anxious mind.",
    intro:
      "Anxiety is not a flaw — it is a frightened part of you asking for safety. At The Pause Room, we meet it with breath, structure and tenderness.",
    story:
      "Through evidence-based approaches like CBT, ACT and somatic grounding, we help you understand the language of your nervous system. You will learn to recognise the early whispers of overwhelm, soften them in real time, and slowly rebuild trust in your own body.",
    benefits: [
      { title: "Calmer mornings", desc: "Wake up with less dread and more spaciousness in your chest." },
      { title: "Quieter thoughts", desc: "Tools to interrupt spirals before they take over your day." },
      { title: "Steadier sleep", desc: "A nervous system that knows how to rest again." },
      { title: "Renewed confidence", desc: "The slow return of trust in yourself and your choices." },
    ],
    process: [
      { step: "01", title: "Understand the pattern", desc: "We trace the triggers, body cues and stories that fuel your anxiety." },
      { step: "02", title: "Learn your tools", desc: "Breathwork, grounding, cognitive softening — practiced together until they feel natural." },
      { step: "03", title: "Practice in daily life", desc: "Gentle between-session experiments to embed the change." },
      { step: "04", title: "Build lasting resilience", desc: "Over time, anxiety becomes a quiet visitor, not the host of your life." },
    ],
    forWho: [
      "People with constant background worry or 'what-ifs'",
      "Those who panic, freeze or shut down in pressure",
      "High-functioning professionals quietly burning inside",
      "Anyone who has stopped sleeping like they used to",
    ],
    expectations: [
      { title: "Structured yet gentle", desc: "Sessions blend conversation with practical, grounding tools." },
      { title: "Body included", desc: "We listen to the breath, the shoulders, the jaw — not just the words." },
      { title: "Real-life integration", desc: "Small, kind practices you can take into your week." },
    ],
    faqs: [
      { q: "Will I have to relive everything?", a: "No. We move only as deep as your nervous system feels safe with." },
      { q: "Do I need medication?", a: "Often not. When medication is helpful, our psychiatrist will discuss it openly with you." },
      { q: "How soon will I feel better?", a: "Many feel some relief within the first few sessions, with deeper change unfolding over weeks." },
    ],
    testimonial: {
      quote: "I learned that my anxiety wasn't the enemy. It was a younger version of me, asking to be held.",
      author: "Rohan, 28",
    },
  },
  {
    slug: "relationship-counseling",
    title: "Relationship Counseling",
    icon: Users,
    card: "Reconnect, communicate, and rebuild together.",
    hero: relationshipImg,
    tagline: "A quiet room for two hearts to meet again.",
    headline: "Find your way back to each other.",
    intro:
      "Every relationship moves through seasons. Some are warm and easy, others are filled with silence, mistrust, or distance. Therapy is the bridge you build, slowly, together.",
    story:
      "We hold space for couples — partners, spouses, even close family members — to be heard without defence. Through structured dialogue, attachment-informed work, and gentle repair practices, you learn to fight less and feel more.",
    benefits: [
      { title: "Honest conversation", desc: "Talk about the things you have been quietly avoiding for months." },
      { title: "Rebuilt trust", desc: "Repair after hurt, betrayal, or long-held resentment." },
      { title: "Healthier patterns", desc: "Break the cycles that keep bringing you back to the same fight." },
      { title: "Renewed closeness", desc: "Re-discover the tenderness that first brought you together." },
    ],
    process: [
      { step: "01", title: "Hear both sides", desc: "Each of you is given a separate, safe first session to share." },
      { step: "02", title: "Map the dynamic", desc: "We identify the patterns living between you, not within you." },
      { step: "03", title: "Practice new dialogue", desc: "Structured conversations that soften reactivity in real time." },
      { step: "04", title: "Heal and rebuild", desc: "Slowly, the relationship begins to feel like home again." },
    ],
    forWho: [
      "Couples drifting into silence or stuck in the same fight",
      "Partners healing after betrayal or trust ruptures",
      "Newly-committed couples wanting a strong foundation",
      "Family members hoping to reconnect across years of distance",
    ],
    expectations: [
      { title: "75-minute couple sessions", desc: "A little extra time, because relationships need room to breathe." },
      { title: "Neutral, held space", desc: "No taking sides — just deeper understanding for both." },
      { title: "Practical homework", desc: "Small rituals you carry into your week, together." },
    ],
    faqs: [
      { q: "What if only one of us wants therapy?", a: "That is okay. Even one partner showing up with intention can shift the whole dynamic." },
      { q: "Will you tell us who is right?", a: "No. We hold space for the truth between you — not for verdicts." },
      { q: "Is this only for couples?", a: "Not at all. We also work with parents and adult children, siblings and close friendships." },
    ],
    testimonial: {
      quote: "We came in barely speaking. We left learning how to hold each other again, even in disagreement.",
      author: "Meera & Arjun",
    },
  },
  {
    slug: "depression-support",
    title: "Depression Support",
    icon: CloudRain,
    card: "Gentle, structured care through difficult seasons.",
    hero: depressionImg,
    tagline: "When everything feels heavy, you don't have to carry it alone.",
    headline: "A quiet light, held through the long winter.",
    intro:
      "Depression is not laziness, weakness or a phase. It is a real, exhausting weight — and it deserves real, compassionate care. We are here to walk it with you.",
    story:
      "Our therapists combine warm, person-centered conversation with evidence-based treatments like CBT, behavioural activation and, where helpful, psychiatric care. We focus on tiny, sustainable returns — to sleep, to meaning, to small moments of light.",
    benefits: [
      { title: "Lifted heaviness", desc: "Slowly, mornings stop feeling like a mountain to climb." },
      { title: "Renewed motivation", desc: "Small actions begin to feel possible, then meaningful." },
      { title: "Reconnected joy", desc: "Tiny pleasures begin to land again — a song, a meal, a friend." },
      { title: "Long-term care", desc: "Tools and support to prevent the dark seasons from returning so deeply." },
    ],
    process: [
      { step: "01", title: "Acknowledge what is", desc: "A gentle assessment, with no rush to fix or label." },
      { step: "02", title: "Stabilise the day", desc: "Tiny structures to bring back sleep, food, and rest." },
      { step: "03", title: "Heal underneath", desc: "Therapy that explores the root, not just the symptoms." },
      { step: "04", title: "Grow forward", desc: "Reconnect with meaning, purpose and gentle joy." },
    ],
    forWho: [
      "Those who have stopped feeling like themselves",
      "People with low mood that has lingered for weeks or months",
      "Anyone struggling with motivation, sleep, or appetite",
      "Individuals returning from a deeper depressive episode",
    ],
    expectations: [
      { title: "Slow, gentle pace", desc: "We honour low energy. Nothing is forced." },
      { title: "Integrated care", desc: "Therapy with optional psychiatric support, all under one roof." },
      { title: "Family inclusion", desc: "Loved ones can be involved when you want them to be." },
    ],
    faqs: [
      { q: "Do I need antidepressants?", a: "Not always. We talk honestly about when medication helps and when it doesn't." },
      { q: "Can I come if I'm feeling suicidal?", a: "Yes. Please reach out today. We will hold you with extra care and safety planning." },
      { q: "Will I feel like myself again?", a: "Many of our clients do, with time and consistent care. The shape may shift — but the warmth returns." },
    ],
    testimonial: {
      quote: "I thought I'd never feel anything again. Now, I cry at sunsets — and I am grateful for it.",
      author: "Priya, 41",
    },
  },
  {
    slug: "trauma-therapy",
    title: "Trauma Therapy",
    icon: ShieldCheck,
    card: "Trauma-informed healing at your own safe pace.",
    hero: traumaImg,
    tagline: "Healing the parts of you that learned to survive.",
    headline: "Trauma therapy that never asks you to relive — only to remember softly.",
    intro:
      "Trauma is not the event. It is what was left behind in your body, your sleep, your relationships. We approach it with deep reverence, never urgency.",
    story:
      "Using trauma-informed modalities like EMDR, somatic experiencing, and parts work, we help your system slowly process what was once too much, too fast, too alone. The pace is always yours. The room is always safe.",
    benefits: [
      { title: "A calmer body", desc: "Fewer flashbacks, less hypervigilance, more rest." },
      { title: "Restored sense of safety", desc: "Slowly, the world begins to feel inhabitable again." },
      { title: "Healthier relationships", desc: "Less reactivity, more secure connection with the people you love." },
      { title: "Reclaimed self", desc: "You begin to feel like the author of your story again." },
    ],
    process: [
      { step: "01", title: "Build safety first", desc: "We never begin trauma work until your nervous system feels held." },
      { step: "02", title: "Resource and ground", desc: "You learn the tools to stay regulated before we go deeper." },
      { step: "03", title: "Gently process", desc: "Using EMDR or somatic methods, we help the memory complete itself." },
      { step: "04", title: "Integrate and rebuild", desc: "Re-author the story so you live forward, not backward." },
    ],
    forWho: [
      "Survivors of childhood adversity or neglect",
      "Those healing from abuse, assault, or accident",
      "Adults with unexplained anxiety, flashbacks or numbness",
      "People who feel 'something is wrong' but cannot name it",
    ],
    expectations: [
      { title: "Specialised therapists", desc: "Every trauma session is led by a certified trauma-informed clinician." },
      { title: "Body-aware approach", desc: "We listen to the wisdom of your physiology, not just your story." },
      { title: "Always your pace", desc: "You choose what to share, when, and how much." },
    ],
    faqs: [
      { q: "Will I have to talk about everything?", a: "Never. Much of trauma work happens without detailed retelling." },
      { q: "Is EMDR painful?", a: "It can bring up emotion, but our therapists ensure you are resourced and safe throughout." },
      { q: "How long does trauma therapy take?", a: "It varies. Some find relief in months, deeper integration unfolds over a year or more." },
    ],
    testimonial: {
      quote: "I thought I had to carry it forever. They taught me how to set it down — one breath at a time.",
      author: "Anonymous",
    },
  },
  {
    slug: "student-counseling",
    title: "Student Counseling",
    icon: GraduationCap,
    card: "Support for academic pressure and identity.",
    hero: studentImg,
    tagline: "A pause from the pressure to perform.",
    headline: "Therapy for young minds finding their place in the world.",
    intro:
      "Being a student today is heavier than it looks — exams, expectations, identity, comparison, future. We hold a space where you don't have to perform, just be.",
    story:
      "Our youth-focused therapists understand the unique pressures of school, college, and early adulthood. We blend evidence-based therapy with deep cultural awareness, working alongside (and confidentially apart from) families when needed.",
    benefits: [
      { title: "Less exam panic", desc: "Practical tools for focus, sleep and pre-exam calm." },
      { title: "Clearer self-understanding", desc: "Make sense of who you are becoming." },
      { title: "Healthier relationships", desc: "With friends, family, and the loud voices online." },
      { title: "Stronger emotional skills", desc: "Skills that carry far beyond your student years." },
    ],
    process: [
      { step: "01", title: "Meet privately", desc: "A safe first session, with confidentiality clearly explained." },
      { step: "02", title: "Unpack the pressure", desc: "Together we explore what is actually weighing on you." },
      { step: "03", title: "Build your toolkit", desc: "Skills for stress, study, social life and self-worth." },
      { step: "04", title: "Grow with support", desc: "Ongoing sessions that meet you as you change." },
    ],
    forWho: [
      "Students aged 14–24 navigating academic and social pressure",
      "Young adults figuring out identity, sexuality or purpose",
      "Those struggling with social anxiety or loneliness",
      "Students recovering from burnout or comparison fatigue",
    ],
    expectations: [
      { title: "Confidential by default", desc: "What you share stays with us, with rare safety-related exceptions." },
      { title: "Youth-friendly tone", desc: "No lectures. No judgement. Just real conversation." },
      { title: "Family involvement, only if you want", desc: "We can include parents thoughtfully, when it helps." },
    ],
    faqs: [
      { q: "Will you tell my parents?", a: "Only if there is a serious safety concern. We discuss confidentiality openly in our first session." },
      { q: "Can I come online?", a: "Yes, many students prefer the privacy of our online sessions." },
      { q: "What if therapy feels awkward?", a: "Totally normal at first. Your therapist will gently help you find your words." },
    ],
    testimonial: {
      quote: "It was the first place I didn't have to be a topper, a son, or a friend. I could just be me.",
      author: "Aarav, 19",
    },
  },
  {
    slug: "burnout-recovery",
    title: "Burnout Recovery",
    icon: Flame,
    card: "Restore energy and reclaim a sustainable rhythm.",
    hero: burnoutImg,
    tagline: "Rest is not a reward. It is a foundation.",
    headline: "A slow, structured return to feeling alive again.",
    intro:
      "Burnout is not just tiredness. It is the quiet collapse of your relationship with meaning, motivation and yourself. Healing it requires more than a holiday.",
    story:
      "Our burnout programme blends therapy, lifestyle redesign, and nervous-system care. We help you not only recover, but rebuild a way of working and living that your future self can actually sustain.",
    benefits: [
      { title: "Restored energy", desc: "Mornings feel like beginnings again, not battles." },
      { title: "Renewed meaning", desc: "Reconnect with why you do what you do — or redefine it." },
      { title: "Healthy boundaries", desc: "Say yes and no from a place of clarity, not guilt." },
      { title: "A sustainable rhythm", desc: "A life that doesn't need to be survived." },
    ],
    process: [
      { step: "01", title: "Acknowledge the burnout", desc: "An honest assessment of where you are and how you got here." },
      { step: "02", title: "Rest, deeply", desc: "Permission and structure to actually slow down." },
      { step: "03", title: "Rebuild the foundation", desc: "Therapy, sleep, movement and meaning — repaired together." },
      { step: "04", title: "Return, redesigned", desc: "Step back into life with new boundaries and self-trust." },
    ],
    forWho: [
      "High-achievers running on empty",
      "Caregivers and parents who have forgotten themselves",
      "Founders, doctors, designers, teachers — the quietly exhausted",
      "Anyone who used to love what they do, and no longer does",
    ],
    expectations: [
      { title: "Holistic care", desc: "We address mind, body, sleep and work — not just thoughts." },
      { title: "Structured programme", desc: "A clear arc across weeks, with measurable softening." },
      { title: "Optional psychiatric support", desc: "Available when burnout has tipped into depression or insomnia." },
    ],
    faqs: [
      { q: "Do I need to quit my job?", a: "Almost never. Most of our clients heal while still working — with new boundaries." },
      { q: "How long does recovery take?", a: "True burnout recovery unfolds over months, not days. We walk it with you." },
      { q: "Can I do this online?", a: "Yes. Our entire burnout programme is available in our online sanctuary." },
    ],
    testimonial: {
      quote: "I finally stopped apologising for being tired. And in that softness, I started healing.",
      author: "Karthik, 36",
    },
  },
  {
    slug: "online-consultation",
    title: "Online Consultation",
    icon: Video,
    card: "Care that meets you, wherever you are.",
    hero: onlineImg,
    tagline: "The Pause Room, anywhere you are.",
    headline: "The same warmth, delivered through your screen.",
    intro:
      "Whether you live across the country or simply prefer healing from your own safe corner, our online sessions carry the exact same care, depth and confidentiality as our in-person work.",
    story:
      "From a quiet bedroom, a parked car, or a hotel room mid-travel — our online sanctuary meets you wherever you are. We use a secure, encrypted platform designed to feel as warm and contained as our physical studio.",
    benefits: [
      { title: "Anywhere access", desc: "Wherever there is wifi, there is a room held for you." },
      { title: "Total privacy", desc: "Encrypted, secure, fully confidential video sessions." },
      { title: "Flexible scheduling", desc: "Early mornings, late evenings, weekends — care that fits your life." },
      { title: "Same depth", desc: "Online therapy here is never 'less than'. It is simply elsewhere." },
    ],
    process: [
      { step: "01", title: "Book your slot", desc: "Pick a time that suits your timezone and rhythm." },
      { step: "02", title: "Set your space", desc: "We help you create a private, calming corner for your sessions." },
      { step: "03", title: "Meet your therapist", desc: "On a secure video call, exactly as you would in our studio." },
      { step: "04", title: "Continue at your pace", desc: "Weekly or fortnightly, in whatever cadence supports you." },
    ],
    forWho: [
      "People living outside our city or abroad",
      "Parents and caregivers with limited time",
      "Those who feel safer healing from home",
      "Anyone navigating mobility or accessibility concerns",
    ],
    expectations: [
      { title: "Secure platform", desc: "End-to-end encrypted, healthcare-grade video sessions." },
      { title: "Same therapists", desc: "The same warm clinicians who hold our in-person rooms." },
      { title: "Backup care", desc: "If tech fails, we move to a call. You are never left stranded." },
    ],
    faqs: [
      { q: "Is online therapy as effective as in-person?", a: "Research consistently shows it is, when delivered by trained clinicians — as ours are." },
      { q: "What do I need?", a: "A private space, stable internet, and a device with a camera. That is enough." },
      { q: "Can I switch between online and in-person?", a: "Yes. Many clients blend both, depending on the week." },
    ],
    testimonial: {
      quote: "I was sceptical about online therapy. Now, my Tuesday evening session is the safest hour of my week.",
      author: "Saanvi, 29",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
