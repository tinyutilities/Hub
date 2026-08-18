import { getAllProjects } from "@/lib/projects";
import { tinyUtilityRoot } from "@/lib/root";
import { RootHero } from "@/components/root-hero";
import { Timeline } from "@/components/timeline";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-20 sm:px-10 sm:pt-28 lg:px-12">
      <section className="mb-20 sm:mb-28">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-2">
          Hub
        </p>
        <h1 className="mt-5 font-display text-6xl italic leading-none text-foreground sm:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {siteConfig.tagline}
        </p>
      </section>

      <section aria-label="TinyUtility" className="mb-12 sm:mb-16">
        <RootHero root={tinyUtilityRoot} />
      </section>

      <section aria-labelledby="timeline-heading">
        <h2
          id="timeline-heading"
          className="mb-10 text-xs font-medium uppercase tracking-[0.35em] text-muted-2 sm:mb-14"
        >
          Projects
        </h2>

        <Timeline projects={projects} />
      </section>

      <footer className="mt-24 border-t border-glass-border pt-8 text-sm text-muted-2 sm:mt-32">
        TinyUtility — built one small thing at a time.
      </footer>
    </main>
  );
}
