'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function CyberNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > window.innerHeight * 0.8;

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);
        
        if (shouldShow) {
          // Animación de entrada suave
          gsap.fromTo('.animenu-container', 
            { 
              y: -60, 
              opacity: 0
            },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.5,
              ease: 'power2.out'
            }
          );
        } else {
          // Animación de salida suave
          gsap.to('.animenu-container', {
            y: -60,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isVisible) return null;

  return (
    <nav className="animenu-container fixed top-0 left-0 right-0 z-50" role="navigation" aria-label="Menu">
      {/* Hamburguer Button */}
      <button 
        className={`animenu__btn ${isMenuOpen ? 'animenu__btn--active' : ''}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="animenu__btn__bar"></span>
        <span className="animenu__btn__bar"></span>
        <span className="animenu__btn__bar"></span>
      </button>

      {/* Main Navigation */}
      <ul className={`animenu__nav ${isMenuOpen ? 'animenu__nav--active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li>
          <a href="#protocol" className="animenu__nav__hasDropdown" aria-haspopup="true">Protocol</a>
          <ul className="animenu__nav__dropdown" aria-label="submenu" role="menu">
            <li><a href="#missions" role="menuitem">Missions</a></li>
            <li><a href="#intel" role="menuitem">Intel</a></li>
            <li><a href="#classified" role="menuitem">Classified</a></li>
          </ul>
        </li>
        <li>
          <a href="#systems" className="animenu__nav__hasDropdown" aria-haspopup="true">Systems</a>
          <ul className="animenu__nav__dropdown" aria-label="submenu" role="menu">
            <li><a href="#neural" role="menuitem">Neural Link</a></li>
            <li><a href="#quantum" role="menuitem">Quantum DB</a></li>
            <li><a href="#helix" role="menuitem">Helix.AI</a></li>
          </ul>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="/game">Deploy</a></li>
      </ul>

      <style jsx>{`
        /* Box model reset */
        *, *:after, *:before {
          box-sizing: border-box; 
        }

        /* Hamburger button */
        .animenu__btn {
          display: none;
          cursor: pointer;
          background-color: var(--noir-dark);
          border: 2px solid var(--neon-cyan);
          padding: 10px;
          height: 45px;
          width: 45px;
          border-radius: 4px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 255, 128, 0.3);
        }

        .animenu__btn:hover {
          background-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0, 255, 128, 0.6);
        }

        .animenu__btn__bar {
          display: block;
          width: 20px; 
          height: 2px;
          background-color: var(--neon-cyan);
          transition: 0.3s cubic-bezier(0.75, -0.55, 0.25, 1.55);
          box-shadow: 0 0 5px currentColor;
        }

        .animenu__btn__bar + .animenu__btn__bar {
          margin-top: 4px;
        }

        .animenu__btn--active .animenu__btn__bar {
          margin: 0;
          position: absolute;
          background-color: var(--noir-dark);
        }

        .animenu__btn--active .animenu__btn__bar:nth-child(1) {
          transform: rotate(45deg);
        }

        .animenu__btn--active .animenu__btn__bar:nth-child(2) {
          opacity: 0;
        }

        .animenu__btn--active .animenu__btn__bar:nth-child(3) {
          transform: rotate(-45deg);
        }

        /* Main container */
        .animenu-container {
          font-family: var(--font-orbitron), monospace;
        }

        .animenu-container ul {
          padding: 0;
          list-style: none;
          font-size: 0;
        }

        .animenu-container li, .animenu-container a {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .animenu-container a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--font-share-tech), monospace;
          transition: all 0.3s ease;
        }

        /* Main navigation */
        .animenu__nav {
          background: linear-gradient(135deg, var(--noir-dark) 0%, rgba(26, 26, 26, 0.95) 100%);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--neon-cyan);
          box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
        }

        .animenu__nav > li {
          position: relative;
          border-right: 1px solid rgba(0, 255, 128, 0.2);
        }

        .animenu__nav > li > a {
          padding: 15px 25px;
          position: relative;
          transition: all 0.3s ease;
        }

        .animenu__nav > li:hover > ul {
          opacity: 1;
          visibility: visible;
          margin: 0;
        }

        .animenu__nav > li:hover > a,
        .animenu__nav > li:focus-within > a {
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
          background: rgba(0, 255, 128, 0.1);
        }

        .animenu__nav > li:focus-within > ul {
          opacity: 1;
          visibility: visible;
          margin: 0;
        }

        /* Dropdown arrow */
        .animenu__nav__hasDropdown:before { 
          content: "";
          position: absolute;
          border: 4px solid transparent;
          border-bottom: 0;
          border-top-color: var(--neon-pink);
          top: 50%;
          margin-top: -2px;
          right: 10px;
          filter: drop-shadow(0 0 3px var(--neon-pink));
        }

        /* Dropdown menu */
        .animenu__nav__dropdown {
          min-width: 100%;
          position: absolute;
          top: 100%; 
          left: 0;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          margin: 20px 0 0 0;
          background: linear-gradient(135deg, rgba(42, 42, 42, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid var(--neon-pink);
          border-top: 2px solid var(--neon-pink);
          box-shadow: 0 8px 25px rgba(255, 0, 128, 0.3);
          transition: margin 0.3s ease, opacity 0.3s ease;
        }

        .animenu__nav__dropdown > li {
          width: 100%;
          border-bottom: 1px solid rgba(255, 0, 128, 0.2);
        }

        .animenu__nav__dropdown > li:first-child > a:after {
          content: '';
          position: absolute;
          height: 0; 
          width: 0;
          left: 20px;
          top: -6px;
          border: 6px solid transparent;
          border-top: 0;
          border-bottom-color: var(--neon-pink);
        }

        .animenu__nav__dropdown > li:last-child {
          border: 0;
        }

        .animenu__nav__dropdown a {
          padding: 12px 20px;
          width: 100%;
          border-color: transparent;
          transition: all 0.3s ease;
        }

        .animenu__nav__dropdown a:hover,
        .animenu__nav__dropdown a:focus-within {
          background-color: var(--neon-pink);
          color: var(--noir-dark);
          text-shadow: none;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }

        /* Mobile styles */
        @media screen and (max-width: 767px) {
          .animenu__btn {
            display: inline-block;
          }

          .animenu__nav,
          .animenu__nav__dropdown {
            display: none;
          }

          .animenu__nav {
            margin: 10px 0;
            border-radius: 8px;
            overflow: hidden;
          }

          .animenu__nav > li {
            width: 100%;
            border-right: 0;
            border-bottom: 1px solid rgba(0, 255, 128, 0.2);
          }

          .animenu__nav > li:last-child {
            border: 0;
          }

          .animenu__nav > li:first-child > a:after {
            content: '';
            position: absolute;
            height: 0; 
            width: 0;
            left: 20px;
            top: -6px;
            border: 6px solid transparent;
            border-top: 0;
            border-bottom-color: var(--noir-dark);
          }

          .animenu__nav > li > a {
            width: 100%;
            padding: 15px 20px;
            position: relative;
          }

          .animenu__nav a:hover {
            background-color: var(--neon-cyan);
            color: var(--noir-dark);
            text-shadow: none;
          }

          .animenu__nav__dropdown {
            position: static;
            background: rgba(60, 60, 60, 0.95);
            margin: 0;
            transition: none;
            visibility: visible;
            opacity: 1;
            border: none;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
          }

          .animenu__nav__dropdown > li:first-child > a:after {
            content: none;
          }

          .animenu__nav__dropdown a {
            padding-left: 40px;
            width: 100%;
          }
        }

        /* Active state for mobile */
        .animenu__nav--active {
          display: block !important;
        }

        .animenu__nav--active .animenu__nav__dropdown {
          display: block;
        }
      `}</style>
    </nav>
  );
}