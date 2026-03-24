import { motion } from "framer-motion";
import { Stethoscope, SearchCheck, ClipboardList, BarChart3 } from "lucide-react";

const steps = [
  { icon: Stethoscope, title: "Diagnosis", desc: "Comprehensive examination with advanced diagnostics." },
  { icon: SearchCheck, title: "Root Cause Analysis", desc: "Identify the true source of your pain." },
  { icon: ClipboardList, title: "Personalized Plan", desc: "Custom treatment protocol for your body." },
  { icon: BarChart3, title: "Recovery Tracking", desc: "Continuous monitoring for lasting results." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Our Process</span>
        <h2 className="text-3xl md:text-5xl font-bold">Your Path to <span className="text-gold-gradient">Recovery</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="relative text-center">
            <div className="text-5xl font-display font-bold text-gold/10 absolute -top-2 left-1/2 -translate-x-1/2">0{i + 1}</div>
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5 relative z-10">
              <s.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
