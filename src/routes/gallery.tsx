import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Lightbox } from "@/components/site/Lightbox";
import blogHero from "@/assets/pages/blog-hero.jpg";

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
};

// ─── Pause Room Initiatives ───────────────────────────────────────────────────
const initiativesEvents: Event[] = [
  {
    id: "before-next-chapter",
    title: "Before the Next Chapter",
    type: "Webinar",
    subtitle: "A reflective space for emotional transitions and new beginnings",
    seeds: ["chapter-a", "chapter-b", "chapter-c"],
  },
  {
    id: "christmas-social-skills",
    title: "Social Skills Training & Christmas Party",
    type: "Workshop",
    subtitle: "Celebrating connection, play and togetherness",
    seeds: ["xmas-a", "xmas-b", "xmas-c"],
  },
  {
    id: "anger-management-children",
    title: "Anger Management for Children",
    type: "Workshop",
    subtitle:
      "Helping young minds understand their emotions and respond with calm",
    seeds: ["anger-a", "anger-b", "anger-c"],
  },
  {
    id: "social-skills-summer",
    title: "Social Skills for Children – Summer Training",
    type: "Workshop",
    subtitle: "Building confidence, empathy and connection over summer",
    seeds: ["summer-a", "summer-b", "summer-c"],
  },
  {
    id: "social-skills-adulthood",
    title: "Social Skills, Emotional Regulation & Transition into Adulthood",
    type: "Workshop",
    subtitle:
      "Equipping young adults with the emotional toolkit for life's next chapter",
    seeds: ["adult-a", "adult-b", "adult-c"],
  },
];

// ─── Partnerships & Collaborations ───────────────────────────────────────────
const collaborationsEvents: Event[] = [
  {
    id: "cdc-high-pressure",
    title: "Managing High Pressure Situations",
    type: "Seminar",
    subtitle: "CDC × The Pause Room",
    seeds: ["cdc-a", "cdc-b", "cdc-c"],
  },
  {
    id: "vesuvius-parenting",
    title: "Successful Parenting",
    type: "Seminar",
    subtitle: "Vesuvius International Ltd.",
    seeds: ["vesuvius-a", "vesuvius-b", "vesuvius-c"],
  },
  {
    id: "brave-souls-awareness",
    title: "Mental Health & Wellbeing Awareness",
    type: "Awareness Program",
    subtitle: "Brave Souls Foundation × The Pause Room",
    seeds: ["brave-a", "brave-b", "brave-c"],
  },
  {
    id: "vesuvius-mental-load",
    title: "The Invisible Mental Load",
    type: "Seminar",
    subtitle: "Vesuvius International Ltd.",
    seeds: ["vesuvius2-a", "vesuvius2-b", "vesuvius2-c"],
  },
  {
    id: "iocl-mental-load",
    title: "Invisible Mental Load",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["iocl-load-a", "iocl-load-b", "iocl-load-c"],
  },
  {
    id: "cu-learning-disability",
    title: "Learning Disability Training for PhD Students",
    type: "Training",
    subtitle: "Calcutta University × The Pause Room",
    seeds: ["cu-a", "cu-b", "cu-c"],
  },
  {
    id: "noahs-arc-children",
    title: "Emotion & Cognitive Skills Training for Special Needs Children",
    type: "Training",
    subtitle: "Noah's Arc × The Pause Room",
    seeds: ["noah-a", "noah-b", "noah-c"],
  },
  {
    id: "anxiety-to-action",
    title: "From Anxiety to Action",
    type: "Seminar",
    subtitle: "The Pause Room",
    seeds: ["anxiety-a", "anxiety-b", "anxiety-c"],
  },
  {
    id: "walk-dyslexia",
    title: "Walk for Dyslexia",
    type: "Awareness Program",
    subtitle: "The Pause Room × Anjali Dyslexia Association",
    seeds: ["dyslexia-a", "dyslexia-b", "dyslexia-c"],
  },
  {
    id: "ntpc-womens-mental-health",
    title: "Navigating Women's Mental Health at Work",
    type: "Seminar",
    subtitle: "NTPC Farakka",
    seeds: ["ntpc-a", "ntpc-b", "ntpc-c"],
  },
  {
    id: "brave-souls-acid-attack",
    title: "Acid Attack Survivors Panel Discussion",
    type: "Panel Discussion",
    subtitle: "Brave Souls Foundation",
    seeds: ["acid-a", "acid-b", "acid-c"],
  },
  {
    id: "iocl-stress",
    title: "Stress Management at Workplace",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["iocl-stress-a", "iocl-stress-b", "iocl-stress-c"],
  },
  {
    id: "iocl-erpl-wellbeing",
    title: "Mental Health & Wellbeing",
    type: "Seminar",
    subtitle: "IOCL ERPL",
    seeds: ["erpl-a", "erpl-b", "erpl-c"],
  },
  {
    id: "iocl-work-life",
    title: "Mental Wellbeing & Work-Life Balance",
    type: "Seminar",
    subtitle: "IOCL Eastern Region Office",
    seeds: ["worklife-a", "worklife-b", "worklife-c"],
  },
  {
    id: "iocl-children-wellbeing",
    title: "Mental Wellbeing of Children",
    type: "Seminar",
    subtitle: "IOCL Haldia Refinery",
    seeds: ["children-wb-a", "children-wb-b", "children-wb-c"],
  },
  {
    id: "ys-autism",
    title: "Demystifying Autism Awareness Program",
    type: "Awareness Program",
    subtitle: "Y's Kolkata Chapter",
    seeds: ["autism-a", "autism-b", "autism-c"],
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
    <div className="reveal-on-scroll">
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
          const src = placeholder(seed);
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
              <img
                src={src}
                alt={`${event.title} — photo ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
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
          src: placeholder(seed),
          alt: `${ev.title} — photo ${i + 1}`,
        }))
      ),
    []
  );

  const collaborationsImages = useMemo<LightboxImage[]>(
    () =>
      collaborationsEvents.flatMap((ev) =>
        ev.seeds.map((seed, i) => ({
          src: placeholder(seed),
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
