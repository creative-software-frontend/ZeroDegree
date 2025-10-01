import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Contact Form */}
      <div className="lg:w-2/3 p-8 rounded-2xl bg-[#0b1020] backdrop-blur-md border border-slate-700">
        <h2 className="text-2xl font-bold text-white" data-aos="fade-up">
          Get in touch
        </h2>
        <p className="text-slate-300 mt-2 text-lg">
          Tell us about your project — we'll prepare a tailored plan.
        </p>
        <form className="mt-6 grid gap-4">
          <input
            name="name"
            placeholder="Name"
            className="p-3 rounded-lg border border-slate-700 bg-[#071026] text-slate-100"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border border-slate-700 bg-[#071026] text-slate-100"
          />
          <input
            name="company"
            placeholder="Company"
            className="p-3 rounded-lg border border-slate-700 bg-[#071026] text-slate-100"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Description"
            className="p-3 rounded-lg border border-slate-700 bg-[#071026] text-slate-100"
          ></textarea>
          <button className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] text-white">
            Send Message
          </button>
          <div className="text-sm text-slate-300 mt-3">{status}</div>
        </form>
      </div>

      {/* Reach Us Section */}
      <div className="lg:w-1/3 p-8 rounded-2xl bg-gradient-to-b from-[#0b1020] to-[#071026] border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6">Reach Us</h2>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-[#7a5aff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Address</h3>
              <p className="text-slate-300 mt-1">
                20/2, West Panthapath, Dhaka-1205
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-[#7a5aff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <p className="text-slate-300 mt-1">+880 9649 866 977</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-[#7a5aff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-slate-300 mt-1">info@zerodegree.com.bd</p>
            </div>
          </div>
          {/* Website */}
          <div className="flex items-start mt-6">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              {/* Globe Icon */}
              <svg
                className="w-6 h-6 text-[#7a5aff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.5 2.5 4 6.5 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6.5-4-10s1.5-7.5 4-10z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Website</h3>
              <p className="text-slate-300 mt-1">
                <a
                  href="https://creativesoftware.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.creativesoftware.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-[#7a5aff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Social Media</h3>
              <div className="flex space-x-3 mt-2">
                <a
                  href="#"
                  className="text-slate-300 hover:text-[#7a5aff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-[#7a5aff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10 10 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-[#7a5aff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-[#7a5aff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
