import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'
import { SocialLinks } from './ui/SocialLinks'
import { site } from '../data/site'
import {
  validateContact,
  type ContactErrors,
  type ContactFields,
} from '../utils/validation'

type Status = 'idle' | 'sending' | 'success' | 'error'

const EMPTY: ContactFields = { name: '', email: '', phone: '', subject: '', message: '' }

export function Contact() {
  const { t, lang } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [fields, setFields] = useState<ContactFields>(EMPTY)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFields, boolean>>>({})

  const messages = {
    success:
      lang === 'pt'
        ? 'Mensagem enviada com sucesso! Em breve retorno.'
        : 'Message sent successfully! I’ll get back to you soon.',
    error:
      lang === 'pt'
        ? 'Algo deu errado. Tente novamente ou use o e-mail.'
        : 'Something went wrong. Try again or use the email.',
  }

  function update(field: keyof ContactFields, value: string) {
    const next = { ...fields, [field]: value }
    setFields(next)
    // Revalida em tempo real apenas campos já "tocados", para não punir antes da hora.
    if (touched[field]) {
      setErrors(validateContact(next, t.contact.errors))
    }
  }

  function handleBlur(field: keyof ContactFields) {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validateContact(fields, t.contact.errors))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validation = validateContact(fields, t.contact.errors)
    setErrors(validation)
    setTouched({ name: true, email: true, phone: true, subject: true, message: true })
    if (Object.keys(validation).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('sending')
    try {
      const body = new FormData()
      body.append('name', fields.name.trim())
      body.append('email', fields.email.trim())
      body.append('phone', fields.phone.trim())
      body.append('subject', fields.subject.trim())
      body.append('message', fields.message.trim())
      body.append('_subject', 'Novo contato pelo portfólio!')
      body.append('_captcha', 'false')

      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setFields(EMPTY)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const baseInput =
    'w-full rounded-xl border bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2'

  function inputClass(field: keyof ContactFields) {
    return errors[field]
      ? `${baseInput} border-red-500/70 focus:border-red-500 focus:ring-red-500/20`
      : `${baseInput} border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20`
  }

  function FieldError({ field }: { field: keyof ContactFields }) {
    if (!errors[field]) return null
    return (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400">
        <AlertCircle size={13} />
        {errors[field]}
      </p>
    )
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          lead={t.contact.heading}
          accent={t.contact.headingAccent}
          subtitle={t.contact.subtitle}
        />

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[var(--radius-card)] p-6 sm:p-8"
        >
          {/* Honeypot anti-bot (deve ficar vazio) */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                className={inputClass('name')}
                type="text"
                name="name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                placeholder={t.contact.namePlaceholder}
                value={fields.name}
                onChange={(e) => update('name', e.target.value)}
                onBlur={() => handleBlur('name')}
              />
              <FieldError field="name" />
            </div>
            <div>
              <input
                className={inputClass('email')}
                type="email"
                name="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                placeholder={t.contact.emailPlaceholder}
                value={fields.email}
                onChange={(e) => update('email', e.target.value)}
                onBlur={() => handleBlur('email')}
              />
              <FieldError field="email" />
            </div>
            <div>
              <input
                className={inputClass('phone')}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={!!errors.phone}
                placeholder={t.contact.phonePlaceholder}
                value={fields.phone}
                onChange={(e) => update('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
              />
              <FieldError field="phone" />
            </div>
            <div>
              <input
                className={inputClass('subject')}
                type="text"
                name="subject"
                aria-invalid={!!errors.subject}
                placeholder={t.contact.subjectPlaceholder}
                value={fields.subject}
                onChange={(e) => update('subject', e.target.value)}
                onBlur={() => handleBlur('subject')}
              />
              <FieldError field="subject" />
            </div>
          </div>

          <div className="mt-4">
            <textarea
              className={`${inputClass('message')} resize-none`}
              name="message"
              rows={5}
              aria-invalid={!!errors.message}
              placeholder={t.contact.messagePlaceholder}
              value={fields.message}
              onChange={(e) => update('message', e.target.value)}
              onBlur={() => handleBlur('message')}
            />
            <FieldError field="message" />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3.5 text-sm font-semibold text-[#06121d] transition-all duration-300 hover:glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {lang === 'pt' ? 'Enviando...' : 'Sending...'}
              </>
            ) : (
              <>
                <Send size={16} />
                {t.contact.send}
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <CheckCircle2 size={16} /> {messages.success}
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-400">
              <AlertCircle size={16} /> {messages.error}
            </p>
          )}
        </motion.form>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[var(--color-muted)]">{t.contact.or}</p>
          <SocialLinks />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail size={15} />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
