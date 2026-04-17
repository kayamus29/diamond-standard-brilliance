import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-ivory/70">
            Nurturing young minds and building future leaders since 2009.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="rounded-full border border-ivory/20 p-2.5 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-ivory/20 p-2.5 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gold">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/facilities" className="hover:text-gold">Facilities</Link></li>
            <li><Link to="/activities" className="hover:text-gold">Activities</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Plot 31, A1 Road, F.H.A, Lugbe, Airport Road, Abuja, F.C.T.</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +234 800 000 0000</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> info@diamondstandard.sch.ng</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Newsletter</h4>
          <p className="text-sm text-ivory/70 mb-4">School updates, events and parenting tips — straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full bg-ivory/10 border border-ivory/20 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold"
            />
            <button className="rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Diamond Standard Basic School. All rights reserved.</p>
          <p>Founded September 10, 2009 · Lugbe, Abuja</p>
        </div>
      </div>
    </footer>
  );
}
