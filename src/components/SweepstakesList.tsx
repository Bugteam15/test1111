
import React from 'react';
import SweepstakesCard from './SweepstakesCard';
import sweepstakesData from '../data/sweepstakes';

const SweepstakesList = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#12142e] to-[#1f1b38]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Top Sweepstakes</h2>
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default SweepstakesList;
