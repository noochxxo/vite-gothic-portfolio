import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

const Card = ({ project }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className="gothic-frame group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden aspect-video mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gothic-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Book className="w-8 h-8 text-gothic-gold" />
        </div>
      </div>
      <h3 className="font-Cinzel text-xl mb-2 text-gothic-gold">
        {project.title}
      </h3>
      <p className="text-gothic-silver/80">{project.description}</p>
    </motion.div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired
};

export default Card;
