import { clients } from "../data/content.js";

/** Placeholder client marks — 24×24 line glyphs on uniform white cards. */
const SHAPES = {
  hex: <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />,
  circle: <circle cx="12" cy="12" r="9" />,
  square: <rect x="4" y="4" width="16" height="16" rx="4" />,
  triangle: <path d="M12 3l9 16H3l9-16z" />,
  valley: <path d="M4 18V6l8 6 8-6v12" strokeLinejoin="round" />,
  star: (
    <path
      d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z"
      strokeWidth="1.4"
    />
  ),
};

/** "Brands That Trust Perfection" — seamless white-card logo slider. */
export default function Clients() {
  // Duplicated once so the CSS translateX(-50%) loop stays seamless
  const track = [...clients.logos, ...clients.logos];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">{clients.kicker}</p>
          <h2>{clients.title}</h2>
          <p className="section-sub">{clients.sub}</p>
        </header>
      </div>

      <div className="logo-slider" aria-label="Client logos">
        <div className="logo-track">
          {track.map((shape, i) => (
            <div key={i} className="logo-card">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              >
                {SHAPES[shape]}
              </svg>
              <span>Client</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
