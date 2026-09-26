import PageHero from "../components/PageHero.jsx";
import Rail from "../components/Rail.jsx";
import SvcRow from "../components/SvcRow.jsx";
import Ready from "../components/Ready.jsx";
import { aboutPage } from "../data/content.js";

/** WHO WE ARE — agency profile, Vision & Mission, Brand Voice. */
export default function About() {
  return (
    <>
      <PageHero {...aboutPage.hero} />

      <section id="about-perfection" className="about-page">
        <div className="container svc-split">
          <Rail rail={aboutPage.rail} />

          <div className="svc-list">
            {aboutPage.rows.map((row) => (
              <SvcRow key={row.n} {...row} noTile />
            ))}
          </div>
        </div>
      </section>

      <section id="brand-voice" className="voice cyan-gradient">
        <div className="container">
          <header className="section-head reveal">
            <p className="kicker">{aboutPage.voice.kicker}</p>
            <h2>{aboutPage.voice.title}</h2>
            <p className="section-sub">{aboutPage.voice.sub}</p>
          </header>

          <div className="svc-list">
            {aboutPage.voice.items.map((row) => (
              <SvcRow key={row.n} {...row} noTile />
            ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
