import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { BookOpen, Bus, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import library from "@/assets/library.jpg";
import classroom from "@/assets/classroom.jpg";
import sports from "@/assets/sports.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Diamond Standard Basic School" },
      { name: "description", content: "Modern classrooms, library, playground, school bus and 24-hour security — purpose-built for your child to thrive." },
      { property: "og:title", content: "Facilities at Diamond Standard" },
      { property: "og:description", content: "Purpose-built spaces for learning, play and safety." },
      { property: "og:image", content: library },
    ],
  }),
  component: FacilitiesPage,
});

const FACILITIES = [
  { icon: BookOpen, t: "Modern Classrooms", d: "Bright, well-ventilated rooms designed for focused learning and collaboration." },
  { icon: Users, t: "Well-Stocked Library", d: "A growing collection of fiction, reference and digital resources." },
  { icon: Sparkles, t: "Spacious Playground", d: "Safe outdoor play equipment that builds confidence and friendships." },
  { icon: Bus, t: "School Bus Service", d: "Reliable transport across Lugbe and surrounding Abuja neighbourhoods." },
  { icon: ShieldCheck, t: "24-Hour Security", d: "Trained security staff and CCTV give parents complete peace of mind." },
  { icon: Heart, t: "Caring Staff & Sick Bay", d: "Trained personnel ready to attend to every child's wellbeing." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="Spaces designed for learning, joy and safety." subtitle="Every corner of our campus is built around the needs of growing children." />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-xl bg-primary text-ivory flex items-center justify-center mb-5">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">{f.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 grid md:grid-cols-3 gap-4">
        {[library, classroom, sports].map((src, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <img src={src} alt="Campus facility" loading="lazy" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>

      <CTABanner />
    </>
  );
}
