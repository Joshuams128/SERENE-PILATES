// Thin wrapper around the GTM dataLayer. Safe to call on the server (no-op).
type DataLayerEvent = { event: string } & Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushEvent(payload: DataLayerEvent) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

// Set when the contact form is successfully submitted; consumed by the
// thank-you page so direct visits / refreshes don't count as leads.
export const LEAD_FLAG_KEY = 'serene_contact_lead';
