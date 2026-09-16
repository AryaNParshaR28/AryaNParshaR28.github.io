export const metadata = {
  title: "Contact",
  description:
    "Contact Aryan for WordPress, Laravel, Drupal, and Shopify freelance development. Email, phone, LinkedIn, and Upwork.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="contact-landing">
        <div className="container">
          <div className="contact-split">
            <div className="contact-main reveal">
              <p className="eyebrow">Contact</p>
              <h1 className="section-title">Let us discuss your project</h1>
              <p className="section-copy">
                Available for freelance and contract work. Reach out by email or phone,
                connect on LinkedIn, or hire me directly on Upwork.
              </p>

              <div className="contact-details">
                <div className="contact-card">
                  <h3>Email</h3>
                  <a href="mailto:panditaryan149@gmail.com">panditaryan149@gmail.com</a>
                </div>
                <div className="contact-card">
                  <h3>Phone</h3>
                  <a href="tel:+917015906412">+91 70159 06412</a>
                </div>
                <div className="contact-card">
                  <h3>Location</h3>
                  <p>Mohali, Punjab, India</p>
                </div>
                <div className="contact-card">
                  <h3>Availability</h3>
                  <p>Open for new projects</p>
                </div>
                <div className="contact-card">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/aryan-parashar-959a8718b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/aryan-parashar-959a8718b
                  </a>
                </div>
                <div className="contact-card">
                  <h3>Upwork</h3>
                  <a
                    href="https://www.upwork.com/freelancers/aryanp3?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    upwork.com/freelancers/aryanp3
                  </a>
                </div>
              </div>
            </div>

            <aside className="contact-cta contact-cta--side reveal">
              <div className="contact-cta-copy">
                <h2>Contact me</h2>
                <p>
                  Share your project goals, timeline, and stack. I will reply with a clear
                  next step for your WordPress, Laravel, Drupal, or Shopify work.
                </p>
              </div>
              <div className="btn-row">
                <a className="btn" href="mailto:panditaryan149@gmail.com">
                  Send email
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.upwork.com/freelancers/aryanp3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on Upwork
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
