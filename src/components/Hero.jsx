import heroImg from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-overlay" />
      <img src={heroImg} alt="Warm therapy office interior" className="hero__bg-img" />

      <div className="container hero__content">
        <div className="hero__badge reveal">
          <span className="badge-dot" /> Accepting New Clients
        </div>

        <h1 className="hero__heading reveal">
          A Space to Heal,<br />
          <em>Transform & Thrive</em>
        </h1>

        <p className="hero__sub reveal">
          You hold it together on the outside, but inside, your mind won’t slow down, your energy feels drained, and even small things feel heavy. It doesn’t have to stay this way. Let’s work together to help you feel like yourself again. Therapy with a registered psychologist can help you understand what’s going on and build a way forward that actually feels better.
        </p>

        <div className="hero__actions reveal">
          <a href="#contact" className="btn btn--primary" id="hero-cta-book">
            Book a Consultation
          </a>
          <a href="#about" className="btn btn--outline" id="hero-cta-about">
            Learn More
          </a>
        </div>

        <div className="hero__trust reveal">
          <div className="trust-item">
            <span className="trust-num">15+</span>
            <span className="trust-label">Years of Practice</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">500+</span>
            <span className="trust-label">Lives Transformed</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">100%</span>
            <span className="trust-label">Confidential Care</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
