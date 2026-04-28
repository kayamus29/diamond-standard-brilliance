import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Diamond Standard Basic School" },
      { name: "description", content: "Visit us at Plot 31, A1 Road, F.H.A, Lugbe, Abuja. Book a campus tour or send us a message — we'd love to hear from you." },
      { property: "og:title", content: "Contact Diamond Standard" },
      { property: "og:description", content: "Visit, call or message us — we'd love to welcome your family." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation." subtitle="Visit our campus, send a message or give us a call. We'd love to welcome your family." />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, t: "Visit Us", d: "Plot 8, A1 Road, Phase II FHA, Near Environmental Street, Lugbe — Abuja." },
            { icon: Phone, t: "Call Us", d: "0903 601 7856  ·  0908 527 5155  ·  0805 610 7325" },
            { icon: Mail, t: "Email Us", d: "info@diamondstandard.sch.ng" },
            { icon: Clock, t: "School Hours", d: "Mon – Fri, 7:30 AM – 2:30 PM" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold text-gold-foreground flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg text-primary">{c.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 rounded-3xl bg-card border border-border shadow-soft p-8 lg:p-10">
          <h2 className="font-display text-3xl text-primary">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">We respond within one working day.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Full name" required />
            <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Phone" />
            <input type="email" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" placeholder="Email address" required />
            <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" placeholder="Subject" />
            <textarea rows={5} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" placeholder="Your message" required />
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold">
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border aspect-[16/9]">
          <iframe
            title="Diamond Standard Basic School location"
            src="https://www.google.com/maps?q=FHA+Lugbe+Abuja&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
