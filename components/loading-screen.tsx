import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  started: boolean;
  onStarted: () => void;
}

export function LoadingScreen({ started, onStarted }: LoadingScreenProps) {
  const { active, progress, errors, item } = useProgress();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    console.log('Loading status:', { active, progress, item });
    
    if (progress >= 100 && !active) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, active, item]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-background z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: started ? 0 : 1,
        pointerEvents: started ? 'none' : 'auto'
      }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => started && onStarted()}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center"
      >
        <div className="w-[300px] h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-4 text-xl font-medium">
          {Math.round(progress)}%
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {item && `Chargement du site...`}
        </div>
      </motion.div>
    </motion.div>
  );
} 