import { create } from "zustand";
import {
  initialArc,
  initialStats,
  initialTasks,
  initialRecord,
  companionLines,
} from "../data/mockData";

let nextRecordId = initialRecord.length + 1;

export const useKirokuStore = create((set, get) => ({
  arc: initialArc,
  stats: initialStats,
  tasks: initialTasks,
  record: initialRecord,
  companionMood: "supportive",

  // --- Tasks / gamification -------------------------------------------
  toggleTask: (id) => {
    set((state) => {
      const tasks = state.tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      );
      const task = tasks.find((t) => t.id === id);
      let stats = state.stats;
      let record = state.record;

      if (task.done) {
        // Task was just completed: award XP and log it.
        const xpGain = Math.round(task.estMinutes * 1.5);
        let { level, xp, xpToNext } = state.stats;
        xp += xpGain;
        if (xp >= xpToNext) {
          xp -= xpToNext;
          level += 1;
          xpToNext = Math.round(xpToNext * 1.15);
          record = [
            {
              id: `r${nextRecordId++}`,
              date: today(),
              type: "milestone",
              text: `Reached Level ${level}.`,
            },
            ...record,
          ];
        }
        stats = { ...state.stats, level, xp, xpToNext };
        record = [
          {
            id: `r${nextRecordId++}`,
            date: today(),
            type: "task",
            text: `Completed "${task.title}".`,
          },
          ...record,
        ];
      }

      return { tasks, stats, record };
    });
  },

  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: `t${Date.now()}`, done: false, ...task },
      ],
    })),

  // --- Mood check-in -----------------------------------------------------
  logMood: (sentiment, note) => {
    set((state) => {
      const record = [
        {
          id: `r${nextRecordId++}`,
          date: today(),
          type: "mood",
          text: note || `Checked in feeling ${sentiment}.`,
          sentiment,
        },
        ...state.record,
      ];

      // Simple mood-driven persona shift — a stand-in for the
      // Transformer-based sentiment pipeline described in the README.
      const recentLow = record
        .slice(0, 5)
        .filter((r) => r.type === "mood" && r.sentiment === "low").length;
      const companionMood =
        recentLow >= 2 ? "stern" : sentiment === "low" ? "supportive" : "celebratory";

      return { record, companionMood };
    });
  },

  companionLine: () => {
    const lines = companionLines[get().companionMood] || companionLines.supportive;
    return lines[Math.floor(Math.random() * lines.length)];
  },
}));

function today() {
  return new Date().toISOString().slice(0, 10);
}
