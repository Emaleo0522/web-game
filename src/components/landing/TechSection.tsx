'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(techRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: techRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-40 relative bg-gradient-to-b from-purple-900/10 via-noir-dark to-red-900/10">
      {/* Tech grid background */}
      <div className="absolute inset-0 cyber-grid opacity-3" />
      
      {/* Circuit board pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-32 h-px bg-neon-cyan/10"></div>
        <div className="absolute top-32 left-32 w-px h-32 bg-neon-cyan/10"></div>
        <div className="absolute top-32 left-64 w-px h-16 bg-neon-pink/10"></div>
        <div className="absolute top-48 left-64 w-48 h-px bg-neon-pink/10"></div>
        <div className="absolute top-48 right-64 w-px h-24 bg-neon-cyan/10"></div>
        <div className="absolute top-72 right-64 w-32 h-px bg-neon-cyan/10"></div>
        <div className="absolute bottom-32 left-48 w-24 h-px bg-neon-pink/10"></div>
        <div className="absolute bottom-32 left-48 w-px h-16 bg-neon-pink/10"></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-neon-cyan/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-neon-pink/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-neon-cyan/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-neon-pink/30 rounded-full animate-pulse delay-300"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div ref={techRef}>
          {/* Section title */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold neon-text-cyan mb-8">
              DETECTIVE TECHNOLOGY
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto opacity-60 mb-8" />
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-share-tech">
              Cutting-edge tools and technology at your disposal in the year 2147. Master these systems to become the ultimate cyber-detective.
            </p>
          </div>

          {/* Main tech showcase */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-noir-medium/40 backdrop-blur-sm border border-neon-cyan/20 rounded-lg p-8 md:p-12 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-pink/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-pink/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="text-8xl mb-6">🧠</div>
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold neon-text-cyan mb-6">
                    NEUROSCANNER INTERFACE
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-share-tech">
                    Your primary investigation tool. This advanced AI system interfaces directly with your neural pathways, 
                    allowing real-time analysis of digital traces, quantum signatures, and behavioral patterns.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-neon-cyan/30">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="text-lg font-orbitron font-bold neon-text-cyan mb-3">QUANTUM ANALYSIS</h4>
                    <p className="text-white/70 text-sm font-share-tech">
                      Decode encrypted data streams and trace quantum signatures left by criminals.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-neon-pink/30">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h4 className="text-lg font-orbitron font-bold neon-text-pink mb-3">PATTERN RECOGNITION</h4>
                    <p className="text-white/70 text-sm font-share-tech">
                      AI-powered system identifies criminal behavior patterns and predicts next moves.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-neon-cyan/30">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h4 className="text-lg font-orbitron font-bold neon-text-cyan mb-3">GLOBAL NETWORK</h4>
                    <p className="text-white/70 text-sm font-share-tech">
                      Connect to AGCD databases and access intel from detective networks worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary tech grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: '💾', title: 'MEMORY CORE', desc: 'Store and replay crime scene data' },
              { icon: '🛡️', title: 'CYBER SHIELD', desc: 'Protection against digital attacks' },
              { icon: '📡', title: 'QUANTUM COMM', desc: 'Secure communication across space' },
              { icon: '⏰', title: 'TIME TRACKER', desc: 'Monitor temporal anomalies' }
            ].map((tech, index) => (
              <div key={index} className="bg-noir-medium/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-neon-pink/30 transition-all duration-500 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h4 className="text-lg font-orbitron font-bold text-white/90 mb-3">{tech.title}</h4>
                <p className="text-white/70 text-sm font-share-tech">{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* System requirements mockup */}
          <div className="bg-noir-medium/40 backdrop-blur-sm border border-neon-pink/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold neon-text-pink mb-6 text-center">
              AGCD SYSTEM REQUIREMENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-orbitron font-bold text-white/90 mb-4">MINIMUM SPECS:</h4>
                <div className="space-y-2 font-share-tech text-sm text-white/70">
                  <div>• Neural Interface 3.0+</div>
                  <div>• Quantum Processor 128-core</div>
                  <div>• 16TB Holographic Storage</div>
                  <div>• Cybernetic Enhancements (Optional)</div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-orbitron font-bold text-white/90 mb-4">RECOMMENDED:</h4>
                <div className="space-y-2 font-share-tech text-sm text-white/70">
                  <div>• Neural Interface 4.2+</div>
                  <div>• Quantum Processor 512-core</div>
                  <div>• 64TB Holographic Storage</div>
                  <div>• Full Cybernetic Suite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}