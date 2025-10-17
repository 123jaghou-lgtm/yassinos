import React from 'react';
import { JOBS } from '../constants';
import JobCard from '../components/JobCard';

const Jobs: React.FC = () => {
  const approvedJobs = JOBS.filter(job => job.status === 'approved');

  return (
    <div className="text-left">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary dark:text-primary-light">Offres d'emploi</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Découvrez les dernières opportunités professionnelles à Nador.</p>
        </div>
        <button onClick={() => alert('Un formulaire pour ajouter une offre d\'emploi s\'ouvrira ici.')} className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
          <i className="fas fa-plus mr-2"></i>
          Publier une offre
        </button>
      </div>

      <div className="space-y-6">
        {approvedJobs.length > 0 ? (
            approvedJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
        ) : (
            <div className="text-center py-16">
                 <p className="text-xl text-gray-500">Aucune offre d'emploi pour le moment.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;