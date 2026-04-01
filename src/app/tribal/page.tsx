import { Metadata } from 'next';
import TribalContent from './TribalContent';

export const metadata: Metadata = {
  title: 'Exclusive Offer | Serene Pilates',
  description: 'Register to receive your exclusive code for 5 complimentary Pilates classes at Serene Pilates.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TribalPage() {
  return <TribalContent />;
}
