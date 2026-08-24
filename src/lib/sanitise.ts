/* C6 / SPEC S6 — strip URLs from the message, conservatively and visibly.
 *
 * A gift envelope has no reason to carry a link, and allowing them turns this
 * into a phishing delivery mechanism. But a greedy bare-domain regex chews
 * through ordinary text ("5.30pm", "beta.ji", "1.5 lakh") and transliterated
 * Devanagari, so bare domains are only stripped when the TLD is one people
 * actually use to point somewhere.
 *
 * Used by the builder for live feedback and — authoritatively — by the server
 * at Stage 3. Client-side stripping is UX. The server call is the security one.
 */

// Any scheme://… — catches http, https, and notably upi:// and intent://,
// which would otherwise let a message carry its own payment request.
const SCHEME = /\b[a-z][a-z0-9+.-]*:\/\/\S+/gi;
const MAILTO = /\b(?:mailto|tel|sms|upi):[^\s<]+/gi;
const WWW = /\bwww\.\S+/gi;

// Deliberately a short list of TLDs that carry traffic, not the full IANA set.
// Missing one means a link slips through into a 500-char message a human reads;
// over-matching means we silently eat someone's words. The second is worse.
const TLDS =
  "com|net|org|in|co|io|me|xyz|link|app|shop|info|biz|ly|gg|to|cc|site|online|store|club|live|dev|ai|uk|us|ru|tk|top";
const BARE = new RegExp(
  String.raw`\b(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:${TLDS})\b(?:\/[^\s]*)?`,
  "gi",
);

export function stripUrls(input: string): { text: string; removed: number } {
  let removed = 0;
  const eat = () => {
    removed += 1;
    return "";
  };

  const text = input
    .replace(SCHEME, eat)
    .replace(MAILTO, eat)
    .replace(WWW, eat)
    .replace(BARE, eat)
    // collapse the holes left behind, but keep the sender's line breaks
    .replace(/[ \t]{2,}/g, " ")
    .replace(/[ \t]+([,.!?])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return { text, removed };
}

/* SPEC S6 — defence in depth. React escapes on render and we never use
   dangerouslySetInnerHTML, so this is a second wall, not the only one. */
export function stripTags(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

export function cleanMessage(input: string) {
  const { text, removed } = stripUrls(stripTags(input));
  return { text, removed };
}
