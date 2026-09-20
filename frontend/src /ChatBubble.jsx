export default function ChatBubble({ from, text }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-moon text-ink rounded-br-sm"
            : "bg-ink-soft border border-ink-line text-text-high rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
