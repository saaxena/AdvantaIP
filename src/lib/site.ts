export const site = {
  name: 'ADVANTAIP',
  tagline: 'Advancing Ideas. Protecting Innovation.',
  description:
    'Professional patent and trademark drawing services — design patent drawings, utility patent drawings, and trademark drawings for inventors, businesses, patent professionals, and IP firms.',
  url: 'https://advantaip.com',
  // TODO: replace with your ADVANTAIP project/intake form (currently the previous site's form).
  orderFormUrl: 'https://forms.gle/LDcg8A17ZHiLumrn7',
  email: 'info@advantaip.com',
  location: 'Canada',
  serving: 'Serving Clients Worldwide',
  disclaimer:
    'ADVANTAIP provides professional drawing and illustration services and is not a law firm or a substitute for qualified legal advice.',
  social: { linkedin: '', twitter: '', youtube: '' },
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#process', label: 'Process' },
  { href: '/#why', label: 'Why ADVANTAIP' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const siteFaqs = [
  {
    question: 'What do I need to provide to get started?',
    answer:
      'You can provide anything that helps explain your invention or design, including sketches, photographs, CAD files, existing drawings, product samples, or technical descriptions. A finished technical drawing is not required to get started.',
  },
  {
    question: 'Can you work from a hand-drawn sketch?',
    answer:
      'Yes. A hand-drawn sketch can be a useful starting point. We can analyze the available information and develop a professional technical representation from it.',
  },
  {
    question: 'Can you work from a 3D CAD model?',
    answer:
      'Yes. CAD models can provide valuable information about geometry, components, dimensions, and relationships between parts.',
  },
  {
    question: 'Do you provide Design Patent Drawings?',
    answer:
      'Yes. ADVANTAIP provides professional design patent drawing services, including multiple views, perspective views, detail views, and other representations based on the project requirements.',
  },
  {
    question: 'Do you provide Utility Patent Drawings?',
    answer:
      'Yes. We provide technical illustrations for utility patent applications, including mechanical drawings, assemblies, exploded views, sectional views, flowcharts, block diagrams, system diagrams, and other technical representations.',
  },
  {
    question: 'Do you provide Trademark Drawings?',
    answer:
      'Yes. We provide professional visual representations for trademark-related documentation, including logos, stylized marks, product configurations, packaging, and other visual elements.',
  },
  {
    question: 'Can you convert an existing drawing into a professional patent drawing?',
    answer:
      'Yes. Existing drawings can often be used as reference material. We can recreate or refine the visual representation based on the project requirements.',
  },
  {
    question: 'Do you provide patent legal advice?',
    answer:
      'ADVANTAIP focuses on professional IP drawing and illustration services. We do not replace the role of a patent attorney or registered patent agent. For legal advice, patentability opinions, claim drafting, prosecution, or legal strategy, clients should work with a qualified patent professional.',
  },
  {
    question: 'Do you work with clients outside Canada?',
    answer:
      'Yes. ADVANTAIP is designed to serve clients internationally through digital communication and document workflows.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Project timelines depend on the complexity and number of drawings required. Once we understand your project requirements, we can provide an estimated delivery timeline.',
  },
  {
    question: 'Can I request revisions?',
    answer:
      'Yes. We work collaboratively with clients and can make revisions based on project requirements and feedback.',
  },
];

export const whyItems = [
  { icon: 'Cog', title: 'Technical Understanding', description: 'Our engineering and CAD background helps us understand mechanical systems, components, assemblies, and technical concepts.' },
  { icon: 'Target', title: 'Precision & Detail', description: 'We pay close attention to geometry, proportions, views, line quality, reference numerals, consistency, and technical details.' },
  { icon: 'PencilRuler', title: 'From Sketch to Final', description: 'Your starting material doesn’t need to be perfect. We can work from sketches, photographs, CAD files, prototypes, technical descriptions, or existing drawings.' },
  { icon: 'BadgeCheck', title: 'Professional Quality', description: 'We focus on producing clean, consistent, and professional illustrations suitable for intellectual property documentation.' },
  { icon: 'Handshake', title: 'Client-Focused Approach', description: 'Every invention is different. We work to understand your requirements and create drawings that accurately represent your concept.' },
  { icon: 'Globe', title: 'Global Service', description: 'ADVANTAIP is built to support clients around the world — from individual inventors and startups to established companies and IP professionals.' },
] as const;
