import type { LucideIcon } from 'lucide-react';
import { Cog, Target, PencilRuler, BadgeCheck, Handshake, Globe } from 'lucide-react';

export const serviceIcons: Record<string, LucideIcon> = { Cog, Target, PencilRuler, BadgeCheck, Handshake, Globe };
export type ServiceIconName = keyof typeof serviceIcons;

export type ExampleImage = { image: string; hint: string };
export type ExampleRow = { label: string; items: ExampleImage[] };

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  includes: string[];
  closing: string;
  image: string;
  imageHint: string;
  exampleRows: ExampleRow[];
  faqs: { question: string; answer: string }[];
};

/** What we can work from — shared across service pages (from the Process section). */
export const referenceMaterial = ['Sketches', 'Photos', 'CAD Files', 'Existing Drawings', 'Product Samples', 'Technical Descriptions'];
export const principles = ['Accuracy', 'Clarity', 'Precision'];

const sketchFaq = {
  question: 'Can you work from a hand-drawn sketch?',
  answer: 'Yes. A hand-drawn sketch can be a useful starting point. We can analyze the available information and develop a professional technical representation from it.',
};
const cadFaq = {
  question: 'Can you work from a 3D CAD model?',
  answer: 'Yes. CAD models can provide valuable information about geometry, components, dimensions, and relationships between parts.',
};
const convertFaq = {
  question: 'Can you convert an existing drawing into a professional patent drawing?',
  answer: 'Yes. Existing drawings can often be used as reference material. We can recreate or refine the visual representation based on the project requirements.',
};

export const services: Service[] = [
  {
    slug: 'design-patent-drawing-services',
    number: '01',
    title: 'Design Patent Drawings',
    shortTitle: 'Design Patent Drawings',
    tagline: 'Show the design. Define the appearance.',
    description:
      'Design patent drawings focus on the visual appearance and ornamental characteristics of a product or article. We create professional representations of your design using appropriate views, perspectives, details, and visual elements.',
    includes: [
      'Perspective views', 'Front, rear, left and right views', 'Top and bottom views', 'Sectional views', 'Enlarged detail views',
      'Broken-line representations', 'Surface details', 'Shading', 'Complete drawing sets',
    ],
    closing: 'From product concept to professional design representation.',
    image: '/images/design-samples/design-01.jpg',
    imageHint: 'design patent drawing',
    exampleRows: [
      {
        label: 'Design Patent Drawing Samples',
        items: Array.from({ length: 6 }, (_, i) => ({
          image: `/images/design-samples/design-${String(i + 1).padStart(2, '0')}.jpg`,
          hint: `design patent drawing sample ${i + 1}`,
        })),
      },
    ],
    faqs: [
      {
        question: 'Do you provide Design Patent Drawings?',
        answer: 'Yes. ADVANTAIP provides professional design patent drawing services, including multiple views, perspective views, detail views, and other representations based on the project requirements.',
      },
      sketchFaq, cadFaq, convertFaq,
    ],
  },
  {
    slug: 'utility-patent-drawing-services',
    number: '02',
    title: 'Utility Patent Drawings',
    shortTitle: 'Utility Patent Drawings',
    tagline: 'Turn complex inventions into clear technical illustrations.',
    description:
      'Utility patent drawings communicate the structure, components, relationships, systems, and functionality of an invention. We create detailed technical illustrations based on sketches, descriptions, photographs, CAD models, prototypes, or existing technical information.',
    includes: [
      'Mechanical patent drawings', 'Assembly drawings', 'Exploded views', 'Cross-sectional views', 'Detailed component views', 'Technical schematics',
      'Flowcharts', 'Block diagrams', 'System diagrams', 'Electrical diagrams', 'Process diagrams', 'Multiple-view drawings',
    ],
    closing: 'Complex invention. Clear representation.',
    image: '/images/utility-samples/utility-01.jpg',
    imageHint: 'utility patent drawing',
    exampleRows: [
      {
        label: 'Utility Patent Drawing Samples',
        items: Array.from({ length: 11 }, (_, i) => ({
          image: `/images/utility-samples/utility-${String(i + 1).padStart(2, '0')}.jpg`,
          hint: `utility patent drawing sample ${i + 1}`,
        })),
      },
    ],
    faqs: [
      {
        question: 'Do you provide Utility Patent Drawings?',
        answer: 'Yes. We provide technical illustrations for utility patent applications, including mechanical drawings, assemblies, exploded views, sectional views, flowcharts, block diagrams, system diagrams, and other technical representations.',
      },
      sketchFaq, cadFaq, convertFaq,
    ],
  },
  {
    slug: 'trademark-patent-drawing-services',
    number: '03',
    title: 'Trademark Drawings',
    shortTitle: 'Trademark Drawings',
    tagline: 'Present your brand with clarity.',
    description:
      'A strong trademark begins with a clear representation. ADVANTAIP creates clean and professional visual representations for trademark-related documentation involving logos, stylized marks, product configurations, packaging, and other visual elements.',
    includes: [
      'Logo representations', 'Stylized marks', 'Product configurations', 'Three-dimensional representations', 'Packaging representations',
      'Product appearance', 'Trade dress representations', 'Visual brand elements',
    ],
    closing: 'Your brand. Clearly represented.',
    image: '/images/trademark/trademark.png',
    imageHint: 'trademark drawing',
    exampleRows: [],
    faqs: [
      {
        question: 'Do you provide Trademark Drawings?',
        answer: 'Yes. We provide professional visual representations for trademark-related documentation, including logos, stylized marks, product configurations, packaging, and other visual elements.',
      },
      sketchFaq, cadFaq, convertFaq,
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAdjacentServices(slug: string) {
  const idx = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  return { prev, next };
}
