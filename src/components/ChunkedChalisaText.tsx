
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { chalisaChunks } from '../constants/chalisa-chunks';

interface ChunkedChalisaTextProps {
  fontSize: string;
}

const ChunkedChalisaText: React.FC<ChunkedChalisaTextProps> = ({ fontSize }) => {
  return (
    <div className="h-full w-full">
      <Carousel 
        orientation="vertical" 
        className="h-full w-full"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent className="h-full">
          {chalisaChunks.map((chunk, chunkIndex) => (
            <CarouselItem key={chunkIndex} className="h-screen flex items-center justify-center p-4">
              <div className="max-w-2xl mx-auto space-y-2 text-devotion-900 text-center">
                {chunk.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className={`${fontSize} ${
                      line.startsWith("॥") ? "font-bold text-devotion-700" : ""
                    } ${line === "" ? "my-4" : ""}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2" />
        <CarouselNext className="right-4 top-1/2" />
      </Carousel>
    </div>
  );
};

export default ChunkedChalisaText;
