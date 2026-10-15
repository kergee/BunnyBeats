import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePlaylist, parsePlaylist } from '../../shared/song-schema.js';
const song = { id: 'one', title: 'One', audioSrc: '/assets/one.mp3' };

test('valid playlists preserve extra metadata and receive safe display defaults', () => {
  const value = normalizePlaylist([{ ...song, composer: 'Someone' }]);
  assert.equal(value[0].composer, 'Someone');
  assert.equal(value[0].artist, 'Unknown Artist');
  assert.equal(value[0].cubesTheme, 'pink');
  assert.deepEqual(normalizePlaylist([]), []);
  assert.deepEqual(parsePlaylist('\uFEFF[]'), []);
  assert.equal(normalizePlaylist([{ ...song, themeColor: '#abc' }])[0].themeColor, '#abc');
});

test('malformed, duplicate and incompatible song data fail explicitly', () => {
  for (const value of ['{broken', '{}', '[null]', JSON.stringify([song, song]), JSON.stringify([{ ...song, title: 12 }]), JSON.stringify([{ ...song, themeColor: 'red' }])]) {
    assert.throws(() => parsePlaylist(value));
  }
});
