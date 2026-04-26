import './Footer.css';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logoImg} alt="Transformed Life Psychology Logo" className="footer__logo-img" />
          <div>
            <span className="footer__name">Transformed Life Psychology</span>
            <span className="footer__tagline">Dr. Mareena Wesley, Registered Psychologist</span>
          </div>
        </div>

        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__contact-row">
          <a href="mailto:info@transformedlifepsychology.ca">info@transformedlifepsychology.ca</a>
          <span className="footer__dot">·</span>
          <span>Ontario, Canada</span>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} Transformed Life Psychology. All rights reserved.</p>
          <p className="footer__crisis">
            If you are in crisis, please call <strong>9-8-8</strong> (Canada Suicide Crisis Helpline) or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
}
