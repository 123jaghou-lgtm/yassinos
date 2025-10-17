import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BUSINESSES, CATEGORIES } from '../constants';
import { Business } from '../types';
import BusinessCard from '../components/BusinessCard';

const Directory: React.FC = () => {
  const { categorySlug } = useParams();
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const currentCategory = CATEGORIES.find(c => c.slug === categorySlug);

  useEffect(() => {
    let businesses = BUSINESSES.filter(b => b.categorySlug === categorySlug);
    if (searchTerm) {
      businesses = businesses.filter(b => 
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredBusinesses(businesses);
  }, [categorySlug, searchTerm]);

  if (!currentCategory) {
    return <div className="text-center text-red-500 text-2xl">Catégorie non trouvée.</div>;
  }

  return (
    <div className="text-left">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-primary dark:text-primary-light mb-2 flex items-center">
            <i className={`fas ${currentCategory.icon} mr-4`}></i>
            {currentCategory.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
            Trouvez les meilleurs {currentCategory.name.toLowerCase()} à Nador.
        </p>
        <div className="mt-4">
             <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Rechercher dans ${currentCategory.name}...`}
              className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-light dark:focus:border-primary-light"
            />
        </div>
      </div>
      
      {filteredBusinesses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Aucun résultat trouvé dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default Directory;