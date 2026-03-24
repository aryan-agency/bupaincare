import { motion } from "framer-motion";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import WhatsAppButton from "./WhatsAppButton";

const BeforeAfterSection = () => (
  <section id="results" className="section-padding bg-card/50">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Transformations</span>
        <h2 className="text-3xl md:text-5xl font-bold">Real Results. <span className="text-gold-gradient">Visible Recovery.</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[{ img: ba1, label: "Knee Pain Recovery" }, { img: ba2, label: "Spinal Posture Correction" }].map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border border-border">
            <img src={item.img} alt={item.label} loading="lazy" width={1024} height={768} className="w-full" />
            <div className="p-5 bg-card">
              <p className="font-display font-semibold text-lg">{item.label}</p>
              <p className="text-sm text-muted-foreground mt-1">Non-surgical treatment at BU PainCare</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <WhatsAppButton variant="primary">Start Your Recovery Today</WhatsAppButton>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
