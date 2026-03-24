import { motion } from "framer-motion";
import { Search, ShieldCheck, UserCheck, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Search, title: "Accurate Diagnosis", desc: "We use advanced diagnostics to identify the exact source of your pain — no guesswork." },
  { icon: ShieldCheck, title: "Non-Invasive Treatment", desc: "Our approach eliminates the need for surgery. Heal naturally with expert-guided therapies." },
  { icon: UserCheck, title: "Personalized Care", desc: "Every patient gets a customized treatment protocol tailored to their body and lifestyle." },
  { icon: TrendingUp, title: "Long-Term Results", desc: "We don't mask symptoms. Our treatments target root causes for lasting recovery." },
];

const WhyChooseSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Why Us</span>
        <h2 className="text-3xl md:text-5xl font-bold">Why Choose <span className="text-gold-gradient">BU PainCare</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
