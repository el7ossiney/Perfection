import { processSection } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Home "How We Work" — cyan-gradient band with the 4 anchored steps. */
export default function Process() {
  const link = useLink();

  return (
    <section id="process" className="process cyan-gradient">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">{processSection.kicker}</p>
          <h2>{processSection.title}</h2>
          <p className="section-sub">{processSection.sub}</p>
        </header>

        <ol className="steps">
          {processSection.steps.map((step) => (
            <li key={step.anchor} id={step.anchor} className="step glass reveal">
              <span className="step-no">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="process-cta reveal">
          <a className="btn btn-primary" {...link("/contact")}>
            {processSection.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
