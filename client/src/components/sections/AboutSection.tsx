// DESIGN: Carbon Blueprint — founder section with Scott Malouff
import { ArrowRight, Building2, Users, Heart, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Our Mission</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Building the Future,{" "}
              <span className="text-gradient-cyan">One Home at a Time</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Modular Finder was built to simplify and elevate the way buyers, investors, and developers
              explore modular and manufactured homes — bringing clarity, confidence, and opportunity to a
              rapidly growing segment of the housing market.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Platform Vision (2 cols) */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-7">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 size={20} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg mb-3">The Platform</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our platform connects three critical groups: <strong className="text-foreground">homeowners</strong> who
                  want to build on their own land, <strong className="text-foreground">developers</strong> looking to scale
                  with 5+ units, and <strong className="text-foreground">real estate agents</strong> searching for the best
                  options for their clients. We match them with America's top 30 modular builders based on their specific needs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-7">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users size={20} className="text-accent" />
                </div>
                <h4 className="font-display font-bold text-lg mb-3">Every Lead Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every inquiry is personally reviewed by our ISA (Inside Sales Agent) team. No automated responses,
                  no generic emails — real people connecting real opportunities with the right modular company and
                  a qualified real estate professional who understands this space.
                </p>
              </div>

              <div className="glass-card rounded-xl p-7">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg mb-3">Education First</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe informed consumers make better decisions. By combining real estate expertise with
                  innovative technology and strategic partnerships, we're creating a platform that brings clarity
                  to the modular housing revolution.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Founder Card (3 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 sm:p-10 border-primary/10">
              {/* Founder header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/20">
                  <span className="font-display text-2xl font-bold text-foreground">SM</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Scott Malouff</h3>
                  <p className="text-primary font-medium text-sm">Founder, Modular Finder</p>
                  <p className="text-muted-foreground text-sm">Top-Producing Team Leader, Keller Williams Heritage — San Antonio</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Scott Malouff is a top-producing real estate leader, entrepreneur, and visionary behind Modular Finder,
                  with a mission to modernize how people discover and invest in housing. As the founder of one of the
                  highest-performing teams at <strong className="text-foreground">Keller Williams Heritage in San Antonio</strong>,
                  Scott and his team help serve hundreds of families each year, consistently ranking among the top in the market.
                </p>
                <p>
                  With deep roots in traditional real estate, investment strategy, and property management, Scott has built
                  a reputation for creating systems that drive results and generate long-term wealth for clients and agents
                  alike. His experience on the front lines of the housing market revealed a growing demand for more efficient,
                  affordable, and scalable housing solutions — leading to the creation of Modular Finder.
                </p>
                <p>
                  Scott's vision is to <strong className="text-foreground">bridge the gap between traditional real estate
                  and the future of housing</strong> — empowering people to build smarter, invest better, and create
                  generational wealth through modern solutions.
                </p>
              </div>

              {/* Community & Beyond */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                    <Heart size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm mb-2 text-foreground">Community & Impact</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Beyond business, Scott is deeply committed to serving his community through initiatives that
                      support families, single mothers, and youth development. His leadership is grounded in faith,
                      impact, and a relentless drive to help others win.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expanding footprint */}
              <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scott continues to expand his footprint across <strong className="text-foreground">real estate, media,
                  and emerging housing solutions</strong>, positioning himself at the forefront of innovation in the industry.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => document.querySelector("#configurator")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-all glow-amber"
                >
                  Get Connected <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
