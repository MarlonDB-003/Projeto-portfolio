import { useEffect, useState } from 'react'

interface Options {
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
}

/**
 * Efeito de máquina de escrever que cicla por uma lista de palavras.
 * Reinicia automaticamente quando a lista de palavras muda (ex.: troca de idioma).
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pauseTime = 1400 }: Options = {},
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Reinicia ao trocar a lista (idioma)
  useEffect(() => {
    setText('')
    setWordIndex(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    if (words.length === 0) return
    const current = words[wordIndex % words.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return text
}
