import { SiInstagram, SiFacebook, SiTiktok, SiPinterest } from "react-icons/si";
const logoPath = "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoPath} alt="Enkutatash Logo" className="h-12 w-auto grayscale brightness-200" />
              <span className="font-serif text-2xl font-bold text-white">
                Enkutatashi
              </span>
            </div>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Your trusted partner for unforgettable kids events in Ethiopia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiTiktok size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiPinterest size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-primary transition-colors">Portfolio Gallery</a></li>
              <li><a href="#packages" className="text-white/60 hover:text-primary transition-colors">Packages & Pricing</a></li>
              <li><a href="#booking" className="text-white/60 hover:text-primary transition-colors">Book a Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contact Us</h4>
            <p className="text-white/60">📍 123 Main Street, Bole District, Addis Ababa</p>
            <p className="text-white/60">📞 +251 123 456 789</p>
            <p className="text-white/60">✉️ info@enkutatashi.com</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Enkutatashi. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
