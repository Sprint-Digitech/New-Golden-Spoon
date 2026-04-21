import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onMenuClick: () => void;
  onOrderClick: () => void;
  onBookClick: () => void;
}

export function Hero({ onMenuClick, onOrderClick, onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

      <ImageWithFallback
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
        alt="Delicious food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Golden Spoon Restaurant
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 italic mb-8">
            We serve delicious forever
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuClick}
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all shadow-lg shadow-primary/20"
            >
              View Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOrderClick}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/30"
            >
              Book Table
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
