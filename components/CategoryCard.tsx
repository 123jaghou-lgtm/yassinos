import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const linkPath = category.slug === 'emplois' ? '/jobs' : (category.slug === 'services-pro' ? '/services' : `/directory/${category.slug}`);

  return (
    <Link to={linkPath} className="group block text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-primary-light text-primary-dark group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
        <i className={`fas ${category.icon} text-3xl`}></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;