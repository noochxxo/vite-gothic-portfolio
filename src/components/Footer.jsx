import { Feather } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto gothic-frame text-center">
        <Feather className="w-12 h-12 mx-auto mb-6 text-gothic-gold" />
        <h2 className="font-Cinzel text-3xl mb-6 text-gothic-gold">
          Summon Me
        </h2>
        <p className="mb-8 text-lg">
          For inquiries about dark web endeavors or supernatural collaborations
        </p>
        <a
          href="mailto:ejtrotchie@gmail.com"
          className="inline-block px-8 py-3 border-2 border-gothic-gold text-gothic-gold hover:bg-gothic-gold hover:text-gothic-black transition-all duration-300 font-Cinzel"
        >
          Send a Raven
        </a>
      </div>
    </footer>
  );
};

export default Footer;
