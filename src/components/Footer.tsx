import { Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-white text-sm font-mono">
                YH
              </div>
              <span className="text-lg font-bold text-text-primary">
                Yuvaraja H M
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Python Full Stack Developer passionate about building clean,
              functional web applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/yuvarajaHM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-light/50 text-text-secondary hover:text-text-primary hover:border-primary/40 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvaraja-h-m-821968318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-light/50 text-text-secondary hover:text-text-primary hover:border-primary/40 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-text-muted mt-4">
              <a
                href="mailto:yuva04461@gmail.com"
                className="hover:text-primary transition-colors"
              >
                yuva04461@gmail.com
              </a>
            </p>
            <p className="text-sm text-text-muted">
              <a
                href="tel:+919686806111"
                className="hover:text-primary transition-colors"
              >
                +91 9686806111
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Yuvaraja H M. Built with{" "}
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using
            React &amp; Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface-light/50 px-4 py-2 text-sm text-text-muted hover:text-primary hover:border-primary/30 transition-all hover:scale-105"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
