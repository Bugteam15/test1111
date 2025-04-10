
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SweepstakesList from '../components/SweepstakesList';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rewards-dark text-rewards-textLight">
      <div className="fixed inset-0 bg-gradient-to-br from-rewards-dark via-rewards-darkBlue to-rewards-dark -z-10 opacity-90"></div>
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <SweepstakesList />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
