import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `base` precisa apontar para o subdiretório do GitHub Pages no build
// (https://<user>.github.io/Projeto-portfolio/). No dev continua em "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Projeto-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
