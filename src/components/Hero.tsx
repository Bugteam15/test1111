import React from 'react';
const Hero = () => {
  return <section className="relative overflow-hidden py-20">
      {/* Background pattern - subtle grid for AI/tech feel */}
      <div className="absolute inset-0 opacity-10">
        <div style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92FF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} className="absolute inset-0 my-0"></div>
      </div>
      
      {/* Futuristic glowing orb effect */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-rewards-purple/30 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-rewards-vibrantPurple/20 rounded-full filter blur-[120px]"></div>
      
      <div className="relative max-w-7xl pt-16 pb-12 px-4 sm:px-6 flex flex-col items-center text-center lg:px-0 py-0 mx-[800px] my-px">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in">
          <span className="block text-gradient text-7xl font-bold text-violet-400 text-center">Top Text To Speech-OpenAI</span>
          <span className="block purple-gradient-text mt-2 text-teal-600 text-center">April 2025</span>
        </h1>
        <p className="mt-6 text-xl text-rewards-textMedium max-w-3xl animate-fade-in text-center">Our mission is to connect you with top-rated AI text-to-speech tools. Turn text into lifelike voices and dive in today!

      </p>
        <div className="mt-10 sm:flex justify-center gap-4 animate-fade-in">
          
          
        </div>
      </div>
    </section>;
};
export default Hero;