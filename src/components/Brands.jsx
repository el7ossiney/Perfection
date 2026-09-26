import { brands } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

/**
 * BRANDS — logos only, no testimonials (per the content document).
 * One uniform marquee: equal-height tiles on white, consistent gaps.
 * Placeholder slots until the official logo files are provided.
 */
export default function Brands() {
  return (
    <section className="brands section" id="brands">
      <div className="container">
        <SectionHead eyebrow={brands.eyebrow} title={brands.title} lead={brands.lead} />
      </div>

      <div className="brands__marquee" aria-label="Client logos">
        <div className="brands__row" style={{ "--ticker-dur": "34s" }}>
          {[0, 1].map((k) => (
            <div className="brands__seq" key={k} aria-hidden={k === 1}>
              {brands.logos.map((logo, i) => (
                <span className="brands__tile" key={i}>
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
