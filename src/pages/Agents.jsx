import { useLanguage } from '../context/LanguageContext';
import { agents } from '../data/agents';
import { motion } from 'framer-motion';

const Agents = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-tertiary text-white px-4 md:px-[6%] py-12 md:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-4"
        >
          {t('agents.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl"
        >
          {t('agents.subtitle')}
        </motion.p>
      </div>

      {/* Disclaimer */}
      <div className="px-4 md:px-[6%] pt-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary border-3 border-dark rounded-2xl md:rounded-3xl p-4 md:p-6 neo-shadow mb-8 md:mb-12"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl md:text-3xl flex-shrink-0">⚠️</span>
            <p className="text-dark text-xs md:text-sm leading-relaxed font-medium">
              <strong className="font-extrabold">
                {language === 'en' ? 'Disclaimer: ' : 'Feragatname: '}
              </strong>
              {t('agents.disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Agents Grid */}
      <div className="px-4 md:px-[6%] pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl overflow-hidden neo-shadow hover-lift"
              >
                <div
                  className="h-64 sm:h-72 md:h-80 bg-cover bg-center bg-gray-300"
                  style={{ backgroundImage: `url(${agent.image})` }}
                />

                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-extrabold mb-1">{name}</h3>
                  <p className="text-secondary font-semibold mb-3 md:mb-4 text-sm md:text-base">{role}</p>

                  <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{bio}</p>

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

                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex-1 bg-secondary text-white py-2 md:py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm md:text-base"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex-1 bg-dark text-primary py-2 md:py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm md:text-base"
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
