import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.jpg";

const projects = [
  {
    title: "Young Boss Grills",
    description:
      "A bold, dark-themed restaurant website for a premium BBQ & grill brand, featuring a full menu system with dynamic sections, a services showcase, and a warm orange-and-gold identity built around smoky, high-contrast visuals.",
    image: project1,
    tags: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    liveUrl: "https://youngboss-grills.netlify.app/",
    repoUrl: "https://github.com/daveelda/young-boss-grills",
  },
  {
    title: "Peptiva",
    description:
      "A clean, modern wellness and peptide education website designed for a premium health-focused brand, featuring a science-driven visual identity, educational content, and a polished responsive layout built around deep green and neutral tones.",
    image: project2,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://peptide-business.netlify.app/",
    repoUrl: "https://github.com/daveelda/PEPTIDE-BUSINESS",
  },
  {
    title: "Dave.Dev — Personal Portfolio",
    description:
      "A modern, responsive developer portfolio designed to showcase my skills, experience, services, and selected projects. Built with a dark, premium interface focused on clean visuals, smooth navigation, and a strong professional presence.",
    image: project3,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://dave-dev-portfolio.netlify.app/",
    repoUrl: "https://github.com/daveelda/dave-dev-portfolio",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects"
          description="A small selection of the work I'm most proud of."
        />

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 0.15}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-dave-surface/50 transition-all hover:border-dave-purple/20 hover:bg-dave-surface">

                {/* PROJECT IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-dave-purple/10 px-2.5 py-1 text-xs font-medium text-dave-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-dave-purple"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-dave-purple"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}