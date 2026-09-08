# Source audit

- Source: https://www.anthropic.com/claude-fable-and-mythos-5-1
- Checked: 2026-09-02
- Scope: public hero theme controls and public CSS tokens only.
- Public control labels found in the rendered page: `Noon`, `Night`, `Morning`.
- Control swatches found in the page markup: `Noon #7EA9DE`, `Night #1A2237`, `Morning #DCC4B3`.
- Public hero CSS default: `--fx-sky: #749BD0`.
- Public hero state rules: `.night { --fx-sky: #27314B; }`, `.morning { --fx-sky: #AAA9BC; }`.
- Public layout observations: 68px ivory navigation, 100svh full-bleed hero, max 1280px desktop grid, 12 columns with 32px gutters, serif display title, tracked sans date, numbered index with dot leaders, lower-corner swatches/credit, 640px reading column, 880px media/chart cap.
- Public typography layer names observed: Anthropic Sans, Anthropic Serif, Anthropic Mono, Copernicus, Styrene A/B, Tiempos Text, JetBrains Mono.

## Reproduction boundary

This repository does not ship Anthropic fonts, logo, page source, official illustrations, Three.js hero assets, or copied CSS bundles. The theme recipes are an independent, implementation-neutral extraction of color, hierarchy, spacing, and interaction patterns. Use licensed fonts/assets or local fallbacks, and label output as a style study when appropriate.
