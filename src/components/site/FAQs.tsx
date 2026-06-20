import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I know if I need therapy?", a: "If a part of you has been quietly tired, anxious, stuck, or overwhelmed for a while — that is reason enough. You do not need a diagnosis to deserve support." },
  { q: "Are online consultations available?", a: "Yes. Our online sessions are designed to feel just as warm and grounded as our in-person experience, from anywhere in the world." },
  { q: "Is my information confidential?", a: "Always. Everything you share is held with strict clinical confidentiality and stored securely." },
  { q: "How long does therapy take?", a: "It varies. Some find clarity in a handful of sessions; others choose ongoing support. Your pace leads the journey." },
  { q: "Can students book sessions?", a: "Absolutely. We offer student-friendly counseling for academic stress, identity, and emotional wellbeing." },
];

export function FAQs() {
  return (
    <section id="faqs" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">FAQs</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Gentle answers</h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-6 border-none data-[state=open]:shadow-soft transition-shadow duration-500"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
