import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff0080',
        'neon-cyan': '#00ff80',
        'noir-dark': '#0a0a0a',
        'noir-medium': '#1a1a1a',
        'noir-light': '#2c2c2c',
        'shadow-overlay': 'rgba(0,0,0,0.7)',
        'neon-glow-pink': 'rgba(255,0,128,0.5)',
        'neon-glow-cyan': 'rgba(0,255,128,0.5)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(45deg, #1a0a1a, #ff0080)',
        'noir-gradient': 'linear-gradient(135deg, #0a0a0a, #1a0033)',
        'cyber-grid': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,0,128,0.1) 2px, rgba(255,0,128,0.1) 4px)',
        'venetian-blinds': 'repeating-linear-gradient(0deg, transparent 0px, transparent 20px, rgba(255,0,128,0.1) 20px, rgba(255,0,128,0.1) 24px)',
      },
      animation: {
        'neon-pulse': 'neonPulse 3s infinite alternate',
        'text-flicker': 'textFlicker 4s infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        neonPulse: {
          '0%': { 
            boxShadow: '0 0 15px rgba(255,0,128,0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 25px rgba(255,0,128,0.8), 0 0 35px rgba(255,0,128,0.4)' 
          }
        },
        textFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
          '75%': { opacity: '1' },
          '85%': { opacity: '0.8' }
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(255,0,128,0.5), 0 0 10px rgba(0,255,128,0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255,0,128,0.8), 0 0 30px rgba(0,255,128,0.6)' 
          }
        }
      },
      fontFamily: {
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'share-tech': ['var(--font-share-tech-mono)', 'monospace'],
        'mono': ['Courier New', 'monospace'],
        'serif': ['Times New Roman', 'serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 15px rgba(255,0,128,0.5)',
        'neon-cyan': '0 0 15px rgba(0,255,128,0.5)',
        'neon-strong': '0 0 25px rgba(255,0,128,0.8), 0 0 35px rgba(255,0,128,0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;