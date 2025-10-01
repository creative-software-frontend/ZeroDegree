import React from 'react';
import { PiPhoneCallDuotone } from "react-icons/pi";

import { FaShieldAlt, FaEdit, FaHeadset, FaWhatsapp } from 'react-icons/fa';

const Special = () => {
  const services = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: 'Fully Secured',
      description:
        'We use the safest technology to keep our customers websites safe.',
      whatsappText: 'WhatsApp',
    },
    {
      icon: <PiPhoneCallDuotone className="text-4xl text-green-500" />,
      title: '24/7 Support',
      description:
        '24/7 support is a customer service strategy that involves assisting around the clock, 365 days a year.',
      whatsappText: 'WhatsApp',
    },
    {
      icon: <FaHeadset className="text-4xl text-purple-500" />,
      title: 'Free Support',
      description:
        'Free technical support for the next 1 month after developing a user-friendly designed website and app.',
      whatsappText: 'WhatsApp',
    },
  ];

  return (
    <section className=" text-white">
      <div className="">
        <div className=" mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special for You!
          </h2>
          <p className="text-xl text-blue-300">
            Our special services that will accelerate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="mb-6 p-3 bg-gray-900 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>
              <a
                href="https://wa.me/01978866977"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="text-xl" /> {service.whatsappText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
