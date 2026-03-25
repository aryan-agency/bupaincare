import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visit <span className="text-primary">Our Clinic</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
          {[
            { icon: Phone, label: "Phone", value: "+91 98112 43334 / +91 95996 75996" },
            { icon: Mail, label: "Email", value: "info@bupaincare.com" },
            { icon: MapPin, label: "Address", value: "E-353, Ramesh Nagar, New Delhi – 110015" },
            { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 7 PM" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-base font-body text-foreground mb-1">{item.label}</div>
                <div className="text-base text-muted-foreground">{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-border h-80 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.14!3d28.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzI0LjAiTiA3N8KwMDgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="BU PainCare location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
