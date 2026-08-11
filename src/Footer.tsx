import { Github, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#home" className="font-heading text-2xl font-bold text-foreground">
            Dave<span className="text-dave-purple">.</span>Dev
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/daveelda",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/dave-elda",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "#",
                label: "X",
              },
              {
                icon: Instagram,
                href: "https://instagram.com/daveelda10",
                label: "Instagram",
              },
              {
                icon: MessageCircle,
                href: "https://wa.me/2348117178092",
                label: "WhatsApp",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-muted-foreground transition-all hover:border-dave-purple/30 hover:text-dave-purple"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dave.Dev. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Designed & built with{" "}
            <span className="text-dave-purple">React</span> +{" "}
            <span className="text-dave-purple">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}