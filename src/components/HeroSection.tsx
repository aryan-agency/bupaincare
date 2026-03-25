import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import heroImg from "@/assets/hero-clinic.jpg";
import logo from "@/assets/logo.jpeg";
import { ShieldCheck, Leaf, Award } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img src={heroImg} alt="BU PainCare Clinic treatment room" width={1920} height={1080} className="w-full h-full object-cover opacity-15" />
    </div>

    <div className="container mx-auto relative z-10 py-32 md:py-40">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
        <img src={logo} alt="BU PainCare Clinic" className="h-16 md:h-20 w-auto mb-8" />

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {[{ icon: ShieldCheck, text: "Safe" }, { icon: Leaf, text: "Non-Invasive" }, { icon: Award, text: "Certified" }].map((b) => (
            <span key={b.text} className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary border-2 border-primary/30 rounded-full px-4 py-1.5 bg-primary/5">
              <b.icon className="w-4 h-4" /> {b.text}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
          Pain-Free Living Starts With{" "}
          <span className="text-primary">Precision Diagnosis</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium">
          Advanced non-surgical treatments that address the root cause — not just the symptoms. Experience long-term recovery guided by expert care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <WhatsAppButton variant="primary">Book Consultation</WhatsAppButton>
          <WhatsAppButton variant="outline">Call Now — Let's Talk</WhatsAppButton>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
