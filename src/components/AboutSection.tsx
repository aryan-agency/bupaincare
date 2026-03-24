import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="relative">
            <img src={doctorImg} alt="Dr. Rajeev Jha" loading="lazy" width={800} height={1000} className="rounded-2xl w-full max-w-md mx-auto shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">About The Clinic</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Expert-Driven Care,<br /><span className="text-gold-gradient">Result-Focused Recovery</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            BU PainCare Clinic is led by <strong className="text-foreground">Dr. Rajeev Jha</strong>, a trusted authority in pain management and musculoskeletal rehabilitation. With years of clinical experience, Dr. Jha combines advanced diagnostic techniques with holistic treatment protocols to deliver lasting recovery.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We don't believe in temporary fixes. Every patient receives a personalized treatment plan rooted in root-cause analysis, advanced physiotherapy, and evidence-based alternative wellness techniques.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[{ num: "15+", label: "Years Experience" }, { num: "10K+", label: "Patients Treated" }, { num: "95%", label: "Recovery Rate" }].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-display font-bold text-gold">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
