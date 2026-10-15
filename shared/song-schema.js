// Shared by the player and the standalone song manager.
export function validatePlaylist(value) {
  if (!Array.isArray(value)) throw new Error('歌曲列表必须是 JSON 数组。');
  const ids = new Set();
  for (const [index, song] of value.entries()) {
    if (!song || typeof song !== 'object' || Array.isArray(song)) {
      throw new Error(`第 ${index + 1} 首歌曲格式不正确。`);
    }
    for (const field of ['id', 'title', 'audioSrc']) {
      if (typeof song[field] !== 'string' || !song[field].trim()) {
        throw new Error(`第 ${index + 1} 首歌曲缺少 ${field}。`);
      }
    }
    if (ids.has(song.id)) throw new Error(`歌曲 ID 重复：${song.id}`);
    ids.add(song.id);
    for (const field of ['artist', 'album', 'lrcSrc', 'coverUrl', 'themeColor', 'cubesTheme']) {
      if (song[field] != null && typeof song[field] !== 'string') {
        throw new Error(`歌曲 ${song.id} 的 ${field} 必须是文字。`);
      }
    }
    if (song.cubesTheme && !['pink', 'purple', 'green'].includes(song.cubesTheme)) {
      throw new Error(`歌曲 ${song.id} 的 cubesTheme 无效。`);
    }
    if (song.themeColor && !/^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(song.themeColor)) {
      throw new Error(`歌曲 ${song.id} 的 themeColor 必须是有效的十六进制颜色。`);
    }
  }
  return value;
}

export function parsePlaylist(text) {
  let value;
  try {
    value = JSON.parse(text.replace(/^\uFEFF/, ''));
  } catch (cause) {
    throw new Error('songs.json 无法解析；请先修复或从备份恢复，原歌单不会被覆盖。', { cause });
  }
  return validatePlaylist(value);
}

export function normalizePlaylist(value) {
  return validatePlaylist(value).map(song => ({
    ...song,
    artist: song.artist?.trim() || 'Unknown Artist',
    album: song.album?.trim() || 'Unknown Album',
    lrcSrc: song.lrcSrc || '',
    coverUrl: song.coverUrl || '',
    themeColor: song.themeColor || '#F05A66',
    cubesTheme: song.cubesTheme || 'pink',
  }));
}
