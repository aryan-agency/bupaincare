import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Corporate Manager", text: "After years of chronic back pain, Dr. Jha's treatment gave me permanent relief. I can finally sit through meetings without discomfort.", rating: 5 },
  { name: "Rakesh Gupta", role: "Business Owner", text: "My knee osteoarthritis was severe. They helped me avoid surgery completely. The recovery has been incredible.", rating: 5 },
  { name: "Anita Verma", role: "Software Engineer", text: "The cervical spondylitis treatment here is world-class. Personalized, professional, and the results speak for themselves.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Patients <span className="text-primary">Say</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/20 transition-all shadow-sm">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-base text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary text-lg">
                {t.name[0]}
              </div>
              <div>
                <div className="font-bold text-base font-body text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground font-medium">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
