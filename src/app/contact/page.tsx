"use client";

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: 'We\'ll get back to you as soon as possible.',
          duration: 5000,
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or email us directly at concierge@serenepilates.ca',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 md:py-20 bg-[rgba(255,255,255,0.79)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="mb-4 md:mb-6 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl px-4">Contact Us</h1>
          <p className="text-[#606C37] max-w-2xl mx-auto font-light text-base md:text-xl leading-relaxed px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-[rgb(255,255,255)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20">
            <h2 className="mb-6 md:mb-8 text-[#283517] text-2xl md:text-3xl">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  Your Email Address *
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
                  Your Phone Number (Optional)
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

              <div>
                <label htmlFor="subject" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  What is this about? *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent font-light bg-white"
                >
                  <option value="">Choose a topic...</option>
                  <option value="general">General Question</option>
                  <option value="classes">Ask About Classes</option>
                  <option value="membership">Membership Information</option>
                  <option value="private">Private Sessions</option>
                  <option value="corporate">Corporate Programs</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 md:mb-3 text-[#283517] text-base md:text-lg">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-base md:text-lg rounded-xl border-2 border-[#606C37]/30 focus:outline-none focus:ring-2 focus:ring-[#606C37] focus:border-transparent resize-none font-light bg-white"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 md:px-10 py-5 md:py-6 text-base md:text-lg bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'} <Send size={20} className="ml-2 md:hidden" /><Send size={22} className="ml-2 hidden md:block" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[rgb(255,255,255)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20">
              <h2 className="mb-6 md:mb-8 text-[#283517] text-2xl md:text-3xl">Get In Touch</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#DDA05F]/20 flex items-center justify-center mr-4 md:mr-5">
                    <MapPin size={24} className="text-[#BC6C24] md:hidden" />
                    <MapPin size={28} className="text-[#BC6C24] hidden md:block" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#283517] text-lg md:text-xl">Visit Our Studio</h3>
                    <p className="text-[#606C37] font-light leading-relaxed text-base md:text-lg">
                      1275 Morningside Ave, Unit 30
                      <br />
                      Scarborough, ON M1B 3W1
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#DDA05F]/20 flex items-center justify-center mr-4 md:mr-5">
                    <Phone size={24} className="text-[#BC6C24] md:hidden" />
                    <Phone size={28} className="text-[#BC6C24] hidden md:block" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#283517] text-lg md:text-xl">Call Us</h3>
                    <p className="text-[#606C37] font-light text-base md:text-lg">
                      <a href="tel:6474782400" className="hover:text-[#BC6C24] transition-colors underline">
                        (647) 478-2400
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#DDA05F]/20 flex items-center justify-center mr-4 md:mr-5">
                    <Mail size={24} className="text-[#BC6C24] md:hidden" />
                    <Mail size={28} className="text-[#BC6C24] hidden md:block" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#283517] text-lg md:text-xl">Email Us</h3>
                    <p className="text-[#606C37] font-light text-base md:text-lg break-all">
                      <a
                        href="mailto:concierge@serenepilates.ca"
                        className="hover:text-[#BC6C24] transition-colors underline"
                      >
                        concierge@serenepilates.ca
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#DDA05F]/20 flex items-center justify-center mr-4 md:mr-5">
                    <Clock size={24} className="text-[#BC6C24] md:hidden" />
                    <Clock size={28} className="text-[#BC6C24] hidden md:block" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#283517] text-lg md:text-xl">Studio Hours</h3>
                    <div className="text-[#606C37] font-light leading-relaxed space-y-1 text-base md:text-lg">
                      <p>Monday - Thursday</p>
                      <p>6:30 AM - 12:00 PM, 5:30 PM - 8:30 PM</p>
                      <p className="mt-2">Friday</p>
                      <p>7:30 AM - 12:00 PM, 4:00 PM - 6:00 PM</p>
                      <p className="mt-2">Saturday - Sunday</p>
                      <p>9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[rgb(255,255,255)] rounded-3xl shadow-lg p-6 md:p-10 border border-[#606C37]/20">
              <h2 className="mb-4 md:mb-6 text-[#283517] text-2xl md:text-3xl">Find Us</h2>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[#DDA05F]/20">
                <iframe
                  title="Serene Pilates Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8076254734695!2d-79.20085772408825!3d43.80331920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dbe4c2136ab5%3A0x65efeafe74f9fa1!2sSerene%20Pilates!5e0!3m2!1sen!2sca!4v1738276800000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/place/Serene+Pilates/@43.8033192,-79.1982673,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4dbe4c2136ab5:0x65efeafe74f9fa1!8m2!3d43.8033192!4d-79.1982673!16s%2Fg%2F11yc5xgqfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#BC6C24] hover:text-[#283517] transition-colors font-light text-base md:text-lg"
                >
                  <MapPin size={20} className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
