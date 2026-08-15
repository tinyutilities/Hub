import Image from "next/image";

/**
 * A real photograph of the sea, used as the artwork inside the featured
 * TinyUtility Hub card — replacing the earlier procedurally-generated
 * SVG water shapes (see git history for `ocean-ribbon.tsx` if that's
 * ever needed again).
 *
 * Occupies the same right-side footprint the generated artwork used to.
 * Two stacked gradients (left-to-right and top-to-bottom) fade the photo
 * into the card's own navy glass — dimming its bright sky and blending
 * its left edge away — so it reads as part of the card rather than a
 * rectangle pasted on top of it. No animation: the photo stays still:
 * the card's existing ambient background and hover motion are the only
 * movement here.
 *
 * `aria-hidden` (with an empty `alt`) and `pointer-events-none` so it
 * never competes with the card's click target or its content.
 */
export function OceanPhoto() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden sm:w-4/5"
    >
      <Image
        src="/images/sea.png"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-[60%_65%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 0%, rgba(5,11,22,0.9) 12%, rgba(5,11,22,0.55) 35%, rgba(5,11,22,0.15) 60%, transparent 85%), " +
            "linear-gradient(180deg, rgba(5,11,22,0.5) 0%, transparent 30%, transparent 65%, rgba(5,11,22,0.55) 100%)",
        }}
      />
    </div>
  );
}
