import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const PropertyCard = ({ property, index = 0 }) => {
  const { t, language } = useLanguage();

  const title = language === 'en' ? property.title : property.titleTr;
  const location = language === 'en' ? property.location : property.locationTr;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/property/${property.id}`}>
        <div className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl overflow-hidden neo-shadow hover-lift cursor-pointer">
          <div
            className="h-48 sm:h-56 md:h-60 bg-cover bg-center border-b-3 border-dark"
            style={{ backgroundImage: `url(${property.image})` }}
          />

          <div className="p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-extrabold text-dark mb-2">{title}</h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
              {property.bedrooms > 0 ? `${property.bedrooms} ${t('listings.bed')}` : 'Studio'} · {property.bathrooms} {t('listings.bath')} · {location}
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-secondary">
              ${property.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
