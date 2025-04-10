
import React from 'react';
import SweepstakesCard from './SweepstakesCard';
import sweepstakesData from '../data/sweepstakes';

const SweepstakesList = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Sweepstakes</h2>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
              <option>Sort by: Featured</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Ending Soon</option>
            </select>
            <button className="border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
              Filter
            </button>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {sweepstakesData.map((sweepstake) => (
            <SweepstakesCard
              key={sweepstake.id}
              id={sweepstake.id}
              title={sweepstake.title}
              description={sweepstake.description}
              image={sweepstake.image}
              endDate={sweepstake.endDate}
              rating={sweepstake.rating}
              isPopular={sweepstake.isPopular}
              disclaimer={sweepstake.disclaimer}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-l-md hover:bg-indigo-700">1</a>
            <a href="#" className="py-2 px-4 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">2</a>
            <a href="#" className="py-2 px-4 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">3</a>
            <a href="#" className="py-2 px-4 bg-white text-gray-700 text-sm font-medium rounded-r-md hover:bg-gray-50">Next</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SweepstakesList;
