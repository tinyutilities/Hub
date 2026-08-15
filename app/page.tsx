import { getFeaturedProject, getSecondaryProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featured = getFeaturedProject();
  const secondary = getSecondaryProjects();

  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-20 sm:px-10 sm:pt-28 lg:px-12">
      <section className="mb-20 sm:mb-28">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-2">
          TinyUtility
        </p>
        <h1 className="mt-5 font-display text-6xl italic leading-none text-foreground sm:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {siteConfig.tagline}
        </p>
      </section>

      {featured && (
        <section aria-label="Featured" className="mb-16 sm:mb-20">
          <ProjectCard project={featured} />
        </section>
      )}

      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-muted-2 sm:mb-8"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {secondary.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-glass-border pt-8 text-sm text-muted-2 sm:mt-32">
        TinyUtility — built one small thing at a time.
      </footer>
    </main>
  );
}
