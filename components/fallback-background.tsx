"use client"

import { motion } from 'framer-motion';

export function FallbackBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-background" />
      
      {/* Effet de grille */}
      <div className="absolute inset-0 bg-grid-white/[0.09] bg-[size:50px_50px]" />
      
      {/* Cercles lumineux animés */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ 
          x: ['-50%', '0%', '50%', '0%', '-50%'],
          y: ['-50%', '0%', '-50%', '0%', '-50%'],
          scale: [1, 1.2, 1, 1.2, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
        style={{ top: '30%', left: '30%' }}
      />
      
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          x: ['50%', '0%', '-50%', '0%', '50%'],
          y: ['20%', '40%', '20%', '0%', '20%'],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear" 
        }}
        style={{ top: '40%', right: '20%' }}
      />
    </div>
  );
} 