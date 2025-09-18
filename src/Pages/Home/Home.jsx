import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../assets/img/logo.png';
import StickyIcons from '../../Components/StickyIcons';
import Footer from '../../Components/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const packages = [
    {
      name: 'Starter',
      features: [
        'Social Media Setup & 8 Posts / Month',
        'Basic Meta Ads',
        'Monthly Report',
      ],
      price: '৳ 299',
      paymentMethods: ['Stripe', 'SSLCOMMERZ', 'bKash'],
    },
    {
      name: 'Growth',
      features: [
        'Social Media + Ads',
        'SEO (On-page + Local)',
        '12 Posts + Blog',
        'Lead Gen Campaign',
      ],
      price: '৳ 599',
      paymentMethods: ['Stripe', 'SSLCOMMERZ', 'bKash'],
    },
    {
      name: 'Pro',
      features: [
        'Full Digital Suite (SEO + SMM + SEM)',
        'Funnel Building & Dedicated Manager',
        'Advanced Reporting & Optimization',
      ],
      price: '৳ 999',
      paymentMethods: ['Stripe', 'SSLCOMMERZ', 'bKash'],
    },
  ];

  return (
    <div className="font-inter text-[#e6eef8] bg-gradient-to-b from-[#0b1020] to-[#071026] min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50  backdrop-blur-md max-w-6xl mx-auto px-6 py-6 flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7a5aff] to-[#ff5a7a] text-white font-extrabold">
            <img src={Logo} alt="" />
          </div>
          <div>
            <div className="text-4xl font-bold">ZERO DEGREE</div>
            <div className="text-xs text-slate-300">
              Web · Marketing · Investment · Supply Chain
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#package" className="hover:text-white transition-colors">
            Package
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Team
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg font-bold bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] text-black hover:shadow-lg transition-all"
          >
            Get a Free Consultation
          </a>
        </div>
      </nav>
      {/* Header Section */}
      <header
        id="home"
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center mt-6 py-10"
      >
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ZERO DEGREE — <br />
          </h1>
          <h2 className="bg-gradient-to-r from-[#ff5a7a] to-[#7a5aff] bg-clip-text text-transparent md:text-4xl font-bold my-2">
            • We Build • We Marketing <br />
          </h2>
          <h2 className="bg-gradient-to-r from-[#ff5a7a] to-[#7a5aff] font-bold bg-clip-text text-transparent md:text-4xl">
            • We Invest • We Deliver
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Complete digital solutions for growing businesses: web development,
            end-to-end marketing, strategic investments and supply chain
            management.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#services"
              className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] text-white hover:shadow-lg transition-all"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-bold border border-slate-600 text-slate-200 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div data-aos="fade-left" className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
              alt="Digital marketing and business strategy meeting"
              className="w-full h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="absolute -bottom-6 left-6 p-4 rounded-2xl bg-[#0b1020] backdrop-blur-md border border-slate-700 shadow-lg w-64">
            <div className="text-xs text-slate-400">Featured</div>
            <div className="font-bold mt-1 text-white">
              SaaS Launch — 3x Leads
            </div>
            <div className="text-sm text-slate-300 mt-1">
              Landing + Ads + Webinar
            </div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-[#071026]/50 to-transparent p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-slate-700">
          <h2 className="text-2xl font-bold text-white">About Zero Degree</h2>
          <p className="text-slate-300 mt-4 text-lg">
            Zero Degree is a full-service agency operating across four pillars:
            Web Development, Marketing, Investment and Supply Chain. We combine
            creativity, data and operational excellence to scale businesses.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/20 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-white">Vision</h4>
              <p className="text-slate-300 text-sm mt-2">
                To be the true growth partner for ambitious businesses.
              </p>
            </div>
            <div className="p-6 bg-black/20 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-white">Mission</h4>
              <p className="text-slate-300 text-sm mt-2">
                Deliver measurable results using tech, creativity and capital.
              </p>
            </div>
            <div className="p-6 bg-black/20 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-white">Values</h4>
              <p className="text-slate-300 text-sm mt-2">
                Integrity, Performance, Collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
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
      </section>
      {/*  Package */}
      <section id="package" className="max-w-6xl mx-auto px-6 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Packages
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Flexible packages designed to grow your business at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border ${
                index === 1
                  ? 'border-[#7a5aff] scale-105 shadow-lg shadow-purple-500/20'
                  : 'border-slate-700'
              } bg-gradient-to-b from-[#0b1020] to-[#071026]`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`p-6 ${
                  index === 1
                    ? 'bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a]'
                    : 'bg-slate-800'
                } text-white`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-extrabold">{pkg.price}</div>
                <p className="text-sm opacity-80">per month</p>
              </div>

              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
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
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                    Pay with
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.paymentMethods.map((method, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`w-full mt-6 py-3 rounded-lg font-semibold ${
                      index === 1
                        ? 'bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] text-white hover:shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    } transition-all duration-300`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white" data-aos="fade-right">
            Case Studies
          </h2>
          <a
            href="#contact"
            className="text-[#7a5aff] font-semibold hover:text-[#ff5a7a] transition-colors"
          >
            Work with us →
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-[#0b1020] border border-slate-700"
            data-aos="zoom-in"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
              alt="case1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-white">Ecommerce Growth</h3>
              <p className="text-sm text-slate-300 mt-2">
                45% revenue increase in 3 months.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-[#0b1020] border border-slate-700"
            data-aos="zoom-in"
            data-aos-delay="120"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
              alt="case2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-white">SaaS Launch</h3>
              <p className="text-sm text-slate-300 mt-2">
                Lead Gen funnel + webinar.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-[#0b1020] border border-slate-700"
            data-aos="zoom-in"
            data-aos-delay="240"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
              alt="case3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-white">
                Supply Chain Optimization
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Reduced delivery time by 30%.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-white" data-aos="fade-up">
          Our Team
        </h2>
        <p className="text-slate-300 mt-2 text-lg">
          Multidisciplinary experts in tech, marketing, finance and logistics.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-2xl bg-[#0b1020] border border-slate-700 text-center"
            data-aos="flip-left"
            data-aos-delay="120"
          >
            <img
              // src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
               src="src/assets/img/2.png"
              alt="founder"
              className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-slate-700"
            />
            <h3 className="mt-4 font-bold text-white">Dilouar Hossain</h3>
            <div className="text-sm text-slate-300">Founder & Strategy Consultant</div>
          </div>

          <div
            className="p-6 rounded-2xl bg-[#0b1020] border border-slate-700 text-center"
            data-aos="flip-left"
            data-aos-delay="180"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQENx8w0-VqAdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695651418756?e=2147483647&v=beta&t=bftb1QQ6sMNZCOw1dn8q6KVXWPL_31_VrZ-v8CWUJdI"
              alt="team1"
              className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-slate-700"
            />
            <h3 className="mt-4 font-bold text-white">Ayesha Karim</h3>
            <div className="text-sm text-slate-300">Head of Content</div>
          </div>

          <div
            className="p-6 rounded-2xl bg-[#0b1020] border border-slate-700 text-center"
            data-aos="flip-left"
            data-aos-delay="240"
          >
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
              alt="team2"
              className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-slate-700"
            />
            <h3 className="mt-4 font-bold text-white">Rafiq</h3>
            <div className="text-sm text-slate-300">Performance Marketer</div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-20 mb-20">
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
                    Panthapath, Dhaka, Bangladesh
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
      </section>

      {/* StickyIcons */}
      <StickyIcons></StickyIcons>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
