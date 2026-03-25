import { createMetadata } from '@/lib/metadata';
import CareersContent from './CareersContent';

export const metadata = createMetadata('careers');

export default function CareersPage() {
  return <CareersContent />;
}
