import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

export const PencilSketchBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pencilPos, setPencilPos] = useState<{ x: number; y: number; visible: boolean; isDrawing: boolean }>({
    x: 0,
    y: 0,
    visible: false,
    isDrawing: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isCleanedUp = false;

    // Load original pencil sketch
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/pencil-sketch.jpg';

    // Offscreen canvas for extracting sketch contours
    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });

    let imgLoaded = false;
    let offData: ImageData | null = null;
    let goldLinesCanvas: HTMLCanvasElement | null = null;

    img.onload = () => {
      if (isCleanedUp) return;
      imgLoaded = true;
      offCanvas.width = img.naturalWidth || 1024;
      offCanvas.height = img.naturalHeight || 682;

      if (offCtx) {
        offCtx.drawImage(img, 0, 0);
        offData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);

        // Pre-render golden luminous line art from the sketch
        goldLinesCanvas = document.createElement('canvas');
        goldLinesCanvas.width = offCanvas.width;
        goldLinesCanvas.height = offCanvas.height;
        const gCtx = goldLinesCanvas.getContext('2d');
        if (gCtx && offData) {
          const gImgData = gCtx.createImageData(offCanvas.width, offCanvas.height);
          const data = offData.data;
          const gData = gImgData.data;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            // Compute darkness (graphite pencil stroke intensity)
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
            const darkness = Math.max(0, 245 - luminance) / 245;

            if (darkness > 0.06) {
              // Luminous antique gold & warm graphite pencil color (#dfba73)
              const strokeIntensity = Math.min(1, darkness * 1.35);
              gData[i] = 223;     // R (#dfba73)
              gData[i + 1] = 186; // G
              gData[i + 2] = 115; // B
              gData[i + 3] = Math.floor(strokeIntensity * 230); // Alpha
            } else {
              gData[i + 3] = 0; // Transparent background
            }
          }
          gCtx.putImageData(gImgData, 0, 0);
        }
      }
    };

    // Graphite dust particles emitted by pencil tip
    const particles: Particle[] = [];

    let currentProgress = 0;
    let targetProgress = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let isScrollingTimer: number;

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;

      scrollVelocity = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      window.clearTimeout(isScrollingTimer);
      isScrollingTimer = window.setTimeout(() => {
        scrollVelocity = 0;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Natural drawing sequence keypoints across the sketch
    // Normalized coordinates (0.0 to 1.0) of key features in the portrait:
    // (Faces -> Hands/Rings -> Garlands -> Attire & Shading)
    const drawingPath = [
      { p: 0.00, x: 0.44, y: 0.35, desc: 'Bhavani forehead & glasses' },
      { p: 0.08, x: 0.47, y: 0.40, desc: 'Foreheads leaning together' },
      { p: 0.16, x: 0.53, y: 0.43, desc: 'Ruchita eyes & smile' },
      { p: 0.24, x: 0.43, y: 0.48, desc: 'Bhavani smile & jawline' },
      { p: 0.32, x: 0.56, y: 0.39, desc: 'Ruchita bridal hair & flowers' },
      { p: 0.40, x: 0.48, y: 0.65, desc: 'Embracing hands & wedding rings' },
      { p: 0.48, x: 0.53, y: 0.73, desc: 'Intricate wedding bangles' },
      { p: 0.58, x: 0.38, y: 0.60, desc: 'Wedding garlands (Varmala) left' },
      { p: 0.68, x: 0.48, y: 0.85, desc: 'Garlands center & clasp' },
      { p: 0.78, x: 0.32, y: 0.75, desc: 'Sherwani drape & textures' },
      { p: 0.88, x: 0.66, y: 0.78, desc: 'Bridal saree embroidery' },
      { p: 0.96, x: 0.68, y: 0.92, desc: 'Saree pallu details' },
      { p: 1.00, x: 0.50, y: 0.55, desc: 'Final flourish' }
    ];

    function getPathPoint(progress: number) {
      if (progress <= 0) return drawingPath[0];
      if (progress >= 1) return drawingPath[drawingPath.length - 1];

      for (let i = 0; i < drawingPath.length - 1; i++) {
        const p1 = drawingPath[i];
        const p2 = drawingPath[i + 1];
        if (progress >= p1.p && progress <= p2.p) {
          const t = (progress - p1.p) / (p2.p - p1.p);
          // Smooth bezier/cosine interpolation
          const smoothT = (1 - Math.cos(t * Math.PI)) / 2;
          return {
            x: p1.x + (p2.x - p1.x) * smoothT,
            y: p1.y + (p2.y - p1.y) * smoothT
          };
        }
      }
      return drawingPath[0];
    }

    const render = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);

      // Smooth lag towards target scroll
      currentProgress += (targetProgress - currentProgress) * 0.08;

      ctx.clearRect(0, 0, w, h);

      if (imgLoaded && goldLinesCanvas) {
        // Calculate aspect ratio preserving center cover/contain
        const imgAspect = goldLinesCanvas.width / goldLinesCanvas.height;
        const screenAspect = w / h;

        let drawW, drawH, drawX, drawY;
        if (screenAspect > imgAspect) {
          drawW = w * 0.92;
          drawH = drawW / imgAspect;
          drawX = (w - drawW) / 2;
          drawY = (h - drawH) / 2;
        } else {
          drawH = h * 0.88;
          drawW = drawH * imgAspect;
          drawX = (w - drawW) / 2;
          drawY = (h - drawH) / 2;
        }

        // 1. Draw very faint initial gesture blueprint (guide lines)
        ctx.save();
        ctx.globalAlpha = 0.07;
        ctx.drawImage(goldLinesCanvas, drawX, drawY, drawW, drawH);
        ctx.restore();

        // 2. Draw revealed pencil strokes based on scroll progress
        ctx.save();
        const activePoint = getPathPoint(currentProgress);
        const screenPencilX = drawX + activePoint.x * drawW;
        const screenPencilY = drawY + activePoint.y * drawH;

        // Radius of revealed drawing area expands as progress increases
        // From subtle initial radius to full image reveal
        const minRevealRadius = 120;
        const maxRevealRadius = Math.max(drawW, drawH) * 1.35;
        const currentRadius = minRevealRadius + (maxRevealRadius - minRevealRadius) * Math.pow(currentProgress, 0.75);

        // Mask clipping: soft organic radial reveal around active pencil drawing center
        ctx.save();
        ctx.beginPath();
        // At progress > 0.88, expand to entire image
        if (currentProgress > 0.88) {
          ctx.rect(0, 0, w, h);
        } else {
          ctx.arc(screenPencilX, screenPencilY, currentRadius, 0, Math.PI * 2);
          // Also include the previously drawn areas along the path
          for (let i = 0; i < drawingPath.length; i++) {
            if (drawingPath[i].p <= currentProgress) {
              const prevPt = drawingPath[i];
              const px = drawX + prevPt.x * drawW;
              const py = drawY + prevPt.y * drawH;
              ctx.moveTo(px + currentRadius * 0.7, py);
              ctx.arc(px, py, currentRadius * 0.8, 0, Math.PI * 2);
            }
          }
        }
        ctx.clip();

        // Render completed lines within the active drawn mask
        ctx.globalAlpha = 0.45 + currentProgress * 0.25; // Richer opacity as completed
        ctx.drawImage(goldLinesCanvas, drawX, drawY, drawW, drawH);
        ctx.restore();

        // 3. Procedural cross-hatch sketching shimmer around the pencil tip while actively scrolling
        const isActivelyDrawing = scrollVelocity > 0.8;

        if (isActivelyDrawing && currentProgress < 0.98) {
          ctx.save();
          ctx.strokeStyle = 'rgba(245, 226, 179, 0.45)';
          ctx.lineWidth = 1;
          for (let k = 0; k < 6; k++) {
            const jitterX = screenPencilX + (Math.random() - 0.5) * 45;
            const jitterY = screenPencilY + (Math.random() - 0.5) * 45;
            const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
            const len = 12 + Math.random() * 16;
            ctx.beginPath();
            ctx.moveTo(jitterX, jitterY);
            ctx.lineTo(jitterX + Math.cos(angle) * len, jitterY + Math.sin(angle) * len);
            ctx.stroke();
          }
          ctx.restore();

          // Emit small graphite / gold sparkle dust
          if (particles.length < 35 && Math.random() < 0.6) {
            particles.push({
              x: screenPencilX,
              y: screenPencilY,
              vx: (Math.random() - 0.5) * 1.5,
              vy: (Math.random() - 0.5) * 1.5 - 0.5,
              alpha: 0.8,
              size: Math.random() * 2 + 1
            });
          }
        }

        // 4. Update and render graphite particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.025;
          if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(223, 186, 115, ${p.alpha})`;
          ctx.fill();
        }

        // 5. Update floating pencil position in state
        setPencilPos({
          x: screenPencilX,
          y: screenPencilY,
          visible: currentProgress > 0.01 && currentProgress < 0.99,
          isDrawing: isActivelyDrawing
        });
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full pointer-events-none opacity-85"
      />

      {/* Floating Animated Artist Pencil Tip */}
      {pencilPos.visible && (
        <div
          aria-hidden="true"
          className="fixed z-10 pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${pencilPos.x}px, ${pencilPos.y}px) translate(-4px, -46px) ${
              pencilPos.isDrawing ? 'rotate(-2deg)' : 'rotate(0deg)'
            }`
          }}
        >
          <div className="relative">
            {/* Soft Graphite / Golden Glow at Lead Tip */}
            <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-amber-400/40 blur-[3px] -translate-x-1/2 translate-y-1/2 animate-ping" />

            {/* Realistic Artist Sketching Pencil SVG */}
            <svg
              width="42"
              height="52"
              viewBox="0 0 42 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            >
              {/* Pencil Body / Hexagonal Wood */}
              <path
                d="M 28 4 L 38 14 L 14 42 L 4 32 Z"
                fill="#C5A059"
                stroke="#DFBA73"
                strokeWidth="1"
              />
              <path
                d="M 28 4 L 33 9 L 9 37 L 4 32 Z"
                fill="#8C6826"
                opacity="0.5"
              />
              {/* Sharpened Wood Cone */}
              <path
                d="M 4 32 L 14 42 L 3 49 Z"
                fill="#F5E2B3"
                stroke="#C5A059"
                strokeWidth="0.8"
              />
              {/* Graphite Lead Tip */}
              <path
                d="M 5 46 L 7 48 L 1 51 Z"
                fill="#2D3748"
              />
              <circle cx="1" cy="51" r="1.2" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
