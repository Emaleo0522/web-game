'use client';

import { useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
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
    <div className="min-h-screen bg-noir-dark">
      <HeroSection />
    </div>
  );
}
