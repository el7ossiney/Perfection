/**
 * Line icons for the 8 services + 4 process steps —
 * verbatim strokes from the ui design (32×32 grid).
 */
const ICONS = {
  brand: (
    <path
      d="M16 4l4 6.5L16 28 12 10.5 16 4z M6 12l6-1.5L16 28 8 19 6 12z M26 12l-2 7-8 9 6-17.5L26 12z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  social: (
    <path
      d="M5 7h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-5l-4 4v-4H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h-.5z M24 12h3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v4l-4-4h-3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  chart: <path d="M4 26V6M4 26h24 M8 22l6-8 5 5 8-11" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  camera: (
    <>
      <rect x="3" y="8" width="26" height="18" rx="3" strokeWidth="2.2" />
      <circle cx="16" cy="17" r="4.5" strokeWidth="2.2" />
      <path d="M11 8l1.5-3h7L21 8" strokeWidth="2.2" strokeLinejoin="round" />
    </>
  ),
  target: (
    <>
      <path d="M5 13h5l6-5v16l-6-5H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 11a7 7 0 0 1 0 10M24 8a12 12 0 0 1 0 16" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <circle cx="14" cy="14" r="9" strokeWidth="2.2" />
      <path d="M21 21l7 7" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 14h8M14 10v8" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  film: (
    <>
      <circle cx="16" cy="16" r="11" strokeWidth="2.2" />
      <path d="M13 11.5l9 4.5-9 4.5v-9z" fill="currentColor" stroke="none" />
    </>
  ),
  monitor: (
    <>
      <rect x="4" y="6" width="24" height="20" rx="3" strokeWidth="2.2" />
      <path d="M4 12h24" strokeWidth="2.2" />
      <circle cx="8.5" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 20l3-3 2.5 2.5L20 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  discover: (
    <>
      <circle cx="14" cy="14" r="9" strokeWidth="2.2" />
      <path d="M21 21l7 7" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10.5 14h7M14 10.5v7" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  strategy: (
    <>
      <circle cx="16" cy="16" r="11" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="6.5" strokeWidth="2" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
  rocket: (
    <>
      <path
        d="M16 3c4.5 3 7 8 7 13l-4 5h-6l-4-5c0-5 2.5-10 7-13z"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13" r="2.6" fill="currentColor" stroke="none" />
      <path d="M13 26l-2 4M19 26l2 4M16 27v4" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  optimize: (
    <>
      <path d="M26 20a11 11 0 1 1-3.5-11.8M26 4v6h-6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22l4.5-6 3.5 3.5L26 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function ServiceIcon({ name }) {
  return (
    <svg
      className="svc-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[name]}
    </svg>
  );
}
