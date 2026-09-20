/* Blog content. Plain data, no MDX, no CMS — each post is a title plus an
   array of blocks. Adding a post means adding an entry here. */

import type { FestivalArtKey } from "@/components/FestivalArt";

export type Block =
  | { h: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  | { table: { head: string[]; rows: string[][] } }
  | { faq: { q: string; a: string }[] }
  | { photo: string; caption?: string }
  | { festivalArt: FestivalArtKey; caption?: string }
  | { related: { href: string; label: string } };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: "Festivals" | "How it works" | "Why we built it";
  /** Drawn header, see components/FestivalArt.tsx. Never a stock photo. */
  art?: FestivalArtKey;
  /** Shown under the title. Dates get checked and re-checked each year. */
  updated?: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "jai-ganesh-deva-aarti-lyrics-meaning",
    title: "Jai Ganesh Deva aarti: Hindi lyrics, meaning and the lines different families sing differently",
    date: "2026-09-20",
    updated: "20 September 2026",
    tag: "Festivals",
    excerpt: "Jai Ganesh Deva lyrics in Hindi and Roman script, a plain meaning, common verse variants and guidance for singing the Ganesh aarti at home.",
    body: [
      { p: "Jai Ganesh Deva is the Hindi Ganesh aarti whose refrain can bring together a room even when the verses differ from one family's booklet to another. It praises Ganesha through his family, form, vehicle and favourite offerings, then asks him to receive the worship of those who come to his refuge." },
      { p: "Unlike Sukhkarta Dukhharta, a Marathi composition attributed to Samarth Ramdas with a stable three-verse structure, Jai Ganesh Deva circulates in several Hindi versions. Some end after the verse about laddus. Some include an old verse asking for sight, health, children and wealth. Some replace the final poet-name line. A responsible lyrics page should show those differences rather than silently choosing the longest copy online and calling it original." },
      { note: "For a home aarti, use the verses your family or temple knows and return to the refrain after each. A shorter shared version is better than arguing over variants while the lamp is lit." },

      { h: "Jai Ganesh Deva lyrics in Hindi" },
      { h3: "Refrain" },
      { p: "जय गणेश, जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा ॥" },
      { h3: "Verse 1" },
      { p: "एकदंत दयावंत, चार भुजाधारी । माथे पर तिलक सोहे, मूसे की सवारी ॥" },
      { p: "जय गणेश, जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा ॥" },
      { h3: "Verse 2" },
      { p: "पान चढ़े, फूल चढ़े और चढ़े मेवा । लड्डुअन का भोग लगे, संत करें सेवा ॥" },
      { p: "जय गणेश, जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा ॥" },
      { h3: "A widely printed additional verse" },
      { p: "अंधन को आँख देत, कोढ़िन को काया । बांझन को पुत्र देत, निर्धन को माया ॥" },
      { p: "जय गणेश, जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा ॥" },
      { h3: "One common closing" },
      { p: "हार चढ़े, फूल चढ़े और चढ़े मेवा । सूरश्याम शरण आए, सफल कीजे सेवा ॥" },
      { p: "जय गणेश, जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा ॥" },
      { note: "The third verse uses old devotional language about blindness, leprosy, infertility and poverty. Read the meaning and the note below before printing it for a new group. Some contemporary families omit it; others retain it as inherited text without treating illness, disability or childlessness as personal failure." },

      { h: "Roman transliteration" },
      { p: "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva. Mata jaki Parvati, pita Mahadeva." },
      { p: "Ekadant dayavant, char bhujadhari. Mathe par tilak sohe, moose ki savari." },
      { p: "Paan chadhe, phool chadhe, aur chadhe meva. Ladduan ka bhog lage, sant karein seva." },
      { p: "Andhan ko aankh det, kodhin ko kaya. Banjhan ko putra det, nirdhan ko maya." },
      { p: "Haar chadhe, phool chadhe, aur chadhe meva. Soor Shyam sharan aaye, safal kije seva." },
      { p: "Repeat the refrain after every verse. Roman spellings differ: chadhe/chade, moose/mushak, jaki/jinki and Mahadeva/Mahadeva. Follow a clear Hindi pronunciation rather than reading every English letter literally." },

      { h: "The aarti's meaning in one minute" },
      { p: "The refrain says: glory to Ganesha, whose mother is Parvati and father is Mahadeva, Shiva. The first verse sees him as Ekadant, one-tusked, compassionate, four-armed, with a tilak on his forehead and the mouse as his vehicle." },
      { p: "The second verse names offerings placed before him: paan, flowers, dry fruit and laddus, while saints and devotees serve. It is a compact picture of puja, not a compulsory shopping list. A flower and the food already prepared with care are enough for a modest home aarti." },
      { p: "The older additional verse asks Ganesha to restore what is missing: sight to the blind, bodily health to someone with leprosy, a son to a childless woman and wealth to the poor. Its language comes from a different social and medical world. The devotional movement is toward mercy, but some terms and assumptions need care today." },
      { p: "The closing says that the singer comes to refuge and asks that their seva, service or worship, be made fruitful. Printed versions disagree on whether the signature is Sur Shyam, Soor Shyam or another form. Do not invent certainty where the circulating text is unstable." },

      { h: "Line-by-line meaning" },
      { h3: "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva" },
      { p: "Jai is praise, victory or glory. Repeating the name gives the whole group an immediate entry point. Deva addresses Ganesha as the deity. The refrain is why the aarti works across language ability: someone who cannot yet carry a verse can still join every return." },
      { h3: "Mata jaki Parvati, pita Mahadeva" },
      { p: "His mother is Parvati; his father is Mahadeva, Shiva. The line locates Ganesha within a divine household. It is grammatically simple Hindi and often one of the first aarti lines children remember because the relationships are concrete." },
      { h3: "Ekadant dayavant, char bhujadhari" },
      { p: "Ekadant means one-tusked. Dayavant means compassionate or filled with mercy. Char bhujadhari is the bearer of four arms. Images vary in the objects those hands carry, but common Ganesha iconography includes a noose, goad, sweet and blessing gesture." },
      { h3: "Mathe par tilak sohe, moose ki savari" },
      { p: "A tilak shines on his forehead; the mouse is his vahana, vehicle. Moose here is not the English animal. It is a Roman rendering of the Hindi oblique form related to mooshak, mouse. Search captions sometimes turn this into a pronunciation joke, but the Hindi line is ordinary." },
      { h3: "Paan chadhe, phool chadhe, aur chadhe meva" },
      { p: "Betel leaf, flowers and meva, dry fruit, are offered. Chadhe means they are placed or offered in worship. A family should follow its actual puja rules; paan is named in the poem but not compulsory for every daily aarti." },
      { h3: "Ladduan ka bhog lage, sant karein seva" },
      { p: "Laddus are presented as bhog while saints or devotees offer service. The rustic plural ladduan is often modernised to laddoo ka in singing. Both point to the familiar association between Ganesha and round sweets." },
      { h3: "Sharan aaye, safal kije seva" },
      { p: "The singer comes to refuge, sharan, and asks that the act of service be accepted and made fruitful. Safal does not need to mean a material reward. It can mean that the worship reaches its purpose by making the devotee steadier, kinder and less possessive." },

      { h: "The verse many pages avoid explaining" },
      { p: "The old verse 'andhan ko aankh det...' uses a familiar devotional form: the deity gives sight, bodily restoration, a son and wealth. It imagines divine compassion through reversal of conditions that caused vulnerability in its social setting. But a modern family should not sing it unthinkingly and then treat a disabled person, someone with leprosy, a childless woman or a poor person as incomplete." },
      { p: "The word translated as 'barren woman' is especially loaded. It reduces a woman to fertility and asks specifically for a son. Some households retain the verse because it is part of the version received from elders. Some omit it. Some explain it before singing. None of those choices requires shaming another family." },
      { p: "If you keep it, teach that illness and disability are not punishments, childlessness is not moral failure, and daughters are not lesser blessings. If you leave it out, do not pretend the line never existed. Honest transmission can preserve a text and still name the assumptions we no longer want to reproduce." },
      { note: "Do not rewrite the verse on the fly and attribute your new words to an old anonymous aarti. If your community uses an adapted version, label it as an adaptation." },

      { h: "Why lyrics differ online" },
      { p: "Jai Ganesh Deva is widely transmitted through family booklets, temple sheets, school assemblies, cassettes, films and videos. It has no single named author and publication history that fixes one critical edition for every singer. Oral circulation naturally creates swapped offerings, shortened verses and altered signatures." },
      { p: "Common changes include 'mata jaki' becoming 'mata teri', 'moose ki savari' becoming 'mooshak ki savari', and 'paan chadhe' becoming 'haar chadhe'. Some versions add a line about the blind and sick; others go directly from offerings to refuge. A few medleys append unrelated Ganesh prayers and label the whole track the full aarti." },
      { p: "For household worship, continuity matters more than winning a textual debate. For publishing, transparency matters. Print the version you are using, identify additional verses as variants, and do not manufacture an author or date." },
      { table: { head: ["Variation", "What to know"], rows: [
        ["Mata jaki / mata teri Parvati", "Both circulate; jaki means whose mother is Parvati"],
        ["Moose / mooshak ki savari", "The mouse vehicle; Roman spelling causes confusion"],
        ["Paan chadhe / haar chadhe", "Offering lists vary between versions"],
        ["Three verses / four or more", "Short temple and school versions often omit older or disputed verses"],
        ["Sur Shyam / Shyam / no signature", "The closing line is unstable across printed lyrics"],
      ] } },

      { h: "When and how it is sung" },
      { p: "Jai Ganesh Deva is sung in homes and temples during Ganesh puja throughout the year and becomes especially visible during Ganesh Chaturthi. In many Hindi-speaking homes it is the main Ganesh aarti. In Maharashtrian homes it may follow Sukhkarta Dukhharta or be sung when a mixed-language group is present." },
      { p: "It can be sung after sthapana puja, during morning and evening aarti, and during the final Uttar Puja before Visarjan. The order depends on the home. Do not force a national sequence onto a family booklet." },
      { h3: "A simple group plan" },
      { ul: [
        "Choose in advance which verses your group will sing.",
        "Print Devanagari and Roman text together for guests.",
        "Have one person lead each verse and everyone join the refrain.",
        "Keep the aarti plate stable, with paper and sleeves away from the flame.",
        "Explain variant or sensitive lines before puja, not while the lamp is circling.",
        "End according to the household sequence, which may include another aarti, Ghalin Lotangan or a chant.",
      ] },

      { h: "Pronunciation guide" },
      { table: { head: ["Word", "Rough sound", "Meaning"], rows: [
        ["Ekadant", "ay-ka-dant", "one-tusked"],
        ["Dayavant", "da-yaa-vant", "compassionate"],
        ["Bhujadhari", "bhu-jaa-dhaa-ree", "bearer of arms"],
        ["Savari", "sa-vaa-ree", "vehicle or mount"],
        ["Chadhe", "cha-rhay", "is offered"],
        ["Meva", "may-vaa", "dry fruit"],
        ["Sharan", "sha-ran", "refuge"],
        ["Seva", "say-vaa", "service or worship"],
      ] } },
      { p: "The rolled Hindi sound in chadhe is difficult to show in English. Listen once, then use the Roman line as memory support. Do not pronounce moose like the North American animal; in this line it is close to moo-say and refers to the mouse." },

      { h: "What YouTube ranking shows" },
      { p: "Jai Ganesh Deva is one of the largest Hindi aarti searches. In results checked on 20 September 2026, a T-Series Bhakti Sagar upload with Hindi and English lyrics had more than 323 million views. A Nova Spiritual India result had more than 54 million, Rajshri Soul more than 17 million, and Shemaroo Bhakti more than 8 million." },
      { p: "The recurring title words are 'Ganesh Aarti', 'Jai Ganesh Deva', 'lyrics', 'Hindi' and 'full'. Short and superfast versions also rank, which suggests people often need an immediate puja track rather than a discourse. A blog can serve a different need: making the words readable, explaining variants and helping a family choose what to sing." },
      { p: "View count proves listening demand, not authorship or ritual correctness. Music labels own particular recordings; the traditional lyrics are older than those recordings. Link or embed lawfully. Do not download a popular audio file and attach it to a blog because the prayer feels public." },

      { h: "Teaching it to children or non-Hindi speakers" },
      { p: "Begin with the refrain and family relationships: Parvati, Shiva and Ganesha. Then use the first verse as an image hunt. Find the tusk, four arms, tilak and mouse in the picture on the altar. The vocabulary becomes visible rather than abstract." },
      { p: "Use the offering verse before setting out bhog. Ask which items are actually present and which are only named in the song. That prevents a child from thinking aarti fails without paan or dry fruit. It also opens a conversation about why food offered with attention matters more than an expensive list." },
      { p: "Discuss the sensitive verse separately with older children. Explain that old texts show the hopes and assumptions of their time. Faith does not require insulting a living person. A child who learns that distinction can inherit devotion without inheriting every prejudice unexamined." },

      { h: "How to choose a version for a printed family booklet" },
      { p: "Start from the words people in the room already sing, not the longest webpage you can find. Ask two elders or the temple that leads your aarti. Write down the refrain and verses as actually sung, then compare spelling with a clean Hindi source. Preserve genuine household variation, but correct obvious copying errors that produce no Hindi meaning." },
      { p: "Mark optional verses clearly. A small label such as 'our family also sings' is more honest than numbering every circulating verse as if one editor established the order. If the sensitive older verse is included, add a short note for adults rather than leaving a child to interpret it literally. If it is omitted, the booklet can still mention that longer traditional versions exist." },
      { p: "Keep Jai Ganesh Deva separate from Sukhkarta Dukhharta, Ghalin Lotangan and Mantrapushpanjali. They can follow one another in worship without becoming one composition. Give each a heading and begin it on a clean block of the page, so a guest can see when the language or refrain changes." },
      { p: "Print large enough to read at arm's length in warm, uneven lamp light. Devanagari should be primary; Roman text can sit below for guests. Avoid decorative fonts that make matras or conjunct letters ambiguous. Test one printed copy in the puja space before making twenty." },

      { h: "Aarti, offerings and what the song does not require" },
      { p: "The offering verse is memorable because it names paan, flowers, dry fruit and laddus in a neat rhythm. It does not say a puja without all four fails. A daily home aarti may offer one flower and a little fruit. A Ganeshotsav household may prepare modak or a full naivedya. A temple may have a prescribed plate. The song can hold all those scales." },
      { p: "Do not buy an ingredient only to display it and throw it away. Offer food the household can share as prasad, account for allergies, and keep packaging away from the altar flame. If the family is fasting, check which ingredients they accept before arriving with sweets. Bhog is received and shared; it is not dumped into Visarjan water." },
      { p: "The line 'sant karein seva' also widens service beyond the plate. Someone cleans the altar, cooks, teaches the words, carries water, watches a child and drives the family home. Those actions are part of making worship possible. The person singing loudest is not the only one doing seva." },

      { h: "Frequently asked questions" },
      { faq: [
        { q: "What is the meaning of Jai Ganesh Deva?", a: "It means glory or victory to Lord Ganesha. The refrain identifies Parvati as his mother and Mahadeva, Shiva, as his father." },
        { q: "Who wrote Jai Ganesh Deva?", a: "The aarti is widely treated as a traditional Hindi composition. A single reliably established author is not named across the circulating versions." },
        { q: "How many verses does Jai Ganesh Deva have?", a: "There is no single stable count across all versions. Many families sing two main verses and a closing; longer printings include the verse about sight, health, children and wealth." },
        { q: "Why are the lyrics different on different websites?", a: "The aarti spread through oral tradition, booklets, recordings and regional use. Offering lines, closing signatures and additional verses have changed in circulation." },
        { q: "Is Jai Ganesh Deva in Hindi?", a: "Yes. It is a Hindi aarti with some older or regional word forms such as ladduan and mata jaki." },
        { q: "What does Ekadant mean?", a: "Ekadant means one-tusked, a familiar name and visual form of Ganesha." },
        { q: "What does moose ki savari mean?", a: "It refers to the mouse as Ganesha's vehicle. Moose is a Roman spelling of the Hindi form, not the English word for a large deer." },
        { q: "Can we omit the old verse about blindness and sons?", a: "Families handle the variant differently. Some retain and explain it; others omit it. Decide before aarti, do not shame another household, and do not label a rewritten verse as the original." },
        { q: "When should Jai Ganesh Deva be sung?", a: "It is sung during Ganesh puja through the year and during Ganeshotsav, including daily aarti, sthapana and the final puja before Visarjan." },
        { q: "Can Jai Ganesh Deva and Sukhkarta Dukhharta both be sung?", a: "Yes. Mixed-language and Maharashtrian households often sing both, in the order their family or temple follows." },
        { q: "What is offered in the aarti lyrics?", a: "The common version names paan, flowers, dry fruit and laddus. These are poetic and ritual offerings, not a mandatory list for every home." },
        { q: "Which YouTube version is best?", a: "Choose a clear full version that matches the verses your household plans to sing. Check the displayed lyrics first; high views do not guarantee a stable text." },
      ] },

      { h: "Source note" },
      { p: "The Hindi text and major circulating variants were compared across current Hindu Aarti and music-label lyric pages on 20 September 2026. Because a single critical edition and author are not reliably established, this page labels additional and closing verses rather than presenting one long version as uncontested. YouTube view counts are snapshots from the same date and are used only to show search demand." },
      { p: "If the family aarti is happening somewhere you cannot reach, send your shagun with a line of your own instead of a copied forward. A digi lifafa can help with flowers, prasad or the meal after Visarjan, and they can use it where the celebration needs it." },
      { related: { href: "/make", label: "Send a digi lifafa" } },
      { related: { href: "/blog/sukhkarta-dukhharta-aarti-lyrics-meaning", label: "Also read: Sukhkarta Dukhharta lyrics and meaning" } },
    ],
  },
  {
    slug: "ukadiche-modak-recipe-ganesh-chaturthi-2026",
    title: "Ukadiche modak for Ganesh Chaturthi: a careful recipe that explains the difficult parts",
    date: "2026-09-18",
    updated: "18 September 2026",
    tag: "Festivals",
    excerpt: "A detailed ukadiche modak recipe for Ganesh Chaturthi: rice-flour dough, coconut-jaggery filling, hand pleats, mould method, steaming and fixes for cracks.",
    body: [
      { p: "Ukadiche modak are steamed dumplings with a soft rice-flour cover and a coconut-jaggery filling. The ingredient list is short. The judgment is not. The filling must be cooked enough to hold together without becoming hard. The rice flour must absorb hot water properly. The dough must be kneaded while warm, kept covered and shaped before its surface dries." },
      { p: "This guide makes about 11 medium modak. That is a workable first batch and also fits the familiar offering of 11 used in many homes, though your household's naivedya count may differ. Make the number your family follows. Do not scale a new recipe for a large gathering until you have tested one batch with your rice flour, coconut and steamer." },
      { photo: "ganeshIdolShop" },
      { h: "What ukadiche modak are" },
      { p: "\"Ukad\" refers to the cooked or scalded rice-flour dough used for the outer cover. Fresh coconut and jaggery form the sweet centre, usually scented with cardamom. Some homes add nutmeg, poppy seeds, sesame or chopped nuts. Others want only coconut, jaggery and cardamom. Treat additions as family variations, not improvements to a supposedly incomplete filling." },
      { p: "The steamed Maharashtrian modak is different from fried modak, mawa modak and the moulded sweets sold in many flavours during Ganeshotsav. All may be offered, but they are not one recipe with interchangeable timings. This article is about the soft white steamed version." },
      { p: "Ganesh Chaturthi was Monday, 14 September in 2026, but modak are prepared throughout Ganeshotsav. If your home has a fixed naivedya menu for Chaturthi, Gauri Pujan or a particular aarti, follow that calendar. For visitors, a box of modak should be confirmed with the host because fresh steamed modak have a shorter useful life than packaged sweets." },
      { h: "Ingredients for about 11 medium modak" },
      { h3: "For the coconut-jaggery filling" },
      { p: "- 1 cup tightly packed fresh grated coconut - 3/4 cup grated or finely chopped jaggery - 1/2 teaspoon cardamom powder - a small pinch of grated nutmeg, optional - 1 teaspoon poppy seeds, optional and only if your household uses them - 1 teaspoon ghee, optional for the pan" },
      { h3: "For the rice-flour cover" },
      { p: "- 1 cup fine rice flour - 1 cup water, with a little extra hot water kept nearby - 1 teaspoon ghee - a pinch of salt" },
      { h3: "For shaping and steaming" },
      { p: "- a small bowl of water - a little ghee for fingertips or mould - banana leaf, turmeric leaf or a lightly greased steaming surface, depending on what you use Cup measurements vary. The more important relationship is that the dough becomes soft, smooth and pliable rather than crumbly or paste-like. Rice flour brands absorb water differently. Keep boiling water ready, but add any correction a teaspoon at a time." },
      { h: "Choose the ingredients before starting" },
      { p: "Use fine rice flour, not coarse rice rava. Modak flour sold during the festival is generally milled for this purpose, but check that it is fresh and free of a stale smell. Some experienced cooks lightly roast or sift flour; others use it directly. Follow the method suited to the flour you know. This recipe scalds it directly in boiling water." },
      { p: "Fresh coconut gives the filling its characteristic texture. Frozen grated coconut can work when fully thawed, but it may release water differently. Desiccated coconut is not a one-for-one substitute in this method. It absorbs rather than releases moisture and changes both texture and cooking time." },
      { p: "Jaggery ranges from soft and moist to dry and hard. Dark jaggery makes a darker filling; colour alone is not failure. Break lumps before they go into the pan so the coconut is not overcooked while waiting for a large piece to melt." },
      { h: "Make the filling first" },
      { p: "Use a broad, heavy pan over low to medium-low heat. Add coconut and jaggery. The jaggery will melt and the mixture will first look looser, not thicker. That is expected." },
      { p: "Stir regularly, scraping the base and sides. Continue only until excess moisture cooks off and the mixture looks cohesive. It should mound softly when pushed together. It will firm further as it cools. Dassana's Veg Recipes warns against overcooking because the filling then becomes dense or hard. That warning matters more than a fixed minute count: coconut moisture, pan width and jaggery all change the time." },
      { p: "Turn off the heat and add cardamom and optional nutmeg. Transfer the filling to a plate so it cools faster. Do not trap steam under a lid. The filling must be at room temperature before it enters the dough; hot filling weakens the cover and makes shaping harder." },
      { p: "Once cool, divide it into 11 loose portions. Do not compress each portion into a hard ball. A lightly portioned filling spreads into the modak without pushing through the sides." },
      { h: "Make the ukad" },
      { p: "Bring one cup of water to a full boil with salt and ghee. Lower the heat and add the rice flour. Stir promptly so dry pockets do not remain. Cover and let it cook gently for two or three minutes, then turn off the heat. Rest it covered for about five minutes." },
      { p: "The next step must happen while the mixture is warm enough to become smooth but not so hot that it burns your hands. Transfer it to a plate or parat. Wet your palm lightly and knead. Press out lumps with the heel of your hand, fold, and press again." },
      { p: "A good dough feels soft and even, without dry cracks at the edges. It should not stick to the hand like batter. If it is dry, add hot water by the teaspoon and knead fully before adding more. If it is very sticky, first keep kneading as it cools; adding a lot of raw flour can leave the steamed cover chalky." },
      { p: "Cover the finished dough with a damp cloth or a lid. Every piece waiting to be shaped stays covered. An exposed surface dries quickly, and a dried surface produces cracked pleats even if the centre of the dough is soft." },
      { h: "Shape by hand" },
      { p: "Divide the warm dough into 11 smooth balls. Work with one and keep the rest covered." },
      { p: "Grease or wet your fingers very lightly. Flatten the ball, then use thumbs and fingertips to form a small cup. Rotate the cup as you press, keeping the base slightly thicker than the upper rim. The rim needs to be thin enough to pleat, but not translucent or fragile." },
      { p: "Place one portion of filling in the centre. Leave clean dough at the edge; jaggery on the rim prevents it from sealing. Pinch small pleats around the circumference. For a first batch, six or eight clear pleats are better than many torn ones. Bring the pleats together at the top and pinch into a point." },
      { p: "Inspect the sides. Seal a small crack with damp fingertips and a tiny smear of soft dough. Do not soak the surface. Place the finished modak under a damp cloth while shaping the rest." },
      { p: "Hand pleats improve with repetition. The first modak may be broad and the fifth may stand taller. They are still valid. Even thickness and a sealed top matter more than identical geometry." },
      { h: "Shape with a mould" },
      { p: "Lightly grease the inside of the mould. Close it and press a portion of dough against the walls, leaving a hollow centre. Check that the point and ridges are filled; gaps there become holes." },
      { p: "Add filling without packing it to the brim. Cover the open base with a small disc of dough and seal its edge to the dough already in the mould. Open gently and release." },
      { p: "If dough sticks, use less force and a very thin film of ghee. If the modak collapses, the wall may be too thin, the filling too warm, or the dough too wet. A mould creates even ridges but does not correct the dough. The same moisture judgment still decides whether the modak steams without cracking." },
      { h: "Steam without drying them out" },
      { p: "Bring the steamer water to a boil before loading the modak. Line the plate with a banana or turmeric leaf if available, or grease it lightly. Arrange the modak with space between them so steam can circulate." },
      { p: "Wet each surface lightly. Steam over medium heat for about 10 to 12 minutes. Exact time depends on size and steamer strength. The cover changes from raw matte white to a slightly translucent, settled look. It should feel cooked, not wet and floury." },
      { p: "Do not keep steaming simply because a recipe gives a larger upper number. Oversteaming can dry the cover. Turn off the heat, wait a minute and open the lid away from your face so condensed steam does not burn you. Let the modak settle briefly before moving them." },
      { p: "Serve warm with a small amount of ghee if your household does that. For naivedya, first set aside the offering according to your puja practice; do not taste from that portion while cooking." },
      { h: "Why modak crack" },
      { p: "Cracks usually point to one of a few process problems." },
      { p: "The dough was too dry. Rice flour needed more hot water, or the dough was not kneaded smooth while warm." },
      { p: "The surface dried while waiting. Dough balls and shaped modak must stay covered." },
      { p: "The cover was uneven. A very thin patch tears under filling pressure while a thick rim resists pleating." },
      { p: "The filling was hot or too wet. Steam and syrup weaken the cover from inside." },
      { p: "The rim had filling on it. Jaggery prevents a clean seal." },
      { p: "The steamer was not ready. Modak left sitting uncovered while water warms can dry out." },
      { p: "The repair is not to add ghee indiscriminately. Correct the relevant problem. Knead a teaspoon of hot water into dry dough; cool a warm filling; cover the queue; make smaller filling portions; or seal the rim cleanly." },
      { h: "Why the filling leaks" },
      { p: "A leaking filling can come from an open top, a side crack or an undercooked coconut-jaggery mixture. The melted jaggery becomes fluid under steam. If too much free moisture remains, it pushes at weak points." },
      { p: "Cool the filling completely and check its texture before shaping. It should be moist and cohesive, not syrupy. Leave enough empty space to close the pleats without squeezing. Seal the point firmly but gently." },
      { p: "Do not solve leakage by cooking the filling until hard. Once cooled, an overcooked filling becomes chewy and loses the soft coconut texture. Stop when the pan mixture gathers, knowing that cooling completes the firming." },
      { h: "If the dough is lumpy" },
      { p: "Small dry flour pockets form when rice flour is not stirred quickly into hot water. While the mixture is still warm, knead firmly and press lumps against the plate. Wet fingertips help without flooding the dough." },
      { p: "For the next batch, sift the flour and keep it beside the stove before the water boils. Add it in a steady motion and stir immediately. A broad spoon or sturdy spatula reaches the base better than a small spoon." },
      { p: "If large hard lumps remain after kneading, forcing them into wrappers produces tears. It is better to correct the ukad before portioning than to hope steaming will erase them." },
      { h: "A timing plan for puja day" },
      { p: "Modak are best when freshly steamed, but doing every step during the puja window creates stress. Split only what can be split safely." },
      { p: "Earlier the same day: grate coconut, break jaggery, measure flour, clean leaves and set up the steamer." },
      { p: "One to two hours before serving: cook and cool the filling." },
      { p: "Closer to naivedya: make the ukad, knead, shape and steam." },
      { p: "Do not refrigerate hot filling or hot modak in a closed container. Condensation changes texture and creates food-safety problems. If climate, quantity or schedule requires storage, use conservative food-safety practice and reheat by gentle steaming rather than leaving coconut sweets warm for many hours." },
      { p: "A first-time cook should make the filling before guests arrive. Shaping can become a family activity, but only after someone has checked that the dough moisture is right." },
      { h: "Scaling the recipe" },
      { p: "Two batches are safer than one enormous batch. A large mass of ukad cools before it is fully kneaded and shaped. A deep pan of filling cooks unevenly. Steamers also have fixed capacity; shaped modak waiting through several loads may dry." },
      { p: "For 21 modak, double the ingredient quantities approximately but make two rounds of dough. The filling can be cooked in a wide pan and divided once cool. Keep the second rice-flour batch unmade until the first is shaped or steaming." },
      { p: "Weighing portions is useful for consistent cooking, but a festival kitchen does not need factory precision. Make the dough balls similar, keep the covering even, and avoid one very large modak in a tray of small ones." },
      { h: "Variations without confusing the base recipe" },
      { p: "Turmeric-leaf steaming gives a distinct aroma in homes where those leaves are part of the practice. Banana leaf helps prevent sticking but does not create the same fragrance. Plain greased steamer plates work when neither is available." },
      { p: "Poppy seed, sesame, chopped cashew, raisins and nutmeg appear in different family fillings. Add only what belongs in the flavour you want. More ingredients can obscure fresh coconut and cardamom." },
      { p: "For a vegan batch, oil may replace ghee in the dough and on fingers, provided that fits the offering rules in your home. Do not label a naivedya choice universal; household dietary and ritual rules differ." },
      { p: "Chocolate, mawa and dry-fruit modak are separate sweets. They may be popular gifts but they do not need to be folded into an ukadiche modak recipe for search variety." },
      { h: "Serving, carrying and gifting" },
      { p: "Fresh steamed modak are tender. Arrange them in a single layer or with enough room that their points are not crushed. Let surface steam escape before closing a box, but do not leave them uncovered until the cover dries." },
      { p: "For a short trip to a nearby home, tell the host they are fresh and when they were made. For a long-distance gift, choose a sweet designed to travel rather than pretending steamed coconut-filled dumplings are shelf-stable. Food safety and texture both matter." },
      { p: "If you cannot visit family during Ganeshotsav, send money for their local modak order or ask which sweet shop they use. A short note like \"For today's aarti and modak\" gives the gift a place in the celebration. Do not surprise a diabetic relative with a large sweet box because a festival list said sweets are mandatory." },
      { photo: "chhatrapatiRajaramMandal" },
      { faq: [
        { q: "Which rice flour is best for ukadiche modak?", a: "Use fresh, finely milled rice flour or flour sold specifically for modak. Coarse rice flour makes a rough cover and is harder to pleat." },
        { q: "Why does my modak dough crack?", a: "It is usually too dry, insufficiently kneaded, or exposed to air. Knead while warm, add hot water only a teaspoon at a time, and keep every waiting portion covered." },
        { q: "Should modak dough be kneaded hot?", a: "Knead it while still warm enough to become smooth, but never while it is hot enough to burn. Rest the scalded flour covered briefly, then use wet palms as needed." },
        { q: "Why does jaggery filling become hard?", a: "It was probably cooked too long. Stop when excess moisture has evaporated and the mixture gathers softly; it firms more as it cools." },
        { q: "Can frozen coconut be used?", a: "Yes, when fully thawed, but its moisture may differ from fresh coconut. Cook by texture rather than a fixed number of minutes. Desiccated coconut is not a direct substitute." },
        { q: "How long should ukadiche modak steam?", a: "About 10 to 12 minutes for medium modak in a steamer that is already producing steam. Size and equipment vary, so look for a cooked, slightly translucent cover rather than extending time automatically." },
        { q: "Can I make the filling the day before?", a: "It can be prepared ahead and refrigerated promptly, but bring it to a cool room temperature before shaping so it is not cold and hard or warm and wet. Fresh coconut is perishable; use conservative storage practice." },
        { q: "Can I make the dough the day before?", a: "Fresh ukad is much easier to shape. Refrigerated rice-flour dough dries and loses pliability. Make it close to shaping time." },
        { q: "How do I stop modak sticking to the mould?", a: "Apply a very thin film of ghee, press dough evenly into every ridge, avoid overfilling and release gently. Too much grease can make sealing difficult." },
        { q: "Can ukadiche modak be made without a mould?", a: "Yes. Form a thin cup, pinch pleats around the rim, fill and bring the pleats together. The first pieces may be less symmetrical, but a sealed even cover is what matters." },
        { q: "How many modak are offered to Ganpati?", a: "Counts such as 11 or 21 are common, but there is no reason to overwrite a household's established naivedya practice. Ask the person leading the puja and prepare the number your family follows." },
        { q: "Are ukadiche modak gluten-free?", a: "The basic rice flour, coconut and jaggery recipe contains no wheat, but cross-contamination depends on the flour, kitchen and equipment. Do not promise safety to someone with coeliac disease without checking packaging and preparation surfaces." },
      ] },
    ],
  },
  {
    slug: "ganesh-chaturthi-2026-date-muhurat-puja",
    title: "Ganesh Chaturthi 2026: date, Mumbai muhurat, sthapana and puja guide",
    date: "2026-09-18",
    updated: "18 September 2026",
    tag: "Festivals",
    excerpt: "Ganesh Chaturthi is Monday, 14 September 2026. Check the Mumbai sthapana window, Chaturthi tithi, a careful home-puja sequence, samagri and common questions.",
    body: [
      { p: "Ganesh Chaturthi was on Monday, 14 September 2026. For Mumbai, the Madhyahna puja window was approximately 11:20am to 1:47pm IST. The festival then continues through household visarjan days and ends with the large Anant Chaturdashi visarjan on Friday, 25 September 2026." },
      { p: "That is the useful short answer. The rest needs a little care. A muhurat is calculated for a place, not copied unchanged across India. A family puja is also not made more sincere by treating one online list as a universal rule. If your family has a priest, inherited sequence or fixed Ganpati tradition, that is the sequence to follow. This guide is for planning a careful home welcome without pretending that every Maharashtrian, Konkani, Telugu or Tamil home does it identically." },
      { photo: "ganeshChaturthi2021" },
      { h: "The 2026 date, tithi and Mumbai muhurat" },
      { p: "The date confusion this year came from the Chaturthi tithi touching parts of two civil dates. The observance was Monday, 14 September because the Chaturthi tithi and the locally calculated Madhyahna period overlap that day. Drik Panchang's 2026 page lists Chaturthi beginning at 4:36am on 14 September and ending at 5:14am on 15 September for its displayed location, while its festival method explains why Madhyahna, the Hindu midday division, is preferred for the main puja. Its location selector matters: the clock times on the page change with the selected city." },
      { p: "For Mumbai, current city-specific calculations published for 2026 put the Madhyahna window at roughly 11:20am-1:47pm. New Delhi listings were around 11:29am-1:59pm. Those differences are normal. Sunrise, solar midday and tithi boundaries are local. If you are outside Mumbai, select your own city in a panchang rather than using Mumbai's numbers as if they travel." },
      { table: { head: ["What","2026 answer"], rows: [["Ganesh Chaturthi","Monday, 14 September 2026"],["Mumbai Madhyahna puja","About 11:20am-1:47pm IST"],["New Delhi Madhyahna puja","About 11:29am-1:59pm IST"],["Chaturthi tithi","Begins early 14 September; ends early 15 September, with exact local display varying"],["Main Anant Chaturdashi visarjan","Friday, 25 September 2026"]] } },
      { p: "The date and Mumbai window are corroborated by Drik Panchang's Ganesh Chaturthi calculator, Times of India's 14 September date explainer and the location-specific Mumbai calculation at Muhuratam. All were checked on 18 September 2026." },
      { h: "Why the main puja is at Madhyahna" },
      { p: "Madhyahna is not simply a generic instruction to pray at 12 noon. Traditional Hindu day reckoning divides the daylight period into parts calculated from local sunrise and sunset. Ganesh puja is preferred in the Madhyahna portion because the festival tradition associates Ganesha's manifestation with this part of the day. That is why reliable calendars calculate a window rather than print one national clock time." },
      { p: "This also explains why two pages can agree on the festival date but show slightly different times. A panchang configured for Delhi, Mumbai, London or Singapore is answering four different local-time questions. Check the location named at the top of the page before forwarding a screenshot to the family group." },
      { p: "A muhurat is a preferred window, not a reason to panic if real life intervenes. Families managing work, children, elderly relatives, building rules or a priest's availability often use a practical time set within their own tradition. If a formal pran pratishtha is being done, ask the priest who is doing it. An article cannot replace the person responsible for the rite." },
      { h: "Decide the length of the stay before sthapana" },
      { p: "Ganpati does not have to stay in every home for all ten festival days. Common household observances include one-and-a-half, three, five and seven days, or the full period through Anant Chaturdashi. Some homes have an inherited day that does not change from year to year. Others bringing Ganpati home for the first time choose a short stay they can care for properly." },
      { p: "Make this decision before installation. It determines food, flowers, daily aarti, guests, leave from work, transport and the immersion plan. The current 2026 search pattern shows people repeatedly asking whether a shorter Ganpati is acceptable. The honest answer is that shorter stays are established household practice, not an inferior version of the festival. Follow the sankalp you make and your family's custom." },
      { p: "For 2026, the widely reported household dates after a 14 September sthapana were:" },
      { ul: ["one-and-a-half day visarjan: Tuesday, 15 September;","three-day visarjan: Wednesday, 16 September;","five-day visarjan: Friday, 18 September;","seven-day visarjan: Sunday, 20 September;","Anant Chaturdashi: Friday, 25 September."] },
      { p: "These labels are conventional. \"One-and-a-half day\" does not demand measuring exactly 36 hours from installation. The farewell is ordinarily performed the following day after the household's puja and Uttar Puja." },
      { h: "Before bringing the murti home" },
      { p: "The calmest puja begins with decisions made before the murti reaches the door." },
      { p: "Choose a stable chowki or platform. Check its weight rating, especially if the decoration includes wood, metal frames, lamps or water-filled kalash. The murti should not wobble when someone walks past. Keep the setup away from a fan that will dry flowers quickly, a curtain near an open flame, and an extension-board tangle. Leave enough room for the person doing the puja to sit and for family members to pass without brushing the altar." },
      { p: "Decide where the murti will be immersed. A natural-clay murti may suit a home immersion tub if local rules and your household practice allow it. A larger murti needs an authorised public or artificial immersion facility and enough adults to lift it safely. Do not postpone this decision until the farewell aarti." },
      { p: "Separate worship materials from decoration materials. Flowers, leaves, cotton wicks, kumkum and naivedya belong near the puja. Scissors, tape, loose wire, glue guns and plastic packaging do not. Finish the construction first and clear the working debris." },
      { p: "If you use lamps, place them on a non-flammable base. Keep water nearby for safety, but not where it can be kicked into electrical lights. Battery lights are easier around children, pets and crowded rooms. The point is not to produce an Instagram set. It is to make a clean place where the family can actually sit, pray and host visitors." },
      { h: "A practical samagri list" },
      { p: "No single internet checklist can represent every family. This list covers the ordinary categories so that you can compare it with your own tradition." },
      { p: "For the place and murti" },
      { ul: ["Ganesh murti, chowki and clean cloth;","rangoli materials and toran if used;","flowers, garlands and durva;","lamp, cotton wicks, oil or ghee, and matches kept safely;","a small bell, if part of the household puja;","kalash and coconut if your sequence uses them."] },
      { p: "For the puja" },
      { ul: ["water in a clean vessel and spoon;","haldi, kumkum, akshata and sandalwood paste;","janeu, cloth or ornaments only if customary;","incense or dhoop, with ventilation;","fruits, coconut, betel leaves and betel nut where used;","dakshina if a priest is attending;","aarti plate and the family's aarti book or audio ready beforehand."] },
      { p: "For naivedya" },
      { ul: ["modak, often ukadiche modak in Maharashtrian homes;","fruit or another sweet offering;","the meal your family traditionally prepares;","separate clean serving bowls and water."] },
      { p: "Durva and modak are strongly associated with Ganesha, but do not convert that association into a rigid number rule for every home. If your family offers 21 durva bundles or 21 modaks, follow that practice. If not, ask the elder or priest guiding the puja rather than borrowing a number from a search result." },
      { h: "Bringing Ganpati home" },
      { p: "Households differ on who carries the murti, whether its face is covered for the journey, and what is said at the threshold. What can be said safely is simple: handle it with both respect and physical care. Use a vehicle and base large enough for the murti. Secure the base without putting pressure on delicate hands, crown or trunk. Do not let one person lift a weight that needs two." },
      { p: "At home, the family may welcome Ganpati with rangoli, aarti, rice or flowers according to custom. Place the murti on the prepared seat and remove travel supports carefully. Take packaging away before lamps are lit. If a priest is performing installation, let that person set the pace rather than trying to run a second sequence from a phone." },
      { photo: "ecoFriendlyGanesh" },
      { h: "A careful home-puja sequence" },
      { p: "This is an orientation, not a replacement for a family pothi or priest-led vidhi." },
      { h3: "1. Clean yourself and the puja place" },
      { p: "Bathe or wash, wear clean clothes, and settle the materials before beginning. Put phones on silent unless one is being used for the aarti. Cleanliness here is practical as well as ritual: fruit is being cut, lamps are burning and several people may share a small space." },
      { h3: "2. Begin with the household's opening prayer" },
      { p: "Many pujas begin with achaman, sankalp and invocations taught within the family. The sankalp names the purpose and observance. If you do not know a formal Sanskrit formula, do not invent one from fragments. Use a trusted family text or ask the priest. A sincere prayer in a language you understand is better than confidently mispronouncing a procedure you cannot verify." },
      { h3: "3. Perform the installation rites you have undertaken" },
      { p: "Formal pran pratishtha carries specific ritual obligations. If your family has engaged a priest for it, follow that priest's instructions for installation and conclusion. Many home celebrations use a simpler welcome and worship rather than claiming to perform every formal rite independently." },
      { h3: "4. Offer the ordinary upacharas" },
      { p: "The household sequence may include water, sandalwood, akshata, flowers, durva, incense, lamp and naivedya. Offer them in the order your family follows. Keep incense ash off food. Keep flowers fresh and remove wilted material during the stay rather than letting the altar become cluttered." },
      { h3: "5. Offer naivedya" },
      { p: "Place modak, fruit or the prepared food before Ganpati in clean vessels. Some homes observe rules about onion, garlic, tasting food before offering, or the time at which the family eats. These are household and community rules, not details an article should flatten into one command." },
      { h3: "6. Do aarti together" },
      { p: "In Maharashtra, \"Sukhkarta Dukhharta\" is widely sung for Ganpati, often followed by other family aartis. Print or open the words before the lamp is lit. One person should handle the flame; the gathering does not need to crowd the plate." },
      { h3: "7. Share prasad and receive guests" },
      { p: "Let the puja close before the room turns into a photo queue. Share prasad, tell visitors where to leave footwear and gifts, and protect the altar from accidental bumps. If relatives cannot attend, a short live call during aarti or a photo after puja can include them without making the entire worship performative." },
      { h: "Daily care during the stay" },
      { p: "The festival is not finished when the installation photos are posted. The length of the stay should match what the home can sustain." },
      { p: "Refresh flowers and water. Offer food according to the household routine. Keep lamps supervised. Do morning or evening aarti as the family has decided. Clear plates promptly in warm September weather. Check that fruit, coconut and garlands have not spoiled. If many visitors come, wipe the floor and keep cables secured." },
      { p: "Do not leave a flame burning beside an unattended murti because \"akhand\" sounds more devotional. A continuously burning lamp needs an adult, a safe lamp, enough fuel and a setup designed for it. If that cannot be maintained, follow a safer household practice." },
      { h: "The moon-sighting question" },
      { p: "Searches for Ganesh Chaturthi often include \"why should we not see the moon?\" The festival tradition connects moon sighting on Chaturthi with the story of Krishna, the Syamantaka jewel and a false accusation. Panchangs therefore publish a moon-sighting avoidance period." },
      { p: "The exact avoidance window is location-specific for the same reason muhurats are. Drik Panchang states its calculation rule and shows a window for the selected city. Check your own location if your family observes it. Do not circulate one city's time as an all-India rule." },
      { p: "If someone sees the moon accidentally, different traditions prescribe listening to or reciting the Syamantaka story or specific verses. Follow the remedy your family recognises. This is not a reason to frighten a child or tell someone that ordinary misfortune is now guaranteed." },
      { h: "Decoration without thermocol and plastic waste" },
      { p: "The Central Pollution Control Board's revised idol-immersion guidance discourages synthetic and non-biodegradable materials and specifically addresses plaster of Paris, thermocol and plastic. The practical home version is to use what can be reused, composted or separated cleanly." },
      { p: "A cotton backdrop, saree, dupatta, wooden frame, paper toran, flowers, potted plants or existing brass lamps can make a complete mandap. Avoid sticking glitter and plastic ornaments directly to compostable flowers. Keep decorative material detachable from the murti so it can be removed before immersion. Reuse beats buying a new \"eco\" kit every year." },
      { h: "If this is your first Ganpati" },
      { p: "Start smaller than the celebration in your head. Choose a natural-clay murti you can lift. Keep the stay short enough to manage. Write down the daily puja and meal plan. Ask one knowledgeable relative to guide you. Confirm immersion arrangements before sthapana." },
      { p: "There is no prize for the tallest home murti, the widest menu or the largest guest list. A first festival that is safe, sustainable and calm is a foundation for the next one. A setup that exhausts the household or creates an immersion crisis is not improved by looking grand in photographs." },
      { faq: [
        { q: "Is Ganesh Chaturthi on 14 or 15 September in 2026?", a: "Ganesh Chaturthi was observed on Monday, 14 September 2026. Chaturthi tithi continued into early 15 September, which caused the two-date searches, but the locally calculated Madhyahna puja occurred on the 14th." },
        { q: "What was the Ganesh sthapana muhurat in Mumbai in 2026?", a: "The published Mumbai Madhyahna window was approximately 11:20am to 1:47pm IST on 14 September. Use a location-set panchang for another city." },
        { q: "Can Ganpati stay for one and a half days?", a: "Yes. One-and-a-half-day, three-day, five-day, seven-day and Anant Chaturdashi observances are all seen in household practice. Decide the duration before installation and follow family custom." },
        { q: "Does one-and-a-half day mean exactly 36 hours?", a: "No. In the common 2026 observance, installation was on 14 September and Uttar Puja and immersion were on 15 September. Families did not need to count precisely 36 hours from the moment of sthapana." },
        { q: "Can I bring Ganpati home for the first time without a priest?", a: "Many families perform a simple home welcome and puja, but formal pran pratishtha has a defined procedure. If you are undertaking formal installation, consult a priest or a trusted family guide. Do not claim a formal rite on the strength of a short online checklist." },
        { q: "Which direction should Ganpati face?", a: "Advice online is inconsistent and often presented without a source. Use the altar position your family or priest recommends, while prioritising a stable, safe placement. Do not redesign a room around an unsupported universal claim." },
        { q: "What should I offer Ganpati?", a: "Durva, flowers, fruit and modak are common. The full naivedya and number of offerings vary by household. Prepare what your family regards as appropriate and what can be handled cleanly." },
        { q: "Can we do puja outside the muhurat?", a: "The Madhyahna window is preferred, but circumstances and household practice matter. If a priest is leading the rite, follow that person's timing. Do not let anxiety about a missed minute replace the purpose of the welcome." },
        { q: "Why is the moon not seen on Ganesh Chaturthi?", a: "The practice is connected with the traditional story of Ganesha, Krishna and the Syamantaka jewel. Panchangs calculate local avoidance times. Remedies for accidental sighting differ by tradition." },
      ] },
      { h: "A practical plan if you are reading this after Chaturthi" },
      { p: "Ganesh Chaturthi itself has passed, but Ganeshotsav has not. If Bappa is already at home, the useful work now is daily care and a well-planned farewell. Keep the puja place clean, refresh flowers and water, offer the food your household follows, and decide the visarjan day and place before the last afternoon. If you missed sthapana on 14 September, do not copy a formal pranapratishtha sequence from a blog and install late out of anxiety. Ask the priest or elder who guides your household what is appropriate. You can still visit family or a public mandal, join aarti, help with food or make a gift without inventing a household vow halfway through the festival." },
      { p: "The remaining 2026 milestones are straightforward: five-day households immersed on 18 September, seven-day households on 20 September, and the public finale is 25 September. Local authorities may issue route, traffic and immersion-site instructions close to each date. Those live instructions outrank a general festival guide. Check your municipal corporation or local police notice before leaving with an idol, especially in Mumbai and Pune where large processions affect roads for hours." },
      { p: "For a distant family, a specific message is better than a generic image. Ask how their Ganpati looks this year, whether they made modak, or when their visarjan is. If you are sending money for prasad, flowers or a child's festival treat, say what it is for. The value is in participating in the household's actual celebration, not in sending a large amount." },
    ],
  },
  {
    slug: "ganesh-visarjan-2026-dates-uttar-puja",
    title: "Ganesh Visarjan 2026: dates, Uttar Puja and a careful immersion plan",
    date: "2026-09-18",
    updated: "18 September 2026",
    tag: "Festivals",
    excerpt: "Ganesh Visarjan 2026 dates for 1.5, 3, 5 and 7-day Ganpati, plus Anant Chaturdashi on 25 September, Uttar Puja, home immersion and what to plan.",
    body: [
      { p: "The main Ganesh Visarjan in 2026 is on Friday, 25 September, the day of Anant Chaturdashi. Household Ganpatis do not all stay until then. Families commonly choose a one-and-a-half, three, five or seven-day stay, usually according to a decision made at sthapana and their own tradition." },
      { p: "For a Ganpati welcomed on Monday, 14 September, the practical 2026 sequence is:" },
      { table: { head: ["Stay chosen","Visarjan date in 2026","Day"], rows: [["One-and-a-half days","15 September","Tuesday"],["Three days","16 September","Wednesday"],["Five days","18 September","Friday"],["Seven days","20 September","Sunday"],["Anant Chaturdashi","25 September","Friday"]] } },
      { p: "Those dates answer the search, but not the whole decision. The right day for your home is the duration your household took as its sankalp, not the date that looks most convenient in a table. The right immersion place is an authorised site or an appropriate home arrangement for a small natural-clay idol, not simply the nearest water body. The right ritual sequence is the one your household follows, especially if a priest performed the installation." },
      { photo: "ganeshAagman" },
      { h: "Why families immerse on different days" },
      { p: "Ganeshotsav is often described as a ten-day festival, but that phrase can confuse a first-time host. It does not mean every home must keep an idol for the entire public festival. Reporting during Ganesh Chaturthi 2026 lists the familiar household options of one-and-a-half, three, five and seven days, with the final immersion on Anant Chaturdashi. The Economic Times' 2026 explainer also stresses that there is no single duration followed by every family." },
      { p: "The stay should ideally be decided before or at installation. That lets the family plan daily aarti, food, guests and the farewell without changing the promise for convenience. A one-and-a-half-day Ganpati does not mean watching a clock until exactly 36 hours have elapsed. The usual practical meaning is installation on Chaturthi and farewell after the following day's worship and Uttar Puja. ABP Live's dated 2026 guide makes the same distinction." },
      { p: "If illness, dangerous weather, travel disruption or a municipal restriction makes the planned day impossible, this is not a useful moment for internet superstition. Speak to the family priest or elder who knows the sankalp. A careful change made because circumstances require it is different from casually rewriting the plan." },
      { h: "The dates still ahead from 18 September" },
      { p: "As of this article's check date, the five-day visarjan is taking place on Friday, 18 September. The next common household date is Sunday, 20 September for seven-day Ganpatis. The final citywide day is Friday, 25 September." },
      { p: "Anant Chaturdashi is a separate observance as well as the last Ganpati immersion day. Drik Panchang calculates its tithi and auspicious intervals by city. Do not lift a muhurat displayed for Delhi, Mumbai or a default overseas location and call it universal. Open the location selector or use the panchang your family normally trusts." },
      { p: "For public immersions, the clock is only one part of planning. Municipal notices decide which artificial ponds, beaches, lakes or collection points are open. Police notices decide road closures and procession routes. Those are live operational facts and may change with weather or crowd conditions. Check them on the day." },
      { h: "What Uttar Puja means" },
      { p: "Uttar Puja is the concluding worship before the festival form of Ganpati is moved for immersion. It is a farewell, not a second installation. The family offers its final prayer and aarti, asks forgiveness for mistakes, expresses gratitude for the visit, and prays for Bappa's return." },
      { p: "The exact mantras, number of offerings and gestures vary. Some homes gently move the idol forward before lifting it from the chowki. Some give the idol a final offering of modak, fruit or the day's prepared naivedya. Some circle the idol or carry it through each room. These are not details to combine at random because several webpages mention them. Follow the sequence inherited or taught in your home." },
      { p: "A simple non-priest-led outline can still be responsible:" },
      { ul: ["Bathe and clean the puja space.","Prepare the final naivedya before beginning.","Light the lamp safely and offer flowers and durva if that is your practice.","Perform the usual aarti.","Thank Ganpati for the visit and ask forgiveness for errors.","Complete the household's Uttar Puja.","Remove non-immersible decoration.","Lift and carry the idol only when enough adults are ready."] },
      { p: "If a priest conducted pranapratishtha or gave your family a formal sequence, ask that priest how it should be concluded. A web article is not a substitute for instructions tied to a ritual already performed." },
      { h: "Prepare the idol before it leaves the chowki" },
      { p: "The emotional moment tends to receive all the attention. The practical work prevents damage and accidents." },
      { p: "Remove electric lights, batteries, plastic jewellery, synthetic cloth, foam pieces, metal supports and loose decorative material. Take off flowers and garlands if the immersion site collects them separately. Extinguish lamps. Clear a path from the puja place to the door. Check the idol's weight rather than guessing from its height. A wet surface, staircase or crowded lift changes what can be carried safely." },
      { p: "Use a stable tray or support if your household practice permits it. Children can join the aarti and flowers without being responsible for the weight. Do not let anyone walk backwards on stairs while filming. Keep phones away until the idol is safely with the adults carrying it." },
      { p: "The Central Pollution Control Board guidelines hosted by the Maharashtra Pollution Control Board call for natural, biodegradable materials and separate collection of flowers and decorative waste. They encourage artificial immersion arrangements and controlled disposal rather than allowing festival waste to enter natural water bodies. These are not aesthetic suggestions. They are meant to reduce pollution and make clean-up possible." },
      { h: "Public immersion: what to check before leaving" },
      { p: "An authorised immersion point is not interchangeable with any beach, riverbank or lake. Cities designate sites, create artificial ponds and publish rules about access, vehicle movement and idol size. A notice from one city does not apply in another." },
      { p: "Before leaving, check:" },
      { ul: ["the current municipal list of immersion points;","whether the site accepts your idol material and size;","the time window and entry route;","police traffic diversions;","rain, high-tide or water-safety warnings;","whether nirmalya is collected separately;","who will carry the idol and who will manage children or older relatives;","the return route once the procession has ended."] },
      { p: "Do not enter deep water. Follow lifeguards, police and volunteers at the site. A traditional farewell does not require a family member to take an avoidable risk." },
      { photo: "ecoFriendlyGanesh" },
      { h: "Can Ganesh Visarjan be done at home?" },
      { p: "A small natural-clay idol can be suitable for home immersion if your family tradition permits it, the material actually dissolves in water, and local rules allow the method. \"Eco-friendly\" should not be assumed from colour or a seller's unverified label. Plaster of Paris does not behave like shadu or natural clay. Paints and decorations also matter." },
      { p: "Use a container that is stable, sufficiently large and away from electrical sockets. Put it where splashes will not create a slippery path. Keep children supervised. Remove all cloth, plastic and metal before immersion. Add water gently and give the clay time to soften; forcing or breaking the idol is not the point." },
      { p: "The remaining water and clay should be handled according to local civic guidance. Some households return plain clay to soil or a planter, but that is only sensible when the materials are confirmed natural and non-toxic. Do not pour paint, glitter or unknown material into a garden and call it sustainable." },
      { p: "For a large, painted, supported or non-clay idol, use the authorised collection or immersion system. A bathtub is not a moral shortcut for an idol unsuited to home immersion." },
      { h: "What happens to flowers, coconut and naivedya" },
      { p: "Separate nirmalya before the idol goes into water. Many civic sites provide bins or collection points for flowers and organic offerings. Plastic packets, foil, ribbons and synthetic fabric go into the appropriate dry-waste stream, not with flowers and not into water." },
      { p: "Food offered as naivedya becomes prasad. Share edible food while it is safe rather than treating it as immersion material. Coconut, fruit and sweets do not need to be thrown into a lake. If a local ritual has a specific practice, ask how it is done without adding plastic packaging to the water." },
      { p: "This separation is one of the most useful things a family can organise in advance: one container for reusable puja objects, one for organic offerings, and one for ordinary dry waste." },
      { h: "The farewell at home and on the road" },
      { p: "The familiar chant, \"Ganpati Bappa Morya, pudhchya varshi lavkar ya,\" asks Bappa to return soon next year. The procession can be loud and public, or a small family can leave quietly after aarti. Neither scale proves greater devotion." },
      { p: "If older relatives cannot join the route, complete aarti with them before leaving. A live video can include someone in another city, but assign the phone to a person who is not carrying the idol. If a child is upset, explain before the farewell that the clay form is immersed and the welcome returns next year. Avoid dismissing the feeling. Visarjan is built around affection and impermanence; sadness belongs in it." },
      { p: "A small gift sent to relatives after visarjan can mark the ending: money for prasad, a meal together, or something for the children who helped with the puja. Say what the gift is for. A message connected to the household's real celebration has more warmth than a copied festival slogan." },
      { h: "If the planned visarjan day changes" },
      { p: "First separate a manageable inconvenience from a genuine constraint. Guests being late is not the same as flooding, illness or an official closure. If the constraint is real, call the family priest or knowledgeable elder. Tell them what sankalp was made, when installation happened, what has changed and which safe dates or arrangements are available." },
      { p: "Do not search for a line that promises \"no dosh\" and stop there. Nor should a family take a safety risk because a viral post threatens bad luck. The ritual question and the practical safety question both deserve a real answer." },
      { p: "If the immersion site alone changes, the family may still be able to keep the same day using a civic artificial pond or collection point. If the day must change, get advice specific to the household's installation." },
      { h: "A checklist for the final morning" },
      { p: "For the puja" },
      { ul: ["lamp, wick and oil or ghee;","flowers and durva if used by your family;","final naivedya and drinking water;","aarti plate;","the prayer or mantra sequence your household follows."] },
      { p: "For carrying" },
      { ul: ["enough adults for the actual weight;","a clear, dry route;","stable support where appropriate;","water and footwear for people in the procession;","a plan for children and older family members."] },
      { p: "For the immersion point" },
      { ul: ["verified address and time;","current traffic route;","material and size acceptance;","containers for nirmalya and dry waste;","no loose plastic, lights or batteries on the idol."] },
      { p: "For after" },
      { ul: ["safe return transport;","a place for reusable puja items;","prasad for the family;","cleaning the chowki and room after everyone returns."] },
      { faq: [
        { q: "Is Ganesh Visarjan on 24 or 25 September in 2026?", a: "The main Anant Chaturdashi visarjan is on Friday, 25 September 2026. Panchang tithi boundaries may begin on the previous civil date, which is why search snippets can show two dates. The observance date is 25 September; use a location-specific panchang for time intervals." },
        { q: "When is five-day Ganpati Visarjan in 2026?", a: "It is Friday, 18 September 2026 for a Ganpati installed on 14 September. Follow the duration chosen by your household at sthapana." },
        { q: "When is seven-day Ganpati Visarjan in 2026?", a: "It is Sunday, 20 September 2026 for a Ganpati installed on 14 September." },
        { q: "Does one-and-a-half-day Ganpati mean exactly 36 hours?", a: "No. In ordinary practice it means installation on Chaturthi and immersion on the following day after puja and Uttar Puja. It is not normally timed to the exact minute at which 36 hours ends." },
        { q: "Is it compulsory to keep Ganpati for ten days?", a: "No. Households commonly choose one-and-a-half, three, five, seven days or Anant Chaturdashi according to family tradition and the sankalp taken at installation." },
        { q: "What is Uttar Puja?", a: "It is the concluding worship before the festival idol is moved for immersion. The family offers a final aarti and prayer, asks forgiveness for errors and bids Ganpati farewell. Exact rites differ by household." },
        { q: "Can a PoP idol be immersed at home?", a: "Home immersion is best limited to an appropriate small natural-clay idol when local rules and family practice allow it. Plaster of Paris does not dissolve like natural clay and should go through the authorised civic system." },
        { q: "Should flowers and decorations be immersed with the idol?", a: "No. Remove plastic, cloth, metal, lights and decorations. Separate flowers and organic offerings for the collection system provided locally. Follow the site's instructions." },
        { q: "Can we change the visarjan day after sthapana?", a: "The duration is ideally decided at sthapana. If illness, weather, an official closure or another serious constraint makes it impossible, ask the priest or elder who knows the family's sankalp rather than relying on a generic online answer." },
        { q: "What do we say during visarjan?", a: "Many Maharashtrian families chant \"Ganpati Bappa Morya, pudhchya varshi lavkar ya,\" asking Bappa to return soon next year. Use the aarti and prayers your household knows." },
      ] },
      { h: "The Anant Chaturdashi day is longer than the immersion moment" },
      { p: "The final Friday is not only a deadline for taking idols to water. In many cities it is a day of processions, public darshan, volunteer work, traffic control and long waits. Large sarvajanik mandals may leave their pandals hours before reaching the immersion point. A family attending a public procession should not plan the day as if it were a ten-minute visit." },
      { p: "Carry water, keep children identifiable, agree on a meeting point and avoid bringing valuables into a dense crowd. Mobile networks can slow when many people gather. If family members have limited mobility, choose a viewing point with an easy exit rather than the most famous bottleneck. Follow police barricades even when a map suggests a shorter route." },
      { p: "Homes doing a small immersion on the same day may prefer an artificial pond away from the largest routes. Check whether appointments, tokens or ward-specific sites are being used. Do not assume last year's arrangement has been repeated. Civic systems can add or move ponds based on construction, rainfall and local capacity." },
      { h: "If you did not bring Ganpati home" },
      { p: "Visarjan guidance is still useful for visitors and neighbours. Ask the host what time their final aarti begins, whether they want help carrying items, and whether the immersion is a family-only ritual. Do not arrive just before departure with a large gift that someone must store or carry." },
      { p: "A practical contribution can be simple: bring food for after the family returns, stay with an older relative who cannot walk the route, help separate flowers from plastic, or arrange the return ride. If you are joining a public mandal, obey its volunteer queue rather than trying to move close to the idol for a photo." },
      { p: "There is no need to immerse a token object of your own to participate. Darshan, aarti, service and a thoughtful farewell message are complete forms of participation for someone who did not take a household sankalp." },
      { h: "What \"eco-friendly\" should mean in practice" },
      { p: "The label is often used loosely. A natural-looking brown idol may still contain chemical paint, glue, internal supports or synthetic finishing material. Ask the maker what the base is, how it is painted and whether it is intended to dissolve. If those answers are vague, use the authorised civic system rather than testing the claim in a household container." },
      { p: "Size matters too. Natural clay is heavy. A tall idol can be physically unsafe to immerse at home even if every material is biodegradable. Eco-friendly planning starts before purchase: choose a size the household can carry, decorate without thermocol or single-use plastic, reuse fabric and lights, and know where every material will go after the festival." },
      { p: "The CPCB framework also makes clear why post-immersion collection matters. Pollution is not solved merely by moving an idol from natural water to an artificial tank. Flowers, clay residue and other material must then be collected and treated. Use the system provided and do not remove barriers or enter tanks after the immersion." },
      { h: "The home after Bappa leaves" },
      { p: "Returning to an empty chowki can feel abrupt. Clear the space carefully rather than rushing to make the room look normal. Put reusable vessels, cloth and lights away only after they are dry. Compost or hand over flowers where a suitable system exists. Share the remaining safe prasad." },
      { p: "Some families keep a small amount of clean natural clay after home immersion and return it to a plant. Others hand everything to a civic service. Neither should be copied without knowing the idol material. Follow the practice your family and local guidance support." },
      { p: "Children may ask where Bappa went. A simple answer is that the festival form returns to nature and Bappa is welcomed again next year. The explanation does not require a frightening rule or a promise that grief should vanish. The farewell is meaningful because the household cared for the visit." },
      { p: "Before packing away the list of purchases, note what was actually used. Which decoration could be reused? Was the idol too heavy for the route? Did the family have enough help? Did the chosen immersion point work? Those notes make next year's welcome calmer and reduce waste more effectively than an inspirational poster." },
    ],
  },
  {
    slug: "gauri-pujan-day-2026",
    title: "Gauri Pujan 2026: Friday's puja, maha naivedya and haldi-kumkum",
    date: "2026-09-17",
    updated: "17 September 2026",
    tag: "Festivals",
    art: "gauriPujan",
    excerpt:
      "Gauri Pujan is Friday, 18 September 2026. A careful guide to the puja sequence, muhurat, maha naivedya, haldi-kumkum and what guests should wear or bring.",
    body: [
      {
        p: "Gauri Pujan is Friday, 18 September 2026. It is the middle and main worship day of Maharashtra's three-day Jyeshtha Gauri celebration: Avahan was Thursday, 17 September, and Visarjan is Saturday, 19 September.",
      },
      {
        p: "Friday is the day for dressing and decorating Gauri, the household puja and aarti, the maha naivedya, and in many homes a haldi-kumkum gathering. It is not a single Maharashtra-wide script. The form of Gauri, exact puja, food and guest customs belong to the family's region and inherited practice.",
      },
      { h: "The date and muhurat answer" },
      {
        p: "Times Now Marathi and Lokmat Times both place the main Gauri Pujan on Friday, 18 September 2026, under Jyeshtha nakshatra. They place Avahan on 17 September and Visarjan on 19 September.",
      },
      {
        p: "Do not copy a time without copying its location and panchang. Lokmat Times says exact muhurats vary by local panchang and family tradition. Times Now Marathi describes the puja as taking place through the day and the maha naivedya at midday, but that is guidance, not permission to override the time your household follows.",
      },
      {
        p: "If timing matters strictly in your home, check the city-specific panchang or ask the priest or elder who conducts the family puja.",
      },
      { h: "Before the puja" },
      {
        p: "Gauri has already been welcomed and installed on Avahan. Friday's preparation begins with the household's own form of Gauri, not with an online shopping list.",
      },
      {
        p: "Lokmat Times records that families may use idols, masks, metal objects, pots or other symbolic forms. Jio Institute's account of Versova Koliwada documents a single Jyeshtha Gauri with a metal face mask, while parts of interior Maharashtra worship Jyeshtha and Kanishtha together. Prepare and dress what your family actually keeps.",
      },
      {
        p: "Common materials reported by Lokmat Times include haldi, kumkum, akshata, flowers, fruit, coconut, betel leaves, betel nuts, a lamp and the family's naivedya. A saree, jewellery and flowers are commonly used to adorn Gauri. None of that makes a newly bought elaborate setup more correct than the form handed down in a family.",
      },
      { h: "A careful puja sequence" },
      {
        festivalArt: "gauriThali",
        caption:
          "The pujan day gathers the household puja, aarti and maha naivedya into one careful sequence.",
      },
      {
        p: "This is a map of the day, not a substitute for a family vidhi or priest.",
      },
      {
        ul: [
          "Clean and prepare Gauri's place and the puja materials.",
          "Dress and decorate Gauri according to the household practice.",
          "Arrange haldi, kumkum, akshata, flowers, fruit, coconut and the items your family uses.",
          "Perform the family's puja and aarti.",
          "Offer the maha naivedya before it becomes prasad for the family and guests.",
          "Hold the haldi-kumkum or visiting window if the household observes one.",
        ],
      },
      {
        p: "Maharashtra Tourism describes flowers, turmeric, vermillion and traditional foods such as puran poli and modak among the festival's offerings. Lokmat Times records the same broad shape but repeatedly notes that details vary. That variation is not a loophole in the ritual. It is the ritual's actual form across Maharashtra.",
      },
      { h: "Maha naivedya without the fake universal menu" },
      {
        photo: "maharashtrianPuranPoli",
        caption:
          "Puran poli is widely associated with the maha naivedya; the full menu still belongs to the household.",
      },
      {
        p: "Puran poli is strongly associated with the day. Rice, dal, vegetables, bhakri and sweets also appear across current regional accounts. Some households prepare a spread built around sixteen vegetables or sixteen food items. Jio Institute records sixteen special foods, including modak and kheer, in the Versova Koli practice it documents.",
      },
      {
        p: "But sixteen is not a minimum order for the whole state. Lokmat Times says the number and dishes differ by household and region. Reporting from Maharashtra also records sharply different community menus. A list can tell you what another home serves; it cannot tell you what your grandmother promised Gauri.",
      },
      {
        p: "The practical rule is simple: if you are cooking for your own puja, use your household list. If you are contributing food to somebody else's, ask what is needed. If you are sending a gift, do not label it “for naivedya” unless the host has confirmed it belongs there.",
      },
      { h: "Onion, garlic and other food rules" },
      {
        p: "Jio Institute describes the Versova naivedya it documented as vegetarian and prepared without onion or garlic. That is reliable evidence for that practice, not a licence to erase every other Maharashtrian practice.",
      },
      {
        p: "Keep the offering kitchen separate from assumptions. Confirm fasting ingredients, onion and garlic, and whether outside food is acceptable before cooking or ordering. Fruit or a sealed box of suitable mithai is often easier for the household to place outside the ritual meal if it does not fit.",
      },
      { h: "Haldi-kumkum: what the invitation needs to say" },
      {
        photo: "gauriHaldiKumkum",
        caption: "Applying haldi and kumkum at a Maharashtrian gathering.",
      },
      {
        p: "Many households invite married women for haldi-kumkum on the pujan day. Haldi and kumkum are exchanged, and hosts may offer a small gift. Songs, jhimma and phugdi appear in some accounts. These are household and community customs, not a standard event package.",
      },
      {
        p: "A good invitation is practical. It should include Friday's date, the visiting window, the full address, and whether guests are coming for aarti, haldi-kumkum, prasad or a meal. “Come anytime” is generous until everyone arrives while the naivedya is being plated.",
      },
      {
        p: "Guests should confirm the time and whether the invitation includes food. Arrive within the window. Receive what the host offers without comparing it to another home's ceremony.",
      },
      { h: "What to wear" },
      {
        p: "Traditional festive clothing is common. The sources checked for this guide do not establish a compulsory colour, saree or jewellery rule for every guest in Maharashtra.",
      },
      {
        p: "Wear clean festive clothes in which you can sit comfortably and eat. If the host has planned a colour or the family follows a dress practice, the invitation or a direct question should settle it. A retailer's “must-wear” article does not.",
      },
      { h: "What to bring" },
      { p: "There is no fixed price of admission to Gauri Pujan." },
      {
        ul: [
          "Good mithai or fruit is useful if the host has not asked guests to bring nothing.",
          "Flowers, coconut or puja materials can help only when requested; otherwise the house may already have enough.",
          "A small host gift is fine, but something consumable creates less work than another decorative object.",
          "If you are close to the family, help with serving, clearing or cleanup may be the most useful gift in the room.",
        ],
      },
      {
        p: "Do not assume cash is required. Haldi-kumkum return gifts belong to the host's custom, not the guest's bill.",
      },
      { h: "If you are in another city" },
      {
        p: "Call or message during the visiting window. Name the occasion and the family rather than sending a generic “Happy Gauri” image.",
      },
      {
        p: "If your family already sends shagun for the day, a digital lifafa keeps the amount and note together across cities. It is a delivery method, not part of the puja. Let the relationship and existing family habit decide the amount. If that home does not exchange money for Gauri Pujan, send sweets locally or simply show up on video for the aarti.",
      },
      { h: "What happens after Friday" },
      {
        related: {
          href: "/blog/gauri-pujan-2026-maharashtra",
          label: "Read the three-day Gauri guide: Avahan, Pujan and Visarjan",
        },
      },
      {
        p: "Gauri Visarjan is Saturday, 19 September 2026. The farewell depends on the form the household keeps. Clay forms may be immersed, while reusable masks or metal forms may be taken out ceremonially and stored for the next year.",
      },
      {
        p: "For Avahan, all three 2026 dates and the regional forms of Gauri, read the companion guide: **Gauri Pujan 2026 in Maharashtra: the three days, the naivedya, and what to send**.",
      },
      {
        faq: [
          {
            q: "Is Gauri Pujan on 18 September 2026?",
            a: "Yes. The main Jyeshtha Gauri Pujan is Friday, 18 September 2026. Avahan is 17 September and Visarjan is 19 September.",
          },
          {
            q: "What time is Gauri Pujan in 2026?",
            a: "There is no responsible single national time. The date is Friday, 18 September. Exact timing depends on the local panchang and family practice. Times Now Marathi describes puja through the day and maha naivedya at midday; a strict household should use its city panchang or priest's time.",
          },
          {
            q: "What is the basic Gauri Pujan vidhi?",
            a: "Dress and decorate the household's form of Gauri, arrange the family's puja materials, perform puja and aarti, and offer the maha naivedya. The mantras, sequence and form vary, so use the family vidhi or priest for ritual instructions.",
          },
          {
            q: "What should be included in Gauri naivedya?",
            a: "Puran poli, rice, dal, vegetables, bhakri and sweets are widely reported. Some homes prepare sixteen items. The exact menu differs by family and region; use the household list rather than treating a web page as universal.",
          },
          {
            q: "Can unmarried women or girls join the puja?",
            a: "The sources checked describe women as central to the festival but do not establish a Maharashtra-wide ban on unmarried women or girls taking part. A haldi-kumkum invitation may specifically be for married women. For who leads the family ritual, ask the elder or priest responsible for that household's tradition.",
          },
          {
            q: "What should a guest wear?",
            a: "Traditional festive clothing is common, but no reliable source checked here establishes one compulsory colour or saree for all guests. Follow the host's invitation and wear clean, comfortable festive clothes.",
          },
          {
            q: "Should a guest take a gift?",
            a: "A gift is not an entry fee. Mithai or fruit is practical if the host has not said “bring nothing.” Ask before bringing something intended for the puja itself. Cash depends on the relationship and family habit, not a universal amount.",
          },
          {
            q: "Is haldi-kumkum only on Gauri Pujan day?",
            a: "In many Gauri-celebrating homes, the gathering is held on the main pujan day, Friday in 2026. The exact hour and guest custom vary, so use the host's invitation.",
          },
        ],
      },
    ],
  },
  {
    slug: "gauri-pujan-2026-maharashtra",
    title:
      "Gauri Pujan 2026 in Maharashtra: the three days, the naivedya, and what to send",
    date: "2026-09-17",
    updated: "17 September 2026",
    tag: "Festivals",
    art: "gauri",
    excerpt:
      "Gauri Avahan is 17 September, the main pujan is 18 September, and visarjan is 19 September. The sequence, the food, and what to take when you visit.",
    body: [
      {
        p: "Gauri arrived in Maharashtrian homes on Thursday, 17 September 2026. The main pujan is Friday, 18 September, and Gauri Visarjan is Saturday, 19 September.",
      },
      {
        p: "That sequence is the useful answer. The first day is welcome, the second is worship and the large food offering, and the third is farewell. The exact form of Gauri, the menu and the departure ritual differ by household and community. If you are visiting somebody else's home, their family practice is the authority.",
      },
      { h: "The 2026 dates" },
      {
        table: {
          head: ["Day", "Date", "What happens"],
          rows: [
            [
              "Gauri Avahan",
              "Thursday, 17 September",
              "Gauri is welcomed and installed",
            ],
            [
              "Gauri Pujan",
              "Friday, 18 September",
              "The main puja and maha naivedya",
            ],
            [
              "Gauri Visarjan",
              "Saturday, 19 September",
              "The farewell and immersion, where that is the family's practice",
            ],
          ],
        },
      },
      {
        p: "The dates are reported by Times Now Marathi and Lokmat Times. They link Avahan, Pujan and Visarjan with the Anuradha, Jyeshtha and Moola nakshatras respectively. Exact muhurats depend on the local panchang and family tradition, so there is no honest single time for all of Maharashtra.",
      },
      {
        photo: "gauriPujan",
        caption: "Gauri masks dressed for the household celebration.",
      },
      { h: "Why the festival has three days" },
      {
        p: "Maharashtra Tourism describes Gauri Aagman as part of Ganeshotsav in Maharashtra: Gauri, understood as a form of Parvati, is welcomed into homes and communities. In many households the visit has the feeling of receiving a revered woman of the family with food, decoration and attention.",
      },
      {
        p: "The form is not identical across the state. Lokmat Times notes that some homes use idols or masks, while others use metal objects, pots or other inherited forms. Jio Institute's record of Versova Koliwada documents a single Jyeshtha Gauri represented by a metal face mask, while parts of interior Maharashtra worship Jyeshtha and Kanishtha together. That is why a universal checklist can become wrong very quickly.",
      },
      { h: "Day one: Avahan is the welcome" },
      {
        p: "The house and puja place are prepared, and Gauri is brought in and seated. Rangoli, flowers and lamps are common. Some families draw small footprints from the entrance towards Gauri's place. The goddess may be dressed in a saree, jewellery and flowers before the first aarti.",
      },
      {
        p: "The important distinction is that this is the arrival, not the main feast. Times Now Marathi describes a simpler first-night offering in the practice it records. Other families will have their own inherited menu.",
      },
      { h: "Day two: Pujan and maha naivedya" },
      {
        p: "Friday is the main worship. Common puja materials listed by Lokmat Times include haldi, kumkum, akshata, flowers, fruit, coconut, betel leaves and betel nuts. Gauri is dressed and decorated, the puja and aarti are performed, and the maha naivedya is offered.",
      },
      {
        p: "What belongs on that plate is where internet lists become overconfident. Puran poli, rice, dal, vegetables, bhakri and sweets are widely reported. Some households prepare sixteen vegetables and a much larger spread. Jio Institute documents sixteen special food items, including modak and kheer, in Versova Koli practice. Lokmat Times explicitly says the number and dishes are not the same in every household.",
      },
      {
        p: "So “sixteen” is a tradition, not a minimum order. Do not turn somebody else's abundant family menu into a test your own home has failed.",
      },
      {
        photo: "maharashtrianPuranPoli",
        caption:
          "Puran poli is widely associated with the maha naivedya, although the complete menu belongs to each household.",
      },
      { h: "Haldi-kumkum is also a visit" },
      {
        p: "Many homes invite married women for haldi-kumkum on the pujan day. Guests receive haldi and kumkum, and there may be songs, jhimma, phugdi and small gifts. These gatherings make the festival social as well as devotional, but the guest list and customs vary.",
      },
      {
        p: "If you have been invited, ask for the time rather than assuming it runs all day. A useful invitation includes the date, the visiting window, the address and whether the host expects guests for aarti, haldi-kumkum or a meal.",
      },
      {
        photo: "gauriHaldiKumkum",
        caption: "Applying haldi and kumkum at a Maharashtrian gathering.",
      },
      { h: "Day three: Visarjan is the farewell" },
      {
        p: "Saturday is the final puja and farewell. What happens next depends on the form kept by the family. A clay idol may be immersed. A reusable metal mask may be ceremonially taken out and then stored for the next year. Jio Institute records the Versova Koli practice of dipping the removable face mask at sea and returning it home; Lokmat Times also warns, by implication, against treating one form as universal.",
      },
      {
        p: "Follow the household's practice. Do not improvise an immersion method because a generic article called it compulsory.",
      },
      { h: "What to take when you visit" },
      {
        p: "There is no fixed cash obligation for visiting Gauri. The safest gift is one the host can use in the celebration rather than another object to store.",
      },
      {
        ul: [
          "Good mithai or fruit is useful and close to the food-and-visiting shape of the festival.",
          "Coconut, flowers or other puja items can work, but ask first; the house may already have enough.",
          "For haldi-kumkum, follow the host's custom on small return gifts rather than inventing a rule from a shopping list.",
          "If the family is close, offer help with food, serving or cleanup. A three-day household festival creates work as well as beauty.",
        ],
      },
      {
        p: "Do not arrive with onions, garlic or a random “festive hamper” and assume it belongs in the naivedya. Jio Institute's Versova record describes the sacred food there as vegetarian and prepared without onion or garlic, but kitchens and vows differ. A gift for the family and an offering for Gauri are not automatically the same thing.",
      },
      { h: "If you cannot be there" },
      {
        p: "Send the message first. Name the occasion and the person: “For Gauri Pujan at home - sorry I cannot make the haldi-kumkum.” That does more work than a generic festival forward.",
      },
      {
        p: "If your family normally gives money, a digital lifafa is a practical way to keep the envelope and message together when you are in another city. It is a modern convenience, not a required part of Gauri Pujan. The amount should come from your relationship and your family's habit, not an invented internet tariff.",
      },
      {
        p: "If money would feel odd in that home, send sweets locally or simply call during the visiting window. Participation is not measured by whether a payment link was involved.",
      },
      { h: "The short version" },
      {
        p: "Avahan on Thursday is the welcome. Pujan on Friday is the main worship and naivedya. Visarjan on Saturday is the farewell. The broad rhythm is shared; the deity's form, the food and the exact ritual belong to the family's tradition.",
      },
      {
        p: "Take something consumable, ask before treating it as an offering, and do not confuse a modern lifafa with a religious requirement.",
      },
      {
        faq: [
          {
            q: "When is Gauri Pujan in 2026?",
            a: "Gauri Avahan is Thursday, 17 September 2026; the main Gauri Pujan is Friday, 18 September; and Gauri Visarjan is Saturday, 19 September. Times Now Marathi and Lokmat Times report the same three-day sequence. Exact ritual times depend on the local panchang and family practice.",
          },
          {
            q: "What is Gauri Pujan in Maharashtra?",
            a: "It is a household festival during Ganeshotsav in which Gauri is welcomed, worshipped and given a farewell over three days. Maharashtra Tourism describes Gauri as a form of Parvati associated with prosperity, harmony and family well-being. The form of the deity and the rites vary across Maharashtra.",
          },
          {
            q: "Who keeps Gauri at home?",
            a: "Families that inherit or choose to follow the household tradition keep Gauri. There is no single Maharashtra-wide setup: Lokmat Times records idols, masks, pots and other forms, while Jio Institute documents a single metal face mask in Versova Koliwada and notes paired Gauris in parts of interior Maharashtra. Follow the practice of the household teaching you.",
          },
          {
            q: "Can unmarried women or girls take part in Gauri Pujan?",
            a: "The reliable sources used for this guide describe women as central to the worship but do not state a Maharashtra-wide ban on unmarried women or girls taking part. Haldi-kumkum invitations may be specifically for married women in some homes; that is not evidence that girls cannot help, pray or attend. For leading a family ritual, ask the elder or priest whose tradition the household follows.",
          },
          {
            q: "What should I wear to Gauri Pujan or haldi-kumkum?",
            a: "Traditional clothing is common, but the sources do not establish a compulsory colour, saree or dress code. Wear clean festive clothes you can sit and eat in. If the host has planned a colour or expects a particular form of dress, the invitation should say so; otherwise ask rather than trusting a shopping-page rule.",
          },
          {
            q: "What food is offered as Gauri naivedya?",
            a: "Puran poli, rice, dal, vegetables, bhakri and sweets are widely reported. Some families prepare sixteen items or vegetables; Jio Institute records modak and kheer among sixteen offerings in Versova Koli practice. Lokmat Times says directly that the number and dishes differ by family and region, so an online list should not override the household menu.",
          },
          {
            q: "Must Gauri naivedya be made without onion and garlic?",
            a: "Jio Institute records a vegetarian naivedya without onion and garlic in the Versova practice it documents. That cannot be turned into a rule for every Maharashtrian household: other reporting shows regional menus differ sharply. If food is being offered rather than merely gifted to the family, check the household's rule before buying or cooking it.",
          },
          {
            q: "What is the etiquette when invited for haldi-kumkum?",
            a: "Confirm the visiting window and whether the invitation includes aarti or a meal. A small consumable gift is safer than assuming a cash amount or bringing another object for the host to store. The exchange of haldi and kumkum and any return gift follow the host's custom; there is no useful universal tariff.",
          },
        ],
      },
    ],
  },
  {
    slug: "ganesh-chaturthi-gifting",
    title: "Ganesh Chaturthi: what to give, and why nobody writes it down",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "modak",
    excerpt:
      "Ganesh Chaturthi 2026 is Monday 14 September. Every page that ranks for it tells you the muhurat and stops. This one covers the half about money.",
    body: [
      {
        p: "Search for Ganesh Chaturthi and you will get the same page nine times. Date, muhurat, puja vidhi, visarjan schedule. All of it correct, none of it any use on the afternoon you are standing in somebody's front room with a envelope in your bag and no idea whether ₹500 is generous or insulting.",
      },
      {
        p: "Worth knowing who is writing those pages, incidentally. On the day I checked, the results for this query were a lending app, two companies selling puja services, and a shop selling puja items. Nothing wrong with any of that, but a page whose job is to sell you a pandit is not going to spend a paragraph telling you the etiquette of handing over cash.",
      },
      {
        p: "So: the dates, then the part about money that nobody puts in writing.",
      },

      { h: "Ganesh Chaturthi 2026" },
      {
        table: {
          head: ["", "2026", "Note"],
          rows: [
            [
              "Ganesh Chaturthi",
              "Monday 14 September",
              "Sthapana, the installation",
            ],
            [
              "Madhyahna muhurat",
              "11:02 to 13:31",
              "The window for installing the idol",
            ],
            [
              "Anant Chaturdashi",
              "Friday 25 September",
              "Visarjan, the immersion",
            ],
          ],
        },
      },
      {
        note: "Muhurat timings are calculated from local sunrise and shift by city. The window above is the widely published figure; check a panchang for your own city if your family is strict about it. Dates checked 25 August 2026.",
      },
      {
        p: "The ten days between those two dates are the festival. Households keep Ganpati for a day and a half, three days, five, seven or the full ten, and which one is a family tradition rather than a choice. This matters for gifting, because it decides when you visit.",
      },

      { h: "The shape of Ganesh Chaturthi gifting" },
      {
        p: "This festival is not built on cash the way Diwali and Rakhi are, and if you arrive expecting an envelope exchange you will be the only one holding one.",
      },
      {
        p: "It runs on prasad and on visiting. Somebody installs Ganpati at home, everybody else comes to see, and what changes hands is food. You arrive with something, you leave with modak. The giving is horizontal and it repeats: you will visit four houses over ten days and be fed at all of them.",
      },
      { h3: "So when does money change hands" },
      {
        ul: [
          "To children in the house you are visiting. Small, ₹101 or ₹251, pressed into a hand, not announced.",
          "To the household help, the cook, the person who has been running that kitchen for ten days of visitors. This one is real and it is frequently forgotten.",
          "To the sarvajanik mandal, the public pandal on your street, as a donation. This is the largest sum most people give at Ganesh Chaturthi and it is not shagun at all.",
          "To a family installing Ganpati for the first time, which is treated a little like a griha pravesh.",
        ],
      },
      {
        p: "What you do not do is hand the hosts an envelope for having invited you. It is not a wedding. The visit is the gift in both directions.",
      },

      { h: "The pandal donation, which is its own thing" },
      {
        p: "If your street or building has a sarvajanik Ganpati, somebody will come round with a receipt book. Ranges vary enormously by city and by how elaborate the mandal is, but as a rough map for a residential building or lane collection: ₹501 to ₹2,100 per household is common, and larger mandals in Mumbai and Pune run considerably higher.",
      },
      {
        p: "Two things worth knowing. Ask for the receipt, always, and keep it: registered mandals issue them and it is the normal, expected thing to do rather than a sign of distrust. And a mandal collection is a donation, not shagun, so the one-rupee rule does not apply. A flat ₹1,000 is perfectly correct here.",
      },

      { h: "Why the odd rupee, when it does apply" },
      {
        p: "Anywhere you are giving to a person rather than a collection, the total ends in one. ₹101, ₹251 and ₹501 carry it in the number. ₹1,100 and ₹2,100 get it from the coin on the envelope.",
      },
      {
        p: "The usual explanation is good luck, which is true but incomplete. A number ending in one cannot be halved. ₹500 splits into two ₹250s and the account closes; ₹501 does not, so it stays open, which is the point of giving in the first place.",
      },
      {
        p: "The other half of the reason is the one people are more careful about: even, round amounts are the convention for condolence money. Handing a round ₹500 to a child at a happy occasion puts your envelope in the wrong category. Nobody will say anything. Somebody will notice.",
      },

      { h: "What to actually take when you visit" },
      {
        ul: [
          "Modak, if you can get good ones. Ukadiche modak, the steamed kind, are the correct offering and they are also the hardest to carry, so fried ones are a completely normal substitute.",
          "Any mithai, if not. Nobody minds.",
          "Flowers, and durva grass if you can get it. Durva is specifically Ganesha's and a bunch costs almost nothing.",
          "Fruit, which is what you take when the house has already been sent nine boxes of mithai and everyone knows it.",
        ],
      },
      {
        p: "One thing not to take: anything in a plastic box that the household will have to store for ten days while forty people visit. Their kitchen is already full.",
      },

      { h: "If you cannot visit" },
      {
        p: "The visiting is most of the festival, and being in another city means missing the actual thing rather than a formality. There is no substitute and it is worth saying so plainly.",
      },
      {
        p: "What people do instead is send money for the mandal donation so their name is still on the lane's list, and send something to the household that is hosting. If you are sending money, send it before the sthapana rather than during the ten days, and say what it is for. Cash arriving with no frame is just cash. Cash arriving as “this is my share of the mandal, put my name down” is participation.",
      },

      { h: "So what should you give?" },
      {
        p: "Visiting a house with Ganpati: take modak or flowers, give ₹101 to ₹251 to the children, and remember whoever has been cooking for ten days. Your building's mandal: ₹501 to ₹2,100, take the receipt, and a round number is fine there. A family installing for the first time: treat it like a housewarming and give ₹1,100.",
      },
      {
        p: "And if the whole thing is somebody else's family and you genuinely do not know: ask them. “What do people usually do?” is not a failure of preparation at a festival built entirely on visiting each other's houses. It is the correct question, and the answer is almost always “just come”.",
      },
    ],
  },
  {
    slug: "married-into-an-indian-family",
    title:
      "Married into an Indian family: what to give, what to wear, and what nobody will tell you",
    date: "2026-08-31",
    updated: "31 August 2026",
    tag: "How it works",
    excerpt:
      "You are the one person in the room who was not raised on this. A festival-by-festival guide to gifting and dressing, written for someone who keeps being told not to worry about it.",
    body: [
      {
        p: "The thing nobody warns you about is not the ceremony. It is the three months afterwards, when a festival turns up roughly every fortnight and each one has a thing you are supposed to bring, wear or say, and everybody assumes you already know because you have been here a year now.",
      },
      {
        p: "And when you ask, you get told not to worry about it. Which is kind, and useless, because the whole reason you asked is that you have noticed everybody else is doing something specific.",
      },
      {
        p: "So this is the specific version. Written for the person marrying in, or married in, who wants to get it right rather than be reassured.",
      },

      { h: "The one rule that fixes half of it" },
      {
        p: "Ask which family, and which region. Not what do Indians do.",
      },
      {
        p: "Almost every confident piece of advice about Indian custom online is one region's practice sold as national. Never wear white is a north Indian rule, and in Kerala the bridal saree is cream with a gold border, in Bengal it is red and white, and a Parsi bride wears white outright. Never give four of something is not Indian at all, it is Chinese, and it has leaked into etiquette listicles.",
      },
      {
        p: "Your in-laws are one household in one community in one region. What they do is what is correct for you, and asking is not a failure. It is the only reliable method.",
      },

      { h: "Money" },
      {
        p: "Cash is not impersonal here. That is the single biggest adjustment for anyone from a Western gifting culture, where money says I could not be bothered to think. In India money is the useful, expected, generous thing, and a wrapped present in its place reads as if you did not know the form.",
      },
      {
        p: "The total ends in a one. Small amounts carry it themselves: ₹101, ₹251, ₹501. Bigger ones do not, and this is the part that trips people up. You give ₹1,100 or ₹2,100 or ₹5,100, and the one-rupee coin already stuck to the front of the envelope makes the total ₹1,101. Buy the envelope with the coin on it and the arithmetic happens for you.",
      },
      {
        p: "Even totals are condolence money. ₹500 flat, ₹1,000 flat, are what you take to a house in mourning, and in that case you also leave the coin off. Not because even is unlucky, but because even reads as complete, and completeness is right for a death and wrong for everything else.",
      },
      {
        note: "If you take one thing from this page: at a wedding, add the rupee. At a funeral, take it off.",
      },

      { h: "Festival by festival" },
      { h3: "Diwali" },
      {
        p: "The big one. Mithai or dry fruit to anyone whose house you enter, and cash to children and to anyone who works for the household. Kaju katli is the safe box and a respectable one is ₹500 to ₹1,600.",
      },
      {
        p: "Wear colour. Anything jewel-toned, and this is the festival where dressing up is unambiguously welcome.",
      },
      { h3: "Holi" },
      {
        p: "Bring colours if you are hosting or arriving somewhere colours are happening. Wear white, and this is the one occasion where white is not only fine but the point, because it shows the colour.",
      },
      {
        p: "Wear clothes you will never wear again. People will tell you the colour washes out. It does not, entirely.",
      },
      { h3: "Raksha Bandhan" },
      {
        p: "If you are a man who has married in, you will acquire sisters, and they will tie a thread on your wrist. You give money back. That is the whole transaction and it goes one way: sister ties, brother pays.",
      },
      {
        p: "₹501 or ₹1,100 depending on age and closeness. If you are a woman marrying in, your husband's sisters may tie one on him and you are a bystander, which is normal.",
      },
      { h3: "Eid" },
      {
        p: "Eidi, and specifically crisp new notes, to every child in the house. Get them from a bank a few days early, because everybody wants new notes at the same time and the branch runs out.",
      },
      { h3: "Ganesh Chaturthi" },
      {
        p: "Modak if you can get them. If there is a pandal collection, that is a donation and not shagun, so a flat ₹1,000 is correct and you should take the receipt.",
      },
      { h3: "Onam" },
      {
        p: "Do not bring an envelope. Onam gifting runs on cloth, the Onakkodi, and it goes from elders to younger, given on Thiruvonam morning. An envelope is a north Indian instinct and it will land oddly in a Malayali house.",
      },
      { h3: "A new house, a new baby, a new car, a new job" },
      {
        p: "All of these get shagun, and this is the part that surprises people most. It is not only the big life events. A new car gets a nimbu-mirchi on the bumper and money from whoever comes to see it.",
      },
      {
        p: "Griha pravesh takes plants, kitchen things, or something for the house. A new baby takes money to the baby, which the mother will take, which is correct.",
      },

      { h: "What to wear" },
      {
        p: "You will be told, enthusiastically, to wear Indian clothes. Worth knowing that almost every page saying so sells or rents Indian clothes, and I could not find a single dissenting voice online, which is not the same as there being none.",
      },
      {
        p: "The defensible version, and the one people who have actually been through it give: you were invited. Dressing for the occasion is participation. And it is never required, so a bright Western outfit in a festive cut is entirely correct and nobody will think anything of it.",
      },
      {
        p: "The colours to avoid at a wedding are red, which is the bride's, and white and black in north Indian Hindu contexts. Jewel tones are the no-fail default. And ask about white, because in Kerala, Bengal and Parsi weddings that rule does not hold.",
      },
      { h3: "Haldi, which has a real rule" },
      {
        p: "Wear something you are willing to destroy. Turmeric stains permanently and it goes much further than you expect.",
      },
      {
        p: "Yellow, orange or green, because they hide it. Cotton, because turmeric comes out of cotton better than anything else. Nothing embellished, because you cannot clean it. Flat shoes, because it is outdoors. A yellow kurta with jeans is completely fine for a casual one, which is the most reassuring specific thing I can tell a nervous man.",
      },
      {
        p: "Honest gap: the entire dress-advice industry writes for women. For a non-Indian man at a wedding, sangeet or home puja there is almost nothing published, and what there is comes from shops. Ask your husband or wife what their father is wearing and do that.",
      },

      { h: "Things you may have read that are wrong" },
      {
        ul: [
          "Fruit reads as a hospital visit. It does not. Fruit is a completely normal gift for an ordinary social visit and the hesitation is imported.",
          "Never give sets of four. Not an Indian belief. Where Indian sources are wary of numbers they name eight and seventeen, both ruled by Saturn. Thirteen is auspicious here.",
          "Never wear white. North Indian Hindu, not universal. See Kerala, Bengal, the Parsis.",
          "Always be punctual. Arriving fifteen to thirty minutes after the stated time is normal for a home invitation. Turning up exactly on time can catch a host mid-shower.",
        ],
      },
      {
        p: "Two that do hold, and are worth more than the folklore: shoes come off at the door, and ask before bringing alcohol, because a lot of households are dry and two states are.",
      },

      { h: "The thing nobody will say to you" },
      {
        p: "You will get things wrong, in front of people, and somebody will find it funny. That is not the same as being unwelcome and it is worth learning to tell them apart early, because a family that teases you is a family that has stopped treating you as a guest.",
      },
      {
        p: "The one that actually causes offence is not a wrong colour or a wrong number. It is not showing up. Everything else gets absorbed.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is it cultural appropriation for me to wear a saree or a sherwani?",
            a: "Every published source says no, you were invited, please do. It is worth knowing that nearly all of them sell Indian clothes, so weigh it yourself. It is also never required: a bright Western outfit in a festive cut is completely correct and raises no eyebrows.",
          },
          {
            q: "Why is everyone giving money instead of presents?",
            a: "Because cash is not impersonal in India the way it is in the West. It is useful, it is expected, and it spares a couple their fourth toaster. A present instead of an envelope reads as though you did not know the form. A present alongside a smaller envelope reads warmly.",
          },
          {
            q: "How much do I give my husband's cousin at her wedding?",
            a: "As an in-law rather than a guest you are giving on the family's side, so ask what the household is giving and match it. Turning up with a colleague-sized envelope when your in-laws have given ten times that is the awkward outcome, and it is entirely avoidable by asking.",
          },
          {
            q: "Do I have to fast?",
            a: "No. Nobody keeping a fast expects a person who married in to keep it, and plenty of people born into it do not either. If you want to, say so beforehand rather than announcing it on the day, because someone will want to feed you.",
          },
          {
            q: "What do I bring the first time I visit their house?",
            a: "A box of mithai or dry fruit, given with both hands or the right hand. It will probably not be opened in front of you, which is normal and not a snub. Take your shoes off at the door.",
          },
          {
            q: "I have been told not to worry about it. Should I worry about it?",
            a: "No, but ask anyway. Not worrying is good advice about the consequences and bad advice about the method. The people telling you not to worry learned all of this by osmosis over thirty years and genuinely cannot remember being taught it.",
          },
        ],
      },
    ],
  },
  {
    slug: "sending-shagun-from-abroad",
    title:
      "Sending shagun from abroad: what actually reaches them, and what to send instead of a transfer",
    date: "2026-08-31",
    updated: "31 August 2026",
    tag: "How it works",
    excerpt:
      "You are not going to make it to the wedding. Here is how the money should travel, what it costs, what the amount means at the other end, and the part a bank transfer cannot do.",
    body: [
      {
        p: "You found out about the wedding six weeks ago and you are not going to make it. Flights are what they are, leave is what it is, and the date is a Tuesday.",
      },
      {
        p: "So you will send money. And somewhere between your banking app and your cousin's account, the thing you meant to do stops being shagun and turns into a transfer, and everybody involved feels vaguely that something has gone missing without being able to name it.",
      },
      {
        p: "This page is about what actually goes missing, and what to do about it.",
      },

      { h: "The amount, and what it means at the other end" },
      {
        p: "Convert first, then think in rupees. Not the other way round.",
      },
      {
        table: {
          head: ["You send", "USD", "GBP"],
          rows: [
            ["₹501", "$5.24", "£3.87"],
            ["₹1,100", "$11.52", "£8.51"],
            ["₹2,100", "$21.98", "£16.25"],
            ["₹5,100", "$53.37", "£39.45"],
            ["₹11,000", "$115.08", "£85.06"],
            ["₹21,000", "$219.70", "£162.39"],
          ],
        },
      },
      {
        note: "Rates as at 31 August 2026: ₹1 = $0.0105 = £0.0077, checked against two independent providers agreeing to within 0.2 percent. They will have moved by the time you read this.",
      },
      {
        p: "Fifty-three dollars is not a useful number. Here is what ₹5,100 actually is at the other end: about a fortnight of part-time domestic wages in Delhi, or seven sleeper-class tickets from Delhi to Mumbai, or twenty restaurant thalis.",
      },
      {
        p: "Which matters in both directions. The diaspora default of $101 per person, which is the figure people abroad name as safe, is close to ₹9,700 and lands at the top of the close-family band. That is not wrong. But if you are giving it to a second cousin you should know you are giving at family level, not at guest level.",
      },
      {
        p: "There is also a real split people notice: the same person will give $200 at a wedding in New Jersey and ₹2,100 at a wedding in Jaipur. Both are normal. You are giving into the local economy, not converting your own norm.",
      },

      { h: "Ends in a one, and here is where people get it wrong" },
      {
        p: "Under about five hundred, the number carries the one itself. ₹101, ₹251, ₹501.",
      },
      {
        p: "Above that, it does not. You give ₹1,100, ₹2,100, ₹5,100, ₹11,000. Those are the numbers. What makes the total odd is the one-rupee coin stuck to the front of the lifafa, which turns ₹1,100 into ₹1,101.",
      },
      {
        p: "Which is a problem when you are eight thousand kilometres away, because there is no envelope and no coin. So the honest options are to send the round figure and let somebody at that end put it in a lifafa, or to send the odd total and have it be slightly unusual but unambiguous. Both happen. Nobody is going to be upset.",
      },
      {
        p: "And in dollars, keep the habit: $101, $201, $501. It transfers.",
      },

      { h: "How to actually move it" },
      {
        p: "Four routes, and they are not equivalent.",
      },
      {
        ul: [
          "A remittance service, Wise or Remitly or similar. Best rate, arrives in a day or two, and you will pay a small fee rather than a hidden spread. This is the default and there is rarely a reason not to use it.",
          "Your bank's international transfer. Slower, worse rate, higher fee, and the money often arrives with the exchange loss baked in so nobody sees it. Use it if you already have the relationship set up and the amount is large.",
          "Sending it to a relative in India who then hands over cash in an envelope. This is the one that preserves the gesture, and it is what most people actually do.",
          "UPI, if you have an Indian bank account and an Indian number still working. Instant and free, and increasingly the way it happens.",
        ],
      },
      {
        p: "One thing to know about the receiving end: money from a relative abroad is not taxable in India, at any amount, if you are a relative as the Income Tax Act defines it. That list is narrower than the word usually is. Cousins are not on it, and neither are nephews or nieces. That matters only above ₹50,000 in a financial year from everyone outside the list combined, which most shagun is nowhere near, but it is worth knowing before you send a large one.",
      },

      { h: "The part a transfer cannot do" },
      {
        p: "Here is what is actually missing, and it is not sentiment.",
      },
      {
        p: "At an Indian wedding somebody is keeping a record. In Tamil Nadu it is explicit, a register at the door where a person writes your name, your town and the amount. In Punjab it is vartan bhanji and there is a written record. In Rajasthan it is neota, and those books get kept across generations.",
      },
      {
        p: "A bank transfer arrives with your bank's version of your name and nothing else. No town, no relationship, no note. Six weeks later, when a family member sits down to reconcile who gave what, you are a line in a statement that somebody has to work out.",
      },
      {
        p: "So whatever route you use, send a message separately that says what the money is for, who it is from, and where you are. Same information the register wants. It takes fifteen seconds and it is the difference between being recorded and being deciphered.",
      },
      {
        p: "The second thing missing is the object. Shagun is an envelope somebody puts into a hand. A notification is not that, which is most of the reason this site exists, so take that as disclosure rather than a pitch.",
      },

      { h: "Timing" },
      {
        p: "Before the event, not after. This is the one that actually gets noticed.",
      },
      {
        p: "For a wedding, a few days ahead so it can go in the book with everything else. For a festival, before the day rather than on it, because the day itself is busy and a transfer landing at 9pm on Diwali is competing with a lot.",
      },
      {
        p: "If you are late, send it anyway. Late shagun is a normal thing. Nothing is remembered as badly as nothing.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "What is the cheapest way to send shagun to India?",
            a: "A remittance service like Wise or Remitly, which will beat a bank on both rate and fee for small amounts. If you still hold an Indian bank account, UPI is instant and free. A bank wire is the most expensive route and the loss is usually hidden in the rate rather than shown as a fee.",
          },
          {
            q: "Will they have to pay tax on it?",
            a: "Not if you are a relative as the Income Tax Act defines that, which is narrower than the everyday word and excludes cousins, nephews and nieces. Even then it only bites above ₹50,000 in a financial year from everyone outside that list combined, which ordinary shagun does not approach.",
          },
          {
            q: "Should I send a round number or one ending in one?",
            a: "In India you would give ₹1,100 and let the coin on the envelope make it ₹1,101. Sending directly there is no envelope, so either send the round figure and let someone put it in a lifafa, or send the odd total. Both are fine. In dollars, keep the habit: $101, $201, $501.",
          },
          {
            q: "How much do I give if I am not attending?",
            a: "The same as you would if you were. Not attending is not a discount, and if anything people are more generous when they cannot come. What matters more is that it arrives before the event and that it is clear who it is from.",
          },
          {
            q: "Is it rude to send money instead of coming?",
            a: "No. What people mind is silence. An envelope that arrives on time from someone who could not travel is completely normal and always has been, which is the whole reason shagun works by post in the first place.",
          },
        ],
      },
    ],
  },
  {
    slug: "annaprashan-first-birthday",
    title:
      "Annaprashan and the first birthday: the maternal uncle does the feeding, and the candles get lit",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "Girls in odd months, boys in even. The mama feeds the child, not the parents. And the traditional first birthday is a homam reckoned by star, where nobody blows anything out.",
    body: [
      {
        p: "Two ceremonies get squashed together in most people's heads: the first solid food, and the first birthday. They are different events, months apart, and the second one is not originally a birthday party at all.",
      },

      { h: "Annaprashan" },
      {
        p: "The first mouthful of solid food, usually rice, given ceremonially. Annaprashana in Sanskrit. Mukhe bhaat in Bengal, which means rice in the mouth. Choroonu in Kerala.",
      },
      {
        p: "The month is decided by whether the child is a boy or a girl, and this is one of the few rules in this whole area that is stated the same way by everybody.",
      },
      {
        note: "Girls in odd months: the fifth, seventh, ninth or eleventh. Boys in even months: the sixth, eighth, tenth or twelfth.",
      },
      {
        p: "The textual baseline is looser and more practical. Most of the Grihya Sutras put it in the sixth month, or whenever the first teeth appear.",
      },
      {
        p: "One textual disagreement is worth knowing about because it is not the disagreement anybody expects. The Sankhyayana Grhyasutra recommends that fish, goat or partridge gravy be mixed into the baby's first solid food. The Manava Grhyasutra says nothing about meat at all. Two texts, same rite, and one of them is feeding the child partridge.",
      },

      { h: "Who does the feeding, and where" },
      {
        p: "In Bengal the annaprashan is held at the child's maternal home, and the mama or the maternal grandfather does the feeding, with the baby on his lap. The first food is payesh.",
      },
      {
        p: "That is not a Bengali eccentricity. Follow the thread and the mother's brother turns up at the centre of these ceremonies across three separate language regions.",
      },
      {
        ul: [
          "Bengal, annaprashan: the mama feeds the child, at the maternal home.",
          "Telugu, barasala: the mama puts a gold ring dipped in cow's milk and honey on the baby's tongue.",
          "Tamil, karnavedha: the baby sits on the mama's lap for the ear piercing.",
        ],
      },
      {
        p: "Three ceremonies, three languages, and the same man doing the thing that matters. If you have wondered why the mama is such a load-bearing figure in Indian families, this is where it starts, years before the wedding where he pays for everything.",
      },
      {
        p: "In Kerala the choroonu is very commonly done at Guruvayur, which runs it daily and has a dedicated hall for it on the first floor of the old ticket counter building. Rice, banana and payasam, off a plantain leaf, in front of the deity.",
      },

      { h: "The tray" },
      {
        p: "After the feeding the baby is put down in front of a plate or a banana leaf with objects on it, and whatever it grabs first is taken as a hint about what it will care about.",
      },
      {
        table: {
          head: ["What it picks up", "What that is taken to mean"],
          rows: [
            ["A book", "Learning"],
            ["A pen", "Writing, wisdom"],
            ["Money", "Wealth"],
            ["Clay or soil", "Land, property, staying put"],
            ["Food", "Appetite, or generosity"],
          ],
        },
      },
      {
        p: "We could only attest this properly for Bengali mukhe bhaat, so we are not going to tell you it is done all over India. Worth knowing it has close relatives elsewhere: the Korean doljanchi and the Chinese zhuazhou do the same thing with the same objects on the child's first birthday.",
      },

      { h: "The first birthday, and what it originally was" },
      {
        p: "The traditional observance is not a party. It is the Ayush Homam, and ayush means lifespan.",
      },
      {
        p: "It is reckoned by the nakshatra rather than the Gregorian date, which means it lands on a different day from the one on the birth certificate. The child is dressed in silk and sits on the father's lap through the homam, which asks for a long life and the removal of obstacles.",
      },
      {
        p: "The reason it exists is unsentimental. A child surviving its first year was once genuinely uncertain, and this is the ceremony that marks the survival. The cake, if there is one, comes later in the day and nobody minds.",
      },
      {
        p: "There is one detail here that we did not find stated this baldly anywhere else in this whole subject, and it is about money. In Tamil Brahmin practice, as described on a community forum: the homam must be held at the child's father's house; the maternal grandfather is told in advance and brings gifts with thamboolam, fruit and flowers; and all expenses are borne by the paternal grandfather.",
      },
      {
        p: "One side brings the gift, the other side carries the cost, and both are named. No gift guide will ever tell you that, because it is not about what to buy.",
      },

      { h: "The candles" },
      {
        p: "The one objection to the imported birthday party that is an actual argument rather than nostalgia: the candles are meant to be lit, not blown out.",
      },
      {
        p: "The reasoning is that putting out a flame is the wrong gesture to make over a life you are asking to be long. Lamps get lit at every other occasion in the house, and you do not extinguish them for luck.",
      },
      {
        p: "Take it as a folk rationalisation rather than doctrine, because that is what it is. But it is a good one, and it costs nothing to light a diya alongside the cake if somebody in the family minds.",
      },

      { h: "What a real one looks like" },
      {
        p: "The most useful account of an Ayushya Homam we found is a mother writing about her own daughter's, and it is useful precisely because it is untidy.",
      },
      {
        p: "They moved it to a Sunday, for convenience, rather than keeping the calendar date. Guests threw sanctified rice as a blessing. And a friend performed drishti parihara, windmilling fistfuls of salt around the child and then marking her forehead with soot from the flame, at which point the mother objected on the spot, on the grounds that it implied her own invited guests were envious of her baby.",
      },
      {
        p: "A family doing the ceremony properly, moving it for the weekend, and arguing about one component of it while it is happening. That is what these look like from inside, and it is worth more than any page telling you the ritual is unchanged since the Grihya Sutras.",
      },

      { h: "What to give" },
      {
        p: "Silver is the traditional thing for both of these: a bowl and spoon set, anklets, a coin. For a first birthday, clothes a size up, because everything the child owns is about to stop fitting.",
      },
      {
        p: "And money, which is the thing the shops selling silver will not suggest. ₹501, ₹1,100 or ₹2,100, in an envelope, addressed to the child. If the family is doing the choroonu at Guruvayur or a homam with a priest, the costs are real and the envelope is the useful gift.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Which month is annaprashan done in?",
            a: "Girls in odd months, so the fifth, seventh, ninth or eleventh. Boys in even months, so the sixth, eighth, tenth or twelfth. The older textual rule is simply the sixth month, or whenever the first teeth come through.",
          },
          {
            q: "Who feeds the baby at annaprashan?",
            a: "In Bengal the maternal uncle or maternal grandfather, with the baby on his lap, at the maternal home. Elsewhere the parents or a grandparent. The mother's brother turns up at the centre of these ceremonies in Bengali, Telugu and Tamil practice alike.",
          },
          {
            q: "What is the tray with objects on it?",
            a: "The baby is set in front of a book, a pen, money, clay and food, and whatever it reaches for first is read as an inclination. We could only confirm it for Bengali mukhe bhaat, so it may be more regional than it looks. Korea and China do near-identical versions at the first birthday.",
          },
          {
            q: "Is the first birthday traditionally celebrated in India?",
            a: "Yes, but as the Ayush Homam rather than a party, and on the nakshatra date rather than the calendar one. It marks surviving the first year, which was not always a given. The cake is a modern addition and coexists with it perfectly happily.",
          },
          {
            q: "Why do some people light the candles instead of blowing them out?",
            a: "Because blowing out a flame is considered the wrong gesture over a life you are asking to be long. It is a folk explanation rather than scripture, but if it matters to someone in the family, lighting a diya alongside the cake settles it.",
          },
          {
            q: "What should I gift at a first birthday?",
            a: "Silver, or clothes a size up, or ₹1,100 in an envelope. Everything the child currently owns is about to stop fitting, which makes the too-big option the sensible one.",
          },
        ],
      },
    ],
  },
  {
    slug: "godh-bharai-baby-shower",
    title:
      "Godh bharai, seemantham, valaikappu: the names, the month, and what to give",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "One ceremony with seven names, a taboo about buying anything for the baby that it appears to break, and a gift rule that resolves both.",
    body: [
      {
        p: "Somebody is seven months pregnant and there is a function. What it is called depends entirely on where the family is from, and using the wrong name is the fastest way to look like you looked it up.",
      },
      {
        table: {
          head: ["Name", "Where", "What it is"],
          rows: [
            ["Godh bharai", "North India, Hindi belt", "Filling the lap"],
            [
              "Seemantham",
              "Tamil and Telugu",
              "The religious samskara, with a priest",
            ],
            [
              "Valaikappu",
              "Tamil Nadu",
              "The bangle ceremony. Valai bangle, kaappu protection.",
            ],
            ["Dohale Jevan", "Maharashtra", "Named after dohale, the cravings"],
            ["Shaadh", "Bengal", "Can be three separate ceremonies"],
            ["Shrimant, Khodo Bharvo", "Gujarat", "Also filling the lap"],
            ["Agharni", "Parsi, Gujarat", "First pregnancy only"],
          ],
        },
      },
      {
        p: "One correction worth making because it is in a lot of otherwise decent writing: Shrimant is not a Marathi word for this. Gujarati Hindus and Parsis both use it. The Marathi name is Dohale Jevan.",
      },

      { h: "Seemantham and valaikappu are two different things" },
      {
        p: "In Tamil Nadu these get used interchangeably and they are not the same event.",
      },
      {
        p: "Seemantham is the samskara, one of the sixteen, with a priest and Vedic chanting, and it is women only. Valaikappu is the cultural celebration built around glass bangles, it is larger, and men attend it.",
      },
      {
        p: "Beyond that the sources genuinely conflict, and rather than average them here are both. One account puts valaikappu in the fifth or seventh month at the girl's family home and seemantham in the sixth or eighth at her husband's. A firsthand account from Tiruvannamalai puts valaikappu in the seventh or ninth, organised by the paternal grandmother, at her house or a hired hall.",
      },
      {
        p: "Maternal side and paternal side, in the same ceremony, in the same state. Ask the family.",
      },
      {
        p: "The bangles have a stated purpose, and it is lovely: the sound is meant to reach the womb. In the version from Tiruvannamalai they are not taken off again until the delivery, and then they are given to the midwife.",
      },

      { h: "Which month" },
      {
        p: "Seventh is the common answer. It is not the only one.",
      },
      {
        ul: [
          "North, godh bharai: the seventh, on the reasoning that mother and baby are past the fragile stage.",
          "Maharashtra: seventh, sometimes ninth.",
          "Gujarat: seventh or eighth.",
          "Parsi Agharni: seventh or ninth, preferably seventh, on a Thursday or a Sunday, and only for a first pregnancy.",
          "Bengal: up to three of them. The fifth month, the seventh, and the main one in the ninth.",
        ],
      },
      {
        p: "Bengal having three where everyone else has one is the outlier, and it is the kind of thing worth knowing before you tell a Bengali family they are doing it late.",
      },

      { h: "Who is in the room" },
      {
        p: "Women only is the dominant pattern and it is not universal.",
      },
      {
        p: "The Bengali Shaadh is described flatly as a ritual conducted by women in which the men have no role beyond arranging the materials. Godh bharai is traditionally women only, and most accounts then add that husbands and friends are now included. Seemantham is women only; valaikappu, in the same state, is not.",
      },
      {
        p: "The sharpest exclusion we found is not about gender at all. In the Gujarati Shrimant the woman who does the coconut exchange with the mother-to-be has to be an older sister-in-law or a family member who has not had a miscarriage.",
      },
      {
        p: "That one line tells you what the ceremony is actually anxious about, which no amount of pastel decor does.",
      },

      { h: "The taboo, and why the ceremony does not break it" },
      {
        p: "Somebody will tell you not to buy anything for the baby before it is born. Then somebody throws a baby shower in the seventh month. Both of these are real and the contradiction is only apparent.",
      },
      {
        p: "First, the taboo people actually describe is often narrower than the version that gets repeated. A seventy-year-old woman from Rajasthan, recorded for a folklore archive, describes it as being about the weeks after birth rather than before it: for the first few weeks a newborn is dressed in old clothes that other children have worn, never new ones, and her word for what those clothes carry is the luck of the previous surviving baby. After a few weeks you dress the child however you like.",
      },
      {
        p: "The broader version, do not buy anything at all in advance, is genuinely widespread but we could not attribute it to any particular region or community. The reason given for it is always the same and it is not superstition so much as memory: infant and maternal mortality were high, and a house full of unused things was a specific kind of unbearable.",
      },
      {
        p: "So how does a seventh-month function square with that. Look at what is actually given.",
      },
      {
        p: "Bangles. A saree. Jewellery. Her cravings, cooked and fed to her. A lap filled with rice, coconut, grains and fruit. Almost nothing on the list is for the baby.",
      },
      {
        p: "The gifts are for the mother, and that is the escape hatch. Every account of these ceremonies says some version of this is one of the few occasions where the present is genuinely for the woman rather than the child, and it is usually written as a sentiment. It is a structure.",
      },
      {
        p: "The workarounds people use for the things they do need are worth knowing too, because they are practical rather than mystical: keep the purchases at your mother's house or your sister's flat, leave them sealed so they are not in the house yet, or ask for them through the ceremony, where receiving them is licensed.",
      },

      { h: "What to give" },
      {
        p: "For the lap-filling itself, if you are close family, the contents are traditional and specific. The Parsi version is the most itemised we found: 250g each of green moong, wheat and rice, a whole coconut with a tilak on it, a pomegranate with a coin pushed inside, twin bananas if you can get them, seven cone-shaped boondi ladoos, plus sugar, flowers, paan, almonds, dates and betel nut.",
      },
      {
        p: "For everyone else: something for her. Bangles, a saree, something in silver.",
      },
      {
        p: "Cash is the weak spot, honestly. It is much less attested for this ceremony than for a wedding, and the clearest instance we found is Parsi, where a sagan envelope goes to the mother and the father, which is itself unusual. If you give money here, ₹1,100 or ₹2,100 is right, and give it to her rather than to the household.",
      },
      {
        p: "And if you want a rule for the whole thing: buy for the woman, not for the baby. It is the correct gift, it is what the ceremony is for, and it is the one choice that cannot collide with anybody's belief about the timing.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "What is the difference between seemantham and valaikappu?",
            a: "Seemantham is the religious samskara with a priest, women only. Valaikappu is the bangle celebration, larger, and men attend. Many families do both, sometimes on the same day, which is why the names get used interchangeably.",
          },
          {
            q: "Which month is godh bharai done in?",
            a: "The seventh, most often. Gujarat allows the eighth, Maharashtra sometimes the ninth, Parsi practice prefers the seventh with the ninth as an alternative, and Bengal can have three separate ceremonies in the fifth, seventh and ninth.",
          },
          {
            q: "Is it bad luck to buy things for the baby before it is born?",
            a: "It is a widely held belief and the reason behind it is infant mortality rather than magic. Note that the version people can actually attribute is narrower: a newborn wears hand-me-downs for the first few weeks rather than new clothes. If it worries you, keep the purchases sealed or at your mother's house.",
          },
          {
            q: "Then how is a baby shower allowed?",
            a: "Because the gifts are for the mother. Bangles, a saree, jewellery, her favourite food. Almost nothing at a godh bharai is for the baby, which is exactly why the taboo does not bite.",
          },
          {
            q: "Do men attend?",
            a: "At a valaikappu, yes. At a seemantham, a Bengali shaadh or a traditional godh bharai, no, though husbands and friends are now commonly included in the north. Ask, because it varies within a single state.",
          },
          {
            q: "Who hosts it, the in-laws or her parents?",
            a: "Both, and often both separately. Several communities hold two, one at each house. Bengali shaadh leans to the parental side; the Parsi Agharni is hosted by the mother-in-law, who provides everything new.",
          },
        ],
      },
    ],
  },
  {
    slug: "namkaran-naming-ceremony",
    title:
      "Namkaran: the syllable your baby's name has to start with, and who gets to choose it",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "The nakshatra gives you a sound, not a spelling. Four communities give the naming authority to four different people. And the Sikh method solves the same problem without astronomy at all.",
    body: [
      {
        p: "A baby is born and somebody says the name has to start with a particular sound, and produces a syllable that does not obviously correspond to any name you like.",
      },
      {
        p: "There is a real system underneath that, it is more precise than most people explain, and the crucial thing about it is usually left out: it gives you a sound, not a spelling.",
      },

      { h: "How the syllable is worked out" },
      {
        p: "The moon's position at the moment of birth falls into one of twenty-seven nakshatras, each covering 13 degrees 20 minutes of the zodiac. Each nakshatra divides into four padas of 3 degrees 20 minutes.",
      },
      {
        p: "Twenty-seven times four is 108, and each of those 108 padas has a syllable attached to it. The pada the moon was in gives you the sound the name should start with.",
      },
      {
        p: "So the answer is not one syllable per star. It is one per quarter-star, and knowing the nakshatra without the pada gets you a choice of four.",
      },
      {
        table: {
          head: ["Nakshatra", "Pada 1", "Pada 2", "Pada 3", "Pada 4"],
          rows: [
            ["Ashwini", "Chu", "Che", "Cho", "Laa"],
            ["Bharani", "Lee", "Loo", "Le", "Lo"],
            ["Krittika", "A", "Ee", "U", "E"],
            ["Rohini", "O", "Vaa", "Vee", "Vu"],
            ["Mrigashira", "Ve", "Vo", "Kaa", "Kee"],
            ["Ardra", "Ku", "Gha", "Ing", "Chha"],
            ["Punarvasu", "Ke", "Ko", "Haa", "Hee"],
            ["Pushya", "Hu", "He", "Ho", "Daa"],
            ["Ashlesha", "Dee", "Doo", "De", "Do"],
            ["Magha", "Maa", "Mee", "Moo", "Me"],
            ["Purva Phalguni", "Mo", "Taa", "Tee", "Too"],
            ["Uttara Phalguni", "Te", "To", "Paa", "Pee"],
            ["Hasta", "Poo", "Sha", "Na", "Tha"],
            ["Chitra", "Pe", "Po", "Raa", "Ree"],
            ["Swati", "Roo", "Re", "Ro", "Taa"],
            ["Vishakha", "Tee", "Too", "Te", "To"],
            ["Anuradha", "Naa", "Nee", "Noo", "Ne"],
            ["Jyeshtha", "No", "Yaa", "Yee", "Yoo"],
            ["Mula", "Ye", "Yo", "Bhaa", "Bhee"],
            ["Purva Ashadha", "Bhoo", "Dhaa", "Phaa", "Dha"],
            ["Uttara Ashadha", "Bhe", "Bho", "Jaa", "Jee"],
            ["Shravana", "Khee", "Khoo", "Khe", "Kho"],
            ["Dhanishtha", "Gaa", "Gee", "Gu", "Ge"],
            ["Shatabhisha", "Go", "Saa", "See", "Soo"],
            ["Purva Bhadrapada", "Se", "So", "Daa", "Dee"],
            ["Uttara Bhadrapada", "Doo", "Tha", "Jha", "Yna"],
            ["Revati", "De", "Do", "Cha", "Chee"],
          ],
        },
      },
      {
        p: "The part that saves people a great deal of anguish: these are phonetic sounds and not spellings. If a name reads with the right sound it works, however it is written. Nobody is checking your transliteration.",
      },
      {
        p: "And there is frequently a second name. The nakshatra name gets kept for ritual use, said in sankalpams and temple archanas, while the child is called something else entirely at home. If the syllable produces nothing you can live with, that is the usual way out and it is completely normal.",
      },

      { h: "When it happens" },
      {
        p: "There is no single day, and the spread is much wider than any one page suggests.",
      },
      {
        table: {
          head: ["When", "Where", "Called"],
          rows: [
            [
              "6th night",
              "Bihar, Jharkhand, UP, Gujarat, and Parsi families",
              "Chhathi",
            ],
            [
              "11th or 12th day",
              "Most north Indian Hindu families",
              "Namkaran",
            ],
            ["12th day", "Maharashtra, from barah, twelve", "Barsa"],
            [
              "7th, 11th, 16th or 21st day, or the 3rd, 5th or 29th month",
              "Andhra Pradesh, Telangana",
              "Barasala",
            ],
            [
              "When the mother can move about and bathe, whatever the day",
              "Sikh",
              "Naam Karan",
            ],
          ],
        },
      },
      {
        p: "The Telugu range, seven days to twenty-nine months, is the one that settles the argument. There is no correct day.",
      },

      { h: "Chhathi, and the pen left out for a goddess" },
      {
        p: "The sixth night deserves more attention than it gets, and the reason it gets none from the gift pages is that there is nothing to sell.",
      },
      {
        p: "Chhathi belongs to Shashti Maiyya, also called Vidhata, and the belief is that around midnight on the sixth night she comes into the house to write the child's destiny.",
      },
      {
        p: "So the mother leaves out what she will need. A lamp, a red pen, and paper, on a wooden plank.",
      },
      {
        p: "That is the whole thing. A pen left out for somebody who is coming to write.",
      },

      { h: "Who actually names the child" },
      {
        p: "This turns out to vary more than the timing does, and it is the more interesting variation, because it is about authority rather than the calendar.",
      },
      {
        ul: [
          "Maharashtra: the father's sister whispers the name into the baby's ear, at the cradle, while women sing palna songs.",
          "Telugu: the father says it into the ear three times, and it may be written on rice spread on a tray.",
          "Gujarat: the foi, the paternal aunt, names the child.",
          "Sikh: the Granthi does, and neither the family nor the astrologer chooses the letter.",
        ],
      },
      {
        p: "Two of those give it to the father's sister, which is a real pattern and one that people from families that do not do it find surprising.",
      },

      { h: "The Sikh method, which solves it completely differently" },
      {
        p: "The Rehat Maryada sets out a procedure that arrives at the same place, a letter and then a name, without any astronomy at all.",
      },
      {
        p: "The family goes to the gurdwara. The Guru Granth Sahib is opened at random and the Hukam is read. The first letter of that Shabad is the letter. The Granthi proposes a name beginning with it, the congregation accepts it, and he announces it. Then Anand Sahib and Ardas. Boys take Singh, girls take Kaur.",
      },
      {
        p: "Same problem, pick a letter and then pick a name, solved by opening a book rather than by consulting the sky.",
      },
      {
        p: "And the timing rule follows from a rejection. The Maryada explicitly refuses the birth-pollution period, naming the ten, twenty-one and forty day counts it is refusing. Which is exactly the counting that produces the tenth, eleventh and twelfth day elsewhere. Take away the pollution and there is no day to wait for, so the instruction becomes: as soon as the mother can move about and bathe.",
      },

      { h: "What guests give" },
      {
        p: "Silver and gold for the child, small clothes, and money. Anklets, a bowl and spoon, a coin.",
      },
      {
        p: "The same caveat as every ceremony in this cluster: the pages recommending these are shops, and no shop sells cash. ₹501, ₹1,100 or ₹2,100 in an envelope is completely normal and is the thing a family with a new baby can actually use.",
      },
      {
        p: "One claim we came across and could not corroborate anywhere, so treat it as one shop's assertion rather than a fact: that north India favours silver anklets while South India favours gold coins engraved with the birth star. The engraving detail is at least internally consistent with the nakshatra system, which is more than most of these claims manage.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Does the name have to start with the nakshatra syllable?",
            a: "In families that follow it, yes, and the table above gives all 108. But it specifies a sound, not a spelling, and many families keep the nakshatra name only for rituals while calling the child something else entirely at home.",
          },
          {
            q: "Which day is namkaran done on?",
            a: "The sixth night in Bihar, UP, Gujarat and Parsi families; the eleventh or twelfth across most of north India; the twelfth in Maharashtra; and anywhere from the seventh day to the twenty-ninth month in Telugu practice. There is no single correct day.",
          },
          {
            q: "Who chooses the name?",
            a: "It depends who is asking. Maharashtra gives it to the father's sister, Gujarat to the foi, Telugu practice to the father, and Sikh practice to the Granthi via a random opening of the Guru Granth Sahib.",
          },
          {
            q: "What do you gift at a namkaran?",
            a: "Silver for the child, or ₹501 to ₹2,100 in an envelope. Both are normal, and money is what a household with a new baby actually needs. Anything you give is for the child rather than the parents.",
          },
          {
            q: "What if we do not like any name with that syllable?",
            a: "Use it as the rashi name, said in sankalpams and at the temple, and call the child what you want at home. That is not a compromise anybody invented for you; it is how a large number of families already do it.",
          },
        ],
      },
    ],
  },
  {
    slug: "griha-pravesh-gift",
    title:
      "Griha pravesh: what to actually give, and why every list says a Ganesh idol",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "Search this and you get seven shops recommending the same six objects. Cash appears on two pages out of seven, for a reason worth knowing.",
    body: [
      {
        p: "Somebody has bought a flat and you have been invited to the puja. So you search what to gift for griha pravesh and you are given, on every page, in a slightly different order: a Ganesh idol, something silver, a diya, a money plant.",
      },
      {
        p: "That agreement is not a tradition. It is an inventory.",
      },
      {
        p: "We took the seven top-ranking gift pages for this and checked whether they were copying each other. They are not: the phrase overlap between them is essentially zero, and the only strings they share are the WordPress comment-form boilerplate at the bottom. They are independently written.",
      },
      {
        p: "They still converge. Six of seven say idol, six say silver, five say diya, four say a plant. And two of seven mention cash at all.",
      },
      {
        p: "That last number is the whole thing. Every one of those pages sells objects, so every one of them is written backwards from a warehouse, and nobody stocks cash. The advice is not wrong, exactly. It is just what happens when the only people answering a question are the people with something to move.",
      },
      {
        p: "So here is the version written forwards.",
      },

      { h: "What actually changes hands" },
      {
        p: "The best account we found of this is not an article. It is a forum post by a Tamil Brahmin ritual specialist who has been answering griha pravesam questions on the same board since 2011, and who laid out the whole thing: the muhurat rules, the samagri by weight, and the money.",
      },
      {
        p: "What it describes is not guests bringing gifts. It is a two-way exchange in which the host gives back more than they receive.",
      },
      {
        ul: [
          "A week before, abhishekam and archanai at your kula deivam temple, with a cash donation to it.",
          "The in-laws are invited in advance and arrive with a brass kudam, a kuthu vilakku, a saree and a dhoti, sweets, kai murukku, betel, turmeric, kumkum, flowers and fruit.",
          "You give back to them: a saree and a dhoti with thamboolam, fruit, flowers, and, in his words, with some money.",
          "Brothers and sisters bring thamboolam, fruit, flowers, saree and shirt lengths. You return the same.",
          "Dakshinai to each priest, plus a nine by five cotton dhoti. Two to four of them are needed.",
          "A thamboolam bag to every single guest: two betel leaves, a paakku pocket, a sweet, a kai murukku, and a small gift.",
          "And dhotis or shirt lengths to the building contractor, the engineer, the mason, the painter, the electrician and the carpenter, plus a meal.",
        ],
      },
      {
        p: "The tradesmen are inside the circle. That is the part no gift guide has, and it is the part that tells you what the ceremony is actually about, which is the house rather than the housewarming.",
      },
      {
        p: "He also repeats one caveat three times in a single post, and the third time he puts it plainly: this is a public forum, you can skip or add according to your financial position.",
      },

      { h: "So should you give money" },
      {
        p: "Yes, and it is normal, and the reason you have not read that anywhere is covered above.",
      },
      {
        p: "In much of north and central India this runs on neota, which is the same reciprocal cash system that governs weddings, with registers kept across generations. In Tamil Nadu it is moi, and moi is explicitly practised at housewarmings and birthdays, not only at weddings. Somebody sits with a notebook and writes down your name and what you gave.",
      },
      {
        p: "So if the family keeps that ledger, an object is harder for them to reciprocate later than an amount. ₹1,100 or ₹2,100 in an envelope, ₹5,100 if you are close. The total ends in a one, and the coin on the lifafa is what supplies it.",
      },
      {
        p: "Bring something as well if you want to. The convention almost everyone follows is mithai plus an envelope, and mithai on its own is completely fine if money would be strange between you.",
      },

      { h: "When it can and cannot be done" },
      {
        p: "There are two entirely separate systems for this and they do not agree, which is worth knowing before somebody tells you your date is wrong.",
      },
      {
        p: "In the north the period to avoid is Chaturmas, the four months Vishnu is said to sleep. Two panchang sites give 2026 as 16 July to 17 November and 25 July to 20 November. Nine days apart at one end, three at the other, for the same year.",
      },
      {
        p: "The Tamil rule is not Chaturmas at all. It names five months to avoid, Aani, Aadi, Purattasi, Margazhi and Panguni, and the justification given is mythological: Ravana died in Aadi, the Mahabharata war was in Margazhi, Hiranya died in Purattasi.",
      },
      {
        p: "Days disagree too. North: avoid Tuesday and Saturday. Tamil: Monday, Thursday and Friday are good. Those are compatible but they are not the same rule, and the specialist who supplied the Tamil list then cites the Kanchi Mutt panchangam to permit a Sunday his own rule had excluded.",
      },
      {
        p: "One rule worth knowing because it inverts what people expect: the date is chosen against the birth star of the woman who is going to live in the house.",
      },

      { h: "The ceremony" },
      {
        p: "The one element that appears in every region under every name is boiling milk until it goes over the side of the pot. In Kerala the whole event is colloquially called paal kachal, the milk boiling. In Bengal it sits inside Bastu Puja as the kitchen puja. In Maharashtra it is inside Vastu Shanti. Everywhere, the overflow is the point: abundance that cannot be contained.",
      },
      {
        p: "In South India a cow and calf go in first and walk through every room including the kitchen, and each person touches the cow face to tail three times.",
      },
      {
        p: "Which produces the single best line in all of this research, from the same ritual specialist, on what to do if you live in a flat.",
      },
      {
        note: "“For individual house in ground floor cow pooja can be done at the entrance of the house. For flats the cow and calf i think cannot go to upstairs. Better skip cow pooja for flat owners.”",
      },
      {
        p: "A man who knows the rules writing the apartment exemption himself, and hedging it with i think. That is what a living tradition looks like from the inside, and it is more useful than any confident page telling you the ceremony is unchanged since the Puranas.",
      },
      {
        p: "The rest, broadly: a poorna kumbham carried in, the lamp and the deity placed in the kitchen, punyahavachanam, a navagraha mandalam laid to the north and the homa kundam to the south, the homam, kalasha water sprinkled through the house and the remainder poured around the outside, aashirvadam, food, and the thamboolam bags. The owner sleeps in the house that night, and a kolam goes at the entrance the next morning.",
      },

      { h: "The Sikh answer, which is a different answer" },
      {
        p: "Search for Punjabi griha pravesh and you will get Etsy and invitation templates. The actual answer is in the Sikh Rehat Maryada and it contradicts almost everything above.",
      },
      {
        p: "Article XX names moving into a new house explicitly, alongside starting a business and putting a child into school, and prescribes one thing: Ardas.",
      },
      {
        p: "And the timing apparatus is rejected outright. Consulting horoscopes to find an auspicious day is called a sacrilege, and the instruction is that any day the parties find suitable by mutual consultation should be fixed.",
      },
      {
        p: "In practice families mark a new house with a Sukhmani Sahib path or an Akhand Path, then kirtan, Ardas and langar. Worth saying plainly that the code is prescriptive rather than descriptive: plenty of Punjabi Sikh families do consult dates, and this is contested ground inside the community rather than a settled fact about it.",
      },

      { h: "What not to bring" },
      {
        p: "Three that have real Indian footing: sharp things, knives and scissors, on the reasoning that they cut the relationship. Black items, associated with Saturn. And leather, in vegetarian and Jain households.",
      },
      {
        p: "Two that you will see everywhere and that we would not print as Indian. Clocks appear on three of seven pages and mirrors on one page out of fourteen, and that one cites no Vastu text, no scholar and no named expert, only Vastu experts as a floating plural. Both taboos are much better attested in Chinese gift etiquette, where a clock is a homophone for attending a funeral. They look like imports.",
      },
      {
        p: "If somebody in the family believes it, that settles it for that house. But nobody should be told it is a rule.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is money an appropriate griha pravesh gift?",
            a: "Yes, and it is normal. ₹1,100 or ₹2,100 for most people, ₹5,100 if you are close. The reason you rarely read this is that the pages ranking for the question are shops, and no shop sells cash. Mithai plus an envelope is the usual combination.",
          },
          {
            q: "What is the best gift for griha pravesh under ₹500?",
            a: "A good box of mithai, which is about ₹500, or ₹501 in an envelope. Both are complete gifts and neither needs apologising for. If you want an object at that price, a brass diya is the one thing on the standard list that is genuinely used rather than stored.",
          },
          {
            q: "Which months should griha pravesh be avoided in?",
            a: "It depends whose rule you are using. North Indian practice avoids Chaturmas, roughly mid-July to mid-November, and two panchangs put the 2026 dates nine days apart. Tamil practice avoids Aani, Aadi, Purattasi, Margazhi and Panguni instead. Ask the family which system they follow, because the two do not map onto each other.",
          },
          {
            q: "Can we do the cow puja in an apartment?",
            a: "No, and a ritual specialist says so himself: the cow and calf cannot go upstairs, so flat owners should skip it. The rest of the ceremony is unaffected.",
          },
          {
            q: "Do Sikh families do griha pravesh?",
            a: "A new house is marked, but differently. The Rehat Maryada names moving house explicitly and prescribes Ardas, and rejects choosing an auspicious date at all. In practice that means a Sukhmani Sahib path, kirtan, Ardas and langar, on whatever day suits.",
          },
          {
            q: "Should I really not give a clock or a mirror?",
            a: "The Indian evidence for that is very thin. Both taboos are much better attested in Chinese gift customs and appear to have leaked into Indian etiquette listicles. Knives and black items have a genuine basis. If the family believes it, respect it; do not repeat it as a rule.",
          },
        ],
      },
    ],
  },
  {
    slug: "mundan-ceremony-guide",
    title:
      "Mundan: the age is a caste ladder, and the question about girls has an honest answer",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "Every page gives a different age because the underlying rule is graded by varna, not vague. And people keep asking whether girls have one, which turns out to have a real answer that nobody prints.",
    body: [
      {
        p: "Look up the age for a mundan and you will be told the first year, or the third, or the fifth, or the seventh, or anywhere from six months to seven years, all with equal confidence.",
      },
      {
        p: "The sources are not confused. The rule is: first or third year for a Brahmin child, fifth for a Kshatriya, seventh for a Vaishya. It is graded by varna, and what the listicles have done is average a ladder into a range.",
      },
      {
        p: "Whether that ladder is a thing your family observes is a separate question and mostly the answer is no, people do it when it suits. But it is why the sources look like they disagree.",
      },

      { h: "What it is" },
      {
        p: "Chudakarana in Sanskrit, mundan across the Hindi belt, jawal in Marathi, choulam in Tamil, zarra-kaa-saai for Kashmiri Pandits. The child's first haircut, taken off completely, as one of the sixteen samskaras.",
      },
      {
        p: "The reasoning given is that the hair a child is born with carries whatever it carried from before, and removing it starts the child clean. Practical explanations get offered too, about heat and about the hair growing back thicker, and the second one is not true, but the ceremony does not need it to be.",
      },
      {
        p: "In Marathi practice the timing is given more usefully than anywhere else: nine to eighteen months, once the fontanelle has started to close. That is a real reason expressed as a rule.",
      },

      { h: "Where" },
      {
        p: "At home with a barber, at your kul devta temple, or at a pilgrimage site, and all three are normal.",
      },
      {
        p: "Tirumala is the largest by a wide margin. There are separate kalyana-katta facilities for men, women and infants; you get a token with a room number and one fresh blade. The story behind it is Neela Devi, who covered a wound on Srinivasa's head with her own hair, and his promise that anyone offering theirs would be relieved of what they had accumulated.",
      },
      {
        p: "A fact that sits oddly next to that, and is worth knowing anyway: Tirumala collected around 157 tonnes of hair in 2019 and sold it for about 1.6 million dollars. It is among the most valuable hair in the world for wigs, and Israeli rabbinical authorities have twice ruled it unusable for Jewish wigs precisely because of where it comes from.",
      },
      {
        p: "Kashmiri Pandit practice, from one author writing his community's memory rather than a source we can generalise from: at Kheer Bhawani, Jwala Ji at Khrew or Hari Parbat, with a homa treated as essential and scissors rather than a razor for the first cut.",
      },

      { h: "Is mundan necessary for a baby girl" },
      {
        p: "This is the most asked question about the ceremony and the pages that rank for it do not answer it. The honest answer is in a comment thread on a parenting board, four women, opened in 2013 and still getting replies three years later.",
      },
      {
        p: "The first one describes her own household. In some houses, she says, a boy's mundan is celebrated with huge pomp and show, and for a girl they do it at a nearby parlour.",
      },
      {
        p: "A second woman says the same thing about her neighbours: they took a scissor and shaved her themselves at home, no puja, no proper ceremony, nothing.",
      },
      {
        p: "A third replies that she is shocked, and that she has never heard of such a thing happening.",
      },
      {
        p: "A fourth, a year later, tells the rest of them to stop complaining and just do it: if you have young female kids of age two and up, do their mundan with the same pomp, and others will follow.",
      },
      {
        p: "So: the samskara is nominally for both, and in a lot of South Indian practice it plainly is for both, which is why Tirumala has infant facilities that both use. What is unequal is not the haircut. It is the ceremony and the money around it, in some households and not others, and there are women who have never seen it happen and women describing it in their own family.",
      },
      {
        p: "All four of those are true at once and printing only one of them is how you lose a reader who lives in the other version.",
      },

      { h: "The hair" },
      {
        p: "Three disposals, all normal. Immersed in a river, Ganga most often, sometimes mixed with cow dung first. Buried, in earth or near a tree. Or offered at the kul devi's feet.",
      },
      {
        p: "The Kashmiri version is the most specific we found: kept safely inside the house with walnuts, and immersed later at the right time, with some families carrying it to Gangabal.",
      },

      { h: "What to give" },
      {
        p: "Here is the finding, and we are printing it rather than hiding it. Every single result for mundan gift ideas is a shop. Jewellery storefronts, hamper sellers, Instagram sellers. There is no non-commercial source in the results at all.",
      },
      {
        p: "Their convergent recommendation is silver: coins with a deity on them, bangles, anklets, a bowl and spoon set. Silver is genuinely traditional for an infant and that advice is not wrong. It is just the only advice available, from people selling silver.",
      },
      {
        p: "What we can say from a non-commercial source runs the other way entirely. In Kashmiri Pandit practice the paternal aunt prepared the feast and received gifts, of rice and salt, rather than giving them. The direction of the giving is not universal.",
      },
      {
        p: "Practically: ₹501 or ₹1,100 in an envelope for the child, or a small silver thing if you would rather give an object, and mithai either way. If the family is doing it at Tirumala or another temple, the travel is the expensive part and money is the more useful gift.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is mundan necessary for a baby girl?",
            a: "The samskara applies to both, and in much of South India it is straightforwardly done for both. What varies is the ceremony around it: women on parenting boards describe boys getting a full function and girls getting a parlour trip in the same household, while other women in the same thread say they have never seen that. Whether it happens depends on the family, not on the rule.",
          },
          {
            q: "At what age should mundan be done?",
            a: "The classical rule is graded: first or third year for Brahmins, fifth for Kshatriyas, seventh for Vaishyas, which is why every page gives a different number. In practice most families do it between one and three. Marathi practice gives the most useful version: nine to eighteen months, once the fontanelle has begun to close.",
          },
          {
            q: "What do you give at a mundan?",
            a: "₹501 or ₹1,100 in an envelope, or something small in silver. Worth knowing that every page recommending silver is a shop selling silver, and that there is no non-commercial guidance on this anywhere we could find.",
          },
          {
            q: "What happens to the hair?",
            a: "Immersed in a river, buried in earth or near a tree, or offered at the family deity's temple. Kashmiri Pandit families keep it in the house with walnuts and immerse it later. At Tirumala the temple keeps it, and sells it.",
          },
          {
            q: "Does the hair really grow back thicker?",
            a: "No. Shaving does not change the follicle, and regrowth looks thicker only because a blunt cut end is wider than a tapered tip. The ceremony does not need the claim to be true.",
          },
        ],
      },
    ],
  },
  {
    slug: "diwali-bonus-domestic-workers",
    title:
      "The Diwali bonus for domestic workers: the law you are looking up was repealed",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "Search this and you get the Payment of Bonus Act, 8.33 percent, and a slab table. All of it is beside the point, and the Act itself no longer exists.",
    body: [
      {
        p: "Every October the same question goes around the building group. How much for the bai, and is there a rule.",
      },
      {
        p: "Search it and Google offers you the statutory bonus: 8.33 percent minimum, 20 percent maximum, eligibility up to ₹21,000 a month. It looks like a rule. It is not the rule for this, and the Act it comes from was repealed.",
      },
      {
        p: "So here is what the law actually says, which is close to nothing, and then what people actually pay, and then the argument underneath the whole thing, which turns out to have been running for a decade and to be about a word.",
      },

      { h: "The statute everyone quotes no longer exists" },
      {
        p: "The Code on Wages 2019, section 69, repeals four Acts by name: the Payment of Wages Act 1936, the Minimum Wages Act 1948, the Payment of Bonus Act 1965, and the Equal Remuneration Act 1976.",
      },
      {
        p: "The four labour codes were brought into force on 21 November 2025. The bonus notifications under the new Code followed on 25 August 2026, keeping the familiar numbers: eligibility at ₹21,000 a month, calculation ceiling ₹7,000 or the central minimum wage, whichever is higher, minimum 8.33 percent, maximum 20 percent.",
      },
      {
        p: "So the percentages survived. The Act did not. And none of it was ever about a domestic worker anyway.",
      },

      { h: "Why none of it reaches her" },
      {
        p: "This is worth following because it is not an exclusion anybody wrote down. There is no clause naming domestic workers. They fall out of the definitions before you reach any clause at all.",
      },
      {
        p: "Section 2(m): an establishment is a place where any industry, trade, business, manufacture or occupation is carried on.",
      },
      {
        p: "Section 2(k): an employee is a person employed on wages by an establishment.",
      },
      {
        p: "A house is not a place where industry or trade is carried on. So a domestic worker is not employed by an establishment. So she is not an employee. So no chapter of the Code reaches her, not the bonus chapter and not the minimum wage chapter either. There is a second bar after that, a twenty-person threshold, but you never get to it.",
      },
      {
        p: "The old Act failed her the same way, through the phrase in any industry. And the Industrial Relations Code 2020 closed the other door explicitly: section 2(p) excludes domestic service from the definition of industry. Parliament had tried that in 1982 and never brought the amendment into force. The Code managed it.",
      },
      {
        p: "One wrinkle that cuts the other way, worth knowing before anyone tells you the law has never noticed this. Section 50(4) of the Code exempts an employer from register and wage-slip duties where he employs not more than five people for domestic purpose, and defines domestic purpose as relating exclusively to the home or family affairs of the employer. Which is a strange thing to exempt somebody from if they were never in scope.",
      },

      { h: "The Supreme Court looked at this in January and left it alone" },
      {
        p: "Ten domestic workers' unions, from Tamil Nadu to Meghalaya, argued that not paying minimum wages to domestic workers amounts to forced labour under Article 23, and challenged their exclusion from the Minimum Wages Act in most states and from the Code on Wages.",
      },
      {
        p: "On 29 January 2026 a bench of the Chief Justice and Justice Bagchi disposed of the petition without relief, holding the matter to be one of policy for the executive and the legislature.",
      },
      {
        p: "The petition's own arithmetic, from the hearing: only fifteen states and two union territories have extended minimum wage protection to domestic workers at all, and domestic work is still not in the Central List of Scheduled Employments, despite a Labour Ministry task force recommending it in 2010.",
      },
      {
        p: "The reasoning offered from the bench was that mandating minimum wages could mean every household being dragged into litigation by trade unions, and could make households reluctant to hire. Those remarks were publicly condemned by a judicial accountability campaign and by the unions, and workers protested in Chennai and Delhi the following week.",
      },
      {
        p: "One line from those protests, from the president of a Chennai union: these four labour codes have now repealed all earlier laws and are junking the struggles of the last seventy years, and we have to start again, with weaker laws.",
      },
      {
        p: "The practical upshot for anyone deciding what to pay in October: there is no legal floor. Whatever you give is voluntary, and that is the entire legal position.",
      },

      { h: "One month's salary is the demand, not the norm" },
      {
        p: "You will read on maid agency sites that one month's salary is the standard practice in Mumbai. That is a vendor writing what its customers would like to be told, and the people running the campaign for exactly that say the opposite.",
      },
      {
        p: "From the co-founder of a Bengaluru domestic workers' union, five or six years into their campaign: by the third year many employers had started giving a cash bonus, and the only challenge is to get them to give one month's salary, because employers still do not understand why they need to.",
      },
      {
        p: "So the honest version is that a cash bonus of some size is now common in cities where somebody organised for it, and a full month's salary is the thing being asked for rather than the thing being paid.",
      },

      { h: "What people actually give" },
      {
        p: "The reporting on this is thinner than it should be and much of it is old, so these are marked with where and when.",
      },
      {
        table: {
          head: ["Where", "What was reported", "When"],
          rows: [
            [
              "Mumbai",
              "A household spending ₹15,000 on building staff, plus ₹7,000 between a maid and a cook",
              "2018",
            ],
            [
              "Mumbai",
              "A PR firm owner giving half a month's salary in a good year, and nothing in a bad one",
              "2018",
            ],
            [
              "Mumbai",
              "Dabbawalas asking for a month's pay via a note on the bill, and settling at ₹500 against ₹1,000",
              "2018",
            ],
            [
              "Mumbai",
              "A postwoman covering 33 buildings, given ₹500 by a departing client",
              "2018",
            ],
            [
              "Bengaluru",
              "An apartment group circulating a message urging residents not to give half a month's salary",
              "2023",
            ],
            [
              "Chennai",
              "A worker on ₹3,000 a month asking for ₹1,000, and being fired for it",
              "2025",
            ],
            [
              "Delhi",
              "A union officer describing being given ₹100 for working on Diwali day itself",
              "2019",
            ],
          ],
        },
      },
      {
        p: "That Bengaluru message is worth reading twice, because of what it accidentally proves. It circulated in a complex where flats go for over two crore, and it said: use your discretion according to their salary but not half month salary, and no job in the world would pay us half a month's salary as bonus, so why for them.",
      },
      {
        p: "Somebody only organises against a norm that exists. The message is evidence that half a month was common enough in that building to need arguing down.",
      },
      {
        p: "The Chennai case is the one to sit with. Eighteen years a domestic worker, eight of them with the same household, ₹3,000 a month. She asked for ₹1,000 once a year. She was let go, and taken back a week later because they could not replace her at that price. She was told she should be content with the saree they gift her every Diwali and not ask for more.",
      },

      { h: "Which brings us to the saree" },
      {
        p: "Is a saree instead of money generous or is it cheap. This is the question people actually want answered, and unusually, both sides are on the record.",
      },
      {
        p: "Employers, quoted in a Delhi NCR piece where not one of the households interviewed gave cash: a water purifier, because what good would a tea set do for them, and the people who work for us also need clean water. Gold earrings and a television, because they deserve it for the hard work they put in all year. A recurring deposit account opened in her name, because that would help with her child's education and with managing her finances better.",
      },
      {
        p: "Those are thoughtful gifts, chosen with care, by people who clearly meant well.",
      },
      {
        p: "Workers, on the same question. From Delhi: many employers distribute their leftover Diwali sweets to us after a week, and we do not want your jhoota mithai. From Bengaluru: we do not want a saree or sweets, we do not want a favour, we want our right.",
      },
      {
        p: "In 2015 in Bengaluru one union member returned the sweets her employer gave her and asked for a cash bonus. Another turned down a saree and asked for cash. That is what started the campaign.",
      },
      {
        p: "So the answer is not that gifts are bad. It is that the two sides are not having the same conversation. One is choosing a present. The other is asking to be paid. A present is generous, and a present offered instead of the thing that was asked for is also a refusal, and both of those are true of the same water purifier.",
      },

      { h: "Baksheesh and bonus are two different words" },
      {
        p: "The best writing on this is an academic paper from 2018 about a campaign in Bengaluru, and its title is the argument: between baksheesh and bonus.",
      },
      {
        p: "Baksheesh is discretionary. It comes from above, it is sentimental, it is given because the giver is moved to give it, and it is often given only when asked for. A bonus is owed. Same money, different relationship, and the campaign was to move from one word to the other.",
      },
      {
        p: "One of the paper's authors put the objection to baksheesh plainly: the idea is very caste-based, the employer reasons that she is doing punya by giving money, and it is an unconscious feudal system at work in an urban area that resurfaces every festive season. Many see it as the equivalent of giving alms. Workers are not beggars.",
      },
      {
        p: "How the campaign actually ran is worth knowing because it was so careful. In the first year workers wore a black ribbon through the festive season and said nothing. If an employer asked what it meant, they explained. In the second year, a pamphlet, slid under the door, discussed only if the employer raised it. By the third year many employers were giving a cash bonus.",
      },
      {
        p: "Three years of ribbons and pamphlets to get to a cash bonus that is still not a month's pay.",
      },

      { h: "The part nobody counts" },
      {
        p: "There is an argument here that most employers have never heard and it is the strongest one.",
      },
      {
        p: "Festivals mean more domestic work, not less. Deep cleaning before, cooking during, dishes after, guests throughout, and often on days that would otherwise be off. That extra work is generally assumed rather than negotiated and, in most accounts, not paid for separately.",
      },
      {
        p: "From Delhi: we deep-clean your homes before the festival and do not clean ours, because we have no time or energy left over, and we leave our families and come to your homes on Diwali day and work while you host your parties.",
      },
      {
        p: "From a worker in Jaipur, recorded for an academic study: we also have a family and children, we also have to celebrate the festivals, so what if we are poor, we also need leave, we also celebrate and cook at home.",
      },
      {
        p: "Read the bonus that way and it stops being a gift at all. It is at least partly payment for festival overtime that has already been worked.",
      },

      { h: "A thing you will read that is not true" },
      {
        p: "You will find pages citing the Domestic Workers Registration, Social Security and Welfare Act 2008, complete with section numbers. Two otherwise reasonable sources quote its sections 22 and 23 as though reading from a statute book.",
      },
      {
        p: "There is no such Act. Domestic worker bills were proposed in 1959, 1989, 2004, 2008, 2015, 2016 and 2017, and none of them passed. The thing enacted in 2008 was the Unorganised Workers' Social Security Act, which is different. One of the pages citing the 2008 Act says in its very next paragraph that the relevant bill was never enacted.",
      },
      {
        p: "It is a bill that has been promoted to a statute by repetition, and it is worth knowing about mainly as a demonstration of how confidently this whole subject gets written by people who have not checked.",
      },

      { h: "Tax, and an asymmetry worth noticing" },
      {
        p: "A cash bonus from an employer is salary income in principle. In practice nobody in this story owes any tax on it: the wages involved are far below the threshold at which any liability arises, so there is nothing to deduct, no TAN, no Form 16, and no return to file.",
      },
      {
        p: "But the framework does reach a household employer, and here is the odd part. The labour law says a home is not an establishment, so she is not an employee, so she is owed no bonus. The tax law has no establishment test at all: it turns purely on whether an employer-employee relationship exists, and it explicitly does not care whether the employer is a company or an individual, or how many people they employ.",
      },
      {
        p: "So the same woman is not an employee for the purpose of being paid a bonus, and is an employee for the purpose of that bonus being taxed. Nothing turns on it at these amounts. It is just a good description of where she stands.",
      },
      {
        note: "Tax note: the Income-tax Act 1961 was replaced by the Income-tax Act 2025 with effect from 1 April 2026, though returns for the year just gone still follow the old law. Section numbers quoted anywhere online, including in our own older posts, should be checked against the new Act before anyone relies on them.",
      },

      { h: "So what should you give" },
      {
        p: "There is no legal answer, so this is ours, and it is a view rather than a rule.",
      },
      {
        ul: [
          "One month's salary if you can. It is what is being asked for, by the people asking, and it is unambiguous.",
          "Half a month if you cannot, which is common and is not shameful.",
          "In cash, and separately from anything else you give. A saree can be a present. It should not be the answer to a request for money.",
          "Before the festival rather than after, because that is when it is needed and because the shops empty out.",
          "And ask about leave. Several accounts describe a month's paid leave alongside the cash as the actual custom for a live-in worker, and travel home is the expensive part.",
        ],
      },
      {
        p: "Building staff, security, the person who takes the rubbish, the postman: smaller amounts, and in most buildings there is a collection. Contributing to that is normal and so is giving separately to anyone you deal with directly.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is a Diwali bonus for a maid legally required?",
            a: "No. Domestic workers fall outside the Code on Wages entirely, because a home is not an establishment and so a domestic worker is not an employee under the Code. The Supreme Court declined to change that in January 2026, treating it as a matter for the legislature. Whatever you give is voluntary.",
          },
          {
            q: "Is the bonus 8.33 percent or 20 percent?",
            a: "Those figures are the statutory bonus, which applies to establishments employing twenty or more people. They have never applied to a household, and the Act they came from, the Payment of Bonus Act 1965, was repealed by the Code on Wages. The percentages carried over into the new Code, and they still do not reach a domestic worker.",
          },
          {
            q: "How much should I actually give?",
            a: "One month's salary is what the unions ask for. Half a month is widely reported and is not stingy. In cash, before the festival, and separately from any gift.",
          },
          {
            q: "Can I give a saree or sweets instead of money?",
            a: "You can, and many people do, and it is often chosen thoughtfully. Worth knowing that the workers who have organised on this are explicit that it reads as a substitute for the thing they asked for. Give the gift as well, not instead.",
          },
          {
            q: "Does she pay tax on it?",
            a: "In practice, no. A cash bonus is salary income in principle, but the wages involved sit far below the threshold at which any tax arises, so there is nothing to deduct and no return to file.",
          },
          {
            q: "What about the building staff and the watchman?",
            a: "Usually a collection per flat, organised by the society, plus whatever you give directly to anyone you deal with. There is no published figure for what a per-flat contribution typically is, anywhere we could find.",
          },
        ],
      },
    ],
  },
  {
    slug: "shagun-amounts-which-numbers",
    title:
      "Is ₹3,100 a shagun amount? The numbers people use, and the pattern underneath them",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "₹1,100 yes. ₹3,100 no. Nobody can tell you why, and everybody is sure. There is an actual pattern and once you see it the whole ladder makes sense.",
    body: [
      {
        p: "Somebody is standing at an ATM working out what to put in an envelope, and the number that comes out is ₹3,000. Add the customary one and it is ₹3,100, which is odd, ends in a one, and is somehow still wrong.",
      },
      {
        p: "It is wrong. Ask anyone Indian and they will tell you instantly, and then they will not be able to tell you why. This is a real enough problem that Google records people asking is 3,100 a shagun amount, is 4,100, is 7,100, is 5,001, is 11,111, and the pages that come up do not answer any of them.",
      },
      {
        p: "So here is the ladder, and then the pattern underneath it, which is arithmetic rather than superstition and which nobody seems to have written down.",
      },

      { h: "The ladder" },
      {
        p: "These are the amounts. Not a range, a list. People pick off it rather than choosing a number.",
      },
      {
        table: {
          head: ["What you give", "Total with the coin", "Where it is used"],
          rows: [
            ["₹11", "₹11", "A child, a temple hundi, a token"],
            ["₹21", "₹21", "A small blessing, a young child"],
            ["₹51", "₹51", "Domestic staff at a small occasion, a child"],
            [
              "₹101",
              "₹101",
              "The universal minimum. A child, a neighbour, anyone.",
            ],
            ["₹251", "₹251", "A child of family friends, a small function"],
            [
              "₹501",
              "₹501",
              "The workhorse. A cousin's child, a colleague, most things.",
            ],
            [
              "₹1,100",
              "₹1,101",
              "A colleague's wedding, a niece, a decent nek",
            ],
            ["₹2,100", "₹2,101", "A friend, a relative you see often"],
            ["₹5,100", "₹5,101", "A close friend or a cousin at their wedding"],
            ["₹11,000", "₹11,001", "Close family"],
            ["₹21,000", "₹21,001", "Very close family, a sibling"],
            ["₹51,000", "₹51,001", "Immediate family at a wedding"],
          ],
        },
      },
      {
        p: "Note where the one comes from, because this is the part people get wrong when they try to work it out from first principles. Up to ₹501 the one is inside the number and you count out that exact figure. Above it you give the round amount, and the one-rupee coin already stuck to the front of a traditional lifafa makes the total odd. You give ₹1,100 and it lands as ₹1,101.",
      },
      {
        p: "Nobody counts out ₹1,101 in notes. If you have been doing that, you have been doing the coin's job for it.",
      },

      { h: "So is ₹3,100 a shagun amount" },
      {
        p: "No. Nor is ₹4,100, ₹6,100, ₹7,100, ₹8,100 or ₹9,100. And here is the thing: none of them is forbidden, unlucky, or offensive. Nobody will refuse it and nobody will say anything.",
      },
      {
        p: "It will just sound slightly off, the way £37 would sound as a birthday cheque in England. Not wrong. Just not a number anybody reaches for.",
      },

      { h: "The pattern nobody writes down" },
      {
        p: "Take the ladder and strip the one off it. What is left is 10, 20, 50, 100, 250, 500, 1,000, 2,000, 5,000, and then 11, 21 and 51 thousand.",
      },
      {
        p: "That is the one-two-five series. It is the sequence Indian currency itself is built on: ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500. Every denomination in your wallet is a one, a two or a five with zeroes after it.",
      },
      {
        p: "There is no three. There is no four, no seven, no nine. Not in the notes, and so not in the ladder.",
      },
      {
        p: "That is the whole answer. ₹3,100 sounds wrong for the same reason a ₹300 note would look wrong: three is not a number this currency counts in. The shagun ladder is the note series with a one added, and the one comes off the envelope once the numbers get big.",
      },
      {
        note: "This is my own observation rather than something a source told me. I could not find any page, in English or Hindi, that connects the shagun ladder to the currency series, and plenty of pages give numerological explanations instead. Take it as a pattern that fits rather than a documented rule.",
      },
      {
        p: "Two honest exceptions to it. ₹251 is a half-step and 250 is not in the note series. And ₹11,000, ₹21,000 and ₹51,000 are the eleven-twenty-one-fifty-one pattern moved up a scale rather than the note series. So the rule is a strong tendency and not a law, which is roughly how these things always turn out.",
      },

      { h: "The other numbers people ask about" },
      { h3: "₹5,001" },
      {
        p: "Yes, and it is the older form. Before the coin became standard on printed envelopes people wrote the one into the number itself at every scale, which is where ₹1,001, ₹5,001 and ₹11,001 come from. You will still see it from older relatives and it is completely correct.",
      },
      {
        p: "What has happened since is that the envelope started arriving with the coin already attached, so the round figure plus the coin does the same job. Both totals are odd and both are right.",
      },
      { h3: "₹11,111" },
      {
        p: "Yes, and it is a different system rather than a mistake. Repeating digits are their own auspicious form, and you will see ₹111, ₹1,111, ₹11,111 and ₹1,11,111 used the same way. Common in Gujarati and Marwari business families in particular, and often for temple donations.",
      },
      {
        p: "Worth knowing it reads as slightly more deliberate than the standard ladder. Somebody chose that number.",
      },
      { h3: "₹11" },
      {
        p: "Yes, at the small end. A child touching your feet, a coin into a hundi, a token to somebody who has done a small thing for you. It is not an insult at that scale, it is the scale.",
      },
      { h3: "₹100, ₹500, ₹1,000 flat" },
      {
        p: "This is the one to actually avoid, and it is the only genuine rule on this page.",
      },
      {
        p: "Round totals are condolence money. Flat ₹500, flat ₹1,000, no coin, is what you take to a house in mourning. Not because even numbers are unlucky, but because a round number reads as complete, and completeness is the right wish for a death and the wrong one for everything else.",
      },
      {
        p: "So the rule is not really give odd. It is add the rupee at every happy occasion, and take it off at the one that is not.",
      },

      { h: "What actually decides the number" },
      {
        p: "Having said all that, the ladder is the easy part. Which rung you pick is the real question, and it is not about the number at all.",
      },
      {
        p: "It is about what that family gave at your last function. Somewhere there is a book, or a mother who remembers, and your envelope is being read against the last entry. Give a rung below what came to you and it is noticed. That is written up properly in the wedding shagun guide.",
      },
      {
        p: "If you have no history with them, there is nothing to fall short of. You are opening the account. Pick the rung that matches how close you are and stop worrying about it.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is ₹3,100 a shagun amount?",
            a: "No, and it is the most searched version of this question. Nothing bad happens if you give it and nobody will comment, but three is not a number the ladder uses, because the ladder follows the one-two-five series that Indian currency itself is built on. Give ₹2,100 or ₹5,100 instead.",
          },
          {
            q: "Is ₹4,100 or ₹7,100 a shagun amount?",
            a: "Same answer. Four and seven are not in the series either. The rungs above ₹2,100 are ₹5,100, then ₹11,000, then ₹21,000.",
          },
          {
            q: "Is ₹5,001 a shagun amount?",
            a: "Yes. It is the older way of writing it, from before envelopes came with the coin attached, and you will still see it from older relatives. ₹5,100 plus the coin on the lifafa gets you to the same odd total.",
          },
          {
            q: "Is ₹11,111 a shagun amount?",
            a: "Yes, and it belongs to a separate tradition of repeating digits rather than to the main ladder. ₹111, ₹1,111 and ₹11,111 are all used, particularly by Gujarati and Marwari families and for temple donations. It reads as a deliberate choice rather than a default.",
          },
          {
            q: "Why not just give ₹3,000 and skip the extra rupee?",
            a: "Because a round total is what gets given at a funeral. The one is what marks the occasion as a happy one, and leaving it off is the actual mistake, more than picking an unusual number.",
          },
          {
            q: "Does the one-rupee coin have to be a real coin?",
            a: "No. Plenty of envelopes ship from the factory with the coin already attached, and there is a whole product line where the coin is printed rather than real. A hand-glued coin is the version people remember; it is not the common one.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-is-nek-shagun",
    title:
      "What is nek: the envelope, the extra rupee, and how much to actually put in",
    date: "2026-08-31",
    updated: "31 August 2026",
    tag: "How it works",
    excerpt:
      "For anyone who did not grow up with this. What a lifafa is, why the amount ends in a one, what those rupees actually feel like in India, and the rule nobody tells you until you break it.",
    body: [
      {
        p: "You have been invited to an Indian wedding, or you have married into a family, or you are going back to a country you left when you were four. At some point somebody says the word shagun, or nek, or lifafa, and hands you a small envelope, and you realise you have no idea what number goes in it.",
      },
      {
        p: "The internet is not much help here. Search what is a lifafa and you get Walmart, Etsy and a cluster of AI-generated pages about an invented phrase. Search what is nek and you get almost nothing at all. Everyone writing about this is selling envelopes, sarees or gift boxes.",
      },
      {
        p: "So here it is written down. What the object is, what the number means, what the number is worth, and the parts where I am going to tell you that the internet is repeating one press release.",
      },

      { h: "The object" },
      {
        p: "A lifafa is an envelope for money. It is small, roughly the size of a folded banknote, and you open it from the short end. That is the whole design brief.",
      },
      {
        p: "What it is made of depends entirely on what you paid. At the bottom of the market it is thin printed paper, around 80 gsm, and sells wholesale for one or two rupees a piece. In the middle, which is what most people actually buy, it is a thick handmade paper, ten to twenty rupees. At the top it stops being paper: silk, jute, gota-embroidered cloth from Jaipur, and at three hundred rupees a piece a whole acrylic thing that is really a keepsake with a slot in it.",
      },
      {
        p: "The printing is occasion-specific rather than generic. Ganesha and Radha-Krishna for a Hindu wedding, paisley and bandhani, gold foil, and separate lines for Eid and for Raksha Bandhan. You buy the envelope for the event.",
      },
      {
        p: "In Tamil Nadu it is a different object with a different name, the moi cover, and it is sold in packs of a hundred and four hundred rather than ten. That is not a manufacturing quirk. It is because of what Tamil weddings do with them, which is further down and is the most interesting thing on this page.",
      },

      { h: "The extra rupee" },
      {
        p: "The total is never round, and there are two different ways it gets there, which is the bit that confuses people.",
      },
      {
        p: "Small amounts carry the one inside the number. ₹101, ₹201, ₹251, ₹501. You count out that exact figure and you are done.",
      },
      {
        p: "Larger ones do not. You put ₹1,100 in, or ₹2,100, or ₹5,100, or ₹11,000, and those are the numbers people say out loud. What makes the total odd is the one-rupee coin already stuck to the front of a traditional lifafa. ₹1,100 plus the coin is ₹1,101.",
      },
      {
        p: "So the coin is not a decoration and it is not a bonus. It is doing the arithmetic, and it is the reason nobody counts out ₹1,101 in notes. Buy the envelope with the coin on it and the sum comes out right on its own.",
      },
      {
        p: "Everybody in India knows this and almost nobody agrees on why. Here are the explanations people actually give.",
      },
      {
        ul: [
          "Zero is an ending and one is a beginning. A round number is poora, complete, finished, and finished is not a thing you wish on a marriage.",
          "501 will not divide evenly between two people, so the blessing cannot be split.",
          "The extra rupee is a small unsettled debt, and a debt means you have to meet again.",
          "The big amount is to spend and the one rupee is a seed, to be kept or invested or given away.",
          "The coin is metal, and Lakshmi is worshipped in metal, so the coin is the goddess coming into the house. This one appears throughout the Hindi press and almost never in the English blogs.",
          "Odd numbers are agents of motion in jyotish, and even numbers sit still.",
        ],
      },
      {
        p: "Take that list as a list. There is no single correct answer and anyone who tells you there is has read one article. Which brings up something worth knowing about the sourcing.",
      },
      {
        table: {
          head: ["What you put in", "The coin", "The total"],
          rows: [
            ["₹101", "already in the number", "₹101"],
            ["₹251", "already in the number", "₹251"],
            ["₹501", "already in the number", "₹501"],
            ["₹1,100", "on the envelope", "₹1,101"],
            ["₹2,100", "on the envelope", "₹2,101"],
            ["₹5,100", "on the envelope", "₹5,101"],
            ["₹11,000", "on the envelope", "₹11,001"],
          ],
        },
      },
      {
        note: "Most of the English-language internet on this traces to one wire story, published in March 2024 with no byline, no named expert and no region. It runs on The Tribune, India New England, Gujarat Samachar and Prokerala under different headlines. Four pages, one source.",
      },
      {
        p: "The two genuinely independent accounts I could find are both from a folklore archive, both from Indian-American households, and they disagree with each other. One says amounts end in one or five. The other says it must end in one, and that ending in a ten makes it a full stop. Neither matches the blogs.",
      },
      {
        p: "One more thing the explainers all get wrong by omission. The coin is not always hand-glued by a person who cares. Envelopes ship from the factory with the coin already attached, and there is an entire product category called printed coin envelopes where the coin is ink. All three exist and nobody writes about it.",
      },

      { h: "The rule nobody tells you until you break it" },
      {
        p: "Even amounts are condolence money.",
      },
      {
        p: "₹100, ₹500, ₹1,000, clean and round, are what you hand over at a funeral or take to a house in mourning. Not as an insult, and not because even is unlucky. Because even reads as complete, and completeness is the right wish for a death and the wrong one for a wedding.",
      },
      {
        p: "So the operative rule is not really give odd. It is drop the one. At a wedding you add the rupee. In a house of grief you take it off, and you do not bring the coin at all.",
      },
      {
        p: "This is the single thing on this page most likely to cause you an actual problem, and it is the one least covered in English. If you search it in English you will mostly get Chinese and Singaporean funeral customs, which are a different tradition entirely and will lead you wrong.",
      },

      { h: "How much" },
      {
        p: "Ranges, because a single number would be a lie. These are what people in India report giving at a wedding.",
      },
      {
        table: {
          head: ["Who you are", "In India", "Roughly"],
          rows: [
            ["Colleague or acquaintance", "₹1,000 to ₹3,000", "$10 to $31"],
            ["A polite minimum for anyone", "₹1,100 or ₹2,100", "$12 to $22"],
            ["Close friend or cousin", "₹5,100", "$53"],
            ["Extended family", "₹5,000 to ₹15,000", "$52 to $157"],
            ["Close family", "₹10,000 to ₹50,000", "$105 to $524"],
          ],
        },
      },
      {
        p: "If you are giving in dollars from abroad the ladder is different and much higher against local incomes: fifty to a hundred for a colleague, seventy-five to two hundred for a close friend, and $101 is the number people name as the safe default. Note that it ends in one too.",
      },
      {
        p: "There is a second rule underneath the first, and it is the one that actually governs. Whatever that family gave at your last function is the floor for what you give at theirs. If they put ₹5,000 in at your daughter's wedding, ₹1,100 at their son's is a step down and it will be noticed. In north India this is unwritten. In Tamil Nadu it is written down, in a book, by a man at the door.",
      },

      { h: "Moi, and the register at the door" },
      {
        p: "At a Tamil wedding you do not slip an envelope into a box. You hand the cash to a person sitting at the entrance with a ledger, and he writes down your name, where you are from, and the amount. Out loud, sometimes.",
      },
      {
        p: "That book is the point. It is kept. When your own function comes round, that family opens it, looks up what you gave, and gives you that or a little more. Moi is a rotating credit system that happens to look like a gift, and it has been running in some families for generations. There are apps for it now.",
      },
      {
        p: "The contrast with the north is total. North Indian shagun is discreet: a sealed envelope into a box, nobody announces anything, and the reciprocity is remembered rather than recorded. Same underlying logic, opposite manners. If somebody tells you Indian gifting works one way, they have been to one kind of wedding.",
      },

      { h: "What the money is actually worth" },
      {
        p: "Converting ₹5,100 to fifty-three dollars is technically correct and tells you almost nothing, because fifty-three dollars does not buy in New Jersey what five thousand rupees buys in Jaipur.",
      },
      {
        table: {
          head: ["Amount", "USD", "GBP"],
          rows: [
            ["₹251", "$2.63", "£1.94"],
            ["₹501", "$5.24", "£3.87"],
            ["₹1,100", "$11.52", "£8.51"],
            ["₹2,100", "$21.98", "£16.25"],
            ["₹5,100", "$53.37", "£39.45"],
            ["₹11,000", "$115.08", "£85.06"],
            ["₹21,000", "$219.70", "£162.39"],
          ],
        },
      },
      {
        note: "Rates as at 31 August 2026: ₹1 = $0.0105 = £0.0077. Checked against two independent providers, which agreed to within 0.2 percent. They will have moved by the time you read this.",
      },
      {
        p: "Better anchors. ₹5,100 is roughly a fortnight's pay for a part-time domestic worker in Delhi. It is about seven sleeper-class tickets from Delhi to Mumbai, which is a sixteen-hour journey. It is twenty restaurant thalis. That is what the number means to the person opening the envelope, and it is not the same information as fifty-three dollars.",
      },
      {
        p: "It also means the diaspora default of $101 is, in rupees, close to ₹9,700, which sits at the top of the close-family band. That is not wrong. It is just worth knowing you are giving at that level rather than a modest one.",
      },

      { h: "Nek is not quite the same as shagun" },
      {
        p: "Shagun is the general word: an auspicious gift, usually money, marking an occasion. Nek is narrower and more fun. Nek is the money that changes hands during a wedding for doing something specific.",
      },
      {
        ul: [
          "Joote ka nek, from the groom to the bride's sisters, to get his shoes back after they have hidden them. One account puts it at ₹1,000 per cousin, and that account is from 2014, so adjust.",
          "Mehndi ka nek, to the artist who did the henna.",
          "Kajal ka nek, to the aunts who put kajal on to keep the evil eye off.",
          "Dwaar rokne ka nek, to the groom's sisters for standing in the doorway and not moving.",
          "Vinayak ka nek, to the bride's brothers at the Ganesh puja.",
          "Muh dikhayi, from the groom's family to the new bride, the first time they properly look at her face.",
        ],
      },
      {
        p: "The mehndi one carries a rule worth understanding. The artist is not paid. She is nek'd, which is a different verb and a different relationship, and it is given as shagun rather than as a fee. In practice a professional bridal mehndi artist in an Indian city charges between three and eleven thousand rupees and everyone knows it. Both of those things are true at once, and the fiction is load-bearing.",
      },

      { h: "What to bring, and what people get wrong" },
      {
        p: "If you are going to somebody's house rather than to a wedding, the default is a box of mithai. Kaju katli is the safe one. A respectable box is five hundred to sixteen hundred rupees, which is five to seventeen dollars. Dry fruits do the same job and read slightly differently: mithai says sweetness, dry fruit says prosperity.",
      },
      {
        p: "Three things you may have read that are worth correcting.",
      },
      {
        h3: "Fruit is fine",
      },
      {
        p: "Bringing fruit to somebody's house in India is completely normal and carries no get-well-soon undertone. If you are hesitating over it, that hesitation is imported. Take the fruit.",
      },
      {
        h3: "The sets-of-four thing is not Indian",
      },
      {
        p: "You will find etiquette listicles telling you never to give four of something. That is tetraphobia, and it comes from Sinitic languages where the word for four sounds like the word for death. There is no Indian equivalent. Where Indian sources are wary of numbers they name eight and seventeen, both ruled by Saturn, and sometimes three. And thirteen is auspicious here; the fear of thirteen is the import.",
      },
      {
        h3: "Never wear white is a regional rule sold as a national one",
      },
      {
        p: "In north Indian Hindu practice white is mourning, and the advice to avoid it is sound there. It is not sound everywhere. In Kerala the kasavu, cream with a gold border, is the bridal saree and the Onam garment. A Bengali bride wears red and white. A Parsi bride wears white. So the useful question is not what colour, it is whose wedding.",
      },
      {
        p: "The things that do hold: take your shoes off at the door, ask before bringing alcohol because plenty of households are dry and two states are, check on leather if the family is Jain or strictly vegetarian, and arrive fifteen to thirty minutes after the time on the invitation. Being punctual to an Indian home invitation is the mild rudeness.",
      },

      { h: "Where I am guessing" },
      {
        p: "Two things I believe from experience and could not corroborate anywhere, so treat them as mine rather than as fact.",
      },
      {
        p: "Nobody gives ₹3,100 or ₹4,100. The ladder is 251, 501, 1,100, 2,100, 5,100, 11,000, 21,000, and three and four are simply not on it. I could not find a single source, English or Hindi, that says this or explains it. My own guess is that it is about notes rather than numerology: ₹2,100 is two thousand-value notes and a hundred, ₹5,100 is five five-hundreds and a hundred, and since demonetisation there is no clean way to build ₹3,100 out of what is in your wallet.",
      },
      {
        p: "And the coin being stuck on by hand, at home, with glue. I have seen it. The retail catalogues say most of them arrive that way from a factory. Both are happening and the sentimental version is not the common one.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "How much should I give at an Indian wedding if I am not Indian?",
            a: "The same as anyone else at your level of closeness, so ₹1,100 to ₹2,100 for a colleague and around ₹5,100 for a close friend. Giving from abroad, $101 per person is the number people name, though in rupees that lands at the top of the close-family band. Nobody expects a different amount from you because you are a guest from outside.",
          },
          {
            q: "Why does it have to end in a one?",
            a: "Because a round total reads as complete, and complete is what you want at a funeral rather than a wedding. Note it is the total, not the notes: you hand over ₹1,100 and the coin already on the envelope makes it ₹1,101. Only the small amounts, ₹101 and ₹501, carry the one themselves.",
          },
          {
            q: "Do I have to use an actual envelope?",
            a: "At a wedding, yes, and they cost a few rupees. Cash handed over loose is not the gesture. If you are far away and sending it digitally, the envelope is the part that goes missing, which is the whole reason this site exists.",
          },
          {
            q: "Can I give a gift instead of money?",
            a: "You can, and at a wedding you will be in a small minority. Cash is not considered impersonal here the way it is in the West; it is the normal, expected and useful thing, and it spares the couple a third toaster. A gift alongside a smaller amount reads warmly. A gift instead of any envelope reads as though you did not know.",
          },
          {
            q: "What do I do at a Tamil wedding?",
            a: "Hand the cash to the person with the register at the entrance and give them your name and your town. It will be written down, and it will be remembered when your own function comes. Do not look for a box to slip it into.",
          },
          {
            q: "Is it rude for me to wear Indian clothes?",
            a: "Every published source says no, please do, you were invited. Worth knowing that almost all of them sell or rent Indian clothes, and I could not find a dissenting voice anywhere. It is also never required: a bright Western outfit in a festive cut is entirely correct.",
          },
        ],
      },
    ],
  },
  {
    slug: "hariyali-teej-guide",
    title: "Hariyali Teej: the green one, and what sindhara is really for",
    date: "2026-08-31",
    updated: "31 August 2026",
    tag: "Festivals",
    art: "teej",
    excerpt:
      "Hariyali Teej 2026 was Saturday 15 August. Green bangles, a jhoola, and a box of ghevar arriving from your mother. This is the one Teej that is actually old, and the one the other two get confused with.",
    body: [
      {
        p: "Somewhere in Sawan a box turns up. Ghevar, gujiya, maybe feni, a set of green bangles, and something to wear. Your mother sent it, and if you are recently married it will be the first year it happens, and nobody will have explained that it was coming.",
      },
      {
        p: "That box is sindhara, and it belongs to this Teej. Not the next one, not the one after. Which matters more than it sounds, because there are three festivals called Teej inside about a month and a half, and the amount of confusion between them is genuinely large.",
      },
      {
        p: "This page is Hariyali: the green one, the one with the jhoola, and the only one of the three that is properly old.",
      },
      {
        note: "Hariyali Teej 2026 was Saturday 15 August. Shravana shukla tritiya, tithi from 18:47 on 14 August to 17:29 on 15 August. It is also called Sawan Teej, Chhoti Teej and Sindhara Teej.",
      },
      { photo: "hariyaliTeej", caption: "Dressed for Hariyali Teej." },

      { h: "Why this is the old one" },
      {
        p: "P. V. Kane catalogued around eleven hundred vratas and named the text each came from. Hariyali is in there, as Madhusrava, on Shravana shukla tritiya, and he sources it to Hemadri, which is thirteenth century. He also notes it was well known in Gurjaradesh, Gujarat.",
      },
      {
        p: "The other two do not do nearly as well. Hartalika is missing from the twelfth and thirteenth century compendia entirely and only turns up in digests from the 1600s. Kajari gets one line in a legal digest of 1612, no Purana at all, and that digest says the puja is to Vishnu.",
      },
      {
        p: "So if somebody tells you the Teej cycle is ancient, the honest version is that one of the three reaches the thirteenth century and the other two are early modern. Hariyali is the one with the receipts.",
      },
      {
        p: "James Tod is worth reading on it too, from 1832, because he watched it. He calls it the Tij, says it is sacred to Parvati as the day she was reunited with Shiva after her austerities, and then describes Jaipur: red clothes worn by everybody, the Raja presenting red cloth to all his chiefs, and an image of Parvati richly dressed and carried on a throne by women singing, with the prince and his nobles walking behind.",
      },
      {
        p: "And one line that has not changed in two hundred years: on this day, fathers present red garments and stuffs to their daughters.",
      },

      { h: "The green" },
      {
        p: "Hariyali means green, and it is not decorative. Sawan is when the rain has finally come and everything that was dust in June is green again. You are wearing the weather.",
      },
      {
        p: "So: a green saree or suit, green bangles, a green bindi, mehendi. Bandhani and leheriya both belong here, leheriya especially, because those diagonal stripes are meant to be rain. In Jaipur the leheriya odhni is the Teej thing and you will see it on half the city.",
      },
      {
        p: "Green is the colour of the month rather than of the goddess, which is why Tod finds everybody in red at the Jaipur procession while the women are in green. Both are correct. The red is for Parvati and the green is for Sawan.",
      },
      {
        p: "Glass bangles specifically, and a lot of them, and this is the one part where people get quietly competitive. Chudi ka set poora hona chahiye.",
      },

      { h: "The jhoola" },
      {
        p: "A swing is hung from a tree or a beam, decorated with flowers, and women take turns on it and sing. It is the single most photographed thing about this festival and the least explained.",
      },
      {
        p: "What it is doing there: Sawan is the month a married daughter traditionally goes back to her mayka, and the jhoola is what she does when she gets there, with the women she grew up with. The songs that go with it are about exactly that. Coming home, and the fact that it is temporary.",
      },
      {
        p: "In Punjab the same festival is Teeyan and it runs for days rather than one, with giddha rather than swing songs, and it is explicitly the fortnight the daughters come back.",
      },
      { photo: "teeyanGiddha", caption: "Giddha at Teeyan, the Punjabi Teej." },

      { h: "Sindhara" },
      {
        p: "The box. It goes from a mother to her married daughter, in Sawan, at her sasural, and it is the reason Hariyali Teej is also called Sindhara Teej.",
      },
      {
        p: "What is in it, broadly: ghevar above all, then gujiya, feni, mathri. Green bangles. Something to wear, usually a saree or a suit. Mehendi. And cash, because there is always cash.",
      },
      {
        p: "Ghevar is the load-bearing item and it is genuinely seasonal, made and sold for these few weeks and then gone. In a lot of families the arrival of ghevar is how you find out Teej is close.",
      },
      {
        p: "Who sends it varies more than the lists admit. The straightforward version is mother to daughter. In many households it is the saas who sends it to her daughter-in-law, or the elder women of the house between them, and in some it goes both ways. Jaisa aapke ghar mein chalta hai, wahi theek hai.",
      },
      {
        p: "The amounts and who gives what are written up separately in the Teej sindhara guide rather than repeated here.",
      },

      { h: "The fast, and whether men keep it" },
      {
        p: "Married women fast for their husbands. Unmarried girls fast for a good one. That formulation is identical everywhere and it is worth noticing how little it varies, because almost nothing else about these festivals is that consistent.",
      },
      {
        p: "Nirjala in the strictest version, phalahari in most houses, and plenty of people keep it on water. There is no scriptural ruling to appeal to, so the rule in practice is whatever your family does.",
      },
      {
        p: "Do husbands fast? Not traditionally, and there is no record of it anywhere we looked. What is recorded is that they were expected to be present. Tod, writing about the Bundi Teej, says it was the day on which a Rajput must visit his wife, and the vassals were sent home from court to keep it.",
      },
      {
        p: "That said, plenty of couples now do it together, the same way karwa chauth has changed. Nothing in the festival forbids it. If you are the husband and you want to keep it, keep it, and expect exactly one relative to have an opinion about that.",
      },

      { h: "The confusion, and how to end it" },
      {
        p: "Three festivals, all called Teej, inside about six weeks. Here they are side by side.",
      },
      {
        table: {
          head: ["", "When", "What it is", "The gift"],
          rows: [
            [
              "Hariyali",
              "Shravana shukla 3",
              "Green, jhoola, sindhara. The light one.",
              "Sindhara, from the mayka",
            ],
            [
              "Kajari",
              "Bhadrapada krishna 3, three days after Rakhi",
              "Nirjala, the talai, the bara. Marwari and Rajasthani.",
              "Bayna, to the saas",
            ],
            [
              "Hartalika",
              "Bhadrapada shukla 3",
              "The strictest. Nirjala plus a night vigil.",
              "None specific",
            ],
          ],
        },
      },
      {
        p: "Hindi Wikipedia's own Hariyali Teej article says that in eastern Uttar Pradesh the festival is celebrated as Kajali Teej, which collapses two festivals a fortnight apart into one. That is the sort of thing that then gets copied everywhere.",
      },
      {
        p: "The clean way to hold it: Hariyali is in Sawan and it is green. Kajari is three days after Rakhi and it is a fast that ends on the moon. Hartalika is a fortnight after Kajari and it is the hard one.",
      },
      {
        p: "Rajasthan splits along the same line, royally. Jaipur keeps Hariyali, with the Parvati procession Tod watched. Bundi keeps Kajli, a fortnight later, with its own. Two Teej processions, two cities, and an argument about which is the real one that has been running for two centuries.",
      },

      { h: "What people forget it also was" },
      {
        p: "Teej was a fair, and it was where young unmarried women went.",
      },
      {
        p: "Tod records the fair of the Tij at Pipar in Marwar, and the reason he records it is a raid in 1516 in which a hundred and forty of the maidens of Maru were carried off from it. Marwari bards were still singing that three hundred years later, in his hearing.",
      },
      {
        p: "William Crooke, writing in 1896 about Saharanpur, describes something different again and much smaller: at the rainy-season Tij the girls put on their best clothes, go to a tank, drop offerings in honour of Khwaja Khizr, then split into two parties and stage a mock wedding around a tulsi or a pipal, teasing each other throughout.",
      },
      {
        p: "A children's game with an offering to a Muslim saint in the middle of it, filed under Teej. Which is a useful reminder that a festival is not one thing that has been slowly forgotten. It is many things, and different ones survive in different places.",
      },

      { h: "If you are far from home" },
      {
        p: "Sindhara is a box that arrives. The whole point of it is that it comes from your mother's house to the house you married into, and the distance is built into the gesture.",
      },
      {
        p: "So the version that works from another city, or another country, is not complicated. Send the ghevar if you can get it sent. Send the bangles. And send the money as its own thing rather than folded into the mithai order, because the mithai is a present and the cash is shagun and they are doing different jobs.",
      },
      {
        p: "Ends in a one, as always. ₹501 on its own, or ₹1,100 with the coin on the envelope making it ₹1,101.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is Hariyali Teej the same as Hartalika Teej?",
            a: "No, and they are a month apart. Hariyali is Shravana shukla tritiya, Hartalika is Bhadrapada shukla tritiya. Hariyali is the green, swing-and-sindhara one; Hartalika is the strict nirjala fast with a night vigil.",
          },
          {
            q: "Who sends sindhara, and to whom?",
            a: "Most commonly a mother to her married daughter at her sasural, during Sawan. In many families the saas sends it to her daughter-in-law instead, or the elder women send between themselves. All of these are normal, and the version your family does is the right one.",
          },
          {
            q: "What actually goes in sindhara?",
            a: "Ghevar above everything, then gujiya, feni and mathri; green bangles; a saree or suit; mehendi; and cash. Ghevar is seasonal and only made for these few weeks, which is why its arrival is how a lot of people find out Teej is near.",
          },
          {
            q: "Do I have to wear green?",
            a: "Nothing bad happens if you do not, but the festival is named for it. Green saree or suit, green bangles, green bindi. Leheriya is the Rajasthani version, and its diagonal stripes are meant to be rain.",
          },
          {
            q: "Can a husband keep the fast?",
            a: "Traditionally no, and there is no historical record of men fasting for this one. What the record does show is that they were expected to be home for it. Plenty of couples now fast together anyway, the way karwa chauth has changed.",
          },
          {
            q: "Why is it called Sindhara Teej?",
            a: "For the sindhara itself. It is one of the few Indian festivals named after the gift rather than the god or the day, which tells you where its centre of gravity is.",
          },
        ],
      },
    ],
  },
  {
    slug: "kajari-teej-guide",
    title:
      "Kajari Teej: the bara, the talai, and why the fast does not break at sunset",
    date: "2026-08-31",
    updated: "31 August 2026",
    tag: "Festivals",
    art: "bara",
    excerpt:
      "Kajari Teej 2026 is Monday 31 August. Every page gives you the tithi and a katha. Almost none tells you what the thing in the tin is, why there is a pond made of mud against your wall, or when you are actually allowed to eat.",
    body: [
      {
        p: "Somewhere around seven in the evening, somebody who has not had water since before sunrise starts eyeing the kitchen. The sun has gone down. That is usually when it is enough. Not today.",
      },
      {
        p: "Kajari Teej falls in the krishna paksh, and in the dark fortnight the chaand comes up late. Nine, sometimes later. So a vrat that felt like a normal day-long fast at 6am turns out to have three more hours in it than anybody warned you about.",
      },
      {
        p: "That is the part people get caught by. The rest of this page is the part nobody writes down at all: what the decorated thing in the katordan actually is, who it was made by and why it came from your mayka, what the little pond of mud against your wall is doing there, and what you are supposed to see in it.",
      },
      {
        note: "Kajari Teej 2026 is Monday 31 August, Bhadrapada krishna tritiya. If you never want to look it up again: it is three days after Rakhi. Panchangs disagree on the exact start and end of the tithi, some giving 09:35 to 08:50 and others 21:39 to 20:53, but they all land the festival on the same day. It is also called Kajali Teej, Badi Teej and Satudi Teej, and that last name is the clue about what matters most.",
      },

      { h: "Which Teej this is" },
      {
        p: "There are three. They are all called Teej, they all sit in the monsoon, and being told “it’s Teej” narrows it down to almost nothing. This is the middle one.",
      },
      {
        table: {
          head: ["", "When", "What it is like"],
          rows: [
            [
              "Hariyali Teej",
              "Shravana, shukla tritiya",
              "Green, jhoolas, new bangles. The light one.",
            ],
            [
              "Kajari Teej",
              "Bhadrapada, krishna tritiya",
              "Named after the kajri, which are songs about missing somebody. Nirjala, and the moon decides when you eat.",
            ],
            [
              "Hartalika Teej",
              "Bhadrapada, shukla tritiya",
              "The strictest. Nirjala plus a night vigil, and the sand-linga story.",
            ],
          ],
        },
      },
      {
        p: "The Kajari complex that follows here, the talai and Neemdi Mata and the bara, is Marwari and Rajasthani. That is worth saying at the top, because a lot of pages present it as pan-north-Indian and it is not. More on that further down.",
      },

      { h3: "Why two panchangs print two different months" },
      {
        p: "If you have seen this called Shravana krishna tritiya somewhere else, nobody is wrong. A Hindu month has a bright fortnight and a dark one, and everybody agrees on that. What India has never agreed on is where to cut the month.",
      },
      {
        p: "Most of the north cuts at the full moon. The west and south cut at the new moon. For a bright fortnight this makes no difference at all: it falls in the same month either way. For a dark fortnight it makes a month of difference, because one system is seeing the beginning of a month and the other is seeing the end of the previous one.",
      },
      {
        p: "Kajari is the only one of the three Teejs in a dark fortnight. So it is the only one that gets two names for one day, and the only one people quietly mis-shelve. Hariyali and Hartalika are both bright-fortnight and nobody argues about them.",
      },
      {
        p: "This is not a modern muddle either. Kane records the split inside his own entry for the festival, four hundred years ago.",
      },

      { h: "The talai, and the pond it is standing in for" },
      {
        p: "In the morning, against a wall, you build a small pond out of mitti or gobar. Sticky clay, kneaded stiff like atta, with a little haldi and kumkum worked into it. You raise a border all the way round and press it hard, because it has to hold liquid for a whole evening. On one side of the rim you shape a seat for the diya.",
      },
      {
        p: "It has to be built in the morning. If it is still damp by evening the milk seeps out through the base and you spend the puja mopping.",
      },
      {
        p: "This is called the talai, or nadi in Marwari, and once somebody tells you what it is for it stops looking like a craft project. Ek Jodhpur wali ne apne video mein bilkul theek kaha: talai is a copy of a talaab, and women used to go to an actual pond to do this puja. Sheher mein talaab kahaan se laayein. So the pond comes to the house.",
      },
      {
        p: "Into it goes kaccha doodh, unboiled, and water. Not panchamrit, which turns up in the generic samagri lists that news channels read out and in almost none of the households actually filming themselves do this. If your family adds it, add it. Raw milk is what the Marwari practice uses.",
      },
      {
        p: "A neem twig is broken off and planted, either into the clay at the edge or into a small pot packed with gobar beside it. One thing worth being clear about, because it is easy to get backwards: the neem tree is not being worshipped. The twig is an instrument in this puja, not the object of it.",
      },
      {
        p: "Neemdi Mata is the twig, or a plain clay pindi seated beside it, or, if somebody in the house has the hands for it, a modelled clay figure with a pinched nose and jhumke, dried through the afternoon and painted. All three are normal.",
      },

      { h: "What she is dressed in" },
      {
        p: "This is the part that gets under your skin a little. A woman keeping a fast for her marriage spends the afternoon doing somebody else’s shringar.",
      },
      {
        p: "Neemdi gets roli, haldi, akshat, flowers. Then mehendi, kajal, bangles, a bindi, a red chunri. Kalava tied round the twig as her clothing. Haldi specifically because, as one of them puts it, haldi is a suhaag ka soochak.",
      },
      {
        p: "On the wall behind, a sheet of paper goes up, stuck with mehendi, and takes a swastik in roli and thirteen tikkis each of roli, mehendi and kajal, plus a tiny jhoola made of lachcha thread. It stays there for a year and comes down when next year’s goes up.",
      },

      { h: "The bara" },
      {
        p: "The thick pale disc in the metal tin, ringed with badam and kaju, a silver varak in the middle. Bara, or baro. Also pinda, or sattu pinda, and the same person will use both words in one sentence.",
      },
      {
        p: "Kajari Teej’s other name is Satudi Teej. The festival is named after this. That should tell you where it sits.",
      },
      {
        p: "Here is the thing about it that changes how the whole day reads. You did not make it. It was made in your mayka and sent to you, tied up in red cloth with a moli round it, and this evening you will break an eighteen-hour fast on food from your mother’s house.",
      },
      {
        p: "And which grain it is made of tells you who it is for. Chana dal ka bara goes to the daughter. Chawal ka bara goes to the jawai. Gehun becomes laddus for the children. Ek hi kitchen se teen alag cheezein, teen alag logon ke liye.",
      },

      { h3: "How it is actually made" },
      {
        p: "The grain is bought unpolished, and because it is monsoon it does not get washed, it gets wiped with a damp cloth and spread under a fan overnight. Then each grain is dry-roasted separately, low flame, small batches. Chana dal is the difficult one and will blacken and turn bitter if you walk away; gehun tells you it is ready by crackling. Two and a half kilos takes about two hours, and the burnt grains get picked out.",
      },
      {
        p: "Roast, then grind. Not the other way round, and somebody asked her in the comments so she came back to correct it. Grind it dardara, coarse, so it does not glue itself to the roof of your mouth. Then boora, crushed elaichi, and warm ghee worked in by hand in stages. There is no fixed ghee measurement and there was never going to be one. Jab laddu banne lag jaaye, tab samajh lo ghee perfect hai.",
      },
      {
        p: "Then thapna: it is pressed by hand into a katordan, the round lidded tin, and set as a disc rather than moulded. Alongside it you make batliyan, five small ones, ek pooja ki aur chaar baantne ke liye.",
      },
      {
        table: {
          head: ["", "A Jodhpur bara, per 1.25 kg", "A Maheshwari samaj pinda"],
          rows: [
            [
              "Flour",
              "700 g coarse roasted chana dal",
              "3 cups roasted chana dal",
            ],
            ["Sugar", "300 g boora", "1.5 cups, half the flour"],
            ["Ghee", "250 g, melted and lukewarm", "0.75 cup, half the sugar"],
          ],
        },
      },
      {
        p: "The measure is sava, one and a quarter. Sava kilo for a full one, sava pav for a small one. One woman turned three kilos of dal into two big baras, two small ones and a set of batliyan, and it took her five hours.",
      },

      { h3: "The decoration is a vocabulary, not a free hand" },
      {
        ul: [
          "Silver varak, laid on a round gota first and then pressed into the centre. Where there is no gota, a supari sits in the middle instead.",
          "A silver coin set into it. In Jodhpur that is standard, and some people use gold.",
          "A whole dried gola in the middle, and dip it in ghee before it goes on. A dry coconut will quietly pull the ghee out of all the sattu around it.",
          "Badam and kaju set in rings, with a single pista between each pair.",
          "Laung and elaichi, and these are not optional. One woman gives her grandmother’s reason: laung buri shaktiyon ko door rakhta hai.",
          "A swastik, drawn from the outside in. You do not cut through the middle of it.",
          "Kesar soaked in a little water, a bindi of it at the centre, then flicked across the whole surface. Khushboo bhi aa jaati hai.",
          "Colour, if you want it, let down with melted ghee. Never with water.",
          "Flowers and leaves modelled out of the sattu dough itself, rolled thin on ghee-smeared polythene and scored with a knife.",
        ],
      },
      {
        p: "Everything about that list says it is going to be looked at before it is eaten, which is exactly what happens.",
      },

      { h: "Looking into the water" },
      {
        p: "The diya on the rim is made with a long batti on purpose, because after the puja you sit and look at the reflections in the milk-water. One at a time, and you say something to each one.",
      },
      {
        p: "Talai mein nimbu dikhyo, dikhyo jaiso tootyo. The lemon appeared to me, and may it appear the same way when it breaks.",
      },
      {
        p: "Lemon first, everyone agrees on that. Then kakdi, then fruit, then the neem, then the flame itself, a string of moti, the nath, the maang tika, the mangalsutra, your bangles, the mehendi on your hands, the pallu of what you are wearing. In some houses two women sit facing each other and do it as call and response.",
      },
      {
        p: "How many times each is not settled. One Marwari version does four, another household films themselves doing seven, and seven takes a while: kaafi time lag jaata hai pooja mein.",
      },
      {
        p: "There is a counting rule that only one source mentions and it is the best small thing here. The number of things you look at has to come out even. Agar ek kam pad gaya, ek phool add kar lo, ek moti, koi bhi fruit. Number mein hi dekhna hota hai.",
      },
      {
        p: "What it means is the same everywhere. As these appear to me tonight, may they still be mine on the last day.",
      },

      { h: "Breaking it" },
      {
        p: "Before any of that, at the other end of the day: dhamodi, a meal before sunrise. It is the same idea as sargi on karwa chauth. Mithai and fruit, and then nothing.",
      },
      {
        p: "In the evening, after the katha, the arghya. The same lota that sat through the story, with moli at the neck, a swastik, thirteen roli tikkis, and the thirteen wheat grains you were holding dropped into it. Water poured towards the moon, roli and akshat offered, and then four turns in place. Sone ki saankli, motiyon ka haar, chaand ne arak deta, jeevo veer bhartaar.",
      },
      {
        p: "Then the bara. And here is a rule about the words, not the food: it is never cut, and nobody says the word cut. It is badhana, to increase, or pasna. Chaakoo se nahi kaatte.",
      },
      {
        p: "A man of the house does it, husband or son or brother or a child, with a silver coin. Five pieces or seven, depending on whose house you are in. If the husband is away, the saas or the nanad does it.",
      },
      {
        p: "The sattu is the first thing eaten, off an aak leaf. Then, from a little dona folded out of aak leaves, raw milk seven times and water seven times. Doodh se dhaai, suhaag se kohni dhaai. Filled with milk, never filled enough with suhaag. Then the dona is torn into four and thrown to the four directions.",
      },
      {
        p: "There is a real split on what technically breaks it. The recipe and vidhi channels say the sattu, first, before anything. The vlogs and the TV bulletins show water from the husband’s hand, karwa chauth style. Both are happening in real houses.",
      },
      {
        p: "And the bayna: a small sattu, a blouse piece or a saree, shringar samagri, some cash, given to the saas with a touch of her feet. No saas, then the nanad, or a Brahmani.",
      },

      { h: "What a lot of pages get wrong" },
      { p: "Three things, and the third is the one that matters." },
      { h3: "Bundelkhand is a different festival on a different day" },
      {
        p: "Bhujariya, or kajliya, is wheat sown in small bamboo baskets on Nag Panchami, watered daily and grown pale in the dark, swung on a jhoola and sung to. By Rakhi it has sprouted, and the shoots go on a brother’s ears when the thread is tied. The day after Rakshabandhan they are carried out on the head and immersed.",
      },
      {
        p: "That is Bhadrapada pratipada, not krishna tritiya. The Mahoba Kajli Mela hangs off this, not off Teej. In 2026 it was the 845th, and what it commemorates is a battle in 1182. Pond, seedlings and women, so it rhymes with the talai, but it is a separate rite on a separate day.",
      },
      { h3: "Eastern UP keeps the day without any of this" },
      {
        p: "Filmed in Kashi on Kajari Teej: mehendi, bangles exchanged between women, sixteen shringar, saris sent from the sasural, a nirjala fast, Shiv and Parvati, and singing. No talai, no Neemdi Mata, no sattu, no pinda in any of it.",
      },
      {
        p: "So the honest version is that several different things share this date and this name. Web pages that describe Neemdi Mata puja in UP and Bihar courtyards do not seem to have anything behind them, and Neemdi is glossed as a Marwari word by the people who keep her.",
      },
      {
        p: "As for Bihar, there is kajri singing and plenty of it, but we could not find a single record of a distinct Bihari Kajari Teej ritual. So this page does not claim one.",
      },
      { h3: "The katha everybody prints is not scripture" },
      {
        p: "Search for this festival and you get a vrat katha about a poor brahmin\u2019s wife and a moneylender, laid out as though it came out of a Purana. It did not, and this is checkable rather than a matter of opinion.",
      },
      {
        p: "P. V. Kane\u2019s History of Dharmasastra catalogues around eleven hundred vratas and names the text each one comes from. The entry for Kajjali exists. It cites the Nirnayasindhu, a legal digest of 1612, and a manuscript from the 1760s. It cites no Purana.",
      },
      {
        p: "That absence is the argument, because on the same page the entries around it read \u201cfrom Brahma\u201d, \u201cfrom Bhavishya\u201d, \u201cfrom Skanda\u201d. Naming the Purana is what Kane does. For this one there is nothing to name. And searching twenty Puranas for the word turns up kajjala every time, meaning kohl, the thing you line your eyes with.",
      },
      {
        p: "Two things in Kane\u2019s one line are worth sitting with. That 1612 digest says the day is well known in Madhyadesh, the doab, not in Rajasthan. And it says the puja is to Vishnu. Not Shiva, not Parvati. The Shiv-Parvati framing that every article gives you is not in the oldest text that names the day.",
      },
      {
        p: "It gets stranger going forward rather than back. William Crooke spent a career writing down folk practice in eastern UP, and he mentions Kajari twice in 1896, both times as a rowdy monsoon festival in the same breath as Holi, known for ribaldry. Not a fast. Not a women\u2019s vrat at all.",
      },
      {
        p: "So the suhaag vrat may well be the newest layer on this day rather than the oldest one.",
      },
      {
        p: "And Kajari is not even a special case. Kane says Hartalika is missing from the twelfth and thirteenth century compendia too and only turns up in digests from the 1600s. Only Hariyali reaches Hemadri in the thirteenth. The whole Teej cycle is late, and Kajari is the latest and thinnest of the three.",
      },
      {
        p: "Look at the moneylender story again with that in mind and it starts telling on itself. The wife sends her husband for sava kilo of chana dal. A kilogram. Puranas do not weigh their offerings in metric. And the man he robs is a sahukar with a shop, a stock and night-watchmen, and the story turns on him choosing mercy over the law. That is not scripture. That is a story about credit, told in a Marwari trading town.",
      },
      {
        p: "None of which makes it worth less. It makes it the story the festival grew itself, in the mouths of the women keeping it, and it means nobody has an authorised version to tell you your family\u2019s is wrong against.",
      },

      { h3: "Who has actually written this down" },
      {
        p: "The name turns up in English in 1832. James Tod, in the Annals and Antiquities of Rajasthan, writes of \u201cthe Kajri Tij\u201d at Bundi, the day on which a Rajput must visit his wife, and the vassals were sent home to keep it.",
      },
      {
        p: "Grierson gets the practice fifty-three years later. Bihar Peasant Life, 1885, entry 1443: women fast a day and a night on the third of Bhadon in honour of Parbati and eat sattu the next day. He never uses the name Kajari, and he does not say which fortnight, but he numbers the days elsewhere in the same book in a way that settles it. He calls the new moon the fifteenth of Bhadon, so his month starts at the full moon, so his third is the dark third. It is our day.",
      },
      {
        p: "That is the whole documented history in English: a name in 1832 and a fast with sattu in 1885. Everything else has come down the way this kind of thing usually does.",
      },

      {
        h3: "Bundi and Jaipur have been arguing about this for two hundred years",
      },
      {
        p: "Jaipur keeps Hariyali Teej. Bundi keeps Kajli Teej a fortnight later, with its own royal procession, and the Bundi story is that the golden Teej idol was taken from Jaipur\u2019s and brought here. Locals put it more directly: Bundi mein asli, Jaipur mein nakli. Tod, writing in the 1820s without telling any of that, happens to place both of the men the legend names at the Bundi Teej in person, in the right generation. The fair still runs for two weeks, and the government tourism listing puts it on Bhadrapada krishna tritiya, which is one more place English Wikipedia has it wrong.",
      },

      { h: "The songs it is named after" },
      {
        p: "Kajri are monsoon songs, and the register is domestic and teasing rather than devotional. One of the standards being sung at the Varanasi festival is Saiyan mile larkaiya, which is a wife complaining that her husband is a boy.",
      },
      {
        p: "Where the name comes from is not settled. A singer at the Chunar Kajri Mahotsav traces it to Kajla Devi, a name of Vindhyavasini, and then says what the songs are about: sanyog hai, viyog hai, jhoola hai. The other explanation is simply that kajri means black, for the clouds.",
      },
      {
        p: "They are not gone. Chunar had around seven hundred women singing in 2026. But a woman in Varanasi says the plainer thing on camera: ab log TV, mobile mein busy ho gaye, yeh sab chhootti jaa rahi hai.",
      },

      { h: "Where the money comes in" },
      {
        p: "Sindhara, the ghevar and gujiya and cash a mother sends her married daughter, belongs to Hariyali Teej and to Sawan. It is written up separately in the Teej sindhara guide. Kajari has its own thing going the other way, the bayna, which the daughter gives to her saas.",
      },
      {
        p: "The one thing worth saying twice: the total ends in a one. ₹501 has it built in; ₹1,100 gets it from the coin on the lifafa. Even totals are what gets handed over at a funeral.",
      },
      {
        p: "And if you are the one sending rather than the one receiving, send it before the moon rather than after. She has not eaten or had water all day. Something that arrives in the evening lands differently from something that arrives next morning, when it has become admin.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Can I drink water at sunset if the moon has not come up?",
            a: "Not if you are keeping it nirjala. The arghya to the chaand is what ends it, not the sun going down. Kajari falls in the dark fortnight so moonrise is late, often past nine. If that is too long, keep it phalahari from the morning rather than starting nirjala and breaking it halfway.",
          },
          {
            q: "What time does the moon rise where I am?",
            a: "It shifts by roughly forty minutes across the country and by a few more each night, so a Jaipur time is wrong in Patna. Check a panchang for your own city on the day. If it is cloudy, most households go by the calculated moonrise time and give arghya to the open sky.",
          },
          {
            q: "Is bara the same as sattu?",
            a: "Sattu is the roasted flour. The bara, or pinda, is what you make out of it: a thick disc pressed into a katordan and decorated. Batliyan are the small ones that go alongside, one for the puja and four to give away.",
          },
          {
            q: "Who makes the bara, and who is it for?",
            a: "It is made in the woman’s mayka and sent to her at her sasural, wrapped in red cloth and tied with moli. The grain says who each one is for: chana dal for the daughter, chawal for the jawai, gehun as laddus for the children.",
          },
          {
            q: "Do unmarried women keep this fast?",
            a: "Mostly it is married women, and in some families unmarried girls keep it too. Hartalika Teej is the one more commonly kept by both, so if you have been told to fast and are not married, check which Teej is actually meant.",
          },
          {
            q: "Why can the bara not be cut?",
            a: "Nobody in these households uses the word. It is badhana, to increase, or pasna. It is broken by a man of the house with a silver coin, into five pieces or seven depending on where you are, and if the husband is away the saas or the nanad does it.",
          },
          {
            q: "My family does not do the talai or Neemdi Mata. Are we doing it wrong?",
            a: "No. That whole complex is Marwari and Rajasthani. In eastern UP the same day is kept with mehendi, bangles, sixteen shringar and a nirjala fast and no talai at all, and Bundelkhand’s bhujariya is a different rite on a different tithi. Several things share this name.",
          },
        ],
      },
    ],
  },
  {
    slug: "teej-sindhara-guide",
    title: "Teej: the sindhara, and which Teej you actually mean",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "teej",
    excerpt:
      "There are three Teejs and they are months apart. Get that wrong and everything else on this page is wrong for you too, so it comes first.",
    body: [
      {
        p: "Somebody says “Teej is coming” and you have to work out which one they mean, because there are three and they are not close together. Every page that answers “when is Teej” by giving one date is wrong for roughly two thirds of the people reading it.",
      },
      {
        p: "Which one matters more than usual here, because the gifting is different for each. Hariyali Teej is about the sasural sending things to a married daughter. Hartalika Teej is a fast, and a fast is not an occasion for cash. Get the festival wrong and you will send exactly the wrong thing at exactly the wrong time.",
      },
      {
        p: "So: which Teej, then the sindhara, then what people actually give.",
      },

      { h: "The three Teejs" },
      {
        table: {
          head: ["Teej", "When", "What it is"],
          rows: [
            [
              "Hariyali Teej",
              "Shravan, around July or August",
              "Green, swings, the sasural's sindhara",
            ],
            [
              "Kajari Teej",
              "Bhadrapad, a fortnight later",
              "Observed mainly in UP, MP and Bihar",
            ],
            [
              "Hartalika Teej",
              "Bhadrapad Tritiya, around September",
              "A nirjala fast for Shiva and Parvati",
            ],
          ],
        },
      },
      {
        note: "Hartalika Teej 2026 is CONTESTED between Sunday 13 and Monday 14 September, because the tithi straddles sunrise and regional panchangs resolve it differently. Do not take a date off any page, including this one. Check the panchang your family actually uses, and if the household is fasting, that is the one that decides.",
      },
      {
        p: "If you are reading this because a Teej invitation arrived and you are not sure which, the tell is the colour. Hariyali Teej is green, everybody wears it, there are swings hung from trees. Hartalika Teej is a fast, quieter, and the women observing it will not have eaten or had water since the previous evening.",
      },

      { h: "The sindhara, which is the actual gifting tradition" },
      {
        p: "This is the part nobody outside north India knows, and it is the whole gifting structure of Hariyali Teej.",
      },
      {
        p: "The sindhara is a parcel sent by a married woman's in-laws, or in many families by her parents, in the days before Teej. It goes to her, specifically, and it typically contains green bangles, mehendi, a saree or suit, sweets (ghevar above all), and often cash.",
      },
      {
        p: "The direction is what people get wrong. It is not a gift the guest brings to the party. It travels between two households about one woman, and it is a statement that she is looked after by both. In families that keep it properly the sindhara arriving late is noticed in the same way a forgotten Rakhi is.",
      },
      { h3: "Ghevar" },
      {
        p: "It is worth knowing that ghevar is not incidental. It is the Teej sweet the way modak is the Ganesh Chaturthi sweet, disc-shaped, honeycombed, soaked. In Rajasthan and Haryana a sindhara without ghevar is an incomplete sindhara, and the good stuff sells out.",
      },

      { h: "What people actually give" },
      {
        table: {
          head: ["Who", "Common range", "Notes"],
          rows: [
            [
              "Sindhara cash, in-laws to daughter-in-law",
              "₹1,100 to ₹5,100",
              "Alongside the saree, bangles and ghevar, not instead of them",
            ],
            [
              "Parents to a married daughter",
              "₹1,100 to ₹2,100",
              "Often with her favourite mithai rather than the formal set",
            ],
            [
              "To a newly married woman, first Teej",
              "The largest of the year",
              "First Teej is a proper occasion and the sindhara is bigger",
            ],
            [
              "Between friends, at a Teej get-together",
              "₹101 to ₹501, or nothing",
              "Usually bangles or mehendi rather than money",
            ],
            [
              "To household help",
              "₹251 to ₹1,100, plus sweets",
              "Especially where they are also observing the fast",
            ],
          ],
        },
      },
      {
        p: "Ending in one, as always, and for the same reason: an even, round amount is what you hand over at a funeral, and a number ending in one cannot be divided in half, so the relationship stays open.",
      },

      { h: "Hartalika Teej is different, and cash sits oddly on it" },
      {
        p: "Hartalika Teej is a nirjala vrat, a fast without even water, kept overnight through to the next morning's puja. It is an act of devotion, not a social occasion, and the mood of the day is nothing like Hariyali Teej.",
      },
      {
        p: "So gifting is thinner and quieter. What is normal: taking suhaag samagri to an older woman in the family, or fruit and something for the vrat to be broken with. What sits badly: arriving with an envelope of cash for somebody who has been without water for eighteen hours. It is not offensive, it is just the wrong register.",
      },
      {
        p: "If you want to give money around Hartalika Teej, give it the day after, or give it as part of the sindhara at Hariyali Teej where it belongs.",
      },

      { h: "What to write" },
      {
        p: "Teej messages tend to arrive as forwards with a picture of a swing on them. If you have room to write properly, the things worth saying are the specific ones: her first Teej away from home, the year everybody got mehendi done in the wrong room, the fact that you know she is fasting and you are thinking about her at four in the afternoon when it is hardest.",
      },
      {
        p: "“Teej ki shubhkamnaayein” with nothing after it is fine and forgettable. One sentence that only you could have written is not.",
      },

      { h: "So what should you send?" },
      {
        p: "Sending a sindhara to a daughter or daughter-in-law: green bangles, ghevar, something to wear, and ₹1,100 to ₹2,100 with it. Make it bigger if it is her first Teej. Going to a Hariyali Teej get-together: bangles or mehendi cones, no envelope needed. Around Hartalika Teej: fruit and suhaag samagri, and save the cash for another day.",
      },
      {
        p: "And check which Teej before you do any of it, because the whole calendar turns on that and the internet is not reliable about it.",
      },
    ],
  },
  {
    slug: "onam-onakkodi-gifting",
    title: "Onam gifting: Onakkodi, and what to send when you cannot get home",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "pookkalam",
    excerpt:
      "Thiruvonam 2026 is Wednesday 26 August. Onam gifting runs on cloth, not cash, which is why the north Indian shagun rules give you the wrong answer.",
    body: [
      {
        p: "Here is where people from outside Kerala go wrong. You have been to Indian weddings. You know the envelope, you know the total ends in one, you know cash is the default and everybody prefers it. So for Onam you put ₹2,100 in an envelope and you feel prepared.",
      },
      {
        p: "Then you watch what actually happens on Thiruvonam morning. The elders of the house hand out cloth. A kasavu mundu for one person, a kasavu saree for another, folded, given by hand, touched to the feet on the way back. Nobody produces an envelope. Your envelope is not wrong exactly, but it is answering a question nobody asked.",
      },
      {
        p: "Onam gifting is cloth first. The whole grammar is different, and if you import the north Indian shagun rules you will get the amount right and the gesture wrong.",
      },
      {
        p: "This page covers what Onakkodi is and who gives it to whom, what to do when cash is genuinely the practical answer, what the ten days actually contain, and how people who live outside Kerala handle a festival built almost entirely around being physically in the house.",
      },

      { h: "Onam 2026: the dates" },
      {
        p: "Onam runs ten days. It opens on Atham and closes on Thiruvonam, which is the day people mean when they say Onam.",
      },
      {
        table: {
          head: ["Day", "Name", "2026 date"],
          rows: [
            ["Day 1", "Atham", "Sunday 16 August 2026"],
            ["Day 10", "Thiruvonam", "Wednesday 26 August 2026"],
          ],
        },
      },
      {
        p: "The pookkalam, the circular flower carpet at the entrance, starts small on Atham and gains a ring a day. By Thiruvonam it is at full size. It is a ten-day countdown you can see from the street, which is a better calendar than anything on your phone.",
      },
      {
        note: "Onam follows the Malayalam calendar and the Thiruvonam nakshatram, so the Gregorian date moves each year. The 2026 dates above were checked on 25 August 2026.",
      },

      {
        photo: "pookkalamThrissur",
        caption: "The pookkalam gains a ring a day for ten days.",
      },
      { h: "What Onakkodi actually is" },
      {
        p: "Onakkodi is new cloth, given for Onam. The traditional form is a kasavu mundu or a kasavu saree: off-white cotton with a gold border, which is the visual signature of the whole festival.",
      },
      {
        p: "Kerala Tourism puts its weight bluntly, describing gifting Onakkodi as just as important as making the pookkalam. That is a strong claim, because the pookkalam is the thing every photograph of Onam is of.",
      },
      {
        p: "The custom is old and documented. Rani Gouri Lakshmi Bai, who ruled Travancore in the early 1800s, gave Onakkodi to Colonel John Munro, the British Resident. When a ruler gives festival cloth to a foreign administrator, the gift is doing diplomatic work, which tells you it was already a serious social instrument two centuries ago.",
      },

      { h3: "Who gives Onakkodi to whom" },
      {
        p: "The direction is fixed and it is worth getting right, because reversing it is the actual mistake outsiders make.",
      },
      {
        ul: [
          "Elders to younger, on Thiruvonam morning. Parents to children, grandparents to grandchildren.",
          "The head of the household to everyone in it, including in many homes the people who work there.",
          "In south Kerala it is usual to extend it to close relatives beyond the immediate household.",
          "Younger to elder: not Onakkodi. You give something else, or you give your presence.",
        ],
      },
      {
        p: "So a twenty-five year old buying a kasavu saree for their mother is doing something warm and slightly out of order. The gift is fine. It is not Onakkodi. Onakkodi runs downhill.",
      },

      { h: "When cash is the right answer anyway" },
      {
        p: "Cloth assumes you know a size, a taste, and a colour, and that you can get the thing into their hands. Once any of those breaks, cash stops being a lazy substitute and starts being the sensible option.",
      },
      {
        ul: [
          "You are abroad and shipping a saree costs more than the saree.",
          "You are gifting to household staff, who may prefer to choose their own or need the money for something else entirely.",
          "You are gifting to adults whose taste in clothes you genuinely do not know.",
          "You left it late, which on a ten-day festival is easier than it sounds.",
        ],
      },
      {
        p: "If you are giving cash for Onam, the shagun conventions do apply. Keep the amount ending in a one, and avoid round even numbers, which in Hindu practice belong to condolence giving rather than celebration. ₹501, ₹1,000, ₹2,100.",
      },
      {
        p: "The useful move is to say what the money is for. Cash handed over with no frame is just money. Cash handed over as buy yourself the Onakkodi I could not pick is the actual custom, delegated. It costs you one sentence and it puts the gift back in the right category.",
      },

      { h: "What the ten days contain" },
      {
        p: "Onam is not a puja festival in the way Ganesh Chaturthi is. There is no long muhurat window everyone is working around. It is a homecoming festival, and the structure reflects that.",
      },
      {
        p: "The story is that Mahabali, the asura king whose reign was so just that the gods removed him from it, is permitted to return once a year to see his people. On Thiruvonam he visits every Malayali home. Everything you do that day is a preparation for a guest who is definitely coming: the flowers at the door, the food, the new clothes, the house being visibly at its best.",
      },
      {
        p: "That is why the festival is so painful to be away for, and why the gifting is shaped the way it is. The pookkalam says the house is ready. The Onakkodi says the people in it are ready. Both are for the benefit of somebody arriving.",
      },
      { h3: "Onasadya" },
      {
        p: "The Thiruvonam meal is served on a banana leaf and runs to somewhere between twenty and twenty-six items depending on the household and the region. It is vegetarian, it is eaten with the hands, and the order of items on the leaf is fixed rather than decorative.",
      },
      {
        p: "If you are a guest and unsure, the two things that matter: leave the leaf folded towards you when you finish, and do not ask for a spoon before you have tried.",
      },

      { h: "Being outside Kerala for Onam" },
      {
        p: "There are more Malayalis outside Kerala at any given Onam than there are people reading this page, and the festival does not travel well. It is built around a house, a doorway, a floor you can lay flowers on, and a lunch that takes a day to cook.",
      },
      { p: "What survives relocation, in rough order of how well it works:" },
      {
        ul: [
          "The sadya. Malayali associations and restaurants run them everywhere, and eating one with strangers is closer to the real thing than eating alone with the correct family.",
          "The pookkalam, scaled down. A doorway-sized one in a flat corridor still does the job.",
          "The kasavu. Wearing it is half the point, and it packs flat.",
          "The phone calls, made at the right hour rather than late at night.",
        ],
      },
      {
        p: "What does not survive is the giving, because the giving was physical. This is the gap people feel and usually paper over with a transfer.",
      },
      {
        p: "If you are sending money home for Onam, send it before Thiruvonam morning rather than during it, and send it with the words attached rather than in a separate message afterwards. A transfer that lands mid-sadya with no context gets looked at, acknowledged, and put away.",
      },

      { h: "How Onam differs from the north Indian festivals" },
      {
        table: {
          head: ["", "Onam", "Diwali or Rakhi"],
          rows: [
            ["Default gift", "Cloth (Onakkodi)", "Cash in an envelope"],
            [
              "Direction",
              "Elders to younger, downward",
              "Brother to sister, elders to younger",
            ],
            [
              "Timing",
              "Thiruvonam morning",
              "After puja, or the muhurat window",
            ],
            [
              "Cash role",
              "Practical substitute, framed as such",
              "The primary gift",
            ],
            [
              "Governing rule",
              "New cloth, given by hand",
              "The amount ends in one",
            ],
          ],
        },
      },
      {
        p: "The practical consequence: if you are gifting into a Malayali household and you only know the north Indian rules, ask. What would you like is not a failure of preparation at Onam. It is close to the correct question, because the answer is frequently a specific colour of mundu.",
      },

      { h: "So what should you send this year?" },
      {
        p: "If you can get cloth to them in time, send cloth, and send kasavu rather than something more expensive and less correct. If you cannot, send money, keep it ending in a one, and say in words that it is for the Onakkodi you would have chosen.",
      },
      {
        p: "And if you are the one at home this year with the family arriving, the gifting runs downhill and it runs on Thiruvonam morning. Everything else about Onam is negotiable by household. Those two are not.",
      },
    ],
  },
  {
    slug: "why-we-built-digi-lifafa",
    title: "Why we built Digi Lifafa",
    date: "2026-08-20",
    tag: "Why we built it",
    excerpt:
      "Because a UPI notification is not a lifafa, and the difference matters more than it sounds.",
    body: [
      {
        p: "Every family has the aunt who keeps a stack of lifafas in the almirah. Red ones with gold jaali, a few plain ones for emergencies, and always a jar of one-rupee coins beside them. Before anyone leaves for a wedding, there is the small ceremony of choosing which envelope, counting the notes, tucking the coin in last.",
      },
      {
        p: "Then everyone moved to UPI, and that whole ritual collapsed into a notification. ₹2,100 received. No paper, no coin, no handwriting, no moment of handing it over with both hands. The money arrived and the gift didn't.",
      },
      { h: "The coin is the whole point" },
      {
        p: "There is a reason shagun is ₹101 and not ₹100, ₹501 and not ₹500. The extra rupee is the part that can't be divided. It is the wish that the relationship keeps going, that this is not a settled account. Older relatives will tell you it's inauspicious to give a round number. What they mean is that a round number feels like a transaction.",
      },
      {
        p: "A UPI transfer is a round number by default. You have to work to make it not one. That small friction is exactly what got lost.",
      },
      { h: "So we made the wrapper, not the payment" },
      {
        p: "Digi Lifafa is the envelope. You pick the paper, you tap notes in one at a time the way you'd actually fill one, you add a mithai and the coin, you write what you'd say. Then you send it as a link, and they open it and the thing unfolds.",
      },
      {
        p: "The money is real, and it moves the way it always did, directly from you to them. We are not in the middle of it, and we have gone out of our way not to be. That is a design decision and a legal one, and we would have made it either way.",
      },
      { h: "What we are not building" },
      {
        p: "No wallet. No balance. No accounts. No feed of what everyone gave. No leaderboard of who is the most generous cousin. There is no version of this where we hold your money and no version where we make the amount public.",
      },
      {
        p: "One person makes one envelope for one other person. That's it. If that sounds small, it's because it is. A lifafa was always a small thing. It just wasn't a nothing.",
      },
    ],
  },
  {
    slug: "how-digi-lifafa-works",
    title: "How it works, and why we can't see your payment",
    date: "2026-08-18",
    tag: "How it works",
    excerpt:
      "Free, private, and deliberately blind to your money. Here is exactly what happens, step by step.",
    body: [
      {
        p: "The whole flow takes about a minute, and the most important part of it is the part we are not involved in.",
      },
      { h: "Making it" },
      {
        ul: [
          "Pick the paper: the pattern, the colour, the texture.",
          "Build the nek by tapping notes. They stack inside the envelope as you go.",
          "Add the one-rupee coin, and a mithai if you want one.",
          "Write your wishes. Hindi, Hinglish or English, all three work, and the font handles Devanagari properly.",
          "Enter their UPI ID.",
        ],
      },
      { h: "Paying" },
      {
        p: "When you seal it, we build a UPI intent link, a standard deep link that opens whichever UPI app you already use, pre-filled with their UPI ID and the amount. You tap it, your app opens, you pay. On Android we can send you straight into Google Pay, PhonePe or Paytm. On iPhone the generic link is more reliable, and there is always a QR code.",
      },
      {
        p: "The money goes from your bank account to their bank account. It does not pass through us. We do not have a wallet, a merchant account, or a payment gateway. There is nothing for it to pass through.",
      },
      { h: "Why we then ask you whether you paid" },
      {
        p: "This is the part people find odd, so here it is plainly: once your UPI app opens, we lose sight of you completely. UPI apps do not report back to the website that launched them. There is no callback, no webhook, no status we can check. We are blind from that moment on.",
      },
      {
        p: "So we ask. You can paste the twelve-digit reference number from your receipt, or skip it. If you paste it, we write it on the lifafa as a note, but we never call it verified, because we have not verified anything. We literally cannot. Anyone telling you they can check a UTR from a website is telling you something untrue.",
      },
      { h: "Sending it" },
      {
        p: "You get a link. Send it on WhatsApp, or however you like. They open it, the envelope unfolds, the coin and the mithai come out, and your message is there.",
      },
      { h: "What it costs" },
      {
        p: "Nothing. There is no fee, no cut, no premium tier, no ads. We do not take a percentage because we never touch the amount in the first place.",
      },
      { h: "What we store" },
      {
        ul: [
          "The envelope you made and the words you wrote.",
          "The two names, and the receiving UPI ID, needed to build the payment link.",
          "The amount, so the envelope can show it.",
        ],
      },
      {
        p: "We do not ask for your phone number, your email, your own UPI ID, or your bank details. We do not have accounts, so there is nothing to log into and nothing to leak. Individual lifafa links are never indexed by search engines.",
      },
    ],
  },
  {
    slug: "diwali-shagun-guide",
    title: "Diwali shagun: how much to give, and when it becomes taxable",
    date: "2026-08-16",
    updated: "29 August 2026",
    tag: "Festivals",
    excerpt:
      "Diwali 2026 is Sunday 8 November. Every page tells you to give ₹101 and not ₹100. None of them tell you that shagun from a cousin is taxable income.",
    body: [
      {
        p: "Here is the thing nobody mentions. You send your cousin ₹2,100 on Diwali night over UPI, she sends you ₹1,100 back, an aunt sends ₹5,100, and by the end of the week the money has gone around the family the way it always has. Except it has not, quite. Every one of those transfers is now a dated line in a bank statement with two names on it, and cash never was.",
      },
      {
        p: "For most people that changes nothing at all. For a few it changes something specific, because the Income Tax Act has a list of who counts as your relative, and your cousin is not on it.",
      },
      {
        p: "Shagun used to be invisible by default. A note pressed into a hand left no record anywhere, so the question of whether it was income never came up. UPI did not change the custom. It changed the paperwork underneath the custom, and the custom has not caught up.",
      },
      {
        p: "This page covers both halves. What to give and why every figure ends in a one, which is the part the other pages do cover. Then the part they do not: when shagun is taxable, who the Act counts as family, what to do if you employ someone at home, and why ₹49,999 and ₹50,001 are not one rupee apart.",
      },
      {
        note: "Diwali 2026 falls on Sunday 8 November. The five days run Dhanteras on Friday 6 November through Bhai Dooj on Tuesday 10 November.",
      },

      { h: "Why every amount ends in one" },
      { p: "₹101, ₹501, ₹1,100, ₹5,100. Never ₹100, never ₹500." },
      {
        p: "Small amounts carry the one inside the number: ₹101, ₹251, ₹501. Larger ones do not. You put ₹1,100 in the envelope, or ₹2,100, or ₹5,100, and the one-rupee coin already stuck to the front of the lifafa is what makes the total ₹1,101. The coin is not decoration. It is doing the arithmetic.",
      },
      {
        p: "An even amount is a closed sum. It divides cleanly, it settles, it finishes. Closed sums are what you hand over at a funeral, where the point is precisely that an account is being closed. So ₹500 to a cousin at Diwali is not stingy and it is not rude. It is the wrong category, in the way that bringing a birthday cake to a condolence visit is the wrong category.",
      },
      {
        p: "Either way the total is indivisible and therefore unfinished, and that is the message: this carries on. Which is also why a traditional lifafa comes with the coin already on it. Nobody wants you doing sums at the door.",
      },

      { h: "What people actually give" },
      {
        p: "These are the bands people report, and they vary hugely by city, community and family. The correct amount is whatever is normal in your family, and going far above that can embarrass the person receiving it rather than please them.",
      },
      {
        table: {
          head: ["Who", "Common range", "Notes"],
          rows: [
            [
              "A child in the family",
              "₹101 to ₹501",
              "Scales with age and closeness",
            ],
            [
              "Children of family friends",
              "₹101 to ₹251",
              "Given to the child, not the parent",
            ],
            [
              "Younger cousins, nieces, nephews",
              "₹251 to ₹1,100",
              "The most common case, and see the tax section",
            ],
            [
              "A newly married couple",
              "₹1,100 and up",
              "Wedding gifts have their own tax rule, Diwali shagun does not",
            ],
            [
              "Household help, driver, building staff",
              "About a month's pay",
              "Custom, not a rule. See below.",
            ],
          ],
        },
      },
      {
        p: "Direction matters more than the number. Shagun runs downward and outward: from older to younger, from the settled to the starting out, from the household to the people who keep it running. Giving upward, to a parent or a grandparent, is a different gesture and usually not called shagun at all.",
      },
      {
        p: "These bands are the ones reported most often in north and west India. Diwali gifting in Tamil Nadu, Kerala or the north-east runs on its own logic, and if that is your family, theirs is the number that counts.",
      },

      { h: "When shagun is taxable" },
      {
        p: "This is the section no other page on this query has, so here is the whole thing plainly.",
      },
      {
        p: "Under Section 56(2)(x) of the Income Tax Act, money you receive without giving anything back is taxable as Income from Other Sources if the total from everyone who is not your relative crosses ₹50,000 in a financial year. Below that, nothing. Gifts from people the Act does count as relatives are exempt at any amount, with no ceiling.",
      },
      { p: "Two details do the real damage, and neither is intuitive." },
      {
        p: "First, it is a cliff and not a taper. If your year's total from non-relatives is ₹49,999 you owe nothing. If it is ₹50,001 then the whole ₹50,001 is taxable, not the one rupee over the line.",
      },
      {
        p: "Second, the Act's definition of relative is narrower than the word is in any Indian family. This is the list, read from the point of view of the person receiving the money.",
      },
      {
        table: {
          head: ["Counts as your relative", "Does not"],
          rows: [
            ["Spouse", "Cousins, of any degree"],
            ["Brothers and sisters, and their spouses", "Nephews and nieces"],
            [
              "Your parents' brothers and sisters, and their spouses",
              "Friends",
            ],
            ["Parents, grandparents, and further up", "Colleagues"],
            [
              "Children, grandchildren, and further down",
              "Your spouse's cousins",
            ],
            ["The same list again on your spouse's side", "Anyone else"],
          ],
        },
      },
      {
        p: "Cousins are the one that catches people, because for anyone in their twenties the cousin group is exactly where Diwali money circulates most. Shagun from a cousin is a gift from a non-relative in the eyes of the Act, and it counts toward that ₹50,000.",
      },
      {
        p: "The list also runs in one direction only, which produces a result that sounds like a mistake and is not. Your uncle is your parent's sibling, so money from him to you is exempt. You are your uncle's nephew, and nephews are not on the list, so money from you to him is not. The same two people, the same amount, opposite treatment depending on which way it moved.",
      },
      {
        p: "Worth knowing for context: gifts to a couple on the occasion of their marriage are exempt whatever the amount and whoever gives them. That exemption is specific to the wedding. It does not extend to the Diwali after it.",
      },
      {
        note: "Two caveats. This is general information and not tax advice, so if a real amount is involved, ask somebody qualified. And the section numbers here are from the Income-tax Act 1961, which the Income-tax Act 2025 replaced with effect from 1 April 2026. Returns for the year just gone still follow the old law, and the thresholds described here are unchanged as far as we can establish, but the numbering is not, and anyone citing a section should check it against the new Act. Updated 1 September 2026.",
      },

      { h: "If you employ someone at home" },
      {
        p: "One month's salary is the reported custom for a cook, a maid, a driver or building staff, and many households pay it without deducting for leave taken during the year, which is part of the point. Reported custom, not survey data: nobody appears to have measured it.",
      },
      {
        p: "The tax treatment here trips people up in the opposite direction to everything above, because this is not shagun. It is employment.",
      },
      {
        ul: [
          "A cash Diwali bonus is salary. It is fully taxable in the employee's hands regardless of size, and the ₹5,000 exemption people quote does not apply to it.",
          "That ₹5,000 exemption, under Rule 3(7)(iv) of the Income-tax Rules, covers non-cash gifts, vouchers and hampers from an employer, up to ₹5,000 in aggregate across the whole financial year.",
          "It is a cliff too. Cross ₹5,000 in non-cash gifts and the entire value becomes a taxable perquisite, not just the part above the line.",
        ],
      },
      {
        p: "For most domestic staff the amounts and the income levels involved mean nothing is owed in practice. The rule is worth knowing anyway, because the version people repeat, that any Diwali bonus up to ₹5,000 is tax free, is wrong in a way that matters if the bonus is cash.",
      },

      { h: "The timing" },
      {
        table: {
          head: ["Day", "2026 date", "What usually happens"],
          rows: [
            [
              "Dhanteras",
              "Friday 6 November",
              "Buying day. Metal, utensils, jewellery.",
            ],
            ["Chhoti Diwali", "Sunday 8 November", "Morning of the main day."],
            [
              "Diwali, Lakshmi Puja",
              "Sunday 8 November",
              "Most shagun is given after the puja.",
            ],
            [
              "Govardhan Puja",
              "Monday 9 November",
              "Annakut in many households.",
            ],
            [
              "Bhai Dooj",
              "Tuesday 10 November",
              "Between siblings. Nek is given here, not on Diwali.",
            ],
          ],
        },
      },
      {
        p: "The Lakshmi Puja muhurat is an evening window on the main day, but it shifts by city and every panchang prints its own, so check one for where you actually are.",
      },
      {
        p: "Early is fine. Late is what gets noticed, particularly for Bhai Dooj, where the whole thing is a fixed day and arriving after it reads as an afterthought.",
      },

      { h: "What UPI changed, and what it did not" },
      {
        p: "It did not change the amounts, the direction, or the one-rupee rule. Those held.",
      },
      {
        p: "It changed three practical things. Shagun now leaves a record, which is what the tax section above is really about. It arrives instantly, so the timing is entirely on you and there is no post to blame. And it arrives with nothing around it: no envelope, no name written on the front, no moment where somebody puts something into your hand.",
      },
      {
        p: "The first two are fine. The third is the reason this site exists.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Does my cousin have to declare the \u20b91,100 I sent her?",
            a: "Only if her total for the year from everyone outside that relatives list crosses \u20b950,000. \u20b91,100 on its own is nowhere near it. The threshold is an aggregate across the whole financial year, not per person and not per gift.",
          },
          {
            q: "Is a UPI transfer treated differently from cash?",
            a: "No. The rule turns on the relationship and the amount, not the method. What UPI changes is that there is now a record either way, where cash left the question theoretical.",
          },
          {
            q: "I forgot on the day. Is it too late?",
            a: "Send it. Late shagun is normal and it is noticed far less than nothing. What people remember is being skipped, not being second in the queue.",
          },
          {
            q: "Can I give a round number if I add a one-rupee coin?",
            a: "Yes, and that is exactly what the coin is for. \u20b9500 plus the coin is \u20b9501. It is the total that has to be odd, not the note.",
          },
          {
            q: "I do not know their UPI ID and it feels awkward to ask.",
            a: "There is no directory to look one up in, for anybody, so asking is the normal route rather than a failure. \u201cSending you something, what is your UPI?\u201d does it without ceremony.",
          },
        ],
      },
    ],
  },
  {
    slug: "raksha-bandhan-neg",
    title: "Raksha Bandhan nek: how much to give, and why it ends in one",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "rakhi",
    excerpt:
      "Rakhi 2026 falls on Friday 28 August. The thread has rules everybody knows. The nek has rules nobody writes down, so here they are.",
    body: [
      {
        p: "Here is the part nobody prepares you for. You know how the thread works. She ties it on your right wrist, you both do the aarti, somebody photographs it badly. Then she puts her hand out, and you are supposed to know what goes in it.",
      },
      {
        p: "Nobody tells you the number. Your mother will not tell you the number, because in her generation the number was obvious from context and asking out loud was slightly shameful. So you guess. You give ₹500 because it is a note you have, and she says thank you, and something is very slightly off for the rest of the afternoon and you cannot work out what.",
      },
      {
        p: "What was off is that ₹500 is an even number, and in Hindu practice even amounts of cash are what you hand over at a funeral. Not as an insult. Just as a category error, like bringing a birthday cake to a condolence visit.",
      },
      {
        p: "This page covers the half of Raksha Bandhan that the muhurat pages leave out: what the nek is actually for, why every amount ends in a one, what people in different relationships actually give in 2026, who gives to whom, and what to do when you are twelve hundred kilometres away and the rakhi came by courier.",
      },

      { h: "Raksha Bandhan 2026: the date and the window" },
      {
        p: "Raksha Bandhan 2026 falls on Friday 28 August. The auspicious window runs from roughly 05:57 to 09:48 IST, which is unusually early, so the tying tends to happen before the working day rather than after lunch.",
      },
      {
        note: "Muhurat timings shift by city because they are calculated from local sunrise. The window above is the widely published Delhi figure. If your family is strict about timing, check a panchang for your own city rather than trusting any single page, including this one.",
      },
      {
        p: "The reason the window matters more some years than others is Bhadra. Bhadra is a period considered inauspicious for tying the rakhi, and when it falls across the morning, families push the ceremony later or earlier to avoid it. In years when Bhadra clears early, as it does in 2026, the morning window is the good one and most households use it.",
      },

      {
        photo: "rakhiOnHand",
        caption: "The thread is a claim. The nek is the acceptance of it.",
      },
      { h: "What the nek actually is" },
      {
        p: "The nek is not payment for the thread. This matters, because if you treat it as payment you will get the amount wrong in a specific way: you will scale it to the cost of the rakhi, and the rakhi cost eighty rupees.",
      },
      {
        p: "The thread is a claim. She ties it and says, in effect, you are responsible for me. The nek is the acceptance of that claim. It is a promise renewed once a year that if something goes wrong, she has somewhere to go.",
      },
      {
        p: "That sounds abstract until you look at where the custom comes from. A sister who married moved into another household, often in another town, among people who were not hers. Her brother's house was the one place she could arrive at without an invitation. The annual gift was proof, in front of witnesses, that the door had not closed. The money was never the point. The money was the receipt.",
      },
      {
        p: "This is why sisters remember the year a brother forgot, and do not remember what he gave the year he did not. The amount is almost incidental. The fact of it is the whole thing.",
      },

      { h: "Why the amount always ends in one" },
      {
        p: "Every festival amount in India ends in a one. ₹101, ₹501, ₹1,100, ₹2,100, ₹5,100. Most explanations you will read say it is for good luck, which is true in the way that saying a car runs on fuel is true.",
      },
      {
        p: "The actual mechanism is arithmetic. A number ending in one cannot be divided into two equal parts. ₹500 splits cleanly into two ₹250s and the transaction closes. ₹501 does not. The extra rupee is a deliberate remainder, and a remainder means the account is still open, which means the relationship continues.",
      },
      {
        p: "The other half of the reason is the one people are more careful about. Even, round amounts are the convention for condolence money and funeral offerings. Giving a round ₹500 at a happy occasion puts your envelope in the wrong category. Nobody will say anything. Somebody will notice.",
      },
      {
        p: "This is also why the physical ₹1 coin goes into the envelope at all. If you are handing over ₹500 in notes, the coin is what converts it into ₹501 and moves it out of the funeral column.",
      },
      {
        note: "One rupee is the standard remainder, but it is not the only one. Some families use ₹11, ₹21 or ₹51 as the tail, which is the same logic scaled up. ₹5,100 becomes ₹5,100 or ₹5,151 depending on the household. Follow whatever your family already does.",
      },

      { h: "How much to give in 2026" },
      {
        p: "There is no correct number, and anybody publishing one is guessing. What exists is a set of bands that most families operate inside. The bands below are what is common, not what is required.",
      },
      {
        table: {
          head: ["Who", "Common range", "Notes"],
          rows: [
            [
              "Younger sister, school age",
              "₹101 to ₹501",
              "Often given as cash she is allowed to spend herself, which is half the pleasure",
            ],
            [
              "Younger sister, college age",
              "₹501 to ₹2,100",
              "Scale it to whether she is funding her own life yet",
            ],
            [
              "Adult sister, both earning",
              "₹1,100 to ₹5,100",
              "The widest band and the most family-dependent",
            ],
            [
              "Sister who is unwell or between jobs",
              "As much as you can",
              "The one case where the ritual and the practical purpose meet",
            ],
            [
              "Cousin sister",
              "₹251 to ₹1,100",
              "Usually a step below a full sibling",
            ],
            [
              "Rakhi sister, no blood relation",
              "₹251 to ₹1,100",
              "Match what you would give a cousin",
            ],
            [
              "Bhabhi tying rakhi to you",
              "₹501 to ₹2,100",
              "Increasingly common in north Indian households",
            ],
          ],
        },
      },
      { p: "Three rules matter more than the table." },
      {
        ul: [
          "Match the family, not the internet. If your family has given ₹1,100 for a decade, ₹5,100 is not generous, it is a statement, and everyone will ask what happened.",
          "Never go down. If you gave ₹2,100 last year and ₹1,100 this year, that reads as a message about the relationship whether or not you meant one. If money is tight, keep the number and say less.",
          "Never make it a competition between sisters. Sisters compare. If you have two, give the same, or have a reason you are prepared to say out loud.",
        ],
      },
      {
        p: "You will also see wedding shagun tables quoted for Rakhi, with numbers like ₹10,000 to ₹50,000 for close family. Those are wedding numbers. A wedding is a household-forming event and the giving reflects that. Festival giving runs an order of magnitude lower and always has.",
      },

      { h: "Who gives to whom" },
      {
        p: "Rakhi giving is directional, and the direction is not always the one people assume.",
      },
      {
        ul: [
          "Brother to sister, always. This is the nek proper.",
          "Elder to younger, generally. An older sister ties the thread and may still receive from a younger brother if he is earning and she is not.",
          "Sister to brother: sweets, a small gift, sometimes a shirt. Cash from sister to brother is unusual in most regions and can read oddly.",
          "Parents to both, in many households, on the same morning, separately from the nek.",
        ],
      },
      {
        p: "The case people get wrong is a younger brother who is not yet earning. He is not expected to give money. A younger brother giving ₹101 he saved is doing the ritual correctly and completely. The obligation attaches to capacity, not to gender or birth order alone.",
      },

      {
        photo: "rakhiShopping",
        caption: "A rakhi stall in the week before the festival.",
      },
      { h: "What to do when you are not in the same city" },
      {
        p: "This is now the normal case rather than the exception, and it is where the ritual quietly falls apart.",
      },
      {
        p: "Here is what usually happens. She courier's the rakhi ten days early so it arrives in time. It sits on your desk. On the morning of the twenty-eighth you tie it yourself, or your flatmate does, and you send a photo. Then you open your UPI app and send ₹2,100, and the notification she receives says ₹2,100 received.",
      },
      {
        p: "Look at what survived that and what did not. The money survived. The thread survived. What did not survive is every part that made it a ritual: the handing over, the words, the fact that it happened in front of people, the small physical object with her name on it.",
      },
      {
        p: "A bank notification is a receipt. The nek was always a receipt for something else, and when the something else is missing, the receipt is all that arrives.",
      },
      {
        p: "Whatever you do about that, do something about it. Send a voice note before you send the money. Call at the time she would have tied it rather than at eleven at night. Write the thing you would have said out loud, and send it with the amount rather than after it. The specific method matters less than the fact that the money is not travelling alone.",
      },

      { h: "What to write" },
      {
        p: "Most people write nothing, because a UPI transfer has a twenty-character note field designed for invoice numbers. If you have room to write properly, the things worth saying are small and concrete.",
      },
      {
        ul: [
          "Something only you two would know. A nickname, an old fight, the thing she says every year.",
          "The promise, said plainly rather than implied. It is the entire content of the ritual and almost nobody puts it in words.",
          "What you would have done if you were there. Where you would have taken her, what you would have eaten.",
        ],
      },
      {
        p: "Avoid the forwarded message. She has received nine of them by nine in the morning, all with the same clip art, and yours will be the tenth.",
      },

      { h: "Common mistakes" },
      {
        ul: [
          "Round numbers. ₹500, ₹1,000, ₹5,000. Add the rupee.",
          "Sending the money the day before because you will be busy. The date is the point of the date.",
          "Giving a gift card instead of cash to an adult sister. The nek is meant to be unconditional, and a gift card has conditions printed on the back.",
          "Forgetting the rakhi sister who has tied one to you every year since school. She is counting.",
          "Making it about the amount in either direction. Announcing it, apologising for it, or comparing it to last year all do the same damage.",
        ],
      },

      { h: "So what should you actually give?" },
      {
        p: "If you want one number and you are an earning adult with an adult sister, ₹2,100 sits in the middle of the common band in 2026 and will not be wrong in most families. If she is younger and still studying, ₹1,100. If she is a cousin or a rakhi sister, ₹501.",
      },
      {
        p: "Then check it against what your family gave last year, and if the two disagree, follow the family. The table on this page is a description of what people do. Your household is the actual authority, and it always was.",
      },
      { p: "And whichever number you land on, make it end in a one." },
    ],
  },
  {
    slug: "wedding-shagun-etiquette",
    title:
      "Wedding shagun: how much, who to hand it to, and why you write your city on it",
    date: "2026-08-08",
    updated: "31 August 2026",
    tag: "Festivals",
    excerpt:
      "Every page about this is an amount table. The amount is the least of it. Here is the whole shape of an Indian wedding, where money moves at each stage, and the book somebody is keeping.",
    body: [
      {
        p: "The published advice for a colleague's wedding runs from ₹501 to ₹5,000. That is a factor of ten, from pages that all sound equally certain. Nobody says so, because saying so would give away that none of them knows.",
      },
      {
        p: "The reason the number floats is that it is not really a number question. Somewhere at that wedding there is a book, or a memory doing the work of one, and what you give is being read against what your family gave last time and what theirs gave yours. Get that and the amount mostly answers itself.",
      },
      {
        p: "So this page does the whole shape: the functions in order, where money actually moves at each one, who you hand the envelope to, what to write on it, and what to do if you cannot afford the going rate.",
      },

      { h: "The functions, and where money moves" },
      {
        p: "An Indian wedding is not an event, it is a season. As a guest you will be invited to some of these and not others, and money behaves differently at each.",
      },
      { h3: "Roka" },
      {
        p: "The families formally agree. Family only, historically, though city weddings now put thirty to a hundred people in a booked hall. Both sides give: clothes, mithai, dry fruit, and cash from the bride's family to the groom, jewellery and clothes back the other way.",
      },
      {
        p: "Worth knowing that roka became popular partly because it is cheap. Fieldwork in Jalandhar found families choosing it precisely to avoid the cost of the older mangni, so that the engagement and the wedding could be done together and the groom's side saved a feast.",
      },
      { h3: "Sagai, and what it replaced" },
      {
        p: "The ring exchange is the modern version and it is a fairly recent import. What it replaced was mangni, and mangni was not simultaneous. The bride's male relatives went to the groom's house with gur, dry fruit and money, and the groom sat while they put money in his lap, or a silver coin and sugar in his palm. Only after they went home did the groom's family send gifts back.",
      },
      {
        p: "The bit worth knowing is that the invitation itself was carried by the barber and it stated how many guests the bride's family could afford to feed. The reciprocity was written down, in advance, including the limit.",
      },
      { h3: "Mehendi" },
      {
        p: "Guests attend, and guests get henna. The bride's is done by an artist now; historically it was her unmarried friends, with the professional as an option rather than the default.",
      },
      {
        p: "One belief attached to it that gets garbled in retelling: dark henna is read as a sign of the mother-in-law's affection. You will see it repeated as the depth of the groom's love, which is the greeting-card version.",
      },
      { h3: "Haldi" },
      {
        p: "Turmeric paste on both of them, on separate days at separate houses, and it is the one function with a genuinely non-negotiable dress rule: wear something you are willing to lose. Yellow, cotton, nothing embellished. It stains permanently and it travels further than you expect.",
      },
      {
        p: "Who applies it is the interesting part, and it is in its own section below.",
      },
      { h3: "Sangeet" },
      {
        p: "Money moves here, but not to the hosts. Notes get flicked over dancers, and in Punjab a garland of notes goes round the groom during the baraat. Where there are hereditary musicians, as with the Manganiyars in Jaisalmer, the payment for reciting a family's genealogy is the actual living the community makes.",
      },
      { h3: "The wedding" },
      {
        p: "This is where your envelope goes. Also joota chupai, where the bride's sisters hold the groom's shoes hostage and negotiate, which is a real transaction with real amounts and is meant to be enjoyed.",
      },

      { h: "The function nobody's guest guide mentions" },
      {
        p: "The largest single sum at a north Indian wedding does not come from a guest. It comes from the bride's mother's brother.",
      },
      {
        p: "Mayra in Rajasthan, bhaat in Haryana, nanki chhak in Punjab. The maternal uncle offsets his sister's wedding costs, and in Punjab he does more than pay: he gives the clothes the couple actually get married in, gives the bride her red ivory churha, ties the gana on her wrist, and lifts them both off the haldi platform. The bride arrives at her own wedding in her mama's clothes and leaves in her in-laws'.",
      },
      {
        p: "The numbers that reach the news are enormous, crores, tractors, land. Those are news precisely because they are extreme, and I could not find any source for what a normal one costs. But if you are a guest wondering whether your envelope is the point, it is not. You are a rounding error next to the mama, and that is by design.",
      },

      { h: "Haldi is applied by married women, nearly everywhere" },
      {
        p: "If you have heard that only married women apply the haldi, that is right, and it is not one community's rule. It runs across most of them, with the number specified.",
      },
      {
        table: {
          head: ["Community", "Called", "Who applies it"],
          rows: [
            [
              "Marwari, Rajasthani",
              "Pithi Dastoor",
              "Women of the family, married women, some say seven",
            ],
            [
              "Maharashtrian",
              "Halad Chadavane",
              "Five suhasinis, applied with mango leaves",
            ],
            [
              "Bengali",
              "Gaye Holud",
              "The groom's mother first, then five or seven sadhaba",
            ],
            [
              "Sindhi",
              "Tel ki Rasam",
              "Seven married women, oil in the hair first",
            ],
            [
              "Tamil, Telugu, Kannada",
              "Mangala Snanam",
              "Five or seven sumangalis, on the wedding morning",
            ],
            [
              "Punjabi",
              "Vatna, Maiyan",
              "Her sisters and unmarried friends. His sisters and his bhabhis.",
            ],
          ],
        },
      },
      {
        p: "Punjab is the exception and it is a real one. The academic account of Punjabi vatna does not restrict it to married women at all, and the groom's side is done by his sisters, who need not be married, alongside his brothers' wives, who are.",
      },
      {
        p: "Two things happen to the leftover paste. In Maharashtrian and Bengali practice it travels: what is left from the groom is carried to the bride's house and used on her, which makes the haldi a physical link between two households rather than something you wash off. And in a lot of families the couple daub the unmarried cousins with it, on the theory that they are next.",
      },
      {
        p: "One correction worth making because Kerala weddings now look like everyone else's on Instagram: haldi, mehendi and sangeet were not traditionally part of a Kerala Hindu wedding at all. They are recent imports from the north, common enough now that Kerala vendors sell haldi stage decoration.",
      },

      { h: "The book" },
      {
        p: "This is the thing that makes sense of everything else, and it exists under different names in at least three separate traditions.",
      },
      {
        p: "In Tamil Nadu it is not hidden. You hand your cash at a table by the entrance to somebody with a notebook, the moi notu, and he writes your name, where you are from, and the amount. Four or five people staff it. At larger functions bank employees turn up to help with a counting machine.",
      },
      {
        p: "And it is not a gift. It is a loan, and the repayment rate is stated: when you hold your own function, the family repays roughly double, about five years on. The custom traces back to Chettiar moneylending, went commercial somewhere around 1975 to 1980, and has now reached the point where invitations carry a barcode so you can moi over GPay.",
      },
      {
        p: "In Punjab the same logic is vartan bhanji, and the academic literature is blunt about it: weddings are the only occasion for which a written record of gifts is kept. The mechanism is designed never to settle. You return what was given, and you add a little, so the other side owes you, so it comes back with a little more.",
      },
      {
        p: "In Rajasthan it is neota, or netra. Registers kept across generations, so that neither family consistently gives more than the other.",
      },
      {
        p: "In most north Indian households nobody writes it down and it works anyway, because somebody's mother remembers. That is the same system with worse tooling.",
      },

      { h: "So: write your name and your city on it" },
      {
        p: "This is the single most practical thing on the page and almost nobody says it.",
      },
      {
        p: "The Tamil register records name, place and amount. Not name and amount. Place. Because there are four Sharmas and the one who matters is the one from Jodhpur, and in three decades when somebody opens that book to work out what is owed at your daughter's wedding, your first name will not be enough to find you.",
      },
      {
        p: "Write both. Add a line of a blessing if you like. It costs nothing and it is the difference between being remembered and being an unattributed entry.",
      },

      { h: "Who you actually hand it to" },
      {
        p: "It depends on the wedding, and the sources genuinely disagree, so here is the honest version.",
      },
      {
        p: "At a Tamil or Telugu wedding, look for the table at the entrance. There will be one. That is where it goes, and not to the couple.",
      },
      {
        p: "At a north Indian reception there may be no table. Then it is a family member, a parent or a sibling, or the box if there is one. My own advice, and it is advice rather than a rule: do not hand it to the bride. She is carrying about twenty kilos of clothing and jewellery, she has no hands and no pockets, and she is going to have to hand it straight to somebody else anyway. One published source recommends exactly this and several others say the couple is fine, so take it as reasoning rather than law.",
      },
      {
        p: "Some south Indian communities do not do gifts at the wedding at all, and there is a separate meet-and-greet afterwards where it happens. If you are told to wait, that is why.",
      },

      { h: "How much" },
      {
        p: "There is no survey. Not one. Every table you will find, including this one, is somebody's assertion, and the published tables disagree with each other by a factor of ten for a colleague and a factor of fifty for an extended relative.",
      },
      {
        p: "So this is a middle, and the point is the range and not the number.",
      },
      {
        table: {
          head: ["Who you are", "Modest wedding", "Big city, big wedding"],
          rows: [
            ["Colleague or acquaintance", "₹501 to ₹1,100", "₹1,100 to ₹2,100"],
            ["Friend, going alone", "₹1,100 to ₹2,100", "₹2,100 to ₹5,100"],
            ["Close friend", "₹5,100 to ₹11,000", "₹11,000 to ₹21,000"],
            ["Extended relative", "₹5,100 to ₹11,000", "₹11,000 to ₹25,000"],
            ["Sibling, or a big role", "₹11,000 upward", "₹21,000 upward"],
            ["As a couple, add", "roughly half again", "roughly half again"],
          ],
        },
      },
      {
        p: "Two adjustments. North Indian communities are reported as having higher norms and much stronger reciprocity expectations than the south. And in Tamil, Telugu and Kannada weddings the family-side gift is often gold rather than cash, so a north Indian assumption that everybody hands over an envelope is simply wrong there.",
      },
      {
        p: "The total ends in a one. Under five hundred the number does it itself, ₹101 or ₹501. Above that you give the round figure, ₹1,100 or ₹5,100, and the coin on the lifafa makes it ₹1,101. Even totals are what you take to a funeral.",
      },
      {
        p: "If the office is pooling, the reported convention is ₹200 to ₹500 a head into one envelope, and the person sealing it adds a rupee so the total lands odd. That figure comes from a single source and I would treat it as a starting point rather than a rate.",
      },

      { h: "If you cannot afford it" },
      {
        p: "This is a real problem and it has actually been studied, which is more than can be said for the amounts.",
      },
      {
        p: "The research on vartan bhanji in rural Punjab finds exactly what you would expect: reciprocity pressure that pushes low-income households into giving beyond their means, and which holds them back. It is not a matter of nobody minding. The obligation is real and it is heaviest on the people least able to carry it.",
      },
      {
        p: "Two things that genuinely help. The first is that if you have no history with this family, there is no ledger entry to fall short of. You are opening the account, not settling it. The floor is only sharp for people already in the book, which is why a first-time guest and a first cousin are not playing the same game at all.",
      },
      {
        p: "The second is that ₹501 with something written on it, from somebody who came, is not the thing that gets remembered badly. Not turning up is.",
      },

      { h: "If you are not Indian" },
      {
        p: "Almost nothing changes, and the one thing that does works in your favour.",
      },
      {
        p: "You are not in anybody's neota book and you never will be. Nobody is going to reciprocate at your wedding in Ohio. Which removes the reciprocity stakes entirely and means the amount is genuinely just what you would spend on any friend's wedding, converted.",
      },
      {
        p: "Practical: end it in a one, so $201 rather than $200. Buy an envelope from any Indian grocery or stationery shop, because handing over loose cash is not the gesture. Avoid red, which is the bride's, and avoid white and black. And if you are anxious about how much, the tour operators who actually deal with foreign wedding guests all say the same thing, which is that your being there is the part that registers.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "How much do I give at an Indian wedding?",
            a: "For a colleague, ₹1,100 to ₹2,100. For a close friend, ₹5,100 to ₹11,000. For an extended relative, more, and for a sibling, considerably more. The published guidance spans a factor of ten, so treat any single number you are given as one person's opinion, including this one.",
          },
          {
            q: "Who do I hand the envelope to?",
            a: "At a Tamil or Telugu wedding, the person with the register at the entrance table. Elsewhere, a parent or a sibling, or the gift box. Avoid the bride herself: she is wearing about twenty kilos of clothing and has nowhere to put it.",
          },
          {
            q: "What do I write on it?",
            a: "Your name and your city or town. The city is not optional in any family that keeps a record, because your first name will not identify you in thirty years. A short blessing is welcome too.",
          },
          {
            q: "Should I tip the mehendi artist?",
            a: "Tip her, yes. Some families treat it as nek rather than a fee, but that is a household practice rather than a documented custom, and the artists themselves say South Asian clients are the ones least likely to tip. Fifteen to twenty percent is the norm they ask for.",
          },
          {
            q: "Can I give a gift instead of cash?",
            a: "At most Hindu weddings cash is the expected thing and a gift alone reads as though you did not know. A gift alongside a smaller envelope reads warmly. Some Christian and Parsi weddings do work on wrapped gifts, and an actual registry means what it says.",
          },
          {
            q: "What do I wear to the haldi?",
            a: "Yellow, cotton, and nothing you would be sad to lose. Turmeric stains permanently and gets much further than you expect. A yellow kurta with jeans is completely fine for a casual one.",
          },
          {
            q: "I cannot afford the going rate. What do I do?",
            a: "Give what you can and turn up. If you have no previous gift history with the family there is no ledger entry to fall short of, so the pressure people describe applies much less to you than to a first cousin. Not attending is the thing that gets noticed.",
          },
        ],
      },
    ],
  },
  {
    slug: "is-it-safe",
    title: "Is this safe? A straight answer",
    date: "2026-08-05",
    tag: "How it works",
    excerpt:
      "We ask you to pay a UPI ID someone typed in. Here is how we try to make that not be a scam, and what you should still check.",
    body: [
      {
        p: "We will be blunt about something most sites in this space would not admit: an app that shows you a UPI ID and a pay button is, structurally, the same shape as a phishing page. We know that. It shaped how the whole thing is built.",
      },
      { h: "What we do about it" },
      {
        ul: [
          "The pay screen is only ever reachable by the person who made the lifafa, it lives behind a private link that is not the link you share. Someone cannot make a lifafa and send you the pay screen.",
          "The UPI ID is shown in full, large, right above the button. We never shorten it, never hide it behind a logo, never abbreviate it.",
          "The payment link is never triggered automatically. It always takes a deliberate tap from you.",
          "Once a lifafa is made, the UPI ID, the amount, the names and the message can never be edited by anyone, including us. That kills the attack where a nice link circulates in a family group and the UPI ID is swapped later.",
          "Links inside messages are stripped out entirely. A gift envelope has no business carrying a link, and allowing them would turn this into a delivery mechanism for scams.",
          "There is a cap of ₹21,000, which keeps the whole thing unattractive for serious fraud.",
        ],
      },
      { h: "What you should still do" },
      {
        p: "Check the UPI ID before you pay. Read it, properly, character by character. It is displayed in full precisely so you can. If you did not ask this person for their UPI ID yourself, or the amount is not what you expected, stop.",
      },
      {
        p: "And the general rule, which is older than us and applies everywhere: only send shagun to people you actually know.",
      },
      { h: "What we cannot do" },
      {
        p: "We cannot reverse a payment, confirm one, or refund one. The money never enters our control, so there is nothing for us to reverse. If you pay the wrong UPI ID, that is between you, your bank and NPCI, exactly as it would be if you had typed it into your UPI app yourself, which is effectively what happened.",
      },
    ],
  },
];

export const postBySlug = (slug: string) =>
  POSTS.find((p) => p.slug === slug) ?? null;

export type Heading = { id: string; text: string; level: 2 | 3; at: number };

/* Heading ids are permalinks. Somebody will paste one into WhatsApp, so
   renaming a heading breaks a link that is out in the world, which is what
   posts.test.ts is there to make loud.

   \p{M} is not optional. Devanagari matras and the virama are Mark, not
   Letter, so a class of \p{L} alone turns क्या into कय. */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "section";

/** Every heading in a post, with the block index it came from so the rendered
 *  id and the contents entry cannot drift apart if blocks get reordered. */
export function headings(post: Post): Heading[] {
  const seen = new Map<string, number>();
  return post.body.flatMap((b, at) => {
    const text = "h" in b ? b.h : "h3" in b ? b.h3 : null;
    if (text === null) return [];
    const base = slugify(text);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return [
      {
        id: n === 1 ? base : `${base}-${n}`,
        text,
        level: ("h" in b ? 2 : 3) as 2 | 3,
        at,
      },
    ];
  });
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
