import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const WhatsAppButton = ({ children, className = "", variant = "primary" }: { children: React.ReactNode; className?: string; variant?: "primary" | "outline" | "ghost" }) => {
  const base = "inline-flex items-center gap-2 font-body font-semibold rounded-lg transition-all duration-300 cursor-pointer";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 glow-gold-subtle hover:glow-gold px-6 py-3 md:px-8 md:py-4 text-sm md:text-base",
    outline: "border border-gold/40 text-gold hover:bg-gold/10 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base",
    ghost: "text-gold hover:text-gold-light px-4 py-2 text-sm",
  };

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
