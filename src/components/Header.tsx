
import React, { useState } from 'react';
import { RefreshIcon, MinusIcon, FontSizeIcon } from './icons/IconSet';
import FontSizeMenu from './FontSizeMenu';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  count: number;
  onDecrement: () => void;
  onReset: () => void;
  currentFontSize: string;
  onChangeFontSize: (size: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  count,
  onDecrement,
  onReset,
  currentFontSize,
  onChangeFontSize
}) => {
  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);

  const handleFontSizeChange = (size: string) => {
    onChangeFontSize(size);
    setShowFontSizeMenu(false);
  };

  return (
    <header className="fixed w-full top-0 bg-devotion-500 text-white p-4 flex items-center justify-between shadow-md z-10">
      <div className="flex items-center space-x-3">
        <button
          onClick={onReset}
          className="bg-devotion-600 hover:bg-devotion-700 transition-colors rounded-full p-2.5"
          aria-label="Reset Path Counter"
        >
          <RefreshIcon />
        </button>

        <button
          onClick={onDecrement}
          disabled={count === 0}
          className="bg-devotion-600 hover:bg-devotion-700 transition-colors rounded-full p-2.5 disabled:opacity-50"
          aria-label="Decrement Counter"
        >
          <MinusIcon />
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-baseline bg-devotion-600 rounded-full px-4 py-1.5">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-sm ml-1">/108</span>
      </div>

      <div className="flex items-center space-x-3">
        <ThemeToggle />
        
        <div className="relative">
          <button
            onClick={() => setShowFontSizeMenu(!showFontSizeMenu)}
            className="bg-devotion-600 hover:bg-devotion-700 transition-colors rounded-full p-2.5 w-10 h-10 flex items-center justify-center"
            aria-label="Change Font Size"
          >
            <FontSizeIcon />
          </button>

          {showFontSizeMenu && (
            <FontSizeMenu currentFontSize={currentFontSize} onChangeFontSize={handleFontSizeChange} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
