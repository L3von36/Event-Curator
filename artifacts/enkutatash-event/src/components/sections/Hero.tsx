import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logoPath = "/logo.png";
const heroBgPath = "/images/hero-bg.png";

// Floating petal component
const Petal = ({ index }: { index: number }) => {
  const startX = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = 10 + Math.random() * 10;
  const size = 15 + Math.random() * 20;

  return (
    <motion.div
      initial={{ y: -50, x: `${startX}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        x: `${startX + (Math.random() * 20 - 10)}vw`,
        opacity: [0, 0.8, 0.8, 0],
        rotate: 360,
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute z-10 pointer-events-none"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="hsl(47 90% 52%)" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 30 50 0 Z" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default function Hero() {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Generate 20 petals
    setPetals(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
        style={{ backgroundImage: `url(${heroBgPath})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />

      {/* Floating Petals */}
      {petals.map((i) => (
        <Petal key={i} index={i} />
      ))}

      {/* Content */}
      <div className="container relative z-20 px-4 mx-auto flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={logoPath} alt="Enkutatashi" className="h-24 md:h-32 w-auto mx-auto drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-5xl leading-tight mb-6"
        >
          Enkutatashi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mb-10 font-light"
        >
          Creating Unforgettable Experiences for Children. We specialize in organizing fun, educational, and memorable events for kids of all ages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,197,24,0.3)] border border-primary/50"
          >
            Contact Us
          </a>
          <a
            href="/events"
            className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 text-lg font-semibold rounded-md hover:bg-white/20 transition-all hover:scale-105"
          >
            View Events
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm tracking-widest uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
