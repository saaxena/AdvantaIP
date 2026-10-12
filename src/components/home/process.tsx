import { Send, Search, PenTool, RefreshCcw, PackageCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const steps = [
  {
    icon: Send,
    title: 'Share',
    description: 'Send us your requirements and available reference material.',
    chips: ['Sketches', 'Photos', 'CAD Files', 'Existing Drawings', 'Product Samples', 'Technical Descriptions'],
  },
  {
    icon: Search,
    title: 'Understand',
    description: 'We review the information and develop an understanding of the invention, design, components, and features that need to be represented.',
  },
  {
    icon: PenTool,
    title: 'Create',
    description: 'Our technical illustration process transforms your information into professional IP drawings. We focus on:',
    chips: ['Accuracy', 'Clarity', 'Consistency', 'Detail'],
  },
  {
    icon: RefreshCcw,
    title: 'Review',
    description: 'You review the drawings and provide your feedback. We refine the drawings as required to ensure they accurately represent your intended design or invention.',
  },
  {
    icon: PackageCheck,
    title: 'Deliver',
    description: 'Once approved, the final drawings are prepared and delivered in the required digital format.',
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Process"
          title="From Idea to Professional IP Drawing"
          description="A simple process designed around your idea."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent/40 via-ink/10 to-transparent sm:left-7" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative flex gap-5 sm:gap-6">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper font-display text-sm font-bold text-ink sm:h-14 sm:w-14">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
                    <div className="flex items-center gap-3">
                      <step.icon className="h-4 w-4 text-accent" />
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite">{step.description}</p>
                    {step.chips && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.chips.map((c) => (
                          <span key={c} className="rounded-full border border-ink/10 bg-paper px-3 py-1 font-mono text-[0.68rem] text-graphite">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 text-center font-display text-lg font-semibold text-accent-deep">
            Simple Process. Precise Drawings. Reliable Results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
