import Link from "next/link";
import { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";
import { OceanRibbon } from "@/components/ocean-ribbon";

/**
 * A project card exposes two distinct, unambiguous actions:
 *
 * 1. The card itself (including its title and body) is a full-bleed link
 *    to the Hub detail page — implemented as an absolutely positioned
 *    overlay `<Link>` with z-index 0, so any click lands on it.
 * 2. "Open ↗" is a separate, real `<a>` with an explicit higher z-index
 *    that sits on top of the overlay, so it always wins the click
 *    regardless of DOM order. It is a sibling of the overlay link, not
 *    nested inside it, so no click-bubbling workaround is needed.
 *
 * The status badge (top) communicates development maturity; the action
 * area (bottom) communicates whether there's something public to view.
 * The two are independent — a project can be "In progress" and still
 * have an Open link, or "Use-ready" and still have none. When there's
 * nothing public to show yet, the action area is simply omitted rather
 * than filled with a redundant status repeat.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { slug, name, description, status, tags, featured, accent, url, hideOpenOnCard } =
    project;
  const showOpenAction = Boolean(url) && !hideOpenOnCard;

  return (
    <article
      className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-3xl p-6 glass-panel card-surface sm:p-8 ${
        featured ? "min-h-[20rem] sm:min-h-[22rem] lg:p-12" : "min-h-[16rem]"
      }`}
    >
      {/* Card identity glow, tied to this project's accent colors. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        style={{
          background: `radial-gradient(circle, ${accent.from}, ${accent.to} 70%, transparent 75%)`,
        }}
      />

      {featured && <OceanRibbon />}

      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 z-0 rounded-[inherit]"
        aria-label={`View ${name} details`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <StatusBadge status={status} />
        {featured && (
          <span className="rounded-full border border-glass-border bg-white/[0.03] px-2.5 py-1 text-xs font-medium tracking-wide text-cyan-glow">
            Featured
          </span>
        )}
      </div>

      <div className="relative mt-6 flex flex-1 flex-col justify-end gap-3 sm:mt-8">
        <h3
          className={`font-display leading-tight text-foreground ${
            featured
              ? "text-4xl sm:text-5xl"
              : "flex min-h-[2.4em] items-center text-2xl sm:text-3xl"
          }`}
        >
          {name}
        </h3>
        <p
          className={`max-w-md text-sm leading-relaxed text-muted sm:text-base ${
            featured ? "" : "min-h-[4.8em] line-clamp-3"
          }`}
        >
          {description}
        </p>

        <div
          className={`mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 ${
            featured ? "" : "min-h-[5.5rem]"
          }`}
        >
          <ul className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-muted-2"
              >
                {tag}
              </li>
            ))}
          </ul>

          {showOpenAction && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 rounded-full border border-glass-border bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-cyan-glow/50 hover:bg-white/[0.08] hover:text-cyan-glow"
              aria-label={`Open ${name} (opens in a new tab)`}
            >
              Open <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
