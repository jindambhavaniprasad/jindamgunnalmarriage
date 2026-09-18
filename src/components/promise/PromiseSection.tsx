import React from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { WEDDING_DATA } from '../../data/weddingContent';
import { DiyaFlame } from '../common/DiyaFlame';
import { MapPin, Calendar } from 'lucide-react';

export const PromiseSection: React.FC = () => {
  return (
    <section id="promise" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Halo Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Chapter Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-2"
        >
          CHAPTER 05
        </motion.p>

        {/* Diya Flame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <DiyaFlame size="md" />
        </motion.div>

        {/* Main Line: FROM "US" TO "ALWAYS" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="font-display-dm text-3xl sm:text-5xl md:text-6xl text-white tracking-wider leading-tight">
            FROM “US”
          </h2>
          <h2 className="font-display-dm text-4xl sm:text-6xl md:text-7xl gold-gradient-text tracking-wider leading-tight">
            TO “ALWAYS”
          </h2>
        </motion.div>

        {/* The Date & Location Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-3 rounded-full temple-card-blur border border-amber-400/40 text-amber-200 text-sm sm:text-base font-serif-cormorant mb-10"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="font-semibold tracking-widest uppercase">
              {WEDDING_DATA.weddingDateFormatted}
            </span>
          </div>
          <span className="hidden sm:inline text-amber-400/40">&bull;</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="tracking-widest uppercase">
              {WEDDING_DATA.weddingCity}, {WEDDING_DATA.weddingState}
            </span>
          </div>
        </motion.div>

        {/* Live Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Emotional Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-10 space-y-4 font-serif-cormorant italic text-base sm:text-xl text-[#f8f6f0]/85 leading-relaxed"
        >
          <p>
            Some dates are merely marks on a calendar.
          </p>
          <p className="text-[#dfba73]">
            And some become the beginning of a lifetime of ordinary mornings, difficult days, celebrations, rituals, laughter and home.
          </p>
          <p className="text-sm font-sans tracking-widest uppercase text-white/50 not-italic pt-2">
            Ours is 25 February 2027.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
