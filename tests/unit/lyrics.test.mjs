import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLyrics } from '../../src/lyrics/loadLyrics.js';

test('inline built-in JSON, inline LRC and missing lyrics need no network', async () => {
  const fetcher = () => { throw new Error('unexpected fetch'); };
  assert.deepEqual(await loadLyrics('[{"time":1500,"lyric":"你好"}]', { fetcher }), [{ time: 1.5, text: '你好' }]);
  assert.deepEqual(await loadLyrics('[00:02.25]一行歌词', { fetcher }), [{ time: 2.25, text: '一行歌词' }]);
  assert.deepEqual(await loadLyrics('', { fetcher }), []);
  assert.deepEqual(await loadLyrics(undefined, { fetcher }), []);
});

test('external UTF-8 lyrics use the requested path, signal and CRLF line handling', async () => {
  const controller = new AbortController();
  const lines = await loadLyrics('/assets/中文%20lyrics.lrc', {
    signal: controller.signal,
    fetcher: async (url, options) => {
      assert.equal(url, '/assets/中文%20lyrics.lrc');
      assert.equal(options.signal, controller.signal);
      return new Response('\uFEFF[00:01.00]第一句\r\n[00:03.50]第二句');
    },
  });
  assert.deepEqual(lines, [{ time: 1, text: '第一句' }, { time: 3.5, text: '第二句' }]);
});

test('failed external requests surface an error instead of reusing old lyrics', async () => {
  await assert.rejects(loadLyrics('/missing.lrc', { fetcher: async () => new Response('', { status: 404 }) }), /404/);
  await assert.rejects(loadLyrics('/offline.lrc', { fetcher: async () => { throw new Error('offline'); } }), /offline/);
});

test('cancellation rejects even if a fetch implementation ignores abort', async () => {
  const controller = new AbortController();
  let respond;
  const pending = loadLyrics('/slow.lrc', {
    signal: controller.signal,
    fetcher: () => new Promise(resolve => { respond = resolve; }),
  });
  controller.abort();
  respond(new Response('[00:00.00]old song'));
  await assert.rejects(pending, { name: 'AbortError' });
  await assert.rejects(loadLyrics('[00:00.00]inline', { signal: controller.signal }), { name: 'AbortError' });
});
