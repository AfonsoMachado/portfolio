import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { Locale } from "@/shared/i18n/config";

type PortfolioDictionary = Record<Locale, PortfolioContent>;

export const portfolioContent: PortfolioDictionary = {
  "pt-br": {
    locale: "pt-br",
    meta: {
      title: "Afonso Machado | Portfólio",
      description:
        "Portfólio multilíngue de Afonso Machado com foco em front-end, clean architecture e produtos digitais bem acabados.",
    },
    brand: {
      name: "Afonso Machado",
      role: "Desenvolvedor web full-stack",
      location: "Feira de Santana, Bahia, Brasil",
    },
    navigation: [
      { href: "#home", label: "Início" },
      { href: "#about", label: "Sobre" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Projetos" },
      { href: "#contact", label: "Contato" },
    ],
    languageSwitcherLabel: "Idiomas",
    hero: {
      eyebrow: "Next.js 16.3 + App Router + clean architecture",
      title:
        "Interfaces sólidas, código organizado e uma presença digital com identidade própria.",
      description:
        "Sou Afonso Machado, desenvolvedor full-stack com foco em experiências web responsivas, componentes bem estruturados e bases de código pensadas para evoluir sem virar bagunça.",
      primaryCta: "Ver projetos",
      secondaryCta: "Entrar em contato",
      metrics: [
        { value: "pt-BR", label: "idioma principal" },
        { value: "EN / ES", label: "versões adicionais" },
        { value: "App Router", label: "base pronta para Vercel" },
      ],
    },
    about: {
      id: "about",
      eyebrow: "Sobre mim",
      title:
        "Construo produtos web com atenção real em estrutura, legibilidade e experiência.",
      paragraphs: [
        "No seu perfil público, você se apresenta como estudante de Engenharia de Computação, desenvolvedor web full-stack e alguém sempre em busca de expandir repertório técnico.",
        "Seu interesse passa por front-end, back-end e interfaces que pareçam cuidadas em cada detalhe. Também há abertura para explorar mobile e transformar referências visuais em implementações consistentes.",
      ],
      highlights: [
        {
          title: "Arquitetura limpa",
          description:
            "Separação de domínio, aplicação, infraestrutura e apresentação para facilitar manutenção e crescimento.",
        },
        {
          title: "UI com direção visual",
          description:
            "Layouts responsivos, tipografia intencional e identidade própria, sem depender de template genérico.",
        },
        {
          title: "Entrega prática",
          description:
            "Projeto organizado para seguir evoluindo, com rotas por idioma e deploy simples em plataformas modernas.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack e foco",
      title: "Ferramentas e áreas em que concentro minha energia.",
      description:
        "Next.js App Router com separação por camadas para manter o projeto evolutivo, internacionalizado e simples de publicar.",
      groups: [
        {
          title: "Front-end",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Back-end e dados",
          items: ["Node.js", "APIs REST", "JSON Server", "Integrações web"],
        },
        {
          title: "Mobile e exploração",
          items: ["React Native", "Flutter", "Interfaces multiplataforma"],
        },
        {
          title: "Forma de trabalho",
          items: ["App Router", "Clean Architecture", "Git", "Deploy na Vercel"],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Projetos em destaque",
      title:
        "Uma seleção de repositórios públicos para mostrar amplitude e execução.",
      description:
        "Usei como base os projetos destacados no seu GitHub público, organizando a apresentação de forma mais editorial.",
      repositoryLabel: "Repositório",
      openLabel: "Abrir repositório",
      moreLabel: "Ver perfil completo no GitHub",
      items: [
        {
          title: "calculator-react",
          description:
            "Calculadora inspirada na interface do macOS, construída em React com foco em composição de interface e comportamento previsível.",
          href: "https://github.com/AfonsoMachado/calculator-react",
          stack: ["React", "JavaScript", "UI"],
        },
        {
          title: "nubank-clone",
          description:
            "Clone da interface mobile do Nubank em React Native, exercitando fidelidade visual e organização de componentes.",
          href: "https://github.com/AfonsoMachado/nubank-clone",
          stack: ["React Native", "JavaScript", "Mobile UI"],
        },
        {
          title: "flappy-bird",
          description:
            "Releitura do jogo Flappy Bird com HTML, CSS e JavaScript, demonstrando lógica de jogo e manipulação do DOM.",
          href: "https://github.com/AfonsoMachado/flappy-bird",
          stack: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "crud-angular",
          description:
            "CRUD em Angular com persistência em JSON Server, explorando fluxo de dados e estrutura de aplicação front-end.",
          href: "https://github.com/AfonsoMachado/crud-angular",
          stack: ["Angular", "TypeScript", "JSON Server"],
        },
        {
          title: "metalflix",
          description:
            "Catálogo de vídeos com temática metal criado durante a Imersão React, combinando conteúdo, navegação e personalidade visual.",
          href: "https://github.com/AfonsoMachado/metalflix",
          stack: ["React", "JavaScript", "Content UI"],
        },
        {
          title: "proffy-nlw",
          description:
            "Projeto realizado durante a Next Level Week com foco em experiência educacional, formulários e organização de fluxo entre telas.",
          href: "https://github.com/AfonsoMachado/proffy-nlw",
          stack: ["TypeScript", "Node.js", "Education"],
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contato",
      title:
        "Se a ideia pede uma interface forte e uma base bem montada, vamos conversar.",
      description:
        "Este portfólio foi estruturado para te representar de forma mais madura, mas também para funcionar como ponto de partida de futuras melhorias.",
      availability:
        "Disponível para oportunidades em desenvolvimento front-end, full-stack e produtos digitais.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AfonsoMachado",
          caption: "Repositórios, histórico e projetos públicos",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/afonsomachado/",
          caption: "Experiência, networking e contato profissional",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/afonsomachado",
          caption: "Presença pessoal e bastidores",
        },
      ],
    },
    footer:
      "Portfólio desenhado para ser multilíngue, fácil de manter e pronto para deploy contínuo.",
  },
  en: {
    locale: "en",
    meta: {
      title: "Afonso Machado | Portfolio",
      description:
        "A multilingual portfolio for Afonso Machado focused on front-end craft, clean architecture, and polished digital products.",
    },
    brand: {
      name: "Afonso Machado",
      role: "Full-stack web developer",
      location: "Feira de Santana, Bahia, Brazil",
    },
    navigation: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    languageSwitcherLabel: "Languages",
    hero: {
      eyebrow: "Next.js 16.3 + App Router + clean architecture",
      title:
        "Reliable interfaces, organized code, and a digital presence with its own visual voice.",
      description:
        "I am Afonso Machado, a full-stack developer focused on responsive web experiences, structured component systems, and codebases designed to scale without turning brittle.",
      primaryCta: "See projects",
      secondaryCta: "Get in touch",
      metrics: [
        { value: "pt-BR", label: "primary language" },
        { value: "EN / ES", label: "additional versions" },
        { value: "App Router", label: "Vercel-ready foundation" },
      ],
    },
    about: {
      id: "about",
      eyebrow: "About",
      title:
        "I build web products with real attention to structure, readability, and experience.",
      paragraphs: [
        "On the public profile, Afonso describes himself as a Computer Engineering student, a full-stack web developer, and someone consistently expanding his technical range.",
        "His interests span front-end, back-end, and interfaces that feel considered in every detail. He also explores mobile work and turns visual references into coherent implementations.",
      ],
      highlights: [
        {
          title: "Clean architecture",
          description:
            "Domain, application, infrastructure, and presentation layers are separated to support maintenance and growth.",
        },
        {
          title: "Deliberate UI direction",
          description:
            "Responsive layouts, expressive typography, and a distinct identity instead of a generic portfolio clone.",
        },
        {
          title: "Practical delivery",
          description:
            "Organized for continued iteration, with locale-based routing and straightforward deployment.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack and focus",
      title: "The tools and areas where I put most of my energy.",
      description:
        "Next.js App Router with layered separation so the project stays maintainable, multilingual, and straightforward to publish.",
      groups: [
        {
          title: "Front-end",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Back-end and data",
          items: ["Node.js", "REST APIs", "JSON Server", "Web integrations"],
        },
        {
          title: "Mobile and exploration",
          items: ["React Native", "Flutter", "Cross-platform interfaces"],
        },
        {
          title: "Workflow",
          items: ["App Router", "Clean Architecture", "Git", "Vercel deployment"],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Selected work",
      title:
        "A curated set of public repositories that shows range and execution.",
      description:
        "This section is based on the repositories highlighted on the public GitHub profile, presented with a more editorial structure.",
      repositoryLabel: "Repository",
      openLabel: "Open repository",
      moreLabel: "View full GitHub profile",
      items: [
        {
          title: "calculator-react",
          description:
            "A macOS-inspired calculator in React, focused on interface composition and predictable behavior.",
          href: "https://github.com/AfonsoMachado/calculator-react",
          stack: ["React", "JavaScript", "UI"],
        },
        {
          title: "nubank-clone",
          description:
            "A Nubank mobile interface clone built with React Native, exercising visual fidelity and component organization.",
          href: "https://github.com/AfonsoMachado/nubank-clone",
          stack: ["React Native", "JavaScript", "Mobile UI"],
        },
        {
          title: "flappy-bird",
          description:
            "A Flappy Bird recreation with HTML, CSS, and JavaScript, showing game logic and DOM manipulation.",
          href: "https://github.com/AfonsoMachado/flappy-bird",
          stack: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "crud-angular",
          description:
            "An Angular CRUD backed by JSON Server, exploring data flow and front-end application structure.",
          href: "https://github.com/AfonsoMachado/crud-angular",
          stack: ["Angular", "TypeScript", "JSON Server"],
        },
        {
          title: "metalflix",
          description:
            "A metal-themed video catalog created during React immersion training, mixing content structure and visual personality.",
          href: "https://github.com/AfonsoMachado/metalflix",
          stack: ["React", "JavaScript", "Content UI"],
        },
        {
          title: "proffy-nlw",
          description:
            "An educational project from Next Level Week centered on forms, screen flows, and user experience.",
          href: "https://github.com/AfonsoMachado/proffy-nlw",
          stack: ["TypeScript", "Node.js", "Education"],
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contact",
      title:
        "If the idea needs strong interface work and a well-structured base, let's talk.",
      description:
        "This portfolio is structured to represent Afonso more clearly today, while staying ready for future improvements.",
      availability:
        "Open to front-end, full-stack, and digital product opportunities.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AfonsoMachado",
          caption: "Repositories, history, and public projects",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/afonsomachado/",
          caption: "Experience, networking, and professional contact",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/afonsomachado",
          caption: "Personal presence and behind the scenes",
        },
      ],
    },
    footer:
      "Designed to be multilingual, maintainable, and ready for continuous deployment.",
  },
  es: {
    locale: "es",
    meta: {
      title: "Afonso Machado | Portafolio",
      description:
        "Portafolio multilingüe de Afonso Machado centrado en front-end, clean architecture y productos digitales bien resueltos.",
    },
    brand: {
      name: "Afonso Machado",
      role: "Desarrollador web full-stack",
      location: "Feira de Santana, Bahia, Brasil",
    },
    navigation: [
      { href: "#home", label: "Inicio" },
      { href: "#about", label: "Sobre mí" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
    ],
    languageSwitcherLabel: "Idiomas",
    hero: {
      eyebrow: "Next.js 16.3 + App Router + clean architecture",
      title:
        "Interfaces firmes, código ordenado y una presencia digital con identidad propia.",
      description:
        "Soy Afonso Machado, desarrollador full-stack enfocado en experiencias web responsivas, sistemas de componentes bien estructurados y bases de código listas para crecer sin perder claridad.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactarme",
      metrics: [
        { value: "pt-BR", label: "idioma principal" },
        { value: "EN / ES", label: "versiones adicionales" },
        { value: "App Router", label: "base lista para Vercel" },
      ],
    },
    about: {
      id: "about",
      eyebrow: "Sobre mí",
      title:
        "Construyo productos web con atención real a la estructura, la legibilidad y la experiencia.",
      paragraphs: [
        "En su perfil público, Afonso se presenta como estudiante de Ingeniería de Computación, desarrollador web full-stack y alguien que busca ampliar continuamente su repertorio técnico.",
        "Su interés pasa por front-end, back-end e interfaces que se sientan cuidadas en cada detalle. También explora el trabajo mobile y convierte referencias visuales en implementaciones coherentes.",
      ],
      highlights: [
        {
          title: "Arquitectura limpia",
          description:
            "Separación entre dominio, aplicación, infraestructura y presentación para facilitar mantenimiento y evolución.",
        },
        {
          title: "Dirección visual intencional",
          description:
            "Layouts responsivos, tipografía expresiva e identidad propia en lugar de un clon genérico.",
        },
        {
          title: "Entrega práctica",
          description:
            "Organizado para seguir iterando, con rutas por idioma y despliegue sencillo.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack y enfoque",
      title: "Herramientas y áreas donde concentro la mayor parte de mi energía.",
      description:
        "Next.js App Router con separación por capas para que el proyecto siga siendo mantenible, multilingüe y fácil de publicar.",
      groups: [
        {
          title: "Front-end",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Back-end y datos",
          items: ["Node.js", "APIs REST", "JSON Server", "Integraciones web"],
        },
        {
          title: "Mobile y exploración",
          items: ["React Native", "Flutter", "Interfaces multiplataforma"],
        },
        {
          title: "Flujo de trabajo",
          items: ["App Router", "Clean Architecture", "Git", "Deploy en Vercel"],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Proyectos destacados",
      title:
        "Una selección de repositorios públicos que muestra amplitud y ejecución.",
      description:
        "La sección toma como base los proyectos destacados del GitHub público y los presenta con una estructura más editorial.",
      repositoryLabel: "Repositorio",
      openLabel: "Abrir repositorio",
      moreLabel: "Ver perfil completo en GitHub",
      items: [
        {
          title: "calculator-react",
          description:
            "Calculadora inspirada en macOS hecha con React, enfocada en composición de interfaz y comportamiento predecible.",
          href: "https://github.com/AfonsoMachado/calculator-react",
          stack: ["React", "JavaScript", "UI"],
        },
        {
          title: "nubank-clone",
          description:
            "Clon de la interfaz móvil de Nubank con React Native, ejercitando fidelidad visual y organización de componentes.",
          href: "https://github.com/AfonsoMachado/nubank-clone",
          stack: ["React Native", "JavaScript", "Mobile UI"],
        },
        {
          title: "flappy-bird",
          description:
            "Recreación de Flappy Bird con HTML, CSS y JavaScript, mostrando lógica de juego y manipulación del DOM.",
          href: "https://github.com/AfonsoMachado/flappy-bird",
          stack: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "crud-angular",
          description:
            "CRUD en Angular con JSON Server, explorando flujo de datos y estructura de aplicación front-end.",
          href: "https://github.com/AfonsoMachado/crud-angular",
          stack: ["Angular", "TypeScript", "JSON Server"],
        },
        {
          title: "metalflix",
          description:
            "Catálogo de videos con temática metal creado durante una inmersión en React, combinando contenido e identidad visual.",
          href: "https://github.com/AfonsoMachado/metalflix",
          stack: ["React", "JavaScript", "Content UI"],
        },
        {
          title: "proffy-nlw",
          description:
            "Proyecto educativo de Next Level Week centrado en formularios, flujos entre pantallas y experiencia de usuario.",
          href: "https://github.com/AfonsoMachado/proffy-nlw",
          stack: ["TypeScript", "Node.js", "Education"],
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contacto",
      title:
        "Si la idea necesita una interfaz fuerte y una base bien montada, conversemos.",
      description:
        "Este portafolio fue estructurado para representar mejor a Afonso hoy y seguir listo para futuras mejoras.",
      availability:
        "Disponible para oportunidades en front-end, full-stack y productos digitales.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AfonsoMachado",
          caption: "Repositorios, historial y proyectos públicos",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/afonsomachado/",
          caption: "Experiencia, networking y contacto profesional",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/afonsomachado",
          caption: "Presencia personal y detrás de escena",
        },
      ],
    },
    footer:
      "Diseñado para ser multilingüe, mantenible y listo para despliegue continuo.",
  },
};
