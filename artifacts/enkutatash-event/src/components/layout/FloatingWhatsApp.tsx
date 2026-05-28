import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+251900000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20ba56] hover:scale-110 transition-all group flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      {/* Optional: Add text that expands on hover if desired, but just the icon is usually better for mobile */}
    </motion.a>
  );
}
