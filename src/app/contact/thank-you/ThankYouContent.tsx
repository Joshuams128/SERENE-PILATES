"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { LEAD_FLAG_KEY, pushEvent } from '@/lib/analytics';

export default function ThankYouContent() {
  useEffect(() => {
    // Only report a lead if the visitor just submitted the form in this tab,
    // so refreshes, bookmarks and direct visits don't inflate conversions.
    try {
      if (sessionStorage.getItem(LEAD_FLAG_KEY)) {
        sessionStorage.removeItem(LEAD_FLAG_KEY);
        pushEvent({ event: 'generate_lead', lead_source: 'contact_form' });
      }
    } catch {
      /* sessionStorage unavailable; skip tracking */
    }
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#606C37]/10 mb-6">
          <CheckCircle size={32} className="text-[#606C37]" />
        </div>
        <h1 className="mb-4 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl">Thank You!</h1>
        <p className="mb-8 text-[#606C37] font-light text-lg md:text-xl leading-relaxed">
          We&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="px-8 py-4 bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-xl transition-all duration-300"
          >
            Book a Class
          </Link>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-[#606C37] text-[#606C37] rounded-full hover:bg-[#606C37]/10 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
