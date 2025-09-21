import { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const StickyIcons = () => {
  const [showButton, setShowButton] = useState(false);

  // scroll position check
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth animation
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 items-center z-50">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+8801978866977"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Up Arrow Icon */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-[#7a5aff] to-[#ff5a7a] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp className="text-white text-2xl" />
        </button>
      )}
    </div>
  );
};

export default StickyIcons;
