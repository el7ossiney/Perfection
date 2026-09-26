import { site } from "../data/content.js";

/** The five social marks — verbatim strokes from the ui design (24×24). */
const ICONS = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 10.5V17M8 7.6v.1M12 17v-3.6c0-1.3.9-2.4 2.2-2.4 1.4 0 2.3 1 2.3 2.5V17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  Facebook: (
    <path
      d="M14 8h2.5V4.5H14c-2.5 0-4 1.6-4 4.1V11H7.5v3.5H10v7h3.5v-7h2.6l.4-3.5h-3V8.8c0-.5.3-.8.5-.8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  TikTok: (
    <path
      d="M14 4v9.5a3.8 3.8 0 1 1-3.2-3.7M14 4c.4 2.3 2 3.9 4.5 4.1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  X: (
    <path
      d="M4 4l16 16M20 4L4 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  ),
};

export default function SocialIcons() {
  return (
    <div className="social-icons">
      {site.socials.map((s) => (
        // Placeholders until the Linktree URLs land — keep them inert
        <a key={s.label} href={s.href} aria-label={s.label} onClick={(e) => e.preventDefault()}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {ICONS[s.label]}
          </svg>
        </a>
      ))}
    </div>
  );
}
