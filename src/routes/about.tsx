import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import portrait from "@/assets/student-portrait.jpg";
import classroom from "@/assets/classroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Diamond Standard Basic School" },
      { name: "description", content: "Founded in 2009, Diamond Standard blends Nigerian, British and Montessori curricula in Lugbe, Abuja. Meet our vision, mission and leadership." },
      { property: "og:title", content: "About Diamond Standard Basic School" },
      { property: "og:description", content: "Our story, vision, mission and leadership messages." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A heritage of nurturing excellence." subtitle="Founded September 10, 2009 in Lugbe, Abuja — built on faith, character and academic rigor." />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <img src={classroom} alt="Classroom" loading="lazy" className="rounded-3xl shadow-elegant aspect-[4/3] object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Our Story</p>
          <h2 className="font-display text-4xl font-semibold text-primary text-balance">Built on a simple promise: every child matters.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            For over fifteen years, Diamond Standard Basic School has been a trusted home for learning in Lugbe, Abuja. We blend the strengths of the Nigerian and British curricula with the Montessori approach for our youngest learners — creating a foundation that is both globally relevant and deeply rooted in our values.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our small class sizes, dedicated teachers and family-feel community ensure that every child is known by name, challenged with care, and equipped to lead with integrity.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            { t: "Vision", d: "To develop well-rounded, confident, and responsible individuals who contribute positively to society." },
            { t: "Mission", d: "To inspire independence, hard work, integrity, and lifelong academic and moral excellence." },
          ].map((b) => (
            <div key={b.t} className="bg-card rounded-3xl p-10 shadow-soft border border-border">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our {b.t}</p>
              <p className="mt-4 font-display text-2xl text-primary leading-snug">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Leadership Messages</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">A word from our leaders.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              role: "Proprietor's Message",
              name: "The Proprietor",
              text: "When we opened our doors in 2009, we made a promise to every parent: your child will be known, loved and challenged. Fifteen years on, that promise still guides every decision we make. At Diamond Standard, we believe true education shapes both the mind and the heart. We invite you to walk this journey with us — one child, one milestone, one bright future at a time.",
            },
            {
              role: "Head Teacher's Message",
              name: "The Head Teacher",
              text: "Walk our corridors and you will hear laughter, focused discussion and the quiet hum of children at work. Our team is committed to bringing out the very best in every learner — academically, socially and spiritually. Together with parents, we are raising confident young Nigerians ready to thrive anywhere in the world. We look forward to welcoming your family.",
            },
          ].map((l) => (
            <article key={l.role} className="relative rounded-3xl bg-card p-8 lg:p-10 shadow-soft border border-border">
              <span className="absolute -top-4 left-8 bg-gradient-gold text-gold-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-gold">
                {l.role}
              </span>
              <p className="mt-4 text-foreground leading-relaxed italic">"{l.text}"</p>
              <p className="mt-6 font-display text-lg text-primary">— {l.name}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
