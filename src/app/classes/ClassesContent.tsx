"use client";

import { Clock, Users, Activity } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ClassesContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const classes = [
    // YOGA CLASSES
    {
      name: 'Serene Yin Restore',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A deeply calming yoga class featuring long, passive floor-based poses to soften the body and quiet the mind.',
      benefits: [
        'Releases deep connective tissue',
        'Reduces stress and nervous system overload',
        'Improves joint mobility',
      ],
      image: '/assets/images/yoga-meditation.png',
    },
    {
      name: 'Release & Reset Yoga',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A restorative yoga experience combining gentle movement, breathwork, and guided relaxation to help you fully unwind.',
      benefits: [
        'Relieves tension and fatigue',
        'Supports recovery days',
        'Calms the nervous system',
      ],
      image: '/assets/images/yoga-meditation.png',
    },
    {
      name: 'Chakra Flow Yoga',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A themed flow class designed around the body\'s energy centers, blending mindful movement with intention-setting.',
      benefits: [
        'Promotes emotional balance',
        'Encourages mind-body awareness',
        'Enhances breath and focus',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Strength Flow Yoga',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A strength-forward yoga class built around foundational poses with longer holds and deep core engagement.',
      benefits: [
        'Builds functional strength',
        'Improves stability and control',
        'Enhances posture',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Balance Flow',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A grounding, alignment-focused yoga class inspired by traditional Hatha, combining strength, balance, and mindful pacing.',
      benefits: [
        'Improves balance and coordination',
        'Builds steady strength',
        'Encourages body awareness',
      ],
      image: '/assets/images/yoga-meditation.png',
    },
    {
      name: 'Serene Slow Flow',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A breath-led, slower-paced flow that moves intentionally through smooth transitions for a calming, fluid practice.',
      benefits: [
        'Reduces stress',
        'Improves flexibility',
        'Enhances breathing patterns',
      ],
      image: '/assets/images/yoga-meditation.png',
    },
    {
      name: 'Serene Mindful Meditation',
      category: 'Yoga',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A guided meditation experience followed by gentle flow and extended savasana to help you reconnect inward.',
      benefits: [
        'Reduces anxiety',
        'Improves mental clarity',
        'Supports emotional reset',
      ],
      image: '/assets/images/yoga-meditation.png',
    },

    // MAT CLASSES
    {
      name: 'Aligned Form & Flow',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A posture-focused mat class designed to refine technique, alignment, and controlled movement.',
      benefits: [
        'Improves form and biomechanics',
        'Enhances core engagement',
        'Builds body awareness',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Mobility & Release',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A mobility-driven mat class targeting tight joints and muscles through deep stretching and breath-led movement.',
      benefits: [
        'Increases range of motion',
        'Reduces stiffness',
        'Supports recovery',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Stretch + Flow',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A gentle blend of flow and stretch to lengthen muscles and restore balance in the body.',
      benefits: [
        'Improves flexibility',
        'Enhances circulation',
        'Promotes relaxation',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Full Body',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A balanced mat workout combining strength, stability, and flow for a complete body-toning experience.',
      benefits: [
        'Builds total-body strength',
        'Improves coordination',
        'Increases endurance',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Aligned Strength — Upper Body',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A targeted mat class focused on arms, shoulders, chest, and back using resistance and controlled movement.',
      benefits: [
        'Strengthens upper body',
        'Improves posture',
        'Enhances muscular tone',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Grounded Strength — Lower Body',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A lower-body strength class designed to build glute, quad, and hamstring power through intentional sequencing.',
      benefits: [
        'Builds leg strength',
        'Improves balance',
        'Enhances hip stability',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Glutes • Core • Burn',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'Intermediate',
      description: 'An intensity-driven mat sculpt class targeting glutes and core with slow-tempo burn sequences.',
      benefits: [
        'Strengthens glutes and abs',
        'Improves core stability',
        'Builds muscular endurance',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Sculpt',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'Intermediate',
      description: 'A full-body sculpting class combining strength, tempo work, and controlled transitions.',
      benefits: [
        'Tones the entire body',
        'Builds strength and endurance',
        'Enhances muscle definition',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Foundations — Mat',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'Beginner',
      description: 'An introductory mat class teaching Pilates fundamentals, alignment, and breathwork.',
      benefits: [
        'Builds confidence',
        'Improves core awareness',
        'Establishes strong movement foundations',
      ],
      image: '/assets/images/yoga-chakra.png',
    },
    {
      name: 'Serene Flow — All Levels',
      category: 'Mat',
      duration: '50 minutes',
      capacity: '7 students',
      level: 'All Levels',
      description: 'A flowing mat class that blends strength, control, and fluid movement for all experience levels.',
      benefits: [
        'Enhances full-body coordination',
        'Improves stamina',
        'Supports consistent progression',
      ],
      image: '/assets/images/yoga-chakra.png',
    },

    // REFORMER CLASSES
    {
      name: 'Aligned Form & Flow',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A technique-driven reformer class emphasizing posture, alignment, and fluid movement patterns.',
      benefits: [
        'Refines movement precision',
        'Builds balanced strength',
        'Enhances control',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Mobility & Release',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A reformer-assisted mobility class designed to open joints and release muscular tension.',
      benefits: [
        'Increases flexibility',
        'Reduces tightness',
        'Improves movement ease',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Stretch + Flow',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A gentle reformer class combining stretching, flow, and supported movement for full-body renewal.',
      benefits: [
        'Lengthens muscles',
        'Enhances circulation',
        'Supports recovery',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Full Body',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A strength-focused reformer class delivering balanced, full-body toning with controlled sequencing.',
      benefits: [
        'Builds muscular endurance',
        'Improves coordination',
        'Strengthens core stability',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Aligned Strength — Upper Body',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'An upper-body reformer workout targeting arms, shoulders, and back through strap and resistance work.',
      benefits: [
        'Builds upper-body strength',
        'Improves posture',
        'Enhances shoulder stability',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Grounded Strength — Lower Body',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A lower-body reformer class designed to strengthen glutes, quads, and hamstrings with progressive resistance.',
      benefits: [
        'Builds leg power',
        'Improves joint support',
        'Enhances lower-body stability',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Glutes • Core • Burn',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'Intermediate',
      description: 'A targeted reformer class combining resistance and tempo work for deep glute and core activation.',
      benefits: [
        'Strengthens lower body',
        'Builds core control',
        'Enhances muscular endurance',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Sculpt',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'Intermediate',
      description: 'A high-energy sculpt class blending full-body strength, balance, and controlled intensity.',
      benefits: [
        'Builds strength',
        'Improves tone',
        'Enhances stamina',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Foundations — Reformer',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'Beginner',
      description: 'An introductory reformer class covering equipment setup, alignment, and foundational Pilates movement.',
      benefits: [
        'Builds reformer confidence',
        'Improves technique',
        'Establishes safe movement patterns',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Flow — All Levels',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A flowing reformer class combining strength, mobility, and coordination for a well-rounded workout.',
      benefits: [
        'Enhances body awareness',
        'Improves endurance',
        'Builds balanced strength',
      ],
      image: '/assets/images/reformer.png',
    },
    {
      name: 'Serene Classic — All Levels',
      category: 'Reformer',
      duration: '50 minutes',
      capacity: '9 students',
      level: 'All Levels',
      description: 'A traditional reformer class inspired by classical Pilates sequencing with an emphasis on precision and breath.',
      benefits: [
        'Improves posture',
        'Builds deep core strength',
        'Enhances movement control',
      ],
      image: '/assets/images/reformer.png',
    },
  ];

  const categories = ['All', 'Reformer', 'Mat', 'Yoga'];

  const filteredClasses = activeCategory === 'All' 
    ? classes 
    : classes.filter(c => c.category === activeCategory);

  return (
    <div className="py-12 md:py-16 bg-[rgba(255,255,255,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-[rgb(96,108,55)]">Our Classes</h1>
          <p className="text-[#606C37] max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Discover your perfect practice with our curated selection of Mat Pilates, Reformer Pilates, and Yoga classes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="flex justify-center gap-2 sm:gap-3 bg-[rgb(255,255,255)] p-1.5 sm:p-2 rounded-2xl overflow-x-auto max-w-2xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 whitespace-nowrap flex-1 sm:flex-none ${
                  activeCategory === category
                    ? 'bg-[#BC6C24] text-[#FEFAE0] shadow-lg'
                    : 'bg-white text-[#606C37] hover:bg-[#606C37] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Grid - Optimized for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FEFAE0] via-[#DDA05F]/20 to-[#606C37]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-[#DDA05F]/20"
            >
              <div className="p-5 bg-white/90 backdrop-blur-sm flex-1 flex flex-col m-0.5 rounded-2xl">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FEFAE0] text-[#BC6C24] text-sm font-medium">
                    {classItem.category}
                  </span>
                </div>
                <h3 className="mb-3 text-[#283517] text-xl">{classItem.name}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-[#606C37] text-sm">
                    <Clock size={14} className="text-[#BC6C24] mr-1.5" />
                    <span className="font-light">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-[#606C37] text-sm">
                    <Users size={14} className="text-[#BC6C24] mr-1.5" />
                    <span className="font-light">{classItem.capacity}</span>
                  </div>
                  <div className="flex items-center text-[#606C37] text-sm">
                    <Activity size={14} className="text-[#BC6C24] mr-1.5" />
                    <span className="font-light">{classItem.level}</span>
                  </div>
                </div>
                <p className="mb-4 text-[#606C37] font-light leading-relaxed text-sm">{classItem.description}</p>
                <div className="mt-auto">
                  <h4 className="mb-2 text-[#283517] text-sm">Benefits</h4>
                  <ul className="space-y-1.5">
                    {classItem.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-[#606C37] text-xs">
                        <span className="inline-block w-1 h-1 rounded-full bg-[#BC6C24] mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-10 bg-[#606C37] rounded-3xl text-[#FEFAE0] shadow-2xl">
          <h2 className="mb-6 text-[#FEFAE0]">Find Your Perfect Class</h2>
          <p className="mb-8 text-[#DDA05F] font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Our expert instructors are here to guide you toward the classes that align with your wellness goals
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-[#DDA05F] text-[#283517] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
}
