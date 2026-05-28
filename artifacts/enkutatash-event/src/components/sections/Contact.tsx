import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            We are available to answer your questions and help you start planning your unforgettable event.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+251900000000" className="text-lg font-medium hover:text-primary transition-colors">+251 90 000 0000</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
            <a href="mailto:hello@enkutatashevent.com" className="text-lg font-medium hover:text-primary transition-colors">hello@enkutatashevent.com</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">By appointment only</p>
            <span className="text-lg font-medium">Bole Medhanialem, Addis Ababa, Ethiopia</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
