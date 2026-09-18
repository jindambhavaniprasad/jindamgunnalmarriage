import React from 'react';

interface TempleArchProps {
  className?: string;
  children?: React.ReactNode;
}

export const TempleArch: React.FC<TempleArchProps> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Indian Temple Torana / Arch Outline */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none opacity-25"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 20 490 L 20 200 C 20 100, 100 20, 200 20 C 300 20, 380 100, 380 200 L 380 490"
          stroke="#DFBA73"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 30 490 L 30 205 C 30 115, 105 35, 200 35 C 295 35, 370 115, 370 205 L 370 490"
          stroke="#C5A059"
          strokeWidth="0.8"
        />
        {/* Arch Pinnacle / Kalash */}
        <circle cx="200" cy="18" r="4" fill="#DFBA73" />
        <path d="M 200 6 L 200 14" stroke="#DFBA73" strokeWidth="1.5" />
      </svg>
      {children}
    </div>
  );
};
