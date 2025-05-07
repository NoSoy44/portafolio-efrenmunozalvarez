export default function Footer() {
    return (
      <footer
        className="text-sm"
        style={{
          background: "linear-gradient(to bottom, #0388a6, var(--color-dark))",
          color: "var(--text-main)",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Parte superior */}
        <div className="py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            {/* Menú de navegación */}
            <ul className="flex gap-6 mb-6 md:mb-0 text-sm font-medium">
              <li>
                <a href="/sobre-mi" className="hover:text-[var(--color-primary)] transition">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="/portafolio" className="hover:text-[var(--color-primary)] transition">
                  Portafolio
                </a>
              </li>
            </ul>
  
            {/* Redes sociales */}
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Línea separadora corta */}
        <div className="flex justify-center">
          <div className="w-2/3 border-t border-white border-opacity-10"></div>
        </div>
  
        {/* Copyright */}
        <div className="py-6 text-center text-xs opacity-80">
          © {new Date().getFullYear()} Efrén Muñoz — Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  