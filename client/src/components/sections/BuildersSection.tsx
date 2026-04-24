// DESIGN: Carbon Blueprint — builders directory with search/filter
import { useState } from "react";
import { Search, ExternalLink, Star, MapPin } from "lucide-react";
import { modularCompanies } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function BuildersSection() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = modularCompanies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="builders" className="py-24 section-dark">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-sm text-primary tracking-wider uppercase">Builder Network</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-3">
                Top <span className="text-gradient-cyan">30</span> Modular Builders
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                We've partnered with America's leading modular home manufacturers to bring you the best options nationwide.
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search builders..."
                className="w-full py-3 pl-11 pr-4 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((company, i) => (
            <ScrollReveal key={company.id} delay={Math.min(i * 0.05, 0.4)}>
              <div
                className={`glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 relative ${
                  company.featured ? "border-primary/20" : ""
                }`}
              >
                {company.featured && (
                  <div className="absolute top-4 right-4">
                    <Star size={14} className="text-accent fill-accent" />
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <MapPin size={13} />
                  {company.location}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{company.specialty}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary font-medium">{company.priceRange}</span>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Visit <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-border text-foreground font-semibold text-sm rounded-md hover:bg-secondary transition-all"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Builders`}
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No builders found matching "{search}"</p>
          </div>
        )}
      </div>
    </section>
  );
}
