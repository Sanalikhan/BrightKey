import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sell = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    bedrooms: '',
    price: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Property listing request sent! (This is a demo - no actual request is sent)');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      propertyType: '',
      bedrooms: '',
      price: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-primary px-[6%] py-20 text-center border-b-4 border-dark">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-extrabold text-dark uppercase mb-4"
        >
          {t('nav.sell')} Your Property
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl text-dark"
        >
          Get the best price for your property with our expert agents
        </motion.p>
      </div>

      <div className="px-[6%] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow"
          >
            <h2 className="text-3xl font-bold mb-6">List Your Property</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and one of our agents will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="text"
                placeholder="Property Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              >
                <option value="">Select Property Type</option>
                <option value="apartment">{t('propertyTypes.apartment')}</option>
                <option value="house">{t('propertyTypes.house')}</option>
                <option value="villa">{t('propertyTypes.villa')}</option>
                <option value="condo">{t('propertyTypes.condo')}</option>
                <option value="loft">{t('propertyTypes.loft')}</option>
              </select>

              <input
                type="number"
                placeholder="Number of Bedrooms"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="number"
                placeholder="Expected Price ($)"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <textarea
                placeholder="Additional Information"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary resize-none"
              />

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform neo-shadow"
              >
                Submit Property
              </button>
            </form>
          </motion.div>

          {/* Why Sell With Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow">
              <h3 className="text-2xl font-bold mb-6">Why Sell With Brightkey?</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl">💰</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Best Market Price</h4>
                    <p className="text-gray-600 text-sm">
                      Our market analysis ensures you get the best possible price for your property.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fast Sale</h4>
                    <p className="text-gray-600 text-sm">
                      Average time to sale is 30% faster than market average.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">📸</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Professional Marketing</h4>
                    <p className="text-gray-600 text-sm">
                      HD photography, virtual tours, and premium listings included.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Guidance</h4>
                    <p className="text-gray-600 text-sm">
                      Dedicated agent support throughout the entire selling process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tertiary text-white border-3 border-dark rounded-3xl p-8 neo-shadow">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6">
                Talk to one of our experienced agents to get started.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/agents"
                  className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                >
                  Meet Our Agents
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-dark px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
