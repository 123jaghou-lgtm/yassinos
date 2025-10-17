import React from 'react';
import { NEWS } from '../constants';

const NewsTicker: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-2 px-4 shadow-md rounded-lg overflow-hidden relative">
      <div className="flex items-center">
        <span className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-md mr-4">INFO</span>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap">
            {NEWS.map(item => (
              <span key={item.id} className="mx-8 text-gray-700 dark:text-gray-300">{item.content}</span>
            ))}
             {NEWS.map(item => (
              <span key={`${item.id}-clone`} className="mx-8 text-gray-700 dark:text-gray-300">{item.content}</span>
            ))}
          </div>
        </div>
      </div>
       <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;