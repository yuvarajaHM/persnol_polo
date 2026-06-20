import {
  ExternalLink,
  Star,
  Calculator,
  ShoppingCart,
  FileText,
  Brain,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo?: string;
  icon: typeof Star;
  featured?: boolean;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "Smart Utility Hub",
    description:
      "A responsive utility web application that combines three practical calculators in one place — GST Calculator, EMI Calculator, and Age Calculator. Built as a useful online tool with a clean, modern UI.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    features: [
      "Add and remove GST for common tax percentages",
      "Calculate EMI, total interest, and total repayment",
      "Calculate exact age from date of birth",
      "Clean responsive UI across all devices",
      "Zero-dependency vanilla JavaScript implementation",
    ],
    github: "https://github.com/yuvarajaHM/digital-heroes-utility-hub",
    liveDemo: "https://digital-heroes-utility-hub.vercel.app/",
    icon: Calculator,
    featured: true,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    accentColor: "text-purple-400",
  },
  {
    title: "RaithaMitraMart",
    description:
      "A full-stack agriculture e-commerce platform built with Django for farmers and vendors. Features a complete multi-vendor marketplace with seller management and order tracking.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    features: [
      "Multi-vendor seller management system",
      "Product listing, search, and filtering",
      "Complete order tracking workflow",
      "User authentication & authorization",
      "Responsive mobile-friendly design",
    ],
    github: "https://github.com/yuvarajaHM",
    icon: ShoppingCart,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    accentColor: "text-green-400",
  },
  {
    title: "Professional Billing System",
    description:
      "A web-based billing management system for invoice generation and billing operations. Designed for small businesses to manage their invoicing workflow efficiently.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    features: [
      "Automated invoice generation",
      "Built-in GST calculation logic",
      "PDF download for invoices",
      "Receipt printing functionality",
      "Clean dashboard for billing overview",
    ],
    github: "https://github.com/yuvarajaHM",
    icon: FileText,
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
    accentColor: "text-cyan-400",
  },
  {
    title: "Sentiment Analysis Web App",
    description:
      "A sentiment analysis model using Logistic Regression and Naive Bayes for text classification. Built with Scikit-learn and NLP techniques for accurate sentiment detection.",
    technologies: ["Python", "Scikit-learn", "NLP", "Flask"],
    features: [
      "Text preprocessing and cleaning pipeline",
      "TF-IDF feature extraction",
      "Multiple model comparison (LR & NB)",
      "Achieved ~90% model accuracy",
      "Web interface for real-time predictions",
    ],
    github: "https://github.com/yuvarajaHM",
    icon: Brain,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accentColor: "text-orange-400",
  },
  {
    title: "Potato Leaf Disease Detection",
    description:
      "A CNN-based potato leaf disease detection system using deep learning. Classifies plant diseases from leaf images to help farmers with early diagnosis.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Image Processing"],
    features: [
      "Image preprocessing and augmentation",
      "Custom CNN architecture for classification",
      "Model training with 92% accuracy",
      "Support for multiple disease categories",
      "Transfer learning optimization",
    ],
    github: "https://github.com/yuvarajaHM",
    icon: Leaf,
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    accentColor: "text-lime-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills in full-stack development, machine learning, and more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${
                project.featured
                  ? "border-primary/30 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
                  : "border-border bg-card-bg"
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent px-4 py-1.5 rounded-bl-xl text-xs font-bold text-white">
                    <Star className="h-3 w-3 fill-current" />
                    Featured Project
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="grid lg:grid-cols-[1fr,auto] gap-6 items-start">
                  <div className="space-y-5">
                    {/* Project Header */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg flex-shrink-0`}
                      >
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-md bg-surface-lighter/50 px-2.5 py-0.5 text-xs font-medium text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <ArrowRight className={`h-4 w-4 mt-0.5 flex-shrink-0 ${project.accentColor}`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-border bg-surface-light/50 px-4 py-2.5 text-sm font-semibold text-text-primary hover:bg-surface-light hover:border-primary/30 transition-all"
                      >
                        <GithubIcon className="h-4 w-4" />
                        View Code
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Preview Visual */}
                  <div className="hidden lg:block">
                    <div
                      className={`w-64 h-44 rounded-xl bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                    />
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
