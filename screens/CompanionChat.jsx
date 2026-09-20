import { useEffect, useRef, useState } from "react";
import { useKirokuStore } from "../store/useKirokuStore";
import { sendMessageToCompanion } from "../services/companionService";
import CompanionAvatar from "../components/CompanionAvatar";
import ChatBubble from "../components/ChatBubble";

export default function CompanionChat() {
  const companionMood = useKirokuStore((s) => s.companionMood);
  const companionLine = useKirokuStore((s) => s.companionLine);

  const [messages, setMessages] = useState(() => [
    { id: "m0", from: "companion", text: companionLine() },
  ]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, pending]);

  async function handleSend() {
    const text = input.trim();
    if (!text || pending) return;

    const userMsg = { id: `m${Date.now()}`, from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setPending(true);

    try {
      const { reply } = await sendMessageToCompanion(text, { mood: companionMood });
      setMessages((prev) => [
        ...prev,
        { id: `m${Date.now() + 1}`, from: "companion", text: reply },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="border-b border-ink-line pb-6 mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-text-mid mb-2">話す</p>
          <h1 className="font-display text-3xl md:text-4xl text-text-high">
            Companion
          </h1>
        </div>
        <CompanionAvatar mood={companionMood} size="lg" />
      </header>

      <div
        ref={scrollRef}
        className="flex-1 min-h-[320px] max-h-[480px] overflow-y-auto scrollbar-thin space-y-3 pr-1 mb-4"
      >
        {messages.map((m) => (
          <ChatBubble key={m.id} from={m.from} text={m.text} />
        ))}
        {pending && (
          <ChatBubble from="companion" text="..." />
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Say something to Ame"
          className="flex-1 rounded-md border border-ink-line bg-ink-soft px-4 py-2.5 text-sm text-text-high placeholder:text-text-mid/70 focus:border-moon"
        />
        <button
          onClick={handleSend}
          disabled={pending || !input.trim()}
          className="rounded-md bg-moon px-5 py-2.5 text-sm font-medium text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:bg-moon-dim transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
