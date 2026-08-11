import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import heroMockup from "./assets/hero-mockup.jpg";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-dave-purple/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-dave-purple/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-dave-purple/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-dave-purple/20 bg-dave-purple/10 px-4 py-1.5 text-sm font-medium text-dave-purple">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dave-purple opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-dave-purple" />
              </span>
              Available for freelance work
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Full-Stack Web Developer crafting{" "}
            <span className="text-dave-purple text-glow">fast, modern</span> and{" "}
            <span className="text-dave-purple text-glow">scalable</span> web experiences.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Turning ideas into clean, responsive web experiences. I build websites, modern
            web applications, and custom WordPress solutions with React, Next.js, Node.js,
            PHP, and Tailwind CSS.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-dave-purple px-6 py-3 text-base font-medium text-white transition-all hover:bg-dave-purple-light hover:shadow-lg hover:shadow-dave-purple/25"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
           <a
  href="/resume.pdf"
  download="resume.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/[0.08]"
>
  Download Resume
</a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/daveelda", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/dave-elda", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-muted-foreground transition-all hover:border-dave-purple/30 hover:text-dave-purple"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative order-1 flex items-center justify-center lg:order-2">
          <FloatingCard delay={0} duration={5} yOffset={16} className="relative w-full max-w-xl">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dave-surface/50 shadow-2xl shadow-dave-purple/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={heroMockup}
                alt="Dave.Dev workspace showing code editor and UI cards"
                className="w-full rounded-2xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08]" />
            </motion.div>
          </FloatingCard>

          <FloatingCard delay={0.5} duration={4} yOffset={10} className="absolute -left-4 top-10 hidden sm:block lg:-left-8">
            <motion.div
              className="glass-strong rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-dave-purple/20 text-dave-purple">
                  <span className="font-heading text-lg font-bold">3+</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Building since 2023</p>
                </div>
              </div>
            </motion.div>
          </FloatingCard>

          <FloatingCard delay={1} duration={4.5} yOffset={12} className="absolute -right-4 bottom-20 hidden sm:block lg:-right-8">
            <motion.div
              className="glass-strong rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-green-500/20 text-green-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Open to Work</p>
                  <p className="text-xs text-muted-foreground">Freelance & Full-time</p>
                </div>
              </div>
            </motion.div>
          </FloatingCard>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
