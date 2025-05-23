import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecondText(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      onAnimationComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} data-id="td6sbx9if" data-path="src/components/SplashScreen.tsx">

      {/* Animated Background Elements */}
      <div className="absolute inset-0" data-id="bfrs22khe" data-path="src/components/SplashScreen.tsx">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }} data-id="icodqe2bi" data-path="src/components/SplashScreen.tsx" />

        )}
      </div>

      {/* Main Content */}
      <div className="z-10 text-center" data-id="7g8l2lu73" data-path="src/components/SplashScreen.tsx">
        {/* Om Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8" data-id="s9v04wiyh" data-path="src/components/SplashScreen.tsx">

          <span className="text-8xl text-white font-bold" data-id="1kmqkmh8f" data-path="src/components/SplashScreen.tsx">ॐ</span>
        </motion.div>

        {/* First Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4" data-id="63ccsw5e8" data-path="src/components/SplashScreen.tsx">

          हनुमान चालीसा
        </motion.h1>

        {/* Second Text */}
        {showSecondText &&
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-orange-100" data-id="5y98zrgdt" data-path="src/components/SplashScreen.tsx">

            आध्यात्मिक पाठ काउंटर
          </motion.p>
        }

        {/* Loading Animation */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }} data-id="pna8xnctk" data-path="src/components/SplashScreen.tsx">

          <div className="flex space-x-2" data-id="ympnmzhfu" data-path="src/components/SplashScreen.tsx">
            {[...Array(3)].map((_, i) =>
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }} data-id="v5anr4a23" data-path="src/components/SplashScreen.tsx" />

            )}
          </div>
        </motion.div>
      </div>
    </motion.div>);

}