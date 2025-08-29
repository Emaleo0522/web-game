'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GameInfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const loreRef = useRef<HTMLDivElement>(null);
  const charactersRef = useRef<HTMLDivElement>(null);
  const gameplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo(loreRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: loreRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(charactersRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: charactersRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(gameplayRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gameplayRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, []);

  return (
    <section id="game-info" ref={sectionRef} className="py-32 relative bg-gradient-to-b from-noir-dark via-purple-900/10 to-noir-dark">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-noir-dark to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-3" />
      <div className="absolute top-32 right-16 w-72 h-72 border border-neon-cyan/5 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 border border-neon-pink/5 rounded-full animate-reverse-spin"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        
        {/* World & Lore */}
        <div ref={loreRef} className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold neon-text-pink mb-8">
              THE WORLD OF 2147
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto opacity-60" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-noir-medium/40 border border-neon-pink/20 rounded-lg p-8 md:p-12 relative">
              <div className="absolute inset-0 venetian-blinds opacity-5 pointer-events-none rounded-lg" />
              
              <div className="relative grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold neon-text-cyan mb-6">
                    Neo-Cyberpunk Dystopia
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                    Humanity lives in mega-cities illuminated by neon lights, where corporations control governments 
                    and information is the most valuable currency.
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    The criminal organization <span className="neon-text-pink">The Phantom Syndicate</span> steals 
                    digital artifacts, quantum keys, and coded memories to manipulate history and erase uncomfortable truths.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold neon-text-cyan mb-6">
                    Your Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                    As a member of the <span className="neon-text-pink">Global Cyber-Detective Agency (AGCD)</span>, 
                    you travel between cities, orbital ports, and hidden networks.
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Follow digital traces and cultural clues left by criminals after their heists. 
                    Their actions can alter economies, erase complete identities, or rewrite historical facts in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characters */}
        <div ref={charactersRef} className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold neon-text-cyan mb-8">
              KEY PLAYERS
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto opacity-60" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Player */}
            <div className="bg-noir-medium/40 border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan/40 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-orbitron font-bold neon-text-cyan mb-2">AGENT_CIPHER</h3>
                <p className="text-xs text-white/60 font-share-tech">YOU</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                New recruit to the AGCD. Equipped with the experimental NeuroScanner device that combines 
                augmented reality with real-time data analysis.
              </p>
            </div>

            {/* Helix */}
            <div className="bg-noir-medium/40 border border-neon-pink/20 rounded-lg p-6 hover:border-neon-pink/40 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-orbitron font-bold neon-text-pink mb-2">HELIX</h3>
                <p className="text-xs text-white/60 font-share-tech">MENTOR AI</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Your assigned artificial intelligence guide. Analyzes clues, provides guidance, 
                and occasionally drops ironic phrases with noir humor.
              </p>
            </div>

            {/* Phantom Queen */}
            <div className="bg-noir-medium/40 border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all lg:col-span-1 md:col-span-2 lg:mx-auto lg:max-w-xs">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="text-lg font-orbitron font-bold text-red-400 mb-2">PHANTOM QUEEN</h3>
                <p className="text-xs text-white/60 font-share-tech">MAIN ANTAGONIST</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Leader of the Phantom Syndicate. Former AGCD agent who defected after discovering hidden secrets. 
                Her goal: rewrite digital history and create "the perfect city."
              </p>
            </div>
          </div>
        </div>

        {/* Gameplay */}
        <div ref={gameplayRef} className="pb-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold neon-text-pink mb-8">
              HOW TO PLAY
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto opacity-60" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="bg-noir-medium/40 border-l-4 border-neon-cyan p-8 rounded-r-lg">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">🔍</span>
                      <h3 className="text-xl font-orbitron font-bold neon-text-cyan">INVESTIGATE</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-base">
                      Scan crime scenes with your NeuroScanner. Find digital witnesses, data traces, 
                      and physical evidence left by the Phantom Syndicate.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="w-32 h-32 bg-neon-cyan/10 border-2 border-neon-cyan/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-4xl">🔬</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-2/3">
                  <div className="bg-noir-medium/40 border-r-4 border-neon-pink p-8 rounded-l-lg">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">✈️</span>
                      <h3 className="text-xl font-orbitron font-bold neon-text-pink">TRAVEL</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-base">
                      Follow clues across mega-cities and hidden networks. Each location offers unique 
                      cultural and digital traces to decode the criminal's next move.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="w-32 h-32 bg-neon-pink/10 border-2 border-neon-pink/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-4xl">🌐</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="bg-noir-medium/40 border-l-4 border-neon-cyan p-8 rounded-r-lg">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">⚡</span>
                      <h3 className="text-xl font-orbitron font-bold neon-text-cyan">CAPTURE</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-base">
                      Race against time to identify patterns, decode the criminal's methods, 
                      and capture the lieutenant before they escape to another zone.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="w-32 h-32 bg-neon-cyan/10 border-2 border-neon-cyan/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-4xl">🎯</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}