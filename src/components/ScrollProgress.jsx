import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrollWidth(progress)
      setShow(scrollTop > 100) // se muestra solo si scrollean 100px o más
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9999] pointer-events-none transition-opacity duration-300"
      style={{
        width: `${scrollWidth}%`,
        backgroundColor: 'var(--color-primary)',
        opacity: show ? 1 : 0,
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.25)',
        transition: 'width 0.2s ease-out',
        height: 7,
      }}
    />
  )
}
