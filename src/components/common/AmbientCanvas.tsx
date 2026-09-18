import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speedY: number;
  speedX: number;
  phase: number;
  phaseSpeed: number;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Limit particles for battery performance & restraint (Section #55)
    const particleCount = Math.min(width > 768 ? 45 : 24, 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        speedY: -(Math.random() * 0.35 + 0.1), // gentle upward float like lamp embers
        speedX: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.02 + 0.008
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.phase += p.phaseSpeed;

        // Wrap around gracefully
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Subtle shimmer
        const shimmer = Math.sin(p.phase) * 0.25;
        const currentAlpha = Math.max(0.1, Math.min(0.85, p.alpha + shimmer));

        // Warm temple lamp golden hue
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(255, 235, 175, ${currentAlpha})`);
        gradient.addColorStop(0.5, `rgba(223, 186, 115, ${currentAlpha * 0.7})`);
        gradient.addColorStop(1, `rgba(180, 130, 60, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-65"
    />
  );
};
