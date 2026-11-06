import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { siteFaqs } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper-dim/50 py-24 sm:py-32">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.1} className="mt-14 rounded-3xl border border-ink/10 bg-white px-6 shadow-soft sm:px-10">
          <Accordion type="single" collapsible>
            {siteFaqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
