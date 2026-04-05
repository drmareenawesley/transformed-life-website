import './Approach.css';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We begin with a complimentary 15-minute call to understand your needs, answer your questions, and determine if we are a good fit for your journey.',
  },
  {
    num: '02',
    title: 'Personalized Assessment',
    desc: 'In our first sessions, we explore your history, goals, and challenges in depth to create a tailored treatment plan that reflects your unique situation.',
  },
  {
    num: '03',
    title: 'Evidence-Based Therapy',
    desc: 'We work together using proven, compassionate therapeutic methods — at a pace that feels right for you — to process experiences and build new skills.',
  },
  {
    num: '04',
    title: 'Growth & Integration',
    desc: 'As you progress, we focus on consolidating your gains, building resilience, and equipping you with tools to thrive long after our work together ends.',
  },
];

export default function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="container approach__inner">

        <div className="approach__header reveal">
          <p className="section-label">My Approach</p>
          <h2 className="section-heading">
            Your Healing Journey, <em>Step by Step</em>
          </h2>
        </div>

        <div className="approach__steps">
          {steps.map((step, i) => (
            <div key={step.num} className="approach-step reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="step-num">{step.num}</div>
              <div className="step-connector" />
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="approach__philosophy reveal">
          <div className="philosophy-icon">🌿</div>
          <blockquote>
            "I believe every person has an innate capacity for growth and healing.
            My role is to walk alongside you — with warmth, expertise, and deep respect
            for your unique story — as you move toward the life you deserve."
          </blockquote>
          <cite>— Dr. Mareena Wesley, Registered Psychologist</cite>
        </div>

      </div>
    </section>
  );
}
