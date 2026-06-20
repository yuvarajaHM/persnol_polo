import {
  Code2,
  Globe,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

interface SkillItem {
  name: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  bg: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    skills: [
      { name: "Python", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
      { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
      { name: "SQL", color: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    skills: [
      { name: "HTML5", color: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
      { name: "CSS3", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
      { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
      { name: "Tailwind CSS", color: "bg-teal-500/15 text-teal-400 border-teal-500/20" },
      { name: "React", color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-400",
    bg: "bg-green-400/10",
    skills: [
      { name: "Django", color: "bg-green-500/15 text-green-400 border-green-500/20" },
      { name: "REST APIs", color: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
      { name: "Authentication", color: "bg-red-500/15 text-red-400 border-red-500/20" },
      { name: "Django ORM", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    skills: [
      { name: "MySQL", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
      { name: "SQLite", color: "bg-gray-500/15 text-gray-400 border-gray-500/20" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    skills: [
      { name: "OOP", color: "bg-pink-500/15 text-pink-400 border-pink-500/20" },
      { name: "MVC Architecture", color: "bg-violet-500/15 text-violet-400 border-violet-500/20" },
      { name: "RESTful Design", color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    skills: [
      { name: "Git", color: "bg-red-500/15 text-red-400 border-red-500/20" },
      { name: "GitHub", color: "bg-gray-500/15 text-gray-300 border-gray-500/20" },
      { name: "Vercel", color: "bg-white/10 text-white border-white/20" },
      { name: "ML Basics", color: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
      { name: "Deep Learning (CNN)", color: "bg-rose-500/15 text-rose-400 border-rose-500/20" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.bg} transition-colors`}
                >
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium transition-all hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
