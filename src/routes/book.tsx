import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar as CalendarIcon, Check, Send, Video, MapPin, Repeat, HeartPulse } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import bookImg from "@/assets/pages/book-hero.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — The Pause Room" },
      { name: "description", content: "Book an online, in-person, therapy or follow-up consultation with The Pause Room." },
      { property: "og:title", content: "Book a Consultation — The Pause Room" },
      { property: "og:description", content: "Begin gently. A short, confidential conversation." },
    ],
  }),
  component: BookPage,
});

const types = [
  { icon: Video, label: "Online Consultation", desc: "A private session from wherever feels comfortable." },
  { icon: MapPin, label: "In-Person Consultation", desc: "Visit us at our calm studio space." },
  { icon: HeartPulse, label: "Therapy Session", desc: "A weekly therapeutic relationship over time." },
  { icon: Repeat, label: "Follow-Up Session", desc: "Continuing care with your existing clinician." },
];

const bookFaqs = [
  { q: "How soon can I be seen?", a: "Most new requests are responded to within 24 hours, with sessions usually scheduled within the same week." },
  { q: "What does the first session cost?", a: "We offer a 15-minute introductory call at no charge. Full session pricing is shared transparently in our reply." },
  { q: "Can I choose my clinician?", a: "Yes. Mention a preference in your message, or let us suggest the best fit for your needs." },
];

function BookPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell
      eyebrow="Book a Consultation"
      title={<>Your first session<br /><em className="not-italic">is just a breath away.</em></>}
      intro="A short, confidential conversation to begin."
      image={bookImg}
    >
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal-on-scroll max-w-2xl">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Consultation types</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Choose what feels right.</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {types.map(({ icon: Icon, label, desc }, i) => (
              <div key={label} className="reveal-on-scroll glass rounded-2xl p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4"><Icon size={20} strokeWidth={1.6} /></div>
                <h3 className="text-lg">{label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-28">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <div className="reveal-on-scroll glass rounded-3xl p-12 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/15 text-primary flex items-center justify-center"><Check size={28} /></div>
              <h2 className="mt-6 text-3xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">Your request has been received. We'll be in touch within 24 hours to confirm your session.</p>
              <Button className="mt-8 rounded-full" onClick={() => setSubmitted(false)}>Book another</Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="reveal-on-scroll glass rounded-3xl p-8 md:p-10 shadow-elevated grid sm:grid-cols-2 gap-5"
            >
              <div className="sm:col-span-2">
                <h2 className="text-2xl">Booking form</h2>
                <p className="text-sm text-muted-foreground">Share what feels right — we'll handle the rest.</p>
              </div>
              <div>
                <Label>Name</Label>
                <Input required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input type="tel" className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Consultation type</Label>
                <Select>
                  <SelectTrigger className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl"><SelectValue placeholder="Choose" /></SelectTrigger>
                  <SelectContent>
                    {types.map((t) => <SelectItem key={t.label} value={t.label}>{t.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Preferred date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button type="button" variant="outline" className={cn("mt-2 w-full h-12 rounded-xl justify-start text-left font-normal bg-white/60 border-white/60", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))} initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Preferred time</Label>
                <Select>
                  <SelectTrigger className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl"><SelectValue placeholder="Choose a time" /></SelectTrigger>
                  <SelectContent>
                    {["Morning (9–12)","Afternoon (12–4)","Evening (4–7)"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <Textarea rows={4} className="mt-2 bg-white/60 border-white/60 rounded-xl" placeholder="Share whatever feels right." />
              </div>
              <Button type="submit" className="sm:col-span-2 h-12 rounded-full bg-primary hover:shadow-glow">
                <Send size={16} className="mr-2" /> Send request
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-sky">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl text-center reveal-on-scroll">Gentle answers.</h2>
          <div className="mt-10 space-y-4">
            {bookFaqs.map((f) => (
              <details key={f.q} className="reveal-on-scroll group glass rounded-2xl p-6 open:shadow-soft">
                <summary className="cursor-pointer list-none flex items-center justify-between text-lg">
                  {f.q}
                  <span className="ml-4 text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
