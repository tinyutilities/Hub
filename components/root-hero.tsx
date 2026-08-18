import { RootSite } from "@/lib/root";
import { StatusBadge } from "@/components/status-badge";

/**
 * The homepage's largest, most visually important element — TinyUtility
 * itself, the root the project timeline grows out of. Reuses the same
 * glass/typography/motion language as every card on the page, scaled up.
 *
 * Unlike a project card, this has exactly one action (visit the real
 * site), so it's a single real `<a>` wrapping the whole card rather than
 * the two-action stretched-link pattern used elsewhere — no ambiguity
 * to resolve, no nested-link concerns, one clear tab stop.
 */
export function RootHero({ root }: { root: RootSite }) {
  const { name, tagline, status, url, tags, accent } = root;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} (opens in a new tab)`}
      className="group relative isolate block overflow-hidden rounded-3xl p-8 glass-panel card-surface sm:p-12 lg:p-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        style={{
          background: `radial-gradient(circle, ${accent.from}, ${accent.to} 70%, transparent 75%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accent.to}, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <StatusBadge status={status} />
      </div>

      <div className="relative mt-8 flex flex-col gap-4 sm:mt-12 sm:gap-5">
        <h2 className="font-display text-5xl italic leading-none text-foreground sm:text-7xl lg:text-8xl">
          {name}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {tagline}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-muted-2"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-1 rounded-full border border-glass-border bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-cyan-glow/50 group-hover:bg-white/[0.08] group-hover:text-cyan-glow">
            Visit TinyUtility <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </a>
  );
}
