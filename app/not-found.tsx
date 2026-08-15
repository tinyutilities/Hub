import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center px-6 py-24 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-2">
        404
      </p>
      <h1 className="mt-5 font-display text-5xl italic text-foreground sm:text-6xl">
        Nothing out here.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        This page doesn&apos;t exist, or the project you&apos;re looking for
        hasn&apos;t been added to the Hub yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-glow/50 hover:text-cyan-glow"
      >
        <span aria-hidden="true">←</span> Back to the Hub
      </Link>
    </main>
  );
}
