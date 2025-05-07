import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: `${import.meta.env.BASE_URL}icons/HTML5.svg`, experience: 5 },
    { name: "CSS3", icon: `${import.meta.env.BASE_URL}icons/CSS3.svg`, experience: 3 },
    { name: "JavaScript", icon: `${import.meta.env.BASE_URL}icons/JavaScript.svg`, experience: 3 },
    { name: "PHP", icon: `${import.meta.env.BASE_URL}icons/PHP.svg`, experience: 5 },
    { name: "MySQL", icon: `${import.meta.env.BASE_URL}icons/MySQL.svg`, experience: 5 },
    { name: "Figma", icon: `${import.meta.env.BASE_URL}icons/Figma.svg`, experience: 2 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
<section
  ref={ref}
  className="py-20 px-6"
  style={{
    background: "linear-gradient(to bottom, #ffffff, var(--bg-light))",
    color: "var(--text-dark)",
  }}
  
>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Tecnologías que domino
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index * 0.2} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
      let current = 0;
      const duration = 2500; // 2.5 segundos de animación
      const steps = skill.experience;
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        current++;
        setCount(current);
        if (current >= skill.experience) clearInterval(interval);
      }, intervalTime);
    }
  }, [isInView, skill.experience, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ delay, type: "spring", stiffness: 80 }}
      className="flex flex-col items-center transition-transform group hover:scale-105"
    >
      <div className="bg-white p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all relative w-24 h-24 flex justify-center items-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-14 h-14 object-contain"
        />
      </div>
      <span
        className="text-sm font-semibold mt-4"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--text-dark)",
        }}
      >
        {skill.name}
      </span>

      {/* Mini badge contador */}
      <span
        className="mt-2 inline-block text-[10px] font-semibold px-3 py-1 rounded-full"
        style={{
          backgroundColor: "rgba(56, 174, 204, 0.15)",
          color: "var(--color-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        {count} años de experiencia
      </span>
    </motion.div>
  );
}
