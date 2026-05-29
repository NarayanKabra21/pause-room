export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  hue: number; // for the gradient cover
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "managing-anxiety",
    title: "Managing Anxiety Without Fighting It",
    excerpt: "Why the most powerful thing you can do with an anxious thought is, sometimes, almost nothing.",
    category: "Anxiety",
    readTime: "5 min",
    date: "March 2026",
    author: "Swati",
    hue: 220,
    body: [
      "Anxiety is not the enemy. It's a frightened part of you asking for safety.",
      "The fastest way to make anxiety worse is to argue with it. The slowest, kindest, most sustainable way to soften it is to listen — without instantly trying to fix.",
      "In this piece, we explore three small daily practices that gently regulate the nervous system, and how to know when professional support might help.",
    ],
  },
  {
    slug: "after-heartbreak",
    title: "Healing After Heartbreak: A Soft Guide",
    excerpt: "Heartbreak isn't a failure of love. It's love asking to be carried in a new shape.",
    category: "Relationships",
    readTime: "7 min",
    date: "February 2026",
    author: "Ananya",
    hue: 320,
    body: [
      "There is no productive way to heal heartbreak. There is only the slow returning of yourself, to yourself.",
      "This piece offers a gentle framework for the early weeks, the lonely middles, and the surprising tenderness that often follows on the other side.",
    ],
  },
  {
    slug: "student-stress",
    title: "When Student Stress Becomes Something More",
    excerpt: "The quiet signs that exam pressure has crossed into something that needs care.",
    category: "Students",
    readTime: "4 min",
    date: "February 2026",
    author: "Prerna",
    hue: 200,
    body: [
      "Some stress is part of being a student. Some stress is a quiet emergency.",
      "Here are the signs that suggest it might be time to bring in support — and what that support can look like.",
    ],
  },
  {
    slug: "overthinking",
    title: "Why Overthinking Feels Productive (But Isn't)",
    excerpt: "On the difference between thinking through something and circling it endlessly.",
    category: "Mind",
    readTime: "6 min",
    date: "January 2026",
    author: "Aparna",
    hue: 240,
    body: [
      "Overthinking is the mind doing something instead of feeling something.",
      "This article unpacks why it feels useful, what it's actually protecting you from, and the gentle ways to step out of the loop.",
    ],
  },
  {
    slug: "rituals-for-wellness",
    title: "Small Rituals for Emotional Wellness",
    excerpt: "Tiny, repeatable practices that quietly stitch a more grounded life together.",
    category: "Wellness",
    readTime: "5 min",
    date: "January 2026",
    author: "Meera",
    hue: 165,
    body: [
      "Big change rarely arrives in big moments. It arrives in the small rituals you don't even notice you're keeping.",
      "Here are five short practices we recommend at The Pause Room — none of them take more than five minutes.",
    ],
  },
  {
    slug: "sleep-and-anxiety",
    title: "Sleep, Anxiety and the Mind That Won't Quiet",
    excerpt: "Why anxious sleep is its own particular suffering — and the kinds of care that actually help.",
    category: "Sleep",
    readTime: "6 min",
    date: "December 2025",
    author: "Aparna",
    hue: 260,
    body: [
      "Sleep is often the first place where anxiety leaves its fingerprints.",
      "This piece explores the relationship between anxious thinking and sleep, and the clinical, behavioural and emotional approaches that can begin to repair it.",
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);
