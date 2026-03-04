import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const navLinks = [
  { label: 'Invest', href: '#products', hasDropdown: true },
  { label: 'Resources', href: '#about', hasDropdown: true },
  { label: 'Company', href: '#footer', hasDropdown: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Switch to light header once the user scrolls past the hero section
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Over hero → transparent + white text. Past hero → white bg + dark text.
  const isLight = scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight
            ? 'bg-white border-b border-gray-100 shadow-sm shadow-black/8'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-1 select-none" onClick={(e) => handleNavClick(e, '#hero')}>
              <span
                className={`text-2xl leading-none transition-colors ${isLight ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
              >
                M
              </span>
              <span
                className={`text-xl font-medium tracking-tight leading-none transition-colors ${isLight ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                oonfare
              </span>
            </a>

            {/* Desktop nav */}
            <nav className={`hidden lg:flex items-center gap-1 transition-colors duration-300 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-1 text-[14px] font-medium px-3 py-2 rounded-md transition-all duration-150 ${
                    isLight
                      ? 'hover:text-black hover:bg-gray-50'
                      : 'hover:bg-white/8'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <FiChevronDown size={13} className="opacity-50 mt-px" />}
                </a>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className={`text-[14px] font-medium px-4 py-2 rounded-md transition-all duration-150 ${
                  isLight
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/8'
                }`}
              >
                Log in
              </button>
              <button
                onClick={(e) => handleNavClick(e, '#hero')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Start investing
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 -mr-2 transition-colors ${isLight ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`fixed inset-0 z-40 pt-[72px] px-6 lg:hidden ${isLight ? 'bg-white' : 'bg-[#0a0a0a]'}`}
          >
            <nav className="flex flex-col pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xl font-medium py-4 border-b flex items-center justify-between transition-colors ${
                    isLight ? 'text-gray-900 border-gray-100' : 'text-white border-white/10'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <FiChevronDown size={16} className="opacity-40" />}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-8">
                <button className={`text-base font-medium text-left py-2 ${isLight ? 'text-gray-600' : 'text-white/80'}`}>
                  Log in
                </button>
                <button className="bg-blue-600 text-white text-base font-semibold px-6 py-3.5 rounded-lg text-center">
                  Start investing
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
