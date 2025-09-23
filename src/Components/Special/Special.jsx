import React from 'react';
import { FaShieldAlt, FaEdit, FaHeadset, FaWhatsapp } from 'react-icons/fa';

const Special = () => {
  const services = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: 'Fully Secured',
      description:
        'কাস্টোমারদের ওয়েবসাইটকে নিরাপদ রাখার জন্য আমরা সবচেয়ে সেইফ টেকনোলজি ইউজ করি',
      whatsappText: 'WhatsApp',
    },
    {
      icon: <FaEdit className="text-4xl text-green-500" />,
      title: 'Easy to Edit',
      description:
        'আপনি নিজের ওয়েবসাইটকে প্রয়োজন অনুযায়ী ইডিট করে নিতে পারবেন। আমরা শতভাগ ডায়নামিক ওয়েবসাইট তৈরী করি',
      whatsappText: 'WhatsApp',
    },
    {
      icon: <FaHeadset className="text-4xl text-purple-500" />,
      title: 'Technical Support',
      description:
        'ইউজার ফ্রেন্ডলি ডিজাইনের ওয়েবসাইট ও অ্যাপ ডেভেলপ করার পরবর্তী ১২ মাস টেকনিক্যাল সাপোর্ট ফ্রি',
      whatsappText: 'WhatsApp',
    },
  ];

  return (
    <section className=" text-white">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special for You!
          </h2>
          <p className="text-xl text-blue-300">
            আমাদের বিশেষ পরিষেবাসমূহ যা আপনার ব্যবসাকে দ্রুত এগিয়ে নেবে
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
