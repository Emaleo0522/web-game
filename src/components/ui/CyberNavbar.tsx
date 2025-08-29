'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function CyberNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'PROTOCOL', href: '#protocol' },
    { name: 'MISSIONS', href: '#missions' },
    { name: 'INTEL', href: '#intel' },
    { name: 'DEPLOY', href: '/game' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > window.innerHeight * 0.8; // Aparece al 80% del viewport

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);
        
        if (shouldShow) {
          // Animación de entrada con efecto glitch
          gsap.fromTo('.cyber-navbar', 
            { 
              y: -100, 
              opacity: 0,
              skewX: 5 
            },
            { 
              y: 0, 
              opacity: 1, 
              skewX: 0,
              duration: 0.6,
              ease: 'power2.out'
            }
          );
          
          // Efecto de glitch en los elementos del menú
          gsap.fromTo('.nav-item', 
            { 
              opacity: 0,
              x: -20,
              rotateY: 45
            },
            { 
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 0.2
            }
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <nav className="cyber-navbar fixed top-0 left-0 right-0 z-50 bg-noir-dark/90 backdrop-blur-md border-b border-neon-cyan/20">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/5 to-transparent opacity-50" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Scanline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-cyan animate-pulse" />
      
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-neon-pink/20 border border-neon-pink/40 rounded-sm flex items-center justify-center">
              <span className="text-neon-pink text-sm font-bold">◆</span>
            </div>
            <div className="text-neon-pink font-orbitron font-bold text-lg tracking-wider">
              MIDNIGHT
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item group relative px-3 py-2 text-white/80 hover:text-neon-cyan font-share-tech text-sm tracking-wide transition-all duration-300 transform hover:scale-105"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-neon-cyan/10 rounded border border-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                
                {/* Text with glitch effect on hover */}
                <span className="relative z-10 group-hover:animate-pulse">
                  {item.name}
                </span>
                
                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
                
                {/* Side indicators */}
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-px h-0 bg-neon-pink group-hover:h-4 transition-all duration-300" />
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-px h-0 bg-neon-pink group-hover:h-4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              <span className="text-white/60 font-share-tech text-xs">ONLINE</span>
            </div>
            
            {/* Terminal icon */}
            <div className="w-8 h-8 border border-neon-cyan/30 rounded bg-noir-medium/50 flex items-center justify-center hover:border-neon-cyan/60 transition-colors cursor-pointer">
              <span className="text-neon-cyan text-xs">⚡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glitch line */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        .cyber-navbar {
          box-shadow: 0 4px 20px rgba(0, 255, 128, 0.1);
        }
        
        .cyber-navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 0, 128, 0.05) 20%, 
            transparent 40%,
            rgba(0, 255, 128, 0.05) 60%,
            transparent 80%,
            rgba(255, 0, 128, 0.05) 100%
          );
          animation: cyber-sweep 3s ease-in-out infinite;
        }
        
        @keyframes cyber-sweep {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </nav>
  );
}