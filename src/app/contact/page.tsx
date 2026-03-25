import { createMetadata } from '@/lib/metadata';
import ContactContent from './ContactContent';

export const metadata = createMetadata('contact');

export default function ContactPage() {
  return <ContactContent />;
}
