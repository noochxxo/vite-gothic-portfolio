import { motion } from "framer-motion";
import { Skull } from "lucide-react";

const Hero = () => {
  return (
    <motion.header
      className="h-screen flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Skull className="w-16 h-16 mx-auto mb-6 text-gothic-gold" />
        </motion.div>
        <h1 className="font-Cinzel text-5xl md:text-7xl mb-4 text-gothic-silver animate-flicker">
          Edgar Ravencroft
        </h1>
        <p className="font-Crimson text-xl italic text-gothic-silver/80 animate-float">
          Dark Web Artisan & Digital Necromancer
        </p>
      </div>
    </motion.header>
  );
};

export default Hero;
