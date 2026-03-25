import { motion } from "framer-motion";
import { Search, ShieldCheck, UserCheck, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Search, title: "Accurate Diagnosis", desc: "We use advanced diagnostics to identify the exact source of your pain — no guesswork.", color: "bg-primary/10 text-primary" },
  { icon: ShieldCheck, title: "Non-Invasive Treatment", desc: "Our approach eliminates the need for surgery. Heal naturally with expert-guided therapies.", color: "bg-secondary/10 text-secondary" },
  { icon: UserCheck, title: "Personalized Care", desc: "Every patient gets a customized treatment protocol tailored to their body and lifestyle.", color: "bg-accent/20 text-accent-foreground" },
  { icon: TrendingUp, title: "Long-Term Results", desc: "We don't mask symptoms. Our treatments target root causes for lasting recovery.", color: "bg-primary/10 text-primary" },
];

const WhyChooseSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose <span className="text-primary">BU PainCare</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center">
            <div className={`w-16 h-16 rounded-2xl ${r.color} flex items-center justify-center mx-auto mb-5`}>
              <r.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-display font-bold mb-3 text-foreground">{r.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
