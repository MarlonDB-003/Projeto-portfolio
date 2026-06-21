import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Language, type Translation } from './translations'

interface LanguageContextValue {
  lang: Language
  t: Translation
  setLang: (lang: Language) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-lang'

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const setLang = useCallback((next: Language) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'pt' ? 'en' : 'pt')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
