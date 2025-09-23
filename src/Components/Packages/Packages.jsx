import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      title: 'বেসিক স্টার্টআপ প্ল্যান',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'সীমিত প্রোডাক্ট লিস্টিং (৫০–১০০ প্রোডাক্ট পর্যন্ত)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'বেসিক ওয়েবসাইট/স্টোর ডিজাইন',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ইমেইল ও চ্যাট কাস্টমার সাপোর্ট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ম্যানুয়াল অর্ডার ম্যানেজমেন্ট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ফেসবুক পেইজ ইন্টিগ্রেশন সহ বেসিক মার্কেটিং টুলস',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'Multi-vendor Marketplace (একাধিক সেলার এক প্ল্যাটফর্মে)',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'Advanced Inventory & Supply Chain Management',
        },
      ],
      price: '১৫,০০০ টাকা',
      originalPrice: '২০,০০০ টাকা',
      demos: [
        { name: 'Demo-1', link: 'https://demo-bd.com/ecom/ecom1' },
        { name: 'Demo-2', link: 'https://demo-bd.com/ecom/ecom2' },
        { name: 'Demo-3', link: 'https://demo-bd.com/ecom/ecom3' },
      ],
      popular: false,
    },
    {
      name: 'Growth',
      title: 'গ্রোথ প্ল্যান',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'আনলিমিটেড প্রোডাক্ট লিস্টিং',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'প্রফেশনাল ওয়েবসাইট/অ্যাপ ডিজাইন',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'মাল্টি-পেমেন্ট গেটওয়ে (Bkash, Nagad, Card, COD)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'SEO ও Social Media Marketing টুলস',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'কাস্টমার রিভিউ ও রেটিং সিস্টেম',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'AI-driven Marketing (Recommendation, Email Automation)',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'Mobile App (Android + iOS)',
        },
      ],
      price: '২০,০০০ টাকা',
      originalPrice: '২৫,০০০ টাকা',
      demos: [
        { name: 'Demo-1', link: 'https://devilish-crowd.surge.sh' },
        { name: 'Demo-2', link: 'https://familiar-corn.surge.sh/' },
      ],
      popular: true,
    },
    {
      name: 'Premium',
      title: 'প্রিমিয়াম ব্র্যান্ড প্ল্যান',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Multi-vendor Marketplace (একাধিক সেলার এক প্ল্যাটফর্মে)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Advanced Inventory & Supply Chain Management',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'অটোমেশন (Order, Invoice, Delivery Tracking)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Loyalty Program ও Membership Feature',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Mobile App (Android + iOS)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'AI-driven Marketing (Recommendation, Email Automation)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '২৪/৭ Dedicated Support',
        },
      ],
      price: '৩০,০০০ টাকা',
      originalPrice: '৪০,০০০ টাকা',
      demos: [{ name: 'Demo-1', link: 'https://premium-brand.demo.com' }],
      popular: false,
    },
  ];

  const otherPlans = [
    {
      id: 4,
      title: 'ইন্টারন্যাশনাল এক্সপ্যানশন প্ল্যান',
      subtitle: '👉 যারা গ্লোবাল মার্কেটে যেতে চান',
      features: [
        'Multi-currency & Multi-language সাপোর্ট',
        'International Payment Gateway (PayPal, Stripe, Wise ইত্যাদি)',
        'Cross-border Shipping Integration',
        'Global SEO Optimization',
        'Data Security & Compliance (GDPR ইত্যাদি)',
      ],
    },
    {
      id: 5,
      title: 'রিসেলার / ড্রপশিপিং প্ল্যান',
      subtitle: '👉 যারা নিজস্ব প্রোডাক্ট ছাড়াই ব্যবসা করতে চান',
      features: [
        'Ready Product Catalog Integration',
        'অটোমেটিক প্রোডাক্ট Import/Export',
        'Supplier থেকে Direct Shipping',
        'কম খরচে ব্যবসা শুরু করার সুযোগ',
        'Profit Margin Setup System',
      ],
    },
    {
      id: 6,
      title: 'অতিরিক্ত ফিচার যা প্ল্যানে দেওয়া যায়',
      subtitle: '',
      features: [
        'কাস্টম ডোমেইন + হোস্টিং',
        'অ্যাফিলিয়েট মার্কেটিং সিস্টেম',
        'কাস্টমার লয়্যালটি পয়েন্টস',
        'চ্যাটবট/AI সাপোর্ট',
        'ডাটা অ্যানালিটিক্স ও রিপোর্টিং',
      ],
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our e-commerce packages
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            There are various plans or packages available to start an e-commerce
            business, depending on your budget, target audience, product, and
            marketing strategy. Below are some common e-commerce plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'border-2 border-[#7a5aff] shadow-2xl scale-105'
                  : 'border border-gray-700 shadow-lg'
              } bg-gradient-to-b from-[#0b1020] to-[#071026] flex flex-col`}
            >
              {/* Header */}
              <div
                className={`p-6 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a]'
                    : 'bg-gray-800'
                } text-white`}
              >
                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">{pkg.name}</span>
                  {pkg.originalPrice && (
                    <span className="text-sm line-through opacity-70">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-3xl font-extrabold mt-2">{pkg.price}</div>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow">
                <ul className="space-y-4 ">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-lg mr-2 mt-0.5 flex-shrink-0">
                        {feature.icon}
                      </span>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  লাইভ ড্যামো
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.demos.map((demo, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      <Link target="_blank" to={`${demo.link}`}>
                        {demo.name}
                      </Link>
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/01978866977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors w-full"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid md:grid-cols-3 gap-8 
        mt-16"
        >
          {otherPlans.map(plan => (
            <div
              key={plan.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Optional Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Header Section */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {plan.title}
                </h2>
                {plan.subtitle && (
                  <p className="text-gray-300 mb-4">{plan.subtitle}</p>
                )}
                {plan.price && (
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.duration && (
                      <span className="text-gray-400">/{plan.duration}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/8801978866977"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>Get Started on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
