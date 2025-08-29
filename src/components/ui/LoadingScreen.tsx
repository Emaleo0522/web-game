'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('SYSTEM INITIALIZATION...');
  const [showSuccess, setShowSuccess] = useState(false);
  const [spinnerFrame, setSpinnerFrame] = useState(0);

  const loadingTexts = [
    'SYSTEM INITIALIZATION...',
    'LOADING COMPONENTS...',
    'CONNECTING TO SERVER...',
    'DOWNLOADING RESOURCES...',
    'SYNCHRONIZING DATA...',
    'CALIBRATING INTERFACE...',
    'ACCESSING DATABASE...',
    'LOADING ASSETS...',
    'ESTABLISHING CONNECTION...'
  ];

  const spinnerFrames = ["/", "-", "\\", "|"];
  const maxCharacters = 24;
  const unloadedCharacter = ".";
  const loadedCharacter = "#";

  useEffect(() => {
    let progressValue = 0;
    let currentIndex = 0;
    let loadingBar = new Array(maxCharacters).fill(unloadedCharacter);

    // Spinner animation
    const spinnerInterval = setInterval(() => {
      setSpinnerFrame(prev => (prev + 1) % spinnerFrames.length);
    }, 150 + Math.random() * 200);

    const progressInterval = setInterval(() => {
      progressValue += Math.random() * 6 + 3;
      
      const newProgress = Math.min(progressValue, 100);
      setProgress(newProgress);

      // Update loading bar
      const loadedCount = Math.floor((newProgress / 100) * maxCharacters);
      loadingBar = new Array(maxCharacters).fill(unloadedCharacter);
      for (let i = 0; i < loadedCount; i++) {
        loadingBar[i] = loadedCharacter;
      }

      // Update loading text
      const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
      if (textIndex !== currentIndex && textIndex < loadingTexts.length) {
        currentIndex = textIndex;
        setCurrentText(loadingTexts[textIndex]);
      }

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        clearInterval(spinnerInterval);
        
        // Show success message
        setTimeout(() => {
          setShowSuccess(true);
          setCurrentText('INITIALIZATION SUCCESSFUL');
          
          // Complete loading after success animation
          setTimeout(() => {
            onLoadComplete();
          }, 1200);
        }, 500);
      }
    }, 100 + Math.random() * 150);

    // Animate scan lines and glitch effects
    const terminal = document.querySelector('.terminal-container');
    
    if (terminal) {
      // Apply glitch animation
      gsap.to(terminal, {
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        x: () => Math.random() * 4 - 2,
        y: () => Math.random() * 2 - 1,
        ease: 'power2.inOut'
      });
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(spinnerInterval);
    };
  }, [onLoadComplete, loadingTexts, spinnerFrames.length]);

  const renderLoadingBar = () => {
    const loadedCount = Math.floor((progress / 100) * maxCharacters);
    const loaded = Array(loadedCount).fill(loadedCharacter).join('');
    const unloaded = Array(maxCharacters - loadedCount).fill(unloadedCharacter).join('');
    
    return (
      <div className="font-mono">
        ({loaded}<span className="text-white/30">{unloaded}</span>)
      </div>
    );
  };

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Background noise texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0">
        <div className="scanline absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent animate-pulse" />
      </div>

      {/* Terminal container with glitch effect */}
      <div className="terminal-container relative">
        {/* Loading content - no box */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl font-orbitron font-black neon-text-pink mb-4 animate-neon-pulse">
              LOADING
            </div>
          </div>

          {/* Spinner */}
          {!showSuccess && (
            <div className="text-center">
              <span className="font-mono text-2xl neon-text-cyan">
                [{spinnerFrames[spinnerFrame]}]
              </span>
            </div>
          )}

          {/* Status text */}
          <div className="text-center">
            {showSuccess ? (
              <div className="text-neon-cyan font-orbitron font-bold text-lg animate-neon-pulse">
                &lt; INITIALIZATION SUCCESSFUL &gt;
              </div>
            ) : (
              <div>
                <div className="text-neon-pink font-orbitron font-bold text-lg">
                  &lt; SYSTEM INITIALIZATION &gt;
                </div>
                <div className="text-xs font-share-tech text-white/70 mt-2">
                  {currentText}
                </div>
                <div className="text-xs font-share-tech text-white/70 mt-1">
                  PROCESS: <span className="neon-text-cyan">{Math.round(progress)}</span>%
                </div>
                <div className="mt-3 text-neon-cyan font-share-tech">
                  {renderLoadingBar()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scanline {
          animation: scanline 6s linear infinite;
        }
        
        @keyframes scanline {
          0.01% { transform: translateY(-100%); }
          99.99% { transform: translateY(100vh); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
}