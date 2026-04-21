import { motion } from "motion/react";
import { useState } from "react";
import { menuData, MenuItem } from "../data/menuData";
import { MenuCard } from "./MenuCard";

interface CartItem {
  item: MenuItem;
  variant: string;
  price: number;
  quantity: number;
}

interface MenuSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].id);

  const currentCategory = menuData.find((cat) => cat.id === selectedCategory);

  const handleAddToCart = (item: MenuItem, variant: string, price: number) => {
    onAddToCart({ item, variant, price, quantity: 1 });
  };

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Our Menu</h2>
          <p className="text-muted-foreground text-lg">Explore our delicious offerings</p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {menuData.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg border transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card/50 backdrop-blur-sm text-foreground border-border hover:border-primary"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentCategory?.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MenuCard
                item={item}
                hasHalfFull={currentCategory.hasHalfFull}
                hasSizeOptions={currentCategory.hasSizeOptions}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
