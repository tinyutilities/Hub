/**
 * Static project data for the Hub.
 *
 * There is no database — every project TinyUtility ships gets one entry
 * here. Adding a new project means adding a new object to this array (and
 * optionally a card/detail visual accent); no new page components or
 * routes are required, since `/projects/[slug]` renders any entry found
 * in this list.
 */

export type ProjectStatus = "live" | "in-progress" | "planned" | "archived";

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
  /** Featured projects get more visual space on the Hub. */
  featured?: boolean;
  accent: ProjectAccent;
  /** Notable, verified features — omitted rather than guessed. */
  features?: string[];
  /**
   * True only for the project that IS this website. Its card omits the
   * "Open ↗" action, since opening it would just point back at the page
   * the visitor is already on.
   */
  hideOpenOnCard?: boolean;
  /**
   * True when description/details are still placeholders rather than
   * verified information. Surfaced in the UI as "Coming soon" instead of
   * being presented as fact.
   */
  placeholder?: boolean;
}

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  planned: "Coming soon",
  archived: "Archived",
};

export const projects: Project[] = [
  {
    slug: "tinyutility",
    name: "TinyUtility Hub",
    description: "The collection itself — the home you're standing in.",
    longDescription:
      "TinyUtility Hub is the home for everything built under TinyUtility: websites, web apps, tools, experiments, and prototypes, gathered in one place instead of scattered across separate links. It's built to make adding the next project as easy as adding one entry to a list.",
    status: "live",
    tags: ["hub", "meta", "personal"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://hub.tinyutility.space",
    featured: true,
    hideOpenOnCard: true,
    accent: { from: "#5fd0e8", to: "#7c93f0" },
    features: [
      "An editorial, non-uniform collection layout instead of a plain card grid",
      "Reusable project card and detail-page architecture — new projects need only new data",
      "Fully static — no database, accounts, or backend service",
    ],
  },
  {
    slug: "reverie",
    name: "Reverie",
    description: "Details coming soon.",
    longDescription:
      "Reverie is a TinyUtility project currently taking shape. Its full description, status, and feature list will be filled in here once the project is further along.",
    status: "in-progress",
    tags: ["placeholder"],
    technologies: [],
    url: "https://reverie.tinyutility.space",
    accent: { from: "#8fa3f0", to: "#b39ce8" },
    placeholder: true,
  },
  {
    slug: "everroutine",
    name: "EverRoutine",
    description: "Details coming soon.",
    longDescription:
      "EverRoutine is part of the TinyUtility collection. More information — what it does, its current status, and the technologies behind it — will be added here soon.",
    status: "planned",
    tags: ["placeholder"],
    technologies: [],
    accent: { from: "#6fd6bd", to: "#5fb0c9" },
    placeholder: true,
  },
  {
    slug: "fsts",
    name: "FSTS",
    description: "Details coming soon.",
    longDescription:
      "FSTS is part of the TinyUtility collection. More information — what it does, its current status, and the technologies behind it — will be added here soon.",
    status: "planned",
    tags: ["placeholder"],
    technologies: [],
    accent: { from: "#7ea8d8", to: "#5f7fb0" },
    placeholder: true,
  },
  {
    slug: "tuition-manager",
    name: "Tuition Manager",
    description: "Details coming soon.",
    longDescription:
      "Tuition Manager is part of the TinyUtility collection. More information — what it does, its current status, and the technologies behind it — will be added here soon.",
    status: "planned",
    tags: ["placeholder"],
    technologies: [],
    accent: { from: "#8fd6c1", to: "#6fb8d6" },
    placeholder: true,
  },
  {
    slug: "batchpilot",
    name: "BatchPilot",
    description: "Details coming soon.",
    longDescription:
      "BatchPilot is part of the TinyUtility collection. More information — what it does, its current status, and the technologies behind it — will be added here soon.",
    status: "planned",
    tags: ["placeholder"],
    technologies: [],
    accent: { from: "#6a8fd0", to: "#8f6fd0" },
    placeholder: true,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured);
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
