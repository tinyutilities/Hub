/**
 * A quiet piece of moonlit ocean living inside the featured card.
 *
 * Purely decorative SVG — layered translucent curves that fade into the
 * glass on the left and gather toward the right edge, plus one faint
 * highlight stroke standing in for a foam/moonlight glint. Drifts very
 * slowly via the shared `.ocean-ribbon` CSS animation (transform-only).
 * `aria-hidden` and `pointer-events-none` so it never competes with the
 * card's click target or its content for attention.
 */
export function OceanRibbon() {
  return (
    <div
      aria-hidden="true"
      className="ocean-ribbon pointer-events-none absolute inset-y-0 right-0 w-full opacity-70 sm:w-3/4"
    >
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ribbon-fade-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0d2847" stopOpacity="0" />
            <stop offset="45%" stopColor="#12365c" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1c4a78" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="ribbon-fade-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123049" stopOpacity="0" />
            <stop offset="55%" stopColor="#1a4066" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6fd3e0" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path
          d="M180 40 C 320 110, 260 190, 420 220 C 560 245, 540 320, 800 340 L800 0 L180 0 Z"
          fill="url(#ribbon-fade-1)"
        />
        <path
          d="M260 400 C 380 330, 340 250, 500 210 C 620 180, 600 90, 800 60 L800 400 Z"
          fill="url(#ribbon-fade-2)"
        />
        <path
          d="M300 150 C 420 190, 460 140, 620 165"
          fill="none"
          stroke="rgba(159, 201, 255, 0.32)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
