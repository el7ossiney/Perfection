import PageHero from "../components/PageHero.jsx";
import CropMarks from "../components/CropMarks.jsx";
import Clients from "../components/Clients.jsx";
import Ready from "../components/Ready.jsx";
import { projectsPage } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** OUR WORK — clients marquee + the project archive grid. */
export default function ProjectsPage() {
  const link = useLink();

  return (
    <>
      <PageHero {...projectsPage.hero} />

      {/* The clients marquee lives here now — "who we did it for" leads the work */}
      <Clients />

      <section id="projects" className="projects-section">
        <div className="container">
          <header className="section-head reveal">
            <p className="kicker">{projectsPage.grid.kicker}</p>
            <h2>{projectsPage.grid.title}</h2>
            <p className="section-sub">{projectsPage.grid.sub}</p>
          </header>

          <div className="projects-grid">
            {projectsPage.projects.map((p) => (
              <article key={p.id} id={p.id} className="project-card glass frame reveal">
                <CropMarks />
                <a className="project-link" {...link(`/projects/${p.id}`)}>
                  <div className="project-media">
                    <img
                      src={`${import.meta.env.BASE_URL}${p.img}`}
                      alt={`${p.title} — ${p.client}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-body">
                    <p className="project-client">{p.client}</p>
                    <h3>{p.title}</h3>
                    <p className="project-blurb">{p.blurb}</p>
                    <ul className="project-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
