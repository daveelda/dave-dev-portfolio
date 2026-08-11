import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  {
    period: "2025 — Present",
    role: "Freelance Full-Stack Developer",
    company: "Dave.Dev",
    description:
      "Building websites and web applications for clients with React, Next.js, Node.js, and WordPress, handling everything from the first sketch to deployment.",
  },
  {
    period: "2024 — 2025",
    role: "Web Developer",
    company: "Freelance & client projects",
    description:
      "Built responsive marketing sites, landing pages, and custom WordPress themes, with a focus on performance, accessibility, and clean, maintainable code.",
  },
  {
    period: "2023",
    role: "Started Building for the Web",
    company: "Self-taught",
    description:
      "Learned HTML, CSS, JavaScript, and React by building real projects, then moved into full-stack work with Node.js, PHP, and Tailwind CSS.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="How I've grown as a web developer since 2023."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-dave-purple via-dave-purple/50 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {experiences.map((item, index) => (
            <SectionReveal key={item.period} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col gap-6 sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2" />

                <div className="absolute left-4 top-0 h-4 w-4 -translate-x-1.5 rounded-full border-2 border-dave-purple bg-dave-black sm:left-1/2 sm:-translate-x-2" />

                <div className="pl-12 sm:w-1/2 sm:pl-0">
                  <div
                    className={`rounded-2xl border border-white/[0.06] bg-dave-surface/50 p-6 transition-all hover:border-dave-purple/20 hover:bg-dave-surface sm:p-8 ${
                      index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <span className="text-sm font-medium text-dave-purple">{item.period}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
