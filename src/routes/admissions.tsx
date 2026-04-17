import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Diamond Standard Basic School" },
      { name: "description", content: "A simple five-step admissions process. Apply now to join the Diamond Standard family in Lugbe, Abuja." },
      { property: "og:title", content: "Admissions — Diamond Standard" },
      { property: "og:description", content: "Five simple steps to join our school family." },
    ],
  }),
  component: AdmissionsPage,
});

const STEPS = [
  { t: "Application Form", d: "Complete our application form online or at our admissions office." },
  { t: "Submission of Documents", d: "Birth certificate, immunisation record, and recent passport photographs." },
  { t: "Child Assessment", d: "A friendly age-appropriate session to understand your child's stage of development." },
  { t: "Offer of Admission", d: "Successful candidates receive an official offer letter from the school." },
  { t: "Acceptance & Payment", d: "Confirm your place by accepting the offer and completing fee payment." },
];

const FAQS = [
  { q: "What ages do you accept?", a: "From 3 months (Crèche) through to 11 years (Primary 6)." },
  { q: "What curriculum do you follow?", a: "A blend of the Nigerian and British curricula, with Montessori methods for early years." },
  { q: "Do you offer a school bus service?", a: "Yes, our bus service covers Lugbe and surrounding areas in Abuja." },
  { q: "What are your school hours?", a: "Monday to Friday, 7:30 AM – 2:30 PM with after-school care available on request." },
  { q: "How do I schedule a visit?", a: "Use our contact page to book a campus tour with a member of our admissions team." },
];

function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="A simple journey to joining our family." subtitle="We'd love to meet you. Here's how to begin your child's Diamond Standard story." />

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-20">
        <ol className="relative border-l-2 border-gold/30 pl-8 space-y-10">
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative">
              <span className="absolute -left-[2.6rem] top-0 h-12 w-12 rounded-full bg-gradient-gold text-gold-foreground font-display font-bold flex items-center justify-center shadow-gold">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl text-primary">{s.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-3xl bg-card border border-border shadow-soft p-8 lg:p-10">
          <h3 className="font-display text-2xl text-primary">Start your application</h3>
          <p className="mt-2 text-muted-foreground">Send a quick enquiry and our admissions team will guide you from there.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Parent's full name" required />
            <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Phone number" required />
            <input type="email" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" placeholder="Email address" required />
            <select className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" defaultValue="">
              <option value="" disabled>Class of interest</option>
              <option>Crèche</option>
              <option>Pre-Nursery</option>
              <option>Nursery 1 / 2</option>
              <option>Primary 1 – 6</option>
            </select>
            <textarea rows={4} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold md:col-span-2" placeholder="Tell us about your child (optional)" />
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold">
              Submit Enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cocoa font-semibold mb-3 text-center">FAQs</p>
          <h2 className="font-display text-4xl font-semibold text-primary text-center text-balance">Questions parents often ask.</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-border p-5 shadow-soft open:shadow-elegant">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-primary">
                  {f.q}
                  <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-10 text-muted-foreground">
            Still have questions? <Link to="/contact" className="text-primary font-semibold underline decoration-gold underline-offset-4">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
