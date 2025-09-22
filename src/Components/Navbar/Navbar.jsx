import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className="font-inter text-[#e6eef8] bg-gradient-to-b from-[#0b1020] to-[#071026] sticky top-0 z-50  backdrop-blur-md">
      {' '}
      <nav className=" max-w-6xl mx-auto py-6 flex items-center justify-between ">
        <Link to={'/'}>
          {' '}
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
        </Link>

        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <HashLink
            smooth
            to="/#home"
            className="hover:text-white transition-colors"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="hover:text-white transition-colors"
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#package"
            className="hover:text-white transition-colors"
          >
            Package
          </HashLink>
          <HashLink
            smooth
            to="/#portfolio"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </HashLink>
          <HashLink
            smooth
            to="/#team"
            className="hover:text-white transition-colors"
          >
            Team
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </HashLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={'/meeting'}
            className="px-4 py-2 rounded-lg font-bold bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] text-black hover:shadow-lg transition-all"
          >
            Get a Free Consultation
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
