import SectionHeading from "./SectionHeading";

const galleryImages = [
  "/images/hero-towers.jpg",
  "/images/interior-living.jpg",
  "/images/interior-kitchen.jpg",
  "/images/amenity-garden.jpg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="Gallery" variant="gold" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature large */}
          <div className="md:col-span-2 md:row-span-2">
            <img
              src={galleryImages[0]}
              alt="Gallery 1"
              className="w-full h-full min-h-[300px] md:min-h-[500px] object-cover rounded-sm"
              loading="lazy"
            />
          </div>
          {galleryImages.slice(1).map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Gallery ${i + 2}`}
                className="w-full h-60 object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
