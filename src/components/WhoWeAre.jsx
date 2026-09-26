import CropMarks from "./CropMarks.jsx";
import { whoWeAre } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Home "Who We Are" — intro copy + framed Vision/Mission glass cards. */
export default function WhoWeAre() {
  const link = useLink();

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <p className="kicker">{whoWeAre.kicker}</p>
          <h2>{whoWeAre.title}</h2>
          <p className="lead">{whoWeAre.lead}</p>
          <a className="svc-link" {...link("/about")}>
            More about us <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-cards">
          {whoWeAre.cards.map((card) => (
            <article key={card.title} className="vm-card glass frame reveal">
              <CropMarks />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
