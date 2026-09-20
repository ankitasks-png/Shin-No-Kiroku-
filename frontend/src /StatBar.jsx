export default function StatBar({ stats }) {
  const pct = Math.min(100, Math.round((stats.xp / stats.xpToNext) * 100));

  return (
    <div className="rounded-lg border border-ink-line bg-ink-soft p-5">
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-display text-2xl text-text-high">
          Level {stats.level}
        </span>
        <span className="text-xs text-text-mid">
          {stats.xp} / {stats.xpToNext} XP
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-ink overflow-hidden mb-4">
        <div
          className="h-full bg-moon rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex gap-6 text-sm">
        <div>
          <p className="text-text-mid text-xs mb-0.5">Streak</p>
          <p className="text-coral font-medium">{stats.streakDays} days</p>
        </div>
        <div>
          <p className="text-text-mid text-xs mb-0.5">Focus today</p>
          <p className="text-sage font-medium">{stats.focusMinutesToday}m</p>
        </div>
      </div>
    </div>
  );
}
