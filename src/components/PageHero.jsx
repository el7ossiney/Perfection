import { servicesPage } from "../data/content.js";

/**
 * Shared inner-page hero: the brand gradient with the guideline's
 * hairline frame + crop marks, page eyebrow/title/lead.
 */
export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="pagehero">
      <span className="pagehero__frame" aria-hidden="true" />
      <div className="pagehero__inner container">
        <p className="eyebrow eyebrow--light">{eyebrow ?? servicesPage.eyebrow}</p>
        <h1 className="pagehero__title">{title}</h1>
        {lead && <p className="pagehero__lead">{lead}</p>}
      </div>
    </section>
  );
}
