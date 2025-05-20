
import React from 'react';

interface CelebrationProps {
  onReset: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onReset }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-devotion-100 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-celebrate bg-devotion-${(i % 5) * 100 + 400}`}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="z-10 text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl">
        <h1 className="text-4xl font-bold text-devotion-700 mb-6">
          जय श्री राम! जय हनुमान!
        </h1>
        <p className="text-xl text-devotion-800 mb-8">
          आपने 108 बार हनुमान चालीसा पाठ पूरा किया!
        </p>
        <button
          onClick={onReset}
          className="bg-devotion-500 hover:bg-devotion-600 transition-colors duration-300 text-white py-3 px-8 rounded-full font-semibold shadow-lg"
        >
          नया पाठ शुरू करें
        </button>
      </div>
    </div>
  );
};

export default Celebration;
