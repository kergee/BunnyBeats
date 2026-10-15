# 添加与管理歌曲

## 图形管理器

1. 运行 `npm run dev`，在 Chrome / Edge 中打开 `http://127.0.0.1:5173/song-manager.html`。
2. 选择 BunnyBeats 项目文件夹。选择目录只读取校验歌单，不会创建或修改文件。
3. 填写歌曲信息，选择音频，可选封面和歌词，再点击保存。
4. 刷新播放器。构建后本地预览中也可使用管理器，但应选择项目目录，之后重新构建才能更新桌面包。

支持 MP3 / WAV / M4A / FLAC / OGG 音频，WebP / PNG / JPEG 封面，LRC / TXT / JSON 时间歌词。

同名素材另存为 `文件名-2.ext` 等新名称，不覆盖原文件。歌曲 ID 已存在时默认阻止保存；勾选“替换同 ID 歌曲”后才更新该条目，旧素材仍保留。

已有 songs.json 在保存前会原样备份到所选目录的 `.bunnybeats-backups/`。格式损坏、字段错误或备份失败时停止导入。保存中断后会尝试清理本次新增素材；若无法确认提交结果或清理失败，界面会保留并列出待检查文件。恢复备份前先保存当前歌单，再将需要的备份复制为 songs.json。

## 歌单格式

songs.json 为数组。空数组 `[]` 使用六首内置歌曲；有自定义歌曲时使用自定义列表。

```json
[
  {
    "id": "my-song",
    "title": "My Song",
    "artist": "Artist",
    "album": "Album",
    "audioSrc": "/assets/My%20Song.mp3",
    "lrcSrc": "/assets/My%20Song.lrc",
    "coverUrl": "/assets/cover.webp",
    "themeColor": "#F05A66",
    "cubesTheme": "pink"
  }
]
```

id、title、audioSrc 必填，ID 不能重复。artist、album、lrcSrc、coverUrl 可省略。themeColor 使用十六进制颜色（支持 3、4、6、8 位）；cubesTheme 为 pink / purple / green。手工填写路径时注意编码空格、# 和 % 等字符；管理器会自动编码。

lrcSrc 支持同站点歌词文件路径、内联 LRC 正文或内联 JSON 时间歌词。不提供歌词时填写空字符串。LRC 使用 `[00:01.50]一句歌词`；JSON 为 `[{"time":1500,"lyric":"一句歌词"}]`，其中 time 单位为毫秒。

外部歌词会异步读取；切歌时取消旧请求，缺少歌词时清空旧歌词。加载失败会显示重试入口，音频仍可继续播放。

歌曲管理器仍需要浏览器的 File System Access API；原生桌面歌曲库将在后续阶段实现。
