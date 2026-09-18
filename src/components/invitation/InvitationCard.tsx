import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/weddingContent';
import { DiyaFlame } from '../common/DiyaFlame';
import { Calendar, Download, Share2, MapPin, Sparkles } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile, getWhatsAppShareUrl } from '../../utils/calendar';

export const InvitationCard: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + window.location.pathname);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="invitation" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase font-serif-cormorant tracking-[0.3em] text-[#dfba73]/80 mb-2"
          >
            CHAPTER 06
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display-dm text-2xl sm:text-4xl md:text-5xl text-white tracking-wide"
          >
            THE INVITATION
          </motion.h2>
        </div>

        {/* Section #48: Physical Unfolding Ceremonial Invitation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0a102b] via-[#060a1c] to-[#040612] p-5 sm:p-10 md:p-14 border-2 border-[#dfba73]/40 shadow-[0_0_50px_rgba(223,186,115,0.2)] text-center"
        >
          {/* Ornate Corner Accents */}
          <div className="absolute top-3 left-3 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[#dfba73]/60 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[#dfba73]/60 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[#dfba73]/60 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[#dfba73]/60 rounded-br-lg pointer-events-none" />

          {/* Sacred ॐ Symbol & Top Diya */}
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="font-sanskrit text-3xl sm:text-4xl text-[#dfba73] gold-gradient-text drop-shadow mb-3">
              ॐ
            </span>
            <DiyaFlame size="sm" />
          </div>

          {/* Heading: With the Blessings of our Families */}
          <p className="font-serif-cormorant tracking-[0.25em] uppercase text-xs sm:text-sm text-[#dfba73] mb-8 font-medium px-2">
            WITH THE BLESSINGS OF OUR FAMILIES
          </p>

          {/* Groom Section */}
          <div className="mb-6">
            <h3 className="font-display-dm text-2xl sm:text-3xl md:text-4xl text-white tracking-wide break-words">
              {WEDDING_DATA.groom.name}
            </h3>
            <p className="font-serif-cormorant italic text-xs sm:text-sm text-[#dfba73]/80 mt-1">
              son of
            </p>
            <p className="font-serif-cormorant text-sm sm:text-base text-[#f8f6f0]/90 font-medium mt-0.5">
              {WEDDING_DATA.groom.parents}
            </p>
            <p className="text-[11px] font-mono text-white/40 tracking-wider mt-0.5">
              {WEDDING_DATA.groom.hometown}
            </p>
          </div>

          {/* Sacred Floral Separator & "and" */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#dfba73]/60" />
            <span className="font-serif-cormorant italic text-base sm:text-lg text-amber-300 font-light">
              and
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#dfba73]/60" />
          </div>

          {/* Bride Section */}
          <div className="mb-8">
            <h3 className="font-display-dm text-2xl sm:text-3xl md:text-4xl text-white tracking-wide break-words">
              {WEDDING_DATA.bride.name}
            </h3>
            <p className="font-serif-cormorant italic text-xs sm:text-sm text-[#dfba73]/80 mt-1">
              daughter of
            </p>
            <p className="font-serif-cormorant text-sm sm:text-base text-[#f8f6f0]/90 font-medium mt-0.5">
              {WEDDING_DATA.bride.parents}
            </p>
            <p className="text-[11px] font-mono text-white/40 tracking-wider mt-0.5">
              {WEDDING_DATA.bride.hometown}
            </p>
          </div>

          {/* Formal Request Copy */}
          <p className="font-serif-cormorant italic text-sm sm:text-base text-[#f8f6f0]/85 max-w-lg mx-auto mb-8 leading-relaxed px-2">
            request the honor of your presence and heartfelt blessings as they unite in holy matrimony and begin their journey together.
          </p>

          {/* Date & Location Highlight Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-[#dfba73]/40 max-w-md mx-auto mb-8">
            <p className="font-display-dm text-xl sm:text-3xl text-amber-200 tracking-wider mb-2">
              {WEDDING_DATA.weddingDateFormatted}
            </p>
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm uppercase font-serif-cormorant tracking-widest text-[#dfba73]">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{WEDDING_DATA.weddingCity}, {WEDDING_DATA.weddingState}</span>
            </div>
            <p className="text-[11px] font-serif-cormorant italic text-white/50 mt-3">
              Venue details will be shared soon.
            </p>
          </div>

          {/* Action Buttons: Add to Calendar & WhatsApp Share */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4 border-t border-[#dfba73]/20">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-amber-400/40 bg-amber-950/30 text-xs font-serif-cormorant tracking-wider text-amber-200 hover:bg-amber-900/40 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Add to Calendar</span>
            </a>

            <button
              onClick={downloadIcsFile}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-serif-cormorant tracking-wider text-[#f8f6f0] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-white/70" />
              <span>.ICS File</span>
            </button>

            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-xs font-serif-cormorant tracking-wider text-emerald-200 hover:bg-emerald-900/40 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-serif-cormorant tracking-wider text-[#f8f6f0] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{copiedLink ? "Copied! ✓" : "Copy Link"}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
