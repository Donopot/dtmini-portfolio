export function HeroDecor() {
  return (
    <div
      className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[45%] max-w-[560px] opacity-6 dark:opacity-4 pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <svg viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="200" cy="200" r="60" fill="currentColor" opacity="0.15" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  );
}
