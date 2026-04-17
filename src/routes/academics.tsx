import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { BookOpen, GraduationCap, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Diamond Standard Basic School" },
      { name: "description", content: "From Crèche to Primary 6, our tri-curricular approach combines Nigerian, British and Montessori methods to develop confident, capable learners." },
      { property: "og:title", content: "Academics at Diamond Standard" },
      { property: "og:description", content: "Crèche, Pre-Nursery, Nursery and Primary programs blending three curricula." },
    ],
  }),
  component: AcademicsPage,
});

const PROGRAMS = [
  { icon: Heart, title: "Crèche", age: "3 months – 1 year", desc: "A safe, loving environment with sensory play, music and bonding routines that support your baby's earliest development." },
  { icon: Sparkles, title: "Pre-Nursery", age: "1 – 2 years", desc: "A gentle introduction to Montessori — practical life skills, language exposure and social play in small, attentive groups." },
  { icon: BookOpen, title: "Nursery 1 & 2", age: "3 – 5 years", desc: "Foundational phonics, numeracy and discovery learning. Children grow in confidence, curiosity and independence." },
  { icon: GraduationCap, title: "Primary 1 – 6", age: "6 – 11 years", desc: "A rigorous tri-curricular program — Nigerian + British — preparing pupils for top secondary schools at home and abroad." },
];

function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title="A curriculum designed to stretch and inspire." subtitle="Nigerian foundations. British rigor. Montessori care for our youngest learners." />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-gold-foreground shrink-0">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary">{p.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-cocoa font-semibold mt-1">{p.age}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Our Curriculum</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">Three frameworks. One confident learner.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {[
              { t: "Nigerian", d: "Aligned to NERDC standards — preparing pupils for national assessments and a strong cultural identity." },
              { t: "British", d: "Cambridge-inspired methods that develop critical thinking, literacy and global readiness." },
              { t: "Montessori", d: "Hands-on, child-led discovery for our early years — building independence from day one." },
            ].map((c) => (
              <div key={c.t} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
                <div className="font-display text-2xl text-primary">{c.t}</div>
                <div className="mt-2 h-1 w-10 bg-gold rounded-full" />
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
