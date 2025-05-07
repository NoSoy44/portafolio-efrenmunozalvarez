// src/components/PortfolioHeader.jsx
export default function PortfolioHeader() {
    return (
      <div className="text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Portafolio
        </h1>
        <p
          className="text-lg md:text-xl mb-10 text-[var(--text-secondary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Selecciona una tecnología para filtrar mis proyectos destacados.
        </p>
      </div>
    );
  }