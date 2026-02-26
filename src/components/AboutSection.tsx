import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section id="overview" className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          title="A lifestyle so complete, you will need at least 25 hours a day to enjoy it."
          variant="gold"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            We bring you Thane's only true Urban Habitat - a landmark project that boasts of
            lavish residences with 50+ amenities which add value to your life. It's a place
            where you can live, work, play, shop, learn and eat — all at the same place.
            Where every hurried day meets a laidback, stress-free evening. Where weekends
            meander along, letting your soul rejuvenate and your body, re-energise.
          </p>
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
            Welcome to a home where every day will bestow you with so much
            more life per hour. And more hours per day.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Enquire now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
