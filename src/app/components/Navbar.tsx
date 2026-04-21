import { motion } from "motion/react";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onBookClick: () => void;
}

export function Navbar({ cartCount, onCartClick, onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl">🥄</span>
            </div>
            <div>
              <h1 className="text-2xl text-primary">Golden Spoon</h1>
              <p className="text-xs text-muted-foreground italic">We serve delicious forever</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("combos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Combos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:+919217014763"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              +91 92170 14763
            </a>
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Book Table
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("combos")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Combos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:+919217014763"
              className="flex items-center gap-2 w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              +91 92170 14763
            </a>
            <button
              onClick={onBookClick}
              className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
            >
              Book Table
            </button>
            <button
              onClick={onCartClick}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors relative"
            >
              Cart {cartCount > 0 && `(${cartCount})`}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
