import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual message is sent)');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
          {t('contact.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl text-dark"
        >
          {t('contact.subtitle')}
        </motion.p>
      </div>

      <div className="px-[6%] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow"
          >
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t('property.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="email"
                placeholder={t('property.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="tel"
                placeholder={t('property.phone')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary"
              />

              <textarea
                placeholder={t('property.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="6"
                required
                className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary resize-none"
              />

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform neo-shadow"
              >
                {t('property.send')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow">
              <h3 className="text-2xl font-bold mb-6">{t('contact.office')}</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-600 mb-1">Address:</p>
                  <p className="text-gray-700">
                    123 Fictional Street<br />
                    Silverton, SV 12345
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-600 mb-1">Email:</p>
                  <a
                    href="mailto:info@brightkey.fictional"
                    className="text-secondary hover:underline"
                  >
                    info@brightkey.fictional
                  </a>
                </div>

                <div>
                  <p className="font-bold text-gray-600 mb-1">Phone:</p>
                  <a
                    href="tel:+15551234567"
                    className="text-secondary hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-dark rounded-3xl p-8 neo-shadow">
              <h3 className="text-2xl font-bold mb-6">{t('contact.hours')}</h3>

              <div className="space-y-2">
                <p className="text-gray-700">{t('contact.weekdays')}</p>
                <p className="text-gray-700">{t('contact.weekends')}</p>
              </div>
            </div>

            <div className="bg-tertiary text-white border-3 border-dark rounded-3xl p-8 neo-shadow">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>

              <div className="flex flex-col gap-3">
                <a
                  href="/listings"
                  className="bg-white text-dark px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                >
                  Browse Properties
                </a>
                <a
                  href="/agents"
                  className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                >
                  Meet Our Agents
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
