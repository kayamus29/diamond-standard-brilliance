import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { Drama, Mic, Music, Palette, PenTool, Trophy } from "lucide-react";
import sports from "@/assets/sports.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Diamond Standard Basic School" },
      { name: "description", content: "Debate, Spelling Bee, Arts & Crafts, Football, Music & Drama — extracurriculars that grow confident, well-rounded children." },
      { property: "og:title", content: "Activities at Diamond Standard" },
      { property: "og:description", content: "Where curiosity meets confidence — beyond the classroom." },
      { property: "og:image", content: sports },
    ],
  }),
  component: ActivitiesPage,
});

const ACTIVITIES = [
  { icon: Mic, t: "Debate & Literary Club", d: "Public speaking, critical thinking and the art of persuasion." },
  { icon: PenTool, t: "Spelling Bee", d: "Vocabulary mastery through spirited inter-class competition." },
  { icon: Palette, t: "Arts & Crafts", d: "A weekly studio for imagination, color and craftsmanship." },
  { icon: Trophy, t: "Football", d: "Teamwork, discipline and joy on our school football pitch." },
  { icon: Music, t: "Music", d: "Singing, rhythm and instrument introduction for all ages." },
  { icon: Drama, t: "Drama", d: "Stage performance that builds confidence and creativity." },
];

function ActivitiesPage() {
  return (
    <>
      <PageHero eyebrow="Activities" title="Where curiosity becomes confidence." subtitle="Our extracurricular program shapes well-rounded learners — beyond the classroom." />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((a) => (
            <div key={a.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold text-gold-foreground flex items-center justify-center mb-5 shadow-gold">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{a.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={sports} alt="Football activity" loading="lazy" className="aspect-[21/9] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent flex items-end p-8 lg:p-12">
            <div className="text-ivory max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Beyond books</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Every child finds their thing.</h2>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
