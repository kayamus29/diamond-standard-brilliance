import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logoImg}
        alt="Diamond Standard Basic School logo"
        className={`h-12 w-12 shrink-0 object-contain transition-transform group-hover:scale-105 ${light ? "drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" : ""}`}
      />
      <div className="leading-tight">
        <div className={`font-display text-base font-bold ${light ? "text-ivory" : "text-primary"}`}>Diamond Standard</div>
        <div className={`text-[11px] uppercase tracking-[0.18em] ${light ? "text-ivory/70" : "text-muted-foreground"}`}>Basic School</div>
      </div>
    </Link>
  );
}
