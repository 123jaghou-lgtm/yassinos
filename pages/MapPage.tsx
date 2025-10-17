import React, { useState } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import { BUSINESSES, CATEGORIES } from '../constants';

const MapPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredBusinesses = activeCategory === 'all'
    ? BUSINESSES
    : BUSINESSES.filter(b => b.categorySlug === activeCategory);

  return (
    <div className="flex flex-col h-[85vh] text-left">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h1 className="text-3xl font-bold text-primary dark:text-primary-light">Carte Interactive de Nador</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Explorez tous les points d'intérêt de la ville. Utilisez les filtres pour affiner votre recherche.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                        activeCategory === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                    Tout
                </button>
                {CATEGORIES.filter(c => c.slug !== 'emplois' && c.slug !== 'services-pro' && c.slug !== 'taxis').map(category => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.slug)}
                         className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            activeCategory === category.slug
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                         <i className={`fas ${category.icon} mr-2`}></i>
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
        <div className="flex-grow w-full rounded-lg shadow-lg overflow-hidden">
            <InteractiveMap businesses={filteredBusinesses} />
        </div>
    </div>
  );
};

export default MapPage;