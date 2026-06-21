import { motion } from 'framer-motion'

interface Props {
  lead: string
  accent: string
  subtitle?: string
}

export function SectionHeading({ lead, accent, subtitle }: Props) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {lead}
        <span className="text-gradient">{accent}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-[var(--color-muted)]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
