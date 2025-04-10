
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-[#191c35]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Don't Miss Out!</h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Sign up today and start winning exclusive rewards.
        </p>
        <button 
          className="mt-6 bg-rewards-red hover:bg-rewards-redDark text-white font-bold py-3 px-8 rounded-full w-44 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => {
            console.log('Sign Up Free clicked');
          }}
        >
          Sign Up Free
        </button>
      </div>
    </section>
  );
};

export default CTASection;
