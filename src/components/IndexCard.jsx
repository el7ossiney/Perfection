import { useLocation } from "react-router-dom";
import CropMarks from "./CropMarks.jsx";
import { useLink } from "../lib/navigation.js";

/**
 * Glass aside card — the quick index used on every hero.
 * Items are in-page anchors (`hash`) or page links (`to`).
 */
export default function IndexCard({ label, title, items, facts }) {
  const link = useLink();
  const { pathname } = useLocation();

  return (
    <aside className="svc-index-card glass frame" aria-label={label}>
      <CropMarks />
      <p className="sic-title">{title}</p>
      <ol className="sic-list">
        {items.map((item) => (
          <li key={item.label}>
            <a {...link(item.to ?? pathname, item.hash)}>
              <span>{item.n}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      {facts && (
        <ul className="sic-facts">
          {facts.map((fact) => (
            <li key={fact.label}>
              <span className="ci-label">{fact.label}</span>
              <b>{fact.value}</b>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
