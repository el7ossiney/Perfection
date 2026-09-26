import { useLink } from "../lib/navigation.js";

/** Brand lockup — the real gradient logo chip + lowercase wordmark. */
export default function Logo() {
  const link = useLink();

  return (
    <a className="brand" aria-label="perfection — home" {...link("/")}>
      <img className="brand-logo" src="/logo.png" alt="Perfection logo" />
      <span className="brand-word">perfection</span>
    </a>
  );
}
