# BunnyBeats 源码恢复记录

本次使用 REA 重新分析原始发布文件，并在本机 WSL2 / Ubuntu 中运行 REA 6.4.0 + Wakaru 1.14.0。还原基线位于 `src/recovered/`。后续业务开发位于 `src/app/`，入口为 `src/main.tsx`。原始发布 JS、CSS、静态入口及还原基线保持原样。

## 使用

```powershell
npm ci
npm run dev
# http://127.0.0.1:5173/

npm run check
npm run verify:recovery
npm run build
npm run preview
```

`npm run build` 生成 `dist/index.html`，并复制音频、图片、歌单管理工具和站点图标。`npm run dev:tauri` 使用 8080 端口，可对接已有 Tauri devUrl。根目录 `index.html` + `bootstrap.js` 仍可用静态服务器运行原始发布版本。

恢复完成后的第一轮改进已将 GitHub Actions 改为构建业务源码，并在桌面打包前运行基线检查、逻辑测试和浏览器回归。此处记录还原依据；当前开发、导入及发布方式见 `DEVELOPMENT.md` 和 `SONGS.md`。修改工作流不代表已在 GitHub 运行或发布新版本。

## 源码位置

| 内容 | 位置 |
| --- | --- |
| 原始音频状态、切歌、拖动、缓冲恢复、界面状态基线 | `src/recovered/App.js` |
| 当前业务播放器、外部歌词修复 | `src/app/App.js`、`src/lyrics/` |
| Three.js 蹦床、着色器、兔子跳跃 | `src/recovered/visualizers/CubesVisualizer.js` |
| Canvas 飞天小女警、视差、精灵、拖尾、歌词 | `src/recovered/visualizers/PowerpuffRun.js` |
| 封面粒子 | `src/recovered/visualizers/ParticleCover.js` |
| 唱片旋转及滑板兔 | `src/recovered/visualizers/VinylRecord.js` |
| 控件、抽屉、滚动及全屏歌词 | `src/recovered/components/` |
| 四个主题的原始默认值、滑杆、开关 | `src/recovered/settings/` |
| 六首歌曲、音频路径、完整内置歌词 | `src/recovered/data/` |
| 歌词解析、排版常量 | `src/recovered/lyrics/` |
| 中英文界面、语言初始化 | `src/recovered/i18n/` |
| 原包中的 React、Three.js、i18next、图标等代码 | `src/recovered/vendor/` |
| 完整展开的原始样式 | `src/recovered/styles.css` |
| 模块哈希、来源范围、符号映射和依赖关系 | `src/recovered/recovery-manifest.json` |

应用保留发布包里的 JSX runtime 调用和第三方库实现，避免替换运行时引入行为差异。代码已格式化、拆分模块，恢复 83 个显式属性参数名，并为 87 个顶层符号和 75 个播放器局部变量补充语义名称。补充的名称是分析命名，不是找回的原始名称。

`song-manager.html/js`、`bootstrap.js` 和 `src-tauri/` 本来就有源代码，无需反编译。恢复阶段保留了这些文件；后续第一轮改进更新了歌曲管理器和 Tauri 构建配置。所有发布包顶层语句和完整 CSS 都纳入恢复校验。

## 为什么没有直接采用自动工具输出

WSL 中的 `recover_javascript_sources` 成功完成：13 个模块、0 个失败、0 条工具警告，并保存了来源字节范围和 source map。原始输出位于本机 `recovery/2026-10-15-rea/wakaru/`。其中 `modules/entry.js` 包含工具转换出的 JSX，可作为阅读参考。

但本次自动输出存在具体结构问题：原包第一段预加载 IIFE 中的 `return` 原本只退出预加载函数；自动结果把后续应用代码并入该函数体。在支持 `modulepreload` 的浏览器里，这个提前返回会跳过后续启动代码。因此原始自动输出保留为分析证据，没有直接成为默认入口。

可运行版本由 `tools/recovery/recover-source.mjs` 从未修改的原包 AST 提取：只拆分顶层声明、按词法绑定重命名、生成模块导入导出，保留表达式、分支、数值、字面量、算法和 JSX runtime 调用。恢复后的每个模块都带来源映射。原始 source map 未随发布包提供；生成的映射只指回发布 JS，不能还原丢失的 TypeScript 工程。

## 校验依据

原始 JS SHA-256：

```text
8407f9eab50b4b90d1be2bd6f2b82cd8eb837237cb1395b3a1ea6c2fc03c5a9d
```

原始 CSS SHA-256：

```text
c0ba11dc333ae9d058041028ff69d83ae64019d079e4579bcf7d9476e97f2ea4
```

`npm run verify:recovery` 独立读取磁盘上的恢复结果，不重新生成源文件。它检查：

- 原始文件及 35 个模块的哈希。
- 436 条原始顶层语句拆成 1111 个声明/语句后，重新拼接所得 AST 与原包保持词法绑定等价。
- 71 条模块依赖边和 136 个导入绑定能够解析，且无循环依赖。
- 六个歌词原始模板字面量逐字一致，共 491 条时间歌词：80 / 50 / 75 / 73 / 109 / 104。
- CSS 的 1433 个节点及其层级、选择器、声明值一致，包括空白自定义属性值。

校验同时识别 Git 在 Windows/Linux 间转换的 CRLF/LF：实际字节哈希会单独报告，换行统一后的固定哈希与 AST 仍须一致。恢复文件通过 `.gitattributes` 固定为 LF。来源范围针对 manifest 中记录的原始字节版本。

恢复基线的规范 AST SHA-256：

```text
74062b8ebcb92c1b3382d584f2714d13f1079d5e4cefe441a11e66669f284567
```

该检查用于确认恢复基线。业务修改应放在 `src/app/` 或其他业务模块，保留 `src/recovered/` 不变。`npm run recover:source` 会重新生成基线文件，覆盖对基线的手工修改；使用前应提交或备份改动。业务行为由 `npm test` 和 `npm run test:e2e` 单独验证，不用放宽基线校验。

静态 AST 校验不等于所有浏览器、声卡、GPU、桌面平台行为完全等价；实际浏览器验证结果单独记录在本机证据目录中。Windows/macOS/Linux 安装器、设备音频听感和发布验收未在本次验证。

本次通过 Tabbit 浏览器在原始静态版与还原开发版上分别执行并核对：播放和暂停、实际鼠标拖动进度、拖动后恢复非静音、前后切歌、歌单选曲、四主题切换及画布尺寸、图片加载、390×844 窄屏与底部抽屉、设置修改后刷新恢复、重置、中英文来回切换。已观察到的页面异常列表均为空。桌面浏览器窄屏模拟不是实体手机测试。

另外打开 `dist/` 的本地生产预览，确认默认歌曲、画布、加载层移除和图片正常；用浏览器临时响应模拟一个自定义 `songs.json`，确认歌曲和歌词均进入页面。该测试没有改写真实 `songs.json`。这些是有限场景验证，不能据此声称所有平台和所有故障条件已穷尽测试。

## REA 证据及备份

| 证据 | 标识或本机位置 |
| --- | --- |
| 原始静态应用分析 | `ev_2fddd48b5d86dd0f2cdae471405a3f18682e8b21d03cf5df0cff05449ff9027f` |
| WSL 自动源码恢复 | `ev_a2ffb1ba87a30fec7f6e94cbf6ea0c54a1dc1682c46fa2a6970bc875565222a9` |
| REA 原始证据包 | `recovery/2026-10-15-rea/evidence/rea-original.json` |
| WSL 恢复证据 | `recovery/2026-10-15-rea/evidence/rea-wakaru.json` |
| AST 和独立校验结果 | `recovery/2026-10-15-rea/evidence/*verification.json` |
| 上一版还原差异审计 | `recovery/2026-10-15-rea/evidence/previous-reconstruction-audit.md` |
| 修改前源码和配置 | `recovery/2026-10-15-rea/before/` |
| 原始发布文件快照 | `recovery/2026-10-15-rea/artifact/` |

原始 REA 全包语义分析在 1 GiB worker 内存限制处停止，覆盖率为 partial；不能据此声称完整语义分析成功。后续完整保留代码的依据是 AST 和 CSS 校验，不是把该 partial 结果当作全覆盖。

本机快照和大型工具输出统一被根目录 `/recovery/` 忽略；`src/recovered/`、恢复脚本和本文可以纳入 Git。WSL 工具位于 `/home/kergee/.cache/bunnybeats-rea/`，没有改动 Windows REA 注册配置或升级系统 Node/Java。

## 已知恢复边界

已恢复发布包中现存的完整执行代码和数据。原作者的目录组织、全部变量名、被删掉的注释、TypeScript 类型、构建前的 Tailwind 配置及未被打入包中的源码，不能从这个发布包精确找回。模块划分及补充名称属于重建；不能把它称为原始工程逐字恢复。
