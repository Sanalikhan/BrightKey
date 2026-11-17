import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';

const PropertyDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const property = properties.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Property not found</h2>
          <Link to="/listings" className="text-secondary underline">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'en' ? property.title : property.titleTr;
  const location = language === 'en' ? property.location : property.locationTr;
  const description = language === 'en' ? property.description : property.descriptionTr;
  const features = language === 'en' ? property.features : property.featuresTr;

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual message is sent)');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Image Gallery */}
      <div className="bg-dark px-4 md:px-[6%] py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-3 md:mb-4"
        >
          <img
            src={property.images[selectedImage]}
            alt={title}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-xl md:rounded-2xl border-3 md:border-4 border-primary neo-shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {property.images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`${title} ${index + 1}`}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
              className={`h-20 sm:h-24 md:h-32 object-cover rounded-lg md:rounded-xl cursor-pointer border-2 md:border-3 ${
                selectedImage === index ? 'border-primary' : 'border-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-[6%] py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Property Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl p-6 md:p-8 neo-shadow mb-6 md:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4">{title}</h1>
              <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6">
                {location}, {property.city} · {property.postcode}
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">{t('listings.bedrooms')}</p>
                  <p className="text-xl md:text-2xl font-bold">{property.bedrooms > 0 ? property.bedrooms : 'Studio'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">Bathrooms</p>
                  <p className="text-xl md:text-2xl font-bold">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">Area</p>
                  <p className="text-xl md:text-2xl font-bold">{property.area} sqft</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">Type</p>
                  <p className="text-xl md:text-2xl font-bold capitalize">{property.type}</p>
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                  ${property.price.toLocaleString()}
                </h2>
              </div>

              <div className="border-t-2 border-gray-200 pt-4 md:pt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('property.overview')}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{description}</p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl p-6 md:p-8 neo-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('property.features')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl p-6 md:p-8 neo-shadow lg:sticky lg:top-24"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('property.schedule')}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={t('property.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary text-sm md:text-base"
                />

                <input
                  type="email"
                  placeholder={t('property.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary text-sm md:text-base"
                />

                <input
                  type="tel"
                  placeholder={t('property.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary text-sm md:text-base"
                />

                <textarea
                  placeholder={t('property.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  required
                  className="w-full px-4 py-3 border-2 border-dark rounded-lg outline-none focus:border-secondary resize-none text-sm md:text-base"
                />

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:scale-105 transition-transform neo-shadow"
                >
                  {t('property.send')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 uppercase">
              {t('property.similarProperties')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similarProperties.map((prop, index) => (
                <PropertyCard key={prop.id} property={prop} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
