"use client";

import { useEffect, useRef } from "react";

const PLATFORMS = [
  { src: "/images/wordpress.png", alt: "WordPress", title: "WordPress", copy: "Themes, plugins, Elementor, WooCommerce." },
  { src: "/images/laravel.png", alt: "Laravel", title: "Laravel", copy: "Custom apps, APIs, auth, and admin tools." },
  { src: "/images/drupal.png", alt: "Drupal", title: "Drupal", copy: "Modules, migrations, Commerce, enterprise CMS." },
  { src: "/images/shopify.png", alt: "Shopify", title: "Shopify", copy: "Stores, themes, apps, and catalog work." },
  { src: "/images/nodejs.png", alt: "Node.js", title: "Node.js", copy: "APIs, tooling, and JavaScript backends." },
  { src: "/images/nextjs.png", alt: "Next.js", title: "Next.js", copy: "Fast React apps and modern frontends." },
  { src: "/images/php.png", alt: "Core PHP", title: "Core PHP", copy: "Lightweight scripts and custom PHP systems." },
  { src: "/images/html.png", alt: "HTML static pages", title: "HTML static pages", copy: "Clean landing pages and static websites." },
  { src: "/images/server-deployment.png", alt: "Server deployment", title: "Server deployment", copy: "Hosting setup, CI/CD, and go-live support." },
];

function PlatformCard({ platform }) {
  return (
    <article className="platform-card">
      <div className="platform-media">
        <img src={platform.src} alt={platform.alt} width={120} height={120} loading="lazy" />
      </div>
      <h3>{platform.title}</h3>
      <p>{platform.copy}</p>
    </article>
  );
}

export default function PlatformSlider() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    let offset = 0;
    let paused = false;
    const speed = 0.45;
    let halfWidth = 0;
    let raf = 0;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };

    const apply = () => {
      if (halfWidth > 0) {
        offset = ((offset % halfWidth) + halfWidth) % halfWidth;
      }
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = () => {
      if (!paused) {
        offset += speed;
        apply();
      }
      raf = window.requestAnimationFrame(tick);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      raf = window.requestAnimationFrame(tick);
    }

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };

    slider.addEventListener("mouseenter", onEnter);
    slider.addEventListener("mouseleave", onLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      slider.removeEventListener("mouseenter", onEnter);
      slider.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="platform-slider reveal" data-platform-slider ref={sliderRef}>
      <div className="platform-slider-viewport">
        <div className="platform-track" ref={trackRef}>
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.title} platform={p} />
          ))}
          {PLATFORMS.map((p) => (
            <PlatformCard key={`${p.title}-dup`} platform={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
