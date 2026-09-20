import { quotes } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

/**
 * TESTIMONIALS "التعليقات" — comments under a post.
 * Native anatomy (name, role, text, like count, time), serious type.
 */
export default function Testimonials() {
  return (
    <section className="tst section" id="testimonials">
      <div className="container">
        <SectionHead eyebrow="قالوا عنّا" title="كومنتات مو مدفوعة." />

        <ul className="comments">
          {quotes.map((q) => (
            <li className="comment will-reveal" key={q.name}>
              <div className="comment__head">
                <span className="comment__avatar" aria-hidden="true">
                  {q.name.trim()[0]}
                </span>
                <span className="comment__who">
                  <span className="comment__name">{q.name}</span>
                  <span className="comment__role">{q.role}</span>
                </span>
                <span className="comment__time">{q.time}</span>
              </div>
              <p className="comment__text">{q.text}</p>
              <div className="comment__foot">
                <svg className="comment__heart" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 20.3l-1.5-1.35C5.4 14.35 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 16.5 2C19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.85-8.5 11.46z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
                <span>{q.likes}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
