import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Moon, Sun } from "lucide-react";
const logoPath = "/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Packages", href: "#packages" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoPath} alt="Enkutatash Logo" className="h-10 w-auto" />
          <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-primary'}`}>
            Enkutatash
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-4 flex flex-col md:hidden animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 pt-4">
            <a
              href="#booking"
              className="block w-full text-center bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book an Event
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
