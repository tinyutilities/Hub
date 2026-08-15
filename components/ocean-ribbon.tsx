/**
 * A quiet piece of moonlit ocean living inside the featured card.
 *
 * Purely decorative layered SVG — three groups (a soft blurred back fold,
 * a brighter mid fold with a moonlight glint, and a thin flowing
 * highlight line) that fade in from the dark glass on the left and
 * gather toward the right edge. Each layer drifts at its own slow,
 * independent speed via CSS transform animation for a gentle sense of
 * depth, matching the ambient background's technique: transform-only,
 * long-duration, `prefers-reduced-motion`-aware.
 *
 * `aria-hidden` and `pointer-events-none` so it never competes with the
 * card's click target or its content for attention.
 */
export function OceanRibbon() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-80 sm:w-4/5"
    >
      <svg
        viewBox="0 0 900 480"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="fold-back" x1="0" y1="0" x2="1" y2="0.2">
            <stop offset="0%" stopColor="#0c2542" stopOpacity="0" />
            <stop offset="40%" stopColor="#123a63" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#2f6f95" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id="fold-mid" x1="0" y1="0.15" x2="1" y2="0.85">
            <stop offset="0%" stopColor="#123049" stopOpacity="0" />
            <stop offset="45%" stopColor="#1c4a72" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#6fd3e0" stopOpacity="0.32" />
          </linearGradient>
          <radialGradient id="fold-glint" cx="68%" cy="32%" r="50%">
            <stop offset="0%" stopColor="#e8f7ff" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#8fd9ea" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8fd9ea" stopOpacity="0" />
          </radialGradient>
          <filter id="fold-soften" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Back fold: the largest, softest form — sets the overall shape
            and depth, moves the slowest. */}
        <g className="ocean-layer-back">
          <path
            d="M210 -30 C 380 30, 300 170, 500 230 C 650 275, 610 360, 900 400 L900 -30 Z"
            fill="url(#fold-back)"
            filter="url(#fold-soften)"
          />
        </g>

        {/* Mid fold: crisper, brighter toward the right edge, carrying a
            soft moonlight glint — moves at a middle speed. */}
        <g className="ocean-layer-mid">
          <path
            d="M300 500 C 420 410, 370 300, 540 260 C 670 230, 630 130, 900 80 L900 500 Z"
            fill="url(#fold-mid)"
          />
          <ellipse cx="640" cy="150" rx="230" ry="120" fill="url(#fold-glint)" />
        </g>

        {/* A single thin flowing highlight line tracing the fold's ridge,
            standing in for a foam/moonlight glint — moves fastest of the
            three, still slow overall, for a gentle parallax feel. */}
        <g className="ocean-layer-line">
          <path
            d="M330 195 C 460 235, 500 178, 640 198 C 745 213, 765 168, 860 178"
            fill="none"
            stroke="rgba(214, 238, 255, 0.4)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
