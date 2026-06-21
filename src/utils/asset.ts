/**
 * Resolve o caminho de um asset da pasta public respeitando o `base` do Vite.
 *
 * No GitHub Pages o site fica em /Projeto-portfolio/, então um caminho
 * absoluto como "/images/me1.png" apontaria para a raiz do domínio (404).
 * Usando import.meta.env.BASE_URL o caminho funciona tanto em dev ("/")
 * quanto em produção ("/Projeto-portfolio/").
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
