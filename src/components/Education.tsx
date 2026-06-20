import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  details: string;
  year: string;
  location: string;
  color: string;
}

const education: Education[] = [
  {
    institution: "APS College of Engineering, Bangalore",
    degree: "B.E. in Computer Science and Engineering",
    details: "CGPA: 8.80",
    year: "2022 – 2026",
    location: "Bangalore, Karnataka",
    color: "from-primary to-accent",
  },
  {
    institution: "Vishwa Manava PU College, Chitradurga",
    degree: "Pre-University Course (PUC)",
    details: "Percentage: 88%",
    year: "2020 – 2022",
    location: "Chitradurga, Karnataka",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group hover:-translate-y-1 overflow-hidden"
            >
              {/* Left gradient accent */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.color}`}
              />

              <div className="p-6 sm:p-8 pl-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-text-secondary font-medium mt-1">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-accent font-semibold text-sm">
                          {edu.details}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 ml-16 sm:ml-0">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
