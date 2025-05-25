
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChalisaText from '../components/ChalisaText';
import Celebration from '../components/Celebration';
import Toast from '../components/Toast';

const Index = () => {
  const [count, setCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [fontSize, setFontSize] = useState('text-base');

  // Load saved font size from localStorage
  useEffect(() => {
    const savedSize = localStorage.getItem('hanumanChalisaFontSize');
    if (savedSize) {
      setFontSize(savedSize);
    }
  }, []);

  // Trigger celebration screen and toast on reaching 108
  useEffect(() => {
    if (count === 108) {
      setShowCelebration(true);
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowCelebration(false);
    }
  }, [count]);

  const increment = () => {
    if (count < 108) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const changeFontSize = (sizeClass: string) => {
    setFontSize(sizeClass);
    localStorage.setItem('hanumanChalisaFontSize', sizeClass);
  };

  return (
    <div className="flex flex-col min-h-screen bg-devotion-50 dark:bg-slate-900 transition-colors duration-300">
      {showCelebration ? (
        <Celebration onReset={reset} />
      ) : (
        <>
          <Header
            count={count}
            onDecrement={decrement}
            onReset={reset}
            currentFontSize={fontSize}
            onChangeFontSize={changeFontSize}
          />
          <main className="flex-1 overflow-y-auto p-4 bg-devotion-50 dark:bg-slate-900 transition-colors duration-300">
            <ChalisaText fontSize={fontSize} />
          </main>
          <Footer onIncrement={increment} isDisabled={count >= 108} />
        </>
      )}

      {showToast && <Toast message="आपने 108 पाठ पूरे किए! बधाई हो!" />}
    </div>
  );
};

export default Index;
