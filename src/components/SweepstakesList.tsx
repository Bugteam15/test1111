
import React from 'react';
import SweepstakesCard from './SweepstakesCard';
import sweepstakesData from '../data/sweepstakes';

const SweepstakesList = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Current Sweepstakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {sweepstakesData.map((sweepstake) => (
            <SweepstakesCard
              key={sweepstake.id}
              id={sweepstake.id}
              title={sweepstake.title}
              description={sweepstake.description}
              image={sweepstake.image}
              endDate={sweepstake.endDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweepstakesList;
