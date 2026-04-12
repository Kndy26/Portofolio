import { createContext, useContext, useState, useCallback } from 'react'
import en from './en.json'
import id from './id.json'

const translations = { en, id }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en'
    }
    return 'en'
  })

  const changeLang = useCallback((newLang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }, [])

  /**
   * Resolve a dot-notation key like "hero.title" from the current language.
   * Falls back to English if key is missing in the active language.
   */
  const t = useCallback(
    (key) => {
      const resolve = (obj, path) =>
        path.split('.').reduce((acc, part) => acc?.[part], obj)

      return resolve(translations[lang], key) ?? resolve(translations.en, key) ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
