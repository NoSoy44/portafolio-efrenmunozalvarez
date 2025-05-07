import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress' // ← Importa el componente
import './App.css'

function App() {
  return (
    <Router>
      {/* Barra de progreso del scroll */}
      <ScrollProgress />

      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
