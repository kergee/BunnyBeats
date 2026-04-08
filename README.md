# BunnyBeats

一个偏视觉化的 Web 音乐播放器项目，支持歌词、封面与主题化展示，并提供了一个本地歌曲管理页面，方便把你自己的歌曲快速接入播放器。

项目当前以静态站点形态运行，同时已为后续 `Tauri` 桌面打包预留了清晰路径（图标与资源组织都可直接复用）。

## 项目亮点

- 视觉驱动的播放器体验（封面、配色、动效）
- 支持外部歌曲清单：优先读取 `songs.json`，失败时回退内置歌单
- 支持歌词文件（`lrc`）与封面图联动
- 内置 `Song Manager` 页面，可用浏览器文件系统 API 自动写入资源和歌单
- 纯前端部署友好，可直接静态托管

## 技术栈

- React（打包产物已在 `assets/`）
- 原生 HTML/CSS/JS（入口与管理页）
- File System Access API（歌曲管理器写文件）

## 快速开始

### 1) 启动本地静态服务

在项目根目录启动任意静态服务器，例如：

```bash
python3 -m http.server 8080
```

然后访问：

- 播放器主页：`http://localhost:8080/`
- 歌曲管理器：`http://localhost:8080/song-manager.html`

### 2) 添加你的歌曲（推荐 UI 方式）

1. 打开 `song-manager.html`
2. 点击 **Choose Project Folder**，选择当前项目目录
3. 填写歌曲信息并上传音频（封面、歌词可选）
4. 点击 **Save Song**
5. 刷新播放器页面即可生效

管理器会自动：

- 写入文件到 `assets/`
- 更新 `songs.json`

## 手动添加歌曲

1. 把音频/封面/歌词文件放进 `assets/`
2. 编辑 `songs.json`，按对象数组添加歌曲
3. 刷新页面

你可以参考 `songs.example.json` 的字段格式：

- `id`：歌曲唯一标识
- `title`：标题
- `artist`：歌手
- `album`：专辑
- `audioSrc`：音频路径（通常是 `/assets/xxx.mp3`）
- `lrcSrc`：歌词路径（可空）
- `coverUrl`：封面路径（可空）
- `themeColor`：主题色（十六进制）
- `cubesTheme`：主题枚举（`pink`/`purple`/`green`）

> 当 `songs.json` 为空数组时，播放器会回退到内置歌单。

## 项目结构

```text
BunnyBeats/
├─ index.html               # 播放器入口
├─ bootstrap.js             # 先加载 songs.json，再加载主 bundle
├─ songs.json               # 你的外部歌单（可为空）
├─ songs.example.json       # 歌单字段参考
├─ song-manager.html        # 本地歌曲管理页
├─ song-manager.js          # 文件写入与 songs.json 更新逻辑
├─ manifest.json            # PWA 清单
├─ assets/                  # 前端资源与歌曲文件
└─ ...
```

## 部署说明

这是一个标准静态站点，可部署到任意静态平台（如 Vercel、Netlify、Cloudflare Pages、GitHub Pages）。

确保部署时包含：

- 根目录静态文件（`index.html`、`manifest.json`、icons）
- `assets/` 目录
- `songs.json`（如果你要使用自定义歌单）

## Tauri 打包准备（进行中）

如果你准备把它打包成桌面应用，建议按下面方式组织图标：

- 先准备一张 `1024x1024` 的 PNG 图标
- 放到：`src-tauri/icon/1024x1024.png`

后续可基于该源图生成 `Tauri` 所需多尺寸图标（`32x32`、`128x128`、`icon.icns`、`icon.ico` 等）。

## Roadmap

- [ ] 接入完整 Tauri 工程并完成桌面端打包
- [ ] 图标与安装包品牌化
- [ ] 增强歌单编辑能力（排序、删除、批量导入）
- [ ] 增强歌词与可视化联动效果
- [ ] 补充构建脚本与开发文档

## 致谢

这个项目的目标是把“听歌”从纯功能体验，升级成更有氛围感的视觉体验。  
如果你也在做类似方向，欢迎基于这个仓库继续二创和扩展。
