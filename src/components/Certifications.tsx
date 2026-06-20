import { Award, Building, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "Web Development Certification",
    issuer: "Edunet Foundation",
    date: "2024",
    description:
      "Comprehensive web development certification covering HTML, CSS, JavaScript, and modern web development practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Python Full Stack Development Internship",
    issuer: "Skyllx Technologies",
    date: "Feb 2026 – Jun 2026",
    description:
      "Hands-on internship experience in Python full-stack development with Django, building real-world web applications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Python & Django Fundamentals",
    issuer: "Kodest Technologies Pvt Ltd",
    date: "2024",
    description:
      "Certification in Python programming fundamentals and Django web framework, covering core concepts and practical applications.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${cert.color}`}
              />

              <div className="p-6">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Building className="h-3.5 w-3.5 text-accent" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
