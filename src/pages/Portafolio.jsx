import { useState } from "react";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import PortfolioFilters from "../components/portfolio/PortfolioFilters";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import StackSummary from "../components/portfolio/StackSummary";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";

const allProjects = [
  {
    title: "Chile Mining",
    description: "Sitio informativo creado con HTML, CSS y JavaScript.",
    image: `${import.meta.env.BASE_URL}images/chile-mining.png`,
    url: "https://nosoy44.github.io/chile-mining/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Final Project",
    description: "Proyecto institucional usando WordPress y Bootstrap.",
    image: `${import.meta.env.BASE_URL}images/final-project.png`,
    url: "https://efrmunoz.laboratoriodiseno.cl/final-proyect/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress"],
  },
  {
    title: "Digital Docu Ordenia",
    description: "Plataforma con IA desarrollada en OpenAI.",
    image: `${import.meta.env.BASE_URL}images/digital-docu.png`,
    url: "https://www.digitaldocu.site/ordenia/",
    tech: ["HTML", "CSS", "JavaScript", "OpenAI"],
  },
  {
    title: "Chile Mining",
    description: "Sitio informativo creado con HTML, CSS y JavaScript.",
    image: `${import.meta.env.BASE_URL}images/chile-mining.png`,
    url: "https://nosoy44.github.io/chile-mining/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Final Project",
    description: "Proyecto institucional usando WordPress y Bootstrap.",
    image: `${import.meta.env.BASE_URL}images/final-project.png`,
    url: "https://efrmunoz.laboratoriodiseno.cl/final-proyect/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress"],
  },
  {
    title: "Digital Docu Ordenia",
    description: "Plataforma con IA desarrollada en OpenAI.",
    image: `${import.meta.env.BASE_URL}images/digital-docu.png`,
    url: "https://www.digitaldocu.site/ordenia/",
    tech: ["HTML", "CSS", "JavaScript", "OpenAI"],
  },
];

const allTags = [
  "Todos",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "WordPress",
  "OpenAI",
];
export default function Portafolio() {
  const [activeTag, setActiveTag] = useState("Todos");

  const filteredProjects =
    activeTag === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(activeTag));

  return (
    <>
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(to bottom, var(--bg-light), #ffffff)",
          color: "var(--text-dark)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
        <PortfolioIntro />
          <PortfolioHeader />
          <PortfolioFilters
            tags={allTags}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />
          <PortfolioGrid projects={filteredProjects} />
        </div>
      </section>

      <StackSummary />
    </>
  );
}