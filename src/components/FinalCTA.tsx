import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const FinalCTA = () => (
  <section className="section-padding bg-gradient-to-b from-card/50 to-background">
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Stop Living With Pain.<br /><span className="text-gold-gradient">Start Living Fully.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
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
