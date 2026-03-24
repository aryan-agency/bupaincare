import { motion } from "framer-motion";
import { Bone, Activity, Heart, Dumbbell, Spline } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const conditions = [
  { icon: Bone, title: "Knee Osteoarthritis", desc: "Non-surgical relief from chronic knee pain with targeted therapy and regenerative techniques." },
  { icon: Radius, title: "Cervical Spondylitis", desc: "Advanced treatment for neck pain, stiffness, and nerve compression without surgery." },
  { icon: Activity, title: "Lumbar Spondylitis", desc: "Root-cause diagnosis and therapy for lower back pain and spinal degeneration." },
  { icon: Heart, title: "Varicose Veins", desc: "Minimally invasive treatments that restore circulation and reduce visible veins." },
  { icon: Dumbbell, title: "Muscle Weakness", desc: "Personalized rehabilitation programs to rebuild strength and restore mobility." },
];

const ConditionsSection = () => (
  <section id="conditions" className="section-padding bg-card/50">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Specializations</span>
        <h2 className="text-3xl md:text-5xl font-bold">Conditions <span className="text-gold-gradient">We Treat</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
            <c.icon className="w-10 h-10 text-gold mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-display font-semibold mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{c.desc}</p>
            <WhatsAppButton variant="ghost" className="p-0">Learn More →</WhatsAppButton>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConditionsSection;
