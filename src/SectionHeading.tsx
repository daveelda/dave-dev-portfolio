import { SectionReveal } from "./SectionReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <SectionReveal className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      <span className="inline-block rounded-full bg-dave-purple/10 px-4 py-1.5 text-sm font-medium tracking-wide text-dave-purple">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </SectionReveal>
  );
}
