import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/listings', label: t('nav.buy') },
    { path: '/listings?type=rent', label: t('nav.rent') },
    { path: '/sell', label: t('nav.sell') },
    { path: '/agents', label: t('nav.agents') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center px-4 md:px-[6%] py-4 md:py-6 bg-primary border-b-4 border-dark sticky top-0 z-50"
    >
      <Link to="/" className="text-2xl md:text-3xl font-extrabold text-dark hover:scale-105 transition-transform">
        Brightkey
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 xl:gap-8 list-none font-semibold text-sm xl:text-base">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-secondary transition-colors ${
                isActive(link.path.split('?')[0]) ? 'text-secondary' : 'text-dark'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-4">
        <button
          onClick={toggleLanguage}
          className="bg-dark text-primary px-3 xl:px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform border-2 border-dark neo-shadow-sm text-sm"
        >
          {language === 'en' ? 'TR' : 'EN'}
        </button>

        <Link
          to="/contact"
          className="bg-dark text-primary px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold hover:scale-105 transition-transform neo-shadow-sm text-sm xl:text-base whitespace-nowrap"
        >
          {t('nav.bookViewing')}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="bg-dark text-primary px-3 py-2 rounded-lg font-semibold border-2 border-dark neo-shadow-sm text-sm"
        >
          {language === 'en' ? 'TR' : 'EN'}
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-dark text-primary p-2 rounded-lg border-2 border-dark neo-shadow-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-primary border-b-4 border-dark lg:hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                      isActive(link.path.split('?')[0])
                        ? 'bg-secondary text-white'
                        : 'bg-white text-dark hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg font-semibold bg-dark text-primary text-center neo-shadow-sm"
                >
                  {t('nav.bookViewing')}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
