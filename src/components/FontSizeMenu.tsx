
import React from 'react';

interface FontSizeMenuProps {
  currentFontSize: string;
  onChangeFontSize: (size: string) => void;
}

const FONT_SIZES = [
  ['text-xs', 'बहुत छोटा'],
  ['text-sm', 'छोटा'],
  ['text-base', 'छोटा मध्यम'],
  ['text-lg', 'मध्यम'],
  ['text-xl', 'बड़ा'],
  ['text-2xl', 'बहुत बड़ा'],
  ['text-3xl', 'अति बड़ा']
];

const FontSizeMenu: React.FC<FontSizeMenuProps> = ({ currentFontSize, onChangeFontSize }) => {
  return (
    <div className="absolute top-full right-0 mt-2 bg-white dark:bg-devotion-600 text-devotion-900 dark:text-white rounded-lg shadow-lg p-2 space-y-1 z-10 max-h-fit overflow-auto w-48">
      {FONT_SIZES.map(([size, label]) => (
        <button
          key={size}
          onClick={() => onChangeFontSize(size)}
          className={`block w-full text-left px-3 py-1.5 rounded ${
            currentFontSize === size ? 'bg-devotion-200 dark:bg-devotion-400' : 'dark:bg-devotion-600 hover:bg-devotion-100 dark:hover:bg-devotion-500'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FontSizeMenu;
