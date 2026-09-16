export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} Aryan — Web Expert | WordPress, Laravel &amp; Drupal
        </p>
        <p className="footer-links">
          <a href="mailto:panditaryan149@gmail.com">Email</a>
          <span aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/aryan-parashar-959a8718b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://www.upwork.com/freelancers/aryanp3?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
        </p>
      </div>
    </footer>
  );
}
