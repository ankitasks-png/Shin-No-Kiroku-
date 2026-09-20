import { useKirokuStore } from "../store/useKirokuStore";
import StatBar from "../components/StatBar";
import TaskList from "../components/TaskList";
import MoodCheckIn from "../components/MoodCheckIn";
import CompanionAvatar from "../components/CompanionAvatar";

export default function Dashboard() {
  const arc = useKirokuStore((s) => s.arc);
  const stats = useKirokuStore((s) => s.stats);
  const tasks = useKirokuStore((s) => s.tasks);
  const toggleTask = useKirokuStore((s) => s.toggleTask);
  const logMood = useKirokuStore((s) => s.logMood);
  const companionMood = useKirokuStore((s) => s.companionMood);
  const companionLine = useKirokuStore((s) => s.companionLine);

  return (
    <div className="space-y-8">
      <header className="border-b border-ink-line pb-6">
        <p className="text-xs text-text-mid mb-2">
          Chapter {arc.chapterNumber}
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-text-high mb-3">
          {arc.title}
        </h1>
        <p className="text-sm text-text-mid max-w-xl">{arc.description}</p>
      </header>

      <div className="flex items-start gap-3 rounded-lg border border-ink-line bg-ink-soft/60 p-4">
        <CompanionAvatar mood={companionMood} size="sm" />
        <p className="text-sm text-text-high pt-1.5">{companionLine()}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StatBar stats={stats} />
          <MoodCheckIn onSubmit={logMood} />
        </div>
        <TaskList tasks={tasks} onToggle={toggleTask} />
      </div>
    </div>
  );
}
