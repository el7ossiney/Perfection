/**
 * Arabic-Indic number formatting + bidi helpers.
 * Convention: signed / multi-digit metrics are wrapped in <bdi dir="ltr">
 * by the components so "+٣٨٠٪" and "18M" render as one visual token
 * inside RTL flow.
 */

const arabNumberFormat = new Intl.NumberFormat("ar-SA-u-nu-arab");

/** 48000000 -> "٤٨٬٠٠٠٬٠٠٠" (Arabic-Indic digits + ٬ separator) */
export const arNumber = (n) => arabNumberFormat.format(n);

export const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** Replace western digits in any string with Arabic-Indic. */
export const toArabDigits = (s) => String(s).replace(/[0-9]/g, (d) => AR_DIGITS[+d]);

/**
 * Split an integer into odometer tokens: digit columns + separators.
 * 48000000 -> [{d:4},{d:8},{sep},{d:0},...]
 */
export function odometerTokens(value) {
  const digits = String(Math.floor(Math.abs(value))).split("");
  const groups = [];
  for (let i = digits.length; i > 0; i -= 3) {
    groups.unshift(digits.slice(Math.max(0, i - 3), i));
  }
  const tokens = [];
  groups.forEach((group, gi) => {
    group.forEach((d) => tokens.push({ type: "d", digit: +d }));
    if (gi < groups.length - 1) tokens.push({ type: "sep" });
  });
  return tokens;
}

/** Digit of `value` at place `pow` (0 = ones). */
export const digitAt = (value, pow) => Math.floor(value / 10 ** pow) % 10;
