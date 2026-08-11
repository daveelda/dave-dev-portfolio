import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "../Navigation";
import { Hero } from "../Hero";
import { About } from "../About";
import { Experience } from "../Experience";
import { Services } from "../Services";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { Footer } from "../Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dave.Dev — Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "Premium portfolio of Dave.Dev, a freelance Full-Stack Web Developer crafting fast, modern and scalable web experiences.",
      },
      { property: "og:title", content: "Dave.Dev — Full-Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Premium portfolio of Dave.Dev, a freelance Full-Stack Web Developer crafting fast, modern and scalable web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}