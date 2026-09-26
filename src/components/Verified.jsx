/** Blue verified check — the trust device, used sparingly. */
export default function Verified({ size = 15 }) {
  return (
    <svg
      className="vrf"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label="Verified account"
    >
      <circle cx="12" cy="12" r="11" fill="#4f7fff" />
      <path
        d="M7.2 12.4l3 3 6.4-6.8"
        stroke="#fff"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
