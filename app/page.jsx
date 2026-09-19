import Link from "next/link";
import HeroFloat from "@/components/HeroFloat";
import PlatformSlider from "@/components/PlatformSlider";
import CapabilityGrid from "@/components/CapabilityGrid";
import SiteCta from "@/components/SiteCta";

const SKILLS = [
  "Web Application Development",
  "PHP",
  "Core PHP",
  "WordPress",
  "Drupal",
  "Laravel",
  "Shopify",
  "Node.js",
  "Next.js",
  "HTML static pages",
  "Server deployment",
  "JavaScript",
  "Bootstrap",
  "Elementor",
  "Plugin Development",
  "Theme Development",
  "Database",
  "MySQL",
  "RESTful API",
  "Payment Gateway Integration",
  "Web Application",
  "Git",
  "CI/CD",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <HeroFloat />
        <div className="container">
          <p className="hero-kicker">Web Expert | WordPress, Laravel &amp; Drupal Expert</p>
          <div className="hero-identity">
            <img
              className="hero-portrait"
              src="/images/profile-pic.webp"
              alt="Aryan"
              width={112}
              height={112}
            />
            <h1 className="brand-mark">
              Aryan<em>.</em>
            </h1>
          </div>
          <p className="hero-lead">
            I design and develop reliable websites and web applications with WordPress, Laravel,
            Drupal, and Shopify — plus Node.js, Next.js, Core PHP, static sites, and server deployment.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/projects/">
              View projects
            </Link>
            <Link className="btn btn-ghost" href="/contact/">
              Start a project
            </Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>3+ years</strong>
              Professional experience
            </div>
            <div className="hero-meta-item">
              <strong>Mohali, India</strong>
              Available remotely
            </div>
            <div className="hero-meta-item hero-meta-item--available">
              <strong>Available</strong>
              Open for new projects
            </div>
          </div>
        </div>
      </section>

      <section className="section platforms-section band-light">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">Stacks I ship with every week</h2>
            <p className="section-copy">
              From CMS and commerce to Node.js, static sites, and server deployment — scroll through the full toolkit.
            </p>
          </div>
          <PlatformSlider />
        </div>
      </section>

      <section className="section about-section band-soft">
        <div className="container">
          <div className="about-layout">
            <div className="about-intro reveal">
              <p className="eyebrow">About</p>
              <h2 className="section-title">Building web solutions that businesses can trust.</h2>
            </div>
            <div className="prose reveal">
              <p>
                I work at the intersection of content platforms, e-commerce, and custom application logic.
                That includes booking systems, discount and referral workflows, administration tools,
                and APIs that keep web and mobile clients aligned.
              </p>
              <p>
                I have delivered Drupal upgrades and migrations, Laravel applications with complex business rules,
                and WordPress and Shopify projects that content and store teams can manage with confidence.
                I also support search setup, payment integrations, batch data processing, and deployment pipelines
                when a project needs a complete technical path from build to release.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section band-light">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Self-reported expertise</h2>
            <p className="section-copy">
              Practical skills across CMS platforms, PHP frameworks, modern JavaScript, and delivery tooling.
            </p>
          </div>
          <ul className="skill-cloud reveal">
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section expertise-section band-soft">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Expertise</p>
            <h2 className="section-title">What I can help you with</h2>
            <p className="section-copy">
              Focused delivery across the stacks I use every day — from first build to ongoing improvement.
            </p>
          </div>
          <CapabilityGrid />
        </div>
      </section>

      <section className="section organisations-section band-light">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Career</p>
            <h2 className="section-title">Organisations I worked with</h2>
          </div>
          <ul className="org-list">
            <li className="org-item reveal">
              <div className="org-main">
                <h3>Codedrill Infotech</h3>
                <p>PHP Developer</p>
              </div>
              <span className="org-time">Jan 2024 – Present</span>
            </li>
            <li className="org-item reveal">
              <div className="org-main">
                <h3>Omninos Solutions</h3>
                <p>PHP Developer Intern</p>
              </div>
              <span className="org-time">Sep 2021 – Dec 2021</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section experience-section band-soft">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Background</p>
            <h2 className="section-title">Experience and approach</h2>
          </div>
          <div className="experience-grid experience-grid--two">
            <div className="home-block reveal">
              <h3>Project highlights</h3>
              <ul className="check-list stagger">
                <li>Enterprise Drupal applications with search, batch processing, and custom modules</li>
                <li>Laravel applications with carts, discounts, referrals, and administration tools</li>
                <li>WordPress websites and plugins designed for content teams</li>
                <li>Shopify store customizations and catalog management</li>
                <li>Legacy system migrations and large dataset processing</li>
                <li>Production payment systems and third-party API integrations</li>
              </ul>
            </div>
            <div className="home-block reveal">
              <h3>Why work with me</h3>
              <ul className="check-list stagger">
                <li>Clear communication from planning through delivery</li>
                <li>Clean, maintainable code that is easy to extend</li>
                <li>Strong debugging and problem-solving skills</li>
                <li>Practical balance of business needs and technical quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteCta />
    </main>
  );
}
