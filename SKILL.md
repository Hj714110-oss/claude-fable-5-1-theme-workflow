---
name: Claude Fable 5.1 Theme Workflow
aliases:
  - Fable 5.1 themes
  - Noon Night Morning
  - Claude 5.1 archive style
  - Claude archive editorial
  - 蓝黑暖白档案风
  - Fable archive deck
  - Fable HTML deck
  - 单文件翻页PPT
version: 1.1.0
source: https://www.anthropic.com/claude-fable-and-mythos-5-1
description: >
  从 Anthropic 官方 Claude Fable 5.1 页面提炼 Noon（蓝）、Night（深蓝黑）和 Morning（暖白/灰紫）三种公开视觉状态，
  用于生成档案式 PowerPoint/HTML deck、研究报告、编辑型长文网页、产品发布页、时间线、数据叙事和社交/打印卡片。
  当用户提到 Claude 5.1/Fable 5.1 的蓝黑暖白主题、Noon/Night/Morning、官方页面风格、archive/editorial/archive deck，
  或要求把这套风格迁移到网页、PPT、报告、白皮书时触发。
compatibility: Minis local skills; HTML/CSS/JS; fixed-stage deck renderers; PowerPoint generators
---

# Claude Fable 5.1 Theme Workflow

## 0. 定义与边界

这是一套**从公开页面行为与 CSS 视觉属性提炼的可迁移设计系统**，不是 Anthropic 官方品牌包，也不复制官方 Logo、插画、3D 鸟、私有字体或页面源码。交付时保留来源说明；示例素材必须原创或由用户提供。

官方可见的三个色彩状态是：

| 公开按钮 | 本 Skill 名称 | Hero 基色 | 圆形 swatch | 适合的叙事 |
|---|---|---:|---:|---|
| Noon | `noon` / 蓝 | `#749BD0` | `#7EA9DE` | 发现、研究、公开发布、平静但有能量的数据叙事 |
| Night | `night` / 黑 | `#27314B` | `#1A2237` | 技术、系统、安全、战略、深度工作 |
| Morning | `morning` / 暖白 | `#AAA9BC` | `#DCC4B3` | 档案、人物、历史、案例、长文阅读；页面纸面用 `#FAF9F5` |

`Morning` 的暖白感主要来自页面纸面 `#FAF9F5` 与米色 swatch；官方 hero fallback 本身是灰紫 `#AAA9BC`。不要把两者误写成同一个颜色。

## 1. Design Read（先写再做）

开始前用一句话锁定：

```text
Reading this as: <输出类型> for <受众>, mode = <noon|night|morning>,
archive grammar = <index + date + leader lines>, signature = <一个可复述的视觉动作>.
```

如果用户只说“用这三个主题做出来”，默认做**同一内容的三种色彩变体**，先生成 HTML 实验室；如果明确说 PowerPoint/PPTX，再加固定 16:9 Deck。不要把三种状态混成一张渐变海报。

## 2. Theme 选择

- `noon`：需要“可信、开放、可扫描”的研究主页、指标概览、公开发布、数据图表时选它。大面积蓝，正文仍用纸面白，信号色少用。
- `night`：需要“聚焦、工程、风险、系统结构”的架构说明、技术评审、安全 brief、战略夜读时选它。允许深色封面/章节页，但正文页要保留阅读对比度。
- `morning`：需要“档案、编辑、案例、人和时间”的深度页面、专题报道、白皮书、Archive Deck 时优先选它。纸面白不是空白模板，必须用日期、编号、规则线和非对称阅读列建立性格。

切换不等于换背景色：每种 mode 必须同时改变 hero 氛围、反白文字、线条对比、图表强调色和素材处理；内容结构保持稳定，便于比较。

## 3. Core tokens

### 3.1 颜色

```css
:root {
  --paper: #FAF9F5;
  --paper-2: #F5F4ED;
  --ink: #141413;
  --ink-2: #3D3D3A;
  --cloud: #D1CFC5;
  --cloud-dark: #87867F;
  --oat: #E3DACC;
  --clay: #D97757;
  --olive: #788C5D;
  --cactus: #BCD1CA;
  --fig: #C46686;
  --coral: #EBCECE;
  --error: #BF4D43;
  --focus: #2C84DB;
  --noon-hero: #749BD0;
  --noon-swatch: #7EA9DE;
  --night-hero: #27314B;
  --night-swatch: #1A2237;
  --morning-hero: #AAA9BC;
  --morning-swatch: #DCC4B3;
}
```

颜色原则：一张页面最多一个主 mode 色 + 一个语义强调色；不要使用紫蓝渐变，不要用高饱和霓虹代替 Fable 的低饱和空气感。

### 3.2 字体与比例

官方页面公开加载了 Anthropic Sans / Serif / Mono、Copernicus、Styrene A/B、Tiempos Text 与 JetBrains Mono 等字体层。它们不是随 Skill 分发的资源。优先使用用户已授权的同款字体；否则用以下替代并在交付说明中写明：

- display / 标题：`Georgia`, `Iowan Old Style`, `Times New Roman`, serif
- UI / 导航 / 标签：`Arial`, `Helvetica Neue`, `Aptos`, sans-serif
- 编号 / 代码 / 数据：`ui-monospace`, `SFMono-Regular`, `Menlo`, monospace

建议比例（不要机械缩放）：display 72–80px，section 36–52px，正文 17–20px，caption 12–14px；行高 100%–155%。标题用有性格的衬线，事实和导航用 sans，编号和数据用 mono。

### 3.3 几何与节奏

- 顶部导航：68px；桌面左右安全区 64–80px；移动端 24px。
- 桌面 12 列网格，列间距 32px，内容最大宽 1280–1400px；正文阅读列不超过 640px，媒体/图表不超过 880px。
- 间距阶梯：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128px。
- 默认 hairline 1px，卡面只在确有分组意义时用 12/16/24px 圆角；不要让全页面变成圆角卡片墙。
- 阴影极轻；优先靠色块、规则线、空白和列关系建立层级。

## 4. Archive grammar（必须执行的视觉语法）

每个输出至少选择其中 4 项，封面/章节页至少选择 5 项：

1. **日期或版本行**：tracked sans，全大写或小型大写，作为事实锚点。
2. **编号目录**：`[01]`、`[02]` 与文字之间使用点状 leader line；leader 是结构，不是装饰。
3. **左侧目录**：垂直线 + 黑色或深色胶囊标签；移动端改为横向滚动/折叠目录。
4. **非对称标题**：标题两行不强行居中对齐，第二行可以向右/向内错位；只保留一个主视觉焦点。
5. **大面积单色场**：Noon/Night/Morning 的 hero 用纯色场，不要叠加渐变或玻璃。
6. **纸面阅读列**：正文采用窄列，图表/图片单独放大，避免长行文字。
7. **边界信用**：右下角放版本、来源、状态或“STYLE STUDY / NOT OFFICIAL”，而不是无意义 slogan。
8. **原生索引交互**：hover 时邻近条目轻微降权/模糊；focus-visible 必须清晰，reduced-motion 关闭模糊动画。

招牌动作例子：`标题像档案目录一样展开，leader line 把读者从编号牵到结论。`

## 5. 输出路由

### A. HTML editorial / archive page

适合专题文章、研究主页、品牌档案、案例、产品发布页：

1. 68px 纸面导航；
2. 100svh 单色 hero；
3. 日期 + 非对称 serif 标题 + 4–7 行编号目录；
4. 首段正文落入 640px reading column；
5. 图表/媒体使用 880px 上限；
6. section 之间用 1px 规则和大间距换气；
7. 主题切换只改变 mode tokens，不破坏 DOM 信息架构；
8. 交付单文件 HTML 或本地资源文件夹，支持键盘目录、焦点、移动端与 reduced-motion。

不要把它实现成“居中 hero + 三个 feature cards + CTA”的 SaaS 模板。

### B. Archive PowerPoint / fixed-stage deck

适合研究汇报、产品档案、人物/公司专题、技术 brief：

- 舞台固定 1920×1080 或 13.333×7.5in；12×8 网格；
- 6–10 页：封面、范围、时间线/索引、核心证据、对比/图表、结论/出处；
- 每页一个可复述结论；标题 1–2 行，正文 1–3 个事实单元；
- 封面和章节页使用 mode hero 色，正文页使用 `#FAF9F5` 纸面；Night deck 可让技术页保持深色，但必须保留读数；
- 统一页码、日期、leader line、细规则；页面之间改变构图家族（hero / split / chart-led / timeline / editorial），不要每页复制卡片网格；
- 需可编辑 PPTX 时使用原生生成器或已授权的导出器；HTML deck 不能冒充可编辑 PPTX。

#### B2. 单文件 HTML 翻页 deck（不要可编辑 PPTX 时）

用户要「网页版 PPT / 翻页演讲稿」时，走单文件横向翻页 deck：`100vw × 100svh` 整页 snap、键盘/滚轮/触屏/页码圆点四种翻页、chrome 栏目行 + foot 页脚、深色页全幅 mode 图 + 色场罩 + 反白文字、纸面页放证据与图表，主题切换只改 tokens 与图。机制契约、字号阶梯和踩坑清单（负 z-index 隔离、深色页 accent 不可见、img height 属性等）见 `references/deck-html.md`，参考实现 `examples/theme-deck.html`。

### C. Research report / data story

用 `noon` 讲发现与趋势，用 `night` 讲系统与风险，用 `morning` 讲证据来源与历史脉络。图表用纸面底、单一 mode 色强调，其他系列用 `#D1CFC5` / `#87867F`；所有数字必须来自用户资料或明确标为示意。

### D. Social / print / card

使用档案卡、目录卡、索引页而不是大渐变海报。锁定输出比例（如 4:5、1:1、A4），最多一个标题、一个日期、一个结论、一个出处；保证缩略图下标题仍可读。

## 5.5 Generated image workflow（用户授权时执行）

### 与 GPT Image 2 总控的组合调用契约

当用户在同一条请求中明确列出 `/GPT Image 2 提示词总控`（或明确点名 GPT Image 2）并要求完成 HTML、PPT、报告、发布页等最终视觉成品时，真实图片资产阶段是**必做项**，不是可被静默省略的可选装饰；除非用户明确说只要 Prompt、不要出图或零费用。

- 先宣布图片数量和职责，再执行生成；不把“用了提示词方法论”冒充“用了 GPT Image 2”。
- Noon / Night / Morning 三种状态默认各生成一张独立、无文字、构图方向明确的 mode artwork；禁止复用同图调色。
- 用户同时要求资讯插画时，应另生成正文图，不能拿三张主题图裁切冒充；资讯图只解释概念，不承载不可核验的数字或文字。
- 接入时保留 `GPT Image 2 原创概念图 / 非官方资产 / 不作为证据` 等来源边界，并提供准确 alt。
- 完成声明必须有文件、视觉检查、真实加载、主题切换及桌面 / 手机裁切验证支撑；生成失败时明确列出缺失项，不用 CSS/SVG 占位冒充交付。

图片要承担**编辑锚点**，不是填空装饰。默认用 GPT Image 2 生成原创、无文字、16:9 的 mode artwork，并给 HTML/PPT 同时使用；图片与标题必须各自承担职责，标题、数字、标签和图表不要交给生图模型。

- `noon`：蓝色纸面/等高线/玻璃或观测器，主体偏右，左侧留标题负空间。
- `night`：深蓝黑空间/精密仪器/折叠几何/稀疏信号点，主体偏左，右侧留标题负空间。
- `morning`：暖白纸张/档案桌面/植物标本/陶土线材，主体偏左或左下，右上留阅读负空间。
- 明确禁止：文字、字母、Logo、品牌角色、官方 3D 鸟、UI 截图、水印、霓虹、紫蓝渐变；不要把生成图伪装成官方素材。
- Web 保留 PNG 或 WebP；需要全局透明叠图时，必须交付带 alpha 通道的 RGBA PNG/WebP 并检查边缘 halo，不能把整张 JPG 仅设低 `opacity` 冒充透明素材；PPTX 优先生成/转换为 JPEG，控制尺寸和文件体积；为每张有语义的图写真实 alt text 与来源说明。
- 一种 mode 至少一张主图；同一主图可在该 mode 的 hero、evidence frame、deck 章节页复用，但不要把一张拼图裁成三张假素材。
- 生成多张独立图时并行调用，完成后先做构图、负空间、文字可读性和颜色一致性检查，再接入页面。

可直接使用的 prompt 配方见 `references/image-prompts.md`。

## 5.6 Layered ambient glass（有图片的 HTML 默认）

当用户要求三张 mode 图片、透明叠图、液态玻璃、全局切换或“保留高级感”时，默认不要把整份正文染成三套单色。改用**稳定纸面 + 透明氛围图 + 局部真玻璃 + 克制强调色**：

1. 正文纸面、墨色、字体、规则线在 Noon / Night / Morning 之间保持中性稳定；
2. 每个 mode 提供一张带真实 alpha 通道的透明氛围 PNG/WebP；
3. 切换主题时只交换该氛围图、图片位置与少量 accent tokens；
4. 玻璃只用于 hero、全宽图片章节、导航和小型主题控制器，不覆盖长正文、密集表格、来源和脚注；
5. 玻璃必须有后方图像细节才能成立，并同时具备半透明填充、`backdrop-filter`、1px 折射边、内高光和克制的染色阴影；
6. 原始 JPG/无 alpha PNG 直接设置 `opacity` 只是降透明度，不算透明素材。应先生成/提取羽化 alpha，检查矩形边框与白边/黑边 halo；
7. 提供 `prefers-reduced-transparency` 与不支持 `backdrop-filter` 的近不透明纸面降级。

这一路由优先于“全页面 palette 重染”。只有用户明确要求整页蓝/黄/橙时，才让纸面与正文一起换色。完整材质、层级、参数和门禁见 `references/layered-ambient-glass.md`。

## 6. 实施流程

1. Intake：确认输出类型、受众、页数/比例、真实资料和是否需要 PPTX。
2. Theme lock：选择 `noon` / `night` / `morning`，写入 `DESIGN.md` 或文件头；不在实现中临时换色。
3. Content map：先把内容排成 archive index，给每页/section 一个结论、编号、日期和来源。
4. Build：使用本 Skill 的 tokens、archive grammar 和对应输出配方；没有素材时用原创 CSS/SVG 几何，不伪造照片或 logo。
5. States：至少处理 hover、focus-visible、active、disabled/empty/error（若产品输出存在这些状态）、loading/reduced-motion。
6. Audit：检查 token 漂移、信息密度、文字溢出、对比度、移动端、键盘和本地资源；PPT 逐页看，不只看封面。
7. Deliver：同时给出所选 mode、字体替代、输出路径和未验证项；如 HTML 和 PPTX 都给，明确它们是两个输出，不互相冒充。

## 7. Anti-slop 门禁

以下任一项出现，先回炉再交付：

- 紫到蓝渐变、把玻璃拟态铺满全部正文/卡片、全屏柔和阴影；
- 默认“居中大标题 + 三等宽卡片 + CTA”；
- 全站只用一个普通 sans；
- 过度胶囊化、emoji 当图标、无来源的假数据；
- 每页同一种卡片墙，只有标签颜色改变；
- 直接复制 Anthropic Logo、官方插画/3D 鸟、私有字体文件或页面源码；
- Night 使用纯黑导致正文不可读；Morning 只剩米色而没有档案结构；Noon 变成科技蓝渐变；
- 省略移动端、focus-visible、reduced-motion 或导出格式声明。

## 8. 验收清单

- [ ] 公开主题名称和 hex 正确：Noon / Night / Morning。
- [ ] mode 路由明确：纯色场最多一个主 mode 色；若使用 layered ambient glass，则纸面/墨色稳定，只切透明氛围图与克制 accent。
- [ ] 12 列/阅读列/间距阶梯没有明显漂移。
- [ ] 日期、编号、leader、页码/出处至少四项实际可见。
- [ ] 标题、数据、图表标签无溢出或遮挡；没有未替换模板文案。
- [ ] HTML 在桌面和 390×844 手机检查；PPT 每页检查；键盘和焦点可用。
- [ ] `prefers-reduced-motion` 有静态降级；无外部字体/网络依赖时仍可读。
- [ ] 真实资料/示意资料界线清楚；没有冒充官方或原生可编辑格式。

详细 token、组件配方与输出矩阵见 `references/theme-recipes.md`、`references/output-matrix.md`；官方提炼记录见 `references/source-audit.md`。
