import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          lead={t.experience.heading}
          accent={t.experience.headingAccent}
          subtitle={t.experience.subtitle}
        />

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {t.experience.items.map((item, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    left ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}
                >
                  {/* Marcador */}
                  <span
                    className={`absolute top-1 left-[0.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] glow sm:left-auto ${
                      left ? 'sm:-right-[0.65rem]' : 'sm:-left-[0.65rem]'
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-bg)]" />
                  </span>

                  <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/50">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                      <Briefcase size={12} />
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-medium text-[var(--color-accent-soft)]">{item.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.description}
                    </p>
                    {item.skills && item.skills.length > 0 && (
                      <ul
                        className={`mt-4 flex flex-wrap gap-2 ${left ? 'sm:justify-end' : ''}`}
                      >
                        {item.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-md bg-[var(--color-surface-2)] px-2 py-1 text-xs text-[var(--color-muted)]"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
