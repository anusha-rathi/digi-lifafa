/* Ready-made lifafas, one tap from done.
 *
 * Clicking a festival used to drop you into an empty builder with twenty-one
 * papers and no idea which one belongs at Rakhi. Each entry below is a whole
 * envelope somebody could send as it stands: paper, colour, texture, border,
 * motif, mithai, what happens when it opens, and words already written.
 *
 * The nek is a SUGGESTION only. It prefills the builder and the sender changes
 * it, because what you give is between you and them.
 */

export type Template = {
  id: string;
  festival: string;
  hi: string;
  en: string;
  designId: string;
  paletteId: string;
  textureId: string;
  borderId: string | null;
  motifId: string | null;
  sweetId: string | null;
  celebrationId: string | null;
  salutation: string;
  /** Rupee denominations, not paise. */
  notes: number[];
  coin: boolean;
};

const T = (
  id: string,
  festival: string,
  hi: string,
  en: string,
  designId: string,
  paletteId: string,
  textureId: string,
  borderId: string | null,
  motifId: string | null,
  sweetId: string | null,
  celebrationId: string | null,
  notes: number[],
  salutation = "प्रिय",
  coin = true,
): Template => ({
  id, festival, hi, en, designId, paletteId, textureId,
  borderId, motifId, sweetId, celebrationId, salutation, notes, coin,
});

export const TEMPLATES: Template[] = [
  // ── Diwali ──────────────────────────────────────────────────────────
  T("diwali-diya-rani", "diwali", "दीयों वाला", "A Row of Diyas", "diya-rows", "rani", "handmade", "zari-double", "diya", "motichoor", "diyas", [500, 500, 100]),
  T("diwali-damask-gold", "diwali", "सुनहरा दमास्क", "Gold Damask", "gold-damask", "marigold", "foil", "temple-arch", "lotus-medallion", "kaju", "phuljhari", [500, 500, 100]),
  T("diwali-kolam-blue", "diwali", "रंगोली नीली", "Blue Kolam", "kolam-grid", "royal-blue", "silk", "kadai-dot", "star-jaali", "besan", "diyas", [100, 100, 100, 100, 100]),
  T("diwali-brocade-green", "diwali", "ब्रोकेड हरा", "Green Brocade", "brocade-jaali", "green", "handmade", "gota-scallop", "kalash", "peda", "phuljhari", [500, 500, 100]),
  T("diwali-simple-cream", "diwali", "सादा क्रीम", "Plain and Quiet", "plain-ruled-edge", "cream", "linen", "zari-double", "diya", "kaju", "diyas", [100, 100]),

  // ── Raksha Bandhan ──────────────────────────────────────────────────
  T("rakhi-thread-rani", "rakhi", "राखी का धागा", "Rakhi Thread", "rakhi-thread", "rani", "handmade", "gota-scallop", "paisley-buta", "motichoor", "rakhi-thread", [500, 500, 100], "प्यारी"),
  T("rakhi-bandhani-blush", "rakhi", "बंधनी गुलाबी", "Blush Bandhani", "bandhani-dots", "blush", "handmade", "mango-vine", "lotus-medallion", "kaju", "petals", [500, 500, 100], "प्यारी"),
  T("rakhi-mukaish-lilac", "rakhi", "मुकैश लैवेंडर", "Lilac Sparkle", "mukaish-sparkle", "lilac", "silk", "kadai-dot", "toran", "rasgulla", "rakhi-thread", [500, 500], "प्यारी"),
  T("rakhi-chevron-marigold", "rakhi", "ज़री लहर", "Gold Chevron", "zari-chevron", "marigold", "foil", "zari-double", "paisley-buta", "gulab", "rakhi-thread", [500, 500, 100], "प्यारे"),

  // ── Ganesh Chaturthi ────────────────────────────────────────────────
  T("ganesh-temple-rani", "ganesh", "मंदिर मेहराब", "Temple Arch", "brocade-jaali", "rani", "handmade", "temple-arch", "om", "kaju", "diyas", [500, 500, 100]),
  T("ganesh-lotus-marigold", "ganesh", "कमल गेंदा", "Lotus Marigold", "kolam-grid", "marigold", "handmade", "gota-scallop", "lotus-medallion", "motichoor", "petals", [100, 100, 100]),
  T("ganesh-kalash-green", "ganesh", "कलश हरा", "Kalash Green", "khadi-weave", "green", "linen", "zari-double", "kalash", "peda", "diyas", [500, 100]),
  T("ganesh-damask-aubergine", "ganesh", "दमास्क बैंगनी", "Damask Aubergine", "gold-damask", "aubergine", "foil", "temple-arch", "om", "kalakand", "phuljhari", [500, 500, 100]),

  // ── Onam ────────────────────────────────────────────────────────────
  T("onam-kasavu", "onam", "कसावु", "Kasavu Cream and Gold", "plain-ruled-edge", "cream", "linen", "zari-double", "lotus-medallion", "rasgulla", "petals", [500, 500, 100]),
  T("onam-pookkalam", "onam", "पूक्कलम", "Pookkalam", "kolam-grid", "marigold", "handmade", "gota-scallop", "lotus-medallion", "peda", "petals", [500, 100]),
  T("onam-vine-green", "onam", "बेल हरी", "Green Vine", "teej-vine", "green", "handmade", "mango-vine", "toran", "sandesh", "petals", [500, 500]),
  T("onam-dove-quiet", "onam", "सादा धूसर", "Quiet Dove", "khadi-weave", "dove", "linen", "kadai-dot", "kalash", "kaju", null, [100, 100]),

  // ── Teej ────────────────────────────────────────────────────────────
  T("teej-vine-green", "teej", "तीज बेल", "Teej Vine", "teej-vine", "green", "handmade", "mango-vine", "paisley-buta", "ghevar", "petals", [500, 100], "प्यारी"),
  T("teej-bandhani-rani", "teej", "बंधनी रानी", "Bandhani Rani", "bandhani-dots", "rani", "handmade", "gota-scallop", "lotus-medallion", "gujiya", "petals", [500, 500], "प्यारी"),
  T("teej-mint-soft", "teej", "पुदीना", "Soft Mint", "mukaish-sparkle", "mint", "silk", "kadai-dot", "toran", "rasmalai", "petals", [100, 100], "प्यारी"),

  T("teej-lilac-soft", "teej", "लैवेंडर", "Lilac and Gold", "gold-damask", "lilac", "silk", "zari-double", "lotus-medallion", "peda", "petals", [500, 500], "प्यारी"),
  T("teej-jhula", "teej", "झूला", "Swing and Vine", "teej-vine", "marigold", "handmade", "mango-vine", "toran", "jalebi", "petals", [100, 100, 100], "प्यारी"),

  // ── Janmashtami ─────────────────────────────────────────────────────
  T("janmashtami-blue", "janmashtami", "जन्माष्टमी नीली", "Janmashtami Blue", "janmashtami", "royal-blue", "silk", "temple-arch", "om", "peda", "petals", [500, 100]),
  T("janmashtami-makhan", "janmashtami", "माखन मिश्री", "Makhan Mishri", "bandhani-dots", "butter", "handmade", "gota-scallop", "kalash", "kalakand", "petals", [100, 100, 100]),
  T("janmashtami-mor", "janmashtami", "मोरपंख", "Peacock Feather", "peacock-eye", "green", "foil", "zari-double", "peacock", "motichoor", "petals", [500, 500]),

  T("janmashtami-flute", "janmashtami", "बाँसुरी", "Flute and Feather", "peacock-eye", "royal-blue", "foil", "temple-arch", "peacock", "rasgulla", "petals", [500, 100]),
  T("janmashtami-jhula", "janmashtami", "पालना", "Cradle", "bandhani-dots", "sky", "handmade", "gota-scallop", "lotus-medallion", "besan", "petals", [100, 100, 100]),

  // ── Shaadi ──────────────────────────────────────────────────────────
  T("wedding-brocade-rani", "wedding", "ब्रोकेड रानी", "Rani Brocade", "brocade-jaali", "rani", "handmade", "gota-scallop", "kalash", "motichoor", "petals", [500, 500, 100]),
  T("wedding-damask-gold", "wedding", "सुनहरा दमास्क", "Gold Damask", "gold-damask", "marigold", "foil", "temple-arch", "paisley-buta", "kaju", "petals", [500, 500, 100]),
  T("wedding-peacock", "wedding", "मोर", "Peacock", "peacock-eye", "aubergine", "silk", "zari-double", "peacock", "gulab", "petals", [500, 500, 100]),
  T("wedding-kraft-simple", "wedding", "क्राफ़्ट सादा", "Quiet Kraft", "khadi-weave", "kraft", "linen", "kadai-dot", "lotus-medallion", "soan", null, [500, 500]),
  T("wedding-blush-modern", "wedding", "गुलाबी आधुनिक", "Modern Blush", "nordic-dots", "blush", "matte", "hairline-rule", "star-jaali", "macaron", "petals", [500, 500, 100]),

  // ── Birthday ────────────────────────────────────────────────────────
  T("birthday-terrazzo", "birthday", "टेराज़ो", "Terrazzo", "mukaish-sparkle", "peach", "matte", "kadai-dot", "star-jaali", "cupcake", "phuljhari", [100, 100, 100]),
  T("birthday-gingham", "birthday", "चारखाना", "Gingham", "gingham-check", "sky", "matte", "hairline-rule", "star-jaali", "cookie", "phuljhari", [100, 100]),
  T("birthday-stripe", "birthday", "पतली धारी", "Ticking Stripe", "ticking-stripe", "butter", "linen", "kadai-dot", "lotus-medallion", "brownie", "coins", [500, 100]),
  T("birthday-rani-bold", "birthday", "रानी चटक", "Bold Rani", "zari-chevron", "rani", "foil", "zari-double", "paisley-buta", "jalebi", "phuljhari", [500, 500, 100]),

  // ── Eid ─────────────────────────────────────────────────────────────
  T("eid-crescent-green", "eid", "ईद का चाँद", "Eid Crescent", "eid-crescent", "green", "silk", "temple-arch", "star-jaali", "sandesh", "phuljhari", [500, 500, 100]),
  T("eid-crescent-blue", "eid", "चाँद नीला", "Crescent Blue", "eid-crescent", "royal-blue", "foil", "zari-double", "star-jaali", "kaju", "phuljhari", [500, 500]),
  T("eid-damask-cream", "eid", "दमास्क क्रीम", "Damask Cream", "gold-damask", "cream", "linen", "kadai-dot", "lotus-medallion", "balushahi", "petals", [100, 100, 100]),
  T("eid-sewai", "eid", "सेवइयाँ", "Sewai and Mithai", "khadi-weave", "butter", "handmade", "mango-vine", "toran", "rasmalai", "petals", [500, 100]),

  // ── Nanha mehmaan ───────────────────────────────────────────────────
  T("baby-blush", "baby", "नन्हा गुलाबी", "Little Blush", "nordic-dots", "blush", "matte", "gota-scallop", "lotus-medallion", "rasgulla", "coins", [500, 500, 100], "प्यारी"),
  T("baby-sky", "baby", "नन्हा आसमानी", "Little Sky", "nordic-dots", "sky", "matte", "gota-scallop", "star-jaali", "sandesh", "coins", [500, 500, 100], "प्यारे"),
  T("baby-butter", "baby", "मक्खनी", "Butter Soft", "bandhani-dots", "butter", "handmade", "kadai-dot", "toran", "peda", "coins", [500, 100]),

  T("baby-mint", "baby", "पुदीना", "Soft Mint", "mukaish-sparkle", "mint", "silk", "kadai-dot", "lotus-medallion", "rasmalai", "coins", [500, 500]),
  T("baby-cream", "baby", "क्रीम", "Plain and Quiet", "khadi-weave", "cream", "linen", "gota-scallop", "toran", "kalakand", "coins", [500, 100]),

  // ── Griha pravesh ───────────────────────────────────────────────────
  T("griha-kalash", "griha", "कलश", "Kalash", "brocade-jaali", "marigold", "handmade", "temple-arch", "kalash", "motichoor", "petals", [500, 500, 100]),
  T("griha-toran", "griha", "तोरण", "Toran", "teej-vine", "green", "handmade", "mango-vine", "toran", "peda", "petals", [500, 500]),
  T("griha-kraft", "griha", "क्राफ़्ट", "Kraft", "khadi-weave", "kraft", "linen", "kadai-dot", "om", "kalakand", "diyas", [500, 100]),
  T("griha-rani", "griha", "रानी", "Rani", "gold-damask", "rani", "foil", "zari-double", "lotus-medallion", "kaju", "diyas", [500, 500, 100]),
];

export const templateById = (id: string | null | undefined) =>
  id ? TEMPLATES.find((t) => t.id === id) ?? null : null;

export const templatesFor = (festival: string) =>
  TEMPLATES.filter((t) => t.festival === festival);

/** Festivals that actually have templates, in the order they should be shown. */
export const TEMPLATE_FESTIVALS = [...new Set(TEMPLATES.map((t) => t.festival))];
