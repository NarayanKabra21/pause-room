import { useState } from "react";
import { Calendar as CalendarIcon, MessageCircle, Send } from "lucide-react";
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
              <MessageCircle size={16} className="mr-2" /> Quick WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
