/* Which lifafas the decorations use.
 *
 * Plain data, apart from the components, so a test can check the ids resolve
 * without pulling JSX into the node test runner. A typo here would make a
 * lifafa silently disappear from the page rather than fail anything. */

/** Scattered behind the hero and the page mastheads. Positions are percent so
 *  they hold at any width; the edge ones are meant to run off it. */
export const SCATTER = [
  { id: "diwali-diya-rani", l: -7, t: 4, w: 220, rot: -18 },
  { id: "wedding-damask-gold", l: 76, t: -6, w: 250, rot: 14 },
  { id: "rakhi-thread-rani", l: 26, t: -10, w: 150, rot: 7 },
  { id: "eid-crescent-blue", l: 54, t: 2, w: 165, rot: -9 },
  { id: "ganesh-lotus-marigold", l: 8, t: 44, w: 175, rot: 11 },
  { id: "janmashtami-mor", l: 84, t: 40, w: 215, rot: -12 },
  { id: "onam-kasavu", l: 40, t: 66, w: 160, rot: 5 },
  { id: "diwali-kolam-blue", l: -4, t: 76, w: 195, rot: -7 },
  { id: "wedding-peacock", l: 66, t: 78, w: 180, rot: 10 },
  { id: "rakhi-bandhani-blush", l: 22, t: 30, w: 130, rot: -14 },
];

/** Fanned out like a hand of cards. */
export const FAN = [
  { id: "onam-kasavu", rot: -14, x: -240, y: 26, z: 1 },
  { id: "rakhi-thread-rani", rot: -7, x: -122, y: 8, z: 2 },
  { id: "diwali-diya-rani", rot: 0, x: 0, y: 0, z: 3 },
  { id: "wedding-damask-gold", rot: 7, x: 122, y: 8, z: 2 },
  { id: "janmashtami-mor", rot: 14, x: 240, y: 26, z: 1 },
];
