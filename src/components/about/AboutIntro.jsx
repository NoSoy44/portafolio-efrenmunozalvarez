import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, var(--bg-light), #ffffff)",
        color: "var(--text-dark)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/efrenMunoz.jpg`}
            alt="Efrén Muñoz"
            className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-sm object-cover"
            style={{ height: "520px", objectPosition: "top" }}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            ¡Hola! Soy Efren Muñoz
          </h1>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
            }}
          >
            Soy un desarrollador web chileno con formación en programación y una
            fuerte motivación por el diseño UX/UI. Desde los 15 años me atrapó
            entender cómo funcionaban las páginas web, lo que me impulsó a
            estudiar Analista Programador Computacional y luego a especializarme
            en el diseño y desarrollo web.
            <br />
            <br />
            Combino mis habilidades técnicas con creatividad, trabajando con
            tecnologías como HTML, CSS, JavaScript, React, Tailwind y bases de
            datos. Además, me interesa profundamente el potencial de la
            inteligencia artificial aplicada a la experiencia digital.
            <br />
            <br />
            Me considero una persona responsable, adaptable y apasionada por
            aprender. Disfruto colaborar en equipo, enfrentar desafíos
            tecnológicos y entregar soluciones que generen impacto real.
            <br />
            <br />
            En mi tiempo libre disfruto ver cine, jugar videojuegos, aprender
            nuevas tecnologías y pasar tiempo con mis gatitos. Siempre estoy en
            búsqueda de crecer, tanto personal como profesionalmente.
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 rounded-full font-semibold transition border"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-primary)";
            }}
          >
            Contáctame
          </a>
        </motion.div>
      </div>
    </section>
  );
}
