
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 1: Initial logo appearance
    const timer1 = setTimeout(() => {
      setAnimationStage(1);
    }, 200);

    // Stage 2: Text appearance
    const timer2 = setTimeout(() => {
      setAnimationStage(2);
    }, 1000);

    // Stage 3: Complete animation
    const timer3 = setTimeout(() => {
      setAnimationStage(3);
    }, 2000);

    // Finish and call onComplete
    const timerComplete = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-devotion-500 text-white z-50">
      <div className="flex flex-col items-center justify-center">
        <div 
          className={`text-6xl mb-4 transform transition-all duration-500 ${
            animationStage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        >
          🙏
        </div>
        
        <h1 
          className={`text-3xl font-bold mb-2 transition-all duration-500 transform ${
            animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          हनुमान चालीसा
        </h1>
        
        <div 
          className={`h-1 bg-white rounded transition-all duration-700 ease-in-out ${
            animationStage >= 3 ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
