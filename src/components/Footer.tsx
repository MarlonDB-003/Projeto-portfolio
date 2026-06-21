import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { site } from '../data/site'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
            © {year} {site.name}.{' '}
            <span className="font-normal text-[var(--color-muted)]">{t.footer.rights}</span>
          </p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">{t.footer.builtWith}</p>
        </div>

        <a
          href="#home"
          aria-label={t.footer.backToTop}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  )
}
