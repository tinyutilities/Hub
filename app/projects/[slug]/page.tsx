import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, statusLabels } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * One generic detail-page template shared by every project. Adding a new
 * project to `lib/projects.ts` automatically gets a page here — no new
 * component or route needs to be written.
 */
export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — TinyUtility`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { name, description, longDescription, status, tags, technologies, url, accent, features, placeholder } =
    project;

  return (
    <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pb-24 pt-16 sm:px-10 sm:pt-24 lg:px-12">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-cyan-glow"
      >
        <span aria-hidden="true">←</span> Back to the Hub
      </Link>

      <div className="relative mt-10 overflow-hidden rounded-3xl glass-panel p-8 sm:mt-14 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${accent.from}, ${accent.to} 70%, transparent 75%)`,
          }}
        />

        <div className="relative flex flex-wrap items-center gap-3">
          <StatusBadge status={status} />
        </div>

        <h1 className="relative mt-6 font-display text-5xl italic text-foreground sm:text-6xl">
          {name}
        </h1>
        <p className="relative mt-4 max-w-xl text-lg text-muted">{description}</p>

        <p className="relative mt-8 max-w-2xl leading-relaxed text-foreground/90">
          {longDescription}
        </p>

        {tags.length > 0 && (
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-muted-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="relative mt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              Technologies
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border px-3 py-1 text-sm text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="relative mt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              Notable features
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-cyan-glow" aria-hidden="true">
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative mt-10">
          {url && !placeholder ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-glow px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
              aria-label={`Open ${name} (opens in a new tab)`}
            >
              Open <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-medium text-muted-2">
              {statusLabels[status]}
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
