import Link from "next/link";
import { Smartphone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#283517] via-[#606C37] to-[#8A9A5B] text-[#FEFAE0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6 text-2xl font-light text-center">Serene Pilates</div>
            <p className="text-[#F0C799] font-light leading-relaxed mb-6 text-[16px] text-center">
              Your path to wellness and strength in Scarborough, Ontario.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://www.instagram.com/serenepilatesstudios/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFAE0]/10 hover:bg-[#FEFAE0] text-[#FEFAE0] hover:text-[#283517] transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/1LShwszRC7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFAE0]/10 hover:bg-[#FEFAE0] text-[#FEFAE0] hover:text-[#283517] transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@serenepilates?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFAE0]/10 hover:bg-[#FEFAE0] text-[#FEFAE0] hover:text-[#283517] transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            
            {/* App Download Section */}
            <div className="mt-6">
              <h4 className="text-[rgb(254,250,224)] mb-4 text-lg">Download Our App</h4>
              <div className="flex flex-row gap-3 flex-wrap">
                <a
                  href="https://apps.apple.com/au/app/serene-pilates/id6751634676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#FEFAE0] text-[#283517] rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Smartphone size={20} className="mr-2" />
                  <div className="text-left">
                    <div className="text-xs font-light">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hapana.serenepilates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#FEFAE0] text-[#283517] rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Smartphone size={20} className="mr-2" />
                  <div className="text-left">
                    <div className="text-xs font-light">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-[#F0C799]">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/classes" className="block hover:text-[#F0C799] transition-colors font-light">
                Classes
              </Link>
              <Link href="/pricing" className="block hover:text-[#F0C799] transition-colors font-light">
                Pricing
              </Link>
              <Link href="/booking" className="block hover:text-[#F0C799] transition-colors font-light">
                Book Now
              </Link>
              <Link href="/about" className="block hover:text-[#F0C799] transition-colors font-light">
                About
              </Link>
              <Link href="/contact" className="block hover:text-[#F0C799] transition-colors font-light">
                Contact
              </Link>
              <Link href="/faq" className="block hover:text-[#F0C799] transition-colors font-light">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-[#F0C799]">Studio Hours</h3>
            <div className="space-y-2 font-light text-sm">
              <p>Monday - Thursday</p>
              <p className="text-[#F0C799] font-bold">6:30 AM - 12:00 PM</p>
              <p className="text-[#F0C799] font-bold">5:30 PM - 8:30 PM</p>
              <p className="mt-3">Friday</p>
              <p className="text-[#F0C799] font-bold">7:30 AM - 12:00 PM</p>
              <p className="text-[#F0C799] font-bold">4:00 PM - 6:00 PM</p>
              <p className="mt-3">Saturday - Sunday</p>
              <p className="text-[#F0C799] font-bold">9:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-[#F0C799]">Contact</h3>
            <div className="space-y-2 font-light">
              <p>1275 Morningside Ave, Unit 30</p>
              <p>Scarborough, ON M1B 3W1</p>
              <p className="mt-4">
                <a href="mailto:concierge@serenepilates.ca" className="hover:text-[#F0C799] transition-colors">
                  concierge@serenepilates.ca
                </a>
              </p>
              <p>
                <a href="tel:6474782400" className="hover:text-[#F0C799] transition-colors">
                  (647) 478-2400
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#8A9A5B]/30 text-center text-[#F0C799] font-light">
          <p>&copy; 2025 Serene Pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
