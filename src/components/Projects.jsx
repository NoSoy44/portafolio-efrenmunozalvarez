import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Chile Mining",
    description: "Sitio informativo creado con HTML, CSS y JavaScript.",
    image: "/images/chile-mining.png",
    url: "https://nosoy44.github.io/chile-mining/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Final Project",
    description: "Proyecto de presentación usando Bootstrap, WordPress y JS.",
    image: "/images/final-project.png",
    url: "https://efrmunoz.laboratoriodiseno.cl/final-proyect/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress"],
  },
  {
    title: "Digital Docu Ordenia",
    description: "Plataforma con enfoque en IA utilizando OpenAI.",
    image: "/images/digital-docu.png",
    url: "https://www.digitaldocu.site/ordenia/auth/login.html",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "OpenAI"],
  },
];

export default function ProjectsSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--text-main)",
        backgroundImage: "url('/patterns/grid-light.svg')",
        backgroundSize: "400px 400px", // tamaño de cuadrícula
        backgroundRepeat: "repeat",
        backgroundPosition: `center ${offsetY * 0.2}px`, // aquí animamos
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Mis Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="block rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 border backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-5"
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-main)",
                }}
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
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
