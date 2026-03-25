import { createMetadata } from '@/lib/metadata';
import BookingContent from './BookingContent';

export const metadata = createMetadata('booking');

export default function BookingPage() {
  return <BookingContent />;
}
