"use client";

import { Check } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState<'memberships' | 'packs' | 'dropins'>('memberships');

  // Payment links
  const paymentLinks = {
    // Drop-ins
    dropInMat: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=160119&login=true',
    dropInReformer: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=160116&login=true',
    dropInYoga: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=165353&login=true',
    
    // Class Packs
    pack5: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164028&login=true',
    pack10: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164029&login=true',
    pack20: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164030&login=true',
    
    // Serene Blend Regular
    sereneBlend: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=164026&login=true',
    
    // Mat Memberships
    matCalm: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135055&login=true',
    matFlow: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=156534&login=true',
    matGrounded: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135056&login=true',
    matUnlimited: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135057&login=true',
    
    // Reformer Memberships
    reformerCore: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=156535&login=true',
    reformerStrength: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135061&login=true',
    reformerBalance: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135058&login=true',
    reformerUnlimited: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=135059&login=true',
    
    // Student/Senior Discounts
    studentSeniorMat: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=156538&login=true',
    studentSeniorReformer: 'https://link.hapana.com/index.php?route=directory/directory/buypackage&trid=NDM1NzAwMw==&ref=external&pkId=156539&login=true',
  };

  const sereneBlendPlan = {
    name: 'Serene Blend',
    subtitle: 'Unlimited Everything',
    price: '$299',
    description: 'Complete access to all classes',
    features: [
      'All reformer classes included',
      'All mat Pilates classes included',
      'All yoga classes included',
      'Bring up to 4 guests per month',
    ],
    link: paymentLinks.sereneBlend,
  };

  const membershipCategories = [
    {
      category: 'Reformer',
      description: 'Access to all Reformer Pilates classes',
      color: 'from-[#BC6C24] to-[#DDA05F]',
      plans: [
        {
          name: 'Reformer Core',
          classes: '4 classes per month',
          price: '$129',
          features: [
            'All reformer classes included',
            'Beginner to Advanced levels',
          ],
          link: paymentLinks.reformerCore,
        },
        {
          name: 'Reformer Strength',
          classes: '8 classes per month',
          price: '$239',
          features: [
            'All reformer classes included',
            'Beginner to Advanced levels',
          ],
          link: paymentLinks.reformerStrength,
          popular: true,
        },
        {
          name: 'Reformer Balance',
          classes: '12 classes per month',
          price: '$289',
          features: [
            'All reformer classes included',
            'Beginner to Advanced levels',
          ],
          link: paymentLinks.reformerBalance,
        },
        {
          name: 'Reformer Unlimited',
          classes: 'Unlimited reformer classes',
          price: '$309',
          features: [
            'All reformer classes included',
            'Beginner to Advanced levels',
            'Eligible for special pricing programs',
          ],
          link: paymentLinks.reformerUnlimited,
        },
      ],
    },
    {
      category: 'Mat',
      description: 'Access to all Mat Pilates and Yoga classes',
      color: 'from-[#606C37] to-[#283517]',
      plans: [
        {
          name: 'Mat Calm',
          classes: '4 classes per month',
          price: '$79',
          features: [
            'All mat Pilates classes',
            'All yoga classes included',
            'All experience levels',
          ],
          link: paymentLinks.matCalm,
        },
        {
          name: 'Mat Flow',
          classes: '8 classes per month',
          price: '$129',
          features: [
            'All mat Pilates classes',
            'All yoga classes included',
            'All experience levels',
          ],
          link: paymentLinks.matFlow,
          popular: true,
        },
        {
          name: 'Mat Grounded',
          classes: '12 classes per month',
          price: '$159',
          features: [
            'All mat Pilates classes',
            'All yoga classes included',
            'All experience levels',
          ],
          link: paymentLinks.matGrounded,
        },
        {
          name: 'Mat Unlimited',
          classes: 'Unlimited mat & yoga classes',
          price: '$169',
          features: [
            'All mat Pilates classes',
            'All yoga classes included',
            'All experience levels',
            'Eligible for special pricing programs',
          ],
          link: paymentLinks.matUnlimited,
        },
      ],
    },
  ];

  const classPacks = [
    {
      name: '5 Class Pack',
      price: '$139',
      description: 'Perfect for getting started',
      features: [
        'Use for any class type',
        'Valid for 60 days',
        'No commitment required',
        'Great for trying Pilates',
      ],
      link: paymentLinks.pack5,
    },
    {
      name: '10 Class Pack',
      price: '$249',
      description: 'Our most popular pack',
      features: [
        'Use for any class type',
        'Valid for 90 days',
        'Best value per class',
        'Can be shared with friends',
      ],
      link: paymentLinks.pack10,
      popular: true,
    },
    {
      name: '20 Class Pack',
      price: '$399',
      description: 'Maximum flexibility',
      features: [
        'Use for any class type',
        'Valid for 120 days',
        'Biggest savings',
        'Perfect for committed practice',
      ],
      link: paymentLinks.pack20,
    },
  ];

  const dropIns = [
    {
      name: 'Drop In: Mat',
      price: '$30',
      description: 'Single mat Pilates class',
      features: [
        'No commitment required',
        'Book anytime',
        'Perfect for visitors',
        'Try before membership',
      ],
      link: paymentLinks.dropInMat,
    },
    {
      name: 'Drop In: Reformer',
      price: '$40',
      description: 'Single reformer class',
      features: [
        'No commitment required',
        'Book anytime',
        'Perfect for visitors',
        'Try before membership',
      ],
      link: paymentLinks.dropInReformer,
    },
    {
      name: 'Drop In: Yoga',
      price: '$22',
      description: 'Single yoga class',
      features: [
        'No commitment required',
        'Book anytime',
        'Perfect for visitors',
        'Try before membership',
      ],
      link: paymentLinks.dropInYoga,
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="mb-3 md:mb-4 text-[rgb(96,108,55)] text-3xl md:text-4xl lg:text-5xl px-4">Pricing & Memberships</h1>
          <p className="text-[#606C37] w-full max-w-2xl mx-auto font-light text-base md:text-lg px-4 leading-relaxed">
            Choose the plan that aligns with your wellness goals. All prices + HST.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex bg-[rgba(254,250,224,0)] rounded-full p-2 shadow-lg flex-wrap justify-center border border-[#DDA05F]/20 gap-2">
            <button
              onClick={() => setSelectedTab('memberships')}
              className={`px-6 md:px-8 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                selectedTab === 'memberships'
                  ? 'bg-[#BC6C24] text-[#FEFAE0] shadow-lg'
                  : 'text-[#606C37] hover:text-[#283517]'
              }`}
            >
              Memberships
            </button>
            <button
              onClick={() => setSelectedTab('packs')}
              className={`px-6 md:px-8 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                selectedTab === 'packs'
                  ? 'bg-[#BC6C24] text-[#FEFAE0] shadow-lg'
                  : 'text-[#606C37] hover:text-[#283517]'
              }`}
            >
              Class Packs
            </button>
            <button
              onClick={() => setSelectedTab('dropins')}
              className={`px-6 md:px-8 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                selectedTab === 'dropins'
                  ? 'bg-[#BC6C24] text-[#FEFAE0] shadow-lg'
                  : 'text-[#606C37] hover:text-[#283517]'
              }`}
            >
              Drop-Ins
            </button>
          </div>
        </div>

        {selectedTab === 'memberships' ? (
          <div className="space-y-16">
            {/* Serene Blend - Featured First */}
            <div>
              <div className="text-center mb-12">
                <h2 className="mb-3 text-[rgb(96,108,55)] font-normal font-bold">Serene Blend Membership</h2>
                <p className="text-[rgb(185,131,49)] font-light text-lg font-bold font-normal">The ultimate wellness experience — unlimited everything</p>
              </div>
              
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#606C37] via-[#283517] to-[#606C37] rounded-3xl p-6 md:p-10 lg:p-12 text-[#FEFAE0] shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative z-10 text-center">
                    <h3 className="mb-4 text-[#FEFAE0]">{sereneBlendPlan.name}</h3>
                    <p className="mb-2 text-[#FEFAE0]/80 text-lg">{sereneBlendPlan.subtitle}</p>
                    <p className="mb-6 text-4xl text-[#DDA05F]">{sereneBlendPlan.price}<span className="text-lg text-[#FEFAE0]/60">/month + HST</span></p>
                  </div>
                  
                  <div className="relative z-10 text-center mb-8 py-4 px-6 bg-[#FEFAE0]/10 backdrop-blur-sm rounded-2xl border border-[#FEFAE0]/20">
                    <p className="text-[#FEFAE0] text-lg font-light">{sereneBlendPlan.description}</p>
                  </div>
                  
                  <ul className="relative z-10 space-y-4 mb-10">
                    {sereneBlendPlan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#FEFAE0]">
                        <Check size={22} className="mr-3 text-[#DDA05F] flex-shrink-0 mt-1" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={sereneBlendPlan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 block w-full text-center px-8 py-5 bg-[#DDA05F] text-[#283517] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>

            {/* Other Memberships */}
            {membershipCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-10">
                  <h2 className="mb-2 text-[#283517]">{category.category} Membership</h2>
                  <p className="text-[#606C37] font-light">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.plans.map((plan, planIndex) => (
                    <div
                      key={planIndex}
                      className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                        category.category === 'Reformer' 
                          ? 'bg-gradient-to-br from-[#606C37] to-[#283517] text-[#FEFAE0]' 
                          : category.category === 'Mat'
                          ? 'bg-gradient-to-br from-[#DDA05F] to-[#BC6C24] text-[#FEFAE0]'
                          : 'bg-[#FEFAE0]'
                      } ${
                        plan.popular ? 'ring-2 ring-[#FEFAE0]' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FEFAE0] text-[#283517] px-4 py-1 rounded-full text-sm shadow-lg">
                          Popular
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className={`mb-3 ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]' : 'text-[#283517]'}`}>{plan.name}</h3>
                        <p className={`text-2xl mb-2 ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]' : 'text-[#BC6C24]'}`}>{plan.price}<span className={`text-sm ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]/70' : 'text-[#606C37]'}`}>/month + HST</span></p>
                      </div>
                      <div className={`text-center mb-6 py-3 rounded-xl ${category.category === 'Reformer' || category.category === 'Mat' ? 'bg-[#FEFAE0]/10 backdrop-blur-sm border border-[#FEFAE0]/20' : 'bg-white'}`}>
                        <p className={`text-sm font-light ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]' : 'text-[#606C37]'}`}>{plan.classes}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-start text-sm ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]' : 'text-[#606C37]'}`}>
                            <Check size={18} className={`mr-2 flex-shrink-0 mt-0.5 ${category.category === 'Reformer' || category.category === 'Mat' ? 'text-[#FEFAE0]' : 'text-[#BC6C24]'}`} />
                            <span className="font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={plan.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 ${
                          category.category === 'Reformer' || category.category === 'Mat'
                            ? 'bg-[#FEFAE0] text-[#283517] hover:scale-105'
                            : 'bg-[#606C37] text-[#FEFAE0]'
                        }`}
                      >
                        Start
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Membership Benefits */}
            <div className="mt-20 bg-[#FEFAE0] rounded-3xl p-12 shadow-lg">
              <h2 className="text-center mb-12 text-[#283517]">Every Membership Includes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BC6C24] text-[#FEFAE0] mb-4 shadow-lg">
                    <Check size={28} />
                  </div>
                  <h3 className="mb-3 text-[#283517]">Easy Scheduling</h3>
                  <p className="text-[#606C37] font-light">
                    Book online anytime. Cancel up to 8 hours before class.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#606C37] text-[#FEFAE0] mb-4 shadow-lg">
                    <Check size={28} />
                  </div>
                  <h3 className="mb-3 text-[#283517]">All Equipment Provided</h3>
                  <p className="text-[#606C37] font-light">
                    Just bring comfortable clothes and water - we handle the rest.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DDA05F] text-[#FEFAE0] mb-4 shadow-lg">
                    <Check size={28} />
                  </div>
                  <h3 className="mb-3 text-[#283517]">Community Access</h3>
                  <p className="text-[#606C37] font-light">
                    Join our supportive wellness community and events.
                  </p>
                </div>
              </div>
            </div>

            {/* Student & Senior Discounts - More Visible Section */}
            <div className="mt-24 pt-12 border-t-2 border-[#DDA05F]/30">
              <div className="bg-[rgba(254,250,224,0.05)] rounded-3xl p-8 md:p-12 shadow-lg">
                <h2 className="text-center mb-6 text-[#283517] text-2xl md:text-3xl">Special Pricing Programs</h2>
                <div className="text-center space-y-4">
                  <p className="text-[#606C37] text-lg leading-relaxed max-w-3xl mx-auto">
                    We offer discounted rates on <strong>unlimited memberships</strong> for full-time students and seniors 65+.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href={paymentLinks.sereneBlend} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-10 py-5 bg-gradient-to-r from-[#606C37] to-[#283517] text-[#FEFAE0] rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-[#DDA05F] relative group"
                    >
                      <span className="relative z-10">
                        Serene Blend - Student/Senior
                      </span>
                    </a>
                    <a 
                      href={paymentLinks.studentSeniorMat} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-8 py-4 bg-[#606C37] text-[#FEFAE0] rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Mat Unlimited - Student/Senior
                    </a>
                    <a 
                      href={paymentLinks.studentSeniorReformer} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-8 py-4 bg-[#BC6C24] text-[#FEFAE0] rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Reformer Unlimited - Student/Senior
                    </a>
                  </div>
                  <p className="text-[#606C37]/70 text-sm font-light leading-relaxed max-w-2xl mx-auto pt-4">
                    Full-time students with valid ID. Proof of enrollment required each semester. Seniors 65+ with government-issued ID. The Serene Blend membership is also eligible for special pricing programs. Cannot be combined with other offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : selectedTab === 'packs' ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="mb-3 text-[#283517]">Class Packs</h2>
              <p className="text-[#606C37] font-light text-lg max-w-2xl mx-auto">
                No commitment required - purchase classes as you need them
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {classPacks.map((pack, index) => (
                <div
                  key={index}
                  className={`relative bg-[#FEFAE0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    pack.popular ? 'ring-2 ring-[#BC6C24]' : ''
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#BC6C24] text-[#FEFAE0] px-4 py-1 rounded-full text-sm shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="mb-3 text-[#283517]">{pack.name}</h3>
                    <p className="text-2xl text-[#BC6C24] mb-2">{pack.price}<span className="text-sm text-[#606C37]"> + HST</span></p>
                    <p className="text-[#606C37] font-light">{pack.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#606C37] text-sm">
                        <Check size={18} className="mr-2 text-[#BC6C24] flex-shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pack.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-[#606C37] text-[#FEFAE0] rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Purchase
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : selectedTab === 'dropins' ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="mb-3 text-[#283517]">Drop-In Classes</h2>
              <p className="text-[#606C37] font-light text-lg max-w-2xl mx-auto">
                Try a single class - perfect for visitors or first-time students
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {dropIns.map((dropIn, index) => (
                <div
                  key={index}
                  className="bg-[#FEFAE0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center mb-6">
                    <h3 className="mb-3 text-[#283517]">{dropIn.name}</h3>
                    <p className="text-2xl text-[#BC6C24] mb-2">{dropIn.price}<span className="text-sm text-[#606C37]"> + HST</span></p>
                    <p className="text-[#606C37] font-light">{dropIn.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {dropIn.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#606C37] text-sm">
                        <Check size={18} className="mr-2 text-[#BC6C24] flex-shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={dropIn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-[#606C37] text-[#FEFAE0] rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Book
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
