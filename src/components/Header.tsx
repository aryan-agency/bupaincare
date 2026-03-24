import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Conditions", href: "#conditions" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-gold-gradient">BU PainCare</a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton variant="primary">Book Consultation</WhatsAppButton>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-body text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
          <WhatsAppButton variant="primary" className="w-full justify-center">Book Consultation</WhatsAppButton>
        </div>
      )}
    </header>
  );
};

export default Header;
