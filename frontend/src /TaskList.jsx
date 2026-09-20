export default function TaskList({ tasks, onToggle }) {
  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="rounded-lg border border-ink-line bg-ink-soft p-5">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-display text-lg text-text-high">Today's Quest Log</h2>
        <span className="text-xs text-text-mid">
          {remaining === 0 ? "all clear" : `${remaining} remaining`}
        </span>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              onClick={() => onToggle(task.id)}
              className="w-full flex items-start gap-3 rounded-md px-3 py-2.5 text-left hover:bg-ink transition-colors"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  task.done
                    ? "border-sage bg-sage/20 text-sage"
                    : "border-ink-line text-transparent"
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className={`block text-sm ${
                    task.done ? "text-text-mid line-through" : "text-text-high"
                  }`}
                >
                  {task.title}
                </span>
                <span className="block text-xs text-text-mid mt-0.5">
                  {task.subject} · {task.estMinutes}m
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
