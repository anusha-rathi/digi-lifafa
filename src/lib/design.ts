/* The Lifafa Workbench design, ported from the Claude Design canvas at
   design/Main.dc.html. The data below is the canvas's own, 21 papers,
   14 palettes, 5 textures, 6 note denominations, 31 mithai drawn as SVG
   paths, 10 occasions and the full hi/Hinglish/English copy. Keep this file
   and the canvas in step: the canvas is where the design gets edited.

   Stable string ids are derived from the English names so the database never
   stores an array index, reordering these lists must not repoint a lifafa
   at a different paper. */

import { PAPERS, type PaperDesign, type PatternFn } from "@/lib/patterns";
export type { PatternFn };

export type PathSpec = { d: string; f: string; s: string; w: number; fr: string };
export type Design = PaperDesign & { id: string };
export type Palette = { id: string; name: string; base: string; flap: string; lace: string; ink: string };
export type Texture = { id: string; hi: string; en: string; img: string; size: string };
export type Denom = { denom: number; bg: string; hi: string; rom: string };
export type Sweet = { id: string; hi: string; en: string; sh: PathSpec[] };
export type Lang = "hi" | "hn" | "en";


const PALETTES = [
  { name: 'रानी गुलाबी · Rani', base: '#a4123f', flap: '#8d0f36', lace: '#e8c37a', ink: '#f6dfae' },
  { name: 'गेंदा · Marigold', base: '#e79b12', flap: '#cf860a', lace: '#7a1418', ink: '#5c1a0c' },
  { name: 'मेहंदी हरा · Green', base: '#123c2c', flap: '#0e3325', lace: '#e8c37a', ink: '#f0d9a6' },
  { name: 'शाही नीला · Royal Blue', base: '#17325e', flap: '#122748', lace: '#dcc07a', ink: '#f0e2c0' },
  { name: 'क्रीम · Cream', base: '#e9dcc4', flap: '#e0d0b0', lace: '#7c1a25', ink: '#7c1a25' },
  { name: 'क्राफ़्ट · Kraft', base: '#c19a6b', flap: '#b58f61', lace: '#4a3219', ink: '#40290f' },
  { name: 'बैंगनी · Aubergine', base: '#4a1533', flap: '#3c0f29', lace: '#e0b878', ink: '#f3ddb8' },
  { name: 'हल्का गुलाबी · Blush', base: '#eaa5bd', flap: '#d98fa9', lace: '#ffffff', ink: '#5c3247' },
  { name: 'पुदीना · Mint', base: '#cfe4d6', flap: '#bed7c7', lace: '#4d7a63', ink: '#2f4a3d' },
  { name: 'लैवेंडर · Lilac', base: '#dcd3ea', flap: '#cbc0dd', lace: '#6b5b8a', ink: '#3d3355' },
  { name: 'आड़ू · Peach', base: '#f6d5c0', flap: '#eec3a8', lace: '#a2603c', ink: '#6b3a20' },
  { name: 'आसमानी · Sky', base: '#cfdfec', flap: '#bcd1e2', lace: '#456b8a', ink: '#26425a' },
  { name: 'मक्खनी · Butter', base: '#f3e6bf', flap: '#e8d7a6', lace: '#8a7433', ink: '#54471b' },
  { name: 'धूसर · Dove', base: '#dcd8d2', flap: '#cbc6be', lace: '#6d675f', ink: '#3c3831' }
];

const TEXTURES = [
  { hi: 'सादा', en: 'Matte', img: '', size: '' },
  { hi: 'हाथ का कागज़', en: 'Handmade', img: 'radial-gradient(circle at 3px 5px, rgba(255,255,255,.16) 1px, transparent 1.6px), radial-gradient(circle at 11px 13px, rgba(0,0,0,.12) 1px, transparent 1.6px)', size: '17px 17px, 23px 23px' },
  { hi: 'लिनन', en: 'Linen', img: 'repeating-linear-gradient(0deg, rgba(0,0,0,.09) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 4px)', size: 'auto, auto' },
  { hi: 'रेशमी', en: 'Silk', img: 'linear-gradient(105deg, rgba(255,255,255,.22), transparent 35%, rgba(0,0,0,.16) 70%, transparent)', size: 'auto' },
  { hi: 'फ़ॉइल', en: 'Foil', img: 'repeating-linear-gradient(115deg, rgba(255,255,255,.2) 0 6px, transparent 6px 14px, rgba(0,0,0,.12) 14px 20px, transparent 20px 30px)', size: 'auto' }
];

const DENOMS = [
  { denom: 10, bg: 'linear-gradient(160deg,#e2b98c,#c98a4b)', hi: 'दस रुपये', rom: 'das' },
  { denom: 20, bg: 'linear-gradient(160deg,#d6dd8e,#b3bd4a)', hi: 'बीस रुपये', rom: 'bees' },
  { denom: 50, bg: 'linear-gradient(160deg,#a9d9e6,#6fb3c9)', hi: 'पचास रुपये', rom: 'pachaas' },
  { denom: 100, bg: 'linear-gradient(160deg,#c3b8de,#9b8ec4)', hi: 'सौ रुपये', rom: 'sau' },
  { denom: 200, bg: 'linear-gradient(160deg,#f2c07c,#e0912f)', hi: 'दो सौ रुपये', rom: 'do sau' },
  { denom: 500, bg: 'linear-gradient(160deg,#b6bb9c,#868c6c)', hi: 'पाँच सौ रुपये', rom: 'paanch sau' }
];

const OCCASIONS = [
  { id: 'diwali', hi: 'दिवाली', en: 'Diwali', rom: 'Diwali',
    mhi: 'दिवाली की ढेर सारी शुभकामनाएँ। घर रोशनी और मिठाइयों से भरा रहे।',
    men: 'Wishing you a Diwali full of light, sweets and good luck.',
    mrom: 'Diwali ki dher saari shubhkamnaayein. Ghar roshni se bhara rahe.' },
  { id: 'rakhi', hi: 'रक्षाबंधन', en: 'Raksha Bandhan', rom: 'Rakhi',
    mhi: 'रक्षाबंधन मुबारक। दूर हूँ, पर ध्यान हमेशा तुम्हारा रहता है।',
    men: 'Happy Rakhi. Far away, but always looking out for you.',
    mrom: 'Rakhi mubarak! Door hoon, par dhyaan hamesha tumhara hai.' },
  { id: 'janmashtami', hi: 'जन्माष्टमी', en: 'Janmashtami', rom: 'Janmashtami',
    mhi: 'जन्माष्टमी की शुभकामनाएँ। साल माखन-मिश्री जैसा मीठा बीते।',
    men: 'Happy Janmashtami. May the year be as sweet as makhan-mishri.',
    mrom: 'Janmashtami ki shubhkamnaayein. Saal makhan-mishri jaisa meetha ho.' },
  { id: 'teej', hi: 'तीज', en: 'Teej', rom: 'Teej',
    mhi: 'तीज की शुभकामनाएँ। हरियाली और हँसी बनी रहे।',
    men: 'Teej blessings. Green, glad and full of song.',
    mrom: 'Teej ki shubhkamnaayein. Hariyali aur hansi bani rahe.' },
  { id: 'wedding', hi: 'शादी', en: 'Wedding', rom: 'Shaadi',
    mhi: 'नई शुरुआत की बहुत-बहुत शुभकामनाएँ। हमेशा ऐसे ही खुश रहो।',
    men: 'Congratulations on the new beginning. Be happy, always.',
    mrom: 'Nayi shuruaat ki bahut shubhkamnaayein. Hamesha khush raho.' },
  { id: 'birthday', hi: 'जन्मदिन', en: 'Birthday', rom: 'Birthday',
    mhi: 'जन्मदिन मुबारक। कुछ मीठा खा लेना, हमारी तरफ़ से।',
    men: 'Happy birthday. Eat something sweet, on us.',
    mrom: 'Janmadin mubarak! Kuch meetha khaa lena, hamari taraf se.' },
  { id: 'eid', hi: 'ईद', en: 'Eid', rom: 'Eid',
    mhi: 'ईद मुबारक। सेवइयाँ हमारे हिस्से की भी खा लेना।',
    men: 'Eid Mubarak. Have our share of the sewai too.',
    mrom: 'Eid Mubarak! Sewaiyan hamare hisse ki bhi khaa lena.' },
  { id: 'baby', hi: 'नन्हा मेहमान', en: 'New baby', rom: 'Naya mehmaan',
    mhi: 'नन्हे मेहमान का स्वागत। ढेर सारा प्यार और आशीर्वाद।',
    men: 'Welcome to the little one. So much love.',
    mrom: 'Nanhe mehmaan ka swagat. Dher saara pyaar.' },
  { id: 'griha', hi: 'गृह प्रवेश', en: 'Griha pravesh', rom: 'Griha pravesh',
    mhi: 'नए घर की शुभकामनाएँ। बरकत और खुशियाँ बनी रहें।',
    men: 'Blessings on the new house. May it always be full.',
    mrom: 'Naye ghar ki shubhkamnaayein. Barkat bani rahe.' },
  { id: 'ganesh', hi: 'गणेश चतुर्थी', en: 'Ganesh Chaturthi', rom: 'Ganesh Chaturthi',
    mhi: 'गणपति बप्पा मोरया। घर में सुख और समृद्धि आए।',
    men: 'Ganpati Bappa Morya. May the year clear every obstacle.',
    mrom: 'Ganpati Bappa Morya. Ghar mein sukh aur samruddhi aaye.' },
  { id: 'onam', hi: 'ओणम', en: 'Onam', rom: 'Onam',
    mhi: 'ओणम की शुभकामनाएँ। घर भरा रहे, थाली भरी रहे।',
    men: 'Happy Onam. May the house stay full and the sadya stay long.',
    mrom: 'Onam ki shubhkamnaayein. Ghar bhara rahe, thali bhari rahe.' },
  // no preset message, the sender writes their own heading and their own words
  { id: 'custom', hi: 'अपना', en: 'Something else', rom: 'Apna',
    mhi: '', men: '', mrom: '' }
];

const SALUTATIONS = ['प्रिय', 'प्यारी', 'प्यारे', 'Dear', 'For', 'श्रीमती'];

const T = {
  hi: {
    step: 'लिफ़ाफ़ा तैयार कीजिए', title: 'शगुन का लिफ़ाफ़ा', langSwap: 'Hinglish',
    capOpen: 'खुला', capBack: 'पीछे से', capFront: 'आगे से',
    vOpen: 'खोलो', vBack: 'पीछे से', vFront: 'आगे से',
    total: 'नेक', undo: 'एक नोट निकालिए',
    tabs: { design: 'डिज़ाइन', colour: 'रंग', money: 'नेक', sweet: 'मिठाई', note: 'संदेश', name: 'नाम' },
    designHint: 'इक्कीस कागज़, त्योहारों वाले और सादे भी',
    colourHint: 'रंग', textureHint: 'बुनावट',
    borderHint: 'किनारा', motifHint: 'बीच का बूटा',
    celebrationHint: 'खुलने पर',
    moneyHint: 'नोट पर टैप कीजिए, वो लिफ़ाफ़े में चला जाएगा',
    coinAdd: '₹1 का सिक्का डालिए', coinIn: 'सिक्का डल गया',
    sweetHint: 'डिब्बी में एक मिठाई रख दीजिए', desi: 'देसी', western: 'विदेशी', noSweet: 'मिठाई नहीं चाहिए',
    occasionHint: 'मौका', messageHint: 'अपने शब्दों में लिखिए', messagePlaceholder: 'जो कहना है, लिख दीजिए…',
    nameHint: 'किसके लिए है', salHint: 'संबोधन',
    customHint: 'अपना शीर्षक लिखिए', customPlaceholder: 'जैसे: सालगिरह मुबारक',
    senderLabel: 'आपका नाम', vpaLabel: 'उनकी UPI ID (QR के लिए)',
    vpaHelp: 'उनसे पूछना पड़ेगा, ढूँढने का कोई तरीका नहीं है।',
    noPay: 'अभी नेक नहीं भेजना, सिर्फ़ लिफ़ाफ़ा',
    noPayNote: 'न QR बनेगा, न कोई भुगतान लिंक। सिर्फ़ लिफ़ाफ़ा जाएगा।',
    recvIntro: 'यह पैसा सीधे आपके UPI पर भेजा गया है। अपना बैंक खाता देख लीजिए। हम अपनी वेबसाइट पर कोई पैसा नहीं रखते।',
    recvNoted: 'ने रेफ़रेंस लिखा था', recvUnchecked: 'हमने जाँचा नहीं है, जाँचने का हमारे पास कोई तरीका ही नहीं है।',
    blocked: 'यह लिफ़ाफ़ा उपलब्ध नहीं है।',
    blockedNote: 'इसे हटा दिया गया है। अगर किसी ने आपको यह पैसे के लिए भेजा है, तो कृपया इसके आधार पर किसी को भुगतान न करें।',
    sndPreview: 'आपके प्रिय को ऐसा दिखेगा', sndFor: 'के लिए',
    sndSealedPay: 'कागज़ बंद हो गया। पैसा सिर्फ़ आप भेज सकते हैं, वो आपके बैंक से उनके बैंक जाएगा, हमारे बीच से कभी नहीं।',
    sndSealedNoPay: 'कागज़ बंद हो गया। नेक नहीं है, जब मन करे भेज दीजिए।',
    shareNow: 'अब भेजिए', shareCopy: 'कॉपी', shareWA: 'WhatsApp पर भेजिए',
    shareKeep: 'इस पेज को बुकमार्क कर लीजिए। अपने लिफ़ाफ़े तक वापस आने का रास्ता यही एक है। ऊपर वाला लिंक उनके लिए है।',
    sealOpen: 'लिफ़ाफ़ा बंद कीजिए', sealClose: 'दोबारा खोलिए',
    footer: 'अभी नेक नहीं गया, सिर्फ़ लिफ़ाफ़ा बना है',
    empty: 'लिफ़ाफ़ा खाली है, नीचे से नोट चुनिए', withCoin: 'नोट और ₹1 का सिक्का',
    needCoin: 'सिक्का डालिए, तब शगुन पूरा होगा', cap: 'इससे ज़्यादा नहीं, '
  },
  hn: {
    step: 'Lifafa taiyaar karo', title: 'Shagun ka Lifafa', langSwap: 'English',
    capOpen: 'Khula', capBack: 'Peeche se', capFront: 'Aage se',
    vOpen: 'Kholo', vBack: 'Peeche se', vFront: 'Aage se',
    total: 'Nek', undo: 'Ek note nikaalo',
    tabs: { design: 'Design', colour: 'Rang', money: 'Nek', sweet: 'Mithai', note: 'Message', name: 'Naam' },
    designHint: 'Ikkis kaagaz, festival wale aur simple wale bhi',
    colourHint: 'Rang', textureHint: 'Texture',
    borderHint: 'Border', motifHint: 'Motif',
    celebrationHint: 'Khulne par',
    moneyHint: 'Note pe tap karo, seedha lifafe mein jaayega',
    coinAdd: '₹1 ka sikka daalo', coinIn: 'Sikka daal diya',
    sweetHint: 'Dabbi mein ek mithai rakh do', desi: 'Desi', western: 'Western', noSweet: 'Mithai nahi chahiye',
    occasionHint: 'Occasion', messageHint: 'Apne shabdon mein likho', messagePlaceholder: 'Jo kehna hai likh do…',
    nameHint: 'Kiske liye hai', salHint: 'Kaise bulaoge',
    customHint: 'Apna heading likho', customPlaceholder: 'Jaise: saalgirah mubarak',
    senderLabel: 'Aapka naam', vpaLabel: 'Unki UPI ID (QR ke liye)',
    vpaHelp: 'Unse poochna padega, dhoondhne ka koi tareeka nahi hai.',
    noPay: 'Abhi nek nahi bhejna, sirf lifafa',
    noPayNote: 'Na QR banega, na koi payment link. sirf lifafa jaayega.',
    recvIntro: 'Yeh paisa seedha aapke UPI par bheja gaya hai. Apna bank account dekh lijiye. Hum apni website par koi paisa nahi rakhte.',
    recvNoted: 'Ne reference likha tha', recvUnchecked: 'Humne jaancha nahi hai, jaanchne ka koi tareeka hi nahi hai.',
    blocked: 'Yeh lifafa uplabdh nahi hai.',
    blockedNote: 'Ise hata diya gaya hai. Agar kisi ne aapko yeh paise ke liye bheja hai, to kripya iske aadhar par kisi ko payment na karein.',
    sndPreview: 'Aapke priy ko aisa dikhega', sndFor: 'Ke liye',
    sndSealedPay: 'Kaagaz band ho gaya. Paisa sirf aap bhej sakte ho, wo aapke bank se unke bank jaayega, hamare beech se kabhi nahi.',
    sndSealedNoPay: 'Kaagaz band ho gaya. Nek nahi hai, jab mann kare bhej dijiye.',
    shareNow: 'Ab bhejiye', shareCopy: 'Copy', shareWA: 'WhatsApp par bhejo',
    shareKeep: 'Is page ko bookmark kar lijiye. Apne lifafe tak wapas aane ka rasta yahi ek hai. Upar wala link unke liye hai.',
    sealOpen: 'Lifafa Band Karo', sealClose: 'Wapas kholo',
    footer: 'Abhi nek nahi gaya, sirf lifafa bana hai',
    empty: 'Lifafa khaali hai, neeche se note chuno', withCoin: 'Notes aur ₹1 ka sikka',
    needCoin: 'Sikka daalo, tab shagun poora', cap: 'Itna hi, '
  },
  en: {
    step: 'Build the lifafa', title: 'Shagun ka Lifafa', langSwap: 'हिंदी',
    capOpen: 'Open', capBack: 'Back', capFront: 'Front',
    vOpen: 'Open', vBack: 'Back', vFront: 'Front',
    total: 'The nek', undo: 'Take one note out',
    tabs: { design: 'Design', colour: 'Colour', money: 'Nek', sweet: 'Sweet', note: 'Message', name: 'Name' },
    designHint: 'Twenty-one papers, festival ones and quiet ones',
    colourHint: 'Colour', textureHint: 'Texture',
    borderHint: 'Border', motifHint: 'Motif',
    celebrationHint: 'When it opens',
    moneyHint: 'Tap a note and it slips in',
    coinAdd: 'Add the ₹1 coin', coinIn: 'Coin is in',
    sweetHint: 'Tuck one sweet into the box', desi: 'Indian', western: 'Western', noSweet: 'No sweet, thanks',
    occasionHint: 'Occasion', messageHint: 'In your own words', messagePlaceholder: 'Say whatever you would say…',
    nameHint: 'Who is it for', salHint: 'How to address them',
    customHint: 'Your own heading', customPlaceholder: 'E.g. happy anniversary',
    senderLabel: 'Your name', vpaLabel: 'Their UPI ID (for the QR)',
    vpaHelp: 'You have to ask them. There is no way to look it up.',
    noPay: 'No nek this time, just the lifafa',
    noPayNote: 'No QR, no payment link. Only the lifafa goes across.',
    recvIntro: 'This money was sent directly to your UPI. Please check your bank account. We do not store any money on our website.',
    recvNoted: 'Noted the reference', recvUnchecked: 'We have not checked it. We have no way to.',
    blocked: 'This lifafa is not available.',
    blockedNote: 'It was taken down. If someone sent you this expecting money, please do not pay anyone based on it.',
    sndPreview: 'This is how it will look to them', sndFor: 'For',
    sndSealedPay: 'The paper is sealed. The money is the part only you can do. It goes from your bank to theirs, never through us.',
    sndSealedNoPay: 'The paper is sealed. No nek attached, so send it whenever you are ready.',
    shareNow: 'Now send it', shareCopy: 'Copy', shareWA: 'Send on WhatsApp',
    shareKeep: 'Keep this page bookmarked. It is the only way back to your own lifafa. The link above is the one they open.',
    sealOpen: 'Seal the Lifafa', sealClose: 'Open it back up',
    footer: 'The nek has not gone yet, only the lifafa is made',
    empty: 'Empty, pick a note below', withCoin: 'Notes and the ₹1 coin',
    needCoin: 'Add the coin to make it shagun', cap: 'That is the cap, '
  }
};

/* ---- flat-vector mithai, drawn as paths on a 48x40 box ---- */
const C = (cx: number, cy: number, r: number) => 'M' + (cx - r) + ',' + cy + 'a' + r + ',' + r + ' 0 1,0 ' + (2 * r) + ',0a' + r + ',' + r + ' 0 1,0 ' + (-2 * r) + ',0';
const E = (cx: number, cy: number, rx: number, ry: number) => 'M' + (cx - rx) + ',' + cy + 'a' + rx + ',' + ry + ' 0 1,0 ' + (2 * rx) + ',0a' + rx + ',' + ry + ' 0 1,0 ' + (-2 * rx) + ',0';
const R = (x: number, y: number, w: number, h: number, r: number) => 'M' + (x + r) + ',' + y + 'h' + (w - 2 * r) + 'q' + r + ',0 ' + r + ',' + r + 'v' + (h - 2 * r) + 'q0,' + r + ' ' + (-r) + ',' + r + 'h' + (-(w - 2 * r)) + 'q' + (-r) + ',0 ' + (-r) + ',' + (-r) + 'v' + (-(h - 2 * r)) + 'q0,' + (-r) + ' ' + r + ',' + (-r) + 'z';
const P = (d: string, f?: string, s?: string, w?: number, fr?: string): PathSpec => ({ d: d, f: f || 'none', s: s || 'none', w: w || 0, fr: fr || 'nonzero' });
const RING = (cx: number, cy: number, r: number, ri: number, f: string, s: string) => P(C(cx, cy, r) + C(cx, cy, ri), f, s, s ? 1.3 : 0, 'evenodd');

const SWEETS_ART = {
  desi: [
    { id: 'besan', hi: 'बेसन लड्डू', en: 'Besan Ladoo', sh: [
      P(C(24, 22, 13), '#eaa42c', '#966012', 1.5),
      P(E(19, 16, 4.6, 3), '#f8d98d'), P(C(29, 27, 1.6), '#c8801a'), P(C(20, 28, 1.3), '#c8801a'),
      P(E(29, 13, 2.6, 1.7), '#6f9e3f') ] },
    { id: 'motichoor', hi: 'मोतीचूर लड्डू', en: 'Motichoor Ladoo', sh: [
      P(C(24, 22, 13), '#f2b73e', '#a2660f', 1.5),
      P(C(19, 17, 2.2), '#ffd98a'), P(C(27, 16, 2), '#ffd98a'), P(C(30, 24, 2.2), '#ffd98a'),
      P(C(20, 27, 2), '#ffd98a'), P(C(25, 30, 1.8), '#ffd98a'), P(C(24, 22, 2), '#ffd98a') ] },
    { id: 'til', hi: 'तिल के लड्डू', en: 'Til Ladoo', sh: [
      P(C(24, 22, 12.5), '#b8783a', '#6a3d15', 1.5),
      P(E(19, 17, 2, 1.3), '#f3e3c6'), P(E(28, 19, 2, 1.3), '#f3e3c6'), P(E(23, 26, 2, 1.3), '#f3e3c6'), P(E(30, 27, 1.8, 1.2), '#f3e3c6') ] },
    { id: 'rasgulla', hi: 'रसगुल्ला', en: 'Rasgulla', sh: [
      P(E(24, 32, 15, 4.5), '#efe6cf', '#cdbfa0', 1),
      P(C(24, 21, 12), '#fdfaf2', '#bcae93', 1.5), P(E(19, 16, 4, 2.6), '#ffffff') ] },
    { id: 'gulab', hi: 'गुलाब जामुन', en: 'Gulab Jamun', sh: [
      P(E(24, 32, 16, 4.5), '#c08453', '#8a5a30', 1),
      P(C(19, 21, 11), '#7d4523', '#46220c', 1.5), P(C(32, 26, 8), '#6c3b1d', '#46220c', 1.5),
      P(E(15, 16, 3.4, 2.2), '#b98459') ] },
    { id: 'kaju', hi: 'काजू कतली', en: 'Kaju Katli', sh: [
      P('M24,7L40,21L24,35L8,21Z', '#f8f4e8', '#b0a68a', 1.5),
      P('M24,12L34,21L24,30L14,21Z', '#fffdf6'), P(C(24, 21, 2), '#e7dfc7') ] },
    { id: 'pista', hi: 'पिस्ता बर्फ़ी', en: 'Pista Barfi', sh: [
      P('M24,8L42,20L24,33L6,20Z', '#cadd9c', '#7c9450', 1.6),
      P('M24,8L42,20L24,26L6,20Z', '#eaf2d4'),
      P(E(20, 18, 2.4, 1.5), '#4f7a2b'), P(E(28, 20, 2, 1.3), '#4f7a2b'), P(E(24, 24, 2.2, 1.4), '#618f38'),
      P('M6,20L24,33L42,20', '', '#7c9450', 1.4) ] },
    { id: 'nariyal', hi: 'नारियल बर्फ़ी', en: 'Coconut Barfi', sh: [
      P('M24,6L41,21L24,36L7,21Z', '#fdfaf3', '#bfae8e', 1.5),
      P('M14,21h20', '', '#e3d7be', 1.6), P('M18,15h12', '', '#e3d7be', 1.4), P('M18,27h12', '', '#e3d7be', 1.4),
      P(C(24, 21, 3.2), '#f5a0ae', '#cf6d7e', 1.1) ] },
    { id: 'kalakand', hi: 'कलाकंद', en: 'Kalakand', sh: [
      P('M9,15L24,8L41,13L26,21Z', '#fbf3de', '#b79c6d', 1.6),
      P('M9,15v13l17,7V21Z', '#eddfbf', '#b79c6d', 1.6),
      P('M26,21v14l15,-8V13Z', '#dfcda4', '#b79c6d', 1.6),
      P(C(15, 24, 1.4), '#cbb083'), P(C(20, 29, 1.3), '#cbb083'), P(C(32, 22, 1.3), '#c7a97a'), P(C(35, 27, 1.2), '#c7a97a'),
      P('M17,13l4,-2M25,12l4,1M31,16l4,-2', '', '#6f9e3f', 1.6) ] },
    { id: 'peda', hi: 'पेड़ा', en: 'Peda', sh: [
      P(E(24, 23, 14, 10.5), '#edcd8c', '#a3823f', 1.6),
      P(E(24, 20, 12, 7.5), '#f6e2b4'),
      P(C(24, 21, 4.4), '#dbb872', '#a3823f', 1.2),
      P(C(24, 21, 1.6), '#c39f52'),
      P(E(17, 16, 4, 2.2), '#fbf1d6'),
      P(C(30, 27, 1.2), '#e2a33c'), P(C(19, 28, 1.1), '#e2a33c') ] },
    { id: 'jalebi', hi: 'जलेबी', en: 'Jalebi', sh: [
      P('M24,4q13,0 15,12q2,13 -11,16q-14,3 -19,-7q-5,-11 6,-16', '', '#c2660c', 6.4),
      P('M24,4q13,0 15,12q2,13 -11,16q-14,3 -19,-7q-5,-11 6,-16', '', '#f59a2b', 4.2),
      P('M21,11q9,-1 11,7q1,8 -8,9q-9,0 -9,-8', '', '#c2660c', 5.4),
      P('M21,11q9,-1 11,7q1,8 -8,9q-9,0 -9,-8', '', '#f7ab48', 3.4),
      P(E(15, 10, 3, 1.6), '#ffd9a0') ] },
    { id: 'imarti', hi: 'इमरती', en: 'Imarti', sh: [
      P(C(16, 14, 5.6), '', '#c26f12', 4.6), P(C(32, 14, 5.6), '', '#c26f12', 4.6),
      P(C(16, 28, 5.6), '', '#c26f12', 4.6), P(C(32, 28, 5.6), '', '#c26f12', 4.6),
      P(C(16, 14, 5.6), '', '#f0932a', 2.8), P(C(32, 14, 5.6), '', '#f0932a', 2.8),
      P(C(16, 28, 5.6), '', '#f0932a', 2.8), P(C(32, 28, 5.6), '', '#f0932a', 2.8),
      P(C(24, 21, 6.4), '', '#c26f12', 4.6), P(C(24, 21, 6.4), '', '#f6b45f', 2.8) ] },
    { id: 'gujiya', hi: 'गुजिया', en: 'Gujiya', sh: [
      P('M9,30q0,-22 20,-24q13,3 11,15q-1,11 -12,13q-11,2 -19,-4z', '#eeb85f', '#9d661c', 1.6),
      P('M12,27q1,-18 17,-20', '', '#c98b2e', 1.4),
      P('M40,20q-2,2 -3,0M39,25q-2,2 -3,0M38,30q-2,2 -3,0', '', '#9d661c', 1.4),
      P(C(31, 12, 1.5), '#c98b2e'), P(C(34, 18, 1.4), '#c98b2e'), P(C(32, 25, 1.4), '#c98b2e'),
      P(E(17, 12, 3.4, 2), '#f8d8a0') ] },
    { id: 'soan', hi: 'सोन पापड़ी', en: 'Soan Papdi', sh: [
      P(R(12, 6, 24, 27, 1.5), '#f8e9c0', '#bd9f5c', 1.5),
      P(R(12, 10, 24, 1.4, .7), '#e0c489'), P(R(12, 14, 24, 1.4, .7), '#e0c489'),
      P(R(12, 18, 24, 1.4, .7), '#e0c489'), P(R(12, 22, 24, 1.4, .7), '#e0c489'), P(R(12, 26, 24, 1.4, .7), '#e0c489'),
      P('M20,8h8', '', '#6f9e3f', 2.2) ] },
    { id: 'mysore', hi: 'मैसूर पाक', en: 'Mysore Pak', sh: [
      P('M8,30l3,-9h9l3,-9h13l-3,18z', '#f3c85f', '#ab7f22', 1.5),
      P('M20,21h9', '', '#d8a63c', 1.4),
      P(C(16, 26, 1.5), '#dda939'), P(C(27, 17, 1.5), '#dda939'), P(C(31, 24, 1.4), '#dda939') ] },
    { id: 'balushahi', hi: 'बालूशाही', en: 'Balushahi', sh: [
      P('M24,7q9,-1 12,6q3,8 -3,13q-8,6 -16,1q-8,-4 -6,-13q2,-8 13,-7z', '#e7b165', '#9c6a22', 1.6),
      P(C(24, 21, 4.8), '#c98b3a', '#9c6a22', 1.2),
      P('M12,16q11,-4 24,1', '', '#c07f28', 1.4), P('M13,27q11,5 22,-1', '', '#c07f28', 1.4),
      P(E(17, 14, 3.6, 2), '#f7dcac') ] },
    { id: 'rasmalai', hi: 'रसमलाई', en: 'Rasmalai', sh: [
      P(E(24, 28, 17, 7.5), '#f7edd6', '#cbba95', 1.5),
      P(E(24, 22, 13, 7), '#fffdf7', '#d8cbb0', 1.5),
      P(E(24, 17, 11, 5.5), '#fffefb', '#ddd0b4', 1.4),
      P(C(19, 15, 1.4), '#e2a33c'), P(C(28, 17, 1.3), '#e2a33c'),
      P('M22,12h5', '', '#6f9e3f', 2.2), P(E(15, 27, 3, 1.4), '#ffffff') ] },
    { id: 'sandesh', hi: 'संदेश', en: 'Sandesh', sh: [
      P('M24,7q7,0 7,5q6,-2 8,4q3,5 -2,8q3,6 -4,7q-3,5 -9,2q-6,3 -9,-2q-7,-1 -4,-7q-5,-3 -2,-8q2,-6 8,-4q0,-5 7,-5z', '#fdf3e0', '#c9ae7f', 1.5),
      P(C(24, 21, 5.5), '#f1e2c4', '#c9ae7f', 1.2),
      P(C(24, 21, 2.2), '#d9bd88'),
      P(C(24, 15, 1.2), '#c9ae7f'), P(C(30, 21, 1.2), '#c9ae7f'), P(C(24, 27, 1.2), '#c9ae7f'), P(C(18, 21, 1.2), '#c9ae7f') ] },
    { id: 'chamcham', hi: 'चमचम', en: 'Cham Cham', sh: [
      P('M11,21q0,-8 13,-8q13,0 13,8q0,8 -13,8q-13,0 -13,-8z', '#f6bccb', '#c9808f', 1.6),
      P('M13,17q11,-3 22,0', '', '#e79fb2', 1.4),
      P(C(16, 19, 1.4), '#ffffff'), P(C(22, 16, 1.3), '#ffffff'), P(C(29, 18, 1.4), '#ffffff'),
      P(C(20, 24, 1.3), '#ffffff'), P(C(28, 24, 1.3), '#ffffff'), P(C(33, 21, 1.2), '#ffffff') ] },
    { id: 'ghevar', hi: 'घेवर', en: 'Ghevar', sh: [
      P(C(24, 22, 13.5), '#e6b355', '#a97a24', 1.6),
      P(C(24, 22, 9.5), '', '#cf9a37', 1.3),
      P(C(17, 19, 2.1), '#c08c2c'), P(C(27, 17, 1.9), '#c08c2c'), P(C(31, 24, 2), '#c08c2c'),
      P(C(20, 27, 1.9), '#c08c2c'), P(C(26, 28, 1.7), '#c08c2c'), P(C(24, 22, 2.2), '#c08c2c'),
      P(E(24, 13, 9, 3.4), '#fdf7e8', '#d8c9a4', 1.2),
      P(C(21, 12, 1.2), '#e2a33c'), P(C(27, 12, 1.1), '#6f9e3f') ] }
  ],
  west: [
    { id: 'macaron', hi: 'मैकरॉन', en: 'Macaron', sh: [
      P('M10,20q0,-11 14,-11q14,0 14,11z', '#f7c6d6', '#cf8b9f', 1.5),
      P(R(10, 19, 28, 5, 1.5), '#fdf0dd', '#dcc39b', 1),
      P('M10,23q0,11 14,11q14,0 14,-11z', '#f7c6d6', '#cf8b9f', 1.5) ] },
    { id: 'cupcake', hi: 'कपकेक', en: 'Cupcake', sh: [
      P('M14,22h20l-3,14h-14z', '#7fc7d4', '#4d8b96', 1.5),
      P('M15,25h18', '', '#4d8b96', 1), 
      P('M14,23q0,-13 10,-13q10,0 10,13z', '#f7b8ce', '#d1849e', 1.5),
      P(C(24, 7, 2.8), '#d0424f', '#95252f', 1) ] },
    { id: 'brownie', hi: 'ब्राउनी', en: 'Brownie', sh: [
      P(R(6, 15, 36, 18, 3), '#f6ecd8', '#c9b48c', 1.2),
      P(R(9, 10, 30, 19, 1.5), '#8a5732', '#3f2110', 1.5),
      P(R(9, 10, 30, 6, 1.5), '#a06c40'),
      P(C(16, 20, 1.8), '#e0bb85'), P(C(26, 23, 1.6), '#e0bb85'), P(C(32, 17, 1.5), '#e0bb85'),
      P('M9,16h30', '', '#5e3a1f', 1.1) ] },
    { id: 'cookie', hi: 'कुकी', en: 'Chip Cookie', sh: [
      P(C(24, 21, 13), '#ddb173', '#a5763a', 1.5),
      P(C(19, 17, 2.2), '#4a2a16'), P(C(29, 19, 2), '#3d2211'), P(C(23, 26, 2.2), '#4a2a16'), P(C(31, 27, 1.7), '#3d2211') ] },
    { id: 'donut', hi: 'डोनट', en: 'Donut', sh: [
      RING(24, 21, 13, 4.5, '#e2a563', '#a97127'),
      P('M11,21q0,-12 13,-12q13,0 13,12q0,4 -3,4q-2,-6 -10,-6q-8,0 -10,6q-3,0 -3,-4z', '#f4a7c6', '#d1799c', 1.2),
      P(R(15, 13, 4, 1.6, .8), '#ffffff'), P(R(27, 15, 4, 1.6, .8), '#8fd0e0'), P(R(21, 11, 4, 1.6, .8), '#f7e06a') ] },
    { id: 'cheesecake', hi: 'चीज़केक', en: 'Cheesecake', sh: [
      P('M10,31l3,-14h24l-1,14z', '#fbefd6', '#c9b48c', 1.5),
      P('M10,31h26l1,-4h-27z', '#cf9a5c', '#a06f24', 1.2),
      P('M13,17h24l-1,4h-23z', '#d94f66', '#a82b45', 1.2),
      P(C(19, 14, 3), '#c62c3f', '#8f1d2e', 1), P(C(29, 14, 2.6), '#d94f5c', '#8f1d2e', 1) ] },
    { id: 'tiramisu', hi: 'तिरामिसू', en: 'Tiramisu', sh: [
      P(R(6, 27, 36, 6, 3), '#f6ecd8', '#c9b48c', 1.2),
      P(R(9, 9, 30, 20, 1.5), '#f8e8c4', '#b08a55', 1.5),
      P(R(9, 9, 30, 5, 1.5), '#8a5a34'),
      P(R(9, 17, 30, 2.6, 1), '#cfa96f'), P(R(9, 23, 30, 2.6, 1), '#cfa96f'),
      P(C(16, 12, 1.2), '#6b4326'), P(C(28, 11, 1.1), '#6b4326') ] },
    { id: 'swissroll', hi: 'स्विस रोल', en: 'Swiss Roll', sh: [
      P(E(24, 21, 13, 11), '#f3dab5', '#bb9560', 1.5),
      P(E(24, 21, 8, 6.6), '#e8a06a', '#c98551', 1.2),
      P(E(24, 21, 3.4, 2.8), '#f7e6cd', '#c98551', 1) ] },
    { id: 'pie', hi: 'चेरी पाई', en: 'Cherry Pie', sh: [
      P(E(24, 26, 15, 8.5), '#dfa960', '#a06f24', 1.5),
      P(R(11, 21, 26, 2, 1), '#eec081'), P(R(11, 26, 26, 2, 1), '#eec081'),
      P(C(19, 23, 2.2), '#c62c3f'), P(C(28, 24, 2), '#c62c3f'), P(C(24, 29, 1.8), '#a81f31') ] },
    { id: 'waffle', hi: 'वफ़ल', en: 'Waffle', sh: [
      P(R(9, 12, 30, 19, 3), '#e3b26a', '#a97b2c', 1.5),
      P(R(9, 18, 30, 1.6, .8), '#c99347'), P(R(9, 24, 30, 1.6, .8), '#c99347'),
      P(R(18, 12, 1.6, 19, .8), '#c99347'), P(R(28, 12, 1.6, 19, .8), '#c99347'),
      P(C(31, 15, 2.2), '#7b3f5f') ] },
    { id: 'icecream', hi: 'आइसक्रीम', en: 'Ice Cream', sh: [
      P('M17,20h14l-7,17z', '#dfae66', '#a97b2c', 1.5),
      P(C(24, 15, 9), '#a9d8cf', '#6fa79e', 1.5),
      P('M16,12q4,-6 9,-5q6,1 7,6q-4,-3 -8,-2q-5,1 -8,1z', '#6b4326') ] },
    { id: 'lollipop', hi: 'लॉलीपॉप', en: 'Lollipop', sh: [
      P(R(23, 26, 2, 11, 1), '#ddd7c9', '#a9a291', 1),
      RING(24, 17, 11, 8, '#f2f0ea', '#c9c2b0'),
      RING(24, 17, 8, 5, '#d94f5c', '#a83744'),
      P(C(24, 17, 4.6), '#f2f0ea', '#c9c2b0', 1.2) ] }
  ]
};

/* ---- ids, derived from the English names ----
   NOT stable, despite what this comment used to claim. These strings are
   written into design_id / palette_id / texture_id in the database, and they
   are a pure function of the display name — so editing "Gingham Check" to
   "Gingham Check Paper" repoints every lifafa ever made with it.
   If you rename an entry, you are performing a data migration. Either keep the
   old id by adding an explicit `id`, or write SQL to move the stored rows. */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const DESIGN_LIST: Design[] = PAPERS.map((x) => ({ ...x, id: slug(x.en) }));
export const PALETTE_LIST: Palette[] = PALETTES.map((p) => ({
  ...p,
  id: slug(p.name.split("\u00b7").pop() ?? p.name),
}));
export const TEXTURE_LIST: Texture[] = TEXTURES.map((t) => ({ ...t, id: slug(t.en) }));
export const DENOM_LIST: Denom[] = DENOMS;
export const SALUTATION_LIST: string[] = SALUTATIONS;
export const OCCASION_LIST = OCCASIONS;
export const COPY = T;
export const SWEET_LIST = SWEETS_ART;
export const ALL_SWEETS: Sweet[] = [...SWEETS_ART.desi, ...SWEETS_ART.west];

/* An id that isn't in the catalogue means a STORED lifafa points at a paper,
   palette or texture that no longer exists — almost always because an English
   name was edited and the derived id moved with it. The old behaviour was to
   quietly return list item 0, so the receiver opened an envelope that was not
   the one the sender built, and nobody ever found out.
   Dev and test throw, so it surfaces the moment it is introduced. Production
   logs and still renders: a wrong-looking envelope is bad, but crashing on
   somebody opening a gift is worse, and the log is what gets it fixed. */
function unknownId(kind: string, id: string): void {
  const msg =
    `Unknown ${kind} id ${JSON.stringify(id)} — a stored lifafa references a ` +
    `catalogue entry that no longer exists. Renaming an entry changes its id.`;
  if (process.env.NODE_ENV !== "production") throw new Error(msg);
  console.error(`[lifafa] ${msg}`);
}

/* Named, so reordering the arrays cannot quietly change what a broken lifafa
   falls back to. TEXTURE_LIST[1] used to be spelled as a bare index. */
const FALLBACK_DESIGN = DESIGN_LIST[0];
const FALLBACK_PALETTE = PALETTE_LIST[0];
const FALLBACK_TEXTURE =
  TEXTURE_LIST.find((t) => t.id === "handmade") ?? TEXTURE_LIST[0];

export const designById = (id: string) => {
  const found = DESIGN_LIST.find((x) => x.id === id);
  if (found) return found;
  unknownId("design", id);
  return FALLBACK_DESIGN;
};
export const paletteById = (id: string) => {
  const found = PALETTE_LIST.find((x) => x.id === id);
  if (found) return found;
  unknownId("palette", id);
  return FALLBACK_PALETTE;
};
export const textureById = (id: string) => {
  const found = TEXTURE_LIST.find((x) => x.id === id);
  if (found) return found;
  unknownId("texture", id);
  return FALLBACK_TEXTURE;
};
export const sweetById = (id: string | null) =>
  id ? ALL_SWEETS.find((x) => x.id === id) ?? null : null;
export const occasionById = (id: string | null) =>
  id ? OCCASION_LIST.find((x) => x.id === id) ?? null : null;

/* Compose the paper: texture layer over pattern layer over the base colour —
   exactly the order the canvas uses. */
/* Palettes carry a motif colour (`lace`) chosen by eye, and by eye alone it
   swings from 7.8:1 contrast on aubergine down to 2.0:1 on blush, where white
   on pink is very nearly invisible. That is why a pattern looked like it
   "vanished" when you changed the colour: the design was still selected, it
   just had nothing left to show against the paper.

   So the motif is never used raw. It is pushed away from the paper until it
   clears a floor, which keeps all 21 papers legible on all 14 colours. */

const srgb = (c: number) => {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};

const rgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as [number, number, number];
};

const lum = (hex: string) => {
  const [r, g, b] = rgb(hex);
  return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
};

const contrast = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const hex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");

/** Blend `c` toward black or white by `t` (0 to 1). */
const shift = (c: string, toward: 0 | 255, t: number) => {
  const [r, g, b] = rgb(c);
  return `#${hex(r + (toward - r) * t)}${hex(g + (toward - g) * t)}${hex(b + (toward - b) * t)}`;
};

const MIN_CONTRAST = 3.4;

/** A motif colour guaranteed to read against this paper. */
export function motifFor(lace: string, base: string) {
  if (contrast(lace, base) >= MIN_CONTRAST) return lace;
  // Pale paper wants a darker motif; dark paper wants a lighter one.
  const toward: 0 | 255 = lum(base) > 0.4 ? 0 : 255;
  for (let t = 0.15; t <= 1; t += 0.15) {
    const c = shift(lace, toward, t);
    if (contrast(c, base) >= MIN_CONTRAST) return c;
  }
  return toward === 0 ? "#241a10" : "#fff6e2";
}

const isPale = (hex: string) => lum(hex) > 0.5;

export function paperStyle(designId: string, paletteId: string, textureId: string) {
  const pal = paletteById(paletteId);
  const des = designById(designId);
  const tex = textureById(textureId);
  const motif = motifFor(pal.lace, pal.base);
  const pat = des.f(motif, pal.base, isPale(pal.base) ? "#3a2a18" : "#ffffff");
  const patImg = pat[0] === "none" ? "" : pat[0];
  const image = tex.img && patImg ? `${tex.img}, ${patImg}` : tex.img || patImg || "none";
  const size = tex.img && patImg ? `${tex.size}, ${pat[1]}` : tex.img ? tex.size : patImg ? pat[1] : "auto";
  return { pal, des, image, size };
}

/* How many pieces of each mithai sit in the dabba. The small round ones come
   as a pair, the way they actually arrive; anything big enough to be a
   portion on its own (a ghevar, a slab of kalakand, a cheesecake) stays
   single. */
const SINGLE_PIECE = new Set([
  // desi: too big, or already drawn as a stack
  "kalakand", "jalebi", "imarti", "soan", "mysore", "rasmalai", "ghevar",
  // western: a whole slice or a whole cone is one serving
  "cupcake", "brownie", "cheesecake", "tiramisu", "swissroll", "pie",
  "waffle", "icecream", "lollipop",
]);

export const piecesOf = (id: string | null | undefined): 1 | 2 =>
  id && !SINGLE_PIECE.has(id) ? 2 : 1;
