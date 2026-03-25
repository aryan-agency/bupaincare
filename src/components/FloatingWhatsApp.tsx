import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-8 h-8 text-white" fill="white" />
  </a>
);

export default FloatingWhatsApp;
