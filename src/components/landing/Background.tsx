import { useMemo } from "react";

export function Starfield({ count = 70, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
      })),
    [count],
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)",
          }}
        />
      ))}
    </div>
  );
}
