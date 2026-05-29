# Multi-Page Restructure for The Pause Room

Convert the current single-page site into a complete multi-page experience while preserving all existing visuals (colors, typography, animations, imagery style, hero treatments). The uploaded PDF defines the canonical service catalog, team members (Aparna, Swati, Prerna), FAQs, and contact details — site content will be rewritten to match.

## 1. Route architecture

New file-based routes in `src/routes/`:

```
index.tsx              -> / (landing, condensed previews of each section)
about.tsx              -> /about
team.tsx               -> /team
team.$slug.tsx         -> /team/aparna | /swati | /prerna | + placeholders
pause-room.tsx         -> /pause-room (story / philosophy)
services.tsx           -> /services (full catalog)
services.$slug.tsx     -> existing dynamic service detail (rewritten data)
blog.tsx               -> /blog
blog.$slug.tsx         -> /blog/:slug
contact.tsx            -> /contact
book.tsx               -> /book (consultation booking)
```

`Navbar` and `Footer` updated to link to these real routes (replacing hash-only nav). Landing page keeps in-page section previews + CTAs to the dedicated pages. The Calm Room stays on the landing page.

## 2. Services rewritten to match the PDF

Replace `src/data/services.ts` with three top-level service categories, each with sub-services that get their own detail page:

- **Assessments** — Career & Aptitude, Personality Profiling, Diagnostic Psychometry (ADHD/ASD/Depression/Anxiety/BPAD), Neuropsychological Assessment, IQ Assessment, SLD Assessment
- **Therapy** — Child & Adolescent Counselling, Adult Counselling, Career Counselling, Grief Counselling, Behaviour Modification, Parental Counselling, Group Therapy
- **Classes & Events** — Attention Training, Social Skills, Special Education, Workshops, Seminars & Webinars

Each entry keeps the existing detail-page shape (hero image, overview, benefits, process, who-it's-for, expectations, FAQs, CTA) so `ServicePage.tsx` does not need a rewrite — only the data and a richer category grouping on `/services`.

## 3. Splash / intro rotation

`IntroHero` becomes a rotating cinematic intro:
- Pre-pick one of ~8 calming scenes per visit (sunrise mountains, floating clouds, ocean waves, rain on window, flowing leaves, forest light rays, meditation silhouette, drifting particles).
- Each scene reuses the existing Ken Burns + mist + logo treatment with a different background image and accent overlay.
- Auto-advances every ~5s with a slow cross-fade; logo and breathing dot stay fixed.
- Generate 4 new hero backgrounds via imagegen (we already have `hero-lake`; reuse + add clouds, ocean, forest, rain) and use CSS-driven scenes for the rest to avoid bloating asset count.

## 4. Team page + profiles

`/team` grid of 6 members (Aparna, Swati, Prerna + 3 realistic placeholders: Child Psychologist, Family Therapist, Wellness Coach). Each card links to `/team/$slug` with: portrait, name, role, qualifications (MBBS, MD Psychiatry, M.Phil Clinical Psychology, PsyD, CBT, Trauma cert.), experience, specializations, languages, bio. Placeholder portraits generated via imagegen (calm, professional, soft natural light).

## 5. About, Pause Room, Blog, Contact, Book

- **About**: hero quote, mission/vision/values, approach, why-choose-us (reuse `WhyUs` layout language).
- **Pause Room**: story, beliefs, healing philosophy, community impact, safe-space commitment.
- **Blog**: featured post + category chips + recent grid; `blog.$slug.tsx` renders a long-form article template. Seed with 6 placeholder articles.
- **Contact**: hero, contact cards (phone 7439680766, info/swati/aparna emails from PDF), working hours, map placeholder, contact form, emergency info, socials.
- **Book**: hero, consultation types (Online, In-person, Therapy, Follow-up), booking form, confirmation state, FAQ, CTA.

## 6. Landing page composition

Sections become condensed previews that deep-link to their pages:
`IntroHero` → `MainHero` → `About` preview → `Team` preview (new) → `Services` preview (top 4 cards + "View all services") → `CalmRoom` (kept) → `Testimonials` → `FAQs` → `Booking` (CTA card → /book) → `Contact` preview → `Blog` preview → `Footer`.

## 7. Navbar / Footer

Nav links: Home, About, Team, Pause Room, Services, Blog, Contact, Book Consultation (CTA). Mobile menu mirrors. Footer columns updated with the new routes and PDF contact info.

## Technical notes

- Use `<Link to="/...">` everywhere (no hash-only nav between pages); preserve hash links only for in-page anchors on the landing page.
- Wrap shared chrome in `__root.tsx` so Navbar/Footer render on every page; remove them from `index.tsx`.
- Each route defines its own `head()` meta (title, description, og:*). No og:image on root.
- Reuse existing components (`Navbar`, `Footer`, `WhyUs`, `Testimonials`, `FAQs`, `Booking`, `CalmRoom`, `ServicePage`) — only swap data + add new page wrappers to keep the design language intact.
- Generate a small batch of new images in parallel (intro variations + 6 team portraits + page heroes) using `imagegen` fast tier.

## Out of scope (call out)

- No backend wiring for the booking form or contact form (UI-only with success state) unless you want Lovable Cloud added afterwards.
- Blog articles are placeholder copy.
- Team members other than Aparna/Swati/Prerna are realistic placeholders.

Once approved I'll implement in one pass, batching file writes and image generation in parallel.
