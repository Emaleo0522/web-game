'use client';

import { useState, useEffect } from 'react';
import HUD from '@/components/game/HUD';
import NeonButton from '@/components/ui/NeonButton';
import { GameState } from '@/types/game';

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>({
    player: {
      id: 'agent-001',
      name: 'AGENT_CIPHER',
      rank: 'DETECTIVE',
      stats: {
        casesCompleted: 12,
        accuracy: 89,
        averageTime: 1800,
        bestScore: 15000
      },
      inventory: ['NeuroScanner', 'Quantum Analyzer', 'Secure Comm'],
      currentLocation: 'NEO TOKYO',
      energy: 85,
      credits: 2500
    },
    currentCase: {
      id: 'case-001',
      title: 'THE PHANTOM PROTOCOL',
      description: 'Phantom Queen has stolen classified quantum encryption codes from the Global Defense Network. Track her digital footprint across mega-cities before she can rewrite history itself.',
      difficulty: 4,
      stolenItem: 'Quantum Encryption Codes',
      criminalId: 'phantom-queen',
      startLocation: 'NEO TOKYO',
      targetLocation: 'UNKNOWN',
      clues: [],
      timeLimit: 3600,
      maxMoves: 15
    },
    isGameActive: true,
    timeRemaining: 3542,
    movesUsed: 3,
    score: 7500,
    foundClues: ['digital-trace-001', 'witness-tokyo-001', 'helix-analysis-001'],
    visitedLocations: ['NEO TOKYO', 'CYBER DISTRICT'],
    currentPhase: 'investigation'
  });

  const [gamePhase, setGamePhase] = useState<'menu' | 'briefing' | 'gameplay'>('menu');
  const [showMap, setShowMap] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showDossier, setShowDossier] = useState(false);

  // Simulate countdown timer
  useEffect(() => {
    if (gamePhase === 'gameplay') {
      const timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeRemaining: Math.max(0, prev.timeRemaining - 1)
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gamePhase]);

  if (gamePhase === 'menu') {
    return (
      <div className="min-h-screen bg-noir-dark relative overflow-hidden">
        {/* Background effects */}
        <div className="fixed inset-0 cyber-grid opacity-15" />
        <div className="fixed inset-0 bg-noir-gradient opacity-70" />
        <div className="fixed inset-0 venetian-blinds opacity-20" />
        
        {/* Main Menu */}
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center max-w-2xl mx-auto px-8">
            
            {/* Title */}
            <div className="mb-12">
              <h1 className="text-6xl font-orbitron font-black neon-text-pink mb-4 animate-neon-pulse">
                DETECTIVE
              </h1>
              <h2 className="text-4xl font-orbitron font-bold neon-text-cyan">
                NEON NOIR
              </h2>
              <div className="text-lg font-share-tech mt-4 text-white/60">
                AGCD TERMINAL ACCESS
              </div>
            </div>

            {/* Agent Status */}
            <div className="bg-noir-medium/80 border-2 border-neon-cyan/30 rounded-lg p-6 mb-8 relative">
              <div className="absolute inset-0 venetian-blinds opacity-10 pointer-events-none rounded-lg" />
              
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-share-tech neon-text-cyan font-bold">
                      WELCOME, {gameState.player.name}
                    </h3>
                    <p className="text-white/70 font-share-tech">
                      RANK: {gameState.player.rank} | CLEARANCE: LEVEL-7
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-white/60">CASES SOLVED</div>
                    <div className="neon-text-pink font-bold text-lg">
                      {gameState.player.stats.casesCompleted}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/60">ACCURACY</div>
                    <div className="neon-text-cyan font-bold text-lg">
                      {gameState.player.stats.accuracy}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-4">
              <NeonButton 
                variant="pink" 
                size="lg" 
                onClick={() => setGamePhase('briefing')}
                className="w-full text-xl py-6"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">🎯</span>
                  START NEW CASE
                </span>
              </NeonButton>
              
              <NeonButton 
                variant="outline-cyan" 
                size="lg" 
                className="w-full text-lg py-4"
                disabled
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">💾</span>
                  LOAD SAVED CASE [COMING SOON]
                </span>
              </NeonButton>
              
              <NeonButton 
                variant="outline-pink" 
                size="lg" 
                className="w-full text-lg py-4"
                disabled
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">🏆</span>
                  CASE ARCHIVES [COMING SOON]
                </span>
              </NeonButton>

              <NeonButton 
                variant="outline-cyan" 
                size="md" 
                onClick={() => window.close()}
                className="w-full text-base py-3 mt-8"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">↩️</span>
                  EXIT TO MAIN SITE
                </span>
              </NeonButton>
            </div>

            {/* Helix AI Status */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-noir-light/50 border border-neon-pink/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-neon-pulse mr-2" />
                <span className="font-share-tech text-sm text-white/70">
                  HELIX.AI STATUS: ONLINE
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* System info */}
        <div className="absolute bottom-4 left-4 font-share-tech text-xs text-white/40">
          <div>AGCD SECURE TERMINAL v2147.8.28</div>
          <div>QUANTUM ENCRYPTION: ACTIVE</div>
        </div>

        <div className="absolute bottom-4 right-4 font-share-tech text-xs text-white/40 text-right">
          <div className="neon-text-pink">⚠️ CLASSIFIED ACCESS</div>
          <div>GLOBAL CYBER-DETECTIVE AGENCY</div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-noir-dark relative overflow-hidden">
        {/* Background effects */}
        <div className="fixed inset-0 cyber-grid opacity-10" />
        <div className="fixed inset-0 bg-noir-gradient opacity-60" />
        
        {/* Case Briefing */}
        <div className="flex items-center justify-center min-h-screen relative z-10 px-8">
          <div className="max-w-4xl w-full">
            
            <div className="text-center mb-8">
              <h2 className="text-4xl font-orbitron font-bold neon-text-pink mb-4">
                MISSION BRIEFING
              </h2>
              <div className="text-lg font-share-tech neon-text-cyan">
                CASE FILE: {gameState.currentCase?.id?.toUpperCase()}
              </div>
            </div>

            <div className="bg-noir-medium/80 border-2 border-neon-pink/30 rounded-lg p-8 mb-8 relative">
              <div className="absolute inset-0 venetian-blinds opacity-10 pointer-events-none rounded-lg" />
              
              <div className="relative">
                <h3 className="text-3xl font-orbitron font-bold neon-text-cyan mb-6 text-center">
                  {gameState.currentCase?.title}
                </h3>
                
                <div className="space-y-6 text-white/90">
                  <p className="text-lg leading-relaxed">
                    {gameState.currentCase?.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-2 border-neon-cyan/20 rounded-lg bg-noir-dark/30">
                    <div className="text-center">
                      <div className="text-sm opacity-60 mb-2">THREAT LEVEL</div>
                      <div className="neon-text-pink font-orbitron font-bold text-2xl">
                        {'★'.repeat(gameState.currentCase?.difficulty || 0)}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm opacity-60 mb-2">STOLEN ASSET</div>
                      <div className="neon-text-cyan font-share-tech font-bold">
                        {gameState.currentCase?.stolenItem}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm opacity-60 mb-2">MAX MOVES</div>
                      <div className="neon-text-pink font-orbitron font-bold text-2xl">
                        {gameState.currentCase?.maxMoves}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neon-pink/20 pt-6">
                    <h4 className="text-xl font-orbitron neon-text-cyan mb-4">HELIX.AI BRIEFING:</h4>
                    <div className="bg-noir-light/50 border-l-4 border-neon-cyan p-4 rounded-r">
                      <p className="font-share-tech text-white/80 italic">
                        &quot;Agent, this is no ordinary heist. Phantom Queen has access to quantum-level encryption 
                        breakers that could unravel the digital infrastructure of entire mega-cities. 
                        Her pattern suggests she&apos;s targeting historical data cores next. 
                        Time is not on our side.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="text-center space-y-4">
              <NeonButton 
                variant="pink" 
                size="lg" 
                onClick={() => setGamePhase('gameplay')}
                className="text-xl px-12 py-6"
              >
                <span className="flex items-center">
                  <span className="mr-3">🚀</span>
                  BEGIN INVESTIGATION
                </span>
              </NeonButton>
              
              <div>
                <NeonButton 
                  variant="outline-cyan" 
                  size="md" 
                  onClick={() => setGamePhase('menu')}
                  className="text-base px-8 py-3"
                >
                  <span className="flex items-center">
                    <span className="mr-3">←</span>
                    BACK TO MENU
                  </span>
                </NeonButton>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Gameplay Phase
  return (
    <div className="min-h-screen bg-noir-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-noir-gradient opacity-60 pointer-events-none" />
      
      {/* HUD */}
      <HUD
        gameState={gameState}
        onMapToggle={() => setShowMap(!showMap)}
        onInventoryToggle={() => setShowInventory(!showInventory)}
        onDossierToggle={() => setShowDossier(!showDossier)}
      />

      {/* Main gameplay content */}
      <main className="pt-24 px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          
          {/* Current location */}
          <div className="mb-8">
            <h3 className="text-3xl font-orbitron font-bold neon-text-cyan mb-4">
              {gameState.player.currentLocation}
            </h3>
            <p className="text-lg text-white/70">
              Search for clues and analyze the digital traces left by the Phantom Syndicate.
            </p>
          </div>

          {/* Investigation area placeholder */}
          <div className="bg-noir-medium/80 border-2 border-neon-pink/30 rounded-lg p-8 mb-8 relative min-h-64">
            <div className="absolute inset-0 venetian-blinds opacity-10 pointer-events-none rounded-lg" />
            
            <div className="relative flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">🏙️</div>
                <h4 className="text-2xl font-orbitron neon-text-pink mb-4">INVESTIGATION AREA</h4>
                <p className="text-white/70 mb-6">
                  Use your NeuroScanner to detect digital anomalies and hidden clues.
                </p>
                <div className="text-sm font-share-tech text-white/50">
                  [Full investigation mechanics coming soon]
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <NeonButton variant="pink" size="lg">
              <span className="flex items-center justify-center">
                <span className="mr-3">🔍</span>
                SCAN AREA
              </span>
            </NeonButton>
            
            <NeonButton variant="outline-cyan" size="lg">
              <span className="flex items-center justify-center">
                <span className="mr-3">✈️</span>
                TRAVEL
              </span>
            </NeonButton>
            
            <NeonButton variant="outline-pink" size="lg">
              <span className="flex items-center justify-center">
                <span className="mr-3">📊</span>
                ANALYZE
              </span>
            </NeonButton>
          </div>

        </div>
      </main>

      {/* Modal overlays */}
      {showMap && (
        <div className="fixed inset-0 bg-noir-dark/90 z-50 flex items-center justify-center">
          <div className="bg-noir-medium border-2 border-neon-cyan rounded-lg p-8 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-orbitron neon-text-cyan">GLOBAL MAP</h3>
              <NeonButton variant="outline-pink" size="sm" onClick={() => setShowMap(false)}>
                CLOSE
              </NeonButton>
            </div>
            <div className="h-64 bg-noir-dark/50 rounded border border-neon-pink/20 flex items-center justify-center">
              <span className="neon-text-pink font-share-tech">MAP INTERFACE - COMING SOON</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}