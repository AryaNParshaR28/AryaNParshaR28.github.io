"use client";

const CAPABILITIES = [
  {
    index: "01",
    title: "WordPress",
    copy: "Custom themes, plugins, Elementor pages, WooCommerce stores, and third-party integrations tailored to your brand.",
  },
  {
    index: "02",
    title: "Laravel / Core PHP",
    copy: "Custom web applications, secure authentication, admin panels, business workflows, and REST APIs built for lasting use.",
  },
  {
    index: "03",
    title: "Drupal",
    copy: "Custom modules, theming, Commerce, multisite setups, version upgrades, and structured migrations for large platforms.",
  },
  {
    index: "04",
    title: "Shopify",
    copy: "Store setup, theme customization, catalog management, app development, and e-commerce workflow improvements.",
  },
  {
    index: "05",
    title: "Node.js & Next.js",
    copy: "Modern JavaScript backends and frontends for APIs, dashboards, and performance-focused web experiences.",
  },
  {
    index: "06",
    title: "Static sites & deployment",
    copy: "HTML landing pages, hosting setup, CI/CD pipelines, and reliable go-live support for production launches.",
  },
];

export default function CapabilityGrid() {
  return (
    <div className="capability-grid">
      {CAPABILITIES.map((item, i) => (
        <article
          key={item.index}
          className="capability-card reveal"
          style={{ "--d": i }}
          onPointerMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg)`;
          }}
          onPointerLeave={(e) => {
            e.currentTarget.style.transform = "";
          }}
        >
          <span className="capability-index">{item.index}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}
