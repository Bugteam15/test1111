
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 h-[600px] w-full bg-gradient-to-r from-rewards-green to-rewards-blue flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
        Top Sweepstakes to Win Big!
      </h1>
      <p className="text-lg md:text-xl text-white mt-5 max-w-3xl">
        Enter now for your chance to win amazing prizes like cash, gadgets, and more!
      </p>
      <button 
        className="mt-8 bg-rewards-orange hover:bg-rewards-orangeDark text-white font-bold py-3 px-8 rounded-full w-48 transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => {
          // This would typically open a sign-up modal
          console.log('Join Now clicked');
        }}
      >
        Join Now
      </button>
    </section>
  );
};

export default Hero;
