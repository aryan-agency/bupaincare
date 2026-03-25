import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+919999737292"
    className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
    aria-label="Call Now"
  >
    <Phone className="w-8 h-8 text-primary-foreground" />
    <span className="absolute right-20 bg-foreground text-background text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
      Call Now
    </span>
  </a>
);

export default FloatingCallButton;
