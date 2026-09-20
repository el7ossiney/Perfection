import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { cases } from "../data/content.js";
import { arNumber } from "../utils/format.js";
import SectionHead from "./SectionHead.jsx";
import Verified from "./Verified.jsx";

/**
 * CASE STUDIES — فيد المنشورات المثبّت.
 * Default CSS is a fully readable stacked dark panel (mobile, no-JS,
 * reduced motion). On desktop + motion, the screen pins and scroll
 * scrubs through the three posts like a phone feed.
 */
export default function CaseStudies() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const root = ref.current;
        const screen = root.querySelector(".feed__screen");
        const track = root.querySelector(".feed__track");
        const posts = gsap.utils.toArray(".post", root);

        gsap.set(screen, { height: "min(84svh, 820px)", overflow: "hidden" });
        gsap.set(track, { height: "300%" });
        gsap.set(posts, { height: "33.333%" });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".feed__frame",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            start: "top 8%",
            end: () => "+=" + window.innerHeight * 2.6,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, { yPercent: -66.667 }, 0);

        posts.forEach((post, i) => {
          const metricEl = post.querySelector(".post__mval");
          const metricNum = cases[i].metric.value;
          const mLabel = post.querySelector(".post__mlabel");

          tl.fromTo(
            post.querySelector(".post__metric"),
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 },
            i + 0.05
          );
          if (mLabel) tl.fromTo(mLabel, { opacity: 0 }, { opacity: 1, duration: 0.3 }, i + 0.2);

          // numeric metrics count while the post settles (٤٫٢ stays static)
          if (typeof metricNum === "number") {
            const proxy = { v: 0 };
            tl.to(
              proxy,
              {
                v: metricNum,
                duration: 0.55,
                onUpdate: () => {
                  metricEl.textContent = arNumber(Math.floor(proxy.v));
                },
              },
              i + 0.15
            );
          }

          tl.fromTo(
            post.querySelectorAll(".post__kpi"),
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.3 },
            i + 0.35
          );
          tl.fromTo(
            root.querySelector(`.seg-fill--${i}`),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.95 },
            i
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="work section" id="work" ref={ref}>
      <div className="container">
        <SectionHead
          eyebrow="أعمالنا"
          title="شغلنا يتكلم بالأرقام."
          lead="كل منشور هنا حملة حقيقية من شبكتنا — المعلومة كاملة، من الوصول للتحويل."
        />
      </div>

      <div className="feed__frame">
        <div className="feed__screen">
          <div className="feed__progress" aria-hidden="true">
            {cases.map((_, i) => (
              <span className="feed__seg" key={i}>
                <i className={`seg-fill seg-fill--${i}`} />
              </span>
            ))}
          </div>

          <div className="feed__track">
            {cases.map((c, i) => (
              <article className={`post post--${i} post--tone-${c.tone}`} key={c.handle}>
                <div className="post__card">
                  <span className="post__tab" aria-hidden="true">
                    project 0{i + 1}
                  </span>
                  <header className="post__head">
                  <span className="post__avatar" aria-hidden="true">
                    {c.client.trim()[0]}
                  </span>
                  <span className="post__who">
                    <span className="post__handlerow">
                      <bdi className="post__handle" dir="ltr">
                        {c.handle}
                      </bdi>
                      <Verified size={13} />
                    </span>
                    <span className="post__client">
                      {c.client}، {c.year}
                    </span>
                  </span>
                </header>

                <div className="post__media">
                  <bdi className="post__metric" dir="ltr">
                    {c.metric.prefix}
                    <span className="post__mval">
                      {typeof c.metric.value === "number"
                        ? arNumber(c.metric.value)
                        : c.metric.value}
                    </span>
                    {c.metric.suffix}
                  </bdi>
                  <span className="post__mlabel">{c.metric.label}</span>
                </div>

                <p className="post__caption">
                  {c.caption}{" "}
                  <span className="post__tags" dir="ltr">
                    {c.tags.map((t) => `#${t.replace(/\s+/g, "_")}`).join(" ")}
                  </span>
                </p>

                <ul className="post__kpis">
                  {c.kpis.map((k, ki) => (
                    <li className="post__kpi" key={ki}>
                      <bdi dir="ltr">{k.value}</bdi>
                      <span>{k.label}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
