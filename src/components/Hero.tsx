import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTypewriter } from '../hooks/useTypewriter'
import { site } from '../data/site'
import { SocialLinks } from './ui/SocialLinks'

export function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="animate-aurora absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-20 blur-[120px]" />
        <div
          className="animate-aurora absolute top-20 -right-24 h-96 w-96 rounded-full bg-[var(--color-accent-2)] opacity-20 blur-[120px]"
          style={{ animationDelay: '-6s' }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.available}
          </span>

          <p className="mt-6 text-lg text-[var(--color-muted)]">{t.hero.greeting}</p>
          <h1 className="mt-1 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gradient">{t.hero.name}</span>
          </h1>

          <div className="mt-4 flex items-center gap-1 font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-[var(--color-accent)] sm:h-8" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-[#06121d] transition-all duration-300 hover:glow"
            >
              {t.hero.viewProjects}
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Download size={16} />
              {t.hero.downloadCv}
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-20 blur-3xl" />
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-accent)]/30 to-[var(--color-accent-2)]/30 opacity-40 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-2">
              <img
                src="/images/me1.png"
                alt={t.hero.name}
                className="h-full w-full rounded-[2rem] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] md:flex"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-border)] p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[var(--color-accent)]" />
        </span>
      </a>
    </section>
  )
}
