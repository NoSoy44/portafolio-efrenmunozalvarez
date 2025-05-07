// src/pages/Home.jsx
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import ContactCTA from "../components/home/ContactCTA";
import AboutPreview from '../components/home/AboutPreview'

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
