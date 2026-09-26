import CropMarks from "./CropMarks.jsx";
import IndexCard from "./IndexCard.jsx";
import { useLink } from "../lib/navigation.js";

/** Inner-page hero — blueprint gradient in a framed container. */
export default function PageHero({ chip, titleTop, titleGrad, sub, ctaLabel, card }) {
  const link = useLink();

  return (
    <section className="page-hero bp">
      <div className="container page-hero-inner frame">
        <CropMarks />

        <div className="hero-split">
          <div className="hero-copy">
            <p className="kicker chip glass">{chip}</p>
            <h1>
              {titleTop}
              <br />
              <span className="grad-text">{titleGrad}</span>
            </h1>
            <p className="hero-sub">{sub}</p>
            {ctaLabel && (
              <div className="hero-actions">
                <a className="btn btn-primary" {...link("/contact")}>
                  {ctaLabel}
                </a>
              </div>
            )}
          </div>

          <IndexCard {...card} />
        </div>
      </div>
    </section>
  );
}
