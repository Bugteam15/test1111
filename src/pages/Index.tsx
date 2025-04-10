
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SweepstakesList from '../components/SweepstakesList';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main>
        <SweepstakesList />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
