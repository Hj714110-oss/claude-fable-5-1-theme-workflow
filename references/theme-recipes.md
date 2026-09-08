# Theme recipes

## Shared layout skeleton

```html
<header class="site-header">...</header>
<main data-theme="morning">
  <section class="hero">
    <div class="hero-grid">
      <p class="date">DATE / VERSION</p>
      <h1>Primary title<br><em>Second line</em></h1>
      <nav class="archive-index">[01] ........ Section</nav>
    </div>
    <div class="theme-swatches">...</div>
  </section>
  <article class="reading-column">...</article>
</main>
```

## CSS state contract

```css
[data-theme="noon"] {
  --hero: #749BD0; --swatch: #7EA9DE;
  --hero-ink: #FAF9F5; --hero-shadow: #1428461C;
}
[data-theme="night"] {
  --hero: #27314B; --swatch: #1A2237;
  --hero-ink: #FAF9F5; --hero-shadow: #0D13261C;
}
[data-theme="morning"] {
  --hero: #AAA9BC; --swatch: #DCC4B3;
  --hero-ink: #FAF9F5; --hero-shadow: #3A35401C;
}
```

## Component recipes

### Hero / cover

- Use one solid `--hero` field, no gradient.
- Put date in 12–14px tracked sans.
- Use 64–80px serif display at desktop; 36–48px on mobile.
- Keep title in a centered 6-column span on desktop, but allow the second line to offset rather than forcing a symmetric lockup.
- Put the archive index below with 14–15px serif text and a flexible dot leader.
- Place 18px swatches at the lower left and credit/status at lower right.

### Archive index

- Numbers use sans/mono; section names use serif.
- On hover, lower the opacity and add at most 0.5px blur to non-target rows. Never blur the focus target.
- Use real anchor links and visible focus rings.

### Reading page

- Keep body text in a 640px column.
- Place charts/media in a wider 880px frame only when evidence needs it.
- Use `#FAF9F5` as the default paper and `#141413` as ink. Use `#D1CFC5` for rules and secondary series.
- A clay/olive/fig/cactus accent may be used as a semantic highlight, but never compete with the mode color.

### Archive deck

- 16:9 fixed stage; 12×8 planning grid.
- Cover: hero color, index, date, title.
- Evidence: paper background, oversized section number, one chart/table/image, one short interpretation.
- Timeline: horizontal rule or vertical spine, dates as anchors, no equal-card process wall.
- Closing: explicit source/status and one next action; no generic “Thank you” filler.

## Responsive rules

At <= 760px: collapse the 12-column grid to one reading flow; keep the hero at least 88svh; move the index to horizontal overflow or a details disclosure; reduce title size before reducing contrast; keep swatches and status inside safe-area padding.

At `prefers-reduced-motion: reduce`: remove blur/transform entrance effects, leave opacity 1, and preserve all content and focus states.
