import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary text-white px-[6%] py-20 text-center border-b-4 border-dark">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-extrabold uppercase mb-4"
        >
          {t('about.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl"
        >
          {t('about.subtitle')}
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="px-[6%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow"
          >
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-3xl font-extrabold mb-4">{t('about.mission')}</h2>
            <p className="text-gray-700 leading-relaxed">
              At Brightkey, our mission is to simplify the real estate journey for everyone.
              We believe finding your dream home should be exciting, not stressful. Our platform
              connects buyers, sellers, and renters with trusted professionals who truly care
              about their success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl font-extrabold mb-4">{t('about.vision')}</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where property transactions are transparent, efficient, and
              accessible to all. Through innovative technology and personalized service, we're
              building the future of real estate—one happy homeowner at a time.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-3 border-dark rounded-3xl p-12 neo-shadow mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-center uppercase">
            {t('about.values')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in every transaction.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-600">
                Your goals are our goals. We work together to achieve success.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology to provide the best experience possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '5,000+', label: 'Properties Sold' },
            { number: '3,200+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Expert Agents' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary border-3 border-dark rounded-3xl p-6 text-center neo-shadow"
            >
              <p className="text-4xl font-extrabold text-dark mb-2">{stat.number}</p>
              <p className="text-dark font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-tertiary text-white border-3 border-dark rounded-3xl p-12 text-center neo-shadow"
        >
          <h2 className="text-4xl font-extrabold mb-4 uppercase">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Let our expert team help you find your dream property today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/listings"
              className="bg-primary text-dark px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform neo-shadow-sm"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="bg-white text-dark px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform neo-shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
