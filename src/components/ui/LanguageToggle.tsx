import { useLanguage } from '../../i18n/LanguageContext'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5 text-xs font-semibold"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-1/2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-transform duration-300"
        style={{ transform: lang === 'pt' ? 'translateX(0%)' : 'translateX(100%)' }}
      />
      {(['pt', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`relative z-10 w-9 rounded-full py-1 uppercase transition-colors ${
            lang === l ? 'text-[#06121d]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
