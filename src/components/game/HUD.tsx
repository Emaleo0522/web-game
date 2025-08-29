'use client';

import { useState } from 'react';
import { GameState } from '@/types/game';
import NeonButton from '@/components/ui/NeonButton';

interface HUDProps {
  gameState: GameState;
  onMapToggle: () => void;
  onInventoryToggle: () => void;
  onDossierToggle: () => void;
}

export default function HUD({ gameState, onMapToggle, onInventoryToggle, onDossierToggle }: HUDProps) {
  const [scanActive, setScanActive] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleScan = () => {
    setScanActive(!scanActive);
    // Simulate scanning animation
    setTimeout(() => setScanActive(false), 3000);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-noir-dark/95 border-b border-neon-pink/30">
      {/* Venetian blinds effect */}
      <div className="absolute inset-0 venetian-blinds opacity-10 pointer-events-none" />
      
      <div className="relative px-4 py-3">
        {/* Compact HUD */}
        <div className="flex justify-between items-center">
          {/* Left side - Agent & Case info */}
          <div className="flex items-center space-x-4">
            <div className="neon-text-cyan font-share-tech text-sm">
              <span className="opacity-70">AGENT:</span>
              <span className="ml-1 font-bold">{gameState.player.name}</span>
            </div>
            
            {gameState.currentCase && (
              <div className="neon-text-pink font-share-tech text-sm">
                <span className="opacity-70">CASE:</span>
                <span className="ml-1 font-bold">{gameState.currentCase.title}</span>
              </div>
            )}
          </div>

          {/* Right side - Stats */}
          <div className="flex items-center space-x-4 font-share-tech text-sm">
            <div className="text-center">
              <div className="neon-text-cyan font-bold">
                {formatTime(gameState.timeRemaining)}
              </div>
            </div>
            
            <div className="text-center">
              <div className="neon-text-pink font-bold">
                {gameState.movesUsed}/{gameState.currentCase?.maxMoves || 0}
              </div>
            </div>
            
            <div className="text-center">
              <div className="neon-text-cyan font-bold">
                {gameState.score.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons row */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-neon-cyan/10">
          {/* Left side - Navigation buttons */}
          <div className="flex space-x-2">
            <NeonButton variant="outline-cyan" size="sm" onClick={onMapToggle}>
              <span className="flex items-center text-xs">
                <span className="mr-1">🗺️</span>
                MAP
              </span>
            </NeonButton>
            
            <NeonButton variant="outline-pink" size="sm" onClick={onInventoryToggle}>
              <span className="flex items-center text-xs">
                <span className="mr-1">🎒</span>
                INVENTORY
              </span>
            </NeonButton>
            
            <NeonButton variant="outline-cyan" size="sm" onClick={onDossierToggle}>
              <span className="flex items-center text-xs">
                <span className="mr-1">📋</span>
                DOSSIER
              </span>
            </NeonButton>
          </div>

          {/* Center - Location info */}
          <div className="text-center">
            <div className="neon-text-pink font-share-tech text-sm">
              <span className="opacity-70">LOCATION:</span>
              <span className="ml-1 font-bold">{gameState.player.currentLocation}</span>
            </div>
          </div>

          {/* Right side - Action button */}
          <div>
            <NeonButton 
              variant="pink" 
              size="sm" 
              onClick={toggleScan}
              className={scanActive ? 'animate-neon-pulse' : ''}
            >
              <span className="flex items-center text-xs">
                <span className="mr-1">🔍</span>
                {scanActive ? 'SCANNING...' : 'SCAN'}
              </span>
            </NeonButton>
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      {scanActive && (
        <div className="scan-line absolute inset-0 pointer-events-none" />
      )}
    </div>
  );
}