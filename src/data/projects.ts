import type { Language } from '../i18n/translations'

export interface Project {
  id: string
  title: string
  description: Record<Language, string>
  image: string
  liveUrl: string
  repoUrl?: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'gestante-digital',
    title: 'Gestante Digital',
    description: {
      pt: 'Plataforma destinada a gestantes para acompanhar informações sobre consultas e exames de forma simples e organizada.',
      en: 'Platform for pregnant women to track information about appointments and exams in a simple, organized way.',
    },
    image: '/images/img-01.png',
    liveUrl: 'https://projeto-gd-on.netlify.app',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    id: 'meteora',
    title: 'Meteora',
    description: {
      pt: 'Loja virtual para venda de roupas, calçados e acessórios, com vitrine de produtos e navegação fluida.',
      en: 'Online store for clothes, shoes and accessories, with a product showcase and smooth navigation.',
    },
    image: '/images/img-02.png',
    liveUrl: 'https://projeto-meteora-on.netlify.app',
    tags: ['HTML', 'CSS', 'E-commerce'],
    featured: true,
  },
  {
    id: 'prime-flix',
    title: 'PrimeFlix',
    description: {
      pt: 'Aplicação que consome uma API de filmes para exibir sinopses e detalhes dos títulos em cartaz.',
      en: 'App that consumes a movies API to display synopses and details of titles in theaters.',
    },
    image: '/images/img-03.png',
    liveUrl: 'https://prime-flix-filmes.netlify.app',
    tags: ['React', 'API REST', 'JavaScript'],
    featured: true,
  },
  {
    id: 'mochila-viagem',
    title: 'Mochila de Viagem',
    description: {
      pt: 'App para anotar e gerenciar os itens que você vai levar na próxima viagem, com controle de itens marcados.',
      en: 'App to list and manage the items to pack for your next trip, with a checklist of packed items.',
    },
    image: '/images/img-04.png',
    liveUrl: 'https://mochila-viagem-on.netlify.app',
    tags: ['React', 'State', 'JavaScript'],
  },
  {
    id: 'serenatto',
    title: 'Serenatto Café',
    description: {
      pt: 'Landing page de uma cafeteria, apresentando os produtos disponíveis e a identidade visual da marca.',
      en: 'Landing page for a coffee shop, presenting the available products and the brand identity.',
    },
    image: '/images/img-05.png',
    liveUrl: 'https://serenatto-teste-730dd8.netlify.app',
    tags: ['HTML', 'CSS', 'Landing Page'],
  },
  {
    id: 'alura-mid',
    title: 'AluraMID',
    description: {
      pt: 'Aplicação interativa onde cada botão emite um som diferente, explorando manipulação de áudio no navegador.',
      en: 'Interactive app where each button plays a different sound, exploring browser audio manipulation.',
    },
    image: '/images/img-06.png',
    liveUrl: 'https://projeto-musica-al-on-v54534.netlify.app',
    tags: ['JavaScript', 'Web Audio', 'DOM'],
  },
]
