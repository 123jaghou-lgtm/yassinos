import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-primary dark:border-primary-light text-left">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-primary dark:text-primary-light">{job.title}</h3>
          <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{job.company}</p>
          <span className="text-sm bg-secondary text-white px-2 py-1 rounded-full mt-1 inline-block">{job.category}</span>
        </div>
        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
          <p>{job.postedDate}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-4">{job.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          <i className="fas fa-envelope mr-2 text-secondary"></i>
          Contact : <strong>{job.contact}</strong>
        </p>
      </div>
    </div>
  );
};

export default JobCard;