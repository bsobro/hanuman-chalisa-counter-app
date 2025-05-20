
import React from 'react';
import { CheckIcon } from './icons/IconSet';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-devotion-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 animate-fade-in">
      <CheckIcon />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
