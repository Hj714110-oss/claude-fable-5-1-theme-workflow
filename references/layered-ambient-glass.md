# Layered Ambient Glass Mode

## Design Read

Reading this as: a long-form archive report for executive and technical readers, anchor = neutral editorial glass, differentiator = one translucent authored artwork plate that changes under stable paper and glass, avoiding whole-document recoloring and generic glass-card walls.

## Material contract

- The paper, ink, typography, rules, and reading surfaces stay neutral across Noon / Night / Morning.
- Every mode provides one transparent RGBA ambient plate. Switching mode swaps that plate and only a restrained accent used by links, active controls, evidence highlights, and select rules.
- Glass is reserved for the hero, full-width image bands, navigation, and the compact theme control. Dense prose, tables, sources, and footnotes stay opaque or near-opaque.
- A generated source image is not automatically transparent. Produce a canonical alpha PNG/WebP by either:
  1. generating on a clean separable field and deriving a feathered alpha mask, or
  2. generating/editing with an alpha-capable model and auditing edge halos.
- CSS `opacity` alone is an acceptable fallback but is not equivalent to a true alpha asset: it fades the whole rectangle and can leave a visible box.

## Layer order

1. neutral paper substrate;
2. one mode-specific transparent ambient plate;
3. translucent wash for text safety;
4. glass panel with backdrop blur, inner highlight, one-pixel refractive edge, and broad tinted shadow;
5. neutral ink and restrained accent.

## Default material values

- Glass fill: white 0.38–0.58.
- Blur: 14–20px desktop, 9–12px mobile.
- Border: 1px translucent white plus subtle inset highlight.
- Corner radius: 22–30px on large image-bound glass only; do not round every content block.
- Ambient alpha: feather to zero at image edges; target mean alpha around 35–50%, with focal details no higher than ~88%.
- Neutral paper: `#F6F3ED`; ink: `#191918`; rules: neutral ink at 14–18% opacity.

## Switching contract

The theme controller changes the root `data-theme`. Theme tokens may change only:

- `--ambient` / artwork source;
- `--accent`, `--accent-strong`, `--accent-soft`, `--accent-mid`;
- optional ambient positioning and a subtle shadow tint.

It must not recolor body paper, prose ink, every card, or every section background.

## Accessibility and fallbacks

- Normal prose contrast remains ≥4.5:1 independently of artwork.
- Never place long reading text directly on a low-opacity image.
- Provide `prefers-reduced-transparency` and no-backdrop-filter fallbacks with near-opaque neutral paper.
- Decorative ambient plates are CSS backgrounds or `aria-hidden`; meaningful source imagery remains `<img>` with accurate alt text.
- Mobile must retain a legible text-safe region and avoid large GPU-heavy fixed blur layers.

## Quality gate

Reject the output if any of these occur:

- switching produces a blue/yellow/orange wash over the full document;
- the artwork rectangle is visible against paper;
- glass is applied to all cards or prose blocks;
- text contrast depends on a particular image crop;
- image edges show dark/white matte halos;
- the three modes change layout or content;
- image swap, focus states, reduced-motion/transparency, or mobile crop fails.
