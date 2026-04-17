import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Portal Login — Diamond Standard Basic School" },
      { name: "description", content: "Sign in to the Diamond Standard parent and staff portal." },
      { property: "og:title", content: "Portal Login — Diamond Standard" },
      { property: "og:description", content: "Sign in to the Diamond Standard portal." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-5 lg:px-8 bg-gradient-soft flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="rounded-3xl bg-card border border-border shadow-elegant p-7 sm:p-10">
          <div className="text-center mb-7">
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-2">Portal Access</p>
            <h1 className="font-display text-3xl text-primary">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to access the parent &amp; staff portal.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <label className="block">
              <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Email</span>
              <div className="mt-2 relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Password</span>
              <div className="mt-2 relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
              </div>
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="rounded border-input accent-[var(--gold)]" /> Remember me
              </label>
              <a href="#" className="font-medium text-primary hover:underline decoration-gold underline-offset-4">Forgot?</a>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition">
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to Diamond Standard?{" "}
            <Link to="/admissions" className="font-semibold text-primary hover:underline decoration-gold underline-offset-4">
              Apply for admission
            </Link>
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">← Back to homepage</Link>
        </p>
      </div>
    </section>
  );
}
