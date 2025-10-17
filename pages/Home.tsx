import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import NewsTicker from '../components/NewsTicker';
import InteractiveMap from '../components/InteractiveMap';
import { CATEGORIES, BUSINESSES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-light mb-4">
          Bienvenue sur Nador Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Votre guide complet de la ville de Nador. Trouvez tout ce dont vous avez besoin, des commerces et services aux opportunités d'emploi.
        </p>
        <SearchBar />
      </section>

      {/* News Ticker Section */}
      <section>
        <NewsTicker />
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Explorer par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {CATEGORIES.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Carte interactive de la ville</h2>
        <div className="h-96 w-full rounded-lg shadow-lg overflow-hidden">
            <InteractiveMap businesses={BUSINESSES} />
        </div>
      </section>
    </div>
  );
};

export default Home;