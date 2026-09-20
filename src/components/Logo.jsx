/**
 * الشعار — حرف P بتدرج الهوية 45° (بنفسجي → نيفي → سيان) + نقطة سيان.
 * مسترجع من ملفات الهوية.
 */
export default function Logo({ inverse = false }) {
  return (
    <a href="#top" className="logo" aria-label="برفكشن — الرئيسية">
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b2fd6" />
            <stop offset="55%" stopColor="#6210ac" />
            <stop offset="100%" stopColor="#29b6c8" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo-grad)" />
        <rect x="13.4" y="10.5" width="3.4" height="19" fill="#fff" />
        <path
          d="M16.8 10.5h4.9a5.6 5.6 0 0 1 0 11.2h-4.9V18h4.6a1.95 1.95 0 0 0 0-3.9h-4.6z"
          fill="#fff"
        />
        <circle cx="27.4" cy="27.4" r="2.7" fill="#6ebec9" />
      </svg>
      <span className="logo__word" dir="ltr">
        perfection
      </span>
    </a>
  );
}
