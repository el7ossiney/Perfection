import PageHero from "../components/PageHero.jsx";
import Rail from "../components/Rail.jsx";
import SvcRow from "../components/SvcRow.jsx";
import Ready from "../components/Ready.jsx";
import { processPage, processSection } from "../data/content.js";

/** HOW WE WORK — the four steps as editorial rows. */
export default function ProcessPage() {
  return (
    <>
      <PageHero {...processPage.hero} />

      <section className="svc-section">
        <div className="container svc-split">
          <Rail rail={processPage.rail} />

          <div className="svc-list">
            {processSection.steps.map((step) => (
              <SvcRow
                key={step.anchor}
                id={step.anchor}
                n={step.n}
                icon={step.icon}
                title={step.title}
                desc={step.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
