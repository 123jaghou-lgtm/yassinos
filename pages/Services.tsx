import React from 'react';
import { SERVICES } from '../constants';
import StarRating from '../components/StarRating';

const Services: React.FC = () => {
  return (
    <div className="text-left">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-primary dark:text-primary-light">Services Professionnels</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Besoin d'un plombier, électricien ou menuisier ? Trouvez des professionnels qualifiés ici.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
            <img className="w-full h-56 object-cover" src={service.image} alt={service.name} />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
              <p className="text-md text-secondary font-semibold mb-2">{service.profession}</p>
              <div className="flex justify-center mb-4">
                 <StarRating rating={service.rating} />
              </div>
              <div className="flex flex-col space-y-2">
                <a href={`tel:${service.phone}`} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i> Appeler maintenant
                </a>
                {service.whatsapp && (
                    <a href={`https://wa.me/${service.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                        <i className="fab fa-whatsapp mr-2"></i> Contacter sur WhatsApp
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;