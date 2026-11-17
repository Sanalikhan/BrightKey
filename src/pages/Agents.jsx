import { useLanguage } from '../context/LanguageContext';
import { agents } from '../data/agents';
import { motion } from 'framer-motion';

const Agents = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-tertiary text-white px-[6%] py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-extrabold uppercase mb-4"
        >
          {t('agents.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl"
        >
          {t('agents.subtitle')}
        </motion.p>
      </div>

      {/* Agents Grid */}
      <div className="px-[6%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const name = language === 'en' ? agent.name : agent.nameTr;
            const role = language === 'en' ? agent.role : agent.roleTr;
            const bio = language === 'en' ? agent.bio : agent.bioTr;
            const specialties = language === 'en' ? agent.specialties : agent.specialtiesTr;
            const languages = language === 'en' ? agent.languages : agent.languagesTr;
            const experience = language === 'en' ? agent.experience : agent.experienceTr;

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-3 border-dark rounded-3xl overflow-hidden neo-shadow hover-lift"
              >
                <div
                  className="h-80 bg-cover bg-center bg-gray-300"
                  style={{ backgroundImage: `url(${agent.image})` }}
                />

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold mb-1">{name}</h3>
                  <p className="text-secondary font-semibold mb-4">{role}</p>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{bio}</p>

                  <div className="mb-4">
                    <p className="font-bold text-sm text-gray-600 mb-2">{t('agents.specialties')}:</p>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-primary text-dark px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-bold text-sm text-gray-600 mb-1">{t('agents.languages')}:</p>
                    <p className="text-sm text-gray-700">{languages.join(', ')}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-bold text-sm text-gray-600 mb-1">Experience:</p>
                    <p className="text-sm text-gray-700">{experience}</p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex-1 bg-secondary text-white py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex-1 bg-dark text-primary py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agents;
