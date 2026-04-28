import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Bus, Calendar, Clock, GraduationCap, Heart, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/students-hero.png";
import classroomImg from "@/assets/classroom.jpg";
import montessoriImg from "@/assets/montessori.jpg";
import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";
import portraitImg from "@/assets/student-portrait.jpg";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diamond Standard Basic School — Lugbe, Abuja" },
      { name: "description", content: "A premier Crèche, Nursery & Primary school in Lugbe, Abuja blending Nigerian, British and Montessori curricula. Apply for admission today." },
      { property: "og:title", content: "Diamond Standard Basic School — Lugbe, Abuja" },
      { property: "og:description", content: "Nurturing Young Minds, Building Future Leaders." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Discipline", text: "Structured habits that shape lifelong character." },
  { icon: Heart, title: "Integrity", text: "Truthfulness in word, work and relationship." },
  { icon: Award, title: "Excellence", text: "A pursuit of mastery in every endeavor." },
  { icon: Sparkles, title: "Teamwork", text: "Learning to lead and serve together." },
  { icon: Star, title: "Fear of God", text: "A moral compass rooted in reverence." },
];

const STATS = [
  { v: "15+", l: "Years of excellence" },
  { v: "98%", l: "Parent satisfaction" },
  { v: "3", l: "Curriculum frameworks" },
  { v: "24/7", l: "Campus security" },
];

const TESTIMONIALS = [
  {
    name: "Mrs. Adaeze Okonkwo",
    role: "Parent of Primary 4 pupil",
    quote: "My daughter blossomed at Diamond Standard. The teachers know each child personally and the curriculum is genuinely challenging.",
  },
  {
    name: "Mr. Ibrahim Suleiman",
    role: "Parent of Nursery & Primary pupils",
    quote: "What sold us was the balance — academics, character and faith. Both our children look forward to school every morning.",
  },
  {
    name: "Dr. Funmi Adebayo",
    role: "Parent & paediatrician",
    quote: "Clean, secure, well-staffed. As a doctor I notice the small things — and Diamond Standard gets them right.",
  },
];

const UPCOMING = [
  {
    tag: "Summer Coaching",
    title: "Summer Blast — Skill Acquisition & Coaching",
    date: "August 4 – 28, 2025",
    time: "Mon – Thu · 9:00 AM – 1:00 PM",
    venue: "Diamond Standard Campus, Lugbe",
    desc: "Coding, Catering Craft, Graphics Design, Creative Arts — plus tailored teaching for the new class in September.",
  },
  {
    tag: "Graduation",
    title: "Graduation & Prize-Giving Day 2025",
    date: "Thursday, 24th July 2025",
    time: "9:00 AM",
    venue: "Premiere Mini Stadium, FHA Lugbe",
    desc: "Celebrating our 2024/2025 graduating set with cultural displays, drama, choreography and prize awards.",
  },
  {
    tag: "Admissions",
    title: "Admissions In Progress — 2025/26 Session",
    date: "Open Now",
    time: "Mon – Fri · 8:00 AM – 3:00 PM",
    venue: "Plot 8, A1 Road, Lugbe",
    desc: "Daycare · Nursery · Primary · JSS 1–3 · SS Classes. Secure your child's place today.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 lg:pb-24">
          <div className="lg:col-span-6 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-cocoa font-semibold shadow-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Admissions Open
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.08] text-balance"
            >
              Nurturing minds.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Building leaders.</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-gold/40 -z-0 rounded-sm" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl text-balance"
            >
              A premier Crèche, Nursery & Primary school in Lugbe, Abuja — blending Nigerian, British and Montessori curricula since 2009.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-primary hover:bg-secondary transition">
                Book a Visit
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6"
            >
              {STATS.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-primary">{s.v}</div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-elegant">
              <img src={heroImg} alt="Diamond Standard students walking on campus" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:block absolute -bottom-6 -left-4 lg:-left-10 bg-card rounded-2xl p-4 sm:p-5 shadow-elegant border border-border max-w-[240px] sm:max-w-[260px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground font-display font-bold">15+</div>
                <div>
                  <div className="font-display font-semibold text-primary text-sm sm:text-base">Years shaping</div>
                  <div className="text-xs text-muted-foreground">future leaders in Abuja</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block absolute -top-4 -right-2 lg:-right-6 bg-primary text-ivory rounded-2xl p-4 shadow-elegant max-w-[220px]"
            >
              <div className="flex gap-1 text-gold mb-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold" />)}</div>
              <p className="text-xs leading-snug text-ivory/90">"A genuinely warm, excellent school." — Parent, Primary 3</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="bg-primary text-ivory py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-8 md:grid-cols-3">
          {[
            { t: "Our Vision", d: "A world-class educational service for excellence — at affordable cost." },
            { t: "Our Mission", d: "Train the total child — mentally, educationally, emotionally and spiritually — using the best of ICT." },
            { t: "Our Core Values", d: "Honesty · Passion for service · Professionalism · Commitment to excellence · Integrity." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-2">{b.t}</h3>
              <p className="text-sm text-ivory/80 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={classroomImg} alt="Modern classroom" loading="lazy" className="rounded-2xl shadow-soft aspect-[4/5] object-cover" />
              <img src={montessoriImg} alt="Montessori activity" loading="lazy" className="rounded-2xl shadow-soft aspect-[4/5] object-cover mt-10" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-gold text-gold-foreground rounded-full px-6 py-3 shadow-gold text-sm font-semibold">
              Est. September 10, 2009
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-4">Who we are</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">A school where every child is truly known.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Diamond Standard Basic School is a nurturing environment focused on academic excellence, character development and leadership. We blend the Nigerian and British curricula with Montessori methods for early learners — giving children a strong foundation and a global outlook.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Tri-curricular learning: Nigerian, British & Montessori",
                "Small classes — every child known and challenged",
                "Holistic development: mind, character & faith",
                "Safe, secure, family-feel campus",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary group">
              Read our full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-4">Our Core Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">Five pillars that shape every Diamond pupil.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:-translate-y-1 transition-transform"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Academic Programs</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">From first steps to confident scholars.</h2>
          </div>
          <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View academics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Heart, title: "Crèche", age: "3 months – 1 year", desc: "Loving care with sensory play." },
            { icon: Sparkles, title: "Pre-Nursery", age: "1–2 years", desc: "Gentle Montessori introduction." },
            { icon: BookOpen, title: "Nursery 1–2", age: "3–5 years", desc: "Phonics, numeracy & discovery." },
            { icon: GraduationCap, title: "Primary 1–6", age: "6–11 years", desc: "Rigorous Nigerian + British." },
          ].map((p) => (
            <div key={p.title} className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-primary text-ivory flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-gold-foreground transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mt-1">{p.age}</p>
              <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Life on Campus</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">A glimpse of our everyday joy.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: classroomImg, alt: "Classroom", span: "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" },
            { src: sportsImg, alt: "Sports" },
            { src: libraryImg, alt: "Library" },
            { src: montessoriImg, alt: "Montessori" },
            { src: portraitImg, alt: "Student portrait" },
          ].map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl shadow-soft group ${g.span ?? "aspect-square"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-ivory py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Parent Voices</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Loved by the families we serve.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl bg-ivory/5 backdrop-blur border border-ivory/10 p-7">
                <div className="flex gap-1 text-gold mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}</div>
                <p className="text-ivory/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-ivory/10">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-ivory/60">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES TEASER */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { icon: BookOpen, t: "Modern classrooms" },
            { icon: GraduationCap, t: "Well-stocked library" },
            { icon: Sparkles, t: "Spacious playground" },
            { icon: Bus, t: "School bus service" },
            { icon: ShieldCheck, t: "24-hour security" },
            { icon: Heart, t: "Caring staff & nurse" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-primary">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
