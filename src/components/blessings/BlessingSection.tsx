import React from 'react';
import { motion } from 'framer-motion';
import { DiyaFlame } from '../common/DiyaFlame';

export const BlessingSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden text-center">
      {/* Sacred Halo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto">
        {/* Chapter Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-3"
        >
          CHAPTER 07
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-4 inline-block"
        >
          <DiyaFlame size="md" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display-dm text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8"
        >
          MAY THE JOURNEY BE BLESSED.
        </motion.h2>

        {/* Sacred Mantras in gentle sequence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6 font-sanskrit text-xl sm:text-3xl text-amber-200 tracking-wider py-8 border-y border-[#dfba73]/20 max-w-xl mx-auto"
        >
          <div>
            <p className="gold-gradient-text font-medium">ॐ नमो वेंकटेशाय</p>
            <p className="font-serif-cormorant text-xs sm:text-sm text-[#dfba73]/70 italic mt-1">
              Om Namo Venkateshaya
            </p>
          </div>

          <div className="w-8 h-[1px] bg-amber-400/30 mx-auto" />

          <div>
            <p className="gold-gradient-text font-medium">ॐ हनुमते नमः</p>
            <p className="font-serif-cormorant text-xs sm:text-sm text-[#dfba73]/70 italic mt-1">
              Om Hanumate Namah
            </p>
          </div>

          <div className="w-8 h-[1px] bg-amber-400/30 mx-auto" />

          <div>
            <p className="gold-gradient-text font-medium">श्री राम जय राम जय जय राम</p>
            <p className="font-serif-cormorant text-xs sm:text-sm text-[#dfba73]/70 italic mt-1">
              Shri Ram Jai Ram Jai Jai Ram
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif-cormorant italic text-sm sm:text-base text-[#f8f6f0]/70 mt-8 max-w-lg mx-auto"
        >
          With gratitude for the path traveled so far, and with reverence for the road ahead.
        </motion.p>
      </div>
    </section>
  );
};
