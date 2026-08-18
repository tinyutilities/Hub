/**
 * Static project data for the Hub.
 *
 * There is no database — every project TinyUtility ships gets one entry
 * here. Adding a new project means adding a new object to this array (and
 * optionally a card/detail visual accent); no new page components or
 * routes are required, since `/projects/[slug]` renders any entry found
 * in this list.
 */

export type ProjectStatus =
  | "live"
  | "use-ready"
  | "in-progress"
  | "in-development"
  | "planned"
  | "archived";

export interface ProjectAccent {
  /** Gradient start color, used on the card and detail page. */
  from: string;
  /** Gradient end color. */
  to: string;
}

export interface Project {
  /** URL-safe identifier, used at /projects/[slug]. */
  slug: string;
  name: string;
  /** One-line summary shown on the card. */
  description: string;
  /** Longer explanation shown on the detail page. */
  longDescription: string;
  status: ProjectStatus;
  tags: string[];
  technologies: string[];
  /** Live app URL. Omitted when a project has no public URL yet. */
  url?: string;
  /**
   * True only for the project that marks where the timeline's threads
   * come together (TinyUtility Hub). Renders with its own abstract
   * `HubGlow` backdrop, a touch more visual weight, and a "Featured"
   * label — still sized as a timeline card, not a page-dominating hero
   * (that role, and the ocean photograph, belong to the root instead).
   */
  spotlight?: boolean;
  accent: ProjectAccent;
  /** Notable, verified features — omitted rather than guessed. */
  features?: string[];
  /**
   * True only for the project that IS this website. Its card omits the
   * "Open ↗" action, since opening it would just point back at the page
   * the visitor is already on.
   */
  hideOpenOnCard?: boolean;
}

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "use-ready": "Use-ready",
  "in-progress": "In progress",
  "in-development": "In development",
  planned: "Coming soon",
  archived: "Archived",
};

/**
 * Order here is the homepage timeline's visual journey, not a build or
 * chronological date — BatchPilot first, TinyUtility Hub last as the
 * point where the threads come together.
 */
export const projects: Project[] = [
  {
    slug: "batchpilot",
    name: "BatchPilot",
    description:
      "A practical workflow tool built to make batch-based operations easier to manage.",
    longDescription:
      "BatchPilot is a practical workflow tool built to make batch-based operations easier to manage. It's ready to use — a fuller write-up will be added here soon.",
    status: "use-ready",
    tags: ["workflow", "management", "productivity"],
    technologies: [],
    url: "https://batchpilot.tinyutility.space",
    accent: { from: "#6a8fd0", to: "#8f6fd0" },
  },
  {
    slug: "everroutine",
    name: "EverRoutine",
    description:
      "A student-focused planner for keeping classes, assignments, routines, and academic life in one place.",
    longDescription:
      "EverRoutine is a student-focused planner for keeping classes, assignments, routines, and academic life in one place. It's ready to use — a fuller write-up will be added here soon.",
    status: "use-ready",
    tags: ["student", "productivity", "planning"],
    technologies: [],
    url: "https://everroutine.tinyutility.space",
    accent: { from: "#6fd6bd", to: "#5fb0c9" },
  },
  {
    slug: "reverie",
    name: "Reverie",
    description:
      "A private space for two people to stay connected, share moments, and build memories together.",
    longDescription:
      "Reverie is a private space for two people to stay connected, share moments, and build memories together. It's ready to use — a fuller write-up will be added here soon.",
    status: "use-ready",
    tags: ["personal", "couples", "social"],
    technologies: [],
    url: "https://reverie.tinyutility.space",
    accent: { from: "#8fa3f0", to: "#b39ce8" },
  },
  {
    slug: "fsts",
    name: "Field Tracking System",
    description:
      "A field-sales tracking system for managing field activity, location tracking, dealer visits, and reporting.",
    longDescription:
      "Field Tracking System is a field-sales tracking system for managing field activity, location tracking, dealer visits, and reporting. It's still in development and isn't publicly linked from the Hub yet — that will be added once it's ready to show.",
    status: "in-development",
    tags: ["business", "field-sales", "tracking"],
    technologies: [],
    accent: { from: "#7ea8d8", to: "#5f7fb0" },
  },
  {
    slug: "tinyutility-hub",
    name: "TinyUtility Hub",
    description:
      "The collection itself — a home for the things I build, experiment with, and put to use.",
    longDescription:
      "TinyUtility Hub is the home for everything built under TinyUtility: websites, web apps, tools, experiments, and prototypes, gathered in one place instead of scattered across separate links. It's built to make adding the next project as easy as adding one entry to a list.",
    status: "live",
    tags: ["hub", "portfolio", "personal"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://hub.tinyutility.space",
    spotlight: true,
    hideOpenOnCard: true,
    accent: { from: "#5fd0e8", to: "#7c93f0" },
    features: [
      "An editorial, non-uniform collection layout instead of a plain card grid",
      "Reusable project card and detail-page architecture — new projects need only new data",
      "Fully static — no database, accounts, or backend service",
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
