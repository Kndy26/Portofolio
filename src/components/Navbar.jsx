import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const navKeys = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.contact', href: '#contact' },
]

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
]

function LangDropdown({ lang, setLang, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-semibold tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
        aria-label="Change language"
      >
        {lang.toUpperCase()}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 w-24 bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border rounded-lg shadow-lg overflow-hidden z-50"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                  lang === l.code
                    ? 'bg-primary/5 text-primary dark:bg-primary/10'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar({ darkMode, setDarkMode }) {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section
  useEffect(() => {
    const ids = navKeys.map((l) => l.href.replace('#', ''))
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-padding">
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="font-headline font-bold text-lg tracking-tight text-neutral-900 dark:text-white"
          >
            Kennedy Wang
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
              >
                {t(link.key)}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              {t('nav.hireMe')}
            </a>

            {/* Language Dropdown */}
            <LangDropdown lang={lang} setLang={setLang} className="ml-2" />

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-1 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={18} className="text-neutral-400" />
              ) : (
                <Moon size={18} className="text-neutral-500" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1">
            <LangDropdown lang={lang} setLang={setLang} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={18} className="text-neutral-400" />
              ) : (
                <Moon size={18} className="text-neutral-500" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Menu size={20} className="text-neutral-700 dark:text-neutral-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-t border-neutral-200 dark:border-dark-border overflow-hidden"
          >
            <div className="section-padding py-4 flex flex-col gap-1">
              {navKeys.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-primary bg-primary/5'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="mt-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded-lg text-center"
              >
                {t('nav.hireMe')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
