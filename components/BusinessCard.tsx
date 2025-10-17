import React from 'react';
import { Business } from '../types';
import StarRating from './StarRating';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={business.image} alt={business.name} />
        {business.isPharmacyOnDuty && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">DE GARDE</span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{business.name}</h3>
        <div className="flex items-center mb-2">
          <StarRating rating={business.rating} />
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({business.reviews.length} avis)</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1"><i className="fas fa-map-marker-alt mr-2 text-secondary"></i>{business.address}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1"><i className="fas fa-phone mr-2 text-secondary"></i>{business.phone}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4"><i className="fas fa-clock mr-2 text-secondary"></i>{business.workingHours}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <a href={`https://www.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Voir sur la carte</a>
          <button onClick={() => setIsFavorite(!isFavorite)} className="text-2xl text-gray-400 hover:text-red-500 focus:outline-none">
            <i className={`fas fa-heart ${isFavorite ? 'text-red-500' : ''}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;