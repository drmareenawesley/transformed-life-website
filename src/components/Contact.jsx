import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">

        <div className="contact__info reveal">
          <p className="section-label">Let's Connect</p>
          <h2 className="section-heading">
            Ready to Take the <em>First Step?</em>
          </h2>
          <p className="contact__desc">
            Reaching out can feel daunting, but it's the most important step you can take.
            Dr. Wesley offers a free 15-minute consultation — no pressure, no commitment.
          </p>

          <div className="contact__details">

            <a href="mailto:info@transformedlifepsychology.ca" className="contact-item" id="contact-email">
              <div className="contact-item__icon">✉️</div>
              <div>
                <span className="contact-item__label">Email Us</span>
                <span className="contact-item__value">info@transformedlifepsychology.ca</span>
              </div>
            </a>
            <div className="contact-item" id="contact-location">
              <div className="contact-item__icon">📍</div>
              <div>
                <span className="contact-item__label">Location</span>
                <span className="contact-item__value">Ontario, Canada</span>
              </div>
            </div>
            <div className="contact-item" id="contact-hours">
              <div className="contact-item__icon">🕐</div>
              <div>
                <span className="contact-item__label">Office Hours</span>
                <span className="contact-item__value">Mon–Sat: 9am – 8pm</span>
              </div>
            </div>
          </div>

          <div className="contact__note">
            <span>🔒</span>
            <p>All communications are strictly confidential and governed by the standards of the College of Psychologists of Ontario.</p>
          </div>
        </div>

        <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="contact__calendar-card">
            <h3 className="form-title">Book a Free Consultation</h3>
            <p className="calendar-desc" style={{ marginBottom: '24px', color: 'var(--clr-text-muted)', lineHeight: '1.6' }}>
              Take the next step in your healing journey. Choose a date and time that works for you by accessing my secure booking portal below.
            </p>
            <a 
              href="https://calendar.app.google/VgMJhsieEM6Hmeik6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--primary" 
              id="calendar-booking-btn"
              style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}
            >
              Open Booking Calendar 🗓️
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
