// DESIGN: Carbon Blueprint — cinematic hero with configurator CTA
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { heroStats } from "@/lib/data";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430764589/U8zxYJeGhq2C5i2kWbY3dX/hero-modular-home-inkhyJEREChsPRmvM5hFrn.webp";

export default function HeroSection() {
  const scrollToConfigurator = () => {
    document.querySelector("#configurator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Luxury modular home at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/75 to-[#09090b]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">The Future of Home Building</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            Find Your Perfect{" "}
            <span className="text-gradient-cyan">Modular Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            The Zillow and CarGurus for modular homes. Whether you're building on your own land,
            a developer buying 5 or more, or a real estate agent searching for clients —
            we connect you with America's top 30 modular builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={scrollToConfigurator}
              className="px-8 py-4 bg-accent text-accent-foreground font-bold text-base rounded-md hover:opacity-90 transition-all glow-amber flex items-center gap-2"
            >
              Configure Your Home
              <ArrowDown size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-border text-foreground font-semibold text-base rounded-md hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Play size={16} className="text-primary" />
              Why Modular?
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
