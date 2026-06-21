import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'
import { projects } from '../data/projects'
import { asset } from '../utils/asset'

export function Projects() {
  const { t, lang } = useLanguage()

  return (
    <section id="projects" className="relative scroll-mt-20 bg-[var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          lead={t.projects.heading}
          accent={t.projects.headingAccent}
          subtitle={t.projects.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5"
            >
              {/* Imagem */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={asset(project.image)}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-80" />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--color-bg)]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-accent)] backdrop-blur">
                    ★ Destaque
                  </span>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description[lang]}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-[var(--color-surface-2)] px-2 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-80"
                  >
                    <ExternalLink size={15} />
                    {t.projects.viewProject}
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      <Github size={15} />
                      {t.projects.code}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
