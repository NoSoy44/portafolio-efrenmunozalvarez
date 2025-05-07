// src/components/Layout.jsx
import Navbar from './Navbar'
import Footer from './Footer' 
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
