import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { name: "Frontend Development" },
  { name: "React & Next.js" },
  { name: "Backend & APIs" },
  { name: "WordPress" },
  { name: "TypeScript" },
  { name: "Performance Optimization" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="Core competencies"
          description="A blend of technical depth and design sensibility that drives every project."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SectionReveal
              key={skill.name}
              delay={index * 0.1}
            >
              <div className="group rounded-2xl border border-border bg-dave-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dave-purple/30 hover:bg-dave-surface">
                <span className="font-heading text-base font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}