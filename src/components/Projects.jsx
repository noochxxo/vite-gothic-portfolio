import Card from "./Card";


const projects = [
  {
    title: "Dark Enchantments",
    description: "A haunting e-commerce experience",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    title: "Ghostly Whispers",
    description: "Social platform for sharing supernatural stories",
    image:
      "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    title: "Midnight Chronicles",
    description: "Blog platform with a gothic twist",
    image:
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-Cinzel text-3xl mb-12 text-center text-gothic-gold">
          Dark Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card project={{...project}} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
