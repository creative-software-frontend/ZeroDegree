import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-700 py-8 text-center text-slate-400 bg-[#0b1020]">
      © 2025 Zero Degree — All rights reserved.
      <div className=" flex justify-between max-w-7xl mx-auto">
        <div className=""></div>
        <div className="space-x-4 ">
          <span className="underline hover:text-blue-500">Return Policy </span>
          <span className="underline hover:text-blue-500">Sitemap </span>
          <Link
            className="cursor-pointer underline hover:text-blue-500"
            target="_blank"
            to={'/privacy-policy'}
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
