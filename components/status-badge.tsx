import { ProjectStatus, statusLabels } from "@/lib/projects";

const dotColor: Record<ProjectStatus, string> = {
  live: "bg-seaglass",
  "in-progress": "bg-cyan-glow",
  planned: "bg-muted-2",
  archived: "bg-muted-2",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-white/[0.03] px-2.5 py-1 text-xs font-medium tracking-wide text-muted">
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotColor[status]}`}
        aria-hidden="true"
      />
      {statusLabels[status]}
    </span>
  );
}
