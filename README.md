# Claude Fable 5.1 Theme Workflow

An agent skill that distills the **publicly visible colour states** of Anthropic's Claude Fable 5.1 page — **Noon** (blue), **Night** (deep blue-black), and **Morning** (warm paper / gray-violet) — into a reusable design system for archive-style editorial pages, research reports, fixed-stage decks, data stories, and social/print cards.

> **Style study — not official, not affiliated with Anthropic.** This repository ships no Anthropic fonts, logos, illustrations, 3D assets, or page source code. It is an independent, implementation-neutral extraction of colour, hierarchy, spacing, and interaction patterns observed on a public page (see [`references/source-audit.md`](references/source-audit.md)).

## Screenshots

The demo below is [`examples/theme-lab.html`](examples/theme-lab.html) — one fictional article rendered in all three modes. The hero is a full-bleed mode artwork under a colour-field wash; the overlaid grid (date / title / standfirst / index) never moves when modes switch.

| Noon | Night | Morning |
|---|---|---|
| ![Noon mode](docs/screenshots/noon-desktop.webp) | ![Night mode](docs/screenshots/night-desktop.webp) | ![Morning mode](docs/screenshots/morning-desktop.webp) |

| Evidence section | Mobile |
|---|---|
| ![Evidence section](docs/screenshots/evidence-desktop.webp) | ![Mobile](docs/screenshots/noon-mobile.webp) |

## Contents

```
SKILL.md                          The skill (agent-instruction format)
references/
  source-audit.md                 What was observed on the public page, and the reproduction boundary
  theme-tokens.json               Colour / spacing / layout / typography tokens
  theme-recipes.md                Layout skeleton, CSS state contract, component recipes, responsive rules
  output-matrix.md                Which mode fits which output; recommended recipes
  image-prompts.md                GPT Image 2 prompt recipes + quality gate for mode artwork
  layered-ambient-glass.md        Optional route: neutral paper + transparent ambient plates + local glass
examples/
  theme-lab.html                  Self-contained three-mode demo (fictional content)
  assets/*.webp                   Original GPT Image 2 concept art + one editorial illustration
docs/screenshots/                 Verification screenshots of the demo
```

## Usage

Copy the skill folder into any agent-skill-compatible loader (e.g. Claude Code `~/.claude/skills/`, Cursor, or Minis), then ask for things like:

- “用 Noon/Night/Morning 三个主题做一份档案式 HTML 专题页”
- “Make an archive-style deck in the Fable 5.1 night style”
- “把这页官网风格迁移成 morning 编辑长文”

Open `examples/theme-lab.html` directly in a browser to try the demo; the theme switcher in the header swaps the mode tokens and the mode artwork without changing the DOM structure.

## What the skill enforces

- **Three named states, used one at a time** — never blended into a gradient poster.
- **Archive grammar**: date/version line, numbered index with dot leaders, asymmetric serif titles, solid colour fields, a 640px reading column, and a visible source/credit line. At least four of these on every output.
- **Output routing**: editorial web, fixed-stage 16:9 archive deck, research/data story, social/print card — each with its own composition rules.
- **Generated-image workflow** (opt-in): one independent, text-free mode artwork per state with composition bias (Noon subject-right, Night subject-left, Morning lower-left), real `alt` text, and an explicit “unofficial asset, not evidence” boundary. Prompt recipes included.
- **Layered ambient glass route** for image-led pages: stable neutral paper + true-alpha ambient plates + restrained local glass instead of recolouring the whole document.
- **Anti-slop gates**: no purple-blue gradients, no glassmorphism walls, no “centered hero + three cards + CTA” SaaS template, no emoji icons, no fake data presented as real.
- **Accessibility & states**: visible focus, keyboard-navigable index, `prefers-reduced-motion`, mobile breakpoint, no external font/network dependency required to stay readable.

## Fonts

The public page loads proprietary typefaces (Anthropic Sans/Serif/Mono, Copernicus, Styrene, Tiempos, JetBrains Mono). They are **not** distributed here. Use licensed copies if you have them; otherwise the skill maps to system fallbacks: Georgia/Times for display, Arial/Helvetica/Aptos for UI, ui-monospace/Menlo for data.

## Generated assets

`examples/assets/*.webp` are original images generated with GPT Image 2 from the prompt recipes in `references/image-prompts.md`. They contain no text, logos, people, or brand marks, are not official Anthropic material, and are not evidence of anything. Regenerate your own with the same recipes if you prefer.

## 中文摘要

这是一个从 Anthropic Claude Fable 5.1 官网**公开可见的三种色彩状态**（Noon 蓝 / Night 深蓝黑 / Morning 暖白）提炼出的可迁移设计系统 Skill，用于档案式网页、研究报告、16:9 Deck、数据叙事和社交卡片。仓库不含任何官方字体、Logo、插画或页面源码，示例内容全部虚构；示例图均为 GPT Image 2 原创概念图（非官方资产、不作为证据）。详细提炼记录见 `references/source-audit.md`。

## License

MIT — see [LICENSE](LICENSE). “Claude”, “Fable” and related marks belong to Anthropic; this project is an unofficial style study with no affiliation or endorsement.
