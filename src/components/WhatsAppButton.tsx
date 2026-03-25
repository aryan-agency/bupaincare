import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const WhatsAppButton = ({ children, className = "", variant = "primary" }: { children: React.ReactNode; className?: string; variant?: "primary" | "outline" | "ghost" }) => {
  const base = "inline-flex items-center gap-2 font-body font-bold rounded-xl transition-all duration-300 cursor-pointer";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 glow-blue px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg",
    ghost: "text-primary hover:text-primary/80 px-4 py-2 text-base font-semibold",
  };

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
