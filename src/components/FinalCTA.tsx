import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import logo from "@/assets/logo.jpeg";

const FinalCTA = () => (
  <section className="section-padding bg-primary/5">
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
        <img src={logo} alt="BU PainCare Clinic" className="h-14 md:h-16 w-auto mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
          Stop Living With Pain.<br /><span className="text-primary">Start Living Fully.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
          Take the first step toward a pain-free life. Our experts are ready to help you recover — permanently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton variant="primary">Book Your Consultation Now</WhatsAppButton>
          <WhatsAppButton variant="outline">Talk to Our Team</WhatsAppButton>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
