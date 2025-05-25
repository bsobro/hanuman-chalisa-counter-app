
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative bg-devotion-600 hover:bg-devotion-700 transition-all duration-300 rounded-full p-2.5 w-10 h-10 flex items-center justify-center overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute w-5 h-5 z-10 text-white transition-all duration-500 ${
            isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon
          className={`absolute w-5 h-5 z-10 text-white transition-all duration-500 ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
      
      {/* Background Animation */}
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-r transition-all duration-700 rounded-full ${
          isDark
            ? 'from-indigo-600 to-purple-600 opacity-0'
            : 'from-yellow-400 to-orange-500 opacity-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
