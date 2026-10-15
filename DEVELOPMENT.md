# BunnyBeats 开发与发布

使用 Node.js 22.12+、Rust/Tauri 2 对应平台工具链。前端、Cargo 和 Tauri 配置版本统一为 0.1.6；正式发布以 GitHub Release 状态为准。

## 本地开发

```powershell
npm ci
npm run dev
# http://127.0.0.1:5173/

npm run desktop:dev
# Tauri 自动启动 8080 前端服务；先关闭占用该端口的旧静态服务器。
```

`index.vite.html` 是当前源码入口，Vite 开发时将 `/` 映射到它，构建后输出 `dist/index.html`。根目录 `index.html`、`bootstrap.js` 和原始哈希资源保留为旧版参考；静态服务启动根目录会运行旧版，不包含本轮业务修复。

业务代码位于 `src/app/`、`src/lyrics/`、`shared/` 和 `src/song-manager/`。`src/recovered/` 是不可变的恢复基线；新代码复用同一个恢复版 React 实例，避免混用两份 React 的 hook。

## 校验和构建

```powershell
npm run check:release
npm run verify:recovery
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview
```

- `check:release` 检查版本、JSON、开发/构建命令、PNG 图标。设置 `RELEASE_TAG=v0.1.6` 时还会校验标签与版本一致。
- `verify:recovery` 只检查基线完整性，不检查新业务代码与原包相同。
- `npm test` 使用临时磁盘目录和可注入故障的文件系统适配器，验证歌词和导入失败边界，不接触真实歌单。
- 浏览器测试运行本地构建产物（4180 端口），包括真实鼠标拖动、歌词请求取消、主题切换、设置恢复和歌曲管理器。管理器测试在 Chromium 的隔离 OPFS 目录中写入，不打开或修改用户项目文件夹。
- `build` 同时打包播放器和歌曲管理器，只复制运行所需媒体与数据，并检查没有混入旧包、源码、node_modules 或备份目录。

```powershell
npm run desktop:build -- --ci --bundles nsis -- --locked
```

桌面构建自动先执行前端构建。Windows NSIS 安装器位于 `src-tauri/target/release/bundle/nsis/`。构建、安装、真实桌面运行、代码签名和正式发布是不同的验证步骤，应分别记录。

## CI 和发布

`frontend-checks.yml` 在 main 推送和 PR 上运行，也作为桌面发布的前置检查：锁文件安装、版本和还原基线校验、逻辑测试、源码构建、Chromium 回归。

`tauri-build.yml` 在 `v*` 标签推送或手动指定现有标签时运行。四个平台均先安装 npm 依赖，通过 Tauri 的 `beforeBuildCommand` 构建源码，不再复制整个仓库。工作流显式使用 `npx tauri`，避免 Action 默认寻找不存在的 `npm run tauri` 脚本。发布标签必须等于三个版本文件中的版本；Tauri action 仍创建草稿 release。仅修正工作流时，可从 main 手动运行并指定原版本标签，让构建继续使用该标签的源码。

首次接入时需要把源码、package/lock、测试、构建脚本及工作流一并提交。未跟踪文件不会出现在 GitHub runner。不要把 `recovery/`、本地歌单备份、node_modules、dist 或 target 加入提交。推送新的匹配标签后，由 Actions 执行构建并创建草稿 Release。

仓库已有 `v0.1.5` 标签。本轮使用新的 `v0.1.6` 标签触发源码构建，保留已有标签。工作流先创建草稿 Release，只有人工发布后才是正式版本。

## 导入边界

歌曲管理器目前仍用于选择并编辑本地项目目录，不是桌面版的原生用户歌曲库。它在验证通过后备份旧歌单，另存冲突素材，最后提交歌单。失败时只清理本次创建的素材；若提交结果无法确认，会保留素材并明确提示检查。

同一浏览器中使用 Web Lock 防止工具互相覆盖，提交前还会检查歌单是否被外部修改。File System Access API 没有跨多个文件的全局事务，也没有跨外部编辑器的原子比较交换；保存时应避免其他程序同时编辑 songs.json。权限或磁盘故障可能阻止清理，界面会列出保留文件及备份位置。

## 本轮本地验证（2026-10-15）

| 验证项 | 结果 |
| --- | --- |
| 还原基线 | 独立校验通过，35 个模块；原始 JS/CSS 哈希未变 |
| 逻辑回归 | Windows Node 24、WSL2 Ubuntu Node 22.22.2 各 17/17 通过 |
| Chromium 回归 | 9/9 通过，测试最新 dist；含实际拖动、切歌取消请求及 OPFS 导入 |
| 前端产物 | 类型检查、Vite 构建和 dist 内容检查通过 |
| Windows 原生启动 | 最新 release/app.exe 在 WebView2 142 中启动，800×600 画面正常；本地媒体就绪，点击后进度增长且未静音，无捕获到的页面异常 |
| Windows 安装包 | NSIS x64 生成成功，22,801,780 字节，未签名 |

安装器 SHA-256：`3cbf0e8580685333d0c8b185a5103aa7439ad51ae4a6ac9dc46c40423b44dad6`。本地截图、原生检查记录及校验摘要保存在忽略目录 `recovery/phase1-validation-20261015/`；原生检查使用独立 WebView2 数据目录，不修改用户的真实歌曲目录。

原生检查确认媒体状态和渲染，没有验证扬声器实际出声、安装/卸载或长时间播放。GitHub Actions 和 macOS/Linux 安装包尚未运行验证；此处是推送前的本地验证记录；云端运行结果应另外核对 GitHub Actions。
