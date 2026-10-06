import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CropMarks from "../components/CropMarks.jsx";
import Ready from "../components/Ready.jsx";
import { projectsPage, growCta } from "../data/content.js";
import { applyPageMeta, useLink } from "../lib/navigation.js";

/**
 * PROJECT SHOW — /projects/:id
 * Cover image, case facts aside, and the challenge/approach/results story.
 */
export default function ProjectShow() {
  const { id } = useParams();
  const project = projectsPage.projects.find((p) => p.id === id);
  const link = useLink();

  useEffect(() => {
    if (!project) return;
    applyPageMeta(
      `${project.title} — Perfection`,
      project.blurb,
      `/projects/${project.id}`
    );
    // Breadcrumbs: Home → Our Work → project (structured data for search)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://perfection-agency.com/" },
        { "@type": "ListItem", position: 2, name: "Our Work", item: "https://perfection-agency.com/projects" },
        { "@type": "ListItem", position: 3, name: project.title },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <section className="show-hero">
        <div className="container">
          <a className="show-back" {...link("/projects")}>
            ← All Projects
          </a>

          <header className="show-head reveal">
            <p className="kicker chip glass">{project.client}</p>
            <h1>
              {project.title}
            </h1>
            <ul className="project-tags">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </header>
        </div>
      </section>

      {/* Branding books get the big 3:2 cover; social projects skip it —
          their posts grid below IS the work. */}
      {project.cat !== "social" && (
        <section className="show-cover-wrap">
          <div className="container">
            <figure className="show-cover glass frame reveal">
              <CropMarks />
              <img
                src={`${import.meta.env.BASE_URL}${project.img}`}
                alt={`${project.title} — ${project.client}`}
                decoding="async"
                width={1200}
                height={800}
              />
            </figure>
          </div>
        </section>
      )}

      {/* The pages themselves — the real work, page by page.
          Social projects get the denser profile-style grid. */}
      {project.gallery?.length ? (
        <section className="show-gallery-wrap">
          <div className="container">
            <div className={`show-gallery ${project.cat === "social" ? "show-gallery-social" : ""}`}>
              {project.gallery.map((g, i) => (
                /* glass dropped on slides: 38 backdrop-filter blurs froze
                   the page while images decoded — over a flat dark bg the
                   blur was invisible anyway. Static tint in CSS instead. */
                <figure key={g} className="show-slide frame reveal">
                  <CropMarks />
                  <img
                    src={`${import.meta.env.BASE_URL}${g}`}
                    alt={`${project.title} — page ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="show-body">
        <div className="container show-split">
          <aside className="show-facts glass frame">
            <CropMarks />
            <ul>
              <li>
                <span className="ci-label">Client</span>
                <b>{project.client}</b>
              </li>
              <li>
                <span className="ci-label">Year</span>
                <b>{project.year}</b>
              </li>
              <li>
                <span className="ci-label">Services</span>
                <b>{project.tags.join(" · ")}</b>
              </li>
            </ul>
            <a className="btn btn-primary" {...link("/contact")}>
              {growCta}
            </a>
          </aside>

          <div className="show-story">
            {[
              ["The Challenge", project.details.challenge],
              ["Our Approach", project.details.approach],
              ["The Results", project.details.results],
            ].map(([h, copy]) => (
              <section key={h} className="reveal">
                <h2>{h}</h2>
                <p>{copy}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
