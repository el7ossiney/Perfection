import { cta } from "../data/content.js";
import { useGo } from "../lib/navigation.js";
import SplitWords from "./SplitWords.jsx";

/**
 * HOME CTA BAND — "Ready to Grow Your Brand?" → Contact page.
 */
export default function CTA() {
  const go = useGo();

  return (
    <section className="cta section" id="contact">
      <div className="container cta__box">
        <SplitWords as="h2" lines={cta.title} className="cta__title" />
        <p className="cta__lead will-reveal">{cta.lead}</p>
        <a
          className="btn btn--pill cta__btn will-reveal"
          href="#/contact"
          onClick={(e) => {
            e.preventDefault();
            go("/contact");
          }}
        >
          {cta.buttonLabel}
        </a>
      </div>
    </section>
  );
}
