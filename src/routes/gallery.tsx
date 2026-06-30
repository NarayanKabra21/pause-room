import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Lightbox } from "@/components/site/Lightbox";
import blogHero from "@/assets/pages/blog-hero.jpg";

// ─── Gallery media ─────────────────────────────────────────────────────────────
// All files live in /public/gallery/ and are served as static assets (no bundling)
const g = (f: string) => `/gallery/${f}`;

const anger1  = g("anger-1.png");
const anger2  = g("anger-2.png");
const anger3  = g("anger-3.jpg");
const before1 = g("before_the_next_moment1.mp4");
const before2 = g("before_the_next_moment2.png");
const xmas1   = g("Christmas_celebration1.png");
const xmas2   = g("Christmas_celebration2.MOV");
const xmas3   = g("Christmas_celebration3.png");
const summer1 = g("Summer_camp1.mp4");
const summer2 = g("Summer_camp2.png");
const summer3 = g("Summer_camp3.MOV");
const smart1  = g("Smartskill_summercamp1.MOV");
const smart2  = g("smartskill_summercamp2.png");
const smart3  = g("Smartskill_summercamp3.png");
const brave1  = g("Bravesoul1.png");
const brave2  = g("Bravesoul2.png");
const brave3  = g("Bravesoul3.png");
const vesu1   = g("vesuvius1.png");
const vesu2   = g("vesuvius2.mp4");
const iocl1   = g("iocl_haldia_1.png");
const iocl2   = g("iocl_haldiaa_2.png");
const iocl3   = g("iocl_haldia3.png");
const cu1     = g("Calcutta_University1.png");
const cu2     = g("calcutta_university2.png");
const cu3     = g("calcutta_university3.png");
const anxiety1 = g("anxiety_to_action1.jpg");
const anxiety2 = g("anxiety_to_action2.png");
const anxiety3 = g("anxiety_to_action3.jpg");
const walk1 = g("walk_dyslexia1.png");
const walk2 = g("walk_dyslexia2.jpg");
const walk3 = g("walk_dyslexia3.png");
const ntpc1 = g("ntpc_womens_day1.jpg");
const ntpc2 = g("ntpc_womens_day2.jpg");
const ntpc3 = g("ntpc_womens_day3.png");
const stress1 = g("stress1.png");
const stress2 = g("stress2.png");
const erpl1 = g("erpl1.png");
const erpl2 = g("erpl2.png");
const erpl3 = g("erpl3.png");
const worklife1 = g("worklife1.png");
const worklife2 = g("worklife2.png");
const children1 = g("children1.png");
const brave_acid1 = g("brave_acid1.jpg");
const brave_acid2 = g("brave_acid2.jpg");
const brave_acid3 = g("brave_acid3.jpg");
const noah_arc1 = g("noah_arc1.jpg");
const noah_arc2 = g("noah_arc2.png");
const noah_arc3 = g("noah_arc3.jpg");
const vesu_mental_load = g("The_Invisible_Mental_Load_Vesuvius_International__Ltd..mp4");
const kdc1 = g("kdc1.png");
const kdc2 = g("kdc2.png");
const ck_cancer1 = g("ck_cancer1.jpg");
const ck_cancer2 = g("ck_cancer2.jpg");
const ck_cancer3 = g("ck_cancer3.jpg");
const tcs_stress1 = g("tcs_stress1.png");
const tcs_stress2 = g("tcs_stress2.png");
const tcs_stress3 = g("tcs_stress3.png");
const cmri_father1 = g("cmri_father1.png");
const cmri_father2 = g("cmri_father2.png");
const autism1 = g("autism1.jpg");
const autism2 = g("autism2.jpg");
const autism3 = g("autism3.jpg");

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "In Action — The Pause Room" },
      {
        name: "description",
        content:
          "Moments from workshops, seminars, webinars and community events hosted by The Pause Room.",
      },
      { property: "og:title", content: "In Action — The Pause Room" },
      {
        property: "og:description",
        content:
          "A visual archive of our workshops, seminars and outreach work.",
      },
    ],
  }),
  component: GalleryPage,
});

type EventType =
  | "Webinar"
  | "Workshop"
  | "Seminar"
  | "Panel Discussion"
  | "Awareness Program"
  | "Training"
  | "Celebration"
  | "Initiative";

type Event = {
  id: string;
  title: string;
  type: EventType;
  date?: string;
  subtitle?: string;
  seeds: string[];
  images?: string[];
};

// ─── Pause Room Initiatives ───────────────────────────────────────────────────
const initiativesEvents: Event[] = [
  {
    id: "before-next-chapter",
    title: "Before the Next Chapter",
    type: "Webinar",
    subtitle: "A reflective space for emotional transitions and new beginnings",
    seeds: ["chapter-a", "chapter-b"],
    images: [before1, before2],
  },
  {
    id: "christmas-social-skills",
    title: "Social Skills Training & Christmas Party",
    type: "Workshop",
    subtitle: "Celebrating connection, play and togetherness",
    seeds: ["xmas-a", "xmas-b", "xmas-c"],
    images: [xmas1, xmas2, xmas3],
  },
  {
    id: "anger-management-children",
    title: "Anger Management for Children",
    type: "Workshop",
    subtitle:
      "Helping young minds understand their emotions and respond with calm",
    seeds: ["anger-a", "anger-b", "anger-c"],
    images: [anger1, anger2, anger3],
  },
  {
    id: "social-skills-summer",
    title: "Social Skills for Children – Summer Training",
    type: "Workshop",
    subtitle: "Building confidence, empathy and connection over summer",
    seeds: ["summer-a", "summer-b", "summer-c"],
    images: [summer1, summer2, summer3],
  },
  {
    id: "social-skills-adulthood",
    title: "Social Skills, Emotional Regulation & Transition into Adulthood",
    type: "Workshop",
    subtitle:
      "Equipping young adults with the emotional toolkit for life's next chapter",
    seeds: ["adult-a", "adult-b", "adult-c"],
    images: [smart1, smart2, smart3],
  },
];

// ─── Partnerships & Collaborations ───────────────────────────────────────────
const collaborationsEvents: Event[] = [

  {
    id: "vesuvius-parenting",
    title: "Successful Parenting",
    type: "Seminar",
    subtitle: "Vesuvius International Ltd.",
    seeds: ["vesuvius-a", "vesuvius-b"],
    images: [vesu1, vesu2],
  },
  {
    id: "brave-souls-awareness",
    title: "Mental Health & Wellbeing Awareness",
    type: "Awareness Program",
    subtitle: "Brave Souls Foundation × The Pause Room",
    seeds: ["brave-a", "brave-b", "brave-c"],
    images: [brave1, brave2, brave3],
  },
  {
    id: "vesuvius-mental-load",
    title: "The Invisible Mental Load",
    type: "Seminar",
    subtitle: "Vesuvius International Ltd.",
    seeds: ["vesuvius2-a"],
    images: [vesu_mental_load],
  },
  {
    id: "iocl-mental-load",
    title: "Invisible Mental Load",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["iocl-load-a", "iocl-load-b", "iocl-load-c"],
    images: [iocl1, iocl2, iocl3],
  },
  {
    id: "cu-learning-disability",
    title: "Learning Disability Training for PhD Students",
    type: "Training",
    subtitle: "Calcutta University × The Pause Room",
    seeds: ["cu-a", "cu-b", "cu-c"],
    images: [cu1, cu2, cu3],
  },
  {
    id: "noahs-arc-children",
    title: "Emotion & Cognitive Skills Training for Special Needs Children",
    type: "Training",
    subtitle: "Noah's Arc × The Pause Room",
    seeds: ["noah-a", "noah-b", "noah-c"],
    images: [noah_arc1, noah_arc2, noah_arc3],
  },
  {
    id: "anxiety-to-action",
    title: "From Anxiety to Action",
    type: "Seminar",
    subtitle: "The Pause Room",
    seeds: ["anxiety-a", "anxiety-b", "anxiety-c"],
    images: [anxiety1, anxiety2, anxiety3],
  },
  {
    id: "walk-dyslexia",
    title: "Walk for Dyslexia",
    type: "Awareness Program",
    subtitle: "The Pause Room × Anjali Dyslexia Association",
    seeds: ["dyslexia-a", "dyslexia-b", "dyslexia-c"],
    images: [walk1, walk2, walk3],
  },
  {
    id: "ntpc-womens-mental-health",
    title: "Navigating Women's Mental Health at Work",
    type: "Seminar",
    subtitle: "NTPC Farakka",
    seeds: ["ntpc-a", "ntpc-b", "ntpc-c"],
    images: [ntpc1, ntpc2, ntpc3],
  },
  {
    id: "brave-souls-acid-attack",
    title: "Acid Attack Survivors Panel Discussion",
    type: "Panel Discussion",
    subtitle: "Brave Souls Foundation",
    seeds: ["acid-a", "acid-b", "acid-c"],
    images: [brave_acid1, brave_acid2, brave_acid3],
  },
  {
    id: "iocl-stress",
    title: "Stress Management at Workplace",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["iocl-stress-a", "iocl-stress-b"],
    images: [stress1, stress2],
  },
  {
    id: "iocl-erpl-wellbeing",
    title: "Mental Health & Wellbeing",
    type: "Seminar",
    subtitle: "IOCL ERPL",
    seeds: ["erpl-a", "erpl-b", "erpl-c"],
    images: [erpl1, erpl2, erpl3],
  },
  {
    id: "iocl-work-life",
    title: "Mental Wellbeing & Work-Life Balance",
    type: "Seminar",
    subtitle: "IOCL Eastern Region Office",
    seeds: ["worklife-a", "worklife-b"],
    images: [worklife1, worklife2],
  },
  {
    id: "iocl-children-wellbeing",
    title: "Mental Wellbeing of Children",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["children-wb-a"],
    images: [children1],
  },
  {
    id: "kolkata-debating-club",
    title: "Kolkata Debating Club",
    type: "Seminar",
    subtitle: "The Pause Room × Kolkata Debating Club",
    seeds: ["kdc-a", "kdc-b"],
    images: [kdc1, kdc2],
  },
  {
    id: "ck-birla-world-cancer-day",
    title: "World Cancer Day",
    type: "Awareness Program",
    subtitle: "CK Birla Hospitals",
    seeds: ["ck-birla-a", "ck-birla-b", "ck-birla-c"],
    images: [ck_cancer1, ck_cancer2, ck_cancer3],
  },
  {
    id: "tcs-stress-management",
    title: "Stress Management",
    type: "Seminar",
    subtitle: "TCS",
    seeds: ["tcs-a", "tcs-b", "tcs-c"],
    images: [tcs_stress1, tcs_stress2, tcs_stress3],
  },
  {
    id: "cmri-fellowship-fatherhood",
    title: "Fellowship in Fatherhood",
    type: "Seminar",
    subtitle: "CMRI",
    seeds: ["cmri-a", "cmri-b"],
    images: [cmri_father1, cmri_father2],
  },
  {
    id: "yi-autism",
    title: "Demystifying Autism Awareness Program",
    type: "Awareness Program",
    subtitle: "Y's Kolkata Chapter",
    seeds: ["yi-a", "yi-b", "yi-c"],
    images: [autism1, autism2, autism3],
  },
];

function placeholder(seed: string) {
  return `https://picsum.photos/seed/pr-${seed}/800/600`;
}

type LightboxImage = { src: string; alt: string };

interface EventSectionProps {
  event: Event;
  globalOffset: number;
  onImageClick: (index: number) => void;
}

function EventSection({ event, globalOffset, onImageClick }: EventSectionProps) {
  return (
    <div>
      {/* Heading area */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-4xl font-display leading-tight text-foreground">
          {event.title}
        </h2>
        {event.subtitle && (
          <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
            {event.subtitle}
          </p>
        )}
        {event.date && (
          <p className="mt-2 text-xs tracking-[0.25em] uppercase text-primary/70">
            {event.date}
          </p>
        )}
      </div>

      {/* 3-image row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {event.seeds.map((seed, i) => {
          const src = event.images?.[i] || placeholder(seed);
          const imgIndex = globalOffset + i;
          return (
            <button
              key={seed}
              type="button"
              id={`event-img-${event.id}-${i}`}
              onClick={() => onImageClick(imgIndex)}
              aria-label={`Open ${event.title} photo ${i + 1}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted cursor-zoom-in"
            >
              {src.toLowerCase().endsWith(".mp4") || src.toLowerCase().endsWith(".mov") ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
              ) : (
                <img
                  src={src}
                  alt={`${event.title} — photo ${i + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full transition-transform duration-[1600ms] group-hover:scale-105 ${
                    src.includes("ntpc_womens_day3") || src.includes("walk1") || src.includes("ck_cancer1") ? "object-contain" : src.includes("cmri_father1") ? "object-cover object-top" : "object-cover"
                  }`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="rounded-full bg-white/20 backdrop-blur-sm p-2.5">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type TabKey = "initiatives" | "collaborations";

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("initiatives");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Build a flat image list for the lightbox — per-tab
  const initiativesImages = useMemo<LightboxImage[]>(
    () =>
      initiativesEvents.flatMap((ev) =>
        ev.seeds.map((seed, i) => ({
          src: ev.images?.[i] || placeholder(seed),
          alt: `${ev.title} — photo ${i + 1}`,
        }))
      ),
    []
  );

  const collaborationsImages = useMemo<LightboxImage[]>(
    () =>
      collaborationsEvents.flatMap((ev) =>
        ev.seeds.map((seed, i) => ({
          src: ev.images?.[i] || placeholder(seed),
          alt: `${ev.title} — photo ${i + 1}`,
        }))
      ),
    []
  );

  const activeImages =
    activeTab === "initiatives" ? initiativesImages : collaborationsImages;
  const activeEvents =
    activeTab === "initiatives" ? initiativesEvents : collaborationsEvents;

  // Compute per-event global offsets
  const eventOffsets = useMemo(() => {
    const offsets: number[] = [];
    let running = 0;
    for (const ev of activeEvents) {
      offsets.push(running);
      running += ev.seeds.length;
    }
    return offsets;
  }, [activeEvents]);

  const tabs: { key: TabKey; label: string; subLabel: string }[] = [
    {
      key: "initiatives",
      label: "Pause Room Initiatives",
      subLabel: "Events organized by The Pause Room",
    },
    {
      key: "collaborations",
      label: "Partnerships & Collaborations",
      subLabel: "Events with organizations, hospitals, schools & corporates",
    },
  ];

  return (
    <PageShell
      eyebrow="In Action"
      title={
        <>
          Moments we have <em className="not-italic">held together</em>
        </>
      }
      intro="A visual archive of the workshops, seminars, webinars and community events that have shaped The Pause Room."
      image={blogHero}
    >
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          {/* ── Tab Switcher ─────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 p-1.5 rounded-2xl bg-muted/60 border border-border/50 backdrop-blur-sm max-w-3xl mx-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`tab-${tab.key}`}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key);
                    setLightboxIndex(null);
                  }}
                  className={`flex-1 flex flex-col items-center text-center px-6 py-4 rounded-xl transition-all duration-500 ${
                    isActive
                      ? "bg-card shadow-soft text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive ? "text-foreground" : ""
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`mt-1 text-[11px] leading-snug transition-all duration-300 ${
                      isActive ? "text-primary/80" : "text-muted-foreground/70"
                    }`}
                  >
                    {tab.subLabel}
                  </span>
                  {isActive && (
                    <span className="mt-2 h-0.5 w-8 rounded-full bg-primary/60" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Event count label ────────────────────────────────────────── */}
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
            {activeEvents.length} {activeEvents.length === 1 ? "Event" : "Events"}
          </p>

          {/* ── Event List ───────────────────────────────────────────────── */}
          <div
            key={activeTab}
            className="space-y-20 animate-fade-up"
            style={{ animationDuration: "600ms" }}
          >
            {activeEvents.map((event, idx) => (
              <EventSection
                key={event.id}
                event={event}
                globalOffset={eventOffsets[idx]}
                onImageClick={(i) => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={activeImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </PageShell>
  );
}
