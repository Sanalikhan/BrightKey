import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';

const Listings = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    let result = [...properties];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.city.toLowerCase().includes(searchLower) ||
          p.postcode.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type) {
      result = result.filter((p) => p.type === filters.type);
    }

    // Price filter
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= parseInt(filters.maxPrice));
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms >= parseInt(filters.bedrooms));
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'bedrooms') {
      result.sort((a, b) => b.bedrooms - a.bedrooms);
    }

    setFilteredProperties(result);
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
    });
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-secondary text-white px-4 md:px-[6%] py-12 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-4"
        >
          {t('nav.buy')} Properties
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg"
        >
          {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} available
        </motion.p>
      </div>

      <div className="px-4 md:px-[6%] py-8 md:py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-3 border-dark rounded-2xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-12 neo-shadow"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 mb-4">
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="px-4 py-3 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary text-sm md:text-base"
            />

            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="px-4 py-3 pr-10 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27currentColor%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3e%3cpolyline%20points=%276%209%2012%2015%2018%209%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat text-sm md:text-base"
            >
              <option value="">{t('listings.propertyType')}</option>
              <option value="apartment">{t('propertyTypes.apartment')}</option>
              <option value="house">{t('propertyTypes.house')}</option>
              <option value="villa">{t('propertyTypes.villa')}</option>
              <option value="condo">{t('propertyTypes.condo')}</option>
              <option value="loft">{t('propertyTypes.loft')}</option>
            </select>

            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="px-4 py-3 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary text-sm md:text-base"
            />

            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="px-4 py-3 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary text-sm md:text-base"
            />

            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="px-4 py-3 pr-10 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27currentColor%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3e%3cpolyline%20points=%276%209%2012%2015%2018%209%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat text-sm md:text-base"
            >
              <option value="">{t('listings.bedrooms')}</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 pr-10 border-2 border-dark rounded-lg font-medium outline-none focus:border-secondary appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27currentColor%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3e%3cpolyline%20points=%276%209%2012%2015%2018%209%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat text-sm md:text-base"
            >
              <option value="featured">{t('listings.sortBy')}: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="bedrooms">Bedrooms</option>
            </select>
          </div>

          <button
            onClick={clearFilters}
            className="bg-tertiary text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform text-sm md:text-base"
          >
            {t('listings.clear')} {t('listings.filters')}
          </button>
        </motion.div>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-3xl font-bold text-gray-600 mb-4">No properties found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters</p>
            <button
              onClick={clearFilters}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform neo-shadow"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Listings;
