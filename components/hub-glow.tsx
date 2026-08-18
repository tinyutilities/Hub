/**
 * TinyUtility Hub's own atmosphere — the ocean photograph now belongs
 * to the TinyUtility root hero, so the Hub (the timeline's culmination
 * point) gets a distinct, non-photographic identity: rich navy/cyan
 * light and a few soft layered glass shapes rather than a literal
 * image, so the two "special" cards read as different roles, not
 * duplicates. Built from the same restrained gradient/blur language as
 * the rest of the page — no new visual system, no image, no
 * dependency.
 *
 * Static — this pass keeps the glass surfaces themselves unchanged, so
 * no new animation is introduced here.
 *
 * `aria-hidden` and `pointer-events-none` so it never competes with the
 * card's click target or its content.
 */
export function HubGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {/* Layered translucent glass shapes, standing in for the photo's
          sense of depth. */}
      <div
        className="absolute -right-12 -top-14 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7fd8e8, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 left-[28%] h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7c93f0, transparent 70%)",
        }}
      />
      <div
        className="absolute right-[22%] top-[28%] h-40 w-40 rounded-full opacity-[0.16] blur-2xl"
        style={{
          background: "radial-gradient(circle, #8fdcc4, transparent 70%)",
        }}
      />

      {/* Rich navy wash grounding the shapes into the card. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 75% 15%, rgba(111,211,224,0.14), transparent 60%), " +
            "linear-gradient(200deg, rgba(10,25,48,0.42) 0%, rgba(5,11,22,0.12) 45%, rgba(5,11,22,0.55) 100%)",
        }}
      />

      {/* One subtle curved light accent, echoing the root hero's water
          line without repeating it literally. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 900 480"
        preserveAspectRatio="none"
      >
        <path
          d="M260 70 C 420 130, 480 50, 640 100 C 760 135, 800 80, 880 105"
          fill="none"
          stroke="rgba(180, 225, 255, 0.5)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
