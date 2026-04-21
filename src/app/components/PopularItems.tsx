import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const popularItems = [
  {
    name: "Paneer Tikka Pizza",
    price: 180,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    badge: "Bestseller",
  },
  {
    name: "Veg Momos Platter",
    price: 130,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80",
    badge: "Customer Favorite",
  },
  {
    name: "China Town Combo",
    price: 180,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    badge: "Value Deal",
  },
  {
    name: "Exotic Mojitos",
    price: 69,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
    badge: "Refreshing",
  },
];

export function PopularItems() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Popular Items</h2>
          <p className="text-muted-foreground text-lg">Our most loved dishes</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-primary/20 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm shadow-lg">
                  {item.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl text-white mb-2">{item.name}</h3>
                  <p className="text-2xl text-primary">₹{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
