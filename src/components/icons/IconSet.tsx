
import React from 'react';
import { RefreshCcw, Minus, Plus, Check } from 'lucide-react';

export const RefreshIcon = () => {
  return <RefreshCcw className="w-5 h-5" />;
};

export const MinusIcon = () => {
  return <Minus className="w-5 h-5" />;
};

export const PlusIcon = () => {
  return <Plus className="w-8 h-8" />;
};

export const CheckIcon = () => {
  return <Check className="w-5 h-5" />;
};

export const FontSizeIcon = () => {
  return (
    <div className="flex items-baseline justify-center text-white">
      <span className="text-xs">अ</span>
      <span className="text-base mx-0">अ</span>
    </div>
  );
};
