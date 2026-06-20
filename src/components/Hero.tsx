import { ArrowDown, ExternalLink, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { downloadResume } from "../utils/resume";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-primary-light">
                  Open to Opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Yuvaraja H M</span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-text-secondary">
                Python Full Stack Developer{" "}
                <span className="text-accent">|</span> Django Developer
              </p>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
                Computer Science graduate with experience in building web
                applications using Python, Django, HTML, CSS, JavaScript, and
                MySQL. Passionate about creating useful web applications, clean
                user interfaces, and solving real-world problems through
                technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#projects")}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                View Projects
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface-light/50 px-6 py-3 text-sm font-semibold text-text-primary hover:bg-surface-light hover:border-primary/30 transition-all hover:scale-105 hover:-translate-y-0.5"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yuvarajaHM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-light/50 text-text-secondary hover:text-text-primary hover:border-primary/40 hover:bg-surface-light transition-all hover:scale-110 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvaraja-h-m-821968318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-light/50 text-text-secondary hover:text-text-primary hover:border-primary/40 hover:bg-surface-light transition-all hover:scale-110 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <div className="h-8 w-px bg-border mx-2" />
              <span className="text-sm text-text-muted">
                Bangalore, Karnataka, India
              </span>
            </div>
          </div>

          {/* Right Content - Developer Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl scale-110" />

              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 border border-border">
                {/* Code Terminal */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-xs text-text-muted font-mono">
                      developer.py
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <p>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-300">Developer</span>
                      <span className="text-text-muted">:</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-blue-300">__init__</span>
                      <span className="text-text-muted">(self):</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-text-muted">self.</span>
                      <span className="text-green-300">name</span>
                      <span className="text-text-muted"> = </span>
                      <span className="text-orange-300">
                        &quot;Yuvaraja H M&quot;
                      </span>
                    </p>
                    <p className="pl-8">
                      <span className="text-text-muted">self.</span>
                      <span className="text-green-300">role</span>
                      <span className="text-text-muted"> = </span>
                      <span className="text-orange-300">
                        &quot;Full Stack Dev&quot;
                      </span>
                    </p>
                    <p className="pl-8">
                      <span className="text-text-muted">self.</span>
                      <span className="text-green-300">skills</span>
                      <span className="text-text-muted"> = [</span>
                    </p>
                    <p className="pl-12">
                      <span className="text-orange-300">
                        &quot;Python&quot;
                      </span>
                      <span className="text-text-muted">,</span>{" "}
                      <span className="text-orange-300">
                        &quot;Django&quot;
                      </span>
                      <span className="text-text-muted">,</span>
                    </p>
                    <p className="pl-12">
                      <span className="text-orange-300">
                        &quot;JavaScript&quot;
                      </span>
                      <span className="text-text-muted">,</span>{" "}
                      <span className="text-orange-300">
                        &quot;MySQL&quot;
                      </span>
                    </p>
                    <p className="pl-8">
                      <span className="text-text-muted">]</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-text-muted">self.</span>
                      <span className="text-green-300">passion</span>
                      <span className="text-text-muted"> = </span>
                      <span className="text-orange-300">
                        &quot;Building Web Apps 🚀&quot;
                      </span>
                    </p>
                  </div>

                  {/* Status indicators */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-xs text-green-400">
                          Available for Work
                        </span>
                      </div>
                      <div className="text-xs text-text-muted">
                        CGPA: 8.80
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
