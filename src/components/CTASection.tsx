
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-rewards-darkBlue/50"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rewards-purple/20 rounded-full filter blur-[80px]"></div>
      <div className="absolute -top-40 -right-20 w-96 h-96 bg-rewards-vibrantPurple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <h2 className="text-3xl font-bold text-gradient">Don't Miss Out!</h2>
        <p className="mt-4 text-lg text-rewards-textMedium max-w-2xl mx-auto">
          Sign up today and start winning exclusive rewards. Join thousands of happy members already participating in our sweepstakes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-rewards-purple sm:w-64 w-full text-white placeholder-white/60"
          />
          <button 
            className="purple-gradient hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(155,135,245,0.3)]"
            onClick={() => {
              console.log('Sign Up Free clicked');
            }}
          >
            Sign Up Free
          </button>
        </div>
        <p className="mt-4 text-sm text-rewards-textGray">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
