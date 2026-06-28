import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Lightbox } from "@/components/site/Lightbox";
import blogHero from "@/assets/pages/blog-hero.jpg";
import anger1 from "@/assets/gallery/anger-1.png.asset.json";
import anger2 from "@/assets/gallery/anger-2.png.asset.json";
import anger3 from "@/assets/gallery/anger-3.png.asset.json";
import brave1 from "@/assets/gallery/brave-1.png.asset.json";
import brave2 from "@/assets/gallery/brave-2.png.asset.json";
import brave3 from "@/assets/gallery/brave-3.png.asset.json";
import christmas1 from "@/assets/gallery/christmas-1.png.asset.json";
import christmas2 from "@/assets/gallery/christmas-2.png.asset.json";
import ckbirla1 from "@/assets/gallery/ckbirla-1.png.asset.json";
import ckbirla2 from "@/assets/gallery/ckbirla-2.webp.asset.json";
import ckbirla3 from "@/assets/gallery/ckbirla-3.webp.asset.json";
import cmri1 from "@/assets/gallery/cmri-1.png.asset.json";
import cmri2 from "@/assets/gallery/cmri-2.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Pause Room" },
      {
        name: "description",
        content:
          "Moments from workshops, seminars, webinars and community events hosted by The Pause Room.",
      },
      { property: "og:title", content: "Gallery — The Pause Room" },
      {
        property: "og:description",
        content:
          "A visual archive of our workshops, seminars and outreach work.",
      },
    ],
  }),
  component: GalleryPage,
});

type Event = { title: string; description?: string; seeds: string[]; images?: string[] };

const events: Event[] = [
  {
    title: "Anger Management Workshop",
    description:
      "An interactive workshop helping participants understand triggers and respond with calm intention.",
    seeds: ["anger-1", "anger-2", "anger-3"],
    images: [anger1.url, anger2.url, anger3.url],
  },
  {
    title: "Before the Next Chapter Webinar",
    description:
      "A reflective webinar on closing emotional chapters before stepping into something new.",
    seeds: ["chapter-1", "chapter-2", "chapter-3"],
  },
  {
    title: "Brave Soul Foundation",
    description:
      "A community collaboration supporting courage, healing and emotional resilience.",
    seeds: ["brave-1", "brave-2", "brave-3"],
    images: [brave1.url, brave2.url, brave3.url],
  },
  {
    title: "Calcutta Debating Circle",
    description:
      "Conversations on mental health, identity and modern life with the Calcutta Debating Circle.",
    seeds: ["debate-1", "debate-2", "debate-3"],
  },
  {
    title: "Calcutta University Learning Disability",
    description:
      "A seminar at Calcutta University on understanding and supporting learning disabilities.",
    seeds: ["cu-1", "cu-2", "cu-3"],
  },
  {
    title: "CK Birla World Cancer Day",
    description:
      "Holding space for emotional well-being on World Cancer Day with CK Birla Hospitals.",
    seeds: ["ckbirla-1", "ckbirla-2", "ckbirla-3"],
    images: [ckbirla1.url, ckbirla2.url, ckbirla3.url],
  },
  {
    title: "IOCL Haldia Invisible Mental Load Seminar",
    description:
      "A workplace seminar exploring the invisible mental load carried by modern professionals.",
    seeds: ["iocl-1", "iocl-2", "iocl-3"],
  },
  {
    title: "Smart Skills Summer Camp 26",
    description:
      "Life-skills and emotional learning for young minds at the Smart Skills summer camp.",
    seeds: ["smart-1", "smart-2", "smart-3"],
  },
  {
    title: "Summer Camp 2026",
    description:
      "A gentle, joyful summer camp built around creativity, play and emotional learning.",
    seeds: ["camp-1", "camp-2", "camp-3"],
  },
  {
    title: "Vesuvius Successful Parenting",
    description:
      "A parenting series with Vesuvius on raising emotionally healthy children.",
    seeds: ["vesuvius-1", "vesuvius-2", "vesuvius-3"],
  },
  {
    title: "Christmas Celebration",
    description:
      "A warm celebration of togetherness, creativity and joy at The Pause Room.",
    seeds: ["christmas-1", "christmas-2"],
    images: [christmas1.url, christmas2.url],
  },
  {
    title: "CMRI Fellowship in Fatherhood",
    description:
      "A fellowship session with CK Birla CMRI exploring the emotional transition into fatherhood.",
    seeds: ["cmri-1", "cmri-2"],
    images: [cmri1.url, cmri2.url],
  },
];

function placeholder(seed: string) {
  return `https://picsum.photos/seed/pauseroom-${seed}/800/600`;
}

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = useMemo(
    () =>
      events.flatMap((event) =>
        event.seeds.map((seed, i) => ({
          src: event.images?.[i] ?? placeholder(seed),
          alt: `${event.title} — photo ${i + 1}`,
        }))
      ),
    []
  );

  let globalIndex = -1;

  return (
    <PageShell
      eyebrow="Gallery"
      title={
        <>
          Moments we have <em className="not-italic">held together</em>
        </>
      }
      intro="A visual archive of the workshops, seminars, webinars and community events that have shaped The Pause Room."
      image={blogHero}
    >
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {events.map((event, idx) => (
            <div key={event.title} className="reveal-on-scroll">
              <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary/80">
                    Event {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-display leading-tight">
                    {event.title}
                  </h2>
                  {event.description && (
                    <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
                <div className="hidden md:block h-px flex-1 bg-border/60" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {event.seeds.map((seed, i) => {
                  const src = event.images?.[i] ?? placeholder(seed);
                  globalIndex += 1;
                  const myIndex = globalIndex;
                  return (
                    <button
                      type="button"
                      key={seed}
                      onClick={() => setLightboxIndex(myIndex)}
                      aria-label={`Open ${event.title} photo ${i + 1}`}
                      className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-card border border-border/60 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-elevated cursor-zoom-in text-left"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <img
                        src={src}
                        alt={`${event.title} — photo ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </PageShell>
  );
}
