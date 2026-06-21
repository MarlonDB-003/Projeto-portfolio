import { Github, Linkedin, Instagram } from 'lucide-react'
import { site } from '../../data/site'

const links = [
  { href: site.socials.github, label: 'GitHub', Icon: Github },
  { href: site.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: site.socials.instagram, label: 'Instagram', Icon: Instagram },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:glow"
        >
          <Icon size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  )
}
