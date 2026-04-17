import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-11 w-11 shrink-0">
        <div className="absolute inset-0 rotate-45 rounded-md bg-gradient-gold shadow-gold transition-transform group-hover:scale-110" />
        <div className="absolute inset-1.5 rotate-45 rounded-sm bg-primary" />
        <span className={`absolute inset-0 flex items-center justify-center font-display text-lg font-bold ${light ? "text-ivory" : "text-ivory"}`}>D</span>
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-bold ${light ? "text-ivory" : "text-primary"}`}>Diamond Standard</div>
        <div className={`text-[11px] uppercase tracking-[0.18em] ${light ? "text-ivory/70" : "text-muted-foreground"}`}>Basic School</div>
      </div>
    </Link>
  );
}
