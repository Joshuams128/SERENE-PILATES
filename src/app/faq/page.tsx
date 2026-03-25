import { createMetadata } from '@/lib/metadata';
import FaqContent from './FaqContent';

export const metadata = createMetadata('faq');

export default function FAQPage() {
  return <FaqContent />;
}
