import PageHero from "../components/PageHero.jsx";
import CropMarks from "../components/CropMarks.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
import { useLink } from "../lib/navigation.js";
import { contactPage, services } from "../data/content.js";

/** CONTACT — framed glass form + follow/explore info cards. */
export default function Contact() {
  const link = useLink();

  return (
    <>
      <PageHero {...contactPage.hero} />

      <section className="contact">
        <div className="container contact-grid">
          {/* TODO(user): point at a real endpoint (Formspree/API) when available */}
          <form
            id="contact-form"
            className="contact-form glass frame reveal"
            onSubmit={(e) => e.preventDefault()}
          >
            <CropMarks />

            <div className="fields">
              <div className="field-row">
                <label>
                  <span>Full Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@company.com" required />
                </label>
              </div>

              <div className="field-row">
                <label>
                  <span>Company</span>
                  <input type="text" name="company" placeholder="Your company" />
                </label>
                <label>
                  <span>Service of Interest</span>
                  <select name="service" required>
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.anchor}>{s.title}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell us about your project…" required />
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {contactPage.submitLabel}
            </button>
          </form>

          <aside className="contact-info reveal">
            <div id="follow" className="ci-card glass frame">
              <CropMarks />
              <h3>Follow us</h3>
              <SocialIcons />
              <p className="ci-note">{contactPage.linktreeNote}</p>
            </div>

            <div id="explore" className="ci-card glass frame ci-cta">
              <CropMarks />
              <h3>{contactPage.explore.title}</h3>
              <p>{contactPage.explore.text}</p>
              <div className="ci-actions">
                <a className="svc-link" {...link("/services")}>
                  What We Do <span aria-hidden="true">→</span>
                </a>
                <a className="svc-link" {...link("/process")}>
                  How We Work <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
