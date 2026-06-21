import { motion } from 'framer-motion'
import { GraduationCap, Code2, Cloud } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { asset } from '../utils/asset'

const focusIcons = [Code2, GraduationCap, Cloud]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 blur-2xl" />
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={asset('images/me2.png')}
              alt={t.about.role}
              className="h-full w-full rounded-[1.6rem] object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.about.heading}
            <span className="text-gradient">{t.about.headingAccent}</span>
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[var(--color-accent)]">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            {t.about.role}
          </p>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {t.about.highlights.map((h, i) => {
              const Icon = focusIcons[i % focusIcons.length]
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 text-[var(--color-accent)]" size={22} />
                  <div className="font-display text-2xl font-bold text-[var(--color-ink)]">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-muted)]">{h.label}</div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
