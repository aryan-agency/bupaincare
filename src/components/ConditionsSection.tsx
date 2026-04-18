import { motion } from "framer-motion";
import { Bone, Activity, Heart, Dumbbell, Spline } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const conditions = [
  { icon: Bone, title: "Knee Osteoarthritis", desc: "Non-surgical relief from chronic knee pain with targeted therapy and regenerative techniques." },
  { icon: Spline, title: "Cervical Spondylitis", desc: "Advanced treatment for neck pain, stiffness, and nerve compression without surgery." },
  { icon: Activity, title: "Lumbar Spondylitis", desc: "Root-cause diagnosis and therapy for lower back pain and spinal degeneration." },
  { icon: Heart, title: "Varicose Veins", desc: "Advanced non-surgical treatment for varicose veins with faster recovery and long-lasting results." },
  { icon: Dumbbell, title: "Muscle Weakness", desc: "Personalized rehabilitation programs to rebuild strength and restore mobility." },
];

const ConditionsSection = () => (
  <section id="conditions" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">Specializations</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Conditions <span className="text-primary">We Treat</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group bg-background border-2 border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <c.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3 text-foreground">{c.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">{c.desc}</p>
            <WhatsAppButton variant="ghost" className="p-0">Learn More →</WhatsAppButton>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConditionsSection;
