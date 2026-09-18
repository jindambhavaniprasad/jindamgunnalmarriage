import React from 'react';

interface DiyaFlameProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showHalo?: boolean;
}

export const DiyaFlame: React.FC<DiyaFlameProps> = ({
  size = 'md',
  className = '',
  showHalo = true
}) => {
  const sizeMap = {
    sm: { width: 32, height: 28, scale: 0.7 },
    md: { width: 48, height: 42, scale: 1 },
    lg: { width: 72, height: 64, scale: 1.5 }
  };

  const current = sizeMap[size];

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} aria-hidden="true">
      {showHalo && (
        <div 
          className="absolute -inset-3 rounded-full bg-amber-500/20 blur-xl animate-pulse pointer-events-none"
          style={{ animationDuration: '4s' }}
        />
      )}
      <svg
        width={current.width}
        height={current.height}
        viewBox="0 0 60 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
      >
        <defs>
          <radialGradient id="flameInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="brassBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E2B3" />
            <stop offset="50%" stopColor="#DFBA73" />
            <stop offset="100%" stopColor="#8C6826" />
          </linearGradient>
        </defs>

        {/* Diya Base (Traditional Indian brass bowl) */}
        <path
          d="M10 32C10 32 15 46 30 46C45 46 50 32 50 32C50 32 42 36 30 36C18 36 10 32 10 32Z"
          fill="url(#brassBase)"
          stroke="#C5A059"
          strokeWidth="1.2"
        />
        {/* Diya Rim */}
        <ellipse
          cx="30"
          cy="32"
          rx="20"
          ry="4.5"
          fill="#5C3E14"
          stroke="#DFBA73"
          strokeWidth="1"
        />
        {/* Diya Base Stand */}
        <path
          d="M24 46L22 49H38L36 46H24Z"
          fill="url(#brassBase)"
          stroke="#C5A059"
          strokeWidth="0.8"
        />

        {/* Flickering Flame */}
        <g className="animate-diya origin-bottom">
          {/* Flame outer glow */}
          <path
            d="M30 6C30 6 20 18 20 25C20 30.5 24.5 34 30 34C35.5 34 40 30.5 40 25C40 18 30 6 30 6Z"
            fill="url(#flameInner)"
          />
          {/* Flame heart / white-hot core */}
          <path
            d="M30 14C30 14 24 22 24 26C24 29 26.5 31 30 31C33.5 31 36 29 36 26C36 22 30 14 30 14Z"
            fill="#FFFDF7"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
};
