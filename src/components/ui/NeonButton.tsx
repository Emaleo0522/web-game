import { ButtonHTMLAttributes } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'cyan' | 'outline-pink' | 'outline-cyan';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function NeonButton({ 
  variant = 'pink', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: NeonButtonProps) {
  const baseClasses = `
    font-orbitron font-bold relative overflow-hidden rounded-lg
    transition-all duration-500 transform
    hover:scale-105 active:scale-95
    before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0
    before:transition-opacity before:duration-500
    hover:before:opacity-20
    after:absolute after:inset-0 after:border-2 after:border-transparent
    after:bg-gradient-to-r after:bg-clip-padding after:rounded-lg
    after:transition-all after:duration-500
  `;
  
  const variantClasses = {
    pink: `
      bg-neon-pink text-noir-dark shadow-lg shadow-neon-pink/30
      hover:shadow-2xl hover:shadow-neon-pink/60
      before:from-neon-pink before:to-white
      after:hover:border-neon-pink after:hover:shadow-neon-pink
      hover:brightness-110
    `,
    cyan: `
      bg-neon-cyan text-noir-dark shadow-lg shadow-neon-cyan/30
      hover:shadow-2xl hover:shadow-neon-cyan/60
      before:from-neon-cyan before:to-white
      after:hover:border-neon-cyan after:hover:shadow-neon-cyan
      hover:brightness-110
    `,
    'outline-pink': `
      bg-transparent border-2 border-neon-pink text-neon-pink
      hover:bg-neon-pink hover:text-noir-dark hover:border-neon-pink
      shadow-lg shadow-neon-pink/20 hover:shadow-2xl hover:shadow-neon-pink/50
      before:from-neon-pink before:to-transparent
      backdrop-blur-sm bg-noir-dark/20
    `,
    'outline-cyan': `
      bg-transparent border-2 border-neon-cyan text-neon-cyan
      hover:bg-neon-cyan hover:text-noir-dark hover:border-neon-cyan
      shadow-lg shadow-neon-cyan/20 hover:shadow-2xl hover:shadow-neon-cyan/50
      before:from-neon-cyan before:to-transparent
      backdrop-blur-sm bg-noir-dark/20
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}