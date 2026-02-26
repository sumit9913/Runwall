import { MapPin, Trees, Waves, Building2, LayoutGrid, Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface HighlightItem {
  icon: React.ReactNode;
  label: string;
}

const highlights: HighlightItem[] = [
  { icon: <MapPin className="w-10 h-10 text-accent" />, label: "21-acre master planned community" },
  { icon: <Trees className="w-10 h-10 text-accent" />, label: "4.5 acres of lush open space" },
  { icon: <Waves className="w-10 h-10 text-accent" />, label: "50+ world-class amenities" },
  { icon: <Building2 className="w-10 h-10 text-accent" />, label: "One of Thane's largest clubhouses" },
  { icon: <LayoutGrid className="w-10 h-10 text-accent" />, label: "Premium 1, 2 & 3 BHK residences" },
  { icon: <Handshake className="w-10 h-10 text-accent" />, label: "Signature Runwal quality, legacy and trust" },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text + Icons */}
          <div>
            <SectionHeading
              title="The Hallmarks of a Higher Order"
              subtitle="21 acres of prime urban real estate. Consisting not just of residences but also a vibrant, exciting and glamorous lifestyle. Where every day begins with a beautiful sunrise and continues till whenever you want it to."
              className="text-left lg:text-left"
              variant="dark"
            />

            <div className="grid grid-cols-2 gap-8 mt-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  {item.icon}
                  <span className="font-body text-sm text-muted-foreground leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-primary inline-block">
                Enquire now
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src="/images/hero-towers.jpg"
              alt="Runwal One Towers"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
