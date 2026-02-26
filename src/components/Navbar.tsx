import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Configuration", href: "#configuration" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connectivity", href: "#connectivity" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-display text-2xl font-bold tracking-wider text-primary-foreground">
            RUNWAL
          </span>
          <span className="font-display text-lg font-bold text-primary-foreground">ONE</span>
          <span className="text-xs tracking-widest text-primary-foreground/80 font-body uppercase">
            Manpada, Thane
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wider text-primary-foreground/90 hover:text-primary-foreground transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="btn-outline-light text-xs">
            Schedule a site visit
          </a>
          <a href="#contact" className="btn-outline-light text-xs">
            Enquire now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-brown-dark/95 backdrop-blur-sm px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-wider text-primary-foreground/90 hover:text-primary-foreground transition-colors font-body border-b border-primary-foreground/10"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="#contact" className="btn-outline-light text-xs text-center">
              Schedule a site visit
            </a>
            <a href="#contact" className="btn-outline-light text-xs text-center">
              Enquire now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
