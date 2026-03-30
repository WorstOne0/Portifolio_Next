"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  speed: number;
  pulse: number;
}

interface TrailParticle {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  active: boolean;
  trail: TrailParticle[];
  color: [number, number, number]; // r,g,b
}

function makeComet(canvas: HTMLCanvasElement, kind: number): Comet {
  // kind 0: left→right, slight up
  // kind 1: right→left, slight down
  // kind 2: top-right→bottom-left diagonal
  // kind 3: left→right at steep angle
  const speed = 3.2 + Math.random() * 2.6;
  const configs: { x: number; y: number; vx: number; vy: number; color: [number, number, number] }[] = [
    { x: -70, y: canvas.height * (0.15 + Math.random() * 0.4), vx: speed, vy: -speed * 0.07, color: [130, 190, 255] },
    { x: canvas.width + 70, y: canvas.height * (0.4 + Math.random() * 0.35), vx: -speed, vy: speed * 0.08, color: [180, 140, 255] },
    { x: canvas.width * (0.55 + Math.random() * 0.35), y: -70, vx: -speed * 0.65, vy: speed * 0.75, color: [120, 210, 200] },
    { x: -70, y: canvas.height * (0.55 + Math.random() * 0.3), vx: speed * 0.9, vy: -speed * 0.44, color: [255, 200, 120] },
  ];
  const c = configs[kind];
  return { ...c, active: true, trail: [] };
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      opacity: Math.random() * 0.65 + 0.15,
      speed: Math.random() * 0.15 + 0.02,
      pulse: Math.random() * Math.PI * 2,
    }));

    // 4 comets, each with its own timer
    const comets: (Comet | null)[] = [null, null, null, null];
    const cometTimers = [180, 420, 660, 900]; // staggered initial delays at ~60fps

    const isOffScreen = (c: Comet) =>
      c.x < -150 || c.x > canvas.width + 150 || c.y < -150 || c.y > canvas.height + 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Nebulas
      const nebulas = [
        { cx: 0.74, cy: 0.2, r: 0.44, color: "rgba(91, 33, 182, 0.13)" },
        { cx: 0.14, cy: 0.78, r: 0.36, color: "rgba(11, 94, 205, 0.12)" },
        { cx: 0.5, cy: 0.48, r: 0.28, color: "rgba(14, 90, 110, 0.07)" },
        { cx: 0.88, cy: 0.65, r: 0.22, color: "rgba(91, 33, 182, 0.06)" },
      ];
      nebulas.forEach(({ cx, cy, r, color }) => {
        const g = ctx.createRadialGradient(
          canvas.width * cx, canvas.height * cy, 0,
          canvas.width * cx, canvas.height * cy, canvas.width * r
        );
        g.addColorStop(0, color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Stars
      stars.forEach((star) => {
        star.pulse += 0.004;
        const op = Math.max(0, Math.min(1, star.opacity + Math.sin(star.pulse) * 0.2));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
        star.y += star.speed * 0.055;
        if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
      });

      // Comets
      for (let i = 0; i < 4; i++) {
        if (!comets[i]) {
          cometTimers[i]++;
          const intervals = [660, 720, 780, 840];
          if (cometTimers[i] >= intervals[i]) {
            cometTimers[i] = 0;
            comets[i] = makeComet(canvas, i);
          }
          continue;
        }

        const c = comets[i]!;

        // Add trail
        c.trail.push({ x: c.x, y: c.y, opacity: 0.9, size: 2.6 + Math.random() });

        // Move
        c.x += c.vx;
        c.y += c.vy;

        // Fade trail
        c.trail = c.trail.filter((p) => p.opacity > 0.012);
        c.trail.forEach((p) => { p.opacity *= 0.86; p.size *= 0.92; });

        // Draw trail
        const [r, g, b] = c.color;
        c.trail.forEach((p) => {
          const tg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.2);
          tg.addColorStop(0, `rgba(${r},${g},${b},${p.opacity})`);
          tg.addColorStop(0.4, `rgba(${r},${g},${b},${p.opacity * 0.45})`);
          tg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = tg;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw head glow
        const hg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 8);
        hg.addColorStop(0, "rgba(255,255,255,1)");
        hg.addColorStop(0.3, `rgba(${r},${g},${b},0.85)`);
        hg.addColorStop(0.7, `rgba(${r},${g},${b},0.3)`);
        hg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
        ctx.fill();

        if (isOffScreen(c)) comets[i] = null;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
