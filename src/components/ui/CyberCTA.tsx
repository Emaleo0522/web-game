'use client';

import { useState } from 'react';
import { gsap } from 'gsap';

interface CyberCTAProps {
  text?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
}

export default function CyberCTA({ 
  text = "ENTER THE PROTOCOL", 
  onClick,
  size = 'lg',
  variant = 'primary'
}: CyberCTAProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    
    // Glitch effect
    const button = e.currentTarget;
    button.classList.add('animate-pulse');
    
    // Screen flash effect
    const flash = document.createElement('div');
    flash.className = 'fixed inset-0 pointer-events-none z-50';
    flash.style.background = variant === 'primary' 
      ? 'radial-gradient(circle, rgba(224, 40, 125, 0.3) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(27, 199, 251, 0.3) 0%, transparent 70%)';
    document.body.appendChild(flash);

    // Ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'absolute inset-0 border-2 rounded-lg animate-ping';
    ripple.style.borderColor = variant === 'primary' ? '#e0287d' : '#1bc7fb';
    button.appendChild(ripple);

    // GSAP animations
    if (typeof window !== 'undefined') {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });

      gsap.to(flash, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          document.body.removeChild(flash);
        }
      });

      // Text glitch animation
      const textSpan = button.querySelector('.cta-text');
      if (textSpan) {
        gsap.to(textSpan, {
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
          duration: 0.1,
          yoyo: true,
          repeat: 3,
          ease: "none"
        });
      }
    }

    // Cleanup
    setTimeout(() => {
      button.classList.remove('animate-pulse');
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
      setIsClicked(false);
    }, 500);

    // Call the onClick handler
    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  };

  const variantClasses = {
    primary: {
      bg: 'bg-gradient-to-r from-neon-pink/20 to-neon-pink/30',
      border: 'border-neon-pink/60',
      text: 'text-neon-pink',
      shadow: 'shadow-lg shadow-neon-pink/25',
      hover: 'hover:bg-neon-pink/20 hover:border-neon-pink hover:shadow-neon-pink/40'
    },
    secondary: {
      bg: 'bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/30',
      border: 'border-neon-cyan/60',
      text: 'text-neon-cyan',
      shadow: 'shadow-lg shadow-neon-cyan/25',
      hover: 'hover:bg-neon-cyan/20 hover:border-neon-cyan hover:shadow-neon-cyan/40'
    }
  };

  const styles = variantClasses[variant];

  return (
    <button
      onClick={handleClick}
      disabled={isClicked}
      className={`
        relative overflow-hidden
        ${sizeClasses[size]}
        ${styles.bg}
        ${styles.border}
        ${styles.text}
        ${styles.shadow}
        ${styles.hover}
        border-2
        rounded-lg
        font-orbitron
        font-bold
        tracking-wider
        transition-all duration-300
        transform hover:scale-105
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        backdrop-blur-sm
        group
      `}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
        textShadow: `0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor`
      }}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current opacity-60" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current opacity-60" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current opacity-60" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current opacity-60" />
      
      {/* Background pulse effect */}
      <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      {/* Button text */}
      <span className="cta-text relative z-10 block">
        {text}
      </span>
      
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${variant === 'primary' ? 'rgba(224, 40, 125, 0.2)' : 'rgba(27, 199, 251, 0.2)'} 0%, transparent 70%)`
        }}
      />
    </button>
  );
}