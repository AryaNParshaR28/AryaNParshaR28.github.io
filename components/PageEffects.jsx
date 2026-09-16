"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("is-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");

          if (entry.target.classList.contains("stagger")) {
            entry.target.querySelectorAll("li").forEach((li, i) => {
              li.style.transitionDelay = `${0.05 * i}s`;
              li.classList.add("is-visible");
            });
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    const observe = () => {
      document
        .querySelectorAll(".reveal, .project-item, .capability-card, .stagger")
        .forEach((el) => {
          if (!el.classList.contains("is-visible")) observer.observe(el);
        });
    };

    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
