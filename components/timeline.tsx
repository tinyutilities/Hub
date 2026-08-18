import { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

const GLOWING_STATUSES = new Set(["live", "use-ready"]);

/**
 * The project journey: a gently curving spine with a small node per
 * project, cards alternating sides on desktop and stacked beside a
 * left-aligned spine on mobile/tablet. Data-driven — adding a project
 * to `lib/projects.ts` is enough, no new markup needed here.
 *
 * The spine is one SVG path (not a rigid straight line), stretched to
 * the list's full height the same way the ambient background and ocean
 * photo stretch their own decorative SVGs — `preserveAspectRatio="none"`
 * inside an absolutely positioned container, so it scales with however
 * tall the list ends up being at any breakpoint or project count.
 *
 * Reuses `ProjectCard` as-is for every entry (including TinyUtility
 * Hub's `spotlight` variant) rather than introducing a parallel card
 * component — the click/Open/hover/focus behavior already lives there.
 *
 * The closing "More to come" isn't a list item — it's a deliberate
 * pause after the journey, so it lives outside the `<ol>` as its own
 * quiet destination: a fading connector thread, a brighter glowing
 * node than the project nodes, a soft halo, and a faint arc.
 */
export function Timeline({ projects }: { projects: Project[] }) {
  return (
    <>
      <ol className="relative flex flex-col gap-14 sm:gap-16 lg:gap-20">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-6 -translate-x-1/2 lg:left-1/2"
          viewBox="0 0 24 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="timeline-spine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--glass-border)" stopOpacity="0" />
              <stop offset="8%" stopColor="var(--glass-border)" stopOpacity="0.9" />
              <stop offset="92%" stopColor="var(--glass-border)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--glass-border)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M12 0 C 18 70, 6 140, 12 220 C 18 300, 6 370, 12 450 C 18 530, 6 600, 12 680 C 18 760, 6 830, 12 900 C 15 940, 9 970, 12 1000"
            fill="none"
            stroke="url(#timeline-spine)"
            strokeWidth="1.5"
          />
        </svg>

        {projects.map((project, index) => {
          const alignRight = index % 2 === 1;
          return (
            <li
              key={project.slug}
              className={`relative flex ${alignRight ? "lg:justify-end" : "lg:justify-start"}`}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-8 h-[14px] w-[14px] -translate-x-1/2 rounded-full lg:left-1/2"
                style={{
                  background: `radial-gradient(circle, ${project.accent.to}, ${project.accent.from})`,
                  boxShadow: GLOWING_STATUSES.has(project.status)
                    ? `0 0 18px 3px ${project.accent.from}55`
                    : undefined,
                }}
              />
              <div
                className={`w-full pl-10 lg:w-[47%] ${
                  alignRight ? "lg:pl-10" : "lg:pr-10"
                }`}
              >
                <ProjectCard project={project} />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="relative flex flex-col items-center pb-6 pt-28 sm:pb-10 sm:pt-36 lg:pt-44">
        {/* A fading thread bridging the last node to this closing
            point — a noticeable pause, not an abrupt jump. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-28 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-glass-border to-transparent sm:h-36 lg:h-44"
        />

        {/* Soft halo behind the text — brighter and broader than a
            timeline node's glow, marking this as the destination. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.22] blur-3xl sm:h-80 sm:w-80"
          style={{
            background: "radial-gradient(circle, var(--cyan-glow), transparent 70%)",
          }}
        />

        {/* A faint dotted arc, echoing the timeline's curve without
            repeating it literally. */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 opacity-[0.18] sm:h-48 sm:w-80"
          viewBox="0 0 320 160"
          fill="none"
        >
          <path
            d="M20 130 C 90 40, 230 40, 300 130"
            stroke="var(--glass-border)"
            strokeWidth="1"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
        </svg>

        {/* The star: brighter and larger than a project node. */}
        <span
          aria-hidden="true"
          className="relative h-3 w-3 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #ffffff, var(--cyan-glow) 60%, transparent 100%)",
            boxShadow: "0 0 24px 6px rgba(111, 211, 224, 0.45)",
          }}
        />

        <div className="relative mt-6 text-center">
          <p className="font-display text-3xl italic text-foreground sm:text-4xl">
            More to come.
          </p>
          <p className="mt-2 text-sm text-muted-2 sm:text-base">
            The journey continues.
          </p>
        </div>
      </div>
    </>
  );
}
