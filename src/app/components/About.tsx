import { motion } from "motion/react";

const marqueeImages = [
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1498837167922-41c5432128ce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Hero Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=1920")',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Text Content with Fade-in and Slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About Us
            </h2>
            {/* Floating Leaf Emoji */}
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl ml-3 inline-block"
            >
              🌿
            </motion.span>
          </div>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Welcome to our restaurant — a place where every meal is made with love and fresh ingredients. We are a 100% pure vegetarian restaurant dedicated to serving delicious, healthy, and wholesome food. Our menu is crafted with the finest fresh vegetables, aromatic spices, and traditional recipes. Pure food. Pure love.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden flex -mx-4 sm:-mx-6 lg:-mx-8">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 px-4"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the images to create seamless loop effect */}
            {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((img, index) => (
              <div 
                key={index} 
                className="w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden shrink-0 shadow-xl shadow-black/50 border border-primary/20"
              >
                <img
                  src={img}
                  alt={`Vegetarian Food ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
