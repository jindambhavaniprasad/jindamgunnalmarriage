import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../../data/weddingContent';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  hasPassed: boolean;
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
    hasPassed: false
  });

  useEffect(() => {
    // Wedding target date parsed accurately
    const targetDate = new Date(WEDDING_DATA.weddingDateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // If within 24 hours of target date, it's TODAY
        const isWithinToday = difference > -86400000;
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: isWithinToday,
          hasPassed: !isWithinToday
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isToday: false,
        hasPassed: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isToday) {
    return (
      <div className="text-center py-6">
        <h3 className="font-display-dm text-4xl sm:text-5xl text-amber-300 gold-gradient-text mb-2">
          TODAY
        </h3>
        <p className="font-serif-cormorant text-lg text-white/90 italic">
          The day we had been counting toward is here.
        </p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto my-8">
      {units.map((unit, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-black/40 border border-[#dfba73]/30 gold-border-glow"
        >
          <span className="font-display-dm text-3xl sm:text-5xl text-white gold-gradient-text font-bold">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#dfba73]/80">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
