/* Building the link that opens somebody's UPI app.
 *
 * SPEC 2.3: intent links only. No gateway, no callback, no status check. Once
 * the app opens we are blind, by design.
 *
 * The platforms behave differently and pretending otherwise is what makes
 * these flows fail silently:
 *
 *   Android  `upi://pay` works, and `intent://` with a package name skips the
 *            chooser and lands straight in one app.
 *   iOS      has no reliable UPI scheme. Per-app schemes exist (gpay://,
 *            phonepe://, paytmmp://) but their parameter handling is
 *            inconsistent between versions, so they are offered as attempts,
 *            never as promises, and the QR stays prominent.
 *
 * Researched 25 August 2026. NONE of this has been tested on a real handset,
 * which remains the single largest untested assumption in the product.
 */

export type UpiApp = {
  id: string;
  label: string;
  /** Android package, for the intent:// form. */
  pkg: string;
  /** iOS scheme, best effort. */
  ios?: string;
};

export const UPI_APPS: UpiApp[] = [
  { id: "gpay", label: "Google Pay", pkg: "com.google.android.apps.nbu.paisa.user", ios: "gpay" },
  { id: "phonepe", label: "PhonePe", pkg: "com.phonepe.app", ios: "phonepe" },
  { id: "paytm", label: "Paytm", pkg: "net.one97.paytm", ios: "paytmmp" },
  { id: "bhim", label: "BHIM", pkg: "in.org.npci.upiapp", ios: "bhim" },
];

export function upiParams(vpa: string, payeeName: string, paise: number, note: string) {
  return new URLSearchParams({
    pa: vpa,
    pn: payeeName,
    am: (paise / 100).toFixed(2),
    cu: "INR",
    tn: note,
  }).toString();
}

/** The generic link. Every UPI app on Android registers for this. */
export const upiUri = (vpa: string, payeeName: string, paise: number, note: string) =>
  `upi://pay?${upiParams(vpa, payeeName, paise, note)}`;

/** Android: skips the app chooser and opens one app directly. */
export const androidIntent = (app: UpiApp, q: string) =>
  `intent://pay?${q}#Intent;scheme=upi;package=${app.pkg};end`;

/** iOS: best effort. Some builds accept the params, some open the app cold. */
export const iosUri = (app: UpiApp, q: string) =>
  app.ios ? `${app.ios}://upi/pay?${q}` : `upi://pay?${q}`;

export type Platform = "android" | "ios" | "other";

export function detectPlatform(ua: string): Platform {
  if (/android/i.test(ua)) return "android";
  // iPadOS reports as Macintosh with touch, so check for that too.
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/macintosh/i.test(ua) && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1)
    return "ios";
  return "other";
}
