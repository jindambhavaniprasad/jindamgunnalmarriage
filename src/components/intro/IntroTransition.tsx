import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiyaFlame } from '../common/DiyaFlame';
import { ChevronDown, Sparkles } from 'lucide-react';
import { playTempleBell, playBackgroundMusic } from '../../utils/sound';

interface IntroTransitionProps {
  onEnter: () => void;
  isPrivateFromBhavani?: boolean;
}

export const IntroTransition: React.FC<IntroTransitionProps> = ({
  onEnter,
  isPrivateFromBhavani = false
}) => {
  const handleEnter = () => {
    playTempleBell(0.4);
    playBackgroundMusic();
    onEnter();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050814] px-6 text-center"
      >
        {/* Ambient subtle glow behind diya */}
        <div 
          className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="mb-8"
        >
          <DiyaFlame size="lg" />
        </motion.div>

        {isPrivateFromBhavani ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-xs font-serif-cormorant tracking-widest text-[#dfba73]"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>A MESSAGE MEANT FOR ONE PERSON</span>
          </motion.div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="max-w-md mx-auto space-y-4"
        >
          <p className="font-serif-cormorant text-2xl sm:text-3xl text-[#f8f6f0]/90 leading-relaxed font-light italic">
            “Some stories begin with a hello.
          </p>
          <p className="font-serif-cormorant text-xl sm:text-2xl text-[#dfba73] leading-relaxed font-normal">
            Ours kept growing with every day after it.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="mt-12"
        >
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#dfba73]/40 bg-gradient-to-r from-amber-950/40 via-[#0a0f24] to-amber-950/40 text-[#dfba73] hover:text-[#fff7d6] hover:border-[#dfba73] transition-all duration-300 shadow-[0_0_20px_rgba(223,186,115,0.15)] active:scale-95 cursor-pointer"
          >
            <span className="font-serif-cormorant text-sm sm:text-base font-medium tracking-[0.25em] uppercase">
              Enter Our Story
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-amber-400" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
