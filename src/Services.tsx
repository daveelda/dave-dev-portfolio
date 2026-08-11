import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";
import { Layers, Globe, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of web applications using React, Next.js, Node.js, and modern databases. From API design to pixel-perfect UI.",
    features: ["React & Next.js", "Node.js APIs", "Database Architecture", "Cloud Deployment"],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins tailored to your brand. Fast, secure, and easy to manage without compromising design.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "Performance Tuning"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Mobile-first designs that look stunning and function flawlessly across all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Accessibility", "Design Systems"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed audits, SEO improvements, and technical upgrades that make your site faster, more visible, and more reliable.",
    features: ["Core Web Vitals", "SEO Audits", "Caching Strategy", "Code Refactoring"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="From concept to launch, I offer development services focused on quality, performance, and growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-dave-surface/50 p-6 transition-all hover:border-dave-purple/20 hover:bg-dave-surface lg:p-8">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-dave-purple/10 blur-2xl transition-opacity group-hover:opacity-70" />

                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-dave-purple/10 text-dave-purple transition-colors group-hover:bg-dave-purple/20">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-dave-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
