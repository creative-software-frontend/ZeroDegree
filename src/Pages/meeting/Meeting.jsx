import React, { useState } from 'react';
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaLaptop,
  FaChartLine,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const Meeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    company: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    alert('Meeting request submitted! We will contact you soon.');
  };

  return (
    <>
      <header>
        <title>Free CEO Consultation | Topar IT</title>
        <meta
          name="description"
          content="Get free e-commerce business consultation with our CEO. Book your 45-minute meeting today."
        />
      </header>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Free CEO Consultation
            </h1>
            <p className="text-xl mb-8">ইকমার্স বিজনেস শুরু করবেন?</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:01XXXXXXXXX"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaPhone /> Call Now
              </a>
              <a
                href="https://wa.me/01XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="#meeting-form"
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors"
              >
                Go to Meeting Form
              </a>
            </div>
          </div>
        </header>

        {/* CEO Intro Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUserTie className="text-5xl text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  দিগন্ত হাসান রুবেল, সিইও - ZERO DEGREE
                </h2>
                <p className="text-gray-600 mt-2">
                  ৪৫ মিনিটের মিটিংয়ে সমাধান নিয়ে কথা হবে
                </p>
                <p className="mt-4 text-gray-700">
                  গত ৮ বছরে আমরা ৪২০০+ ওয়েবসাইট ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং
                  সেবা ও কনসালটেন্সি প্রোভাইড করছি, নিশ্চিত থাকুন এই মিটিং আপনার
                  বিজনেসে দূর্দান্ত গতি এনে দিবে।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              মিটিংয়ে যা আলোচনা হবে
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">🛒</div>
                <h3 className="font-semibold text-lg mb-2">
                  কিভাবে উইনিং প্রোডাক্ট নিয়ে বিজনেস শুরু করবেন?
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">🚫</div>
                <h3 className="font-semibold text-lg mb-2">
                  ওয়েবসাইট ডেভেলপমেন্ট এর ফুল ম্যাকানিজম
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">🧱</div>
                <h3 className="font-semibold text-lg mb-2">
                  প্রোডাক্ট প্রাইস অনুযায়ী, কতগুলো এডসেট রানিং থাকবে, মার্কেটিং
                  বাজেট কেমন রাখবেন
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">📄</div>
                <h3 className="font-semibold text-lg mb-2">
                  কম্পেটিটরদের বিজনেসকে কিভাবে এনালাইসিস করবেন?
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">📦</div>
                <h3 className="font-semibold text-lg mb-2">
                  অর্ডার সহজে ম্যানেজমেন্ট কিভাবে হবে
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">🔢</div>
                <h3 className="font-semibold text-lg mb-2">
                  কুরিয়ার সংক্রান্ত সকল সমাধান পাবেন
                </h3>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://wa.me/01XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp এ মিটিং বুক করুন
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              ZERO DEGREE এর অর্জন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  4200+
                </div>
                <p className="text-gray-600">Websites</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
                <p className="text-gray-600">Years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  45min
                </div>
                <p className="text-gray-600">1-to-1 Free Meeting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              মিটিং লোকেশন
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      ZERO DEGREE লিমিটেড
                    </h3>
                    <p className="text-gray-700">Dhaka</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-xl text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      লোকেশনে আসতে গাইড করবেন … 01XXXXXXXXX
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <a
                        href="tel:01XXXXXXXXX"
                        className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <FaPhone /> Call Afzal
                      </a>
                      <a
                        href="https://wa.me/01XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gray-200">
                {/* Map placeholder - you can integrate Google Maps here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <FaMapMarkerAlt className="text-4xl text-gray-500" />
                  <span className="ml-2 text-gray-600">Map Location</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Form Section */}
        <section id="meeting-form" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
              মিটিং ফরমে তথ্য দিন
            </h2>
            <p className="text-center text-gray-600 mb-8">
              নিচের ফরমটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করব
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    আপনার নাম লিখুন *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    মোবাইল নাম্বার লিখুন *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="location"
                  >
                    কোন জায়গা থেকে আসবেন? *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="এলাকার নাম লিখুন"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="company">
                    আপনার প্রতিষ্ঠানের নাম (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="কোম্পানি/ব্র্যান্ডের নাম"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    কি ধরনের পরামর্শ চাচ্ছেন?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="আপনার প্রয়োজন সম্পর্কে বিস্তারিত লিখুন..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center gap-2"
              >
                Submit Meeting Request <FaArrowRight />
              </button>
            </form>
          </div>
        </section>

        {/* Helpline Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              24/7 Helpline
            </h2>
            <p className="text-xl mb-6">01XXXXXXXXX</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:01XXXXXXXXX"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaPhone /> Call
              </a>
              <a
                href="https://wa.me/01XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Meeting;
