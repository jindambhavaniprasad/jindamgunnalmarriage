import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PHOTO_PLACEHOLDERS } from '../../data/weddingContent';
import { Heart, MessageSquare, Coffee, ShieldCheck } from 'lucide-react';

export const DailyLifeSection: React.FC = () => {
  const [equationSolved, setEquationSolved] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Chapter Subtitle */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-2"
          >
            CHAPTER 02
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-3xl sm:text-4xl md:text-5xl text-white tracking-wide"
          >
            SOMEWHERE BETWEEN
          </motion.h2>
        </div>

        {/* The Emotional Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="temple-card-blur rounded-3xl p-8 sm:p-12 gold-border-glow mb-16 text-center"
        >
          <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#f8f6f0]/90 leading-relaxed max-w-2xl mx-auto mb-6">
            “Somewhere between deadlines, commutes, late replies, tired evenings and <span className="text-amber-300 font-medium">‘Did you reach?’</span>”
          </p>
          <p className="font-serif-cormorant text-base sm:text-lg text-[#dfba73]/90 tracking-wide mb-10">
            something became permanent.
          </p>

          <div className="py-6 border-y border-[#dfba73]/20 my-8">
            <h3 className="font-display-dm text-2xl sm:text-4xl text-white mb-2 tracking-wide">
              LOVE DIDN’T ARRIVE ALL AT ONCE.
            </h3>
            <div className="font-display-dm text-3xl sm:text-5xl tracking-widest text-[#dfba73] flex items-center justify-center gap-1.5 sm:gap-2">
              <span>IT KEPT</span>
              <div className="inline-flex">
                {"GROWING.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0.5, textShadow: "0 0 0px #f59e0b" }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      textShadow: [
                        "0 0 4px rgba(245,158,11,0.2)",
                        "0 0 16px rgba(245,158,11,0.9)",
                        "0 0 4px rgba(245,158,11,0.2)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: "easeInOut"
                    }}
                    className="gold-gradient-text font-bold"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <p className="font-serif-cormorant text-sm sm:text-base text-[#f8f6f0]/75 max-w-xl mx-auto leading-relaxed italic">
            Bhavani Prasad traveling back and forth. Ruchita after long hours in the hostel.
            Two busy software engineers who found their peace in the exact same conversation.
          </p>
        </motion.div>

        {/* Section #62: Interactive Love Equation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl p-6 sm:p-8 bg-black/40 border border-[#dfba73]/30 gold-border-glow mb-16 text-center"
        >
          <div className="text-xs uppercase font-mono tracking-widest text-amber-300/80 mb-4">
            Interactive Equation
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-base font-serif-cormorant text-[#f8f6f0]/85">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">Distance (Sangareddy × Solapur)</span>
            <span className="text-amber-400 font-bold">+</span>
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">Hyderabad Workdays</span>
            <span className="text-amber-400 font-bold">+</span>
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">Countless Conversations</span>
            <span className="text-amber-400 font-bold">+</span>
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">Shared Prayers</span>
            <span className="text-amber-400 font-bold">+</span>
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">Choosing Each Other</span>
            <span className="text-amber-400 font-bold">=</span>
          </div>

          <div className="mt-6">
            {!equationSolved ? (
              <button
                onClick={() => setEquationSolved(true)}
                className="px-6 py-2.5 rounded-full border border-amber-400/60 bg-amber-950/40 text-xs sm:text-sm font-serif-cormorant tracking-widest text-amber-200 hover:bg-amber-900/50 transition-all cursor-pointer"
              >
                SOLVE EQUATION
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 border border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
              >
                <Heart className="w-5 h-5 text-amber-300 fill-amber-300 animate-pulse" />
                <span className="font-display-dm text-2xl sm:text-3xl text-white tracking-widest gold-gradient-text">
                  US
                </span>
                <Heart className="w-5 h-5 text-amber-300 fill-amber-300 animate-pulse" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Section #39: Polaroid Memory Cards (Placeholders for real memories) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PHOTO_PLACEHOLDERS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group p-5 rounded-2xl bg-[#0a0f24]/80 border border-[#dfba73]/20 hover:border-[#dfba73]/50 transition-all duration-300 shadow-md flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-[#dfba73] group-hover:scale-110 transition-transform">
                {idx === 0 && <Coffee className="w-6 h-6" />}
                {idx === 1 && <MessageSquare className="w-6 h-6" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6" />}
              </div>
              <h4 className="font-display-dm text-lg text-white mb-2">{item.title}</h4>
              <p className="font-serif-cormorant italic text-xs text-[#f8f6f0]/70 leading-relaxed">
                {item.caption}
              </p>
              <span className="mt-4 text-[10px] uppercase font-mono tracking-widest text-[#dfba73]/60">
                A memory preserved
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
