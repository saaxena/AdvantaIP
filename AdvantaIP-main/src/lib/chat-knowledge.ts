import { siteFaqs } from '@/lib/site';
import { site } from '@/lib/site';

export type QA = { question: string; answer: string; keywords: string[] };

export const chatKnowledge: QA[] = [
  {
    question: 'What services do you offer?',
    answer:
      'ADVANTAIP provides three drawing services: Design Patent Drawings, Utility Patent Drawings, and Trademark Drawings — for inventors, businesses, patent professionals, and IP firms. Which one are you working on?',
    keywords: ['service', 'services', 'offer', 'what do you do', 'provide'],
  },
  {
    question: 'What should I send you?',
    answer:
      'Anything that explains your idea: sketches, photos, CAD files, existing drawings, product samples, or technical descriptions. A finished technical drawing is not required.',
    keywords: ['send', 'provide', 'need', 'start', 'begin', 'sketch', 'photo', 'cad', 'material'],
  },
  {
    question: 'How do I get a quote?',
    answer: 'Use the "Get a Quote" button or the contact page, tell us about your project, and share your available reference material.',
    keywords: ['quote', 'price', 'cost', 'pricing', 'how much', 'rate', 'fee', 'order'],
  },
  {
    question: 'How can I contact the team?',
    answer: `You can reach us at ${site.email} or through the contact page. ${site.serving}.`,
    keywords: ['contact', 'email', 'reach', 'talk to someone', 'human'],
  },
  ...siteFaqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    keywords: f.question
      .toLowerCase()
      .replace(/[?]/g, '')
      .split(' ')
      .filter((w) => w.length > 4),
  })),
];

export const suggestedQuestions = [
  'What services do you offer?',
  'What should I send you?',
  'How long does a project take?',
  'Do you provide patent legal advice?',
];

export function findAnswer(input: string): QA | null {
  const q = input.toLowerCase();
  let best: { qa: QA; score: number } | null = null;

  for (const qa of chatKnowledge) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (q.includes(kw.toLowerCase())) score += kw.length;
    }
    if (q.trim() === qa.question.toLowerCase()) score += 100;
    if (score > 0 && (!best || score > best.score)) best = { qa, score };
  }
  return best ? best.qa : null;
}
