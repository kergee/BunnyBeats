import { attentionAudio, cookieAudio, dittoAudio, hypeboyAudio, omgAudio, supernaturalAudio } from "./audio.js";
import { dittoLyrics } from "./lyrics/ditto.js";
import { supernaturalLyrics } from "./lyrics/supernatural.js";
import { attentionLyrics } from "./lyrics/attention.js";
import { hypeboyLyrics } from "./lyrics/hypeboy.js";
import { omgLyrics } from "./lyrics/omg.js";
import { cookieLyrics } from "./lyrics/cookie.js";
const dittoCover = "/assets/Ditto%20-%20250%20Remix-C6lqyMPC.webp";
const supernaturalCover = "/assets/Supernatural%20-%20250%20Remix-BYtHv05p.webp";
const kC = "/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp";
const jC = "/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp";
const XC = "/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp";
const WC = "/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp";
const songs = window.__NJZ_SONGS__ && Array.isArray(window.__NJZ_SONGS__) && window.__NJZ_SONGS__.length ? window.__NJZ_SONGS__ : [{
  id: "ditto",
  title: "Ditto - 250 Remix",
  artist: "NewJeans",
  album: "OMG",
  audioSrc: dittoAudio,
  lrcSrc: dittoLyrics,
  coverUrl: dittoCover,
  themeColor: "#F05A66",
  cubesTheme: "pink"
}, {
  id: "supernatural",
  title: "Supernatural - 250 Remix",
  artist: "NewJeans",
  album: "Supernatural",
  audioSrc: supernaturalAudio,
  lrcSrc: supernaturalLyrics,
  coverUrl: supernaturalCover,
  themeColor: "#656EE5",
  cubesTheme: "purple"
}, {
  id: "attention",
  title: "Attention - 250 Remix",
  artist: "NewJeans",
  album: "New Jeans",
  audioSrc: attentionAudio,
  lrcSrc: attentionLyrics,
  coverUrl: kC,
  themeColor: "#6BC567",
  cubesTheme: "green"
}, {
  id: "hypeboy",
  title: "Hype Boy - 250 Remix",
  artist: "NewJeans",
  album: "New Jeans",
  audioSrc: hypeboyAudio,
  lrcSrc: hypeboyLyrics,
  coverUrl: jC,
  themeColor: "#6BC567",
  cubesTheme: "green"
}, {
  id: "omg",
  title: "OMG - FRNK Remix",
  artist: "NewJeans",
  album: "OMG",
  audioSrc: omgAudio,
  lrcSrc: omgLyrics,
  coverUrl: XC,
  themeColor: "#6BC567",
  cubesTheme: "green"
}, {
  id: "cookie",
  title: "Cookie - FRNK Remix",
  artist: "NewJeans",
  album: "New Jeans",
  audioSrc: cookieAudio,
  lrcSrc: cookieLyrics,
  coverUrl: WC,
  themeColor: "#6BC567",
  cubesTheme: "green"
}];
const getSongById = s => songs.find(e => e.id === s);
const getDefaultSong = () => songs[0];
export { getDefaultSong, getSongById, songs };
//# sourceMappingURL=songs.js.map
