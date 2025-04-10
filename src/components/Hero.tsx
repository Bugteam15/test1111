
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background pattern - subtle grid for AI/tech feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92FF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px' 
        }}></div>
      </div>
      
      {/* Futuristic glowing orb effect */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-rewards-purple/30 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-rewards-vibrantPurple/20 rounded-full filter blur-[120px]"></div>
      
      <div className="relative max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in">
          <span className="block text-gradient">Top Sweepstakes</span>
          <span className="block purple-gradient-text mt-2">to Win Big!</span>
        </h1>
        <p className="mt-6 text-xl text-rewards-textMedium max-w-3xl animate-fade-in">
          Enter now for your chance to win amazing prizes like cash, gadgets, and more!
        </p>
        <div className="mt-10 sm:flex justify-center gap-4 animate-fade-in">
          <button 
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-md text-white purple-gradient hover:opacity-90 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={() => {
              console.log('Join Now clicked');
            }}
          >
            Join Now
          </button>
          <button 
            className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center px-8 py-3 rounded-md text-white bg-white/10 border border-white/20 hover:bg-white/15 md:py-4 md:text-lg md:px-10 transition-all duration-300"
            onClick={() => {
              console.log('Learn More clicked');
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
