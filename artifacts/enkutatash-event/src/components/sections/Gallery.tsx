import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Weddings", "New Year", "Corporate", "Birthdays"];

const images = [
  { id: 1, src: "/images/gallery-wedding-1.png", category: "Weddings", alt: "Ethiopian wedding setup", aspect: "aspect-[16/9]" },
  { id: 2, src: "/images/gallery-traditional-1.png", category: "New Year", alt: "Coffee ceremony", aspect: "aspect-[3/4]" },
  { id: 3, src: "/images/gallery-newyear-1.png", category: "New Year", alt: "Golden celebration hall", aspect: "aspect-[4/3]" },
  { id: 4, src: "/images/gallery-corporate-1.png", category: "Corporate", alt: "Corporate gala", aspect: "aspect-[16/9]" },
  { id: 5, src: "/images/gallery-detail-1.png", category: "Weddings", alt: "Floral detail", aspect: "aspect-square" },
  { id: 6, src: "/images/gallery-wedding-2.png", category: "Weddings", alt: "Wedding couple stage", aspect: "aspect-[3/4]" },
  { id: 7, src: "/images/gallery-birthday-1.png", category: "Birthdays", alt: "Birthday celebration", aspect: "aspect-[4/3]" },
  { id: 8, src: "/images/gallery-corporate-2.png", category: "Corporate", alt: "Corporate stage", aspect: "aspect-[16/9]" },
  { id: 9, src: "/images/gallery-birthday-2.png", category: "Birthdays", alt: "Birthday table", aspect: "aspect-[4/3]" },
  { id: 10, src: "/images/gallery-traditional-1.png", category: "New Year", alt: "Traditional ceremony", aspect: "aspect-square" },
  { id: 11, src: "/images/gallery-wedding-1.png", category: "Weddings", alt: "Wedding ceremony details", aspect: "aspect-[16/9]" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = images.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground"
          >
            A Glimpse of Luxury
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Browse through our portfolio of meticulously crafted events.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={image.id}
                className="relative overflow-hidden rounded-xl group break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-medium text-sm tracking-wider uppercase mb-1">{image.category}</span>
                  <h4 className="text-white font-serif text-lg">{image.alt}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
