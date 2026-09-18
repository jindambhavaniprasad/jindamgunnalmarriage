import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Code2, Heart, Mail } from 'lucide-react';

export const NavigationBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) return null;

  const links = [
    { label: 'Journey', href: '#journey', icon: MapPin },
    { label: 'Devotions', href: '#devotions', icon: Sparkles },
    { label: 'Code', href: '#code', icon: Code2 },
    { label: 'Promise', href: '#promise', icon: Heart },
    { label: 'Invitation', href: '#invitation', icon: Mail },
  ];

  return (
    <nav 
      aria-label="Quick Navigation"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] px-2 sm:px-3 py-1.5 rounded-full temple-card-blur border border-amber-400/30 gold-border-glow shadow-2xl flex items-center justify-center gap-1 sm:gap-2 transition-all duration-500 animate-fade-in"
    >
      {links.map((link, idx) => {
        const Icon = link.icon;
        return (
          <a
            key={idx}
            href={link.href}
            aria-label={link.label}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full text-[11px] font-serif-cormorant tracking-wider uppercase text-amber-100/85 hover:text-amber-200 hover:bg-amber-500/10 transition-colors active:scale-95"
          >
            <Icon className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
};
