import SectionHeading from "./SectionHeading";

interface AmenityCardProps {
  image: string;
  label: string;
}

const AmenityCard = ({ image, label }: AmenityCardProps) => (
  <div className="group relative overflow-hidden rounded-sm cursor-pointer">
    <img
      src={image}
      alt={label}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent" />
    <span className="absolute bottom-4 left-4 font-body text-sm text-primary-foreground tracking-wider">
      {label}
    </span>
  </div>
);

const amenities: AmenityCardProps[] = [
  { image: "/images/amenity-garden.jpg", label: "Sunken Garden" },
  { image: "/images/amenity-pool.jpg", label: "Swimming Pool" },
  { image: "/images/amenity-gym.jpg", label: "Outdoor Gym" },
  { image: "/images/amenity-bbq.jpg", label: "Barbecue Area" },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          title="World-Class Amenities for Elevated Living"
          subtitle="Runwal One offers thoughtfully designed amenities that blend fitness, relaxation, and social living for an elevated everyday experience."
          variant="gold"
        />

        <div className="flex justify-center mb-10">
          <a href="#contact" className="btn-primary inline-block">
            Enquire now
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, i) => (
            <AmenityCard key={i} {...amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
