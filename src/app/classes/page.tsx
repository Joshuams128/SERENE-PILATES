import { createMetadata } from '@/lib/metadata';
import ClassesContent from './ClassesContent';

export const metadata = createMetadata('classes');

export default function ClassesPage() {
  return <ClassesContent />;
}
