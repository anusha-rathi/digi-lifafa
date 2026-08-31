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
  | { photo: string; caption?: string };

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
        p: "If your street or building has a sarvajanik Ganpati, somebody will come round with a receipt book. Ranges vary enormously by city and by how elaborate the mandal is, but as a rough map for a residential building or lane collection: ₹501 to ₹2,101 per household is common, and larger mandals in Mumbai and Pune run considerably higher.",
      },
      {
        p: "Two things worth knowing. Ask for the receipt, always, and keep it: registered mandals issue them and it is the normal, expected thing to do rather than a sign of distrust. And a mandal collection is a donation, not shagun, so the one-rupee rule does not apply. A flat ₹1,000 is perfectly correct here.",
      },

      { h: "Why the odd rupee, when it does apply" },
      {
        p: "Anywhere you are giving to a person rather than a collection, the amount ends in one. ₹101, ₹251, ₹501, ₹1,101.",
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
        p: "Visiting a house with Ganpati: take modak or flowers, give ₹101 to ₹251 to the children, and remember whoever has been cooking for ten days. Your building's mandal: ₹501 to ₹2,101, take the receipt, and a round number is fine there. A family installing for the first time: treat it like a housewarming and give ₹1,101.",
      },
      {
        p: "And if the whole thing is somebody else's family and you genuinely do not know: ask them. “What do people usually do?” is not a failure of preparation at a festival built entirely on visiting each other's houses. It is the correct question, and the answer is almost always “just come”.",
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
    art: "teej",
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
        p: "The one thing worth saying twice: whatever the amount, it ends in a one. 501, 1,101, 2,101. Even numbers are what gets handed over at a funeral.",
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
              "₹1,101 to ₹5,101",
              "Alongside the saree, bangles and ghevar, not instead of them",
            ],
            [
              "Parents to a married daughter",
              "₹1,101 to ₹2,101",
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
              "₹251 to ₹1,101, plus sweets",
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
        p: "Sending a sindhara to a daughter or daughter-in-law: green bangles, ghevar, something to wear, and ₹1,101 to ₹2,101 with it. Make it bigger if it is her first Teej. Going to a Hariyali Teej get-together: bangles or mehendi cones, no envelope needed. Around Hartalika Teej: fruit and suhaag samagri, and save the cash for another day.",
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
        p: "Here is where people from outside Kerala go wrong. You have been to Indian weddings. You know the envelope, you know the number ends in one, you know cash is the default and everybody prefers it. So for Onam you put ₹2,101 in an envelope and you feel prepared.",
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
        p: "If you are giving cash for Onam, the shagun conventions do apply. Keep the amount ending in a one, and avoid round even numbers, which in Hindu practice belong to condolence giving rather than celebration. ₹501, ₹1,001, ₹2,101.",
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
        p: "Then everyone moved to UPI, and that whole ritual collapsed into a notification. ₹2,101 received. No paper, no coin, no handwriting, no moment of handing it over with both hands. The money arrived and the gift didn't.",
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
      { p: "₹101, ₹501, ₹1,101, ₹5,101. Never ₹100, never ₹500." },
      {
        p: "The usual explanation is that the extra rupee is the blessing, the ashirvaad, sitting on top of the money. That is true and it is the version most people will give you if you ask. There is a harder version underneath it.",
      },
      {
        p: "An even amount is a closed sum. It divides cleanly, it settles, it finishes. Closed sums are what you hand over at a funeral, where the point is precisely that an account is being closed. So ₹500 to a cousin at Diwali is not stingy and it is not rude. It is the wrong category, in the way that bringing a birthday cake to a condolence visit is the wrong category.",
      },
      {
        p: "The extra rupee makes the number indivisible and therefore unfinished, which is the message: this carries on. That single rupee is also why an actual one-rupee coin often goes into the envelope alongside the notes.",
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
              "₹251 to ₹1,101",
              "The most common case, and see the tax section",
            ],
            [
              "A newly married couple",
              "₹1,101 and up",
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
        note: "This is general information as at 29 August 2026, not tax advice, and thresholds change with each Finance Act. If a real amount is involved, ask someone qualified.",
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
        p: "Every festival amount in India ends in a one. ₹101, ₹501, ₹1,101, ₹2,101, ₹5,101. Most explanations you will read say it is for good luck, which is true in the way that saying a car runs on fuel is true.",
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
        note: "One rupee is the standard remainder, but it is not the only one. Some families use ₹11, ₹21 or ₹51 as the tail, which is the same logic scaled up. ₹5,100 becomes ₹5,101 or ₹5,151 depending on the household. Follow whatever your family already does.",
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
              "₹501 to ₹2,101",
              "Scale it to whether she is funding her own life yet",
            ],
            [
              "Adult sister, both earning",
              "₹1,101 to ₹5,101",
              "The widest band and the most family-dependent",
            ],
            [
              "Sister who is unwell or between jobs",
              "As much as you can",
              "The one case where the ritual and the practical purpose meet",
            ],
            [
              "Cousin sister",
              "₹251 to ₹1,101",
              "Usually a step below a full sibling",
            ],
            [
              "Rakhi sister, no blood relation",
              "₹251 to ₹1,101",
              "Match what you would give a cousin",
            ],
            [
              "Bhabhi tying rakhi to you",
              "₹501 to ₹2,101",
              "Increasingly common in north Indian households",
            ],
          ],
        },
      },
      { p: "Three rules matter more than the table." },
      {
        ul: [
          "Match the family, not the internet. If your family has given ₹1,101 for a decade, ₹5,101 is not generous, it is a statement, and everyone will ask what happened.",
          "Never go down. If you gave ₹2,101 last year and ₹1,101 this year, that reads as a message about the relationship whether or not you meant one. If money is tight, keep the number and say less.",
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
        p: "Here is what usually happens. She courier's the rakhi ten days early so it arrives in time. It sits on your desk. On the morning of the twenty-eighth you tie it yourself, or your flatmate does, and you send a photo. Then you open your UPI app and send ₹2,101, and the notification she receives says ₹2,101 received.",
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
        p: "If you want one number and you are an earning adult with an adult sister, ₹2,101 sits in the middle of the common band in 2026 and will not be wrong in most families. If she is younger and still studying, ₹1,101. If she is a cousin or a rakhi sister, ₹501.",
      },
      {
        p: "Then check it against what your family gave last year, and if the two disagree, follow the family. The table on this page is a description of what people do. Your household is the actual authority, and it always was.",
      },
      { p: "And whichever number you land on, make it end in a one." },
    ],
  },
  {
    slug: "wedding-shagun-etiquette",
    title: "Wedding shagun: how much, and when to hand it over",
    date: "2026-08-08",
    tag: "Festivals",
    excerpt:
      "The envelope at the reception, the amount nobody says out loud, and how not to get it wrong.",
    body: [
      {
        p: "Wedding shagun is the highest-stakes envelope in Indian social life, mostly because everyone can see you hand it over and somebody is writing your name in a register.",
      },
      { h: "The amount" },
      {
        p: "It scales with closeness and with what the family gave at your own functions, many households genuinely keep a book. As a rough map:",
      },
      {
        ul: [
          "Colleague or acquaintance: ₹1,101 to ₹2,101.",
          "Friend, ₹2,101 to ₹5,101.",
          "Close friend or extended family: ₹5,101 to ₹11,001.",
          "Immediate family: whatever has been decided at home, and it is rarely your decision alone.",
        ],
      },
      {
        p: "Always ending in one, always. And if the family gave you ₹5,101 at your wedding, ₹5,101 is the floor, not the target.",
      },
      { h: "When to give it" },
      {
        p: "At the reception, usually during or just after the stage photo, handed to the couple directly or dropped in the box beside them. Not at the mehendi, not at the haldi, those are for the family, not for envelopes.",
      },
      { h: "Write your name on it" },
      {
        p: "The single most common mistake. An unmarked envelope in a stack of two hundred means the couple has no idea who to thank, and it is the reason the register exists. If you are sending a digital one, your name is already on it, which is one small advantage.",
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
