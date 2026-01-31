import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552196527-bffef41ef674?auto=format&fit=crop&w=1600&q=80"
          alt="Serene Pilates Studio"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#283517]/50"></div>
        <div className="relative z-10 text-center text-[#FEFAE0] max-w-4xl px-6 py-12">
          <h1 className="mb-4 md:mb-6 text-[#FEFAE0] drop-shadow-lg text-4xl md:text-5xl lg:text-6xl">Serene Pilates</h1>
          <p className="mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl text-[rgb(254,250,224)] drop-shadow-md tracking-wide">
            Strength Balance Serenity
          </p>
          <p className="mb-6 md:mb-8 text-lg md:text-xl text-[rgb(254,250,224)] font-light drop-shadow leading-relaxed px-4">
            Transform your body, mind &amp; spirit in Scarborough&apos;s most elegant Pilates studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore <ArrowRight className="ml-2" size={22} />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl bg-white/95 backdrop-blur-md text-[#283517] rounded-full hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              Book
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Offer Section */}
      <section className="py-16 md:py-24 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-6 text-[#283517] text-3xl md:text-4xl">Begin your journey with Serene Pilates.</h2>
          <p className="text-center text-lg md:text-xl text-[#606C37] max-w-3xl mx-auto font-light px-4 leading-relaxed mb-12 md:mb-16">
            Enjoy two weeks of unlimited Mat, Reformer, and Yoga classes and experience our signature approach to mindful movement, strength, and balance.
          </p>
          <div className="bg-gradient-to-br from-[#BC6C24] to-[#DDA05F] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-[#FEFAE0] shadow-2xl">
            <h2 className="mb-3 md:mb-4 text-[#FEFAE0] text-2xl md:text-3xl lg:text-4xl">Intro Offer: 2 Weeks Unlimited</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-white">$89.99 + HST</p>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-[#FEFAE0]/90 font-light max-w-2xl mx-auto px-4 leading-relaxed">
              This introductory offer is designed to help you explore our studio, connect with our instructors, and discover the classes that best support your body and goals.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8 md:mb-12">
              <div className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                <h3 className="mb-4 text-white text-base md:text-lg font-semibold">Includes:</h3>
                <ul className="space-y-3 text-[#FEFAE0]/90 text-sm md:text-base">
                  <li className="flex items-center justify-center">
                    <span>Unlimited Mat, Reformer & Yoga classes for 14 days</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span>Small-group, instructor-led sessions</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span>A welcoming and supportive studio environment</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Link
              href="https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164026&login=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 bg-white text-[#BC6C24] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg md:text-xl font-semibold"
            >
              Start Your Intro Offer <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Serene Blend Feature Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-[#283517] px-4">The Serene Blend Experience</h2>
            <p className="text-lg md:text-xl text-[#606C37] max-w-3xl mx-auto font-light px-4 leading-relaxed">
              Unlimited access to every class, every day. Your complete wellness journey in one elegant membership.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#606C37] to-[#283517] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-[#FEFAE0] shadow-2xl">
            <h2 className="mb-3 md:mb-4 text-[#FEFAE0] text-2xl md:text-3xl lg:text-4xl">Serene Blend Membership</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-[#DDA05F]">$299/month + HST</p>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-[#FEFAE0]/90 font-light max-w-2xl mx-auto px-4 leading-relaxed">
              Reformer, Mat Pilates, and Yoga — unlimited classes designed to harmonize your practice
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 max-w-3xl mx-auto">
              <div className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <h3 className="mb-2 text-[#DDA05F] text-lg md:text-xl">Unlimited Classes</h3>
                <p className="text-[#FEFAE0]/80 text-sm md:text-base">Every reformer, mat, and yoga class included</p>
              </div>
              <div className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <h3 className="mb-2 text-[#DDA05F] text-lg md:text-xl">Exclusive Perks</h3>
                <p className="text-[#FEFAE0]/80 text-sm md:text-base">Guest passes, discounts, and special events</p>
              </div>
            </div>
            
            <Link
              href="https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164026&login=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 bg-[#DDA05F] text-[#283517] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg md:text-xl"
            >
              Start <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="mb-4 md:mb-6 text-[#283517] px-4">Why Choose Serene</h2>
            <p className="text-lg md:text-xl text-[#606C37] max-w-2xl mx-auto font-light px-4 leading-relaxed">
              A nurturing space designed for your transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center group px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#BC6C24] text-[#FEFAE0] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart size={36} className="md:hidden" />
                <Heart size={40} className="hidden md:block" />
              </div>
              <h3 className="mb-4 text-[#283517] text-xl md:text-2xl">Expert Guidance</h3>
              <p className="text-[#606C37] font-light leading-relaxed text-base md:text-lg">
                Certified instructors who understand your unique wellness journey and celebrate every milestone
              </p>
            </div>
            <div className="text-center group px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#DDA05F] text-[#FEFAE0] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users size={36} className="md:hidden" />
                <Users size={40} className="hidden md:block" />
              </div>
              <h3 className="mb-4 text-[#283517] text-xl md:text-2xl">Intimate Classes</h3>
              <p className="text-[#606C37] font-light leading-relaxed text-base md:text-lg">
                Small class sizes ensure personalized attention in a supportive, judgment-free environment
              </p>
            </div>
            <div className="text-center group px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#606C37] text-[#FEFAE0] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar size={36} className="md:hidden" />
                <Calendar size={40} className="hidden md:block" />
              </div>
              <h3 className="mb-4 text-[#283517] text-xl md:text-2xl">Flexible Schedule</h3>
              <p className="text-[#606C37] font-light leading-relaxed text-base md:text-lg">
                Classes from dawn to dusk that fit seamlessly into your life, not the other way around
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 md:mb-6 text-[#283517] px-4">Begin Your Transformation</h2>
          <p className="mb-8 md:mb-10 text-lg md:text-xl text-[#606C37] font-light max-w-2xl mx-auto leading-relaxed px-4">
            Join a community that prioritizes wellness and embraces strength
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg md:text-xl"
          >
            Join <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
