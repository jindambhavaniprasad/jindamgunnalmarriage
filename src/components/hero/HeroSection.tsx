import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/weddingContent';
import { DiyaFlame } from '../common/DiyaFlame';
import { ChevronDown, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-12 pb-16">
      {/* Visual Layer 1 & 4: Subtle Golden Circular Halo behind names */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] md:w-[680px] h-[320px] sm:h-[540px] md:h-[680px] rounded-full border border-amber-500/10 pointer-events-none animate-halo"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[380px] md:w-[480px] h-[220px] sm:h-[380px] md:h-[480px] rounded-full bg-radial from-amber-500/10 via-amber-900/5 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Visual Layer 5 & 6: Faint Sacred Geometry & Arch Outline */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[620px] h-[480px] sm:h-[680px] opacity-15 pointer-events-none"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sacred Mandapa arch */}
        <path
          d="M 50 580 L 50 250 C 50 120, 140 40, 200 40 C 260 40, 350 120, 350 250 L 350 580"
          stroke="#DFBA73"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
        {/* Lotus geometry circle */}
        <circle cx="200" cy="240" r="140" stroke="#DFBA73" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="200" cy="240" r="90" stroke="#DFBA73" strokeWidth="0.5" />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Diya at top of hero */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6"
        >
          <DiyaFlame size="md" />
        </motion.div>

        {/* Small top line */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="text-xs sm:text-sm uppercase font-serif-cormorant text-[#dfba73]/80 mb-4 tracking-[0.35em]"
        >
          A STORY WRITTEN ONE DAY AT A TIME
        </motion.p>

        {/* Main Heading: BHAVANI PRASAD × RUCHITA */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-dm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-4"
        >
          <span className="gold-gradient-text text-center">BHAVANI PRASAD</span>
          <span className="text-amber-400/70 font-light font-serif-cormorant text-2xl sm:text-4xl md:text-5xl leading-none my-1 sm:my-0">
            ×
          </span>
          <span className="gold-gradient-text text-center">RUCHITA</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-serif-cormorant italic text-base sm:text-xl md:text-2xl text-[#f8f6f0]/85 mb-8 max-w-xl px-4"
        >
          {WEDDING_DATA.tagline}
        </motion.p>

        {/* Divider with small diamond motif */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.3 }}
          className="flex items-center justify-center gap-3 w-48 sm:w-64 mb-8"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#dfba73]/60" />
          <div className="w-2 h-2 rotate-45 border border-[#dfba73] bg-[#dfba73]/30" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#dfba73]/60" />
        </motion.div>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm sm:text-base font-serif-cormorant tracking-widest text-[#dfba73] mb-4"
        >
          <span className="text-xl sm:text-2xl tracking-[0.2em] font-medium text-amber-200">
            {WEDDING_DATA.weddingDateNumeric}
          </span>
          <span className="hidden sm:inline text-amber-400/40">•</span>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase text-[#f8f6f0]/80">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{WEDDING_DATA.weddingCity}, {WEDDING_DATA.weddingState}</span>
          </div>
        </motion.div>

        {/* Very subtle line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="font-serif-cormorant text-xs sm:text-sm text-white/40 italic tracking-wider mt-2"
        >
          Our story is still becoming.
        </motion.p>

        {/* Gentle scroll indicator */}
        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfba73]/60 hover:text-[#dfba73] transition-colors"
          aria-label="Scroll to the journey"
        >
          <span>Scroll to begin</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400/80" />
        </motion.a>
      </div>
    </section>
  );
};
