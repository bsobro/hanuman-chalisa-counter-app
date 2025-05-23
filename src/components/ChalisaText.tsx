
import React from 'react';
import { chalisaText } from '../constants/chalisa-text';

interface ChalisaTextProps {
  fontSize: string;
}

const ChalisaText: React.FC<ChalisaTextProps> = ({ fontSize }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-2 text-devotion-900 pb-28 pt-20">
      {chalisaText.map((line, index) => (
        <p
          key={index}
          className={`${fontSize} text-center ${
            line.startsWith("॥") ? "font-bold text-devotion-700" : ""
          } ${line === "" ? "my-4" : ""}`}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default ChalisaText;
