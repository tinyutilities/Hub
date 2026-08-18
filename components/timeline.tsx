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
 */
export function Timeline({ projects }: { projects: Project[] }) {
  return (
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

      {/* The timeline intentionally continues past what's shown here —
          not a placeholder project, just an understated close. */}
      <li className="relative flex lg:justify-center">
        <span
          aria-hidden="true"
          className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-muted-2/70 lg:left-1/2"
        />
        <p className="pl-10 text-sm italic text-muted-2 lg:pl-0 lg:text-center">
          More to come.
        </p>
      </li>
    </ol>
  );
}
