# Portfólio — Marlon Silva

Portfólio profissional de Marlon Silva, Engenheiro de Software & Full Stack Developer.
Reconstruído em **React + TypeScript** com design moderno (dark tech), animações e suporte a dois idiomas (PT/EN).

## 🛠️ Stack

- **React 18** + **TypeScript**
- **Vite** (build/dev)
- **Tailwind CSS v4** (design system com tema dark)
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## 🚀 Como rodar

> Requer **Node.js 18+**. Se você acabou de instalar o Node, **abra um terminal novo** para que o `npm` seja reconhecido.

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em /dist
npm run preview  # pré-visualiza o build de produção
```

## 📁 Estrutura

```
src/
├── components/        # Seções da página (Hero, About, Skills, ...)
│   └── ui/            # Componentes reutilizáveis (botões sociais, toggle de idioma)
├── data/              # Dados: projetos e configurações do site (links, e-mail)
├── hooks/             # Hooks (efeito de digitação, scroll spy)
├── i18n/              # Internacionalização (PT/EN)
├── utils/             # Validação do formulário
├── App.tsx
├── main.tsx
└── index.css          # Design system (Tailwind v4)
public/
├── images/            # Fotos e screenshots dos projetos
└── cv/                # Currículo em PDF
legacy/                # Versão antiga do portfólio (HTML/CSS/JS)
```

## ✍️ Como atualizar o conteúdo

- **Projetos:** edite `src/data/projects.ts`
- **Links sociais / e-mail:** edite `src/data/site.ts`
- **Textos (PT/EN):** edite `src/i18n/translations.ts`
- **Currículo:** substitua `public/cv/Marlon-Silva-CV.pdf`

## 📬 Formulário de contato

Usa o [FormSubmit](https://formsubmit.co) (mesmo serviço do portfólio original), com:

- Validação client-side (nome, e-mail, telefone, assunto e mensagem)
- Honeypot anti-bot

Para reforçar contra spam, ative o **reCAPTCHA** no painel do FormSubmit (veja a documentação deles).
