import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "../data/menuData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuCardProps {
  item: MenuItem;
  hasHalfFull?: boolean;
  hasSizeOptions?: boolean;
  onAddToCart: (item: MenuItem, variant: string, price: number) => void;
}

export function MenuCard({ item, hasHalfFull, hasSizeOptions, onAddToCart }: MenuCardProps) {
  const [selectedSize, setSelectedSize] = useState(
    hasSizeOptions && item.sizes ? item.sizes[0].size : ""
  );
  const [selectedVariant, setSelectedVariant] = useState<"half" | "full">("full");

  const getCurrentPrice = () => {
    if (hasSizeOptions && item.sizes) {
      const size = item.sizes.find((s) => s.size === selectedSize);
      return size ? size.price : item.price;
    }
    if (hasHalfFull) {
      return selectedVariant === "half" && item.halfPrice ? item.halfPrice : item.price;
    }
    return item.price;
  };

  const handleAddToCart = () => {
    let variant = "";
    if (hasSizeOptions) {
      variant = selectedSize;
    } else if (hasHalfFull) {
      variant = selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1);
    }
    onAddToCart(item, variant, getCurrentPrice());
  };

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="lux-tilt group bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-primary/20 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg text-black dark:text-foreground">{item.name}</h3>

        {hasSizeOptions && item.sizes && (
          <div className="flex gap-2 flex-wrap">
            {item.sizes.map((size) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size.size)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedSize === size.size
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 text-black dark:text-foreground border-border hover:border-primary"
                  }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        )}

        {hasHalfFull && item.halfPrice && (
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedVariant("half")}
              className={`flex-1 px-3 py-1.5 rounded-lg border transition-all ${selectedVariant === "half"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/50 text-black dark:text-foreground border-border hover:border-primary"
                }`}
            >
              Half
            </button>
            <button
              onClick={() => setSelectedVariant("full")}
              className={`flex-1 px-3 py-1.5 rounded-lg border transition-all ${selectedVariant === "full"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/50 text-black dark:text-foreground border-border hover:border-primary"
                }`}
            >
              Full
            </button>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl text-primary">₹{getCurrentPrice()}</span>
          <motion.button
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="lux-glow px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
          >
            <Plus className="w-4 h-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
