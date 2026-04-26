import './About.css';
import drMareena from '../assets/dr-mareena.jpg';

export default function About() {

  return (
    <section className="about" id="about">
      <div className="container about__inner">

        <div className="about__image-col reveal">
          <div className="about__image-wrap">
            <img
              src={drMareena}
              alt="Dr. Mareena Wesley, Registered Psychologist"
              className="about__photo"
            />
            <div className="about__photo-caption">
              <span className="caption-name">Dr. Mareena Wesley</span>
              <span className="caption-title">Registered Clinical Psychologist</span>
            </div>
          </div>
        </div>

        <div className="about__text-col">
          <p className="section-label reveal">About Dr. Wesley</p>
          <h2 className="section-heading reveal">
            Evidence-Based Care for Meaningful, <em>Lasting Transformation</em>
          </h2>
          <div className="about__bio reveal">
            <p>
              Whether you are navigating the heavy fog of depression, the exhaustion of anxiety,
              or the complexities of trauma and life transitions, it can feel like you've lost your
              way. Perhaps you are struggling with a return to work, relationship hurdles, or the
              highs and lows of bipolar disorder. Whatever your story, there is a space for you here.
            </p>
            <p>
              With over 15 years of experience, I bring a blend of clinical expertise and deep
              compassion to our work together. I believe that while the seasons of life can be
              incredibly difficult, they do not have to be faced in isolation.
            </p>
            <p>
              My practice is rooted in a commitment to academic and clinical excellence. Having
              graduated at the top of my university for my Bachelor's, Master's, and advanced
              research degrees, I translate rigorous, evidence-based science into personalized
              care that honors your unique journey toward healing.
            </p>

            <div className="about__subsection">
              <h3 className="about__sub-heading">A Tailored Path to Healing</h3>
              <p>
                I don't believe in one-size-fits-all therapy. I draw from a diverse toolkit to
                ensure our work honors your unique values and pace, including:
              </p>
              <ul className="about__modalities">
                <li><span className="modality-dot" />CBT &amp; DBT (Cognitive &amp; Dialectical Behavior Therapy)</li>
                <li><span className="modality-dot" />ACT (Acceptance &amp; Commitment Therapy)</li>
                <li><span className="modality-dot" />Mindfulness-Based Approaches (MBCT)</li>
                <li><span className="modality-dot" />Solution-Focused Therapy</li>
                <li><span className="modality-dot" />Christian Counselling <em>(Available upon request)</em></li>
              </ul>
            </div>

          </div>


          <a href="#contact" className="btn btn--solid reveal" id="about-cta">
            Begin Your Journey →
          </a>
        </div>

      </div>
    </section>
  );
}
