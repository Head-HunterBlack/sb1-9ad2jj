import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with dynamic features",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Interactive dashboard for data visualization",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={project.link} className="block">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}