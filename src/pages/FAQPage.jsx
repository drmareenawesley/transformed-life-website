import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/FAQ.css';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'Do I need a referral to see a psychologist?',
        a: 'No referral is needed to book an appointment with Dr. Wesley. You can reach out directly through the contact form or by email to schedule a consultation at a time that works for you.',
      },
      {
        q: 'What if I am not sure therapy is right for me?',
        a: `That is completely understandable. Many people feel uncertain before their first session. We encourage you to book a consultation — there is no obligation, and it is simply a chance to ask questions, share what you are going through, and see if it feels like the right fit.`,
      },
      {
        q: 'What is the difference between a psychologist and a therapist?',
        a: 'A registered psychologist (C.Psych) holds a doctoral-level degree and is regulated by the College of Psychologists of Ontario. This means they are trained to conduct formal assessments, provide diagnoses, and deliver advanced evidence-based treatment — a higher standard of clinical training than most therapists.',
      },
    ],
  },
  {
    category: 'Sessions & Process',
    items: [
      {
        q: 'How long does each session last?',
        a: 'A standard therapy session is 50 minutes. Initial intake appointments may be slightly longer to allow adequate time for a thorough assessment and to begin building a personalized care plan.',
      },
      {
        q: 'How many sessions will I need?',
        a: `Every person's journey is unique. The number of sessions depends on your individual goals, the nature of your concerns, and the pace of progress that feels right for you. Dr. Wesley will work collaboratively with you to regularly review goals and adjust the plan as needed.`,
      },
      {
        q: 'Do you offer online therapy?',
        a: 'Yes. Dr. Wesley offers secure, PIPEDA-compliant virtual therapy sessions across Ontario, making it convenient to access care from the comfort of your home.',
      },
    ],
  },
  {
    category: 'Insurance & Fees',
    items: [
      {
        q: 'Is therapy covered by insurance?',
        a: 'Many extended health benefit plans cover registered psychologist services, either fully or partially. We recommend checking with your insurance provider prior to your first appointment. Receipts will be provided for all sessions for direct submission or reimbursement.',
      },
      {
        q: 'Do you direct bill insurance?',
        a: 'Please contact us directly to discuss billing arrangements. We are happy to provide all necessary documentation to support your insurance claims.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    items: [
      {
        q: 'Is everything I share kept confidential?',
        a: 'Absolutely. Everything discussed in therapy is strictly confidential. There are very limited legal exceptions — such as imminent risk of harm to yourself or others — which Dr. Wesley will explain fully during your first session.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  return (
    <>
      <Navbar />
      <main className="faq-page">
        <div className="faq-page__hero">
          <div className="container">
            <Link to="/" className="faq-page__back">← Back to Home</Link>
            <p className="section-label">Support & Information</p>
            <h1 className="faq-page__heading">Frequently Asked <em>Questions</em></h1>
            <p className="faq-page__sub">
              Everything you need to know before beginning your journey. Can't find what you're looking for?{' '}
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
              >Get in touch</a> and we'll be happy to help.
            </p>
          </div>
        </div>

        <div className="container faq-page__body">
          {faqs.map((section) => (
            <div key={section.category} className="faq-page__category">
              <h2 className="faq-page__cat-heading">{section.category}</h2>
              <div className="faq__list">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                      <button
                        className="faq__question"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        id={`faq-${key}`}
                      >
                        <span>{item.q}</span>
                        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className="faq__answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
