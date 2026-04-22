import { motion } from "motion/react";
import { Crown, ChefHat, Users, Trophy, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
   return (
      <section id="about" className="relative py-24 bg-background overflow-visible font-['Playfair_Display']">

         {/* Subtle decorative background shape */}
         <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl pointer-events-none" />

         <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-8">

            {/* Left Column: Image with Badge */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="w-full lg:w-[35%] relative mt-10 lg:mt-0"
            >
               <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-2xl z-10 border border-primary/10">
                  <ImageWithFallback
                     src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                     alt="Chef preparing signature dish at Golden Spoon"
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               </div>

               {/* Overlapping Badge */}
               <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-background border border-primary/20 rounded-full w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center shadow-2xl p-2 sm:p-4 text-center z-20"
               >
                  <span className="text-2xl sm:text-4xl font-bold text-foreground font-['Playfair_Display']">10+</span>
                  <span className="text-[9px] sm:text-[11px] text-foreground/70 font-sans uppercase tracking-[0.2em] mt-1">Years of<br />Experience</span>
               </motion.div>
            </motion.div>

            {/* Center Column: Text Content */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full lg:w-[30%] flex flex-col justify-center px-4 lg:px-8 mt-12 lg:mt-0"
            >
               <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-sans uppercase tracking-[0.3em] font-semibold text-foreground/70">OUR STORY</span>
                  <span className="h-[1px] flex-1 bg-primary/40 relative">
                     <span className="absolute w-[4px] h-[4px] rotate-45 bg-primary -left-1 pointer-events-none mt-[-1.5px]" />
                     <span className="absolute w-[4px] h-[4px] rotate-45 bg-primary -right-1 pointer-events-none mt-[-1.5px]" />
                  </span>
               </div>

               <h2 className="text-4xl lg:text-[2.75rem] font-bold text-primary mb-6 leading-[1.2] font-['Playfair_Display']">
                  Passion. Taste.<br />Experience.
               </h2>

               <p className="text-foreground/80 font-sans leading-[1.8] mb-10 text-sm lg:text-base font-medium">
                  At Golden Spoon, we believe dining is not just about food, it's about memories. Our chefs pour their heart into every dish, bringing together flavors that delight your senses and transport you to a world of absolute culinary luxury. We select only the finest & freshest ingredients to craft masterpieces on every plate.
               </p>

               <button className="flex items-center justify-center sm:justify-start gap-4 text-foreground font-sans font-semibold uppercase tracking-widest text-xs hover:text-primary transition-colors w-max group border border-primary/40 rounded px-6 py-3 hover:bg-primary/5">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-primary" />
               </button>
            </motion.div>

            {/* Right Column: 4 Stats Cards */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="w-full lg:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-0"
            >
               {/* Card 1 */}
               <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-primary/50 transition-all font-sans group">
                  <Crown className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-foreground mb-2 font-['Playfair_Display']">10+</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-widest font-semibold">Years of<br />Experience</div>
               </div>

               {/* Card 2 */}
               <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-primary/50 transition-all font-sans group">
                  <ChefHat className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-foreground mb-2 font-['Playfair_Display']">50+</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-widest font-semibold">Signature<br />Dishes</div>
               </div>

               {/* Card 3 */}
               <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-primary/50 transition-all font-sans group">
                  <Users className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-foreground mb-2 font-['Playfair_Display']">5000+</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-widest font-semibold">Happy<br />Customers</div>
               </div>

               {/* Card 4 */}
               <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-primary/50 transition-all font-sans group">
                  <Trophy className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-foreground mb-2 font-['Playfair_Display']">20+</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-widest font-semibold">Awards<br />Won</div>
               </div>
            </motion.div>

         </div>
      </section>
   );
}
