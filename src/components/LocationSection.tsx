import SectionHeading from "./SectionHeading";

const LocationSection = () => {
  return (
    <section id="connectivity" className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map placeholder */}
          <div className="bg-muted rounded-sm h-[400px] flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d72.97!3d19.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzM2LjAiTiA3MsKwNTgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Runwal One Location"
            />
          </div>

          {/* Info */}
          <div>
            <SectionHeading
              title="Where Convenience Meets Comfort"
              subtitle="Strategically located in Thane, Runwal One offers seamless connectivity to key business hubs, social infrastructure, and everyday conveniences."
              className="text-left lg:text-left"
              variant="gold"
            />

            <div className="border-t border-border pt-6 mt-6">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Site Address
              </p>
              <p className="font-body text-foreground text-sm leading-relaxed">
                Runwal One at Manpada, Next to R Mall,
                <br />
                Ghodbunder Road, Thane (W).
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                Google Map
              </a>
              <a href="#contact" className="btn-primary text-xs">
                Enquire now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
