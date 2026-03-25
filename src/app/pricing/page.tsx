import { createMetadata } from '@/lib/metadata';
import PricingContent from './PricingContent';

export const metadata = createMetadata('pricing');

export default function PricingPage() {
  return <PricingContent />;
}
