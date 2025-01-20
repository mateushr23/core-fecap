export interface Data {
  id: string
  variant: string
  categoria: string
  nome: string
  carga: string
  data: string
  sobre: string
  paraQuem: string
  modulos: {
    titulo: string
    topicos: string[]
  }[]
}

export const cursoData: Data[] = [
  // CURSOS CURTA DURACAO -----------------------------------------------------------------------------------------------
  {
    id: "1",
    variant: "luciane",
    categoria: "curta",
    nome: "Saúde Mental do colaborador: o bem mais precioso, para as áreas de RH/Saúde Ocupacional",
    carga: "33 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso visa demonstrar a importância da saúde mental e implementar práticas que promovam o bem-estar no ambiente de trabalho. Além da Organização cumprir sua responsabilidade social, os colaboradores que têm sua saúde mental bem cuidada, tendem a ser mais produtivos, criativos e engajados em suas atividades, reduzindo o absenteísmo e melhorando o clima organizacional. Oferece informações sobre a gestão do estresse, identificação de sinais de conflitos na saúde mental, estratégias de autocuidado e ferramentas para um ambiente de trabalho saudável.",
    paraQuem:
      "PJ - Indicado para Organizações públicas ou privadas; Ongs, etc. \n PF - Para profissionais preocupados com a qualidade de sua saúde mental.",
    modulos: [
      {
        titulo: "Módulo 1 - Saúde Mental",
        topicos: [
          "Conceito de Saúde",
          "Saúde física, mental, emocional, social, espiritual e ocupacional",
          "Definição de saúde mental e sua importância no ambiente de trabalho",
          "Fatores que influenciam a saúde mental dos trabalhadores",
          "Identificação de Sinais e Sintomas em si mesmo e nos colegas",
          "Impactos da Saúde Mental no Trabalho",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 2 - Estratégias de Prevenção - Técnicas de autocuidado",
        topicos: [
          "A importância da autoestima como ferramenta de autocuidado",
          "Indicadores de autoestima alta e baixa",
          "Dicas para melhorar a autoestima",
          "Autocompaixão",
          "Autopercepção da felicidade",
          "Autocuidado no ambiente de trabalho",
          "Exercícios",
        ],
      },
      {
        titulo:
          "Módulo 3 - Estratégias de Prevenção - Gerenciamento do estresse",
        topicos: [
          "Definições do estresse",
          "Causas do estresse;",
          "Sinais e sintomas físicos, cognitivos e emocionais",
          "Fases do estresse",
          "Estresse positivo e estresse negativo",
          "Estresse pessoal e estresse profissional",
          "Competências para gestão do estresse",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 4 - Ambiente de Trabalho Saudável",
        topicos: [
          "Definição e importância",
          "Benefícios para a empresa e para os colaboradores",
          "Criação de um ambiente que favoreça a saúde mental",
          "Ambiente inclusivo para todos os colaboradores",
          "Trabalho em equipe",
          "Competência interpessoal",
          "Gerenciamento de conflitos",
          "O poder da empatia",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 5 - Comunicação como ferramenta de suporte e prevenção",
        topicos: [
          "Conceito de comunicação",
          "Técnicas de comunicação",
          "Comunicação assertiva",
          "Respostas passivas, assertivas e agressivas",
          "Expressão de sentimentos",
          "Importância da observação e do diálogo",
          "Técnicas de feedback positivo e motivacional",
          "Estudo de caso",
        ],
      },
    ],
  },
  {
    id: "2",
    variant: "luciane",
    categoria: "curta",
    nome: "Otimizando o trabalho das equipes de Saúde, para a área da Saúde",
    carga: "24 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O objetivo do curso é capacitar profissionais da área da saúde a aprimorar a eficiência e a eficácia dos serviços prestados. O curso aborda estratégias de comunicação e colaboração entre equipes multidisciplinares, visando melhorar a qualidade do atendimento e acolhimento ao usuário, promovendo um ambiente de trabalho mais harmonioso e produtivo. Proporciona reflexões sobre como interagir com a família dos usuários, a fim de desenvolver uma relação de parceria e apoio mútuo. E finaliza abordando a questão da finitude, oferecendo ferramentas para lidar com esta questão diante do usuário e sua família, com mais acolhimento e assertividade.",
    paraQuem:
      "PJ - Indicado para Organizações públicas ou privadas na área da Saúde; \n PF - Para profissionais da área da saúde preocupados com a melhoria da atuação em equipe e atendimento ao usuário.",
    modulos: [
      {
        titulo: "Módulo 1 - Atuando em equipe",
        topicos: [
          "Conceitos fundamentais sobre trabalho em equipe nas áreas da Saúde",
          "Importância da interdisciplinaridade no atendimento",
          "Clareza dos papéis profissionais",
          "Parceria com ética",
          "Excelência no atendimento",
          "Humanização, Acolhimento e Empatia",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 2 - Comunicação Eficaz",
        topicos: [
          "Definição de comunicação e sua importância",
          "Elementos do processo de comunicação e tipos de comunicação",
          "Identificação de obstáculos (ruídos) que dificultam a comunicação eficaz",
          "Canais de comunicação",
          "Assertividade, passividade e agressividade",
          "Importância do feedback na comunicação",
          "Ferramentas para melhorar a comunicação interna e com os usuários",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 3 - Gestão de conflitos",
        topicos: [
          "Conceito de conflito: definição e tipos",
          "Causas comuns de conflitos na área da saúde",
          "Impactos dos conflitos no ambiente de trabalho e na qualidade do atendimento",
          "Ferramentas para diagnóstico de conflitos",
          "A importância da comunicação na gestão de conflitos",
          "Estratégias para gerenciamento dos conflitos",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 4 - Interagindo com as famílias",
        topicos: [
          "Impacto da doença na dinâmica familiar",
          "Reações emocionais mais comuns",
          "Compreendendo a doença familiar",
          "Perfil da família em situação de doença",
          "Repensando o papel profissional frente à família",
          "Técnicas de enfrentamento saudáveis para a família",
          "Família como parceira",
          "Estudo de caso",
        ],
      },
      {
        titulo: "Módulo 5 - Lidando com a finitude",
        topicos: [
          "Conceito de finitude e sua relevância na saúde",
          "Respeito às crenças e práticas espirituais e culturais dos pacientes",
          "Habilidades empáticas e de escuta ativa",
          "O papel do profissional de saúde no processo de luto - oferecendo suporte às famílias enlutadas",
          "Como a morte afeta os profissionais de saúde",
          "Estratégias de autocuidado e prevenção do burnout",
          "Estudo de caso",
        ],
      },
    ],
  },
  {
    id: "3",
    variant: "luciane",
    categoria: "curta",
    nome: "Gerenciando conflitos no ambiente de trabalho",
    carga: "30 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O objetivo do curso é capacitar os participantes a compreender a dinâmica dos conflitos que surgem dentro das organizações e a desenvolver habilidades para gerenciá-los de forma eficaz; definindo os conflitos. níveis e fontes de conflitos; apresentando as diferentes estratégias e estilos para resolução de conflitos, para que a equipe possa atuar de maneira mais produtiva e harmoniosa.",
    paraQuem:
      "PJ - Indicado para Organizações públicas ou privadas; \n PF - Para profissionais que desejam melhorar a gestão de conflitos em sua prática profissional.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução aos Conflitos",
        topicos: [
          "Definição de conflito",
          "Conflitos intrapessoais",
          "Conflitos culturais",
          "Conflitos organizacionais",
          "Causas comuns de conflitos",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 2 - Fontes, tipos e níveis de conflitos",
        topicos: [
          "As principais fontes de conflitos pessoais",
          "As principais fontes de conflitos organizacionais",
          "Conflito latente",
          "Conflito percebido",
          "Conflito sentido",
          "Conflito manifesto",
          "Nível de conflito leve",
          "Nível de conflito mediano",
          "Nível de conflito grave",
          "Nível de conflito gravíssimo",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 3 - Estilos de Gerenciamento de Conflitos",
        topicos: [
          "Importância da identificação e análise dos diferentes estilos",
          "Competir",
          "Colaborar",
          "Evitar",
          "Acomodar",
          "Como identificar seu próprio estilo e o dos outros",
          "Adaptação de estilos conforme a situação",
          "Exercícios",
        ],
      },
      {
        titulo: "Módulo 4 - Conflitos em Ambientes Organizacionais",
        topicos: [
          "Causas dos conflitos nas organizações",
          "Importância do estudo dos conflitos nas organizações",
          "Impacto dos conflitos na produtividade e no clima organizacional",
          "Aspectos positivos e negativos dos conflitos",
          "Conflitos como oportunidades de inovação e mudança",
          "Criação de um ambiente de trabalho colaborativo",
          "Estudo de caso",
        ],
      },
      {
        titulo: "Módulo 5 - Estratégias para o gerenciamento de conflitos",
        topicos: [
          "Técnicas de negociação e mediação",
          "O papel da empatia na gestão de conflitos",
          "Desenvolvimento da inteligência emocional para lidar com emoções durante os conflitos",
          "A importância da comunicação assertiva na gestão de conflitos",
          "Uso de feedback construtivo",
          "TKI - método para administrar conflitos",
          "Exercícios",
        ],
      },
    ],
  },
  {
    id: "4",
    variant: "maria",
    categoria: "curta",
    nome: "Qualidade no Atendimento",
    carga: "40 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de Qualidade no Atendimento capacita os participantes a oferecerem uma experiência positiva e memorável ao cliente. Focado em técnicas de comunicação, empatia, resolução de conflitos e gestão de expectativas, o curso é uma ferramenta essencial para quem busca excelência no atendimento e fidelização de clientes.",
    paraQuem:
      "Profissionais de atendimento ao cliente.\n Gerentes e supervisores que lideram equipes de atendimento.\n Empreendedores que buscam melhorar a experiência de seus clientes.\n Profissionais de vendas e suporte técnico.\n Estudantes interessados em ingressar no mercado de atendimento.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução à Qualidade no Atendimento",
        topicos: [
          "Conceito de qualidade no atendimento",
          "Importância da experiência do cliente para o sucesso do negócio",
          "Princípios básicos de um bom atendimento",
        ],
      },
      {
        titulo: "Módulo 2 - Comunicação e Empatia no Atendimento",
        topicos: [
          "Técnicas de comunicação assertiva",
          "Escuta ativa e identificação de necessidades do cliente",
          "Prática da empatia como diferencial no atendimento",
        ],
      },
      {
        titulo: "Módulo 3 - Resolução de Conflitos e Situações Desafiadoras",
        topicos: [
          "Estratégias para lidar com reclamações",
          "Gestão de conflitos com clientes difíceis",
          "Transformando críticas em oportunidades",
        ],
      },
      {
        titulo: "Módulo 4 - Fidelização e Encantamento do Cliente",
        topicos: [
          "Superação das expectativas do cliente",
          "A importância do feedback no atendimento",
          "Técnicas para fidelizar e encantar clientes",
        ],
      },
      {
        titulo: "Módulo 5 - Planejamento e Gestão da Qualidade no Atendimento",
        topicos: [
          "Ferramentas para mensurar a qualidade do atendimento",
          "Cultura de melhoria contínua no ambiente de trabalho",
          "Estudo de casos e implementação de boas práticas",
        ],
      },
    ],
  },
  {
    id: "5",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Cargos e Salários",
    carga: "20 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso capacita os participantes a desenvolver, implementar e gerir estruturas de cargos e salários de forma estratégica, alinhando os objetivos da organização às melhores práticas de remuneração e benefícios. Serão abordados conceitos fundamentais, metodologias de descrição e avaliação de cargos, e estratégias de remuneração variável.",
    paraQuem:
      "Profissionais de Recursos Humanos e Gestão de Pessoas.\n Consultores e analistas de gestão organizacional.\n Gestores de pequenas, médias e grandes empresas.\n Estudantes e recém-formados interessados em atuar na área de remuneração.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos de Cargos e Salários",
        topicos: [
          "Introdução aos conceitos de cargos e salários",
          "Importância estratégica da gestão de remuneração",
          "Normas e regulamentações aplicáveis (CLT e legislação trabalhista)",
        ],
      },
      {
        titulo: "Módulo 2 - Descrição e Estruturação de Cargos",
        topicos: [
          "Técnicas para levantamento de informações sobre cargos",
          "Elaboração de descrições de cargos detalhadas e precisas",
          "Estruturação hierárquica e organogramas",
        ],
      },
      {
        titulo: "Módulo 3 - Avaliação e Classificação de Cargos",
        topicos: [
          "Métodos de avaliação de cargos (quantitativos e qualitativos)",
          "Definição de critérios e pesos para avaliação",
          "Aplicação prática e estudos de caso",
        ],
      },
      {
        titulo: "Módulo 4 - Pesquisa Salarial e Definição de Faixas",
        topicos: [
          "Métodos para realizar pesquisas salariais no mercado",
          "Análise comparativa e definição de faixas salariais",
          "Políticas de remuneração fixa e variável",
        ],
      },
      {
        titulo:
          "Módulo 5 - Implantação de Política de Remuneração e Benefícios",
        topicos: [
          "Etapas para implantar e comunicar uma política salarial",
          "Gestão de planos de carreira e retenção de talentos",
          "Monitoramento e ajustes contínuos",
        ],
      },
    ],
  },
  {
    id: "6",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Recrutamento e Seleção",
    carga: "40 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso capacita os participantes a planejar e executar processos de recrutamento e seleção estratégicos, utilizando ferramentas modernas e técnicas baseadas em competências para identificar e contratar os melhores talentos. Serão abordados conceitos teóricos e atividades práticas para aprimorar a tomada de decisão na área de seleção.",
    paraQuem:
      "Profissionais e analistas de Recursos Humanos.\n Gestores de equipes e líderes empresariais.\n Estudantes e recém-formados em Psicologia, Administração ou áreas correlatas.\n Empreendedores que desejam contratar profissionais adequados ao seu negócio.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos do Recrutamento e Seleção",
        topicos: [
          "Conceito e importância estratégica do recrutamento e seleção",
          "Tipos de recrutamento (interno, externo, misto)",
          "Alinhamento do processo seletivo com a estratégia organizacional",
        ],
      },
      {
        titulo: "Módulo 2 - Planejamento e Atração de Talentos",
        topicos: [
          "Elaboração de descrições de vagas e perfis desejados",
          "Estratégias de divulgação e atração de candidatos",
          "Uso de tecnologias e plataformas para recrutamento",
        ],
      },
      {
        titulo: "Módulo 3 - Avaliação por Competências",
        topicos: [
          "Identificação de competências técnicas e comportamentais",
          "Metodologias para avaliação de candidatos",
          "Aplicação prática de testes e dinâmicas",
        ],
      },
      {
        titulo: "Módulo 4 - Entrevistas e Técnicas Avançadas de Seleção",
        topicos: [
          "Estruturação e condução de entrevistas assertivas",
          "Perguntas situacionais e comportamentais",
          "Análise de respostas e tomada de decisão baseada em dados",
        ],
      },
      {
        titulo: "Módulo 5 - Integração e Retenção de Talentos",
        topicos: [
          "Processo de onboarding eficiente",
          "Estratégias para promover engajamento e retenção",
          "Alinhamento de expectativas e acompanhamento inicial",
        ],
      },
    ],
  },
  {
    id: "7",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Treinamento e Desenvolvimento",
    carga: "40 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso capacita os participantes a planejar, desenvolver e implementar programas de treinamento e desenvolvimento alinhados aos objetivos estratégicos das organizações. Com foco em inovação e metodologias eficazes, o curso aborda desde a análise de necessidades até a avaliação de resultados.",
    paraQuem:
      "Profissionais e analistas de Recursos Humanos.\n Consultores e gestores de treinamento e desenvolvimento.\n Educadores corporativos e facilitadores.\n Estudantes de Administração, Psicologia e áreas correlatas.\n Líderes e gestores que desejam desenvolver suas equipes.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos do Treinamento e Desenvolvimento",
        topicos: [
          "O papel estratégico do T&D nas organizações",
          "Diferença entre treinamento, capacitação e desenvolvimento",
          "Normas e regulamentações aplicáveis ao T&D",
        ],
      },
      {
        titulo: "Módulo 2 - Levantamento de Necessidades de Treinamento (LNT)",
        topicos: [
          "Métodos para identificar lacunas de competências",
          "Análise de necessidades organizacionais, setoriais e individuais",
          "Ferramentas para diagnóstico assertivo",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento e Design de Programas de Treinamento",
        topicos: [
          "Estruturação de objetivos e conteúdos",
          "Escolha de metodologias e formatos (presencial, remoto, híbrido)",
          "Cronograma e recursos necessários",
        ],
      },
      {
        titulo: "Módulo 4 - Execução e Condução de Treinamentos",
        topicos: [
          "Técnicas de facilitação e engajamento",
          "Uso de tecnologias e ferramentas interativas",
          "Dinâmicas de grupo e estudos de caso",
        ],
      },
      {
        titulo: "Módulo 5 - Avaliação e Impacto dos Programas de T&D",
        topicos: [
          "Métodos de avaliação de resultados (ROI e outros indicadores)",
          "Feedbacks dos participantes e melhoria contínua",
          "Relatórios e apresentação de resultados para a liderança",
        ],
      },
    ],
  },
  {
    id: "8",
    variant: "renato",
    categoria: "curta",
    nome: "As minhas primeiras ferramentas de trabalho",
    carga: "30 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso tem por objetivo, apresentar as principais ferramentas para você profissional em início de carreira que busca crescimento rápido e sólido no mundo corporativo.\n Aqui, você terá acesso as principais ferramentas de governança e projetos, objetivando controles internos, fluxos de melhoria e redução de custos que trará retornos financeiros para e empresa e em consequência seu crescimento profissional.",
    paraQuem:
      "Profissionais recém-formados ou que estejam buscando seu primeiro emprego, aqui terá acesso as principais ferramentas que serão exigidas no dia a dia em qualquer setor no mundo corporativo.",
    modulos: [
      {
        titulo: "Módulo 1 - Ferramentas de Processos",
        topicos: [
          "O que são processos internos e externos",
          "A importância do processo de negócio para a empresa",
          "Quem não gerencia processo não gerencia indicadores",
        ],
      },
      {
        titulo: "Módulo 2 - Ferramentas de Projetos",
        topicos: [
          "O que é um projeto",
          "Tudo é projeto",
          "Entendendo as fases de um projeto",
          "Somando processos e projeto",
          "Comunicação e empatia",
        ],
      },
      {
        titulo: "Módulo 3 - Melhoria Contínua",
        topicos: [
          "Surgimento da melhoria",
          "O que é qualidade para produtos e serviço",
          "Principais ferramentas",
          "Certificações",
          "A importância disto para sua carreira",
        ],
      },
      {
        titulo:
          "Módulo 4 - Cultura Organizacional e Seu Impacto na Estratégia do Negócio",
        topicos: [
          "A base conceitual sobre cultura organizacional",
          "A cultura como uma alavanca poderosa para a realização da estratégia organizacional",
          "Premissas norteadores da cultura organizacional",
          "O BP como facilitado da implementação da cultura desejada",
          "Percepção e Modelo Mental",
          "Processo para diagnóstico e mudança cultural",
        ],
      },
    ],
  },
  {
    id: "9",
    variant: "renato",
    categoria: "curta",
    nome: "O que eu preciso aprender para ser um profissional de logística",
    carga: "32 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso tem por objetivo, apresentar as principais ferramentas para você profissional em início de carreira que busca crescimento rápido e sólido no setor de logística.\n Aqui, você terá acesso as principais ferramentas de governança e dia a dia operacional logístico, objetivando controles internos, fluxos de melhoria e redução de custos que trará retornos financeiros para e empresa e em consequência seu crescimento profissional. A logística é a arte do controle, de recebimento de materiais, estoque, produção, insumos, armazenagem, distribuição, controles entre outras atividades. O conteúdo deste curso te trará solides e base para um crescimento profissional na área.",
    paraQuem:
      "Profissionais recém-formados ou que estejam buscando seu primeiro emprego na área de logística. Aqui você terá acesso as principais ferramentas que serão exigidas no dia a dia para um profissional robusto de logística.",
    modulos: [
      {
        titulo: "Módulo 1 - Logística de Abastecimento",
        topicos: [
          "Gestão de insumos",
          "Prazos e políticas de recebimento, abastecimento de linhas",
          "Desenvolvimento de fornecedor",
          "Controle da qualidade e quantidade de insumos",
          "Quem não gerencia processo não gerencia indicadores",
        ],
      },
      {
        titulo: "Módulo 2 - Logística Interna",
        topicos: [
          "Armazenagem",
          "Estoque",
          "Inventário",
          "Insumos",
          "Controles internos",
          "Políticas de controle",
          "Custos",
          "Abastecimento",
        ],
      },
      {
        titulo: "Módulo 3 - Logística de Fabricação",
        topicos: [
          "Abastecimento de linhas produtivas",
          "Picking",
          "Planejamento e controles de abastecimento",
        ],
      },
      {
        titulo: "Módulo 4 - Logística de Distribuição",
        topicos: [
          "Armazenagem",
          "Distribuição",
          "Roteirização",
          "Transportes",
          "Torre de controle",
        ],
      },
    ],
  },
  {
    id: "10",
    variant: "",
    categoria: "curta",
    nome: "Gestão de Pequenos Negócios: Comportamento Empreendedor e Resultados",
    carga: "44 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "Este curso foi criado para quem quer crescer como empreendedor ou gestor de pequenos negócios. Vamos falar sobre o comportamento empreendedor como base do sucesso, ensinar estratégias práticas de gestão, planejamento financeiro e marketing, além de destacar a importância de liderança e inovação. O foco é transformar desafios em oportunidades e implementar práticas sustentáveis para garantir resultados sólidos no longo prazo.",
    paraQuem:
      "Micro e pequenos empreendedores.\n Pessoas que desejam abrir seu próprio negócio.\n Gestores de pequenas empresas que querem expandir e melhorar seus resultados.",
    modulos: [
      {
        titulo:
          "Módulo 1 - Comportamento Empreendedor e Habilidades Essenciais",
        topicos: [
          "O que faz um empreendedor se destacar",
          "Como trabalhar características como persistência, resiliência e liderança",
          "Identificação e diagnóstico do seu perfil empreendedor",
        ],
      },
      {
        titulo: "Módulo 2 - Fundamentos de Gestão de Pequenos Negócios",
        topicos: [
          "Passos para estruturar e formalizar um negócio",
          "Gestão administrativa e de recursos de forma eficiente",
          "Reconhecendo os principais desafios e oportunidades no mercado",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento Estratégico e Financeiro",
        topicos: [
          "Como planejar e acompanhar os resultados do negócio",
          "Controle de fluxo de caixa e gestão de custos",
          "Precificação: quanto cobrar por produtos e serviços",
        ],
      },
      {
        titulo: "Módulo 4 - Marketing e Relacionamento com Clientes",
        topicos: [
          "Estratégias de marketing eficazes e de baixo custo",
          "Ferramentas digitais para aumentar a visibilidade",
          "Construindo relacionamentos fortes e duradouros com clientes",
        ],
      },
      {
        titulo: "Módulo 5 - Inovação e Sustentabilidade nos Negócios",
        topicos: [
          "Como inovar em produtos e processos",
          "Sustentabilidade como vantagem competitiva",
          "Estudos de casos reais de negócios inovadores",
        ],
      },
      {
        titulo: "Módulo 6 - Elaboração do Plano de Negócios",
        topicos: [
          "Estruturando o plano: objetivos, metas e estratégias práticas",
          "Ferramentas para acompanhar e ajustar o planejamento",
          "Apresentação de planos de negócios criados pelos participantes",
        ],
      },
    ],
  },
  {
    id: "11",
    variant: "",
    categoria: "curta",
    nome: "Gestão de Vendas e Negociação com Clientes e Fornecedores",
    carga: "44 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "Este curso foi pensado para quem quer melhorar suas habilidades em vendas e negociação, entendendo como criar relações comerciais que trazem resultados sólidos. Vamos explorar técnicas práticas de negociação, estratégias para gerenciar clientes e fornecedores, e como alinhar tudo isso ao cenário atual. O objetivo é ensinar como fechar acordos vantajosos, construir parcerias estratégicas e alcançar resultados que realmente fazem a diferença.",
    paraQuem:
      "Profissionais de vendas que querem se destacar.\n Gestores que buscam estratégias eficazes para liderar negociações.\n Empreendedores que querem construir parcerias sólidas.\n Líderes empresariais interessados em melhorar a gestão de relacionamentos.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos da Gestão de Vendas e Negociação",
        topicos: [
          "O que é negociação estratégica e como aplicá-la no dia a dia",
          "Diferentes tipos de negociação e quando utilizá-los",
          "A relação entre vendas e negociação: construindo parcerias duradouras",
        ],
      },
      {
        titulo: "Módulo 2 - Técnicas de Negociação e Gestão de Relacionamentos",
        topicos: [
          "Comunicação assertiva e escuta ativa como ferramentas essenciais",
          "Como construir acordos que sejam vantajosos para todos os lados",
          "Estratégias práticas para gerenciar clientes e fornecedores com eficiência",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento Estratégico em Negociações",
        topicos: [
          "Identificação de oportunidades e mapeamento de interesses",
          "Técnicas de persuasão e influência inspiradas em princípios clássicos",
          "Como analisar cenários para tomar decisões mais assertivas",
        ],
      },
      {
        titulo: "Módulo 4 - Ferramentas de Gestão de Clientes e Fornecedores",
        topicos: [
          "Introdução ao CRM e como ele ajuda na gestão de relacionamentos",
          "Dicas para fidelizar clientes e fortalecer laços com fornecedores",
          "Exemplos práticos e estudos de caso para aplicar o que foi aprendido",
        ],
      },
      {
        titulo: "Módulo 5 - Negociações na Era da Indústria 5.0",
        topicos: [
          "Como o foco nas pessoas transforma as negociações",
          "Tendências e inovações em vendas e gestão de relacionamentos",
          "Ética e sustentabilidade como diferenciais nas negociações atuais",
        ],
      },
      {
        titulo: "Módulo 6 - Elaboração do Plano de Negócios",
        topicos: [
          "Estruturando o plano: objetivos, metas e estratégias práticas",
          "Ferramentas para acompanhar e ajustar o planejamento",
          "Apresentação de planos de negócios criados pelos participantes",
        ],
      },
    ],
  },
  {
    id: "12",
    variant: "carminha",
    categoria: "curta",
    nome: "Liderando com Inteligência Emocional e Alta Performance",
    carga: "35 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "Aprenda a usar a inteligência emocional para transformar sua forma de liderar! Você vai desenvolver habilidades práticas para lidar com emoções, melhorar suas relações, engajar pessoas e tomar decisões assertivas. Tudo isso com ferramentas modernas e adaptadas para os desafios do mundo em constante mudança. Ideal para quem busca ser um líder inspirador e de alta performance.",
    paraQuem:
      "Feito para jovens líderes, estudantes e qualquer pessoa que sonha em liderar com eficiência, empatia e resultados sólidos.",
    modulos: [
      {
        titulo:
          "Módulo 1 - Introdução à Liderança de Alta Performance e Inteligência Emocional",
        topicos: [
          "O que é ser um líder hoje: do estilo tradicional ao transformacional",
          "Por que a inteligência emocional é essencial na liderança moderna",
          "Como a IE melhora decisões e resultados no dia a dia",
          "Superando desafios e mudanças com a mente aberta",
          "Diferentes estilos de liderança e onde você se encaixa",
        ],
      },
      {
        titulo: "Módulo 2 - Desenvolvendo Competências Emocionais",
        topicos: [
          "Como se conhecer melhor e usar isso na liderança",
          "Construir empatia: o segredo para se conectar com pessoas",
          "Comunicação clara, emocionalmente inteligente e eficiente",
          "Dicas para manter o equilíbrio emocional em momentos de pressão",
          "Lidando com conflitos de forma positiva e eficaz",
        ],
      },
      {
        titulo: "Módulo 3 - Motivação e Engajamento de Equipes",
        topicos: [
          "Como identificar o que motiva a sua equipe de verdade",
          "Dando feedback que faz a diferença no crescimento das pessoas",
          "Construindo confiança e engajamento no seu time",
          "Criando um ambiente de trabalho que valoriza todos",
          "Como celebrar vitórias e aprender com os desafios",
        ],
      },
      {
        titulo: "Módulo 4 - Inteligência Emocional na Prática",
        topicos: [
          "Estudos de caso: aprendendo com exemplos reais",
          "Ferramentas para aplicar IE no dia a dia da sua equipe",
          "Usando IE para promover inovação e criatividade",
          "Enfrentando mudanças com resiliência e foco",
          "Planejamento estratégico com base em inteligência emocional",
        ],
      },
      {
        titulo: "Módulo 5 - Planejamento para Alta Performance",
        topicos: [
          "Criando seu próprio plano de liderança com IE",
          "Monitorando e ajustando para alcançar grandes resultados",
          "Como transformar sua equipe em um time de líderes emocionalmente inteligentes",
          "IE no futuro: se adaptando à Indústria 5.0",
          "Liderando com propósito e impacto positivo",
        ],
      },
    ],
  },
  {
    id: "13",
    variant: "regina",
    categoria: "curta",
    nome: "Negociação de Impacto: Planeje, Convença e Realize",
    carga: "36 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso visa capacitar os participantes a desenvolver habilidades essenciais de negociação, compreender o papel estratégico de negociação no ambiente empresarial e aplicar técnicas eficazes para alcançar resultados positivos em diferentes contextos profissionais.",
    paraQuem:
      "Profissionais e estudantes das áreas de negócios, vendas, recursos humanos, compras, gestão de projetos e iniciantes, que desejam aprimorar suas competências de negociação.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos da Negociação",
        topicos: [
          "Introdução à Negociação",
          "Tipos de Negociação",
          "Características de um Bom Negociador",
        ],
      },
      {
        titulo: "Módulo 2 - Comunicação e Persuasão",
        topicos: [
          "Comunicação Assertiva",
          "Técnicas de Persuasão",
          "Barreiras à Comunicação",
        ],
      },
      {
        titulo: "Módulo 3 - Estratégias e Táticas de Negociação",
        topicos: [
          "Planejamento de Negociações",
          "Estratégias Básicas e Concessões",
          "Respostas a Objeções",
        ],
      },
      {
        titulo: "Módulo 4 - Ética e Relacionamentos na Negociação",
        topicos: [
          "Ética na Negociação",
          "Relacionamentos de Longo Prazo",
          "Lidando com Conflitos",
        ],
      },
    ],
  },
  {
    id: "14",
    variant: "regina",
    categoria: "curta",
    nome: "Liderança em Ação: Preparação para Gerenciar Equipes de Sucesso",
    carga: "42 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso Liderança em Ação é voltado para profissionais, de áreas diversas, que desejam desenvolver habilidades técnicas e comportamentais essenciais para lideranças equipes. Este curso é ideal para aqueles que ainda não assumem cargos de liderança, mas têm como objetivo crescer profissionalmente e assumir novos desafios. Ao final, os participantes estarão mais confiantes e preparados para exercer papéis de liderança em qualquer contexto organizacional.",
    paraQuem:
      "Profissionais que ainda não assumiram posições de liderança formais, mas estão se preparando para ocupar esse cargo.\n Indivíduos com forte desejo de crescimento profissional e ascensão na carreira.\n Profissionais de diferentes áreas que promovem a importância do desenvolvimento técnico e comportamental para assumir novos.\n Pessoas que buscam uma abordagem prática e estratégica para liderar equipes e promover resultados profissionais",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução à Liderança",
        topicos: [
          "O que é Liderança",
          "Diferença entre líder e chefe",
          "Características de um Líder eficaz",
          "Desafios da Liderança em ambientes diversos",
          "Liderança do seculo XXI",
        ],
      },
      {
        titulo: "Módulo 2 - Autoconhecimento e Desenvolvimento Pessoal",
        topicos: [
          "A Importância do Autoconhecimento na Liderança",
          "Identificação de Pontos Fortes e Áreas de Melhoria",
          "Estilos de Liderança",
          "Feedback como Ferramenta de Desenvolvimento Pessoal",
          "Planejamento de Desenvolvimento Pessoal",
        ],
      },
      {
        titulo: "Módulo 3 - Comunicação e Relacionamento Interpessoal",
        topicos: [
          "A comunicação como pilar da lideranças",
          "Técnicas de Comunicação Eficaz",
          "Gestão de Conflitos",
          "Construção de Relacionamentos Saudáveis e de Confiança",
          "Comunicação Não-Verbal e Paraverbal",
          "Comunicação em Cenários Diversos",
        ],
      },
      {
        titulo: "Módulo 4 - Gestão de Equipes e Delegação",
        topicos: [
          "Fundamentos da Gestão de Equipes",
          "Motivação e Engajamento",
          "Delegação de Tarefas: Planejamento e Execução",
          "Liderança em Equipes Diversas",
          "Gestão de Conflitos em Equipe",
        ],
      },
      {
        titulo: "Módulo 5 - Inteligência Emocional e Resiliência",
        topicos: [
          "Introdução à Inteligência Emocional (IE)",
          "Autogestão Emocional e Liderança",
          "Empatia e Conexão Humana",
          "Construção da Resiliência",
          "Gerenciamento de Estresse e Bem Estar",
          "Aplicação Prática da Inteligência Emocional na Liderança",
        ],
      },
      {
        titulo: "Módulo 6 - Liderança Prática",
        topicos: [
          "Estudos de caso reais: solucionando desafios de liderança",
          "Simulações e dinâmicas práticas",
          "Elaboração de um plano de ação pessoal para assumir cargas de liderança",
        ],
      },
    ],
  },
  {
    id: "15",
    variant: "maria",
    categoria: "curta",
    nome: "Qualidade no Atendimento",
    carga: "40 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de Qualidade no Atendimento capacita os participantes a oferecerem uma experiência positiva e memorável ao cliente. Focado em técnicas de comunicação, empatia, resolução de conflitos e gestão de expectativas, o curso é uma ferramenta essencial para quem busca excelência no atendimento e fidelização de clientes.",
    paraQuem:
      "Profissionais de atendimento ao cliente.\n Gerentes e supervisores que lideram equipes de atendimento.\n Empreendedores que buscam melhorar a experiência de seus clientes.\n Profissionais de vendas e suporte técnico.\n Estudantes interessados em ingressar no mercado de atendimento.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução à Qualidade no Atendimento",
        topicos: [
          "Conceito de qualidade no atendimento",
          "Importância da experiência do cliente para o sucesso do negócio",
          "Princípios básicos de um bom atendimento",
        ],
      },
      {
        titulo: "Módulo 2 - Comunicação e Empatia no Atendimento",
        topicos: [
          "Técnicas de comunicação assertiva",
          "Escuta ativa e identificação de necessidades do cliente",
          "Prática da empatia como diferencial no atendimento",
        ],
      },
      {
        titulo: "Módulo 3 - Resolução de Conflitos e Situações Desafiadoras",
        topicos: [
          "Estratégias para lidar com reclamações",
          "Gestão de conflitos com clientes difíceis",
          "Transformando críticas em oportunidades",
        ],
      },
      {
        titulo: "Módulo 4 - Fidelização e Encantamento do Cliente",
        topicos: [
          "Superação das expectativas do cliente",
          "A importância do feedback no atendimento",
          "Técnicas para fidelizar e encantar clientes",
        ],
      },
      {
        titulo: "Módulo 5 - Planejamento e Gestão da Qualidade no Atendimento",
        topicos: [
          "Ferramentas para mensurar a qualidade do atendimento",
          "Cultura de melhoria contínua no ambiente de trabalho",
          "Estudo de casos e implementação de boas práticas",
        ],
      },
    ],
  },
  // {
  //   id: "2",
  //   categoria: "tecnico",
  //   nome: "Economia",
  //   sobre: "teste bndlasndlasd economia",
  //   paraQuem: "pros country",
  // },
  // {
  //   id: "3",
  //   categoria: "mba",
  //   nome: "Engenharia",
  //   sobre: "teste bndlasndlasd economia",
  //   paraQuem: "pros country",
  // },
]
