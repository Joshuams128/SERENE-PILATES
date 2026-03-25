"use client";

import { useEffect } from 'react';
import { Clock, Users } from 'lucide-react';

// Declare Hapana widget type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hapana-widget': any;
    }
  }
}

export default function BookingContent() {
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
          <h1 className="mb-4 md:mb-6 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl px-4">Book a Class</h1>
          <p className="text-[#606C37] max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed px-4">
            New to Serene Pilates? Your first class with us is free!
          </p>
        </div>

        {/* Schedule Widget */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-[rgb(96,108,55)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20 bg-[rgba(254,250,224,0.36)]">
            <div id="schedule-container" className="min-h-[600px]">
              {/* Replace the widget-id with your actual widget ID from your dashboard */}
              <hapana-widget 
                data-type="classes" 
                widget-id="Yko4MlNGWFVSN3ppdlRvdi9LMU9NQT09"
                instructor-id="" 
                session-type=""
              ></hapana-widget>
            </div>
          </div>
        </div>

        {/* Instructions for first-time users */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#606C37] via-[#283517] to-[#BC6C24] rounded-3xl p-8 md:p-12 text-center text-[#FEFAE0] shadow-xl">
            <h2 className="mb-4 md:mb-6 text-[#FEFAE0] text-2xl md:text-3xl px-4 text-[32px]">First Time at Serene Pilates?</h2>
            <p className="mb-6 md:mb-8 text-[rgb(255,255,255)] md:text-lg font-light max-w-2xl mx-auto leading-relaxed px-4 font-bold font-normal text-[20px]">
              Book your first class for free! Arrive 10-15 minutes early to complete your registration and meet your instructor. We provide all equipment - just bring comfortable workout clothes and water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-[#FEFAE0] font-light">
                <Clock size={20} className="mr-2 text-[#DDA05F]" />
                <span>Arrive 10-15 min early</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#FEFAE0]/30"></div>
              <div className="flex items-center text-[#FEFAE0] font-light">
                <Users size={20} className="mr-2 text-[#DDA05F]" />
                <span>Small class sizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
