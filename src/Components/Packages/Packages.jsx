import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      title: 'ই-কমার্স প্লান-১',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '১ টি সিম্পল সুপারফাস্ট ই-কমার্স ওয়েবসাইট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ওকমার্স সিএমএস',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '১০ জিবি সুপারফাস্ট হোস্টিং + ডট কম ডোমেইন ,আপনার নামে কেনা হবে এবং একসেস আপনার কাছেই থাকবে।',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'এডভান্সড সিকিউরিটি সিস্টেম ডেভেলপমেন্ট',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'অপটিমাইজ ফেসবুক পেইজ, লোগো, কাভার ফটো',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '৩ মাস টেকনিক্যাল সাপোর্ট',
        },
      ],
      price: '১৫,০০০ টাকা',
      originalPrice: '২০,০০০ টাকা',
      demos: [
        {
          name: 'Demo-1',
          link: 'https://demo-bd.com/ecom/ecom1/',
        },
        {
          name: 'demo-2',
          link: 'https://demo-bd.com/ecom/ecom2/ ',
        },
        {
          name: 'demo-3',
          link: 'https://demo-bd.com/ecom/ecom3/ ',
        },
      ],
      popular: false,
    },
    {
      name: 'Popular',
      title: 'ই-কমার্স প্লান-২',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '১ টি ফাংশনাল ওয়েবসাইট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ওকমার্স সিএমএস',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '২০ জিবি হোস্টিং ও ডোমেইন ,আপনার নামে কেনা হবে এবং একসেস আপনার কাছেই থাকবে।',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'অপটিমাইজ ফেসবুক পেইজ, লোগো, কাভার ফটো',
        },
        {
          icon: <FaXmark className="text-red-400" />,
          text: 'এডভান্সড সিকিউরিটি সিস্টেম',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '৬ মাস টেকনিক্যাল সাপোর্ট',
        },
      ],
      price: '২০,০০০ টাকা',
      originalPrice: '২৫,০০০ টাকা',
      demos: [
        {
          name: 'Demo-1',
          link: 'https://devilish-crowd.surge.sh/',
        },
        {
          name: 'demo-2',
          link: 'https://familiar-corn.surge.sh/ ',
        },
      ],
      popular: true,
    },
    {
      name: 'Advanced',
      title: 'ই-কমার্স প্লান-৩',
      features: [
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ফাংশনাল ওয়েবসাইট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'ফুল কাস্টোম পেইজ ডিজাইন',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '২৫ জিবি ইন্টারন্যাশনাল অথবা লোকাল আনলিমিটেড হোস্টিং ও ডোমেইন ,আপনার নামে কেনা হবে এবং একসেস আপনার কাছেই থাকবে।',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'এডভান্সড সিকিউরিটি সিস্টেম ডেভেলপমেন্ট',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: 'অপটিমাইজ ফেসবুক পেইজ, লোগো, কাভার ফটো',
        },
        {
          icon: <IoMdCheckmark className="text-green-400" />,
          text: '১২ মাসের টেকনিক্যাল সাপোর্ট',
        },
      ],
      price: '৩০,০০০ টাকা',
      originalPrice: '৪০,০০০ টাকা',
      demos: [
        {
          name: 'Demo-1',
          link: 'https://devilish-crowd.surge.sh/',
        },
        {
          name: 'demo-2',
          link: 'https://familiar-corn.surge.sh/ ',
        },
      ],
      popular: false,
    },
  ];

  return (
    <section className=" ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our e-commerce packages
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select the right package according to your business needs.
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
              } bg-gradient-to-b from-[#0b1020] to-[#071026]`}
            >
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

              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-lg mr-2 mt-0.5 flex-shrink-0">
                        {feature.icon}
                      </span>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-6 border-t border-gray-700 ${
                    pkg.popular ? 'mt-16' : 'mt-0'
                  }`}
                >
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
                          {' '}
                          {demo.name}
                        </Link>
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/01978866977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
