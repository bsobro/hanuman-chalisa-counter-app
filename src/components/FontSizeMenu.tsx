
import React from 'react';

interface FontSizeMenuProps {
  currentFontSize: string;
  onChangeFontSize: (size: string) => void;
}

const FONT_SIZES = [
  ['text-xs', 'छोटा'],
  ['text-sm', 'छोटा मध्यम'],
  ['text-base', 'मध्यम'],
  ['text-lg', 'बड़ा'],
  ['text-xl', 'बहुत बड़ा'],
  ['text-2xl', 'अति बड़ा']
];

const FontSizeMenu: React.FC<FontSizeMenuProps> = ({ currentFontSize, onChangeFontSize }) => {
  return (
    <div className="absolute top-full right-0 mt-2 bg-white text-devotion-900 rounded-lg shadow-lg p-2 space-y-1 z-10 max-h-60 overflow-auto w-48">
      {FONT_SIZES.map(([size, label]) => (
        <button
          key={size}
          onClick={() => onChangeFontSize(size)}
          className={`block w-full text-left px-3 py-1.5 rounded ${
            currentFontSize === size ? 'bg-devotion-200' : 'hover:bg-devotion-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FontSizeMenu;
