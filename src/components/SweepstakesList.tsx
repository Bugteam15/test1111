import React from 'react';
import SweepstakesCard from './SweepstakesCard';
import sweepstakesData from '../data/sweepstakes';
const SweepstakesList = () => {
  return <section className="my-0 py-0 px-[6px]">
      <div className="container mx-auto">
        
        
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {sweepstakesData.map(sweepstake => <SweepstakesCard key={sweepstake.id} id={sweepstake.id} title={sweepstake.title} description={sweepstake.description} image={sweepstake.image} endDate={sweepstake.endDate} rating={sweepstake.rating} isPopular={sweepstake.isPopular} disclaimer={sweepstake.disclaimer} />)}
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
    </section>;
};
export default SweepstakesList;