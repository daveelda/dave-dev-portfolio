import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      let current = sections[0] ?? "home";

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

 const toggleTheme = () => {
  const root = document.documentElement;

  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
  }
};

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.06] px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "bg-dave-black/70 shadow-2xl shadow-dave-purple/5 backdrop-blur-2xl"
              : "bg-dave-black/40 backdrop-blur-xl"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2"
          >
            <span className="text-lg font-bold text-foreground">
              Dave.Dev
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
              aria-label="Toggle theme"
            >
              <Sun className="h-[18px] w-[18px]" />
            </button>

            <a
              href="/resume.pdf"
              className="hidden items-center gap-2 rounded-full bg-dave-purple px-4 py-2 text-sm font-medium text-white transition-all hover:bg-dave-purple-light hover:shadow-lg hover:shadow-dave-purple/25 sm:inline-flex"
              download
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="grid h-10 w-10 place-items-center rounded-full text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dave-black/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              className="absolute left-4 right-4 top-24 rounded-2xl border border-white/[0.06] bg-dave-surface/95 p-4 backdrop-blur-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-dave-purple/10 text-dave-purple"
                        : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="/resume.pdf"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-dave-purple px-4 py-3 text-base font-medium text-white"
                  download
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}