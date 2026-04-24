// DESIGN: Carbon Blueprint — data-rich why modular section
import { DollarSign, Clock, Shield, Leaf, Zap, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { whyModularFacts, housingCrisisStats } from "@/lib/data";

const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430764589/U8zxYJeGhq2C5i2kWbY3dX/factory-production-4XZuSJUZ6XpFTVgrgdZR9R.webp";

const iconMap: Record<string, React.ElementType> = {
  DollarSign, Clock, Shield, Leaf, Zap, TrendingUp,
};

export default function WhyModularSection() {
  return (
    <section id="why-modular" className="py-24 relative overflow-hidden">
      {/* Housing Crisis Banner — uses relative layout so content is never clipped */}
      <div className="container mb-20">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background image — absolute, fills the card */}
            <img
              src={FACTORY_IMG}
              alt="Modern modular home factory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/85 to-[#09090b]/60" />

            {/* Content — relative so it dictates the card height */}
            <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14">
              <span className="font-mono text-sm text-accent tracking-wider uppercase">The Housing Crisis</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-8 max-w-xl">
                America Needs a <span className="text-gradient-amber">Better Way</span> to Build
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {housingCrisisStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-accent">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-foreground/70 mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-wider uppercase">The Modular Advantage</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Why Modular is the <span className="text-gradient-cyan">Future</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From a humanitarian standpoint, modular construction addresses the housing crisis
              while delivering superior quality, sustainability, and value.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyModularFacts.map((fact, i) => {
            const Icon = iconMap[fact.icon];
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-7 h-full group hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3">{fact.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{fact.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Big stat callout */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl sm:text-8xl font-bold font-mono text-gradient-cyan">
                <AnimatedCounter value="207" suffix="" />
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-muted-foreground">Billion</span>
            </div>
            <p className="text-muted-foreground mt-3 text-lg">
              Projected global modular construction market by 2033 — growing at <span className="text-primary font-semibold">8.2% CAGR</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
