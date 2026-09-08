# GPT Image 2 prompt recipes

Use these as starting points, then replace the subject with the user's real content. Keep all exact copy outside the image.

## Noon

```text
Original editorial archive image for a calm blue theme. Wide 16:9 landscape, abstract paper-and-glass observatory object on a quiet blue field, layered contour lines like a physical topographic map, one small warm clay circular marker, subtle tactile paper grain, restrained low-saturation palette anchored in #749BD0 and #FAF9F5, generous clean negative space on the left for overlaid typography, no text, no letters, no logo, no brand marks, no people, no official characters, no gradient, no neon, no UI, no watermark.
```

## Night

```text
Original editorial archive image for a deep night theme. Wide 16:9 landscape, abstract technical archive instrument in a dark blue-black room, folded metal and paper forms, sparse constellation-like pinpoints and one precise diagram line, restrained palette anchored in #27314B and #1A2237 with a tiny muted signal accent, generous clean negative space on the right for overlaid typography, no text, no letters, no logo, no brand marks, no people, no official characters, no gradient, no neon glow, no UI, no watermark.
```

## Morning

```text
Original editorial archive image for a warm morning theme. Wide 16:9 landscape, an archival reading table with folded ivory vellum, a translucent botanical specimen sheet, a small gray-violet stone and soft terracotta thread, tactile warm paper grain, restrained palette anchored in #FAF9F5, #AAA9BC and #DCC4B3, generous clean negative space on the upper right for overlaid typography, no text, no letters, no logo, no brand marks, no people, no official characters, no gradient, no UI, no watermark.
```

## Transparent ambient plate addendum

When the output uses the layered ambient glass route, append this requirement to any mode prompt:

```text
Isolate the authored archive composition from the field as a clean translucent ambient plate. Deliver a true alpha-channel PNG/WebP with zero-alpha feathering at all outer edges, no rectangular matte, no white/black halo, no opaque background color, and no text. Preserve a deliberate text-safe negative-space region. The plate will sit under neutral paper-toned liquid glass, so keep focal detail crisp and peripheral detail progressively translucent.
```

If the image model cannot return alpha, generate on a simple separable field and derive an alpha mask in post-processing. Audit the plate composited on both `#F6F3ED` and a 20% darker neutral. CSS `opacity` on an opaque rectangle is fallback only.

## Quality gate

Reject and regenerate if the subject sits under the planned title, if text-like marks appear, if the palette becomes neon/gradient, or if the image is so photorealistic that it implies a factual source. A generated visual is a visual asset, not evidence.
