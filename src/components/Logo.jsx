import { useGo } from "../lib/navigation.js";

/**
 * The logo — the vectorized official mark + wordmark.
 * Router-aware: always routes home.
 */
export default function Logo() {
  const go = useGo();
  return (
    <a href="#/" className="logo" aria-label="Perfection — home" onClick={(e) => { e.preventDefault(); go("/"); }}>
      <img className="logo__mark" src="/logo-mark.svg" alt="" aria-hidden="true" />
      <span className="logo__word" dir="ltr">
        perfection
      </span>
    </a>
  );
}
