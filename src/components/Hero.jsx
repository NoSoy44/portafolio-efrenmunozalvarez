import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
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
        backgroundImage: `url(${import.meta.env.BASE_URL}patterns/grid-light.svg)`,
        backgroundSize: "400px 400px", // tamaño de cuadrícula
        backgroundRepeat: "repeat",
        backgroundPosition: `center ${offsetY * 0.2}px`, // aquí animamos
      }}
    >
      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Hola, soy <span style={{ color: "var(--color-primary)" }}>Efrén</span> 👋
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl mb-6"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Desarrollador web apasionado por crear experiencias digitales atractivas
          y funcionales usando tecnología moderna.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/portafolio"
            className="font-medium py-2 px-6 rounded-full transition"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
          >
            Ver Portafolio
          </a>

          <a
            href="/contacto"
            className="py-2 px-6 rounded-full transition border"
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
        </div>
      </motion.div>
    </section>
  );
}
