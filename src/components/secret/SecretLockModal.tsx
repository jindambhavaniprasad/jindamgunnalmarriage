import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, X, Sparkles, KeyRound } from 'lucide-react';
import { DiyaFlame } from '../common/DiyaFlame';

interface SecretLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess: () => void;
}

export const SecretLockModal: React.FC<SecretLockModalProps> = ({
  isOpen,
  onClose,
  onUnlockSuccess
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = password.trim().toLowerCase();

    // Password is "ahoo"
    if (cleanInput === 'ahoo') {
      setError(false);
      setPassword('');
      onUnlockSuccess();
    } else {
      setError(true);
      setErrorMessage(
        password.trim() === ''
          ? 'Please enter our first restaurant name.'
          : 'That doesn’t match our memory! This note is strictly reserved for Ruchita ❤️'
      );
    }
  };

  const handleClose = () => {
    setPassword('');
    setError(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 sm:px-6 py-6 backdrop-blur-xl"
        >
          {/* Subtle Ambient Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-3xl bg-[#0a0f26] border border-amber-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(223,186,115,0.2)] text-center"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Diya and Lock Icon */}
            <div className="flex flex-col items-center justify-center mb-4">
              <DiyaFlame size="sm" />
              <div className="mt-3 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner">
                <Lock className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display-dm text-2xl sm:text-3xl text-white mb-2 gold-gradient-text">
              Locked Note
            </h3>

            {/* Description */}
            <div className="space-y-2 font-serif-cormorant text-sm sm:text-base text-[#f8f6f0]/85 mb-6 leading-relaxed">
              <p className="italic">
                This note is locked and only meant for <span className="text-amber-300 font-medium not-italic">Ruchita</span>.
              </p>
              <p className="text-xs sm:text-sm text-[#dfba73]/90">
                If you're Ruchita, enter our first restaurant name to open it.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#dfba73]/60">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  autoFocus
                  placeholder="Enter restaurant name..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border text-sm text-white placeholder-white/40 focus:outline-none transition-all font-mono tracking-wider ${
                    error
                      ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50'
                      : 'border-[#dfba73]/40 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50'
                  }`}
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-rose-300 font-serif-cormorant italic px-1"
                >
                  {errorMessage}
                </motion.p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400 text-[#fff7d6] font-serif-cormorant text-xs sm:text-sm tracking-wider uppercase font-medium hover:bg-amber-400/30 transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(223,186,115,0.2)]"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 animate-pulse" />
                  <span>Unlock Note</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/10 text-xs font-serif-cormorant tracking-wider uppercase text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-1.5 text-[11px] font-serif-cormorant italic text-white/40">
              <Sparkles className="w-3 h-3 text-amber-300/60" />
              <span>A little private mystery between Bhavani Prasad &amp; Ruchita</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
