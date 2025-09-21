import React from 'react';

const Portfolio = () => {
  return (
    <>
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
            <h3 className="font-bold text-white">Supply Chain Optimization</h3>
            <p className="text-sm text-slate-300 mt-2">
              Reduced delivery time by 30%.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
