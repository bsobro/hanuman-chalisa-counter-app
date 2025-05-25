
import React from 'react';
import { chalisaText } from '../constants/chalisa-text';

interface ChalisaTextProps {
  fontSize: string;
}

const ChalisaText: React.FC<ChalisaTextProps> = ({ fontSize }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-2 text-devotion-900 dark:text-slate-100 pb-28 pt-20 transition-colors duration-300">
      {chalisaText.map((line, index) => (
        <p
          key={index}
          className={`${fontSize} text-center ${
            line.startsWith("॥") ? "font-bold text-devotion-700 dark:text-devotion-300" : ""
          } ${line === "" ? "my-4" : ""} transition-colors duration-300`}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default ChalisaText;
