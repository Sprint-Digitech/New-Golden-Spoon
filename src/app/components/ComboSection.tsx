import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { comboData } from "../data/menuData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ComboSectionProps {
  onAddToCart: (combo: any) => void;
}

export function ComboSection({ onAddToCart }: ComboSectionProps) {
  return (
    <section id="combos" className="py-20 px-4 bg-gradient-to-b from-black/95 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Combo Attractions</h2>
          <p className="text-muted-foreground text-lg">Special combo deals for you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comboData.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                  ₹{combo.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-foreground mb-2">{combo.name}</h3>
                <p className="text-muted-foreground mb-4">{combo.description}</p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    onAddToCart({
                      item: { name: combo.name, price: combo.price },
                      variant: "",
                      price: combo.price,
                      quantity: 1,
                    })
                  }
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
