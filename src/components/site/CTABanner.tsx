import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 my-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 lg:p-16 shadow-elegant">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Admissions Open</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-ivory text-balance">
              Give your child a future they deserve.
            </h2>
            <p className="mt-4 text-ivory/80">Join a community where excellence, character, and joy of learning meet every day.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 font-semibold text-ivory hover:bg-ivory/10 transition">
              Book a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
