import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Bell, Music } from 'lucide-react';
import { playTempleBell, toggleBackgroundMusic, isMusicPlaying, onMusicStateChange } from '../../utils/sound';

export const SoundControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [showBellToast, setShowBellToast] = useState(false);

  useEffect(() => {
    // Sync with music play/pause events
    const unsubscribe = onMusicStateChange((active) => {
      setIsPlaying(active);
    });
    setIsPlaying(isMusicPlaying());
    return unsubscribe;
  }, []);

  const handleRingBell = () => {
    playTempleBell(0.6);
    setIsBellRinging(true);
    setShowBellToast(true);

    setTimeout(() => setIsBellRinging(false), 800);
    setTimeout(() => setShowBellToast(false), 2600);
  };

  const handleToggleMusic = () => {
    const active = toggleBackgroundMusic();
    setIsPlaying(active);
  };

  return (
    <>
      {/* Toast message when bell is tapped */}
      {showBellToast && (
        <div 
          role="status"
          className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] text-center px-4 py-2 rounded-full temple-card-blur text-xs tracking-wider text-[#dfba73] gold-border-glow shadow-lg animate-fade-in flex items-center justify-center gap-2"
        >
          <Bell className="w-3.5 h-3.5 text-amber-300 animate-bounce flex-shrink-0" />
          <span className="truncate">A sacred blessing before you continue ✨</span>
        </div>
      )}

      {/* Floating Control Pill at Top Right */}
      <div className="fixed top-3.5 right-3.5 sm:top-5 sm:right-5 z-40 flex items-center gap-1.5 sm:gap-2">
        {/* Temple Bell Chime Button */}
        <button
          onClick={handleRingBell}
          title="Tap to ring temple bell"
          aria-label="Ring sacred temple bell"
          className={`group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full temple-card-blur text-[#dfba73] hover:text-[#fff7d6] transition-all duration-300 border border-[#dfba73]/30 hover:border-[#dfba73]/70 active:scale-95 ${
            isBellRinging ? 'ring-2 ring-amber-400/50 scale-105' : ''
          }`}
        >
          <Bell className={`w-3.5 h-3.5 ${isBellRinging ? 'rotate-12 text-amber-300' : 'group-hover:rotate-6'} transition-transform duration-200`} />
          <span className="text-[11px] font-medium tracking-wider uppercase font-serif-cormorant hidden md:inline">
            Temple Chime
          </span>
          {isBellRinging && (
            <span className="absolute inset-0 rounded-full animate-ping bg-amber-400/20 pointer-events-none" />
          )}
        </button>

        {/* Jersey Theme Music Loop Toggle Button */}
        <button
          onClick={handleToggleMusic}
          title={isPlaying ? "Pause Jersey Theme music" : "Play Jersey Theme music"}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full temple-card-blur transition-all duration-300 border ${
            isPlaying 
              ? 'border-amber-400/70 bg-amber-950/50 text-amber-200 shadow-[0_0_15px_rgba(223,186,115,0.25)]' 
              : 'border-white/15 text-[#f8f6f0]/70 hover:border-[#dfba73]/50'
          }`}
        >
          {isPlaying ? (
            <>
              <Music className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span className="text-[11px] font-medium tracking-wider uppercase font-serif-cormorant text-amber-200">
                Music: On
              </span>
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse hidden sm:inline" />
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/50" />
              <span className="text-[11px] font-medium tracking-wider uppercase font-serif-cormorant text-white/60">
                Music: Off
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
