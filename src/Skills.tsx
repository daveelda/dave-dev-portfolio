import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { name: "Frontend Development",},
  { name: "React & Next.js"},
  { name: "Backend & APIs"},
  { name: "WordPress"},
  { name: "Typescript"},
  { name: "Performance Optimization"},
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="Core competencies"
          description="A blend of technical depth and design sensibility that drives every project."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <SectionReveal key={skill.name} delay={index * 0.1}>
              <div className="group">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-heading text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-dave-purple">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-dave-gray">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-dave-purple to-dave-purple-light"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
