// Seed data. In production this arrives from the backend (see README:
// Planning Engine / The Kiroku database) rather than being hardcoded here.

export const companion = {
  name: "Ame",
  title: "Keeper of the Record",
  // "supportive" | "stern" | "celebratory" — the persona shifts based on
  // the user's recent consistency (see useKirokuStore#recomputeCompanionMood)
  mood: "supportive",
};

export const initialArc = {
  chapterNumber: 4,
  title: "The Weight of Ordinary Days",
  description:
    "No exams on the horizon, no deadline pressing in — just the quiet, harder work of showing up anyway.",
};

export const initialStats = {
  level: 7,
  xp: 340,
  xpToNext: 500,
  streakDays: 6,
  focusMinutesToday: 55,
};

export const initialTasks = [
  {
    id: "t1",
    title: "Read Chapter 6 — Organic Reactions",
    subject: "Chemistry",
    estMinutes: 40,
    done: true,
  },
  {
    id: "t2",
    title: "Draft essay outline",
    subject: "English Lit",
    estMinutes: 25,
    done: true,
  },
  {
    id: "t3",
    title: "Problem set 4, questions 1–8",
    subject: "Calculus",
    estMinutes: 45,
    done: false,
  },
  {
    id: "t4",
    title: "Review flashcards — Kanji batch 3",
    subject: "Japanese",
    estMinutes: 15,
    done: false,
  },
];

// The Kiroku: a chronological log of entries. Each entry is a beat in the
// user's arc — a completed task, a mood check-in, or a milestone.
export const initialRecord = [
  {
    id: "r1",
    date: "2026-09-19",
    type: "milestone",
    text: "Reached Level 7. The companion notes this is the longest streak yet.",
  },
  {
    id: "r2",
    date: "2026-09-18",
    type: "mood",
    text: "Checked in feeling foggy and unmotivated after a short night's sleep.",
    sentiment: "low",
  },
  {
    id: "r3",
    date: "2026-09-18",
    type: "task",
    text: "Finished the lab report a day early, despite the fog.",
  },
  {
    id: "r4",
    date: "2026-09-16",
    type: "mood",
    text: "Feeling steady. Named the plan for the week out loud for the first time.",
    sentiment: "neutral",
  },
  {
    id: "r5",
    date: "2026-09-14",
    type: "setback",
    text: "Missed two days in a row after a rough exam result. Streak reset.",
  },
];

export const companionLines = {
  supportive: [
    "Six days in a row now. I'm keeping count, even when you're not.",
    "You don't have to finish everything today. Just don't close the book.",
    "That's one more page than yesterday. That's the whole game.",
  ],
  stern: [
    "You said the same thing about calculus three days ago.",
    "The record doesn't lie. Neither should the plan you made for yourself.",
    "Rest is allowed. Disappearing isn't the same thing.",
  ],
  celebratory: [
    "Chapter closed. However it went — you wrote the whole thing.",
    "Level 7. Look back at chapter one sometime. You wouldn't recognize them.",
    "This is the part of the story where it starts to compound.",
  ],
};
