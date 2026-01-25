"use client";

import { HelpCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const faqs = [
    {
      question: "What should I wear to class?",
      answer: "Wear comfortable, athletic clothing that allows you to move freely. Avoid loose clothing that may get caught in the reformer equipment. We recommend leggings or fitted shorts and a fitted top. Pilates and yoga are practiced barefoot or with grip socks (recommended for safety)."
    },
    {
      question: "Do I need to bring anything to class?",
      answer: "Just bring yourself and water! We provide all necessary equipment including mats, reformers, props, and towels."
    },
    {
      question: "I'm a complete beginner. Can I take classes?",
      answer: "Absolutely! We welcome students of all levels. Our instructors are experienced in working with beginners and will provide modifications to suit your experience level. We recommend starting with a beginner level class to learn the fundamentals."
    },
    {
      question: "How early should I arrive for my first class?",
      answer: "Please arrive 10-15 minutes before your first class. This gives you time to check in, meet your instructor, familiarize yourself with the studio, and discuss any injuries or concerns before class begins."
    },
    {
      question: "What's the difference between Mat and Reformer Pilates?",
      answer: "Mat Pilates is performed on a mat using body weight and small props for resistance. Reformer Pilates uses a specialized machine with springs and pulleys that provides adjustable resistance. Both are excellent workouts - reformer offers more variety and support, while mat challenges your stability and core strength. We also offer yoga classes for flexibility and mindfulness."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule your class up to 8 hours before the scheduled start time through the Serene Pilates app. Late cancellations (less than 8 hours) or no-shows will result in the loss of that class credit and a penalty fee."
    },
    {
      question: "Do unused class credits roll over to the next month?",
      answer: "No, credits do not roll over. Membership credits reset at the beginning of each billing cycle. We encourage you to use all your credits within the month to get the most value from your membership."
    },
    {
      question: "How many people are in each class?",
      answer: "Our mat and yoga classes have a maximum capacity of 7 students, while reformer classes accommodate 9 students. These small class sizes ensure personalized attention from our instructors."
    },
    {
      question: "Can I freeze my membership if I'm going away?",
      answer: "Yes, membership freezes are available. Please contact us at concierge@serenepilates.ca or call (647) 478-2400 to discuss your options. Freeze policies vary by membership type."
    },
    {
      question: "Can I bring guests?",
      answer: "Guest passes are available and vary by membership type. Some memberships include complimentary guest passes each month. Contact us at concierge@serenepilates.ca or check your membership details for more information."
    },
    {
      question: "Is Pilates good for back pain or injuries?",
      answer: "Pilates can be excellent for addressing back pain and rehabilitating from injuries, as it focuses on core strength, flexibility, and proper alignment. However, please consult with your healthcare provider before starting any new exercise program. Always inform your instructor of any injuries or physical limitations before class."
    },
    {
      question: "What if I'm pregnant? Can I still attend classes?",
      answer: "Pilates can be wonderful during pregnancy, but we recommend getting clearance from your healthcare provider first. Please inform your instructor that you're pregnant so they can provide appropriate modifications. Some class types may be better suited for prenatal clients than others."
    },
    {
      question: "How do I book classes?",
      answer: "You can book classes through the Serene Pilates app (available on iOS and Android) or through the web booking system on our website. Simply select your desired class from the schedule and reserve your spot!"
    },
    {
      question: "Do you offer student or senior discounts?",
      answer: "Yes, we offer discounted rates on unlimited memberships for full-time students (with valid ID) and seniors 65+ (with government-issued ID). Visit our pricing page for more details."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BC6C24] text-[#FEFAE0] mb-6 shadow-lg">
            <HelpCircle size={32} />
          </div>
          <h1 className="mb-4 text-[#283517] text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h1>
          <p className="text-[#606C37] font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Serene Pilates. Can't find what you're looking for? 
            <Link href="/contact" className="text-[#BC6C24] hover:underline ml-1">Contact us</Link>.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#FEFAE0] rounded-2xl px-6 shadow-md hover:shadow-lg transition-shadow border border-[#606C37]/10"
            >
              <AccordionTrigger className="text-left text-[#283517] hover:text-[#BC6C24] py-6 hover:no-underline">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#606C37] font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-[#606C37] rounded-3xl p-10 text-[#FEFAE0]">
          <h3 className="mb-4 text-[#FEFAE0] text-2xl md:text-3xl">Ready to Start Your Journey?</h3>
          <p className="font-light mb-6 text-[#FEFAE0]/90">
            Join our Serene community and experience the transformative power of Pilates and yoga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-block px-8 py-4 bg-[#FEFAE0] text-[#283517] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#FEFAE0] text-[#FEFAE0] rounded-full hover:bg-[#FEFAE0] hover:text-[#283517] transition-all duration-300"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
