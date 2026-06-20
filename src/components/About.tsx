import {
  Code2,
  GraduationCap,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Graduate",
    description:
      "B.E. in Computer Science and Engineering with a CGPA of 8.80 from APS College of Engineering, Bangalore.",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    description:
      "Completed a Python Full Stack Developer internship building real-world web applications with Django and MySQL.",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description:
      "Proficient in Python, Django, HTML, CSS, JavaScript, MySQL with hands-on experience in both frontend and backend development.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Passionate about building practical software products, from e-commerce platforms to machine learning models.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio Text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-border">
              <p className="text-text-secondary leading-relaxed text-base mb-4">
                I am a Computer Science graduate with a strong interest in
                Python full-stack development. I enjoy building practical,
                real-world web applications that solve real problems and make
                a difference.
              </p>
              <p className="text-text-secondary leading-relaxed text-base mb-4">
                I have hands-on experience building web applications using{" "}
                <span className="text-primary font-medium">Python</span>,{" "}
                <span className="text-primary font-medium">Django</span>,{" "}
                <span className="text-primary font-medium">HTML</span>,{" "}
                <span className="text-primary font-medium">CSS</span>,{" "}
                <span className="text-primary font-medium">JavaScript</span>,
                and <span className="text-primary font-medium">MySQL</span>.
                During my internship, I worked on authentication systems,
                session management, responsive UI design, testing, and
                deployment.
              </p>
              <p className="text-text-secondary leading-relaxed text-base mb-4">
                I have built diverse projects spanning web development,
                machine learning, and deep learning — including e-commerce
                platforms, billing systems, sentiment analysis models, and
                image classification systems.
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                I am passionate about continuously improving my backend and
                frontend development skills, and I am looking for
                opportunities to contribute to impactful software projects as
                a Python Full Stack Developer or Django Developer.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 text-center border border-border">
                <p className="text-2xl font-bold gradient-text">8.80</p>
                <p className="text-xs text-text-muted mt-1">CGPA</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center border border-border">
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-xs text-text-muted mt-1">Projects</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center border border-border">
                <p className="text-2xl font-bold gradient-text">3+</p>
                <p className="text-xs text-text-muted mt-1">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
