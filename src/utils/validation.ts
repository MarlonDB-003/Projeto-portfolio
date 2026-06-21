import type { Translation } from '../i18n/translations'

export interface ContactFields {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>

// Nome: letras (com acentos), espaços, hífen e apóstrofo; mínimo 2 caracteres.
const NAME_RE = /^[\p{L}][\p{L}\s'.-]{1,}$/u
// E-mail: formato realista (não aceita "a@a" nem domínio sem ponto).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Conta apenas os dígitos do telefone (ignora +, (), espaços e hífens). */
function phoneDigits(value: string) {
  return value.replace(/\D/g, '')
}

export function validateContact(
  fields: ContactFields,
  errs: Translation['contact']['errors'],
): ContactErrors {
  const errors: ContactErrors = {}

  const name = fields.name.trim()
  if (!name) errors.name = errs.nameRequired
  else if (!NAME_RE.test(name)) errors.name = errs.nameInvalid

  const email = fields.email.trim()
  if (!email) errors.email = errs.emailRequired
  else if (!EMAIL_RE.test(email)) errors.email = errs.emailInvalid

  // Telefone é opcional, mas se preenchido precisa ser plausível (10 a 15 dígitos).
  const phone = fields.phone.trim()
  if (phone) {
    const digits = phoneDigits(phone)
    if (digits.length < 10 || digits.length > 15) errors.phone = errs.phoneInvalid
  }

  if (!fields.subject.trim()) errors.subject = errs.subjectRequired

  const message = fields.message.trim()
  if (!message) errors.message = errs.messageRequired
  else if (message.length < 10) errors.message = errs.messageShort

  return errors
}
