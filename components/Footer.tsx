import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nador Connect. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-2">
            <Link to="#" className="hover:text-primary">À propos</Link>
            <Link to="#" className="hover:text-primary">Contactez-nous</Link>
            <Link to="#" className="hover:text-primary">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;