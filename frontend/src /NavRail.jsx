const ITEMS = [
  { key: "dashboard", label: "Dashboard", jp: "今日" },
  { key: "kiroku", label: "The Kiroku", jp: "記録" },
  { key: "companion", label: "Companion", jp: "話す" },
];

export default function NavRail({ active, onChange }) {
  return (
    <nav className="flex md:flex-col gap-1 md:gap-2 md:w-44 shrink-0">
      {ITEMS.map((item) => {
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`flex-1 md:flex-none text-left rounded-md px-4 py-3 transition-colors border ${
              isActive
                ? "border-moon/60 bg-ink-soft"
                : "border-transparent hover:bg-ink-soft/60"
            }`}
          >
            <span
              className={`block font-display text-sm ${
                isActive ? "text-moon" : "text-text-high"
              }`}
            >
              {item.label}
            </span>
            <span className="block text-[11px] text-text-mid mt-0.5">
              {item.jp}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
