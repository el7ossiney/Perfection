import CropMarks from "./CropMarks.jsx";
import IndexCard from "./IndexCard.jsx";
import { hero } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Home hero — blueprint gradient, framed, copy + process index card. */
export default function Hero() {
  const link = useLink();

  return (
    <section id="home" className="hero bp">
      <div className="container hero-frame frame">
        <CropMarks />

        <div className="hero-split">
          <div className="hero-copy">
            <p className="kicker chip glass">{hero.chip}</p>

            <h1 className="hero-title">
              {hero.titleTop}{" "}
              <span className="grad-text">{hero.titleGrad}</span>
            </h1>

            <p className="hero-sub">{hero.sub}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" {...link("/services")}>
                {hero.ctaLabel}
              </a>
              <a className="btn btn-ghost" {...link("/", "#process")}>
                {hero.ctaGhostLabel}
              </a>
            </div>
          </div>

          <IndexCard {...hero.card} />
        </div>
      </div>
    </section>
  );
}
