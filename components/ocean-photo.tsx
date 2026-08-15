import Image from "next/image";

/**
 * A real photograph of the sea, used as the artwork inside the featured
 * TinyUtility Hub card.
 *
 * The image now spans the full card (not just its right portion) so
 * there's no seam where a narrower image wrapper used to meet the
 * card's own glass background — one continuous set of gradients fades
 * it from fully opaque navy on the left (where the title/description
 * sit) to clear on the right, plus a bottom vignette so text stays
 * legible on narrow screens where it wraps across the full width. A
 * soft radial glow sits over the photo's brightest sky break for a
 * more cinematic feel, and a faint blue wash deepens the water.
 *
 * One thin curved line traces a contour in the water — a quiet nod to
 * the ocean's motion — with an extremely slow, subtle drift that
 * respects `prefers-reduced-motion`. Everything else about the photo
 * is static.
 *
 * `aria-hidden` (with an empty `alt`) and `pointer-events-none` so it
 * never competes with the card's click target or its content.
 */
export function OceanPhoto() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Image
        src="/images/sea.png"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-[58%_60%]"
      />

      {/* Lighting pass: a soft warm glow over the sky break, and a
          faint deep-blue wash over the water, both restrained enough
          to read as atmosphere rather than a filter. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(38% 45% at 62% 28%, rgba(226,241,255,0.22), transparent 68%), " +
            "linear-gradient(200deg, transparent 45%, rgba(20,55,95,0.22) 75%, rgba(10,30,55,0.3) 100%)",
        }}
      />

      {/* Blend pass: one continuous gradient field grounding the photo
          into the card — solid on the left for text contrast, a soft
          bottom vignette for mobile (where text wraps full-width),
          and gentle top/right vignettes so the photo fades into the
          card's edges instead of reading as a pasted rectangle. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 0%, rgba(5,11,22,0.94) 22%, rgba(5,11,22,0.72) 40%, rgba(5,11,22,0.32) 60%, rgba(5,11,22,0.08) 78%, transparent 92%), " +
            "linear-gradient(180deg, rgba(5,11,22,0.35) 0%, transparent 22%, transparent 55%, rgba(5,11,22,0.55) 88%, rgba(5,11,22,0.7) 100%), " +
            "linear-gradient(270deg, rgba(5,11,22,0.25) 0%, transparent 10%)",
        }}
      />

      {/* A single, quiet curved line tracing the water — subtle enough
          to read as texture, not decoration. */}
      <svg
        className="ocean-photo-line absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 900 480"
        preserveAspectRatio="none"
      >
        <path
          d="M120 300 C 300 340, 380 265, 560 292 C 700 312, 760 260, 880 275"
          fill="none"
          stroke="rgba(214, 238, 255, 0.55)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
