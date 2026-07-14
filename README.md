# 真の記録 — Shin-No-Kiroku

### *"The Record of Truth"*

An AI-powered anime productivity companion that transforms studying and self-growth into an immersive psychological anime experience. Through intelligent planning, motivational interactions, mood analysis, and gamified progress tracking, Shin-No-Kiroku records the user's journey toward unlocking their true potential.

---

## Table of Contents

- [Concept](#concept)
- [Core Features](#core-features)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Data & Privacy](#data--privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Concept

Shin-No-Kiroku reframes productivity as a personal narrative arc — inspired by psychological anime (introspective, character-driven stories about growth under pressure). The user isn't just checking off a to-do list; they're a protagonist whose choices, discipline, and mindset are logged, interpreted, and reflected back to them by an AI companion with its own evolving personality and commentary.

Every study session, task, and mood check-in becomes an entry in the user's "record" — building toward visible arcs of growth, setbacks, and breakthroughs, much like character development in a long-running series.

---

## Core Features

- 🎴 **Intelligent Planning** — AI-generated study/task schedules that adapt to workload, deadlines, and the user's historical performance patterns.
- 🗣 **Motivational AI Companion** — a conversational anime-styled character that encourages, challenges, and reacts to the user's progress with contextual dialogue.
- 🧠 **Mood & Mental State Analysis** — periodic check-ins and sentiment analysis on journal entries/chat to detect motivation dips, burnout signals, or stress patterns.
- 🎮 **Gamified Progress Tracking** — XP, levels, streaks, "arcs" (milestones), and unlockable story chapters tied to real productivity achievements.
- 📖 **The Record (Kiroku)** — a persistent journal/timeline visualizing the user's growth arc, key turning points, and stats over time.
- 🌸 **Dynamic Companion Personality** — the AI's tone/behavior subtly evolves based on the user's consistency and emotional trends (supportive, stern, celebratory, etc.).
- 🔔 **Adaptive Nudges** — smart reminders timed around the user's actual behavior rather than fixed alarms.

---

## System Architecture

```
                 ┌───────────────────────┐
                 │     Client App          │
                 │ (Web / Mobile UI)        │
                 └───────────┬───────────┘
                             │
                 ┌───────────▼───────────┐
                 │     API Gateway          │
                 └───────────┬───────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐  ┌─────────▼────────┐  ┌────────▼────────┐
│ Planning Engine │  │ Companion AI /LLM │  │ Mood Analysis    │
│ (task/schedule   │  │ (dialogue, persona│  │ (sentiment/NLP    │
│  optimization)   │  │  behavior)         │  │  on check-ins)    │
└───────┬───────┘  └─────────┬────────┘  └────────┬────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                 ┌───────────▼───────────┐
                 │  Gamification Engine     │
                 │ (XP, levels, streaks,    │
                 │  arcs, unlocks)          │
                 └───────────┬───────────┘
                             │
                 ┌───────────▼───────────┐
                 │   The Kiroku (Database) │
                 │ user records, history,   │
                 │ stats, journal entries   │
                 └───────────────────────┘
```

---

## Tech Stack

### Frontend
- **Framework:** React (Web) + React Native or Flutter (Mobile)
- **State Management:** Redux Toolkit / Zustand
- **UI/Animation:** Tailwind CSS, Framer Motion, Lottie (for anime-style character animations)
- **Design Assets:** Live2D or Spine (for animated companion character)

### Backend
- **API Layer:** FastAPI (Python) or Node.js (NestJS/Express)
- **Authentication:** JWT + OAuth2 (Google/Apple sign-in)
- **Task Queue / Scheduling:** Celery + Redis (for reminders, adaptive nudges)
- **Realtime:** WebSockets (companion chat, live notifications)

### AI / ML Layer
- **Conversational AI:** LLM API (Claude / GPT) fine-tuned or prompt-engineered for persona-consistent dialogue
- **Mood & Sentiment Analysis:** Transformer-based NLP model (e.g., DistilBERT/RoBERTa fine-tuned for sentiment/emotion classification), or hosted LLM sentiment scoring
- **Planning/Recommendation Engine:** scikit-learn / lightweight ML models for adaptive scheduling based on user history
- **Vector Store:** Pinecone / Weaviate / pgvector (for companion memory & context retrieval)

### Data & Storage
- **Primary Database:** PostgreSQL (user records, tasks, gamification state)
- **Journal/Unstructured Data:** MongoDB (chat logs, journal entries)
- **Caching:** Redis
- **File/Media Storage:** AWS S3 / Cloudflare R2 (character assets, exported records)

### Infrastructure
- **Containerization:** Docker
- **Orchestration:** Kubernetes (for scale) or Docker Compose (for smaller deployments)
- **CI/CD:** GitHub Actions
- **Hosting:** AWS / GCP / Vercel (frontend) + Railway/Render (backend, for lighter deployments)
- **Monitoring:** Grafana + Prometheus, Sentry (error tracking)

### Analytics
- **Product Analytics:** PostHog / Mixpanel (engagement, streak retention tracking)

---

## Project Structure

```
shin-no-kiroku/
├── frontend/
│   ├── src/
│   │   ├── components/        # UI components (companion, dashboard, journal)
│   │   ├── screens/            # App screens/pages
│   │   ├── animations/         # Character animation assets
├── backend/
│   ├── api/
│   │   ├── routes/              # planning, companion, mood, gamification endpoints
│   │   ├── services/            # business logic
│   ├── ai/
│   │   ├── companion/            # persona & dialogue orchestration
│   │   ├── mood_analysis/        # sentiment/NLP pipeline
│   │   ├── planning/             # scheduling/recommendation logic
│   ├── models/                    # DB models/schemas
│   ├── workers/                   # Celery tasks (nudges, reminders)
├── data/
│   ├── training/                   # fine-tuning/prompt datasets
├── infra/
│   ├── docker/
│   ├── k8s/
├── tests/
├── requirements.txt / package.json
├── Dockerfile
└── README.md
```

---

## Installation

```bash
# Clone the repository
git clone https://github.com/<your-org>/shin-no-kiroku.git
cd shin-no-kiroku

# Backend setup
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# Frontend setup
cd ../frontend
npm install

# Environment variables
cp .env.example .env
# Add your LLM API key, database URL, and auth secrets
```

---

## Usage

```bash
# Start backend
uvicorn api.main:app --reload

# Start frontend
cd frontend
npm run dev
```

Once running, create an account, complete the onboarding "Prologue" (initial mood/goal assessment), and the companion AI will generate your first study arc and daily quest log.

---

## Data & Privacy

Shin-No-Kiroku processes sensitive personal data, including mood/journal entries and behavioral patterns. Implementations should:

- Encrypt journal and chat data at rest and in transit
- Allow users to export or permanently delete their Kiroku (record) at any time
- Avoid using mood analysis to make clinical claims — the companion is a motivational tool, not a mental health diagnostic service
- Clearly disclose AI-generated content and data usage in an in-app privacy notice

---

## Roadmap

- [ ] Voice-based companion interaction (TTS/STT)
- [ ] Multiplayer "guilds" for shared study arcs and accountability
- [ ] Seasonal story events tied to real-world productivity milestones
- [ ] Companion customization (multiple personas/art styles)
- [ ] Offline mode with local sync
- [ ] Integration with calendar apps (Google Calendar, Notion)

---

## Contributing

Contributions are welcome. Please open an issue to discuss proposed features or changes before submitting a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
