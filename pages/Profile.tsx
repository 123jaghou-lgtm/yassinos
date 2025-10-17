import React from 'react';
import { MOCK_USER, BUSINESSES, JOBS } from '../constants';
import BusinessCard from '../components/BusinessCard';
import JobCard from '../components/JobCard';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  
  // Note: Favorites and posts are still using mock data.
  // This would be replaced with data fetched from Firestore for the currentUser.
  const user = MOCK_USER;
  const favoriteBusinesses = BUSINESSES.filter(b => user.favorites.includes(b.id));
  const userJobs = JOBS.filter(job => job.id === user.posts[0]?.id);

  if (!currentUser) {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Veuillez vous connecter</h2>
            <p className="text-gray-600 dark:text-gray-400">Vous devez être connecté pour voir cette page.</p>
        </div>
    );
  }

  return (
    <div className="space-y-8 text-left">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
        <img 
          src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}&background=0D8ABC&color=fff`} 
          alt={currentUser.displayName || 'Utilisateur'} 
          className="w-32 h-32 rounded-full ring-4 ring-primary dark:ring-primary-light" 
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{currentUser.displayName || 'Nouvel utilisateur'}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">{currentUser.email}</p>
          <button className="mt-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-lg">
            Modifier le profil
          </button>
        </div>
      </div>

      {/* Favorites Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Vos favoris (données démo)</h2>
        {favoriteBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Vous n'avez pas encore de favoris.</p>
        )}
      </div>

      {/* User Posts Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Vos publications (données démo)</h2>
        {userJobs.length > 0 ? (
          <div className="space-y-4">
            {userJobs.map(job => (
              <div key={job.id} className="relative">
                <JobCard job={job} />
                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full text-white ${job.status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  {job.status === 'pending' ? 'En attente' : 'Approuvé'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Vous n'avez aucune publication.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;