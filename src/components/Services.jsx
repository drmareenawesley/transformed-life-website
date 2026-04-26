import { useState } from 'react';
import './Services.css';

const services = [
  {
    id: 'anxiety',
    icon: '🌊',
    title: 'Anxiety & Stress',
    desc: 'Learn to manage overwhelming thoughts, chronic worry, and panic through evidence-based strategies that restore calm and confidence to your daily life.',
    tags: ['CBT', 'Mindfulness', 'Exposure Therapy'],
  },
  {
    id: 'depression',
    icon: '🌱',
    title: 'Depression',
    desc: 'Navigate the weight of depression with compassionate support and personalized treatment plans that help you reconnect with meaning, motivation, and joy.',
    tags: ['Behavioural Activation', 'CBT', 'Integrative'],
  },
  {
    id: 'trauma',
    icon: '🛡️',
    title: 'Trauma & PTSD',
    desc: 'Heal from past traumatic experiences in a safe, non-judgmental space using proven therapies designed to process pain and build lasting resilience.',
    tags: ['EMDR', 'TF-CBT', 'Somatic Approaches'],
  },
  {
    id: 'grief',
    icon: '🕊️',
    title: 'Grief & Loss',
    desc: 'Whether you are grieving a loved one, a relationship, or a life transition, Dr. Wesley provides a compassionate space to process your loss at your own pace.',
    tags: ['Grief Counselling', 'Narrative Therapy'],
  },
  {
    id: 'faith',
    icon: '✝️',
    title: 'Faith-Based Counselling',
    desc: 'For those who wish to integrate their Christian faith into the healing process, Dr. Wesley offers a spiritually sensitive approach that honours your beliefs and values alongside evidence-based care.',
    tags: ['Faith Integration', 'Christian Counselling', 'Holistic Care'],
  },
  {
    id: 'assessment',
    icon: '📋',
    title: 'Psycho Diagnostic Assessment',
    desc: 'Comprehensive psychological assessments to evaluate cognitive, emotional, and behavioural functioning — providing clarity, accurate diagnosis, and a clear roadmap for your care and support.',
    tags: ['WSIB', 'Return to Work Assessments', 'Disability Assessments', 'ADHD', 'Psychodiagnostic Assessments'],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="services" id="services">
      <div className="services__bg-shape" />
      <div className="container">
        <div className="services__header">
          <p className="section-label reveal">Areas of Focus</p>
          <h2 className="section-heading reveal">
            How Can I <em>Support You?</em>
          </h2>
          <p className="services__sub reveal">
            Every person's journey is unique. Dr. Wesley offers a range of evidence-based
            therapeutic services tailored to your specific needs and goals.
          </p>
        </div>

        <div className="services__grid reveal">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`service-card ${active === svc.id ? 'active' : ''}`}
              onClick={() => setActive(active === svc.id ? null : svc.id)}
              id={`service-${svc.id}`}
            >
              <div className="service-card__icon">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <div className="service-card__tags">
                {svc.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="service-card__arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
