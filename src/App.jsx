import { useState, useEffect } from 'react'

import { LanguageProvider } from './i18n/LanguageContext'

import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <LanguageProvider>
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
