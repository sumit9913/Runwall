const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-towers.jpg')" }}
      />
      <div className="absolute inset-0 bg-brown-dark/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center lg:text-right">
        <div className="max-w-2xl lg:ml-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Live the <span className="font-bold italic">25 Hour Life</span>
            <br />
            Every Day.
          </h1>

          <div className="bg-foreground/30 backdrop-blur-sm rounded-lg p-6 mb-6 inline-block">
            <p className="text-primary-foreground font-body text-sm tracking-wider mb-2">
              Luxurious 2, 3 BHK & Jodi Units
            </p>
            <p className="text-primary-foreground font-body text-lg">
              Starts from{" "}
              <span className="text-3xl font-bold font-display">₹ 1.95 Cr</span>{" "}
              <span className="text-sm tracking-wider uppercase">Onwards</span>
            </p>
            <p className="text-primary-foreground/80 font-body text-sm mt-1">
              at Ghodbunder Road, Manpada, Thane West.
            </p>
          </div>

          <p className="text-primary-foreground/80 font-body text-sm tracking-wider mb-6">
            Status: Under Construction
          </p>

          <a href="#contact" className="btn-outline-light inline-block">
            Enquire now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
