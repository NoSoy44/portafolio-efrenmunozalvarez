import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{
        backgroundColor: 'var(--bg-light)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
        >
          EfrenMunozAlvarez
        </Link>

        {/* Botón Hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Abrir menú">
            {open ? <X className="w-6 h-6 text-[var(--color-primary)]" /> : <Menu className="w-6 h-6 text-[var(--color-primary)]" />}
          </button>
        </div>

        {/* Menú */}
        <ul
          className={`md:flex md:space-x-6 items-center transition-all duration-300 ${
            open ? 'block mt-4 md:mt-0' : 'hidden md:flex'
          }`}
        >
          <NavItem to="/" label="Inicio" setOpen={setOpen} />
          <NavItem to="/portafolio" label="Portafolio" setOpen={setOpen} />
          <NavItem to="/sobre-mi" label="Sobre mí" setOpen={setOpen} />
          <NavItem to="/contacto" label="Contacto" setOpen={setOpen} />
        </ul>
      </div>
    </nav>
  )
}

function NavItem({ to, label, setOpen }) {
  return (
    <li className="mt-2 md:mt-0">
      <NavLink
        to={to}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block md:inline px-2 py-1 font-medium border-b-2 transition-all ${
            isActive
              ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
              : 'text-[var(--text-dark)] border-transparent hover:text-[var(--color-primary)]'
          }`
        }
        style={{
          fontFamily: 'var(--font-body)',
        }}
      >
        {label}
      </NavLink>
    </li>
  )
}

export default Navbar
