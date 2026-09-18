import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/weddingContent';
import { Heart, Calendar, Share2, Sparkles, Copy, Check } from 'lucide-react';
import { getGoogleCalendarUrl, getWhatsAppShareUrl } from '../../utils/calendar';

interface FooterProps {
  onOpenSecret: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSecret }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + window.location.pathname);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative pt-16 pb-20 px-4 sm:px-6 border-t border-white/10 text-center overflow-hidden">
      {/* Golden Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section #21: Trigger Button for The Little Secret */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="p-8 rounded-3xl temple-card-blur border border-amber-400/40 gold-border-glow max-w-xl mx-auto"
        >
          <p className="font-serif-cormorant italic text-sm text-[#dfba73]/80 mb-3">
            A quiet note waiting between two hearts...
          </p>
          <button
            onClick={onOpenSecret}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400 text-[#fff7d6] font-serif-cormorant text-sm sm:text-base tracking-[0.2em] uppercase font-semibold hover:shadow-[0_0_25px_rgba(223,186,115,0.3)] transition-all active:scale-95 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-pulse" />
            <span>OPEN THE LITTLE SECRET ♥️</span>
          </button>
        </motion.div>

        {/* Section #23: WELCOME MODE FOR FRIENDS / FAMILY */}
        <div className="max-w-2xl mx-auto text-center pt-8 border-t border-white/5">
          <h3 className="font-display-dm text-2xl sm:text-3xl text-white tracking-wide mb-2">
            WELCOME, EVERYONE.
          </h3>
          <p className="font-serif-cormorant italic text-base sm:text-lg text-[#f8f6f0]/80 leading-relaxed mb-6">
            “We made this little corner of the internet to share the beginning of our next chapter.”
          </p>

          <p className="text-sm font-serif-cormorant uppercase tracking-widest text-[#dfba73] mb-6">
            {WEDDING_DATA.weddingDateFormatted} &middot; {WEDDING_DATA.weddingCity}, {WEDDING_DATA.weddingState}
          </p>

          {/* Quick Action Share buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-[#0a1024] text-xs font-serif-cormorant tracking-wider text-amber-200 hover:border-amber-400 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Add to Calendar</span>
            </a>

            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-[#0a1024] text-xs font-serif-cormorant tracking-wider text-emerald-200 hover:border-emerald-400 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Share the Joy</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-[#0a1024] text-xs font-serif-cormorant tracking-wider text-[#f8f6f0] hover:border-white/40 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-300" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Section #60: Easter Egg for Engineers */}
        <div className="inline-block p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-white/50 text-left max-w-xs mx-auto">
          <div className="flex items-center gap-2 text-amber-300/80 mb-2 border-b border-white/10 pb-1">
            <Sparkles className="w-3 h-3" />
            <span className="uppercase tracking-widest text-[10px]">build.manifest</span>
          </div>
          <p>status: <span className="text-emerald-300">together</span></p>
          <p>build: <span className="text-amber-200">25.02.2027</span></p>
          <p>environment: <span className="text-white/80">hyderabad</span></p>
          <p>destination: <span className="text-[#dfba73]">solapur</span></p>
          <p>deployment: <span className="text-rose-300 font-bold">forever</span></p>
        </div>

        {/* Section #49: Minimalist Signature Footer */}
        <div className="pt-8 border-t border-white/10 text-center space-y-2">
          <p className="font-display-dm text-xl sm:text-2xl text-white tracking-widest gold-gradient-text">
            BHAVANI PRASAD ♥ RUCHITA
          </p>
          <p className="text-xs font-serif-cormorant uppercase tracking-widest text-[#dfba73]">
            25 February 2027 &middot; Solapur, Maharashtra
          </p>
          <p className="font-serif-cormorant italic text-xs text-[#f8f6f0]/60 max-w-md mx-auto pt-2">
            Made with love, code, prayers, and a little Hyderabad traffic.
          </p>
          <p className="text-[10px] font-mono text-white/30 pt-4">
            &copy; 2027 Bhavani Prasad &amp; Ruchita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
