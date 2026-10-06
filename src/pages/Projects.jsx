import { Navigate, useSearchParams } from "react-router-dom";
import CropMarks from "../components/CropMarks.jsx";
import Ready from "../components/Ready.jsx";
import { projectsPage } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** OUR WORK — the project archive grid, grouped by category.
 *  /branding and /social-media (cat prop) show one category — the nav
 *  dropdown targets; no prop shows every populated category. Legacy
 *  /projects?cat=… URLs redirect to the clean paths. */
const CAT_PATHS = { branding: "/branding", social: "/social-media" };

export default function ProjectsPage({ cat }) {
  const link = useLink();
  const [params] = useSearchParams();
  const legacyCat = params.get("cat");

  if (legacyCat) return <Navigate to={CAT_PATHS[legacyCat] ?? "/projects"} replace />;

  const sections = projectsPage.categories
    .map((c) => ({ ...c, items: projectsPage.projects.filter((p) => p.cat === c.key) }))
    .filter((c) => c.items.length > 0 && (!cat || c.key === cat));

  return (
    <>
      {/* No PageHero here — the archive is the page; straight into the work. */}

      <section id="projects" className="projects-section projects-direct">
        <div className="container">
          <header className="section-head reveal">
            <p className="kicker">{projectsPage.grid.kicker}</p>
            {/* h1 — the only page heading now the hero is gone */}
            <h1>{projectsPage.grid.title}</h1>
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
                      /* glass dropped: 11 backdrop-blurs repainting while
                         covers streamed in janked the page — the section bg
                         is flat dark, the blur added nothing. Tint in CSS. */
                      <article key={p.id} id={p.id} className="project-card frame reveal">
                        <CropMarks />
                        <a className="project-link" {...link(`/projects/${p.id}`)}>
                          <div className="project-media">
                            <img
                              src={`${import.meta.env.BASE_URL}${p.img}`}
                              alt={`${p.title} — ${p.client}`}
                              loading="lazy"
                              decoding="async"
                              width={1200}
                              height={800}
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
