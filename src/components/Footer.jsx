import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logoImg from '../assets/logo.png';
import ptBadge from '../assets/psychology-today.png';

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link 
          to="/" 
          className="footer__brand"
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src={logoImg} alt="Transformed Life Psychology Logo" className="footer__logo-img" />
          <div>
            <span className="footer__name">Transformed Life Psychology</span>
            <span className="footer__tagline">Dr. Mareena Wesley, Registered Psychologist</span>
          </div>
        </Link>

        <nav className="footer__links">
          <a href={isHome ? '#about' : '/#about'}>About</a>
          <a href={isHome ? '#services' : '/#services'}>Services</a>
          <a href={isHome ? '#approach' : '/#approach'}>Approach</a>
          <a href={isHome ? '#contact' : '/#contact'}>Contact</a>
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="footer__contact-row">
          <a href="mailto:info@transformedlifepsychology.ca">info@transformedlifepsychology.ca</a>
          <span className="footer__dot">·</span>
          <span>Ontario, Canada</span>
        </div>

        <div className="footer__bottom">
          <p className="footer__service-areas">
            Serving Mississauga, Oakville, Milton, Brampton, Etobicoke, Toronto, Burlington, Vaughan, Markham, Richmond Hill, Scarborough, North York, Ajax, Whitby, Oshawa, Hamilton, Caledon, Halton Hills, Georgetown, Aurora, Newmarket, Pickering, East York, Woodbridge, Thornhill, Stouffville with online therapy across Ontario.
          </p>
          <p className="footer__copy">© {year} Transformed Life Psychology. All rights reserved.</p>
          <p className="footer__crisis">
            If you are in crisis, please call <strong>9-8-8</strong> (Canada Suicide Crisis Helpline) or go to your nearest emergency room.
          </p>
          <div className="footer__badge-wrap">
            <img src={ptBadge} alt="Verified by Psychology Today" className="footer__pt-badge" />
          </div>
        </div>
      </div>
    </footer>
  );
}
