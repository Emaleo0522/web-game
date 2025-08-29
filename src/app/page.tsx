'use client';

import { useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import BlankSection from '@/components/landing/BlankSection';
import CyberNavbar from '@/components/ui/CyberNavbar';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <>
      <CyberNavbar />
      <div className="min-h-screen bg-noir-dark">
        <section id="home">
          <HeroSection />
        </section>
        <BlankSection />
      </div>
    </>
  );
}
