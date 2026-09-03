import { createMetadata } from '@/lib/metadata';
import GiftCardsContent from './GiftCardsContent';

export const metadata = createMetadata('gift-cards');

export default function GiftCardsPage() {
  return <GiftCardsContent />;
}
