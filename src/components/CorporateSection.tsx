import { motion } from "framer-motion";
import corporateImg from "@/assets/corporate-wellness.jpg";
import WhatsAppButton from "./WhatsAppButton";

const CorporateSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={corporateImg} alt="Corporate wellness" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
    </div>

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Corporate Wellness</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Pain-Free Workforce = <span className="text-gold-gradient">Higher Productivity</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Desk-bound professionals suffer from chronic back, neck, and joint pain that silently kills productivity. Our corporate wellness programs bring expert pain management directly to your organization.
        </p>
        <ul className="space-y-3 mb-8">
          {["On-site posture assessments", "Ergonomic consultations", "Customized employee wellness plans", "Group therapy & workshop sessions"].map((t) => (
            <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> {t}
            </li>
          ))}
        </ul>
        <WhatsAppButton variant="primary">Book Corporate Consultation</WhatsAppButton>
      </motion.div>
    </div>
  </section>
);

export default CorporateSection;
