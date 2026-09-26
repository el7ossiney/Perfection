import CropMarks from "./CropMarks.jsx";
import { ready } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** "Ready to Grow" framed gradient band — shared by home/about/services/process. */
export default function Ready() {
  const link = useLink();

  return (
    <section className="ready">
      <div className="container ready-inner frame reveal">
        <CropMarks />
        <div className="ready-copy">
          <h2>{ready.title}</h2>
          <p>{ready.lead}</p>
        </div>
        <a className="btn btn-light" {...link("/contact")}>
          {ready.buttonLabel}
        </a>
      </div>
    </section>
  );
}
