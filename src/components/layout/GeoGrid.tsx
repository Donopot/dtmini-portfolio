export function GeoGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <pattern id="geo-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo-grid)" className="stroke-light-border dark:stroke-dark-border" />
        <circle cx="20%" cy="30%" r="2" className="fill-current opacity-30" />
        <circle cx="80%" cy="70%" r="3" className="fill-current opacity-20" />
        <circle cx="60%" cy="20%" r="1.5" className="fill-current opacity-40" />
      </svg>
    </div>
  );
}
