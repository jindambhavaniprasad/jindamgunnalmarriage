import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECRET_LETTER } from '../../data/weddingContent';
import { DiyaFlame } from '../common/DiyaFlame';
import { X, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SecretLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretLetterModal: React.FC<SecretLetterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Gentle gold & rose celebration confetti
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dfba73', '#f5e2b3', '#d97706', '#9353d3']
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-3 sm:px-6 py-6 sm:py-8 overflow-y-auto backdrop-blur-xl"
        >
          {/* Soft Golden Lamp Glow in center */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full max-w-2xl my-auto rounded-3xl bg-[#080d21] border border-amber-400/40 p-5 sm:p-10 md:p-12 shadow-[0_0_60px_rgba(223,186,115,0.25)] text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close letter"
              className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Sacred Diya */}
            <div className="flex justify-center mb-6">
              <DiyaFlame size="md" />
            </div>

            {/* Salutation */}
            <h3 className="font-display-dm text-3xl sm:text-4xl text-white mb-6 gold-gradient-text">
              {SECRET_LETTER.salutation}
            </h3>

            {/* Letter Body Lines */}
            <div className="space-y-4 font-serif-cormorant text-base sm:text-xl text-[#f8f6f0]/90 leading-relaxed font-light">
              <p>
                {SECRET_LETTER.lines[0]}
              </p>
              <p className="text-amber-200 font-normal">
                {SECRET_LETTER.lines[1]}
              </p>

              <div className="py-2 text-white/75 text-sm sm:text-base space-y-1">
                <p>{SECRET_LETTER.lines[2]}</p>
                <p>{SECRET_LETTER.lines[3]}</p>
                <p>{SECRET_LETTER.lines[4]}</p>
              </div>

              <p className="italic text-white/70">
                {SECRET_LETTER.lines[5]}
              </p>

              <p className="text-lg sm:text-2xl font-serif-cormorant text-white font-medium pl-4 border-l-2 border-[#dfba73]">
                “{SECRET_LETTER.lines[7]}”
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                {SECRET_LETTER.lines[9]}
              </p>

              <p className="text-amber-300 font-medium pt-2">
                {SECRET_LETTER.lines[10]}
              </p>

              <div className="py-4 border-y border-amber-400/20 my-4 text-center sm:text-left">
                <p className="font-display-dm text-xl sm:text-3xl text-white">
                  {SECRET_LETTER.lines[11]}
                </p>
                <p className="font-display-dm text-2xl sm:text-4xl gold-gradient-text font-bold mt-1">
                  {SECRET_LETTER.lines[12]}
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="font-display-dm text-2xl text-amber-200 flex items-center gap-2">
                <span>{SECRET_LETTER.signature}</span>
              </div>
              <div className="font-serif-cormorant italic text-xs sm:text-sm text-purple-300/80 bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20">
                {SECRET_LETTER.postScript}
              </div>
            </div>

            {/* Tap to close hint */}
            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#dfba73]/40 bg-amber-950/30 text-xs font-serif-cormorant tracking-widest text-[#dfba73] hover:bg-amber-900/40 transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Return to Our Story</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
