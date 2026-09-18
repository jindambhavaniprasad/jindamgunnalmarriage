// Background Music (Jersey Title Theme) and Procedural Temple Bell Synthesizer

let bgAudio: HTMLAudioElement | null = null;
const audioListeners: ((playing: boolean) => void)[] = [];

/**
 * Initializes and returns the background audio element
 */
export function getBackgroundMusic(): HTMLAudioElement {
  if (!bgAudio && typeof window !== 'undefined') {
    bgAudio = new Audio('/audio/jersey-theme.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.45;
    bgAudio.preload = 'auto';

    bgAudio.addEventListener('play', () => {
      audioListeners.forEach(cb => cb(true));
    });

    bgAudio.addEventListener('pause', () => {
      audioListeners.forEach(cb => cb(false));
    });

    bgAudio.addEventListener('ended', () => {
      if (bgAudio && bgAudio.loop) {
        bgAudio.play().catch(() => {});
      }
    });
  }
  return bgAudio!;
}

/**
 * Starts playing the Jersey Title Theme background music in continuous loop
 */
export function playBackgroundMusic(): Promise<void> {
  try {
    const audio = getBackgroundMusic();
    audio.loop = true;
    
    // Start with gentle volume fade-in
    audio.volume = 0.4;
    return audio.play().catch((err) => {
      console.warn("Background audio play error (interaction required):", err);
    });
  } catch (err) {
    console.warn("Audio play error:", err);
    return Promise.resolve();
  }
}

/**
 * Pauses the background music
 */
export function pauseBackgroundMusic(): void {
  try {
    if (bgAudio) {
      bgAudio.pause();
    }
  } catch (err) {
    console.warn("Audio pause error:", err);
  }
}

/**
 * Toggles background music between play and pause
 */
export function toggleBackgroundMusic(): boolean {
  try {
    const audio = getBackgroundMusic();
    if (audio.paused) {
      playBackgroundMusic();
      return true;
    } else {
      pauseBackgroundMusic();
      return false;
    }
  } catch (err) {
    console.warn("Toggle audio error:", err);
    return false;
  }
}

/**
 * Subscribes to music play/pause state changes
 */
export function onMusicStateChange(callback: (playing: boolean) => void): () => void {
  audioListeners.push(callback);
  callback(bgAudio ? !bgAudio.paused : false);
  return () => {
    const index = audioListeners.indexOf(callback);
    if (index > -1) audioListeners.splice(index, 1);
  };
}

/**
 * Checks if background music is currently playing
 */
export function isMusicPlaying(): boolean {
  return bgAudio ? !bgAudio.paused : false;
}

// ----------------------------------------------------
// Procedural Web Audio API Temple Bell Synthesizer
// ----------------------------------------------------
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a resonant Indian Temple Bell chime with natural harmonics
 */
export function playTempleBell(gainVolume = 0.5): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const partials = [
      { freq: 432, gain: 0.8, decay: 3.5 },
      { freq: 864, gain: 0.5, decay: 2.8 },
      { freq: 1296, gain: 0.35, decay: 2.2 },
      { freq: 1728, gain: 0.2, decay: 1.8 },
      { freq: 2400, gain: 0.15, decay: 1.2 },
      { freq: 3450, gain: 0.08, decay: 0.8 },
    ];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(gainVolume, now);
    masterGain.connect(ctx.destination);

    partials.forEach(p => {
      const osc = ctx.createOscillator();
      const pGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(p.freq, now);

      pGain.gain.setValueAtTime(0.001, now);
      pGain.gain.exponentialRampToValueAtTime(p.gain, now + 0.015);
      pGain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(pGain);
      pGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + p.decay);
    });
  } catch (err) {
    console.warn("Web Audio temple bell could not play:", err);
  }
}

