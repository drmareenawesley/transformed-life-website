import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { href: isHome ? '#about' : '/#about', label: 'About' },
    { href: isHome ? '#services' : '/#services', label: 'Services' },
    { href: isHome ? '#approach' : '/#approach', label: 'Approach' },
    { href: isHome ? '#contact' : '/#contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ', isRoute: true },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar__inner">
        <Link 
          to="/" 
          className="navbar__logo" 
          id="nav-logo"
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setMenuOpen(false);
          }}
        >
          <img src={logoImg} alt="Transformed Life Psychology Logo" className="logo-image" />
          <div>
            <span className="logo-name">Transformed Life</span>
            <span className="logo-sub">Psychology</span>
          </div>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {navLinks.map(link =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href={isHome ? '#contact' : '/#contact'} className="navbar__cta" id="nav-cta" onClick={() => setMenuOpen(false)}>
            Book Consultation
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          id="nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
