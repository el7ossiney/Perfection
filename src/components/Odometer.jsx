import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { AR_DIGITS, odometerTokens, digitAt } from "../utils/format.js";

/**
 * Rolling counter in Arabic-Indic digits — reads like a live view
 * count. Strips render at the FINAL digit by default (no-JS and
 * reduced-motion safe); under motion it rolls 0 -> value, then
 * slow live ticks if `liveTick` is given.
 */
export default function Odometer({ value, liveTick = null, className = "" }) {
  const ref = useRef(null);
  const tokens = odometerTokens(value);
  const digitCount = tokens.filter((t) => t.type === "d").length;

  useGSAP(
    () => {
      const root = ref.current;
      const strips = gsap.utils.toArray(".odo__strip", root);

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const setDigits = (v) => {
          strips.forEach((strip, i) => {
            // columns are LTR inside the bdi; place counts digit columns
            // from the right, separators skipped
            const pow = digitCount - 1 - i;
            strip.style.transform = `translateY(${digitAt(v, pow) * -10}%)`;
          });
        };

        const proxy = { v: 0 };
        setDigits(0);
        gsap.to(proxy, {
          v: value,
          duration: 2.2,
          ease: "power2.out",
          delay: 0.7,
          onUpdate: () => setDigits(Math.floor(proxy.v)),
          onComplete: () => {
            if (!liveTick) return;
            let cur = value;
            const scheduleTick = () => {
              gsap.delayedCall(1.4 + Math.random() * 1.2, () => {
                cur += liveTick[0] + Math.floor(Math.random() * (liveTick[1] - liveTick[0]));
                setDigits(cur);
                scheduleTick();
              });
            };
            scheduleTick();
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <bdi className={`odo ${className}`} ref={ref} dir="ltr">
      {tokens.map((t, i) =>
        t.type === "sep" ? (
          <span className="odo__sep" key={i}>
            ٬
          </span>
        ) : (
          <span className="odo__col" key={i}>
            <span
              className="odo__strip"
              style={{ transform: `translateY(${t.digit * -10}%)` }}
            >
              {AR_DIGITS.split("").map((d, di) => (
                <span className="odo__d" key={di}>
                  {d}
                </span>
              ))}
            </span>
          </span>
        )
      )}
    </bdi>
  );
}
