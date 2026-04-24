// DESIGN: Carbon Blueprint — sleek dark navigation bar
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Find Your Home", href: "#configurator" },
  { label: "Why Modular", href: "#why-modular" },
  { label: "Builders", href: "#builders" },
  { label: "Education", href: "#education" },
  { label: "Global Impact", href: "#global" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">MF</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            Modular<span className="text-primary">Finder</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#configurator")}
            className="px-5 py-2.5 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-opacity glow-amber"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#configurator")}
                className="mt-2 px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-md text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
