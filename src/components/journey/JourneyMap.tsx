import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingContent';

export const JourneyMap: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-2"
          >
            CHAPTER 01
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-3xl sm:text-5xl text-white tracking-wide mb-4"
          >
            THE JOURNEYS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-cormorant italic text-base sm:text-xl text-[#f8f6f0]/75 max-w-xl mx-auto"
          >
            Two people from different places, living different routines, slowly moving toward the same future.
          </motion.p>
        </div>

        {/* Metaphorical Map Canvas / Flow SVG */}
        <div className="relative temple-card-blur rounded-3xl p-6 sm:p-10 gold-border-glow overflow-hidden">
          {/* Faint Grid & Starry backdrop */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(#dfba73_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Interactive Flow visualization */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Origin A: Sangareddy (Bhavani Prasad) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-2xl bg-white/[0.02] border border-[#dfba73]/20"
            >
              <div className="flex items-center gap-2 mb-2 text-[#dfba73]">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-amber-300 -rotate-45" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono text-amber-300/80">Origin A</span>
              </div>
              <h3 className="font-display-dm text-2xl text-white mb-1">Sangareddy</h3>
              <p className="text-xs font-mono text-amber-200/60 mb-2">Telangana</p>
              <p className="font-serif-cormorant italic text-sm text-[#f8f6f0]/70">
                “Where one journey began.”
              </p>
              <div className="mt-3 text-xs text-[#dfba73]/90 font-medium">
                Groom: Bhavani Prasad
              </div>
            </motion.div>

            {/* Convergence Point: Hyderabad */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-amber-500/10 via-[#0a0f24] to-amber-950/20 border border-amber-400/40 relative shadow-[0_0_30px_rgba(223,186,115,0.1)]"
            >
              <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-300/60 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-mono text-amber-300/90 mb-1">
                Convergence Point
              </span>
              <h3 className="font-display-dm text-3xl text-white mb-1">Hyderabad</h3>
              <p className="text-xs font-mono text-amber-200/60 mb-3">Shared Work City</p>
              <p className="font-serif-cormorant italic text-sm text-[#f8f6f0]/85 leading-relaxed">
                “Where two busy workdays slowly became our shared story.”
              </p>
              <div className="mt-4 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] text-[#dfba73]">
                Commutes &middot; Code &middot; Evening Calls
              </div>
            </motion.div>

            {/* Origin B: Solapur (Ruchita) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex flex-col items-center md:items-end text-center md:text-right p-4 rounded-2xl bg-white/[0.02] border border-[#dfba73]/20"
            >
              <div className="flex items-center gap-2 mb-2 text-[#dfba73]">
                <span className="text-xs uppercase tracking-widest font-mono text-amber-300/80">Origin B</span>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-amber-300 rotate-45" />
                </div>
              </div>
              <h3 className="font-display-dm text-2xl text-white mb-1">Solapur</h3>
              <p className="text-xs font-mono text-amber-200/60 mb-2">Maharashtra</p>
              <p className="font-serif-cormorant italic text-sm text-[#f8f6f0]/70">
                “Where Ruchita's journey began.”
              </p>
              <div className="mt-3 text-xs text-[#dfba73]/90 font-medium">
                Bride: Gunnal. Ruchita
              </div>
            </motion.div>
          </div>

          {/* Section #33 & #56: Animated Golden Flow Thread toward Solapur */}
          <div className="mt-10 pt-8 border-t border-amber-400/20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-serif-cormorant text-base sm:text-lg text-amber-100/90"
            >
              <span className="italic text-[#f8f6f0]/70">Hyderabad gave us the everyday.</span>
              <span className="hidden sm:inline text-amber-400 font-bold">→</span>
              <span className="font-medium text-[#dfba73] gold-gradient-text tracking-wide">
                Solapur gets the celebration.
              </span>
            </motion.div>

            {/* Destination Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-900/30 to-amber-500/20 border border-amber-400/50 shadow-lg"
            >
              <MapPin className="w-5 h-5 text-amber-300 animate-bounce" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-mono tracking-widest text-amber-300/80">
                  Wedding Destination
                </p>
                <p className="font-display-dm text-base sm:text-lg text-white">
                  Solapur, Maharashtra &middot; <span className="text-[#dfba73]">{WEDDING_DATA.weddingDateFormatted}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
