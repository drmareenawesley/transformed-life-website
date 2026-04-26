import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do I need a referral to see a psychologist?',
    a: 'No referral is needed to book an appointment with Dr. Wesley. You can reach out directly through the contact form or by email to schedule a consultation at a time that works for you.',
  },
  {
    q: 'Is therapy covered by insurance?',
    a: 'Many extended health benefit plans cover registered psychologist services, either fully or partially. We recommend checking with your insurance provider prior to your first appointment. Receipts will be provided for all sessions for direct submission or reimbursement.',
  },
  {
    q: 'How long does each session last?',
    a: 'A standard therapy session is 50 minutes. Initial intake appointments may be slightly longer to allow adequate time for a thorough assessment and to begin building a personalized care plan.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Every person's journey is unique. The number of sessions depends on your individual goals, the nature of your concerns, and the pace of progress that feels right for you. Dr. Wesley will work collaboratively with you to regularly review goals and adjust the plan as needed.',
  },
  {
    q: 'Is everything I share kept confidential?',
    a: 'Absolutely. Everything discussed in therapy is strictly confidential. There are very limited legal exceptions — such as imminent risk of harm to yourself or others — which Dr. Wesley will explain fully during your first session.',
  },
  {
    q: 'Do you offer online therapy?',
    a: 'Yes. Dr. Wesley offers secure, PIPEDA-compliant virtual therapy sessions across Ontario, making it convenient to access care from the comfort of your home.',
  },
  {
    q: 'What is the difference between a psychologist and a therapist?',
    a: 'A registered psychologist (C.Psych) holds a doctoral-level degree and is regulated by the College of Psychologists of Ontario. This means they are trained to conduct formal assessments, provide diagnoses, and deliver advanced evidence-based treatment — a higher standard of clinical training than most therapists.',
  },
  {
    q: 'What if I am not sure therapy is right for me?',
    a: 'That is completely understandable. Many people feel uncertain before their first session. We encourage you to book a consultation — there is no obligation, and it is simply a chance to ask questions, share what you are going through, and see if it feels like the right fit.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <p className="section-label reveal">Common Questions</p>
        <h2 className="section-heading reveal">
          Everything You Need to <em>Know</em>
        </h2>
        <p className="faq__sub reveal">
          Have a question that isn't listed here? Feel free to reach out — we are always happy to help.
        </p>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item reveal ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                id={`faq-q-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
