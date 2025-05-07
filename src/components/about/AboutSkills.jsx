import { motion } from "framer-motion";
import CountUp from 'react-countup';

const skills = [
  { icon: "⚛️", label: "React", years: 1 },
  { icon: "🧠", label: "IA / OpenAI", years: 1 },
  { icon: "🌐", label: "WordPress", years: 2 },
  { icon: "💻", label: "Desarrollo Web", years: 5 },
];

export default function AboutSkills() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        background: "linear-gradient(to right, var(--color-dark), var(--color-accent))",
        color: "var(--text-main)",
      }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-12"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        ¿En qué tengo experiencia?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <CountUp
              isCounting
              end={skill.years}
              duration={2}
              easing="easeOut"
              className="text-3xl font-bold"
            />
            <span className="text-sm mt-1 opacity-80" style={{ fontFamily: "var(--font-body)" }}>
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}