'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const SamuraiAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Timeline de animaciones del samurái
    const tl = gsap.timeline({ repeat: -1 });

    // Respiración suave
    tl.to(
      containerRef.current,
      {
        scale: 1.05,
        duration: 2,
        ease: 'sine.inOut',
      },
      0
    )
      .to(
        containerRef.current,
        {
          scale: 1,
          duration: 2,
          ease: 'sine.inOut',
        },
        2
      );

    // Brillo en los ojos (simulado con opacidad)
    tl.to(
      '.samurai-eyes',
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      },
      0
    )
      .to(
        '.samurai-eyes',
        {
          opacity: 0.6,
          duration: 1.5,
          ease: 'sine.inOut',
        },
        0.5
      );
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <div className="relative w-48 h-64 bg-hakari-black rounded-lg border-2 border-hakari-gold shadow-lg shadow-hakari-red/50">
        {/* Casco */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-hakari-gold to-hakari-dark rounded-t-full border border-hakari-gold">
          {/* Ojos */}
          <div className="samurai-eyes absolute top-6 left-8 w-4 h-4 bg-hakari-red rounded-full blur-sm shadow-lg shadow-hakari-red"></div>
          <div className="samurai-eyes absolute top-6 right-8 w-4 h-4 bg-hakari-red rounded-full blur-sm shadow-lg shadow-hakari-red"></div>

          {/* Circuitos */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 80">
            <line x1="10" y1="40" x2="30" y2="40" stroke="#d4af37" strokeWidth="1" />
            <circle cx="35" cy="40" r="3" fill="#d4af37" />
            <line x1="40" y1="40" x2="60" y2="40" stroke="#d4af37" strokeWidth="1" />
            <circle cx="93" cy="40" r="3" fill="#d4af37" />
            <line x1="98" y1="40" x2="118" y2="40" stroke="#d4af37" strokeWidth="1" />
          </svg>
        </div>

        {/* Cuerpo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-hakari-dark to-hakari-black border border-hakari-gold/50 rounded">
          {/* Armadura */}
          <div className="absolute inset-2 border-2 border-hakari-gold/30 rounded"></div>
        </div>
      </div>
    </div>
  );
};
