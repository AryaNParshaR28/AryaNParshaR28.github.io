import SiteCta from "@/components/SiteCta";

export const metadata = {
  title: "Services",
  description:
    "WordPress, Laravel, Drupal, Shopify, Node.js, Next.js, Core PHP, HTML static pages, and server deployment services.",
};

const SERVICES = [
  {
    logo: "/images/laravel.png",
    title: "Laravel",
    intro: "Modern PHP applications with solid architecture, secure authentication, and clean APIs.",
    items: [
      "Web applications from scratch",
      "REST API development",
      "Authentication with JWT, Passport, and Sanctum",
      "Laravel customization and feature development",
      "Bug fixing and performance improvements",
      "Third-party API integrations",
      "Payment gateways including Stripe and PayPal",
      "Admin panels and Blade dashboards",
    ],
  },
  {
    logo: "/images/drupal.png",
    title: "Drupal",
    intro: "Enterprise CMS delivery covering migrations, custom modules, search, and theming.",
    items: [
      "Sites built from scratch",
      "Migration from Drupal 6 or 7 to the latest version",
      "Updates from Drupal 8 or 9 to the latest version",
      "Drupal theming and Twig templates",
      "Custom module development",
      "Drupal customization and configuration",
      "Bug resolution and maintenance",
      "Landing pages and content layouts",
      "Apache Solr and Elasticsearch",
      "Drupal Commerce and multisite setups",
    ],
  },
  {
    logo: "/images/wordpress.png",
    title: "WordPress",
    intro: "Flexible websites, stores, and custom features built for editors and business growth.",
    items: [
      "Sites built from scratch",
      "Theme and plugin customization",
      "Custom plugin development",
      "Custom theme development",
      "Elementor page builds",
      "WooCommerce stores",
      "Custom shortcodes",
      "Bug fixing and site maintenance",
    ],
  },
  {
    logo: "/images/shopify.png",
    title: "Shopify",
    intro: "Storefronts and store operations designed for clarity, conversion, and smooth day-to-day use.",
    items: [
      "Store setup and configuration",
      "Product and catalog management",
      "Theme customization and Liquid theming",
      "Shopify app development",
      "Checkout and payment setup",
      "App and third-party integrations",
      "Performance and user experience improvements",
      "Bug fixing and ongoing support",
    ],
  },
  {
    logo: "/images/nodejs.png",
    title: "Node.js",
    intro: "JavaScript backends, APIs, and tooling for modern application workflows.",
    items: [
      "REST API and service development",
      "Authentication and middleware setup",
      "Integrations with third-party services",
      "Scripting, automation, and tooling",
      "Performance and debugging support",
      "Deployment-ready project structure",
    ],
  },
  {
    logo: "/images/nextjs.png",
    title: "Next.js",
    intro: "Fast React applications with strong SEO, routing, and production-ready frontends.",
    items: [
      "App and page router builds",
      "API routes and data fetching",
      "SEO-friendly marketing sites",
      "Dashboards and interactive UI",
      "Performance optimization",
      "Vercel and custom hosting setup",
    ],
  },
  {
    logo: "/images/php.png",
    title: "Core PHP",
    intro: "Lightweight, efficient PHP systems without heavy frameworks when the project needs simplicity.",
    items: [
      "Custom PHP applications",
      "CRUD systems and admin panels",
      "Form handling and validation",
      "MySQL database integration",
      "Legacy PHP maintenance and fixes",
      "Secure file and session handling",
    ],
  },
  {
    logo: "/images/html.png",
    title: "HTML static pages",
    intro: "Clean, fast static websites and landing pages with polished responsive layouts.",
    items: [
      "Marketing and landing pages",
      "Portfolio and brochure sites",
      "Responsive HTML and CSS builds",
      "Accessibility-minded markup",
      "Form and contact page setup",
      "Fast hosting-ready delivery",
    ],
  },
  {
    logo: "/images/server-deployment.png",
    title: "Server deployment",
    intro: "Reliable go-live support covering hosting, configuration, and continuous delivery.",
    items: [
      "cPanel and Linux server setup",
      "Domain, SSL, and DNS configuration",
      "CI/CD pipeline setup",
      "Environment and .env management",
      "Database migration on deploy",
      "Monitoring-ready release support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <p className="eyebrow reveal">Services</p>
            <h1 className="section-title reveal">How I can support your product</h1>
            <p className="section-copy reveal">
              End-to-end development across WordPress, Laravel, Drupal, Shopify, Node.js, Next.js,
              Core PHP, static HTML, and server deployment — from new builds to ongoing fixes.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-block reveal">
              <div className="service-block-head">
                <h2 className="service-title">
                  <img
                    className="service-logo"
                    src={service.logo}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  {service.title}
                </h2>
                <p>{service.intro}</p>
              </div>
              <ul className="service-grid">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <SiteCta />
    </main>
  );
}
