import { useState } from "react";
import NavRail from "./components/NavRail";
import Dashboard from "./screens/Dashboard";
import Kiroku from "./screens/Kiroku";
import CompanionChat from "./screens/CompanionChat";

const SCREENS = {
  dashboard: Dashboard,
  kiroku: Kiroku,
  companion: CompanionChat,
};

export default function App() {
  const [active, setActive] = useState("dashboard");
  const Screen = SCREENS[active];

  return (
    <div className="min-h-screen bg-ink">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-display text-xl text-text-high">真の記録</span>
          <span className="text-xs text-text-mid">Shin-No-Kiroku</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <NavRail active={active} onChange={setActive} />
          <main className="flex-1 min-w-0">
            <Screen />
          </main>
        </div>
      </div>
    </div>
  );
}
