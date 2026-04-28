import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import groupPhoto from "@/assets/gallery/students-group.jpg";
import staff from "@/assets/gallery/staff.jpg";
import excursion from "@/assets/gallery/excursion.jpg";
import sportsYellow from "@/assets/gallery/sports-yellow.jpg";
import sportsRed from "@/assets/gallery/sports-red.jpg";
import sportsGreen from "@/assets/gallery/sports-green.jpg";
import culturalYellow from "@/assets/gallery/cultural-yellow.jpg";
import graduate from "@/assets/gallery/graduate.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Gallery — Diamond Standard Basic School" },
      { name: "description", content: "Upcoming events, summer coaching, graduation prize-giving day, inter-house sports, excursions and gallery from Diamond Standard Basic School, Lugbe Abuja." },
      { property: "og:title", content: "Events & Gallery — Diamond Standard" },
      { property: "og:description", content: "Summer Coaching, Graduation Prize-Giving Day, Inter-House Sports and more." },
      { property: "og:image", content: groupPhoto },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  {
    tag: "Summer Coaching",
    title: "Summer Blast — Skill Acquisition & Coaching",
    date: "August 4 – 28, 2025",
    time: "Mondays – Thursdays · 9:00 AM – 1:00 PM",
    venue: "Diamond Standard Campus, Lugbe — Abuja",
    desc: "Intensive Coding, Catering Craft, Graphics Design, Creative Arts — plus tailored teaching to prepare your child for the new class in September.",
  },
  {
    tag: "Graduation",
    title: "Graduation & Prize-Giving Day 2025",
    date: "Thursday, 24th July 2025",
    time: "9:00 AM",
    venue: "Premiere Mini Stadium, FHA Lugbe, Abuja",
    desc: "Celebrating the 2024/2025 graduating set — Nursery 2, Basic 5/6, JSS 3 and SS 3 — with cultural displays, drama, choreography and prize awards.",
  },
  {
    tag: "Admissions",
    title: "Admissions In Progress — 2025/26 Session",
    date: "Open Now",
    time: "Mon – Fri · 8:00 AM – 3:00 PM",
    venue: "School Office, Plot 8, A1 Road, Lugbe",
    desc: "Daycare · Nursery · Primary · JSS 1–3 · SS Classes. Register your child today and secure their place at Diamond Standard.",
  },
];

const GALLERY = [
  { src: groupPhoto, label: "Our Pupils" },
  { src: staff, label: "Our Staff" },
  { src: excursion, label: "Excursion — Road Safety Club" },
  { src: sportsYellow, label: "Inter-House Sports — Yellow House" },
  { src: sportsRed, label: "Inter-House Sports — Red House" },
  { src: sportsGreen, label: "Inter-House Sports — Green House" },
  { src: culturalYellow, label: "Cultural Day Celebration" },
  { src: graduate, label: "SS 3 Graduating Set" },
];

const PROGRAMME = [
  "Opening Prayer",
  "Introduction of Guests",
  "National Anthem · School Anthem · Pledge",
  "Welcome Address — Principal",
  "Chairman's Speech",
  "Valedictory Speech — Head Boy",
  "Welcome Song & Dances",
  "Presentations — KG 1, Nursery 1 & 2",
  "Presentations — Primary 1–5",
  "Presentations — JSS 3, SS 1, SS 2",
  "Choreography & Cultural Dance",
  "Cutting of Cake",
  "Director's Remark / Gifts",
  "Refreshment",
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Gallery"
        title="Moments that make Diamond Standard, Diamond Standard."
        subtitle="Graduations, sports days, excursions and the everyday joy of learning — captured from our community."
      />

      {/* Upcoming Events */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Upcoming</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">What's coming up.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Mark your calendar — and join us for the moments that shape young lives.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING.map((e) => (
            <article key={e.title} className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10" />
              <div className="relative">
                <span className="inline-block bg-gradient-gold text-gold-foreground text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-gold">
                  {e.tag}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary leading-snug">{e.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Calendar className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {e.date}</li>
                  <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {e.time}</li>
                  <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {e.venue}</li>
                </ul>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Programme of Events */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3 inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Graduation Day · Programme
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">Order of events.</h2>
          </div>
          <ol className="grid sm:grid-cols-2 gap-3">
            {PROGRAMME.map((p, i) => (
              <li key={p} className="flex gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft">
                <span className="font-display text-lg text-gold font-bold w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-foreground/90 self-center">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary text-balance">Real children. Real moments.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-ivory text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
