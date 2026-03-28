import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppButton from "./WhatsAppButton";

const faqs = [
  {
    q: "Do I need surgery for my condition?",
    a: "Most cases can be treated without surgery. We focus on non-invasive, root-cause treatment methods.",
  },
  {
    q: "How do I know what's causing my pain?",
    a: "We begin with a detailed diagnosis to identify the exact root cause before starting any treatment.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery time depends on your condition, but many patients start noticing improvement within a few sessions.",
  },
  {
    q: "Is the treatment painful?",
    a: "No, our treatments are designed to be safe, gentle, and comfortable.",
  },
  {
    q: "Do I need to take rest during treatment?",
    a: "Not necessarily. Most treatments allow you to continue your daily routine with minor adjustments.",
  },
  {
    q: "Can this help avoid surgery?",
    a: "Yes. Early and targeted treatment can help avoid unnecessary surgeries in many cases.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can book instantly by messaging us on WhatsApp using the button below.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-body text-sm font-bold tracking-widest uppercase mb-4 block">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4 font-medium">
          Everything you need to know before starting your treatment
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-2 border-border rounded-xl mb-4 px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-lg md:text-xl font-bold font-body text-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground pb-5 leading-relaxed font-medium">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <p className="text-lg md:text-xl text-foreground font-bold mb-6">
          Still have questions? Get clarity before your condition gets worse.
        </p>
        <WhatsAppButton variant="primary">Chat on WhatsApp</WhatsAppButton>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
