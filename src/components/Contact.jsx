import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In production, connect this to a backend / email service
    setSubmitted(true);
  };

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
                <span className="contact-item__value">Mon–Fri: 9am – 6pm</span>
              </div>
            </div>
          </div>

          <div className="contact__note">
            <span>🔒</span>
            <p>All communications are strictly confidential and governed by the standards of the College of Psychologists of Ontario.</p>
          </div>
        </div>

        <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          {submitted ? (
            <div className="form-success">
              <span>💚</span>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. Dr. Wesley will respond within 1–2 business days. You've taken a brave first step.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
              <h3 className="form-title">Book a Free Consultation</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
  
                <div className="form-group">
                  <label htmlFor="service">Area of Concern</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    <option value="anxiety">Anxiety & Stress</option>
                    <option value="depression">Depression</option>
                    <option value="trauma">Trauma & PTSD</option>
                    <option value="grief">Grief & Loss</option>
                    <option value="life">Life Transitions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" placeholder="Tell me a little about what has brought you here today…" rows={5} value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn--primary form-submit" id="form-submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
