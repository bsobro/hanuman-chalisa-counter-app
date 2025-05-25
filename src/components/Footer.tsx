
import React from 'react';
import { PlusIcon } from './icons/IconSet';

interface FooterProps {
  onIncrement: () => void;
  isDisabled: boolean;
}

const Footer: React.FC<FooterProps> = ({ onIncrement, isDisabled }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-devotion-500 p-2 flex justify-center shadow-inner z-10">
      <button
        onClick={onIncrement}
        disabled={isDisabled}
        className="bg-devotion-600 hover:bg-devotion-700 transition-colors 
        text-white rounded-full w-16 h-16 flex items-center justify-center shadow-inner disabled:opacity-50 disabled:cursor-not-allowed
        "
        aria-label="Increment Path Counter"
      >
        <PlusIcon />
      </button>
    </footer>
  );
};

export default Footer;
