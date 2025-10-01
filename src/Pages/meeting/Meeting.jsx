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
        <title>Free Consultation | o°— #1 Digital Marketing Agency in Bangladesh</title>
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
            <p className="text-xl mb-8">Starting any business ?</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:+8809649866977"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaPhone /> Call Now
              </a>
              <a
                href="https://wa.me/+8801978866977"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp /> Book a meeting at WhatsApp
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
                    alt="Dilouar Hossain (CEO - ZERO DEGREE AGENCY)"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  Dilouar Hossain (CEO - ZERO DEGREE AGENCY)
                </h2>
                <p className="text-blue-300 mb-4">
                  In a 45-minute meeting, we will discuss how you can start a business and succeed.
                </p>
                <p className="text-gray-300">
                  We have been providing 400+ website development, digital marketing, services and consultancy in the last 15 years, rest assured that this meeting will bring tremendous momentum to your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              What will be discussed at the meeting !
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">📈</div>
                <h3 className="font-semibold text-lg mb-2">
                  How to start a business?
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🌐</div>
                <h3 className="font-semibold text-lg mb-2">
                  The full mechanism of website development.
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🔎</div>
                <h3 className="font-semibold text-lg mb-2">
                How to analyze competitors?
                </h3>
              </div>
               <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">📢</div>
                <h3 className="font-semibold text-lg mb-2">
                When and how to do marketing.
                </h3>
              </div>
           
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">💰</div>
                <h3 className="font-semibold text-lg mb-2">
                  How to make the most of your capital in Business.
                </h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-400 text-3xl mb-4">🚚</div>
                <h3 className="font-semibold text-lg mb-2">
                  You will get all the solutions related to logistics.
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
                <FaWhatsapp className="mr-2" /> Book a meeting at WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Meeting;
