/**
 * Shared section header: eyebrow + title + optional lead.
 * Entrances ride the global .will-reveal batch.
 */
export default function SectionHead({ eyebrow, title, lead, align = "start" }) {
  return (
    <div className={`sec-head sec-head--${align}`}>
      {eyebrow && <span className="eyebrow will-reveal">{eyebrow}</span>}
      <h2 className="sec-head__title will-reveal" style={{ "--i": 1 }}>
        {title}
      </h2>
      {lead && (
        <p className="sec-head__lead will-reveal" style={{ "--i": 2 }}>
          {lead}
        </p>
      )}
    </div>
  );
}
