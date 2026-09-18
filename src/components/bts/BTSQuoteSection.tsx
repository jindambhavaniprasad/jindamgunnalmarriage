import React from 'react';
import { motion } from 'framer-motion';
import { BTS_QUOTES } from '../../data/weddingContent';
import { Heart } from 'lucide-react';

export const BTSQuoteSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Soft Purple Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-purple-300/70 mb-2"
          >
            A PERSONAL ACCENT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-2xl sm:text-4xl text-white tracking-wide mb-3"
          >
            FOR THE DAYS WE NEEDED A LITTLE HOPE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-cormorant italic text-sm sm:text-base text-[#f8f6f0]/70 max-w-lg mx-auto"
          >
            Words that echoed quietly on days when the distance felt far, or work was long.
          </motion.p>
        </div>

        {/* 3 Restrained Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BTS_QUOTES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-[#0d0a1c]/70 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60">
                    Quote {idx + 1}
                  </span>
                  <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400/40" />
                </div>
                <p className="font-display-dm text-xl sm:text-2xl text-white mb-2 purple-gradient-text">
                  “{item.quote}”
                </p>
                <p className="text-xs font-serif-cormorant tracking-widest text-purple-300/80 mb-4 uppercase">
                  — {item.author}
                </p>
              </div>
              <p className="font-serif-cormorant italic text-xs text-[#f8f6f0]/60 leading-relaxed border-t border-purple-500/10 pt-3">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle bridge line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <span className="font-serif-cormorant italic text-xs text-purple-200/50">
            A quiet pause before the promise...
          </span>
        </motion.div>
      </div>
    </section>
  );
};
