import { useState } from "react";
import { Calendar as CalendarIcon, Send } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Booking() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <section id="book" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-dawn opacity-50" />
      <div className="absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Book</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Begin your <em className="text-gradient-lake not-italic">pause</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Reach out and we'll respond gently within 24 hours.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thank you. We'll reach out within 24 hours.");
          }}
          className="mt-14 glass rounded-3xl p-8 md:p-10 shadow-elevated grid sm:grid-cols-2 gap-5"
        >
          <div className="sm:col-span-1">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Full name</Label>
            <Input required className="mt-2 bg-white/60 border-white/60 h-12 rounded-xl" placeholder="Your name" />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Age</Label>
            <Input type="number" min={1} className="mt-2 bg-white/60 border-white/60 h-12 rounded-xl" placeholder="e.g. 28" />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
            <Input type="email" required className="mt-2 bg-white/60 border-white/60 h-12 rounded-xl" placeholder="you@example.com" />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</Label>
            <Input type="tel" className="mt-2 bg-white/60 border-white/60 h-12 rounded-xl" placeholder="+91 ..." />
          </div>

          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Consultation type</Label>
            <Select>
              <SelectTrigger className="mt-2 bg-white/60 border-white/60 h-12 rounded-xl">
                <SelectValue placeholder="Choose a session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online Session</SelectItem>
                <SelectItem value="in-person">In-Person Session</SelectItem>
                <SelectItem value="emergency">Emergency Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "mt-2 w-full h-12 rounded-xl justify-start text-left font-normal bg-white/60 border-white/60",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="sm:col-span-2">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Message</Label>
            <Textarea rows={4} className="mt-2 bg-white/60 border-white/60 rounded-xl" placeholder="Share whatever feels right to share." />
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
            <Button
              type="submit"
              className="h-12 rounded-full px-8 bg-primary hover:shadow-glow transition-all duration-500 hover:scale-[1.02] flex-1"
            >
              <Send size={16} className="mr-2" /> Send request
            </Button>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="h-12 rounded-full px-8 inline-flex items-center justify-center bg-accent text-accent-foreground font-medium transition-all duration-500 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="mr-2 h-4 w-4" /> Quick WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
