import React from 'react';
import Image1 from '../../assets/img/2.png';

const Team = () => {
  return (
    <>
      {' '}
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
            src={Image1}
            alt="founder"
            className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-slate-700"
          />
          <h3 className="mt-4 font-bold text-white">Dilouar Hossain</h3>
          <div className="text-sm text-slate-300">
            Founder & Strategy Consultant
          </div>
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
    </>
  );
};

export default Team;
