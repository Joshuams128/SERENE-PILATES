"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight, CheckCircle, Sparkles, Gift, Mail } from 'lucide-react';
import Image from 'next/image';

export default function TribalContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/tribal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to register');
      }
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or contact us at concierge@serenepilates.ca',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FEFAE0] flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#606C37] text-[#FEFAE0] mb-8 shadow-lg">
            <Mail size={36} className="md:hidden" />
            <Mail size={44} className="hidden md:block" />
          </div>
          <h1 className="mb-4 md:mb-6 text-[#283517] text-3xl md:text-4xl lg:text-5xl">Check Your Email</h1>
          <p className="text-[#606C37] font-light text-lg md:text-xl leading-relaxed mb-8">
            Your exclusive code is on its way. Use it to claim your 5 complimentary classes and book your first session.
          </p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#606C37]/10 mb-8">
            <p className="text-[#283517] text-sm md:text-base font-light leading-relaxed">
              Didn&apos;t receive it? Check your spam folder or contact us at{' '}
              <a href="mailto:concierge@serenepilates.ca" className="text-[#BC6C24] underline hover:text-[#283517] transition-colors">
                concierge@serenepilates.ca
              </a>
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FEFAE0]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/tribalbg.JPG"
          alt="Serene x Tribal"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover blur-[2px]"
        />
        {/* Dark overlay with subtle warm tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#283517]/70 via-[#283517]/55 to-[#283517]/75"></div>

        {/* Subtle decorative accents — carnival-inspired warmth */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#BC6C24] via-[#DDA05F] to-[#BC6C24]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DDA05F] via-[#BC6C24] to-[#DDA05F]"></div>

        <div className="relative z-10 text-center max-w-3xl px-6 py-16">
          <div className="inline-flex items-center gap-2 bg-[#BC6C24]/90 backdrop-blur-sm text-[#FEFAE0] px-5 py-2 rounded-full text-sm md:text-base mb-8 shadow-lg">
            <Sparkles size={16} />
            <span className="font-light tracking-wide">Serene x Tribal</span>
          </div>

          <h1 className="mb-4 md:mb-6 text-[#FEFAE0] drop-shadow-lg text-4xl md:text-5xl lg:text-6xl">
            Get Ready for the Road
          </h1>
          <p className="mb-3 md:mb-4 text-xl md:text-2xl text-[#FEFAE0]/90 drop-shadow-md font-light">
            Feel stronger, move better, and prepare with intention.
          </p>
          <p className="mb-8 md:mb-10 text-base md:text-lg text-white font-light drop-shadow leading-relaxed">
            Register to receive your exclusive code for 5 complimentary Pilates classes.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Unlock My Code <ArrowRight className="ml-2" size={22} />
          </button>
        </div>
      </section>

      {/* Intro / Value Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 md:mb-8 text-[#283517] text-3xl md:text-4xl">
            Your Invitation to Move with Confidence
          </h2>
          <p className="text-[#606C37] font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At Serene Pilates, we help you build strength, stability, and control through intentional movement. This exclusive offer is your chance to experience the studio and start feeling your best — whether you are preparing for the road or looking to reset and recover after.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 md:py-24 bg-[#FEFAE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#BC6C24] to-[#DDA05F] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-[#FEFAE0] shadow-2xl relative overflow-hidden">
            {/* Subtle decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-sm mb-6">
                <Gift size={32} className="text-[#FEFAE0] md:hidden" />
                <Gift size={40} className="text-[#FEFAE0] hidden md:block" />
              </div>

              <h2 className="mb-4 md:mb-6 text-[#FEFAE0] text-2xl md:text-3xl lg:text-4xl">Exclusive Offer</h2>
              <p className="text-lg md:text-xl mb-4 text-[#FEFAE0]/90 font-light">
                Register to receive your promo code for:
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 text-white font-light tracking-tight">
                5 Complimentary Pilates Classes
              </p>

              <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                <ul className="space-y-4 text-left text-[#FEFAE0]/90 text-sm md:text-base">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-[#FEFAE0]" />
                    <span>Available for new clients only</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-[#FEFAE0]" />
                    <span>Promo code required to redeem</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-[#FEFAE0]" />
                    <span>Classes expire 12 months after activation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-[#FEFAE0]" />
                    <span>First class should be booked within 14 days of code redemption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="mb-4 md:mb-6 text-[#283517] text-3xl md:text-4xl">Register to Receive Your Code</h2>
            <p className="text-[#606C37] font-light text-base md:text-lg leading-relaxed">
              Enter your details below and we&apos;ll send your exclusive code directly to your inbox.
            </p>
          </div>

          <div className="bg-[rgb(255,255,255)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="(416) 555-0123"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 md:px-10 py-5 md:py-6 text-base md:text-lg bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Unlock My Code'} <ArrowRight size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
