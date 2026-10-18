export const themes = [{
  id: 'powerpuff',
  zh: '飞天小女警',
  en: 'Powerpuff Run',
  dark: true,
  full: true,
  image: '/assets/girls-DdYx5Y_k.webp'
}, {
  id: 'cubes',
  zh: 'BNZ兔兔蹦床',
  en: 'BNZ Trampoline',
  dark: false,
  full: true,
  image: '/assets/cubes-uwM7ImYV.webp'
}, {
  id: 'particle',
  zh: '粒子封面',
  en: 'Particle Cover',
  dark: true,
  full: true,
  image: '/assets/particles-D2O7hMp1.webp'
}, {
  id: 'vinyl',
  zh: '涂鸦唱片',
  en: 'Doodle Vinyl',
  dark: false,
  full: false,
  image: '/assets/vinyl-SWCCGo6r.webp'
}, {
  id: 'flow',
  zh: '音乐流场',
  en: 'Aurora Flow',
  dark: true,
  full: true,
  art: true
}, {
  id: 'flock',
  zh: '群游花园',
  en: 'Flock Garden',
  dark: true,
  full: true,
  art: true
}, {
  id: 'lyric',
  zh: '歌词变形',
  en: 'Lyric Morph',
  dark: true,
  full: true,
  art: true
}];
export const isDarkTheme = id => themes.find(t => t.id === id)?.dark ?? false;
export const isFullscreenTheme = id => themes.find(t => t.id === id)?.full ?? false;
export const isArtTheme = id => themes.some(t => t.id === id && t.art);

// [key, Chinese label, English label, default, minimum, maximum, step]
export const controls = {
  flow: [['speed', '流速', 'Flow speed', 1, .3, 2, .1], ['curl', '卷曲', 'Curl', 1.2, .3, 2.5, .1], ['trail', '拖尾', 'Trails', .8, .1, 1, .05], ['response', '响应强度', 'Response', 1, 0, 2, .1]],
  flock: [['count', '鱼群数量', 'Fish count', 90, 30, 120, 10], ['cohesion', '聚合程度', 'Cohesion', 1, .2, 2, .1], ['speed', '游动速度', 'Swim speed', 1, .3, 2, .1]],
  lyric: [['density', '粒子密度', 'Particle density', 1, .4, 1.5, .1], ['breath', '呼吸幅度', 'Breathing', .5, 0, 1, .1], ['gather', '聚合速度', 'Gather speed', 1, .4, 2, .1]]
};
export const defaults = id => ({
  ...Object.fromEntries(controls[id].map(c => [c[0], c[3]])),
  quality: 'auto'
});
export function sanitizeParams(id, input) {
  const result = defaults(id);
  for (const [key,,, initial, min, max] of controls[id]) {
    const value = input?.[key];
    result[key] = typeof value === 'number' && Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : initial;
  }
  if (['auto', 'high', 'medium', 'low'].includes(input?.quality)) result.quality = input.quality;
  return result;
}
export function readParams(id, storage = globalThis.localStorage) {
  try {
    return sanitizeParams(id, JSON.parse(storage.getItem(`bunnybeats.art.${id}.v1`)));
  } catch {
    return defaults(id);
  }
}
