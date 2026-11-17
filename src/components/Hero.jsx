import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/listings?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-[6%] py-12 md:py-20 bg-secondary text-white items-center min-h-[500px] md:min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-primary text-dark font-extrabold text-xs md:text-sm px-4 md:px-5 py-2 rounded-full mb-4 md:mb-6 uppercase tracking-wider"
        >
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-extrabold mb-4 md:mb-6 uppercase"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden max-w-lg neo-shadow"
        >
          <input
            type="text"
            placeholder={t('hero.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 md:px-6 py-4 md:py-5 text-gray-700 text-sm md:text-base outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-dark text-primary px-6 md:px-8 py-4 md:py-5 font-semibold hover:bg-opacity-90 transition-all text-sm md:text-base"
          >
            {t('hero.search')}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-[20px] md:rounded-[30px] border-3 md:border-4 border-dark bg-cover bg-center transform rotate-3 neo-shadow-lg hover:rotate-0 transition-transform duration-500"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute -left-4 md:-left-7 bottom-6 md:bottom-8 bg-primary text-dark border-3 md:border-4 border-dark rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 font-extrabold text-xl md:text-2xl transform -rotate-4 neo-shadow"
        >
          <small className="block text-xs font-semibold">{t('hero.justListed')}</small>
          $485,000
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
