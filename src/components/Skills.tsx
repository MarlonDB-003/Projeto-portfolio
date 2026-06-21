import { motion } from 'framer-motion'
import { Layout, Server, Wrench } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'

const categoryIcons = [Layout, Server, Wrench]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative scroll-mt-20 bg-[var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading lead={t.skills.heading} accent={t.skills.headingAccent} subtitle={t.skills.subtitle} />

        <div className="grid gap-6 md:grid-cols-3">
          {t.skills.categories.map((cat, i) => {
            const Icon = categoryIcons[i % categoryIcons.length]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/50"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--color-accent)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[var(--color-accent)]/15 to-[var(--color-accent-2)]/15 text-[var(--color-accent)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{cat.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
