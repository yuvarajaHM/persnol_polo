import { Download, ExternalLink, Mail, FileText } from "lucide-react";
import { downloadResume } from "../utils/resume";

export default function ResumeCTA() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20" />
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative px-6 sm:px-12 py-12 sm:py-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-light">
                Open for Opportunities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h2>

            <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              I&apos;m a passionate Python Full Stack Developer looking for
              internship and entry-level developer opportunities. Check out my
              resume, explore my projects, or reach out — I&apos;d love to connect!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#projects");
                }}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface-light/50 px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-light hover:border-primary/30 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                View Projects
              </a>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-6 py-3.5 text-sm font-semibold text-accent hover:bg-accent/10 hover:border-accent/50 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
