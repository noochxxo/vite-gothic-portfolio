import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto gothic-frame">
        <motion.div
          ref={ref}
          className={`scroll-reveal ${isInView ? "visible" : ""}`}
        >
          <h2 className="font-Cinzel text-3xl mb-6 text-gothic-gold">
            About the Darkness
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            In the depths of digital shadows, I craft haunting web experiences
            that blur the line between reality and the supernatural. With over a
            decade of experience in front-end sorcery and back-end necromancy, I
            bring forth websites that don&apos;t just exist—they live and
            breathe.
          </p>
          <div className="flex gap-6 justify-center mt-12">
            <motion.a
              href="https://github.com/noochxxo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gothic-silver hover:text-gothic-gold transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/erictrotchie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gothic-silver hover:text-gothic-gold transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ejtrotchie@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gothic-silver hover:text-gothic-gold transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
