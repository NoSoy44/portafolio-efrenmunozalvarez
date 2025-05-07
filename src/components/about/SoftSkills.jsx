// src/components/about/SoftSkills.jsx
import { motion } from "framer-motion";


  const skills = [
    { icon: "🧠", title: "Pensamiento crítico", description: "Analizo antes de actuar y siempre busco la mejor solución posible." },
    { icon: "🤝", title: "Colaborativo", description: "Disfruto trabajar en equipo y contribuir a proyectos colectivos." },
    { icon: "📘", title: "Aprendizaje continuo", description: "Siempre estoy explorando nuevas herramientas y tecnologías." },
    { icon: "⚡", title: "Proactivo", description: "No espero que me digan qué hacer: me adelanto a los desafíos." },
    { icon: "🛠️", title: "Resolutivo", description: "Me gusta resolver problemas complejos y encontrar soluciones funcionales." },
    { icon: "🎯", title: "Enfoque en objetivos", description: "Trabajo alineado a metas claras, priorizando lo importante en cada proyecto." },
  ];

export default function SoftSkills() {
  return (
    <section className="py-20 px-6 text-center"
      style={{
        background: "linear-gradient(to bottom, #ffffff, var(--bg-light))",
        color: "var(--text-dark)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
        >
          ¿Cómo trabajo?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {skill.title}
              </h4>
              <p className="text-sm opacity-80" style={{ fontFamily: "var(--font-body)" }}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}