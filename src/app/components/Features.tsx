import { motion } from "motion/react";
import { ChefHat, Flame, Leaf, Heart } from "lucide-react";

const features = [
  {
    title: "Exquisite Cuisine",
    description: "A culinary experience crafted by master chefs.",
    icon: <ChefHat className="w-5 h-5 text-primary" />,
  },
  {
    title: "Luxury Ambience",
    description: "Elegant interiors for a perfect dining experience.",
    icon: <Flame className="w-5 h-5 text-primary" />,
  },
  {
    title: "Premium Ingredients",
    description: "Only the finest & freshest ingredients on your plate.",
    icon: <Leaf className="w-5 h-5 text-primary" />,
  },
  {
    title: "Top Notch Service",
    description: "Because your experience matters to us.",
    icon: <Heart className="w-5 h-5 text-primary" />,
  },
];

export function Features() {
  return (
    <section className="relative -mt-12 sm:-mt-16 lg:-mt-24 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-['Playfair_Display']">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-card backdrop-blur-md shadow-2xl border border-primary/20 rounded-2xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-primary/20 py-2">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 md:p-8 flex items-start gap-4 hover:bg-primary/5 transition-colors group">
              <div className="shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm lg:text-base font-['Playfair_Display'] mb-1">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 font-sans text-xs lg:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
