const ConfigurationSection = () => {
  return (
    <section id="configuration" className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/interior-living.jpg')" }}
      >
        <div className="absolute inset-0 bg-brown-dark/20" />

        {/* Config Card */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-primary text-primary-foreground p-8 md:p-10 max-w-sm">
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">
            1 Bed
            <br />
            Opulent
            <br />
            Residences
          </h3>
          <div className="border-t border-primary-foreground/30 pt-4 mt-4">
            <p className="font-body text-sm tracking-wider mb-4">
              441 sq.ft. - 472 sq.ft.
            </p>
            <a href="#contact" className="btn-outline-light text-xs inline-block">
              Click For Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
