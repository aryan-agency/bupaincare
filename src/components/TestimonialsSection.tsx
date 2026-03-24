import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Corporate Manager", text: "After years of chronic back pain, Dr. Jha's treatment gave me permanent relief. I can finally sit through meetings without discomfort.", rating: 5 },
  { name: "Rakesh Gupta", role: "Business Owner", text: "My knee osteoarthritis was severe. They helped me avoid surgery completely. The recovery has been incredible.", rating: 5 },
  { name: "Anita Verma", role: "Software Engineer", text: "The cervical spondylitis treatment here is world-class. Personalized, professional, and the results speak for themselves.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card/50">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold">What Our Patients <span className="text-gold-gradient">Say</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-gold/20 transition-all">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold text-sm">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm font-body">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
