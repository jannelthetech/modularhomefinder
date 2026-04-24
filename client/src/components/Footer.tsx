// DESIGN: Carbon Blueprint — minimal dark footer
import { ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Find Your Home", href: "#configurator" },
      { label: "Builder Network", href: "#builders" },
      { label: "Why Modular", href: "#why-modular" },
      { label: "Education Hub", href: "#education" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Modular vs Site-Built", href: "#education" },
      { label: "Modular vs Manufactured", href: "#education" },
      { label: "Global Case Studies", href: "#global" },
      { label: "Housing Crisis", href: "#why-modular" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Scott Malouff, Founder", href: "#about" },
      { label: "For Real Estate Agents", href: "#configurator" },
      { label: "For Developers", href: "#configurator" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-16 section-darker">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">MF</span>
              </div>
              <span className="font-display font-bold text-lg">
                Modular<span className="text-primary">Finder</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              The Zillow and CarGurus for modular homes. Connecting homeowners, developers,
              and real estate agents with America's top modular builders.
            </p>
            <p className="text-xs text-muted-foreground">
              Founded by <strong className="text-foreground">Scott Malouff</strong>
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold text-sm mb-4 text-foreground">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Modular Finder. All rights reserved. Built with purpose.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
