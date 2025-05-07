// src/pages/Home.jsx
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import AboutPreview from '../components/AboutPreview'

export default function Home() {
  return (
    <div>
      <Hero />

      <AboutPreview />

      <Skills />
      <Projects />
      <ContactCTA />
    </div>
  );
}
