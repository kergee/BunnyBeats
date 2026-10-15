const LYRIC_LINE_HEIGHT = 26;
const ROLLING_LYRICS_HEIGHT = LYRIC_LINE_HEIGHT * 2;
const UI_HIDE_DELAY_MS = 2800;
const MOBILE_CONTROLS_EXTRA_PX = 48;
function clampOpacity(s) {
  return Math.max(0, Math.min(1, s));
}
export { LYRIC_LINE_HEIGHT, MOBILE_CONTROLS_EXTRA_PX, ROLLING_LYRICS_HEIGHT, UI_HIDE_DELAY_MS, clampOpacity };
//# sourceMappingURL=layout.js.map
