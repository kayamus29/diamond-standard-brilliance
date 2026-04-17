import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-gradient-hero text-ivory overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-5"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-semibold text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl mx-auto text-ivory/80 text-lg text-balance"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
