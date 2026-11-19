"use client";

import Script from 'next/script';
import { useEffect } from 'react';
import { pushEvent } from '@/lib/analytics';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Loads Google Tag Manager (when NEXT_PUBLIC_GTM_ID is set) and reports clicks
 * on outbound Hapana checkout/booking links to the dataLayer.
 *
 * Hapana checkout happens on link.hapana.com, so the site can only observe the
 * click, not the completed purchase. These events are for funnel measurement.
 */
export default function GoogleTagManager() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="hapana.com"]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href);
      pushEvent({
        event: 'hapana_checkout_click',
        link_url: link.href,
        package_id: url.searchParams.get('pkId') ?? undefined,
        link_text: link.textContent?.trim().slice(0, 80),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!GTM_ID) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=document.getElementsByTagName('script')[0],j=document.createElement('script');j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';f.parentNode.insertBefore(j,f);`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
