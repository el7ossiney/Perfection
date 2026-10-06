import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import CropMarks from "../components/CropMarks.jsx";
import Ready from "../components/Ready.jsx";
import { projectsPage } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** OUR WORK — the project archive grid, grouped by category.
 *  ?cat=branding|social shows a single category (nav dropdown targets these);
 *  no param shows every populated category. */
export default function ProjectsPage() {
  const link = useLink();
  const [params] = useSearchParams();
  const cat = params.get("cat");

  const sections = projectsPage.categories
    .map((c) => ({ ...c, items: projectsPage.projects.filter((p) => p.cat === c.key) }))
    .filter((c) => c.items.length > 0 && (!cat || c.key === cat));

  return (
    <>
      <PageHero {...projectsPage.hero} />

      <section id="projects" className="projects-section">
        <div className="container">
          <header className="section-head reveal">
            <p className="kicker">{projectsPage.grid.kicker}</p>
            <h2>{projectsPage.grid.title}</h2>
            <p className="section-sub">{projectsPage.grid.sub}</p>
          </header>

          <div className="projects-archive">
            {sections.length === 0 && (
              <p className="section-sub projects-empty reveal">
                {projectsPage.emptyCategory}
              </p>
            )}
            {sections.map((c) => (
                <div key={c.key} className="projects-cat">
                  <header className="projects-cat-head reveal">
                    <p className="kicker">{c.label}</p>
                  </header>
                  <div className="projects-grid">
                    {c.items.map((p) => (
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
              ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
