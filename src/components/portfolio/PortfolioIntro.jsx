export default function PortfolioIntro() {
    return (
      <section className="mb-12 max-w-4xl mx-auto text-center px-6">
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
          className="text-lg md:text-xl mb-4"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
          }}
        >
          Aquí encontrarás una muestra de los proyectos que he desarrollado con tecnologías como
          React, WordPress, HTML/CSS, inteligencia artificial y más.
        </p>
  
        <p
          className="text-base md:text-lg"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
          }}
        >
          Cada uno de ellos representa un desafío técnico, una solución real o una propuesta creativa.
          Me gusta diseñar interfaces atractivas, optimizar la experiencia del usuario y resolver problemas
          con código limpio, funcional y adaptable.
        </p>
      </section>
    );
  }