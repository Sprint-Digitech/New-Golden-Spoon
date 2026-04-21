import { motion } from "motion/react";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-primary/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🥄</span>
              </div>
              <div>
                <h3 className="text-xl text-primary">Golden Spoon</h3>
                <p className="text-xs text-muted-foreground italic">We serve delicious forever</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Experience the finest dining with our exquisite menu crafted with love and passion.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/golden_spoon_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/golden_spoon_restaurrant?igsh=MTlqbzczODk5ZnEyOQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white opacity-90 hover:opacity-100 transition-all hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.swiggy.com/city/noida-1/golden-spoon-restaurrant-sector-18-rest1345705"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 overflow-hidden shadow-lg hover:shadow-xl shadow-[#fc8019]/20 group"
                title="Order on Swiggy"
              >
                <img 
                  src="/swiggy-logo.png" 
                  alt="Swiggy" 
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
              </a>
              <a
                href="https://www.zomato.com/mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 overflow-hidden shadow-lg hover:shadow-xl shadow-[#E23744]/20 group"
                title="Order on Zomato"
              >
                <img 
                  src="/zomato-logo.png" 
                  alt="Zomato" 
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity scale-[1.15]"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl text-primary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:9217014763"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>9217014763</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Sector-8, Noida</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>info@goldenspoon.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl text-primary mb-4">Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5" />
                <div>
                  <p>11:00 AM - 7:00 PM</p>
                  <p className="text-sm mt-1">Open All Days</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-primary">🎉 Free Delivery Above ₹199</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2026 Golden Spoon Restaurant. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
