/**
 * Fixed, decorative background: a deep-ocean gradient, a few slow-drifting
 * blurred "sea-glass" orbs, and a faint wave silhouette at the base.
 *
 * Pure CSS/SVG — no canvas, no 3D library, no client JS. Everything here
 * is `aria-hidden` and `pointer-events-none` so it never competes with
 * real content for focus, clicks, or screen-reader attention, and it sits
 * behind the page in a fixed layer so it doesn't affect document flow or
 * scroll performance.
 */
export function OceanAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient: deep navy with a faint moonlit highlight. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% -10%, var(--moon), transparent 60%), " +
            "radial-gradient(140% 100% at 15% 110%, rgba(111,211,224,0.08), transparent 55%), " +
            "linear-gradient(180deg, #050b16 0%, #061020 45%, #050b16 100%)",
        }}
      />

      {/* Ambient drifting sea-glass orbs and one soft ring — small blur
          radii, transform-only animation, cheap even on low-end devices.
          Two orbs (a, d) carry a small off-center highlight layer so they
          read as soft glass spheres with a faint reflection rather than
          flat blurred discs. Positioned around the edges and between
          sections so nothing sits directly behind card content. */}
      <div
        data-drift="a"
        className="ambient-orb hidden opacity-[0.18] sm:block"
        style={{
          top: "8%",
          right: "8%",
          width: "26rem",
          height: "26rem",
          background:
            "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.4), transparent 9%), " +
            "radial-gradient(circle at 35% 35%, #7fd8e8, transparent 70%)",
        }}
      />
      <div
        data-drift="b"
        className="ambient-orb opacity-[0.14]"
        style={{
          bottom: "-4rem",
          left: "-4rem",
          width: "22rem",
          height: "22rem",
          background:
            "radial-gradient(circle at 40% 40%, #8fdcc4, transparent 70%)",
        }}
      />
      <div
        data-drift="c"
        className="ambient-orb hidden opacity-[0.12] lg:block"
        style={{
          top: "38%",
          left: "22%",
          width: "16rem",
          height: "16rem",
          background:
            "radial-gradient(circle at 50% 50%, #b3c8f0, transparent 70%)",
        }}
      />
      <div
        data-drift="d"
        className="ambient-orb hidden opacity-[0.15] lg:block"
        style={{
          top: "58%",
          right: "-3rem",
          width: "15rem",
          height: "15rem",
          background:
            "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.35), transparent 10%), " +
            "radial-gradient(circle at 38% 38%, #7c93f0, transparent 70%)",
        }}
      />

      {/* A single soft ring, standing in for a sea-glass/porthole form.
          Rotates extremely slowly — full turn takes well over two
          minutes, so it reads as still unless watched closely. */}
      <svg
        aria-hidden="true"
        className="ambient-ring hidden opacity-[0.1] lg:block"
        style={{ bottom: "-6rem", right: "-4rem", width: "26rem", height: "26rem" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6fd3e0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c93f0" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="url(#ring-gradient)"
          strokeWidth="10"
        />
      </svg>

      {/* Faint wave silhouette anchoring the bottom of the viewport. */}
      <svg
        className="absolute bottom-0 left-0 h-40 w-full opacity-40 sm:h-56"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 C 240 200, 480 80, 720 130 C 960 180, 1200 90, 1440 140 L1440 240 L0 240 Z"
          fill="url(#wave-gradient)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b2340" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#050b16" stopOpacity="0.95" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
