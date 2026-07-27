import { TerminalBlock } from "./TerminalBlock";
import { MonitorPanel } from "./MonitorPanel";

export function DarkHeroSplit() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 my-10 items-stretch dark-only-grid">
      <TerminalBlock />
      <MonitorPanel />
    </div>
  );
}
