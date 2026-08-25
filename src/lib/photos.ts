/* Photographs for the blog.
 *
 * These come from Wikimedia Commons, NOT from Google Images. That distinction
 * is the whole point of this file, so it is worth writing down.
 *
 * Google Images is a search index. It shows you pictures that belong to other
 * people, and adding a credit line underneath one does not give you the right
 * to publish it. bkl3's own rulebook already says this: "Attribution is not a
 * license." Credit is something a licence usually REQUIRES, not something that
 * creates one.
 *
 * Everything below carries a real Creative Commons licence that permits
 * commercial reuse, on the condition that we name the photographer and the
 * licence. That condition is met by the caption the blog renders under each
 * image, which is built from these fields. Do not add an entry here unless you
 * have checked the licence on the file's Commons page.
 *
 * Licences in use:
 *   CC BY 4.0 / 2.0   attribution
 *   CC BY-SA 4.0      attribution, and derivatives share alike
 */

export type Photo = {
  src: string;
  alt: string;
  /** Photographer, exactly as credited on Commons. */
  by: string;
  licence: "CC BY-SA 4.0" | "CC BY 4.0" | "CC BY 2.0";
  /** The file page, which the credit links to. Required by the licence. */
  page: string;
};

const LICENCE_URL: Record<Photo["licence"], string> = {
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
};

export const licenceUrl = (l: Photo["licence"]) => LICENCE_URL[l];

export const PHOTOS: Record<string, Photo> = {
  pookkalam: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Onam_Pookkalam_2024.jpg/1280px-Onam_Pookkalam_2024.jpg",
    alt: "A pookkalam, the circular carpet of flowers laid at the doorway during Onam",
    by: "Mithunsangamam",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Onam_Pookkalam_2024.jpg",
  },
  pookkalamThrissur: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Onam_pookkalam_20160905.jpg/1280px-Onam_pookkalam_20160905.jpg",
    alt: "A large pookkalam of concentric flower rings",
    by: "Ramesh ram",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Onam_pookkalam_20160905.jpg",
  },
  rakhiOnHand: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rakhi_on_hand_01.jpg/1280px-Rakhi_on_hand_01.jpg",
    alt: "A rakhi tied on a wrist",
    by: "Suyash.dwivedi",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Rakhi_on_hand_01.jpg",
  },
  rakhiShopping: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rakhi_shopping_Raksha_Bandhan_Hindu_festival.jpg/1280px-Rakhi_shopping_Raksha_Bandhan_Hindu_festival.jpg",
    alt: "A market stall selling rakhis before Raksha Bandhan",
    by: "vishal dutta photo's",
    licence: "CC BY 2.0",
    page: "https://commons.wikimedia.org/wiki/File:Rakhi_shopping_Raksha_Bandhan_Hindu_festival.jpg",
  },
};

export const photo = (key: string): Photo | null => PHOTOS[key] ?? null;
