import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "The momos are absolutely delicious! Best I've had in Noida. The ambiance is perfect for family dining.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    comment: "Loved the combo deals! Great value for money and the food quality is top-notch. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    comment: "Amazing pasta and pizzas! The Italian section is my favorite. Perfect for date nights.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-primary mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground text-lg">Loved by our customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div className="flex-1">
                  <h4 className="text-foreground">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
