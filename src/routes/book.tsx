import { useState, useRef } from "react";
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
  const [consultationType, setConsultationType] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    const name     = (fd.get("name") as string)?.trim() ?? "";
    const email    = (fd.get("email") as string)?.trim() ?? "";
    const phone    = (fd.get("phone") as string)?.trim() ?? "";
    const message  = (fd.get("message") as string)?.trim() ?? "";
    const dateStr  = date ? format(date, "PPP") : "";

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const whatsappMessage =
      `🌿 *New Booking Request — The Pause Room*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Hello, a new booking request has been submitted through the website. Here are the details:\n\n` +
      `👤 *Name:* ${name || "—"}\n` +
      `📧 *Email:* ${email || "—"}\n` +
      `📞 *Phone:* ${phone || "—"}\n\n` +
      `🗂 *Consultation Type:* ${consultationType || "—"}\n` +
      `📅 *Preferred Date:* ${dateStr || "—"}\n` +
      `⏰ *Preferred Time:* ${preferredTime || "—"}\n\n` +
      (message ? `💬 *Message from the enquirer:*\n${message}\n\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🕐 *Submitted on:* ${submittedAt}`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917439680766?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

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
            <h2 className="mt-3 text-3xl md:text-4xl">Choose what feels right</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {types.map(({ icon: Icon, label, desc }, i) => (
              <div key={label} className="reveal-on-scroll card-hover glass rounded-2xl p-6" style={{ transitionDelay: `${i * 80}ms` }}>
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
              <h2 className="mt-6 text-3xl">Thank you</h2>
              <p className="mt-3 text-muted-foreground">Your request has been received. We'll be in touch within 24 hours to confirm your session.</p>
              <Button className="mt-8 rounded-full" onClick={() => { setSubmitted(false); setConsultationType(""); setPreferredTime(""); setDate(undefined); }}>Book another</Button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="reveal-on-scroll glass rounded-3xl p-8 md:p-10 shadow-elevated grid sm:grid-cols-2 gap-5"
            >
              <div className="sm:col-span-2">
                <h2 className="text-2xl">Booking form</h2>
                <p className="text-sm text-muted-foreground">Share what feels right — we'll handle the rest.</p>
              </div>
              <div>
                <Label>Name</Label>
                <Input name="name" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Email</Label>
                <Input name="email" type="email" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input name="phone" type="tel" className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <div>
                <Label>Consultation type</Label>
                <Select value={consultationType} onValueChange={setConsultationType} required>
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
                <Select value={preferredTime} onValueChange={setPreferredTime}>
                  <SelectTrigger className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl"><SelectValue placeholder="Choose a time" /></SelectTrigger>
                  <SelectContent>
                    {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <Textarea name="message" rows={4} className="mt-2 bg-white/60 border-white/60 rounded-xl" placeholder="Share whatever feels right." />
              </div>
              <Button type="submit" className="sm:col-span-2 h-12 rounded-full bg-primary hover:shadow-glow">
                <Send size={16} className="mr-2" /> Send request
              </Button>
            </form>
          )}
        </div>
      </section>


    </PageShell>
  );
}
