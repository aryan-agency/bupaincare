import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PHONE_DISPLAY } from "@/lib/constants";

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
            { icon: Phone, label: "Phone", value: PHONE_DISPLAY },
            { icon: Mail, label: "Email", value: "info@bupaincare.com" },
            { icon: MapPin, label: "Address", value: "H-29 1ST FLOOR, BLK-H BALI NAGAR LANDMARK OPPOSITE HDFC BANK NEW DELHi-110015" },
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1805643339444!2d77.1289212!3d28.6543117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d039874511747%3A0xf6ab4ff92d7cc0d1!2sBu%20Paincare%20-%20pain%20relief%20%26%20physiotherapy%20clinic%20Balinagar!5e0!3m2!1sen!2sin!4v1793351876686!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="BU Pain Care - Naturopathy & Physiotherapy Clinic Bali Nagar location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
