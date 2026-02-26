import { useState } from "react";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will contact you shortly.");
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Form */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-8">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/30 pb-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone*"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/30 pb-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/30 pb-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary bg-accent text-accent-foreground mt-4">
                Submit
              </button>
            </form>
          </div>

          {/* Right - Branding */}
          <div>
            <div className="mb-8">
              <span className="font-display text-3xl font-bold tracking-wider text-accent">
                RUNWAL
              </span>
              <br />
              <span className="font-display text-xl font-bold text-primary-foreground">ONE</span>
              <br />
              <span className="text-xs tracking-widest text-accent font-body uppercase">
                Manpada, Thane
              </span>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 mt-8">
              <div className="flex gap-4">
                {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                    aria-label="Social media"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 Runwal Realty. All rights reserved. | Disclaimer: This is a demo website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
