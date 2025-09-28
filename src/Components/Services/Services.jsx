import React from 'react';

const Services = () => {
  return (
    <>
      <div className=" mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg text-slate-300 ">
          Four core pillars — end-to-end services tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Web Development Card */}
        <div
          className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1020] to-[#071026] border border-slate-700 hover:border-[#7a5aff] transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="mb-5 ">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] flex items-center justify-center text-white mb-4 ">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Web Development</h3>
            <p className="text-slate-300 mt-2 text-sm">
              Responsive websites, eCommerce platforms, mobile apps, and UI/UX
              design with performance & security best practices.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              'Responsive Websites & SPA',
              'E-commerce Development & Integration',
              'Mobile Apps (Android/iOS)',
              'UI/UX & Accessibility',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Card */}
        <div
          className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1020] to-[#071026] border border-slate-700 hover:border-[#7a5aff] transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="mb-5">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] flex items-center justify-center text-white mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Marketing</h3>
            <p className="text-slate-300 mt-2 text-sm">
              SEO, Paid Ads, Social Media, Content, Email & Analytics —
              campaigns focused on ROI.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              'SEO / Local SEO',
              'Paid Ads (Google, Meta, YouTube, Tiktok)',
              'Content Strategy & Production',
              'Analytics & Conversion Optimization',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Investment Card */}
        <div
          className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1020] to-[#071026] border border-slate-700 hover:border-[#7a5aff] transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="mb-5">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] flex items-center justify-center text-white mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Investment</h3>
            <p className="text-slate-300 mt-2 text-sm">
              Strategic investments in startups & SMEs, digital asset
              management, and funding to accelerate growth.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              'Startup & SME Funding',
              'Growth Capital & Advisory',
              'Portfolio Management',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supply Chain Card */}
        <div
          className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1020] to-[#071026] border border-slate-700 hover:border-[#7a5aff] transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="mb-5">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] flex items-center justify-center text-white mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Supply Chain</h3>
            <p className="text-slate-300 mt-2 text-sm">
              Procurement, inventory, logistics and end-to-end supply chain
              solutions for B2B & B2C.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              'Procurement & Sourcing',
              'Inventory & Warehouse Management',
              'Logistics & Distribution',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
