# 归藏式单文件 HTML Deck（可选路由）

当用户说「做成 PPT」「翻页演示」「演讲稿」且不要可编辑 PPTX 时，走这条路：单文件 HTML 横向翻页 deck。

## Deck 机制（参考 guizang-ppt-skill 的契约）

- `#deck` 为横向滚动容器：`display:flex`，每页 `.slide` 固定 `100vw × 100svh`，`scroll-snap-type: x mandatory`，隐藏滚动条。
- 翻页输入：键盘 `←` `→` `Space` `Home` `End`、滚轮（纵向 deltaY 转横向）、触屏滑动（原生横向滚动天然支持）、右下页码圆点点击、目录页条目点击跳页。
- 每页结构：`<section class="slide dark|paper">` + 可选 `.chrome`（左上栏目名 / 右上页号）+ `.foot`（左下页说明 / 右下状态）。
- `.chrome` 的栏目标签跨页稳定、可复用；页面钩子句（kicker）每页不同——两者不要写成同义重复。
- 主题切换（左下圆点）只改 `data-theme` 与 `.art` 图，不动 DOM。
- 页码与当前页由 `scroll` 事件回推 `Math.round(scrollLeft / clientWidth)`；`resize` 时重吸附到当前页。

## 与 Fable 主题的融合规则

- 深色页（封面 / 目录 / 章节 / 收尾）：`background: var(--hero)` + 全幅 `.art`（`object-fit:cover` + 每 mode `--art-pos`）+ `.wash` 色场罩（hero 色，opacity ≈ 0.84），文字反白。
- 纸面页（证据 / 数据 / 长文）：`--paper` 底 + `--ink` 字，图表用 `--mode-accent` 单一强调，次要系列 `#D1CFC5` / `#87867F`。
- 字号阶梯：封面标题 clamp(52px, 9vw, 120px)；章节大字 clamp(44px, 7.5vw, 100px)；正文页标题 clamp(30px, 4vw, 44px)；正文 13–16px；chrome/foot 10–12px mono 全大写 tracked。
- 封面标题用「两行错位」（第二行 `margin-left: .8em`），不要居中对称。
- 每页一个可复述的结论；6–10 页为宜。

## 关键坑（真实踩过）

1. **负 z-index 全幅图必须配 `isolation:isolate`**：`.art`/`.wash` 用 `z-index:-1/-2` 压在 slide 背景之上时，`.slide` 必须同时有 `position:relative` + `isolation:isolate`，否则子元素会被 slide 自身的 `background` 盖住——图片「已加载但不可见」。
2. **dark 页上的强调词不能用 `--mode-accent`**：night 下 `#27314B` 在 `#27314B` 背景上不可见。深色页强调词用 `--paper`（或降一档透明度），纸面页才用 mode accent。通用规则：任何文字色先问「这页背景是什么」。
3. `<img>` 标签写了 `width/height` 属性会压过 CSS `aspect-ratio`；需要自适应裁切时补 `height:auto`。
4. iOS WebKit 上入场动画不可靠：内容默认可见（不用 opacity:0 起手），动效只做加分项。
5. 滚轮换页在 `.slide` 内部监听，避免嵌套滚动被吃掉；`passive:false` 才能 `preventDefault`。

## 验收

- 键盘四键 + 圆点 + 目录跳页全部可达；`resize` 后不停在半页。
- 三主题逐页检查文字对比（尤其深色页上的 accent 元素）。
- 桌面 1920×1080 与 390×844 均无横向溢出、无文字裁切。
- `prefers-reduced-motion` 下 snap 关闭但内容完整可读。

参考实现：`examples/theme-deck.html`。动效库按需引入（如 Motion One），本仓库示例为零依赖纯原生实现。
