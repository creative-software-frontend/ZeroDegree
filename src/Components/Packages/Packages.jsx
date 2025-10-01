import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      title: 'Startup plan',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Free Domain + Hosting (.xyz, .shop, .online)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Limited product listing (up to 50)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Basic website/store design',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Easy Courier Entry',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Manual order management',
        },
       {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'COD Payment Gateway',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Single vendor Marketplace ',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'Advanced Inventory & Supply Chain Management',
        },
         {
          icon: <FaXmark className="text-red-400" />,
          text: 'Mobile App (Android + iOS)',
        },
      ],
      price: '৳20,000',
      originalPrice: '৳25,000',
      demos: [
        { name: 'Demo-1', link: 'https://demo-bd.com/ecom/ecom1' },
        { name: 'Demo-2', link: 'https://demo-bd.com/ecom/ecom2' },
        { name: 'Demo-3', link: 'https://demo-bd.com/ecom/ecom3' },
      ],
      popular: false,
    },
    {
      name: 'Medium',
      title: 'Growth Plan',
      features: [
         {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Free Domain + Hosting (.com, own Brand)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Unlimited product listings',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Professional Website Design',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Easy Courier Entry',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Multi-payment gateway (Bkash, Nagad, COD)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Single vendor Marketplace',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Customer review and rating system',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'AI-driven Marketing (Recommendation)',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'Mobile App (Android + iOS)',
        },
      ],
      price: '৳50,000',
      originalPrice: '৳75,000',
      demos: [
        { name: 'Demo-1', link: 'https://devilish-crowd.surge.sh' },
        { name: 'Demo-2', link: 'https://familiar-corn.surge.sh/' },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      title: 'Premium Plan',
      features: [
         {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Free Domain + Hosting (.com, own Brand)',
        },{
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Multi-vendor Marketplace',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Advanced Inventory & Supply Chain Management',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Automation (Order, Invoice, Delivery Tracking)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Loyalty Program ও Membership Feature',
        },
       {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Multi-payment gateway (Bkash, Nagad, COD)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'AI-driven Marketing (Recommendation)',
        },
         {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'Mobile App (Android + iOS)',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '24/7 Dedicated Support',
        },
      ],
      price: '৳1,00,000',
      originalPrice: '৳,120,000',
      demos: [{ name: 'Demo-1', link: 'https://premium-brand.demo.com' }],
      popular: false,
    },
  ];

  const otherPlans = [
    {
      id: 4,
      title: 'International Expansion Plan',
      subtitle: '👉 Those who want to go to the global market',
      features: [
        'Multi-currency & Multi-language Support',
        'International Payment Gateway (SSL, PayPal, Stripe, Wise)',
        'Cross-border Shipping Integration',
        'Global SEO Optimization',
        'Data Security & Compliance (GDPR)',
      ],
    },
    {
      id: 5,
      title: 'Reseller / Dropshipping Plan',
      subtitle: '👉 Those who want to go to the global market',
      features: [
        'Ready Product Catalog Integration',
        'Automatic product Import/Export',
        'Supplier to Direct Shipping',
        'Opportunity to start a business at low cost',
        'Profit Margin Setup System',
      ],
    },
    {
      id: 6,
      title: 'Additional Features Plan',
      subtitle: '👉 Those who want to go to the global market',
      features: [
        'Custom Domain + Hosting',
        'Affiliate Marketing System',
        'Customer loyalty points',
        'Chatbot/AI support',
        'Data Analytics and Reporting',
      ],
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="lext-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our e-commerce packages
          </h2>
          <p className="text-lg text-gray-300  text-left">
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
                  Live Demo
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
