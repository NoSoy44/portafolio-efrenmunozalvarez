import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, var(--bg-light), #ffffff)",
        color: "var(--text-dark)",
      }}
    >
      {/* Texto decorativo gigante detrás */}
      <h2
        className="absolute top-0 left-0 right-0 flex justify-center text-[4rem] md:text-[8rem] font-bold opacity-10 select-none z-0 leading-none"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          marginTop: "5rem",
        }}
      >
        SOBRE MÍ
      </h2>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}images/efrenMunoz.jpg`}
            alt="Foto de perfil"
            className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm object-cover"
            style={{ height: "600px", objectPosition: "top" }}
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
        <p
  className="text-base md:text-lg mb-6 leading-relaxed"
  style={{
    fontFamily: "var(--font-body)",
    color: "var(--text-dark)",
  }}
>
  Soy Efren Muñoz, analista programador de 28 años, apasionado por el desarrollo web completo.
  Desde joven me fascinó entender cómo funcionan las páginas web, lo que me llevó a especializarme
  tanto en backend como en diseño UX/UI.  
  <br />
  <br />
  Trabajo con tecnologías como HTML, JavaScript, React y Tailwind, y me entusiasma integrar soluciones con IA.
  Me defino como responsable, curioso y siempre listo para nuevos desafíos.
</p>

          <a
            href="/sobre-mi"
            className="inline-block font-semibold border px-8 py-3 rounded-full transition"
            style={{
              fontFamily: "var(--font-body)",
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
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
            Leer más sobre mí
          </a>
        </div>
      </div>
    </motion.section>
  );
}
