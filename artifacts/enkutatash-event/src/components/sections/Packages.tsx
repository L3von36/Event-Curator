import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "Custom",
    description: "Perfect for intimate gatherings and private celebrations.",
    features: [
      "Consultation & Planning",
      "Venue Selection Support",
      "Standard Cultural Decor",
      "Day-of Coordination",
      "Basic Catering Setup",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "The complete luxury experience for weddings and major events.",
    features: [
      "Full Service Event Design",
      "Premium Venue Sourcing",
      "Custom Golden Era Decor",
      "Traditional Coffee Ceremony",
      "Luxury Catering & Bar",
      "Professional Photography Team",
      "Entertainment Booking",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "Custom",
    description: "Unparalleled opulence for grand galas and high-profile events.",
    features: [
      "Bespoke Event Architecture",
      "Exclusive Venue Access",
      "Unlimited Styling Consultations",
      "Grand Cultural Installations",
      "Michelin-level Catering",
      "Celebrity Entertainment Access",
      "VIP Guest Management",
      "Multi-day Event Coordination",
    ],
    highlighted: false,
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground"
          >
            Signature Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            Tailored experiences crafted with precision, designed to meet the demands of discerning clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative bg-background rounded-2xl p-8 border ${
                pkg.highlighted 
                  ? "border-primary shadow-[0_0_40px_rgba(245,197,24,0.15)] md:scale-105 z-10" 
                  : "border-border shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-border">
                <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground ml-2">Pricing</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block w-full py-3 px-4 rounded-md text-center font-medium transition-colors ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
