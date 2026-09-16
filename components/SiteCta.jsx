import Link from "next/link";

export default function SiteCta() {
  return (
    <section className="section-tight site-cta-section" aria-labelledby="site-cta-heading">
      <div className="container">
        <div className="contact-cta contact-cta--banner reveal">
          <div className="contact-cta-copy">
            <h2 id="site-cta-heading">Let us build your next web project</h2>
            <p>
              If you need a dependable developer for a new build, upgrade, or improvement,
              I would be glad to discuss your goals and recommend a clear next step.
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn" href="/contact/">
              Contact me
            </Link>
            <a
              className="btn btn-ghost"
              href="https://www.upwork.com/freelancers/aryanp3?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire on Upwork
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
