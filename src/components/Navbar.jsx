import { useState, useEffect } from 'react';
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

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#approach', label: 'Approach' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" id="nav-logo">
          <img src={logoImg} alt="Transformed Life Psychology Logo" className="logo-image" />
        </a>

        <nav className={`navbar__links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" id="nav-cta" onClick={() => setMenuOpen(false)}>
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
