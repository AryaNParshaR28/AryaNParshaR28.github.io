"use client";

import { useEffect, useRef } from "react";

const ICONS = [
  { src: "/images/wordpress.png", alt: "", style: { "--x": "8%", "--y": "12%", "--s": 1.05, "--d": "0.05s", "--depth": 1.2 } },
  { src: "/images/laravel.png", alt: "", style: { "--x": "42%", "--y": "6%", "--s": 0.92, "--d": "0.15s", "--depth": 0.7 } },
  { src: "/images/drupal.png", alt: "", style: { "--x": "72%", "--y": "14%", "--s": 1, "--d": "0.25s", "--depth": 1.1 } },
  { src: "/images/shopify.png", alt: "", style: { "--x": "18%", "--y": "38%", "--s": 0.88, "--d": "0.35s", "--depth": 0.85 } },
  { src: "/images/nodejs.png", alt: "", style: { "--x": "52%", "--y": "34%", "--s": 1.08, "--d": "0.2s", "--depth": 1.35 } },
  { src: "/images/nextjs.png", alt: "", style: { "--x": "78%", "--y": "42%", "--s": 0.95, "--d": "0.45s", "--depth": 0.95 } },
  { src: "/images/php.png", alt: "", style: { "--x": "10%", "--y": "66%", "--s": 0.9, "--d": "0.3s", "--depth": 0.75 } },
  { src: "/images/html.png", alt: "", style: { "--x": "40%", "--y": "62%", "--s": 0.86, "--d": "0.55s", "--depth": 1.05 } },
  {
    src: "/images/server-deployment.png",
    alt: "Server deployment",
    title: "Server deployment",
    style: { "--x": "68%", "--y": "70%", "--s": 1, "--d": "0.4s", "--depth": 1.25 },
  },
  { src: "/images/javascript.png", alt: "", style: { "--x": "88%", "--y": "58%", "--s": 0.82, "--d": "0.6s", "--depth": 0.65 } },
  { src: "/images/mysql.png", alt: "", style: { "--x": "28%", "--y": "84%", "--s": 0.84, "--d": "0.5s", "--depth": 0.9 } },
];

export default function HeroFloat() {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    const hero = field?.closest(".hero");
    if (!field || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const icons = Array.from(field.querySelectorAll(".float-icon"));
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      field.style.setProperty("--tilt-x", `${(-currentY * 5).toFixed(2)}deg`);
      field.style.setProperty("--tilt-y", `${(currentX * 7).toFixed(2)}deg`);

      icons.forEach((icon) => {
        const depth = parseFloat(icon.style.getPropertyValue("--depth")) || 1;
        const px = currentX * 22 * depth;
        const py = currentY * 16 * depth;
        icon.style.setProperty("--px", `${px.toFixed(1)}px`);
        icon.style.setProperty("--py", `${py.toFixed(1)}px`);
        icon.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0)`;
      });

      raf = window.requestAnimationFrame(tick);
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    raf = window.requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-float" aria-hidden="true" ref={fieldRef}>
      {ICONS.map((icon) => (
        <span
          key={icon.src + icon.style["--x"]}
          className="float-icon"
          style={icon.style}
          title={icon.title}
        >
          <span className="float-icon-orb">
            <img src={icon.src} alt={icon.alt} />
          </span>
        </span>
      ))}
    </div>
  );
}
