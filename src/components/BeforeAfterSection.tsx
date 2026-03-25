import { motion } from "framer-motion";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import WhatsAppButton from "./WhatsAppButton";

const BeforeAfterSection = () => (
  <section id="results" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">Transformations</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Real Results. <span className="text-primary">Visible Recovery.</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[{ img: ba1, label: "Knee Pain Recovery" }, { img: ba2, label: "Spinal Posture Correction" }].map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border-2 border-border shadow-md">
            <img src={item.img} alt={item.label} loading="lazy" width={1024} height={768} className="w-full" />
            <div className="p-5 bg-background">
              <p className="font-display font-bold text-lg text-foreground">{item.label}</p>
              <p className="text-base text-muted-foreground mt-1">Non-surgical treatment at BU PainCare</p>
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
