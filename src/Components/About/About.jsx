import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#071026]/50 to-transparent p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-slate-700">
      <h2 className="text-2xl font-bold text-white">About Zero Degree</h2>
      <p className="text-slate-300 mt-4 text-lg">
        Zero Degree is a full-service agency operating across four pillars: Web
        Development, Marketing, Investment and Supply Chain. We combine
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
  );
};

export default About;
