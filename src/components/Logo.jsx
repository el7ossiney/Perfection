/**
 * The real logo — the white geometric mark extracted from the
 * official file (transparent PNG), with the wordmark beside it.
 */
export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Perfection — home">
      <img className="logo__mark" src="/logo-mark.svg" alt="" aria-hidden="true" />
      <span className="logo__word" dir="ltr">
        perfection
      </span>
    </a>
  );
}
