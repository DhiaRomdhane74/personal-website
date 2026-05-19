import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeId, setActiveId]     = useState('')

  // Scroll detection for blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={handleLinkClick}>
          Dhia Romdhane
        </a>

        {/* Desktop + mobile nav */}
        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            return (
              <a
                key={href}
                href={href}
                className={`navbar__link${activeId === id ? ' navbar__link--active' : ''}`}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
        </button>

      </div>
    </header>
  )
}
