import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CODE_SECTION_DATA } from '../../data/weddingContent';
import { Terminal, Play, CheckCircle2, Heart, Code2 } from 'lucide-react';

interface CodeLoveSectionProps {
  onOpenSecret: () => void;
}

export const CodeLoveSection: React.FC<CodeLoveSectionProps> = ({ onOpenSecret }) => {
  const [loveCount, setLoveCount] = useState(1);
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  const handleIncrementLove = () => {
    setLoveCount(prev => prev + 1);
  };

  const handleRunTerminal = () => {
    setTerminalRunning(true);
    setTerminalOutput("Compiling love story...\nResolving dependencies: Sangareddy + Solapur -> Hyderabad...\nBranch merged successfully.\nSecurity checkpoint: Awaiting Ruchita's password...");
    setTimeout(() => {
      setTerminalRunning(false);
      onOpenSecret();
    }, 1000);
  };

  return (
    <section id="code" className="relative py-24 px-4 sm:px-6 overflow-hidden">
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
            CHAPTER 04
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-3"
          >
            WRITTEN IN CODE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-cormorant italic text-base sm:text-xl text-[#f8f6f0]/80 max-w-xl mx-auto"
          >
            Where software-engineer logic meets the poetry of choosing each other.
          </motion.p>
        </div>

        {/* Code Editor Window */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-2xl bg-[#080d1e] border border-[#dfba73]/30 shadow-2xl overflow-hidden mb-12"
        >
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0c1229] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-white/50 flex items-center gap-1">
                <Code2 className="w-3 h-3 text-amber-300" />
                story.ts &middot; main branch
              </span>
            </div>
            <div className="text-[11px] font-mono text-amber-300/80">
              TypeScript &middot; Solapur 2027
            </div>
          </div>

          {/* Editor Content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto bg-[#060a17]">
            <pre className="text-white/90 whitespace-pre-wrap sm:whitespace-pre">
              <code>{CODE_SECTION_DATA.codeSnippet}</code>
            </pre>

            {/* Interactive increment button */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleIncrementLove}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-200 hover:bg-amber-500/30 transition-all text-xs cursor-pointer active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>love += 1</span>
                </button>
                <span className="text-xs font-serif-cormorant italic text-[#dfba73]">
                  love level: <span className="font-mono font-bold text-white">{loveCount}</span> &middot; still growing...
                </span>
              </div>
              <div className="text-[11px] text-white/40 italic">
                // Click to grow love
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section #61: Relationship System Status & Secret Terminal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* System Status Metrics Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="temple-card-blur rounded-2xl p-6 border border-[#dfba73]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#dfba73]">
                  SYSTEM STATUS
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {CODE_SECTION_DATA.statusMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-white/60">{metric.label}</span>
                    <span className={metric.status === 'highlight' ? 'text-[#dfba73] font-bold' : 'text-emerald-300'}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 text-[11px] font-mono text-white/40 border-t border-white/10">
              deployment: <span className="text-amber-200">forever</span> (metaphorical promise)
            </div>
          </motion.div>

          {/* Secret Terminal CLI Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-2xl bg-black/70 border border-amber-400/40 p-6 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#dfba73] border-b border-amber-400/20 pb-3">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider">
                  Secret Terminal
                </span>
              </div>

              <p className="text-xs text-white/70 font-mono mb-4">
                Execute script to reveal Bhavani Prasad’s personal letter for Ruchita:
              </p>

              <div className="p-3 rounded-lg bg-[#070b16] border border-white/10 font-mono text-xs text-amber-200/90 mb-4 flex items-center justify-between">
                <span>$ ./open_the_secret</span>
                <button
                  onClick={handleRunTerminal}
                  disabled={terminalRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-black" />
                  {terminalRunning ? "RUNNING..." : "RUN"}
                </button>
              </div>

              {terminalOutput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 rounded bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-200 whitespace-pre-line"
                >
                  {terminalOutput}
                </motion.div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] font-serif-cormorant text-[#dfba73]/80 italic">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Made with love, code, and Hyderabad caffeine.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
