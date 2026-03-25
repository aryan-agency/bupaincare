import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import logo from "@/assets/logo.jpeg";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border shadow-sm" : "bg-background"}`}>
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="shrink-0">
          <img src={logo} alt="BU PainCare Clinic" className="h-12 md:h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-body font-medium text-foreground/70 hover:text-primary transition-colors">{l.label}</a>
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
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-base font-body font-medium text-foreground/70 hover:text-primary">{l.label}</a>
          ))}
          <WhatsAppButton variant="primary" className="w-full justify-center">Book Consultation</WhatsAppButton>
        </div>
      )}
    </header>
  );
};

export default Header;
