import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 text-sm relative overflow-hidden text-white"
      style={{
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Círculo decorativo borroso */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-10">
          {/* Nombre o logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            EfrenMunozAlvarez
          </motion.div>

          {/* Enlaces */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-6 text-sm font-medium"
          >
                        <li>
              <a href="/portafolio" className="hover:text-white/90 transition">
                Portafolio
              </a>
            </li>
            <li>
              <a href="/sobre-mi" className="hover:text-white/90 transition">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-white/90 transition">
                Contacto
              </a>
            </li>
          </motion.ul>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/NoSoy44"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-lg"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/efren-munozalvarez/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-lg"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </motion.div>
        </div>

        {/* Línea separadora */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-xs opacity-80">
          © {year} Efrén Muñoz — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
