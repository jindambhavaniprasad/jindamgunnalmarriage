import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEVOTIONAL_DATA } from '../../data/weddingContent';
import { DiyaFlame } from '../common/DiyaFlame';
import { Sparkles, Sun } from 'lucide-react';
import { playTempleBell } from '../../utils/sound';

export const DevotionsSection: React.FC = () => {
  const [activeMantra, setActiveMantra] = useState<string | null>(null);

  const handleMantraTap = (id: string) => {
    setActiveMantra(activeMantra === id ? null : id);
    playTempleBell(0.4);
  };

  return (
    <section id="devotions" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Sacred Ambience */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-2"
          >
            CHAPTER 03
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-3"
          >
            TWO DEVOTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-cormorant italic text-base sm:text-xl text-[#f8f6f0]/80 max-w-xl mx-auto"
          >
            Two paths of sacred devotion, meeting in one loving family.
          </motion.p>
        </div>

        {/* Devotional Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* LEFT: Ruchita & Lord Venkateshwara */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl temple-card-blur p-6 sm:p-10 border border-[#dfba73]/30 overflow-hidden flex flex-col justify-between"
          >
            {/* Tirumala blue & gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-amber-400/20 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-300/80">
                    Bride’s Devotion
                  </span>
                  <h3 className="font-display-dm text-2xl sm:text-3xl text-white mt-1">
                    RUCHITA
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-sky-950/60 border border-sky-400/30 flex items-center justify-center text-[#dfba73]">
                  <Sun className="w-6 h-6 text-amber-300" />
                </div>
              </div>

              {/* Deity representation */}
              <div className="mb-6">
                <p className="font-sanskrit text-2xl sm:text-3xl text-amber-200 tracking-wider font-semibold mb-1">
                  {DEVOTIONAL_DATA.venkateshwara.deityName}
                </p>
                <p className="font-serif-cormorant italic text-sm text-[#f8f6f0]/70">
                  {DEVOTIONAL_DATA.venkateshwara.subtitle}
                </p>
              </div>

              {/* Sacred Venkateshwara Mantras */}
              <div className="space-y-4">
                {DEVOTIONAL_DATA.venkateshwara.mantras.map((item) => {
                  const isExpanded = activeMantra === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleMantraTap(item.id)}
                      className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_20px_rgba(223,186,115,0.25)]'
                          : 'bg-black/30 border-[#dfba73]/20 hover:border-[#dfba73]/50'
                      }`}
                    >
                      {isExpanded && (
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/10 animate-ping pointer-events-none" />
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfba73]/70">
                          Tap for sacred halo
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="font-sanskrit text-xl sm:text-2xl text-amber-100 font-medium mb-1">
                        {item.script}
                      </p>
                      <p className="font-serif-cormorant text-sm sm:text-base text-[#dfba73] italic">
                        {item.transliteration}
                      </p>
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-amber-400/20 text-xs font-serif-cormorant text-[#f8f6f0]/80 italic"
                        >
                          {item.meaning}
                        </motion.p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-3 text-xs font-serif-cormorant italic text-[#dfba73]/80">
              <DiyaFlame size="sm" />
              <span>Sacred lamp lit in reverence to Lord Venkateshwara.</span>
            </div>
          </motion.div>

          {/* RIGHT: Bhavani Prasad & Lord Hanuman */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl temple-card-blur p-6 sm:p-10 border border-[#dfba73]/30 overflow-hidden flex flex-col justify-between"
          >
            {/* Hanuman saffron & gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-amber-400/20 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-300/80">
                    Groom’s Devotion
                  </span>
                  <h3 className="font-display-dm text-2xl sm:text-3xl text-white mt-1">
                    BHAVANI PRASAD
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-[#dfba73]">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
              </div>

              {/* Deity representation */}
              <div className="mb-6">
                <p className="font-sanskrit text-2xl sm:text-3xl text-amber-200 tracking-wider font-semibold mb-1">
                  {DEVOTIONAL_DATA.hanuman.deityName}
                </p>
                <p className="font-serif-cormorant italic text-sm text-[#f8f6f0]/70">
                  {DEVOTIONAL_DATA.hanuman.subtitle}
                </p>
              </div>

              {/* Sacred Hanuman Mantras */}
              <div className="space-y-4">
                {DEVOTIONAL_DATA.hanuman.mantras.map((item) => {
                  const isExpanded = activeMantra === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleMantraTap(item.id)}
                      className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_20px_rgba(223,186,115,0.25)]'
                          : 'bg-black/30 border-[#dfba73]/20 hover:border-[#dfba73]/50'
                      }`}
                    >
                      {isExpanded && (
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/10 animate-ping pointer-events-none" />
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfba73]/70">
                          Tap for sacred halo
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="font-sanskrit text-xl sm:text-2xl text-amber-100 font-medium mb-1">
                        {item.script}
                      </p>
                      <p className="font-serif-cormorant text-sm sm:text-base text-[#dfba73] italic">
                        {item.transliteration}
                      </p>
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-amber-400/20 text-xs font-serif-cormorant text-[#f8f6f0]/80 italic"
                        >
                          {item.meaning}
                        </motion.p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-3 text-xs font-serif-cormorant italic text-[#dfba73]/80">
              <DiyaFlame size="sm" />
              <span>Sacred lamp lit in reverence to Lord Hanuman & Shri Ram.</span>
            </div>
          </motion.div>
        </div>

        {/* Section #12: The Two Mantras Become One */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative rounded-3xl p-8 sm:p-12 text-center temple-card-blur border border-amber-400/40 shadow-[0_0_35px_rgba(223,186,115,0.15)] overflow-hidden"
        >
          {/* Subtle connecting golden line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#dfba73]" />
            <DiyaFlame size="md" />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#dfba73]" />
          </div>

          <h3 className="font-display-dm text-2xl sm:text-4xl md:text-5xl text-white tracking-widest mb-3">
            <span className="gold-gradient-text">{DEVOTIONAL_DATA.mergedSummary.headline}</span>
          </h3>

          <p className="font-serif-cormorant italic text-base sm:text-xl text-[#f8f6f0]/85 max-w-2xl mx-auto leading-relaxed">
            {DEVOTIONAL_DATA.mergedSummary.subtext}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-amber-400/30 text-xs font-serif-cormorant tracking-widest text-[#dfba73]">
            <span>ॐ नमो वेंकटेशाय</span>
            <span className="text-amber-400 font-bold">•</span>
            <span>ॐ हनुमते नमः</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
