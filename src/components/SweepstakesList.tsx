
import React from 'react';
import SweepstakesCard from './SweepstakesCard';
import sweepstakesData from '../data/sweepstakes';

const SweepstakesList = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">Top Sweepstakes</h2>
          <div className="flex items-center space-x-4">
            <select className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-rewards-purple">
              <option>Sort by: Featured</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Ending Soon</option>
            </select>
            <button className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-rewards-purple text-sm transition-colors duration-200">
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
          <nav className="inline-flex rounded-md shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <a href="#" className="py-2 px-4 purple-gradient text-white text-sm font-medium rounded-l-md hover:opacity-90 transition-opacity duration-200">1</a>
            <a href="#" className="py-2 px-4 bg-white/10 text-white text-sm font-medium hover:bg-white/15 transition-colors duration-200">2</a>
            <a href="#" className="py-2 px-4 bg-white/10 text-white text-sm font-medium hover:bg-white/15 transition-colors duration-200">3</a>
            <a href="#" className="py-2 px-4 bg-white/10 text-white text-sm font-medium rounded-r-md hover:bg-white/15 transition-colors duration-200">Next</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SweepstakesList;
