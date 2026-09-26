import ServiceIcon from "./ServiceIcon.jsx";
import { useLink } from "../lib/navigation.js";

/**
 * Editorial row — ghost number, optional icon tile, hairline separated.
 * `noTile` strips the tile + arrow (about page lists, brand voice).
 */
export default function SvcRow({ id, n, icon, title, desc, ctaLabel, noTile = false }) {
  const link = useLink();

  return (
    <article id={id} className={`svc-row reveal ${noTile ? "no-tile" : ""}`}>
      <span className="svc-ghost" data-n={n} aria-hidden="true">
        {n}
      </span>
      {!noTile && (
        <div className="svc-tile">
          <ServiceIcon name={icon} />
        </div>
      )}
      <div className="svc-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        {ctaLabel && (
          <a className="svc-link" {...link("/contact")}>
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      {!noTile && <span className="svc-arrow" aria-hidden="true">→</span>}
    </article>
  );
}
