"use client";

import { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What should I wear to class?",
    answer: "Wear comfortable, form-fitting workout clothes that allow you to move freely. Pilates is typically done barefoot or in grip socks.",
  },
  {
    id: 2,
    question: "Do I need to bring my own mat?",
    answer: "We provide all necessary equipment including mats, props, and reformers. You're welcome to bring your own mat if you prefer.",
  },
  {
    id: 3,
    question: "I'm a complete beginner. Which class should I start with?",
    answer: "We recommend starting with our Foundations or Beginner classes. Our instructors will help you learn proper form and technique.",
  },
  {
    id: 4,
    question: "How early should I arrive for class?",
    answer: "Please arrive 10-15 minutes before your first class to complete any necessary paperwork. For regular classes, arriving 5-10 minutes early is recommended.",
  },
  {
    id: 5,
    question: "What is your cancellation policy?",
    answer: "Please cancel at least 12 hours before your scheduled class to avoid being charged. You can cancel through our booking system or mobile app.",
  },
  {
    id: 6,
    question: "Can I try a class before committing to a membership?",
    answer: "Yes! We offer drop-in classes and intro packages for new students. It's a great way to experience our studio before committing to a membership.",
  },
  {
    id: 7,
    question: "Are there any age restrictions?",
    answer: "Our classes are designed for adults 18 and over. We also offer specialized classes for seniors and prenatal students.",
  },
  {
    id: 8,
    question: "Is Pilates good for rehabilitation?",
    answer: "Pilates can be excellent for rehabilitation, but we recommend consulting with your healthcare provider first. Please inform your instructor of any injuries or limitations.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Find answers to common questions about our studio, classes, and policies.
      </p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                  openId === faq.id ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openId === faq.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a
          href="/contact"
          className="inline-block bg-primary text-cream px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
