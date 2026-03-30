export type Lang = "en" | "pt";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "",
      name: "Lucca Gabriel",
      title: "Computer Engineer",
      role: "Full-Stack Developer",
      subtitle: "Building from front-end to back-end — and everything in between.",
      badge: "Full-Stack Developer · In orbit since 2022",
      cta: "Launch Mission",
    },
    about: {
      title: "About Me",
      bio: "Computer Engineer graduated from UTFPR – Federal University of Technology of Paraná, working as a Full-Stack Developer. Experienced in building web applications with ReactJS and back-end systems with Node.js, as well as developing and publishing mobile apps with Flutter on both Google Play and the Apple App Store. I also have strong Python skills and experience with complementary technologies for delivering complete software solutions.",
      experience: "Experience",
      education: "Education",
      experiences: [
        {
          role: "Full-Stack Developer",
          company: "Wikidados – Solutions & Development",
          period: "Nov 2022 – Present",
          duration: "3+ years",
          location: "Cascavel, Paraná, Brazil · On-site",
          description:
            "Worked as the exclusive Flutter developer for the company's mobile app, responsible for its conception, development and maintenance for iOS and Android — available on both the App Store and Play Store. Also built Node.js back-end servers integrating GPS tracking devices and external APIs, and contributed to Vue.js web interfaces for the admin panel.",
        },
        {
          role: "IT Systems Intern",
          company: "State University of Western Paraná (UNIOESTE)",
          period: "Mar 2020 – Feb 2022",
          duration: "2 years",
          location: "Cascavel, Paraná, Brazil",
          description:
            "Installation and configuration of Windows and Linux operating systems, software and applications. User support for the academic community and administration of institutional systems and e-mail.",
        },
      ],
      educations: [
        {
          degree: "B.Eng. in Computer Engineering",
          institution: "UTFPR – Federal University of Technology of Paraná",
          period: "2018 – 2023",
          location: "Cascavel, Paraná, Brazil",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        tools: "Database & Tools",
      },
      categoryDesc: {
        frontend: "Interfaces, frameworks & styling",
        backend: "Servers, APIs & messaging",
        mobile: "Cross-platform mobile apps",
        tools: "Databases, DevOps & integrations",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      viewCode: "Code",
      visitSite: "Visit Site",
      items: [
        {
          name: "Pedro Luis Imóveis",
          description:
            "Real estate marketplace for buying and selling properties in Cascavel and the surrounding region. Full-stack solution featuring property listings with advanced search filters, Google Maps integration for location browsing, and a complete admin dashboard for managing listings.",
          tech: ["Node.js", "Express", "MongoDB", "React", "Next.js", "Google Maps", "Tailwind", "ShadCN"],
          links: {
            front: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Next",
            dashboard: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Dashboard",
            backend: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Backend",
          },
          site: null as string | null,
          color: "from-blue-900 to-indigo-900",
          accent: "#3b82f6",
          number: "01",
        },
        {
          name: "Wikidados",
          description:
            "Enterprise vehicle telemetry platform developed at Wikidados, a company specializing in fleet monitoring solutions. Features real-time vehicle tracking on interactive maps, driver behavior analysis, fuel consumption reports, event logging, and a fully responsive admin dashboard.",
          tech: ["Node.js", "Express", "RabbitMQ", "TCP", "Socket.IO", "MongoDB", "Vue.js", "Quasar", "Google Maps"],
          links: {} as Record<string, string>,
          site: "https://wikidados.com.br" as string | null,
          color: "from-emerald-900 to-teal-900",
          accent: "#10b981",
          number: "02",
        },
        {
          name: "Chess",
          description:
            "Interactive chess game built for playing against friends online or against an AI bot. Features a complete chess rules engine with full move validation, piece promotion, en passant, castling, and persistent match state.",
          tech: ["React", "Next.js", "Tailwind CSS"],
          links: {
            front: "https://github.com/WorstOne0/Chess_Next",
          },
          site: null as string | null,
          color: "from-slate-700 to-zinc-800",
          accent: "#94a3b8",
          number: "03",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something together",
      description:
        "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      sendEmail: "Send an Email",
      seeGithub: "GitHub",
      linkedin: "LinkedIn",
    },
  },

  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "",
      name: "Lucca Gabriel",
      title: "Engenheiro de Computação",
      role: "Desenvolvedor Full-Stack",
      subtitle: "Construindo do front-end ao back-end — e tudo no meio.",
      badge: "Desenvolvedor Full-Stack · Em órbita desde 2022",
      cta: "Iniciar Missão",
    },
    about: {
      title: "Sobre Mim",
      bio: "Engenheiro de Computação pela UTFPR – Universidade Tecnológica Federal do Paraná, atuando como Desenvolvedor Full-Stack. Experiência em desenvolvimento de aplicações web com ReactJS e back-end em Node.js, além de desenvolvimento e publicação de aplicativos mobile com Flutter nas lojas Google Play e Apple App Store. Também possuo domínio em Python e experiência em tecnologias complementares para entrega de soluções completas de software.",
      experience: "Experiência",
      education: "Formação",
      experiences: [
        {
          role: "Desenvolvedor Full-Stack",
          company: "Wikidados – Soluções e Desenvolvimentos",
          period: "nov 2022 – Presente",
          duration: "3+ anos",
          location: "Cascavel, Paraná, Brasil · Presencial",
          description:
            "Atuei como desenvolvedor Flutter exclusivo do aplicativo da empresa, sendo responsável por sua concepção, desenvolvimento e manutenção para iOS e Android — disponível na App Store e Play Store. Também fui responsável pela criação de servidores back-end em Node.js, realizando integrações com dispositivos GPS e APIs externas, e colaborei no desenvolvimento de interfaces web com Vue.js para o painel administrativo.",
        },
        {
          role: "Estagiário de Sistemas da Informação",
          company: "Universidade Estadual do Oeste do Paraná (UNIOESTE)",
          period: "mar 2020 – fev 2022",
          duration: "2 anos",
          location: "Cascavel, Paraná, Brasil",
          description:
            "Instalação e configuração de Sistemas Operacionais Windows e Linux; instalação e configuração de softwares e aplicativos; suporte a usuários da comunidade acadêmica da UNIOESTE; acesso aos sistemas administrativos e de e-mail da instituição.",
        },
      ],
      educations: [
        {
          degree: "Bacharelado em Engenharia de Computação",
          institution: "UTFPR – Universidade Tecnológica Federal do Paraná",
          period: "2018 – 2023",
          location: "Cascavel, Paraná, Brasil",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologias com as quais trabalho",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        tools: "Banco de Dados & Ferramentas",
      },
      categoryDesc: {
        frontend: "Interfaces, frameworks e estilização",
        backend: "Servidores, APIs e mensageria",
        mobile: "Apps mobile multiplataforma",
        tools: "Bancos de dados, DevOps e integrações",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos meus trabalhos recentes",
      viewCode: "Código",
      visitSite: "Visitar Site",
      items: [
        {
          name: "Pedro Luis Imóveis",
          description:
            "Plataforma de compra e venda de imóveis em Cascavel e região. Solução full-stack com listagem de propriedades e filtros de busca avançados, integração com Google Maps para visualização de localização, e painel administrativo completo para gerenciamento de anúncios.",
          tech: ["Node.js", "Express", "MongoDB", "React", "Next.js", "Google Maps", "Tailwind", "ShadCN"],
          links: {
            front: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Next",
            dashboard: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Dashboard",
            backend: "https://github.com/WorstOne0/Pedro_Luis_Imoveis_Backend",
          },
          site: null as string | null,
          color: "from-blue-900 to-indigo-900",
          accent: "#3b82f6",
          number: "01",
        },
        {
          name: "Wikidados",
          description:
            "Plataforma empresarial de telemetria veicular desenvolvida na Wikidados, empresa especializada em monitoramento de frotas. Funcionalidades incluem rastreamento em tempo real em mapas interativos, análise de comportamento do motorista, relatórios de consumo de combustível, registro de eventos e painel administrativo responsivo.",
          tech: ["Node.js", "Express", "RabbitMQ", "TCP", "Socket.IO", "MongoDB", "Vue.js", "Quasar", "Google Maps"],
          links: {} as Record<string, string>,
          site: "https://wikidados.com.br" as string | null,
          color: "from-emerald-900 to-teal-900",
          accent: "#10b981",
          number: "02",
        },
        {
          name: "Chess",
          description:
            "Jogo de xadrez interativo desenvolvido para jogar com amigos online ou contra um bot de IA. Inclui implementação completa das regras do xadrez com validação de movimentos, promoção de peças, en passant, roque e persistência do estado da partida.",
          tech: ["React", "Next.js", "Tailwind CSS"],
          links: {
            front: "https://github.com/WorstOne0/Chess_Next",
          },
          site: null as string | null,
          color: "from-slate-700 to-zinc-800",
          accent: "#94a3b8",
          number: "03",
        },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos construir algo juntos",
      description:
        "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!",
      sendEmail: "Enviar E-mail",
      seeGithub: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};
