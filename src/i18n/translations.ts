export type Language = 'pt' | 'en'

export interface Translation {
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    roles: string[]
    description: string
    viewProjects: string
    downloadCv: string
    available: string
  }
  about: {
    heading: string
    headingAccent: string
    role: string
    paragraphs: string[]
    highlights: { value: string; label: string }[]
  }
  skills: {
    heading: string
    headingAccent: string
    subtitle: string
    categories: { title: string; items: string[] }[]
  }
  experience: {
    heading: string
    headingAccent: string
    subtitle: string
    items: {
      period: string
      title: string
      org: string
      description: string
      skills?: string[]
    }[]
  }
  projects: {
    heading: string
    headingAccent: string
    subtitle: string
    viewProject: string
    code: string
  }
  contact: {
    heading: string
    headingAccent: string
    subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    subjectPlaceholder: string
    messagePlaceholder: string
    send: string
    or: string
    errors: {
      nameRequired: string
      nameInvalid: string
      emailRequired: string
      emailInvalid: string
      phoneInvalid: string
      subjectRequired: string
      messageRequired: string
      messageShort: string
    }
  }
  footer: {
    rights: string
    builtWith: string
    backToTop: string
  }
}

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Marlon Silva',
      roles: [
        'Full Stack Developer',
        'Engenheiro de Software',
        'Frontend Developer',
        'Backend Developer',
      ],
      description:
        'Engenheiro de Software na Bemol Digital. Transformo ideias em soluções web full stack eficientes, escaláveis e alinhadas aos objetivos do negócio, com C#, .NET, Node.js e React.',
      viewProjects: 'Ver projetos',
      downloadCv: 'Baixar CV',
      available: 'Disponível para novas oportunidades',
    },
    about: {
      heading: 'Sobre ',
      headingAccent: 'mim',
      role: 'Engenheiro de Software · Bemol Digital',
      paragraphs: [
        'Sou Marlon Silva, Engenheiro de Software na Bemol Digital, onde atuo no desenvolvimento full stack de sistemas corporativos — transformando ideias em soluções funcionais, escaláveis e de alta qualidade.',
        'Minha trajetória começou como estagiário e evoluí para Software Engineer Trainee. No dia a dia trabalho com C#, .NET, Node.js, TypeScript e React, atuando do frontend ao backend em todo o ciclo de vida do software.',
        'Tenho graduação e pós-graduação em Engenharia de Software, com interesse especial em desenvolvimento web, computação em nuvem (Azure) e boas práticas. Estou sempre em busca de novos desafios que me permitam evoluir e contribuir para produtos que façam a diferença.',
      ],
      highlights: [
        { value: '3+', label: 'Anos de experiência' },
        { value: '6+', label: 'Projetos construídos' },
        { value: '10+', label: 'Tecnologias' },
      ],
    },
    skills: {
      heading: 'Minhas ',
      headingAccent: 'tecnologias',
      subtitle:
        'Ferramentas e tecnologias que utilizo para construir aplicações completas, do frontend ao backend.',
      categories: [
        {
          title: 'Frontend',
          items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          items: ['C#', '.NET', 'Node.js', 'Java', 'Spring Boot', 'Python', 'APIs REST', 'SQL'],
        },
        {
          title: 'Ferramentas & Cloud',
          items: ['Git & GitHub', 'Azure', 'Azure DevOps', 'CI/CD', 'Figma', 'Metodologias Ágeis'],
        },
      ],
    },
    experience: {
      heading: 'Formação & ',
      headingAccent: 'Experiência',
      subtitle: 'Minha trajetória profissional e acadêmica na engenharia de software.',
      items: [
        {
          period: 'abr 2024 — Presente',
          title: 'Software Engineer Trainee',
          org: 'Bemol Digital · Amazonas, Brasil',
          description:
            'Desenvolvimento de aplicações web full stack com C#, .NET, Node.js e TypeScript. Construção e consumo de APIs REST, desenvolvimento de interfaces frontend e manutenção de sistemas corporativos, participando de todo o ciclo de vida do software — da análise ao deploy e sustentação.',
          skills: ['C#', '.NET', 'Node.js', 'TypeScript', 'React.js', 'Azure Functions', 'Azure DevOps', 'Git'],
        },
        {
          period: 'mar 2023 — mar 2024',
          title: 'Estagiário de Desenvolvimento',
          org: 'Bemol Digital · Itacoatiara, AM',
          description:
            'Participação no planejamento, análise, modelagem e desenvolvimento de softwares, envolvendo a aplicação de diferentes linguagens e ambientes de programação.',
          skills: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'Node.js', 'React.js', '.NET Framework', 'SQL', 'HTML5', 'Git & GitHub', 'Figma'],
        },
        {
          period: 'Pós-graduação',
          title: 'Especialização em Engenharia de Software',
          org: 'Pós-graduação',
          description:
            'Aprofundamento em arquitetura de software, boas práticas de desenvolvimento e gestão de projetos de tecnologia.',
        },
        {
          period: 'Graduação',
          title: 'Bacharelado em Engenharia de Software',
          org: 'Ensino Superior',
          description:
            'Formação sólida em fundamentos de programação, estruturas de dados, banco de dados, engenharia e arquitetura de sistemas.',
        },
      ],
    },
    projects: {
      heading: 'Projetos em ',
      headingAccent: 'destaque',
      subtitle:
        'Uma seleção de projetos que desenvolvi, aplicando diferentes tecnologias e resolvendo problemas reais.',
      viewProject: 'Ver projeto',
      code: 'Código',
    },
    contact: {
      heading: 'Vamos ',
      headingAccent: 'conversar',
      subtitle:
        'Tem uma oportunidade ou projeto em mente? Envie uma mensagem — terei prazer em responder.',
      namePlaceholder: 'Nome completo',
      emailPlaceholder: 'Seu e-mail',
      phonePlaceholder: 'Telefone',
      subjectPlaceholder: 'Assunto',
      messagePlaceholder: 'Sua mensagem',
      send: 'Enviar mensagem',
      or: 'ou me encontre em',
      errors: {
        nameRequired: 'Informe seu nome.',
        nameInvalid: 'Digite um nome válido (apenas letras, mín. 2 caracteres).',
        emailRequired: 'Informe seu e-mail.',
        emailInvalid: 'Digite um e-mail válido (ex.: nome@empresa.com).',
        phoneInvalid: 'Digite um telefone válido (DDD + número).',
        subjectRequired: 'Informe o assunto.',
        messageRequired: 'Escreva sua mensagem.',
        messageShort: 'A mensagem deve ter ao menos 10 caracteres.',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      builtWith: 'Construído com React, TypeScript & Tailwind CSS',
      backToTop: 'Voltar ao topo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Marlon Silva',
      roles: [
        'Full Stack Developer',
        'Software Engineer',
        'Frontend Developer',
        'Backend Developer',
      ],
      description:
        'Software Engineer at Bemol Digital. I turn ideas into efficient, scalable full stack web solutions aligned with business goals, using C#, .NET, Node.js and React.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      available: 'Available for new opportunities',
    },
    about: {
      heading: 'About ',
      headingAccent: 'me',
      role: 'Software Engineer · Bemol Digital',
      paragraphs: [
        "I'm Marlon Silva, a Software Engineer at Bemol Digital, where I work on the full stack development of enterprise systems — turning ideas into functional, scalable and high-quality solutions.",
        'My journey started as an intern and grew into a Software Engineer Trainee role. Day to day I work with C#, .NET, Node.js, TypeScript and React, across both frontend and backend, throughout the whole software lifecycle.',
        "I hold a bachelor's and a postgraduate degree in Software Engineering, with a special interest in web development, cloud computing (Azure) and best practices. I'm always looking for new challenges that help me grow and contribute to products that make a difference.",
      ],
      highlights: [
        { value: '3+', label: 'Years of experience' },
        { value: '6+', label: 'Projects built' },
        { value: '10+', label: 'Technologies' },
      ],
    },
    skills: {
      heading: 'My ',
      headingAccent: 'tech stack',
      subtitle:
        'Tools and technologies I use to build complete applications, from frontend to backend.',
      categories: [
        {
          title: 'Frontend',
          items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          items: ['C#', '.NET', 'Node.js', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'SQL'],
        },
        {
          title: 'Tools & Cloud',
          items: ['Git & GitHub', 'Azure', 'Azure DevOps', 'CI/CD', 'Figma', 'Agile'],
        },
      ],
    },
    experience: {
      heading: 'Education & ',
      headingAccent: 'Experience',
      subtitle: 'My professional and academic journey in software engineering.',
      items: [
        {
          period: 'Apr 2024 — Present',
          title: 'Software Engineer Trainee',
          org: 'Bemol Digital · Amazonas, Brazil',
          description:
            'Full stack web development with C#, .NET, Node.js and TypeScript. Building and consuming REST APIs, developing frontend interfaces and maintaining enterprise systems, taking part in the whole software lifecycle — from analysis to deployment and support.',
          skills: ['C#', '.NET', 'Node.js', 'TypeScript', 'React.js', 'Azure Functions', 'Azure DevOps', 'Git'],
        },
        {
          period: 'Mar 2023 — Mar 2024',
          title: 'Software Development Intern',
          org: 'Bemol Digital · Itacoatiara, AM',
          description:
            'Took part in the planning, analysis, modeling and development of software, applying different programming languages and environments.',
          skills: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'Node.js', 'React.js', '.NET Framework', 'SQL', 'HTML5', 'Git & GitHub', 'Figma'],
        },
        {
          period: 'Postgraduate',
          title: 'Specialization in Software Engineering',
          org: 'Postgraduate degree',
          description:
            'Deep dive into software architecture, development best practices and technology project management.',
        },
        {
          period: 'Bachelor',
          title: "Bachelor's in Software Engineering",
          org: 'University',
          description:
            'Solid foundation in programming fundamentals, data structures, databases, engineering and systems architecture.',
        },
      ],
    },
    projects: {
      heading: 'Featured ',
      headingAccent: 'projects',
      subtitle:
        'A selection of projects I built, applying different technologies and solving real problems.',
      viewProject: 'View project',
      code: 'Code',
    },
    contact: {
      heading: "Let's ",
      headingAccent: 'talk',
      subtitle:
        'Have an opportunity or a project in mind? Send a message — I’ll be glad to reply.',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Your email',
      phonePlaceholder: 'Phone',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your message',
      send: 'Send message',
      or: 'or find me on',
      errors: {
        nameRequired: 'Please enter your name.',
        nameInvalid: 'Enter a valid name (letters only, min. 2 characters).',
        emailRequired: 'Please enter your email.',
        emailInvalid: 'Enter a valid email (e.g. name@company.com).',
        phoneInvalid: 'Enter a valid phone number.',
        subjectRequired: 'Please enter a subject.',
        messageRequired: 'Please write your message.',
        messageShort: 'The message must be at least 10 characters.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React, TypeScript & Tailwind CSS',
      backToTop: 'Back to top',
    },
  },
}
