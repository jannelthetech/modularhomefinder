// DESIGN: Carbon Blueprint — education hub with comparison table and myth busters
import { useState } from "react";
import { Check, X, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { comparisonData, mythBusters } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const COMPARISON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430764589/U8zxYJeGhq2C5i2kWbY3dX/modular-vs-traditional-4obqnZcULhBkmW4cdWaohP.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430764589/U8zxYJeGhq2C5i2kWbY3dX/luxury-interior-94vsZTAtmTqus4viT89b4Z.webp";

export default function EducationSection() {
  const [expandedMyth, setExpandedMyth] = useState<number | null>(0);

  return (
    <section id="education" className="py-24">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Education Hub</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Modular vs. Site-Built: <span className="text-gradient-cyan">The Facts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Site-built homes are no longer the only play. Here's the data-driven case for why
              modular construction is better for consumers, communities, and the planet.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Image */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src={COMPARISON_IMG}
              alt="Modular vs traditional construction comparison"
              className="w-full h-48 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div className="flex-1">
                  <div className="text-sm font-mono text-red-400 uppercase tracking-wider mb-1">Traditional Site-Built</div>
                  <p className="text-foreground/80 text-sm">Weather delays, material waste, inconsistent quality, rising labor costs</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div className="flex-1">
                  <div className="text-sm font-mono text-primary uppercase tracking-wider mb-1">Modular Factory-Built</div>
                  <p className="text-foreground/80 text-sm">Climate-controlled precision, zero weather delays, 90% less waste</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal>
          <div className="glass-card rounded-xl overflow-hidden mb-20">
            <div className="grid grid-cols-4 gap-0 text-sm">
              {/* Header */}
              <div className="p-4 sm:p-5 font-display font-bold text-muted-foreground border-b border-border col-span-2 sm:col-span-1">Category</div>
              <div className="p-4 sm:p-5 font-display font-bold text-primary border-b border-border text-center hidden sm:block">Modular</div>
              <div className="p-4 sm:p-5 font-display font-bold text-muted-foreground border-b border-border text-center hidden sm:block">Site-Built</div>
              <div className="p-4 sm:p-5 font-display font-bold text-muted-foreground border-b border-border text-center hidden sm:block">Winner</div>

              {/* Mobile Header */}
              <div className="p-4 font-display font-bold text-primary border-b border-border text-center sm:hidden">Modular</div>
              <div className="p-4 font-display font-bold text-muted-foreground border-b border-border text-center sm:hidden">Site-Built</div>

              {/* Rows */}
              {comparisonData.map((row, i) => (
                <div key={i} className="contents">
                  <div className="p-4 sm:p-5 font-medium border-b border-border/50 col-span-2 sm:col-span-1 text-foreground">{row.category}</div>
                  <div className={`p-4 sm:p-5 border-b border-border/50 text-center ${row.advantage === "modular" ? "text-primary font-semibold" : "text-foreground/70"}`}>
                    {row.modular}
                  </div>
                  <div className={`p-4 sm:p-5 border-b border-border/50 text-center ${row.advantage === "siteBuild" ? "text-accent font-semibold" : "text-foreground/70"}`}>
                    {row.siteBuild}
                  </div>
                  <div className="p-4 sm:p-5 border-b border-border/50 text-center hidden sm:flex items-center justify-center">
                    {row.advantage === "modular" ? (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check size={14} className="text-primary" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <Minus size={14} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Modular vs Manufactured vs Mobile */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal>
            <div>
              <span className="font-mono text-sm text-accent tracking-wider uppercase">Know the Difference</span>
              <h3 className="font-display text-3xl font-bold mt-3 mb-6">
                Modular <span className="text-gradient-amber">≠</span> Manufactured <span className="text-gradient-amber">≠</span> Mobile
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One of the biggest misconceptions in housing is confusing modular homes with manufactured or mobile homes.
                They are fundamentally different in construction, codes, financing, and value appreciation.
              </p>

              <div className="space-y-4">
                <div className="glass-card rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <h4 className="font-display font-bold">Modular Homes</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Built to <strong className="text-foreground">state and local building codes</strong> — the exact same codes as site-built homes.
                    Placed on permanent foundations. Appreciate in value identically to site-built. Qualify for all standard mortgages.
                  </p>
                </div>

                <div className="glass-card rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <h4 className="font-display font-bold">Manufactured Homes</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Built to <strong className="text-foreground">federal HUD code</strong> (post-June 15, 1976).
                    Sit on a steel chassis. Different financing options. May or may not appreciate depending on land ownership.
                  </p>
                </div>

                <div className="glass-card rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                    <h4 className="font-display font-bold">Mobile Homes</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Built <strong className="text-foreground">before June 15, 1976</strong> — prior to HUD standards.
                    This term is outdated and refers only to pre-1976 units. Modern factory-built homes are NOT mobile homes.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={INTERIOR_IMG}
                alt="Luxury modular home interior"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-foreground/90 font-medium">
                  This luxury interior is inside a modular home — indistinguishable from a $2M custom build.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Myth Busters */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-sm text-accent tracking-wider uppercase">Myth Busters</span>
              <h3 className="font-display text-3xl font-bold mt-3">
                Debunking <span className="text-gradient-amber">Common Myths</span>
              </h3>
            </div>

            <div className="space-y-3">
              {mythBusters.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedMyth(expandedMyth === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <X size={16} className="text-red-400 shrink-0" />
                      <span className="font-semibold text-foreground">{item.myth}</span>
                    </div>
                    {expandedMyth === i ? (
                      <ChevronUp size={18} className="text-muted-foreground shrink-0 ml-4" />
                    ) : (
                      <ChevronDown size={18} className="text-muted-foreground shrink-0 ml-4" />
                    )}
                  </button>
                  {expandedMyth === i && (
                    <div className="px-5 pb-5">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{item.reality}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
