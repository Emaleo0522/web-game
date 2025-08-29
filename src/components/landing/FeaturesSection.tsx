'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(featuresRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'NEURAL SCANNER',
      description: 'Advanced AI-powered analysis tool that decodes digital traces and identifies patterns in real-time.',
      color: 'neon-cyan'
    },
    {
      icon: '🌐',
      title: 'GLOBAL NETWORK',
      description: 'Access mega-cities, orbital stations, and hidden networks across the cyberpunk world of 2147.',
      color: 'neon-pink'
    },
    {
      icon: '⚡',
      title: 'QUANTUM TRACES',
      description: 'Follow quantum-encrypted data trails left by criminals across digital and physical realms.',
      color: 'neon-cyan'
    },
    {
      icon: '🎭',
      title: 'DYNAMIC CASES',
      description: 'Procedurally generated mysteries with unique criminals, motives, and sophisticated escape routes.',
      color: 'neon-pink'
    },
    {
      icon: '🔮',
      title: 'TIME PRESSURE',
      description: 'Race against the clock as criminals rewrite history and erase digital evidence in real-time.',
      color: 'neon-cyan'
    },
    {
      icon: '🎯',
      title: 'PRECISION GAMEPLAY',
      description: 'Every decision matters. Analyze clues carefully - one wrong move could let the criminal escape.',
      color: 'neon-pink'
    }
  ];

  return (
    <section ref={sectionRef} className="py-40 relative bg-gradient-to-b from-purple-900/10 via-noir-dark to-blue-900/10">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-2" />
      <div className="absolute top-20 left-1/4 w-px h-64 bg-neon-cyan/10 animate-pulse"></div>
      <div className="absolute top-40 right-1/4 w-px h-48 bg-neon-pink/10 animate-pulse delay-500"></div>
      <div className="absolute bottom-20 left-1/3 w-px h-32 bg-neon-cyan/10 animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-20 w-8 h-8 border border-neon-pink/10 rotate-45 animate-float"></div>
      <div className="absolute top-64 right-32 w-6 h-6 border border-neon-cyan/10 rotate-45 animate-float delay-700"></div>
      <div className="absolute bottom-48 left-1/2 w-4 h-4 border border-neon-pink/10 rotate-45 animate-float delay-300"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div ref={featuresRef}>
          {/* Section title */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold neon-text-cyan mb-8">
              GAME FEATURES
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto opacity-60 mb-8" />
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-share-tech">
              Experience cutting-edge detective gameplay in a world where technology and crime collide
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-noir-medium/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-neon-cyan/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full border-2 border-${feature.color}/30 bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:border-${feature.color}/60 transition-all duration-500`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-xl font-orbitron font-bold neon-text-${feature.color === 'neon-cyan' ? 'cyan' : 'pink'} mb-4`}>
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm font-share-tech">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <div className="bg-noir-medium/40 border border-neon-pink/20 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold neon-text-pink mb-4">
                READY TO JOIN THE AGCD?
              </h3>
              <p className="text-white/70 font-share-tech mb-6">
                The Phantom Syndicate won&apos;t wait. Every second counts in the fight to preserve digital history.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open('/game', '_blank')}
                  className="px-8 py-3 bg-neon-pink text-noir-dark font-orbitron font-bold rounded-lg hover:bg-neon-cyan transition-colors duration-300 shadow-lg shadow-neon-pink/30 hover:shadow-neon-cyan/30"
                >
                  <span className="flex items-center">
                    <span className="mr-3">🚀</span>
                    START YOUR MISSION
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}