import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Selamawit & Dawit",
    event: "Luxury Wedding",
    text: "Enkutatash Events transformed our wedding into a cinematic masterpiece. The attention to cultural details and the flawless execution left our guests speechless.",
  },
  {
    name: "Aman Corporate Group",
    event: "Annual Gala",
    text: "Professional, sophisticated, and deeply rooted in our heritage. They managed a 500-person corporate gala with effortless elegance.",
  },
  {
    name: "Hanna T.",
    event: "Milestone Birthday",
    text: "I wanted a modern luxury feel with traditional touches for my 40th birthday. The golden ambiance and decor exceeded every expectation.",
  },
  {
    name: "The Ethiopian Heritage Society",
    event: "Enkutatash Celebration",
    text: "The authentic coffee ceremony and grand feast setup was breathtaking. They are the premier choice for cultural events.",
  },
  {
    name: "Elias & Meron",
    event: "Traditional Melse",
    text: "Our Melse was a dream. The styling, the colors, the lighting—everything was curated perfectly to honor our traditions in pure luxury.",
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground"
          >
            Client Experiences
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto relative" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_60%] min-w-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg text-center h-full flex flex-col items-center justify-center relative"
                >
                  <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
                  
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed mb-8 italic relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">{testimonial.event}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
