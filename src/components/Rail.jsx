import { useLink } from "../lib/navigation.js";

/** Sticky editorial rail — kicker, split headline, sub, CTA. */
export default function Rail({ rail }) {
  const link = useLink();

  return (
    <aside className="svc-rail reveal">
      <p className="kicker">{rail.kicker}</p>
      <h2>
        {rail.titleTop}
        <br />
        <span className="grad-text">{rail.titleGrad}</span>
      </h2>
      <p className="rail-sub">{rail.sub}</p>
      <a className="btn btn-primary" {...link("/contact")}>
        {rail.ctaLabel}
      </a>
    </aside>
  );
}
