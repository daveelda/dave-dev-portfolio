import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind? Send me a message and I'll get back to you within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <SectionReveal className="lg:col-span-2" direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-dave-purple/10 text-dave-purple">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:davidemmanuella0810@gmail.com"
                    className="mt-1 text-muted-foreground transition-colors hover:text-dave-purple"
                  >
                    davidemmanuella0810@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-dave-purple/10 text-dave-purple">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">WhatsApp</h3>
                  <a
                    href="https://wa.me/2348117178092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-muted-foreground transition-colors hover:text-dave-purple"
                  >
                    +234 811 717 8092
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-dave-purple/10 text-dave-purple">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-muted-foreground">Remote — Available worldwide</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-dave-surface/50 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Availability
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I'm currently accepting new freelance projects and open to full-time
                  opportunities. Let's discuss how I can help.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-3" direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.06] bg-dave-surface/50 p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.08] bg-dave-black/50 px-4 py-3 text-foreground outline-none transition-all focus:border-dave-purple focus:ring-2 focus:ring-dave-purple/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.08] bg-dave-black/50 px-4 py-3 text-foreground outline-none transition-all focus:border-dave-purple focus:ring-2 focus:ring-dave-purple/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-dave-black/50 px-4 py-3 text-foreground outline-none transition-all focus:border-dave-purple focus:ring-2 focus:ring-dave-purple/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dave-purple px-6 py-3 text-base font-medium text-white transition-all hover:bg-dave-purple-light hover:shadow-lg hover:shadow-dave-purple/25 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  "Message sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
