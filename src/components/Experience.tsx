import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Developed full-stack web applications using Python, Django, HTML, CSS, JavaScript, MySQL, and Django ORM",
  "Worked on authentication, session management, responsive UI design, testing, and deployment",
  "Contributed to backend and frontend features for real-world web applications",
  "Built and maintained RESTful APIs and integrated them with frontend templates",
  "Collaborated on project architecture, database design, and code reviews",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Where I&apos;ve Worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {/* Experience Card */}
            <div className="md:ml-16 relative">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -left-[41px] top-8 h-6 w-6 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                <Briefcase className="h-3 w-3 text-white" />
              </div>

              <div className="glass-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 md:hidden">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          Python Full Stack Developer Intern
                        </h3>
                        <p className="text-primary font-semibold">
                          Skyllx Technologies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <Calendar className="h-4 w-4" />
                      <span>Feb 2026 – Jun 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <MapPin className="h-4 w-4" />
                      <span>Bangalore, India</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Gained hands-on experience in full-stack web development,
                  working on real-world projects with a focus on Django backend
                  development and responsive frontend design.
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Django",
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "MySQL",
                      "Django ORM",
                      "Git",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
