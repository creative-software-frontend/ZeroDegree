import React, { useEffect, useState } from 'react';
import { FaGlobe, FaCalendarAlt, FaClock } from 'react-icons/fa';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {count}
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <FaGlobe className="text-4xl text-blue-400" />,
      value: <CountUp end={400} />,
      label: 'Websites Developed',
      suffix: '+',
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-green-400" />,
      value: <CountUp end={10} />,
      label: 'Years of Experience',
      suffix: '+',
    },
    {
      icon: <FaClock className="text-4xl text-purple-400" />,
      value: <CountUp end={45} />,
      label: 'Free Consultation',
      suffix: 'min',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b1020] to-[#071026]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ZERO DEGREE এর অর্জন
          </h2>
          <p className="text-xl text-blue-300">
            গর্বের অর্জন এবং সাফল্যের গল্প
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-900 rounded-full">{stat.icon}</div>
              </div>

              <div className="flex items-center justify-center gap-1 mb-2">
                {stat.value}
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">{stat.label}</h3>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
