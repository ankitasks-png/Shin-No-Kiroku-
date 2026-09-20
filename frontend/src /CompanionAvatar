const MOOD_RING = {
  supportive: "ring-moon/60",
  stern: "ring-coral/60",
  celebratory: "ring-sage/60",
};

const MOOD_LABEL = {
  supportive: "steady",
  stern: "watching closely",
  celebratory: "pleased",
};

export default function CompanionAvatar({ mood = "supportive", size = "md" }) {
  const dims = size === "lg" ? "w-20 h-20" : size === "sm" ? "w-9 h-9" : "w-14 h-14";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative ${dims} shrink-0 rounded-full bg-ink-soft ring-2 ${MOOD_RING[mood]} flex items-center justify-center overflow-hidden`}
      >
        <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]" aria-hidden="true">
          <circle cx="50" cy="38" r="22" fill="#D9D2C2" />
          <path d="M20 95 Q50 55 80 95 Z" fill="#8C7CB8" />
          <circle cx="41" cy="36" r="2.6" fill="#12131C" />
          <circle cx="59" cy="36" r="2.6" fill="#12131C" />
          <path
            d={
              mood === "celebratory"
                ? "M42 47 Q50 54 58 47"
                : mood === "stern"
                ? "M42 49 Q50 45 58 49"
                : "M43 48 Q50 51 57 48"
            }
            stroke="#12131C"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {size !== "sm" && (
        <div className="leading-tight">
          <p className="font-display text-sm text-text-high">Ame</p>
          <p className="text-xs text-text-mid">{MOOD_LABEL[mood]}</p>
        </div>
      )}
    </div>
  );
}
