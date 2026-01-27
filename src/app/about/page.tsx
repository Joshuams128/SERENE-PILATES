import { Award, Heart, Target, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata('about');

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-4 text-[rgb(96,108,55)]">About Serene Pilates</h1>
          <p className="mb-6 text-xl md:text-2xl text-[#DDA05F] tracking-wide font-bold font-normal not-italic text-[28px]">
            Strength, Balance, and Serenity
          </p>
          <p className="text-xl text-[#606C37] max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted Pilates sanctuary in Scarborough, Ontario — dedicated to nurturing wellness, strength, and serenity through mindful movement
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/assets/images/workout-img.png"
                alt="Serene Pilates Studio"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="mb-8 text-[rgb(96,108,55)]">Our Story</h2>
              <div className="space-y-6 text-[#606C37] font-light text-lg leading-relaxed">
                <p>
                  Serene Pilates is a boutique movement studio designed to help you feel strong, balanced, and fully connected to your body. We blend modern Pilates, slow-flow yoga, and restorative practices into a seamless experience that builds strength while calming your nervous system.
                </p>
                <p>
                  Our mat, reformer, and yoga classes support every stage of your movement journey — from foundational training to sculpt-driven strength and deeply restorative recovery. Every class is intentionally programmed to improve posture, increase mobility, and create space to reset in a fast-paced world.
                </p>
                <p>
                  At Serene, movement isn&apos;t rushed or overwhelming. Our instructors meet you where you are, offering expert guidance and smart modifications so you can move with confidence.
                </p>
                <p>
                  This is your place to breathe, build strength, and come back to yourself.
                </p>
                <p>
                  Move softly. Build strength. Find your balance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-center mb-16 text-[rgb(96,108,55)]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#FEFAE0] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BC6C24] text-[#FEFAE0] mb-6 shadow-lg">
                <Heart size={36} />
              </div>
              <h3 className="mb-4 text-[#283517]">Compassion</h3>
              <p className="text-[#606C37] font-light leading-relaxed">
                We create a supportive, judgment-free environment where everyone feels welcomed and valued
              </p>
            </div>
            <div className="text-center p-8 bg-[#FEFAE0] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#DDA05F] text-[#FEFAE0] mb-6 shadow-lg">
                <Award size={36} />
              </div>
              <h3 className="mb-4 text-[#283517]">Excellence</h3>
              <p className="text-[#606C37] font-light leading-relaxed">
                Our certified instructors uphold the highest standards of Pilates education and practice
              </p>
            </div>
            <div className="text-center p-8 bg-[#FEFAE0] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#606C37] text-[#FEFAE0] mb-6 shadow-lg">
                <Target size={36} />
              </div>
              <h3 className="mb-4 text-[#283517]">Personalization</h3>
              <p className="text-[#606C37] font-light leading-relaxed">
                We tailor our approach to honor each student&apos;s unique needs, goals, and journey
              </p>
            </div>
            <div className="text-center p-8 bg-[#FEFAE0] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BC6C24] text-[#FEFAE0] mb-6 shadow-lg">
                <Users size={36} />
              </div>
              <h3 className="mb-4 text-[#283517]">Community</h3>
              <p className="text-[#606C37] font-light leading-relaxed">
                We nurture connections and friendships that extend far beyond the studio walls
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center p-16 bg-[#606C37] rounded-3xl text-[#FEFAE0] shadow-2xl">
          <h2 className="mb-6 text-[#FEFAE0]">Join Our Community</h2>
          <p className="mb-10 text-[#DDA05F] text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Experience the Serene Pilates difference. Book your first class today and begin your journey to wellness
          </p>
          <Link
            href="/pricing"
            className="inline-block px-12 py-5 bg-[#DDA05F] text-[#283517] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}
