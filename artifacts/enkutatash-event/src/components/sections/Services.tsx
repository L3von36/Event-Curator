import { motion } from "framer-motion";
import { Calendar, GlassWater, Music, UtensilsCrossed, Crown, Sparkles } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Luxury Weddings",
    description: "Breathtaking highland-inspired wedding setups, complete with traditional decor, premium catering, and seamless coordination."
  },
  {
    icon: Calendar,
    title: "Enkutatash Events",
    description: "Authentic Ethiopian New Year celebrations featuring traditional coffee ceremonies, adey abeba styling, and grand feasts."
  },
  {
    icon: GlassWater,
    title: "Corporate Galas",
    description: "Sophisticated corporate events with a touch of modern African luxury, perfect for product launches and networking."
  },
  {
    icon: Sparkles,
    title: "Birthday Celebrations",
    description: "Opulent private parties and milestone celebrations tailored to your unique style with rich cultural elements."
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
    description: "High-end presentation of authentic Ethiopian cuisine and international dishes by master chefs."
  },
  {
    icon: Music,
    title: "Concerts & Entertainment",
    description: "Curated cultural entertainment, traditional bands, and concert planning for unforgettable experiences."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6 text-card-foreground"
          >
            Curated Experiences
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            We transform ordinary spaces into breathtaking cultural masterpieces, blending ancient traditions with modern luxury.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-background border border-border p-8 rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Learn more <span className="ml-2">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
