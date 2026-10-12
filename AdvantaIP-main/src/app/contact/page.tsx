import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Let’s discuss your next project. Request a quote from ADVANTAIP for design patent, utility patent, or trademark drawings.',
};

export default function ContactPage() {
  return <ContactClient />;
}
