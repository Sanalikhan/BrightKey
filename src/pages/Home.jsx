import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { properties } from '../data/properties';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useLanguage();
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      <Hero />

      {/* Featured Listings */}
      <section className="px-4 md:px-[6%] py-12 md:py-20 bg-light">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 md:mb-12 uppercase"
        >
          {t('listings.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/listings"
            className="inline-block bg-dark text-primary px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg neo-shadow hover-lift"
          >
            {t('listings.viewAll')}
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-[6%] py-12 md:py-20 bg-tertiary text-white text-center border-t-4 border-dark">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 uppercase"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 px-4"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark px-8 md:px-12 py-4 md:py-5 rounded-xl font-extrabold text-base md:text-lg border-3 border-dark neo-shadow hover-lift"
          >
            {t('cta.button')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
