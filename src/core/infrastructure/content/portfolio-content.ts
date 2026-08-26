import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import { githubProfileUrl } from "@/shared/config/github";
import {
  instagramProfileUrl,
  linkedInProfileUrl,
} from "@/shared/config/profile-links";
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
      role: "Desenvolvedor full-stack",
      location: "Feira de Santana, Bahia, Brasil",
    },
    navigation: [
      { href: "#home", label: "Início" },
      { href: "#about", label: "Sobre" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Projetos" },
      { href: "#contact", label: "Contato" },
    ],
    menuLabel: "Menu",
    languageSwitcherLabel: "Idiomas",
    theme: {
      label: "Tema",
      systemLabel: "Sistema",
      lightLabel: "Claro",
      darkLabel: "Escuro",
    },
    hero: {
      title: "Olá, eu sou Afonso Machado.",
      description:
        "Formado em Engenharia de Computação e desenvolvedor full-stack. Aqui estão alguns dos projetos e tecnologias que fazem parte da minha trajetória.",
      primaryCta: "Ver projetos",
      secondaryCta: "Entrar em contato",
    },
    about: {
      id: "about",
      eyebrow: "Sobre mim",
      title:
        "Em constante aprendizado, transformando ideias em aplicações web.",
      paragraphs: [
        "Sou desenvolvedor full-stack formado em Engenharia de Computação. Gosto de entender como as coisas funcionam, escrever código claro e entregar experiências úteis para quem usa o produto.",
        "Tenho interesse em desenvolvimento front-end, back-end e mobile. Este espaço reúne trabalhos que representam o que venho aprendendo e construindo.",
      ],
      highlights: [
        {
          title: "Arquitetura limpa",
          description:
            "Organização de código que ajuda a manter aplicações compreensíveis e preparadas para evoluir.",
        },
        {
          title: "UI com direção visual",
          description:
            "Interfaces responsivas com atenção à clareza, consistência e aos detalhes de interação.",
        },
        {
          title: "Entrega prática",
          description:
            "Projetos que começam com uma boa base e podem receber melhorias de forma contínua.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack e foco",
      title: "Ferramentas e áreas em que concentro minha energia.",
      description:
        "Tecnologias que venho utilizando em estudos e projetos pessoais.",
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
          items: [
            "App Router",
            "Clean Architecture",
            "Git",
            "Deploy na Vercel",
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Projetos em destaque",
      title: "Projetos que desenvolvi para praticar, explorar e evoluir.",
      description: "Uma seleção dos meus repositórios públicos no GitHub.",
      repositoryLabel: "Repositório",
      openLabel: "Abrir repositório",
      openDemoLabel: "Ver demonstração",
      openDemoAriaLabel: "Abrir demonstração de",
      openRepositoryAriaLabel: "Abrir repositório de",
      moreLabel: "Ver perfil completo no GitHub",
      items: [
        {
          title: "calculator-react",
          description:
            "Calculadora inspirada na interface do macOS, construída em React com foco em composição de interface e comportamento previsível.",
        },
        {
          title: "nubank-clone",
          description:
            "Clone da interface mobile do Nubank em React Native, exercitando fidelidade visual e organização de componentes.",
        },
        {
          title: "flappy-bird",
          description:
            "Releitura do jogo Flappy Bird com HTML, CSS e JavaScript, demonstrando lógica de jogo e manipulação do DOM.",
        },
        {
          title: "crud-angular",
          description:
            "CRUD em Angular com persistência em JSON Server, explorando fluxo de dados e estrutura de aplicação front-end.",
        },
        {
          title: "metalflix",
          description:
            "Catálogo de vídeos com temática metal criado durante a Imersão React, combinando conteúdo, navegação e personalidade visual.",
        },
        {
          title: "proffy-nlw",
          description:
            "Projeto realizado durante a Next Level Week com foco em experiência educacional, formulários e organização de fluxo entre telas.",
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contato",
      title: "Vamos conversar.",
      description:
        "Fique à vontade para entrar em contato ou acompanhar meu trabalho nas redes.",
      availability: "Aberto a oportunidades e novas conexões.",
      links: [
        {
          label: "GitHub",
          href: githubProfileUrl,
          caption: "Repositórios, histórico e projetos públicos",
        },
        {
          label: "LinkedIn",
          href: linkedInProfileUrl,
          caption: "Experiência, networking e contato profissional",
        },
        {
          label: "Instagram",
          href: instagramProfileUrl,
          caption: "Presença pessoal e bastidores",
        },
      ],
    },
    footer: "Desenvolvedor full-stack formado em Engenharia de Computação.",
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
      role: "Full-stack developer",
      location: "Feira de Santana, Bahia, Brazil",
    },
    navigation: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    menuLabel: "Menu",
    languageSwitcherLabel: "Languages",
    theme: {
      label: "Theme",
      systemLabel: "System",
      lightLabel: "Light",
      darkLabel: "Dark",
    },
    hero: {
      title: "Hi, I am Afonso Machado.",
      description:
        "Computer Engineering graduate and full-stack developer. Here are some of the projects and technologies that are part of my journey.",
      primaryCta: "See projects",
      secondaryCta: "Get in touch",
    },
    about: {
      id: "about",
      eyebrow: "About",
      title: "Always learning and turning ideas into web applications.",
      paragraphs: [
        "I am a full-stack developer with a degree in Computer Engineering. I enjoy understanding how things work, writing clear code, and delivering useful experiences for product users.",
        "I am interested in front-end, back-end, and mobile development. This space brings together work that represents what I have been learning and building.",
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
            "Responsive interfaces with attention to clarity, consistency, and interaction details.",
        },
        {
          title: "Practical delivery",
          description:
            "Projects that start from a solid base and can receive continuous improvements.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack and focus",
      title: "The tools and areas where I put most of my energy.",
      description:
        "Technologies I have been using in studies and personal projects.",
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
          items: [
            "App Router",
            "Clean Architecture",
            "Git",
            "Vercel deployment",
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Selected work",
      title: "Projects I built to practice, explore, and grow.",
      description: "A selection of my public GitHub repositories.",
      repositoryLabel: "Repository",
      openLabel: "Open repository",
      openDemoLabel: "View live demo",
      openDemoAriaLabel: "Open live demo for",
      openRepositoryAriaLabel: "Open repository for",
      moreLabel: "View full GitHub profile",
      items: [
        {
          title: "calculator-react",
          description:
            "A macOS-inspired calculator in React, focused on interface composition and predictable behavior.",
        },
        {
          title: "nubank-clone",
          description:
            "A Nubank mobile interface clone built with React Native, exercising visual fidelity and component organization.",
        },
        {
          title: "flappy-bird",
          description:
            "A Flappy Bird recreation with HTML, CSS, and JavaScript, showing game logic and DOM manipulation.",
        },
        {
          title: "crud-angular",
          description:
            "An Angular CRUD backed by JSON Server, exploring data flow and front-end application structure.",
        },
        {
          title: "metalflix",
          description:
            "A metal-themed video catalog created during React immersion training, mixing content structure and visual personality.",
        },
        {
          title: "proffy-nlw",
          description:
            "An educational project from Next Level Week centered on forms, screen flows, and user experience.",
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contact",
      title: "Let's talk.",
      description:
        "Feel free to get in touch or follow my work through my social profiles.",
      availability: "Open to opportunities and new connections.",
      links: [
        {
          label: "GitHub",
          href: githubProfileUrl,
          caption: "Repositories, history, and public projects",
        },
        {
          label: "LinkedIn",
          href: linkedInProfileUrl,
          caption: "Experience, networking, and professional contact",
        },
        {
          label: "Instagram",
          href: instagramProfileUrl,
          caption: "Personal presence and behind the scenes",
        },
      ],
    },
    footer: "Full-stack developer with a degree in Computer Engineering.",
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
      role: "Desarrollador full-stack",
      location: "Feira de Santana, Bahia, Brasil",
    },
    navigation: [
      { href: "#home", label: "Inicio" },
      { href: "#about", label: "Sobre mí" },
      { href: "#stack", label: "Stack" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
    ],
    menuLabel: "Menú",
    languageSwitcherLabel: "Idiomas",
    theme: {
      label: "Tema",
      systemLabel: "Sistema",
      lightLabel: "Claro",
      darkLabel: "Oscuro",
    },
    hero: {
      title: "Hola, soy Afonso Machado.",
      description:
        "Graduado en Ingeniería de Computación y desarrollador full-stack. Aquí están algunos de los proyectos y tecnologías que forman parte de mi trayectoria.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactarme",
    },
    about: {
      id: "about",
      eyebrow: "Sobre mí",
      title: "Siempre aprendiendo y convirtiendo ideas en aplicaciones web.",
      paragraphs: [
        "Soy desarrollador full-stack graduado en Ingeniería de Computación. Me gusta entender cómo funcionan las cosas, escribir código claro y crear experiencias útiles para quienes usan un producto.",
        "Me interesan el front-end, el back-end y el desarrollo mobile. Este espacio reúne trabajos que representan lo que vengo aprendiendo y construyendo.",
      ],
      highlights: [
        {
          title: "Arquitectura limpia",
          description:
            "Organización de código que ayuda a mantener aplicaciones comprensibles y listas para evolucionar.",
        },
        {
          title: "Dirección visual intencional",
          description:
            "Interfaces responsivas con atención a la claridad, la consistencia y los detalles de interacción.",
        },
        {
          title: "Entrega práctica",
          description:
            "Proyectos que parten de una buena base y pueden recibir mejoras continuas.",
        },
      ],
    },
    stack: {
      id: "stack",
      eyebrow: "Stack y enfoque",
      title:
        "Herramientas y áreas donde concentro la mayor parte de mi energía.",
      description:
        "Tecnologías que vengo utilizando en estudios y proyectos personales.",
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
          items: [
            "App Router",
            "Clean Architecture",
            "Git",
            "Deploy en Vercel",
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      eyebrow: "Proyectos destacados",
      title: "Proyectos que desarrollé para practicar, explorar y evolucionar.",
      description: "Una selección de mis repositorios públicos en GitHub.",
      repositoryLabel: "Repositorio",
      openLabel: "Abrir repositorio",
      openDemoLabel: "Ver demostración",
      openDemoAriaLabel: "Abrir demostración de",
      openRepositoryAriaLabel: "Abrir repositorio de",
      moreLabel: "Ver perfil completo en GitHub",
      items: [
        {
          title: "calculator-react",
          description:
            "Calculadora inspirada en macOS hecha con React, enfocada en composición de interfaz y comportamiento predecible.",
        },
        {
          title: "nubank-clone",
          description:
            "Clon de la interfaz móvil de Nubank con React Native, ejercitando fidelidad visual y organización de componentes.",
        },
        {
          title: "flappy-bird",
          description:
            "Recreación de Flappy Bird con HTML, CSS y JavaScript, mostrando lógica de juego y manipulación del DOM.",
        },
        {
          title: "crud-angular",
          description:
            "CRUD en Angular con JSON Server, explorando flujo de datos y estructura de aplicación front-end.",
        },
        {
          title: "metalflix",
          description:
            "Catálogo de videos con temática metal creado durante una inmersión en React, combinando contenido e identidad visual.",
        },
        {
          title: "proffy-nlw",
          description:
            "Proyecto educativo de Next Level Week centrado en formularios, flujos entre pantallas y experiencia de usuario.",
        },
      ],
    },
    contact: {
      id: "contact",
      eyebrow: "Contacto",
      title: "Hablemos.",
      description:
        "No dudes en ponerte en contacto o seguir mi trabajo en las redes.",
      availability: "Abierto a oportunidades y nuevas conexiones.",
      links: [
        {
          label: "GitHub",
          href: githubProfileUrl,
          caption: "Repositorios, historial y proyectos públicos",
        },
        {
          label: "LinkedIn",
          href: linkedInProfileUrl,
          caption: "Experiencia, networking y contacto profesional",
        },
        {
          label: "Instagram",
          href: instagramProfileUrl,
          caption: "Presencia personal y detrás de escena",
        },
      ],
    },
    footer: "Desarrollador full-stack graduado en Ingeniería de Computación.",
  },
};
