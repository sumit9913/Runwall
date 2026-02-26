import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import ConfigurationSection from "@/components/ConfigurationSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import AboutRunwalSection from "@/components/AboutRunwalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <HighlightsSection />
        <ConfigurationSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <AboutRunwalSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
