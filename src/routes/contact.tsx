import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, AlertCircle, Clock } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import contactHero from "@/assets/Contact_new.png";

const CONSULTATION_TYPES = [
  "Individual Therapy",
  "Couple / Relationship Counselling",
  "Family Therapy",
  "Child & Adolescent",
  "Assessment",
  "Workshop / Seminar / Webinar",
  "Other",
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Pause Room" },
      { name: "description", content: "Reach The Pause Room — phone, email, address and a gentle contact form." },
      { property: "og:title", content: "Contact — The Pause Room" },
      { property: "og:description", content: "Walk in, write to us, or call — we are here when you're ready." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [consultationType, setConsultationType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    const name = (fd.get("name") as string)?.trim() ?? "";
    const age = (fd.get("age") as string)?.trim() ?? "";
    const email = (fd.get("email") as string)?.trim() ?? "";
    const phone = (fd.get("phone") as string)?.trim() ?? "";
    const preferredDate = (fd.get("preferredDate") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";

    if (!name || !age || !email || !phone || !consultationType || !preferredDate || !message) {
      toast.error("Please fill in all the required fields before sending the message.");
      return;
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const whatsappMessage =
      `🌿 *New Enquiry — The Pause Room*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Hello, a new enquiry has been submitted through the website. Here are the details:\n\n` +
      `👤 *Name:* ${name}\n` +
      `🎂 *Age:* ${age}\n` +
      `📧 *Email:* ${email}\n` +
      `📞 *Phone:* ${phone}\n\n` +
      `🗂 *Type of Consultation:* ${consultationType}\n` +
      `📅 *Preferred Date:* ${new Date(preferredDate).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}\n\n` +
      `💬 *Message from the enquirer:*\n${message}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🕐 *Submitted on:* ${submittedAt}`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917439680766?text=${encoded}`, "_blank");
  };

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Support that meets you<br /><em className="not-italic">where you are.</em></>}
      intro="Reach us by phone, email or message."
      image={contactHero}
    >
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div className="reveal-on-scroll space-y-5">
            {[
              { icon: Phone, label: "Phone", val: "+91 74396 80766", href: "tel:+917439680766" },
              { icon: Mail, label: "General", val: "info.pauseroom@gmail.com", href: "mailto:info.pauseroom@gmail.com" },
              { icon: MapPin, label: "Address", val: "P-43, Niharika building, E.M Bypass Metropolitan, Dhapa, S.O South 24 Parganas, West Bengal- 700105" },
              { icon: Clock, label: "Working hours", val: "Mon–Sat · 9:00 AM – 7:00 PM" },
            ].map(({ icon: Icon, label, val, href }) => (
              <a
                key={label + val}
                href={href ?? "#"}
                className="flex items-start gap-4 glass rounded-2xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 text-foreground">{val}</div>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4 rounded-2xl p-5 border border-destructive/20 bg-destructive/5">
              <AlertCircle size={20} className="text-destructive mt-0.5" />
              <div>
                <div className="text-sm font-medium text-destructive">Emergency Support</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  For immediate mental health support, please contact Tele-MANAS, the Government of India's national mental health helpline. This service is operated independently by the Government of India and is not associated with The Pause Room.
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-muted-foreground">Tele-MANAS Helpline: </span>
                  <a href="tel:18008914416" className="text-foreground font-semibold hover:text-destructive transition-colors">1-800-891-4416</a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 shadow-soft space-y-4"
            >
              <h2 className="text-2xl">Send a message</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input name="name" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
                </div>
                <div>
                  <Label>Age</Label>
                  <Input name="age" type="number" min={1} max={120} required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <Input name="email" type="email" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input name="phone" type="tel" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Consultation Type</Label>
                  <Select
                    value={consultationType}
                    onValueChange={setConsultationType}
                    required
                  >
                    <SelectTrigger className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONSULTATION_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Preferred Date</Label>
                  <Input name="preferredDate" type="date" required className="mt-2 h-12 bg-white/60 border-white/60 rounded-xl" />
                </div>
              </div>
              <div>
                <Label>Message</Label>
                <Textarea name="message" required rows={4} className="mt-2 bg-white/60 border-white/60 rounded-xl" />
              </div>
              <Button type="submit" className="w-full h-12 rounded-full bg-primary hover:shadow-glow">
                Send message
              </Button>
            </form>

            <div className="mt-6 glass rounded-3xl overflow-hidden h-64">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=P-43%2C+Niharika+building%2C+E.M+Bypass+Metropolitan%2C+Dhapa%2C+South+24+Parganas%2C+West+Bengal+700105&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
