"use client";

import { useEffect } from 'react';
import { Gift } from 'lucide-react';

// Declare Hapana widget type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hapana-widget': any;
    }
  }
}

export default function GiftCardsContent() {
  useEffect(() => {
    // Load widget script
    const script = document.createElement('script');
    script.src = 'https://widget.hapana.com/hapana_widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#606C37]/10 mb-6">
            <Gift size={32} className="text-[#BC6C24]" />
          </div>
          <h1 className="mb-4 md:mb-6 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl px-4">Gift Cards</h1>
          <p className="text-[#606C37] max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed px-4">
            Share the gift of movement and wellness. Purchase a Serene Pilates gift card for someone special, redeemable on any class or package.
          </p>
        </div>

        {/* Gift Card Widget */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-[rgb(96,108,55)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20 bg-[rgba(254,250,224,0.36)]">
            <div id="gift-card-container" className="min-h-[600px]">
              <hapana-widget
                data-type="giftCards"
                widget-id="Yko4MlNGWFVSN3ppdlRvdi9LMU9NQT09"
              ></hapana-widget>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
