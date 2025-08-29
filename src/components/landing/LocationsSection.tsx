'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(locationsRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: locationsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const locations = [
    {
      name: 'NEO TOKYO',
      description: 'Towering skyscrapers pierce neon-soaked clouds. The epicenter of digital crime and corporate espionage.',
      features: ['Holographic Districts', 'Quantum Data Centers', 'Underground Networks'],
      gradient: 'from-pink-500/20 to-purple-600/20'
    },
    {
      name: 'NEW SHANGHAI',
      description: 'Floating platforms above perpetual smog. Where ancient traditions meet cutting-edge cybernetics.',
      features: ['Floating Markets', 'AI Monasteries', 'Memory Banks'],
      gradient: 'from-cyan-500/20 to-blue-600/20'
    },
    {
      name: 'MARS OUTPOST-7',
      description: 'Red planet colony under protective domes. The final frontier for criminals seeking to escape Earth.',
      features: ['Dome Cities', 'Mining Operations', 'Orbital Stations'],
      gradient: 'from-red-500/20 to-orange-600/20'
    },
    {
      name: 'DEEP WEB NEXUS',
      description: 'Virtual reality realm where digital and physical laws bend. The ultimate hiding place for data thieves.',
      features: ['Virtual Worlds', 'Encrypted Vaults', 'AI Guardians'],
      gradient: 'from-green-500/20 to-emerald-600/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-40 relative bg-gradient-to-b from-blue-900/10 via-noir-dark to-purple-900/10">
      {/* Background cityscape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-noir-dark/80 to-transparent">
          {/* Animated city lights */}
          <div className="absolute bottom-12 left-16 w-1 h-3 bg-neon-pink animate-pulse"></div>
          <div className="absolute bottom-8 left-32 w-1 h-2 bg-neon-cyan animate-pulse delay-300"></div>
          <div className="absolute bottom-16 left-48 w-1 h-4 bg-neon-pink animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-64 w-1 h-2 bg-neon-cyan animate-pulse delay-500"></div>
          <div className="absolute bottom-14 right-32 w-1 h-3 bg-neon-pink animate-pulse delay-900"></div>
          <div className="absolute bottom-18 right-16 w-1 h-2 bg-neon-cyan animate-pulse delay-200"></div>
        </div>
      </div>
      
      {/* Cyber elements */}
      <div className="absolute inset-0 cyber-grid opacity-2" />
      <div className="absolute top-40 left-32 w-64 h-64 border border-neon-cyan/5 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 right-32 w-80 h-80 border border-neon-pink/5 rounded-full animate-reverse-spin"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div ref={locationsRef}>
          {/* Section title */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold neon-text-pink mb-8">
              INVESTIGATION ZONES
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto opacity-60 mb-8" />
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-share-tech">
              Track criminals across diverse locations in the cyberpunk world of 2147. Each zone presents unique challenges and opportunities.
            </p>
          </div>

          {/* Locations grid */}
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Location visual */}
                <div className="lg:w-1/2">
                  <div className={`relative bg-gradient-to-br ${location.gradient} backdrop-blur-sm border border-white/10 rounded-lg p-8 h-80 flex items-center justify-center group hover:border-neon-cyan/30 transition-all duration-500`}>
                    {/* Location representation */}
                    <div className="text-center">
                      <div className="text-8xl mb-6 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                        {index === 0 && '🏙️'}
                        {index === 1 && '🌆'}
                        {index === 2 && '🔴'}
                        {index === 3 && '🌐'}
                      </div>
                      <h3 className="text-3xl font-orbitron font-bold neon-text-cyan">
                        {location.name}
                      </h3>
                    </div>
                    
                    {/* Animated elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-neon-pink animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-cyan animate-pulse delay-500"></div>
                    <div className="absolute top-1/2 left-4 w-2 h-2 bg-neon-pink animate-pulse delay-1000"></div>
                  </div>
                </div>

                {/* Location info */}
                <div className="lg:w-1/2">
                  <div className="bg-noir-medium/30 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                    <h3 className={`text-2xl md:text-3xl font-orbitron font-bold mb-6 ${index % 2 === 0 ? 'neon-text-pink' : 'neon-text-cyan'}`}>
                      {location.name}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed text-base md:text-lg mb-8 font-share-tech">
                      {location.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-orbitron font-bold text-white/90 mb-4">KEY FEATURES:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {location.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-neon-pink' : 'bg-neon-cyan'} rounded-full mr-3 animate-pulse`}></div>
                            <span className="text-white/70 font-share-tech">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Investigation difficulty */}
                    <div className="flex items-center justify-between">
                      <span className="font-share-tech text-white/60">DIFFICULTY:</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full ${
                              i < index + 2 
                                ? index % 2 === 0 ? 'bg-neon-pink' : 'bg-neon-cyan'
                                : 'bg-white/20'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}