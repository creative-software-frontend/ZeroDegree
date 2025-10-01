import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1020] to-[#071026] text-gray-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Zero Degree</h3>
            <p className="text-sm">
              Providing cutting-edge e-commerce solutions and digital marketing
              services to help businesses thrive in the digital landscape.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/ZeroDegreeAgency"
                target="-bla
                "
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink
                  smooth
                  to="/#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  {' '}
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  {' '}
                  Portfolio
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  {' '}
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                E-commerce Development
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Web Applications
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                SEO Optimization
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" />
                <span>+880 9649 866 977</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <span>info@zerodegree.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                <span> 20/2, West Panthapath, Dhaka-1205</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Zero Degree Agency — All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs md:text-sm">
            <span className="underline hover:text-blue-400 cursor-pointer">
              Return Policy
            </span>
            <span className="underline hover:text-blue-400 cursor-pointer">
              Sitemap
            </span>
            <Link
              className="underline hover:text-blue-400 cursor-pointer"
              to={'/privacy-policy'}
            >
              Privacy policy
            </Link>
            <span className="underline hover:text-blue-400 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
