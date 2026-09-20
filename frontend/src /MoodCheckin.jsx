import { useState } from "react";

const MOODS = [
  { key: "low", label: "Foggy", color: "border-coral text-coral" },
  { key: "neutral", label: "Steady", color: "border-moon text-moon" },
  { key: "high", label: "Bright", color: "border-sage text-sage" },
];

export default function MoodCheckIn({ onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!selected) return;
    onSubmit(selected, note.trim() || undefined);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
      setNote("");
    }, 1800);
  }

  return (
    <div className="rounded-lg border border-ink-line bg-ink-soft p-5">
      <h2 className="font-display text-lg text-text-high mb-1">Check in</h2>
      <p className="text-xs text-text-mid mb-4">
        How does today feel, before you start?
      </p>

      {submitted ? (
        <p className="text-sm text-sage py-2">Logged in the record.</p>
      ) : (
        <>
          <div className="flex gap-2 mb-3">
            {MOODS.map((m) => (
              <button
                key={m.key}
                onClick={() => setSelected(m.key)}
                className={`flex-1 rounded-md border py-2 text-sm transition-colors ${
                  selected === m.key
                    ? `${m.color} bg-ink`
                    : "border-ink-line text-text-mid hover:border-parchment-dim"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Optional — a line for the record"
            rows={2}
            className="w-full resize-none rounded-md border border-ink-line bg-ink px-3 py-2 text-sm text-text-high placeholder:text-text-mid/70 focus:border-moon"
          />
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-3 w-full rounded-md bg-moon py-2 text-sm font-medium text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:bg-moon-dim transition-colors"
          >
            Log it
          </button>
        </>
      )}
    </div>
  );
}
