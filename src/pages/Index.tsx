
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Index;
