import { motion } from "framer-motion";

export default function PortfolioGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="block p-5 border rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
          style={{
            backgroundColor: "var(--bg-light)",
            borderColor: "var(--text-secondary)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3
            className="text-xl font-semibold mb-1"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(56, 174, 204, 0.15)",
                  color: "var(--color-primary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  );
}