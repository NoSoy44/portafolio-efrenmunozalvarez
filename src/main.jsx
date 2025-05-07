// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Páginas
import Layout from './components/Layout'
import Home from './pages/Home'
import SobreMi from './pages/SobreMi'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre-mi', element: <SobreMi /> },
      { path: '/portafolio', element: <Portafolio /> },
      { path: '/contacto', element: <Contacto /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
