// Core game types for Detective Neon Noir

export interface Location {
  id: string;
  name: string;
  country: string;
  continent: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  landmarks: string[];
  culture: string[];
  timeZone: string;
}

export interface Criminal {
  id: string;
  name: string;
  alias: string;
  description: string;
  appearance: {
    hair: string;
    eyes: string;
    build: string;
    height: string;
    distinguishingMarks: string[];
  };
  skills: string[];
  backstory: string;
  dangerLevel: 1 | 2 | 3 | 4 | 5;
}

export interface Clue {
  id: string;
  type: 'physical' | 'digital' | 'witness' | 'document' | 'cultural';
  title: string;
  description: string;
  locationId: string;
  isFound: boolean;
  pointsToLocation?: string[];
  pointsToCriminal?: string[];
  digitalData?: {
    ipAddress?: string;
    deviceInfo?: string;
    timestamp?: string;
  };
}

export interface Case {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  stolenItem: string;
  criminalId: string;
  startLocation: string;
  targetLocation: string;
  clues: Clue[];
  timeLimit: number; // in minutes
  maxMoves: number;
}

export interface Player {
  id: string;
  name: string;
  rank: string;
  stats: {
    casesCompleted: number;
    accuracy: number;
    averageTime: number;
    bestScore: number;
  };
  inventory: string[];
  currentLocation: string;
  energy: number;
  credits: number;
}

export interface GameState {
  player: Player;
  currentCase: Case | null;
  isGameActive: boolean;
  timeRemaining: number;
  movesUsed: number;
  score: number;
  foundClues: string[];
  visitedLocations: string[];
  currentPhase: 'briefing' | 'investigation' | 'chase' | 'arrest' | 'completed';
}

export interface TravelOption {
  destination: Location;
  cost: number;
  timeRequired: number;
  transportMethod: 'plane' | 'train' | 'car' | 'ship';
}

export interface Investigation {
  locationId: string;
  availableClues: Clue[];
  witnesses: string[];
  digitalSources: string[];
  physicalEvidence: string[];
}

export interface HUD {
  showMap: boolean;
  showInventory: boolean;
  showDossier: boolean;
  showSettings: boolean;
  scanLineActive: boolean;
}