import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "I write maintainable, scalable code with modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "Design-Driven",
    description: "Every project balances beautiful interfaces with intuitive user experiences.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description: "Fast load times, SEO readiness, and smooth interactions are non-negotiable.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who cares about design, performance, and results"
          description="I'm Dave, a Full-Stack Web Developer building modern websites and web applications."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-dave-purple/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dave-surface p-8 sm:p-10">
                <p className="text-lg leading-relaxed text-foreground">
                  I have 3+ years of experience building modern websites and web applications,
                  and I've been building since 2023.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I work mainly with React, Next.js, Node.js, PHP, Tailwind CSS, Git, and
                  WordPress, choosing whichever fits the project best.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I care about creating clean, responsive, and user-friendly digital experiences,
                  and I enjoy working closely with people to get the details right.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8">
                  {[
                    "3+ Years Experience",
                    "Modern Web Development",
                    "Building Since 2023",
                    "Available for Freelance",
                  ].map((stat) => (
                    <div key={stat} className="rounded-xl bg-dave-purple/5 px-4 py-3">
                      <p className="text-sm font-medium text-dave-purple">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.1} direction="right">
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dave-surface/50 p-6 transition-all hover:border-dave-purple/20 hover:bg-dave-surface">
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-dave-purple/10 text-dave-purple transition-colors group-hover:bg-dave-purple/20">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
