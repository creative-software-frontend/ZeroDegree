import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StickyIcons from '../../Components/Icons/StickyIcons';

import Packages from '../../Components/Packages/Packages';
import Services from '../../Components/Services/Services';
import Contact from '../../Components/Contact/Contact';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Team from '../../Components/Team/Team';
import About from '../../Components/About/About';
import KeyFeatures from '../../Components/KeyFeatures/KeyFeatures';
import Special from '../../Components/Special/Special';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="font-inter text-[#e6eef8] bg-gradient-to-b from-[#0b1020] to-[#071026] min-h-screen">
      {/* Navbar */}

      {/* Header Section */}
      <header
        id="home"
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center  py-10"
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
        <About></About>
      </section>
      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <Services></Services>
      </section>
      {/* Key Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <KeyFeatures></KeyFeatures>
      </section>
      {/*  Package */}
      <section id="package" className="max-w-6xl mx-auto px-6 mt-20">
        <Packages></Packages>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 mt-20">
        <Portfolio></Portfolio>
      </section>
      {/* Team Section */}
      <section id="team" className="max-w-6xl mx-auto px-6 mt-20">
        <Team></Team>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-20 pb-10">
        <Contact></Contact>
      </section>

      {/* StickyIcons */}
      <StickyIcons></StickyIcons>
      {/* Special special */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-20 pb-10">
        <Special></Special>
      </section>
    </div>
  );
};

export default Home;
