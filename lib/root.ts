import { ProjectAccent, ProjectStatus } from "@/lib/projects";

/**
 * TinyUtility itself — the root the homepage's project timeline grows
 * out of. Deliberately kept separate from `lib/projects.ts`: it isn't
 * one of the five projects, it isn't counted among them, and it has no
 * internal detail page — its only action is visiting the real site.
 */
export interface RootSite {
  name: string;
  tagline: string;
  status: ProjectStatus;
  url: string;
  tags: string[];
  accent: ProjectAccent;
}

export const tinyUtilityRoot: RootSite = {
  name: "TinyUtility",
  tagline: "The place where everything starts.",
  status: "live",
  url: "https://tinyutility.space",
  tags: ["origin", "personal"],
  accent: { from: "#5fd0e8", to: "#7c93f0" },
};
