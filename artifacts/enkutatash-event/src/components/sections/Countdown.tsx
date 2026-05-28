import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Next Ethiopian New Year (Enkutatash) - September 11, 2026
    const targetDate = new Date("2026-09-11T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/80" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-widest uppercase mb-4 block">Anticipation</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-12">
            The Next <span className="text-primary">Enkutatash</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(245,197,24,0.1)]">
                <span className="text-4xl md:text-5xl font-bold text-primary tabular-nums">
                  {unit.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-white/60 font-medium uppercase tracking-wider text-sm">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
