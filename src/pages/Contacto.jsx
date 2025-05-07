import ContactoForm from "../components/ContactoForm";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section
      className="py-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, var(--bg-light), #ffffff)',
        color: 'var(--text-dark)',
      }}
    >

      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-bold mb-6"
  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
>
  ¿Hablamos?
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-lg md:text-xl mb-12 max-w-2xl text-[var(--text-secondary)]"
  style={{ fontFamily: 'var(--font-body)' }}
>
  ¿Tienes una idea, un proyecto o simplemente quieres saludar?
  Estoy disponible para colaborar, crear o resolver cualquier desafío digital.  
  <br className="hidden md:block" />
  Puedes escribirme por aquí o conectarte conmigo a través de redes sociales. 
  ¡Será un gusto saber de ti!
</motion.p>

      <ContactoForm />

      <div className="absolute bottom-10 right-10 text-[2rem] text-[var(--text-secondary)] font-medium italic opacity-20">
  ¡Hagamos que tu idea cobre vida!
</div>
    </section>
  );
}