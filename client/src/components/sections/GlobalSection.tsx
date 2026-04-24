// DESIGN: Carbon Blueprint — global case studies with cinematic imagery
import { Globe, MapPin } from "lucide-react";
import { globalCaseStudies } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const GLOBAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430764589/U8zxYJeGhq2C5i2kWbY3dX/global-modular-fPfwrkEsqSo2RmJHDMyGMc.webp";

export default function GlobalSection() {
  return (
    <section id="global" className="py-24 section-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Global Impact</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
              The World is Going <span className="text-gradient-cyan">Modular</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From China's 57-story skyscraper built in 19 days to Saudi Arabia's NEOM mega-city,
              modular construction is reshaping how the world builds. The US is next.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src={GLOBAL_IMG}
              alt="Global modular construction at scale"
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex items-center gap-2 mb-2">
                <Globe size={16} className="text-primary" />
                <span className="font-mono text-sm text-primary">Modular Construction at Scale</span>
              </div>
              <p className="text-foreground/80 max-w-xl">
                Cities across Asia and the Middle East are already building entire communities using modular methods.
                This isn't the future — it's happening now.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {globalCaseStudies.map((study, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-7 h-full group hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {study.location}
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold text-primary">{study.stat}</div>
                    <div className="text-xs text-muted-foreground">{study.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs text-primary/70 font-mono mb-3">{study.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* US Call to Action */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center glass-card rounded-2xl p-10 sm:p-14 border-primary/10">
            <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              It's Time for the <span className="text-gradient-amber">United States</span> to Lead
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              With a 7.1 million home shortage and 74.9% of households priced out of the market,
              modular construction isn't just an option — it's a necessity. The technology exists.
              The builders are ready. The future starts now.
            </p>
            <button
              onClick={() => document.querySelector("#configurator")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-accent text-accent-foreground font-bold text-base rounded-md hover:opacity-90 transition-all glow-amber"
            >
              Start Your Modular Journey
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
