import { useEffect, useState } from 'react';
import { CountUp } from 'use-count-up';

const stacks = [
  { icon: '⚛️', label: 'React', count: 1 },
  { icon: '🤖', label: 'OpenAI', count: 1 },
  { icon: '🌐', label: 'WordPress', count: 2 },
  { icon: '🧠', label: 'IA', count: 1 },
];

export default function StackSummary() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-16 px-6 text-center"
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--text-main)",
        backgroundImage: "url('/patterns/grid-light.svg')",
        backgroundSize: "400px 400px",
        backgroundRepeat: "repeat",
        backgroundPosition: `center ${offsetY * 0.2}px`,
      }}
    >
      <h3
        className="text-2xl md:text-3xl font-bold mb-10"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Tecnologías utilizadas en mis proyectos
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stacks.map((stack, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{stack.icon}</div>
            <CountUp
              isCounting
              end={stack.count}
              duration={2.5}
              easing="easeOutCubic"
              className="text-3xl font-extrabold"
            />
            <span
              className="mt-1 text-sm"
              style={{ fontFamily: 'var(--font-body)', opacity: 0.85 }}
            >
              {stack.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}