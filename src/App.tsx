import { useState, useEffect } from 'react';
import { AmbientCanvas } from './components/common/AmbientCanvas';
import { SoundControl } from './components/common/SoundControl';
import { NavigationBar } from './components/common/NavigationBar';
import { IntroTransition } from './components/intro/IntroTransition';
import { HeroSection } from './components/hero/HeroSection';
import { JourneyMap } from './components/journey/JourneyMap';
import { DailyLifeSection } from './components/life/DailyLifeSection';
import { DevotionsSection } from './components/devotions/DevotionsSection';
import { CodeLoveSection } from './components/code/CodeLoveSection';
import { BTSQuoteSection } from './components/bts/BTSQuoteSection';
import { PromiseSection } from './components/promise/PromiseSection';
import { InvitationCard } from './components/invitation/InvitationCard';
import { BlessingSection } from './components/blessings/BlessingSection';
import { SecretLetterModal } from './components/secret/SecretLetterModal';
import { Footer } from './components/footer/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [isPrivateFromBhavani, setIsPrivateFromBhavani] = useState(false);

  useEffect(() => {
    // Parse URL query parameters
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const from = params.get('from');

    if (from === 'bhavani' || from === 'bhavaniprasad' || mode === 'secret') {
      setIsPrivateFromBhavani(true);
    }

    if (mode === 'invite') {
      // Direct invite mode skips opening intro
      setHasEntered(true);
      setTimeout(() => {
        const el = document.getElementById('invitation');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  // Ensure background music starts smoothly on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      // Audio begins loop
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#f8f6f0] bg-[#050814] selection:bg-[#dfba73]/30 selection:text-white font-sans">
      {/* Subtle Ambient Particle Layer */}
      <AmbientCanvas />

      {/* Floating Audio Controls (Bell + Drone) */}
      <SoundControl />

      {/* Floating Quick Navigation Bar */}
      {hasEntered && <NavigationBar />}

      {/* Opening Minimal Intro Overlay */}
      {!hasEntered && (
        <IntroTransition
          onEnter={() => setHasEntered(true)}
          isPrivateFromBhavani={isPrivateFromBhavani}
        />
      )}

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <HeroSection />
        <JourneyMap />
        <DailyLifeSection />
        <DevotionsSection />
        <CodeLoveSection onOpenSecret={() => setIsSecretOpen(true)} />
        <BTSQuoteSection />
        <PromiseSection />
        <InvitationCard />
        <BlessingSection />
      </main>

      {/* Footer & Secret Reveal Button */}
      <Footer onOpenSecret={() => setIsSecretOpen(true)} />

      {/* Personal Surprise Letter Modal */}
      <SecretLetterModal
        isOpen={isSecretOpen}
        onClose={() => setIsSecretOpen(false)}
      />
    </div>
  );
}

export default App;

