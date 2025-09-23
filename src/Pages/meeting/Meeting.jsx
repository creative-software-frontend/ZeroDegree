import React, { useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaUserTie } from 'react-icons/fa';
import Image from '../../assets/img/2.png';
import StatsSection from './StatsSection';

const Meeting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <title>Free CEO Consultation | Topar IT</title>
        <meta
          name="description"
          content="Get free e-commerce business consultation with our CEO. Book your 45-minute meeting today."
        />
      </header>

      <div className="min-h-screen bg-gradient-to-b from-[#0b1020] to-[#071026] text-gray-100">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Free CEO Consultation
            </h1>
            <p className="text-xl mb-8">ইকমার্স বিজনেস শুরু করবেন?</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:01978866977"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaPhone /> Call Now
              </a>
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
        </header>
        {/* Stats Section */}
        <StatsSection></StatsSection>
        {/* CEO Intro Section - Fixed Image Formatting */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto">
                  <img
                    src={Image}
                    alt="দিলোয়ার হোসেন CEO - ZERO DEGREE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  দিলোয়ার হোসেন, CEO - ZERO DEGREE
                </h2>
                <p className="text-blue-300 mb-4">
                  ৪৫ মিনিটের মিটিংয়ে সমাধান নিয়ে কথা হবে
                </p>
                <p className="text-gray-300">
                  গত ১০ বছরে আমরা ৪০০+ ওয়েবসাইট ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং
                  সেবা ও কনসালটেন্সি প্রোভাইড করছি, নিশ্চিত থাকুন এই মিটিং আপনার
                  বিজনেসে দূর্দান্ত গতি এনে দিবে।
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              মিটিংয়ে যা আলোচনা হবে
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🛒</div>
                <h3 className="font-semibold text-lg mb-2">
                  কিভাবে উইনিং প্রোডাক্ট নিয়ে বিজনেস শুরু করবেন?
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🚫</div>
                <h3 className="font-semibold text-lg mb-2">
                  ওয়েবসাইট ডেভেলপমেন্ট এর ফুল ম্যাকানিজম
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🧱</div>
                <h3 className="font-semibold text-lg mb-2">
                  প্রোডাক্ট প্রাইস অনুযায়ী, কতগুলো এডসেট রানিং থাকবে, মার্কেটিং
                  বাজেট কেমন রাখবেন
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">📄</div>
                <h3 className="font-semibold text-lg mb-2">
                  কম্পেটিটরদের বিজনেসকে কিভাবে এনালাইসিস করবেন?
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">📦</div>
                <h3 className="font-semibold text-lg mb-2">
                  অর্ডার সহজে ম্যানেজমেন্ট কিভাবে হবে
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🔢</div>
                <h3 className="font-semibold text-lg mb-2">
                  কুরিয়ার সংক্রান্ত সকল সমাধান পাবেন
                </h3>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://wa.me/01978866977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp এ মিটিং বুক করুন
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Meeting;
