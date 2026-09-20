import { useKirokuStore } from "../store/useKirokuStore";

const TYPE_META = {
  milestone: { label: "Milestone", color: "text-moon border-moon/50" },
  task: { label: "Task", color: "text-sage border-sage/50" },
  mood: { label: "Check-in", color: "text-parchment-dim border-parchment-dim/50" },
  setback: { label: "Setback", color: "text-coral border-coral/50" },
};

export default function Kiroku() {
  const record = useKirokuStore((s) => s.record);

  return (
    <div>
      <header className="border-b border-ink-line pb-6 mb-8">
        <p className="text-xs text-text-mid mb-2">記録</p>
        <h1 className="font-display text-3xl md:text-4xl text-text-high mb-2">
          The Kiroku
        </h1>
        <p className="text-sm text-text-mid max-w-xl">
          Every entry below is a beat in the arc — logged as it happened, not
          smoothed over afterward.
        </p>
      </header>

      <ol className="relative border-l border-ink-line pl-6 space-y-8">
        {record.map((entry) => {
          const meta = TYPE_META[entry.type] || TYPE_META.task;
          return (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-ink-soft border border-ink-line"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3 mb-1.5">
                <span
                  className={`text-[11px] uppercase tracking-wide border rounded-full px-2 py-0.5 ${meta.color}`}
                >
                  {meta.label}
                </span>
                <time className="text-xs text-text-mid">{entry.date}</time>
              </div>
              <p className="text-sm text-text-high leading-relaxed max-w-xl">
                {entry.text}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
