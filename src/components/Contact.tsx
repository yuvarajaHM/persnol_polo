import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yuva04461@gmail.com",
      href: "mailto:yuva04461@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9686806111",
      href: "tel:+919686806111",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka, India",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/yuvarajaHM",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yuvaraja-h-m-821968318",
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-surface" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            I&apos;m actively looking for Python Full Stack Developer and Django
            Developer roles. Feel free to reach out — I&apos;d love to hear from
            you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 glass-card rounded-xl p-4 border border-border hover:border-primary/20 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-lg flex-shrink-0`}
                >
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-xl p-5 border border-border">
              <p className="text-sm font-semibold text-text-primary mb-4">
                Find Me Online
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-light/50 text-text-secondary hover:text-text-primary hover:border-primary/40 hover:bg-surface-light transition-all hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-4">
                    <Send className="h-8 w-8 text-green-500" />
                  </div>
                  <p className="text-lg font-semibold text-text-primary">
                    Message Sent!
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-secondary mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-surface-light/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-secondary mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-surface-light/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-surface-light/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Job Opportunity / Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-surface-light/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
