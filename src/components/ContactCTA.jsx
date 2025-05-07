import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-primary), #0388a6)",
        color: "var(--text-main)",
      }}
    >
      {/* Ícono decorativo de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-end items-end p-10">
        <img
          src="/icons/message-decor.svg" // aquí un SVG decorativo simple (como sobre o globo de chat)
          alt=""
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-main)",
          }}
        >
          ¿Hablamos?
        </h2>

        <p
          className="text-lg mb-8 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-main)",
            opacity: 0.85,
          }}
        >
          Si tienes una idea, proyecto o simplemente quieres conversar sobre desarrollo web,
          ¡estaré encantado de conectar contigo!
        </p>

        <motion.a
          href="/contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block font-semibold px-8 py-3 rounded-full transition shadow-md hover:shadow-lg"
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--color-primary)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--text-main)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--bg-light)";
            e.currentTarget.style.color = "var(--color-primary)";
          }}
        >
          Contáctame
        </motion.a>
      </motion.div>
    </section>
  );
}
