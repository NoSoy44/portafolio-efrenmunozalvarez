import { motion } from "framer-motion";

const timeline = [
  {
    year: "2016 - 2019",
    title: "Analista Programador Computacional",
    institution: "Duoc UC, Chile - Viña del Mar",
    status: "Titulado",
  },
  {
    year: "2022",
    title: "Diplomado: Diseño y Programación Web",
    institution: "Fundación Telefónica Movistar · Conecta Empleo, Perú",
    status: "Titulado",
  },
  {
    year: "2023",
    title: "Diplomado: Comunicación en la Era Digital",
    institution: "Fundación Telefónica Movistar · Conecta Empleo, Perú",
    status: "Titulado",
  },
  {
    year: "Mar 2023 - Actualidad",
    title: "Desarrollo y Diseño Web",
    institution: "Duoc UC, Chile - Viña del Mar",
    status: "Estudiante",
  },
];

export default function AboutJourney() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-light)", color: "var(--text-dark)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
        >
          Formación Académica
        </h2>

        <div className="relative border-l border-[var(--color-primary)] pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-[var(--color-primary)] rounded-full border-2 border-white shadow"></div>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {item.year} — {item.title}
              </h3>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {item.institution}
              </p>
              <p className="text-xs opacity-70 mt-1 italic" style={{ fontFamily: "var(--font-body)" }}>
                {item.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}