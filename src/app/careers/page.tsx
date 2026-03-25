"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { Heart, Users, BookOpen, Handshake, Sparkles } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata('careers');

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    discipline: '',
    certifications: '',
    experience: '',
    teachingStyle: '',
    socialLink: '',
    availability: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        body.append(key, value);
      });
      if (resume) {
        body.append('resume', resume);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Application submitted!', {
          description: "We'll review your information and be in touch.",
          duration: 5000,
        });
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (error) {
      toast.error('Failed to submit application', {
        description: 'Please try again or email us directly at concierge@serenepilates.com',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const culturePoints = [
    { icon: <Sparkles className="w-6 h-6" />, text: 'Professional, high-quality instruction' },
    { icon: <Heart className="w-6 h-6" />, text: 'Creating a welcoming and inclusive space' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'Continuous learning and development' },
    { icon: <Handshake className="w-6 h-6" />, text: 'Building strong relationships with clients' },
    { icon: <Users className="w-6 h-6" />, text: 'Delivering a calm, premium studio experience' },
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 md:py-32 bg-[rgba(255,255,255,0.79)] min-h-screen">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16 border border-[#606C37]/20">
            <div className="w-20 h-20 bg-[#606C37]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#606C37]" />
            </div>
            <h2 className="text-2xl md:text-3xl text-[#283517] mb-6">
              Thank you for your application.
            </h2>
            <p className="text-[#606C37] font-light text-lg leading-relaxed">
              Our team will review your information and contact you if there is a potential fit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-[rgba(255,255,255,0.79)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="mb-4 md:mb-6 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl px-4">
            Teach at Serene
          </h1>
          <p className="mb-6 text-xl md:text-2xl text-[#DDA05F] tracking-wide font-bold text-[28px]">
            Inspire Movement. Build Community.
          </p>
        </div>

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="space-y-6 text-[#606C37] font-light text-lg leading-relaxed">
            <p>
              At Serene Pilates, we believe great instructors create lasting impact. Every class is an
              opportunity to help someone move better, feel stronger, and reconnect with their body.
            </p>
            <p>
              We are building a team of thoughtful, knowledgeable instructors who care deeply about their
              craft and the experience they deliver in the studio.
            </p>
            <p>
              Whether you specialize in Reformer Pilates, Mat Pilates, or Yoga, Serene Pilates is a place
              where instructors can grow their teaching practice while being part of a supportive and inspiring
              environment.
            </p>
          </div>

          {/* Studio Culture */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl text-[#283517] mb-8">Our Studio Culture</h2>
            <div className="space-y-4">
              {culturePoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#606C37]/10">
                  <div className="text-[#606C37] flex-shrink-0">{point.icon}</div>
                  <p className="text-[#606C37] font-light text-lg">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-[#606C37] font-light text-lg leading-relaxed">
            If you&apos;re passionate about movement and love helping people feel their best, Serene Pilates
            could be the perfect place to teach.
          </p>
        </div>

        {/* Application Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl text-[#283517] mb-4">Instructor Application</h2>
            <p className="text-[#606C37] font-light text-lg leading-relaxed max-w-2xl mx-auto">
              Interested in teaching at Serene Pilates? Please complete the form below and our team will
              review your application. If there&apos;s a fit, we&apos;ll reach out to schedule a conversation or teaching audition.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-[#283517] text-base md:text-lg">
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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="(416) 555-0123"
                />
              </div>

              {/* Discipline */}
              <div>
                <label htmlFor="discipline" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Discipline *
                </label>
                <select
                  id="discipline"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                >
                  <option value="">Select a discipline...</option>
                  <option value="Reformer Pilates">Reformer Pilates</option>
                  <option value="Mat Pilates">Mat Pilates</option>
                  <option value="Yoga">Yoga</option>
                </select>
              </div>

              {/* Certifications */}
              <div>
                <label htmlFor="certifications" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Certifications *
                </label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="e.g. STOTT Pilates, PMA-CPT, RYT-200"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="experience" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Years of Teaching Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                >
                  <option value="">Select experience level...</option>
                  <option value="0–1 years">0–1 years</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3–5 years">3–5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>

              {/* Teaching Style */}
              <div>
                <label htmlFor="teachingStyle" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Tell Us About Your Teaching Style *
                </label>
                <textarea
                  id="teachingStyle"
                  name="teachingStyle"
                  value={formData.teachingStyle}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white resize-vertical"
                  placeholder="Describe your approach to teaching, your philosophy, and what makes your classes unique..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Resume Upload
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#606C37]/10 file:text-[#283517] hover:file:bg-[#606C37]/20 file:cursor-pointer"
                />
                <p className="mt-1 text-sm text-[#606C37]/70 font-light">PDF or Word document, max 5MB</p>
              </div>

              {/* Instagram or Website */}
              <div>
                <label htmlFor="socialLink" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Instagram or Website (Optional)
                </label>
                <input
                  type="text"
                  id="socialLink"
                  name="socialLink"
                  value={formData.socialLink}
                  onChange={handleChange}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="@yourusername or https://yourwebsite.com"
                />
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block mb-2 text-[#283517] text-base md:text-lg">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                >
                  <option value="">Select your availability...</option>
                  <option value="Mornings">Mornings</option>
                  <option value="Mid-day">Mid-day</option>
                  <option value="Evenings">Evenings</option>
                  <option value="Weekends">Weekends</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 px-8 bg-[#606C37] hover:bg-[#283517] text-[#FEFAE0] rounded-xl text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Apply to Teach at Serene'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
