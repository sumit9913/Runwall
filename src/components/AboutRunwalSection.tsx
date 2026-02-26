import SectionHeading from "./SectionHeading";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center p-6">
    <span className="font-display text-4xl md:text-5xl text-accent">{value}</span>
    <p className="font-body text-sm text-muted-foreground mt-2">{label}</p>
  </div>
);

const stats: StatItemProps[] = [
  { value: "47+", label: "Years of Legacy" },
  { value: "50+", label: "Projects Delivered" },
  { value: "50k+", label: "Happy Families" },
  { value: "50+", label: "Awards & Accolades" },
];

const AboutRunwalSection = () => {
  return (
    <section className="section-muted py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              title="About Runwal Realty - Pioneers of Indian Real Estate"
              className="text-left lg:text-left"
              variant="gold"
            />
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
              Established in 1978, Runwal Realty, based in Mumbai, stands as India's premier and
              leading real estate developer, operating in residential, commercial, and organized
              retail verticals across Mumbai, Thane & Pune. Over the last four decades, Runwal
              Realty has delivered more than 50+ landmark projects.
            </p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              The company has brought joy to more than 50,000 happy families across Mumbai. In
              addition to residential projects, Runwal Realty is also a pioneer in developing
              malls and is renowned for its iconic projects - R City and R Mall in Mumbai.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${i < 2 ? "border-b border-border" : ""} ${
                  i % 2 === 0 ? "border-r border-border" : ""
                }`}
              >
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRunwalSection;
