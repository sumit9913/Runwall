interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "gold" | "dark";
}

const SectionHeading = ({
  title,
  subtitle,
  className = "",
  variant = "gold",
}: SectionHeadingProps) => {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight ${
          variant === "gold" ? "heading-display" : "heading-display-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto font-body text-muted-foreground text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
