import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src={doctorImg} alt="Dr. Rajeev Jha" loading="lazy" width={800} height={1000} className="rounded-2xl w-full max-w-md mx-auto shadow-lg" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">About The Clinic</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">Expert-Driven Care,<br /><span className="text-primary">Result-Focused Recovery</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            BU PainCare Clinic is led by <strong className="text-foreground">Dr. Rajeev Jha</strong>, a trusted authority in pain management and musculoskeletal rehabilitation. With years of clinical experience, Dr. Jha combines advanced diagnostic techniques with holistic treatment protocols.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            We don't believe in temporary fixes. Every patient receives a personalized treatment plan rooted in root-cause analysis, advanced physiotherapy, and evidence-based alternative wellness techniques.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
