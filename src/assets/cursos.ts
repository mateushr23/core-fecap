import cardGestao1 from "../assets/images/cardGestao1.png"
import cardGestao2 from "../assets/images/cardGestao2.png"
import cardGestao3 from "../assets/images/cardGestao3.png"
import bannerCurta1 from "../assets/images/bannerCurta1.png"
import bannerCurta2 from "../assets/images/bannerCurta2.png"
import bannerCurta3 from "../assets/images/bannerCurta3.png"

export interface Data {
  id: string
  banner?: string
  categoriaCurta?: string
  cardImg?: string
  cardDescricao?: string
  cardTag1?: string
  cardTag2?: string
  cardTag3?: string
  cardTag4?: string
  mbaLink?: string
  variant: string
  categoria: string
  nome: string
  carga: string
  modalidade?: string
  data: string
  inscricao?: string
  sobre: string
  oQueLeva?: string
  paraQuem: string
  modulos?: {
    titulo: string
    topicos: string[]
  }[]
}

export const cursoData: Data[] = [
  // CURSOS CURTA DURACAO -----------------------------------------------------------------------------------------------
  {
    id: "1",
    banner: bannerCurta1,
    categoriaCurta: "gestao",
    cardImg: cardGestao1,
    cardDescricao:
      "Este curso foi desenvolvido para profissionais em início de carreira que buscam crescimento rápido e sólido no mundo corporativo. Ele apresenta as principais ferramentas de g",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "renato",
    categoria: "curta",
    nome: "Ferramentas e Estratégias Essenciais para Iniciar Sua Jornada no Mundo Corporativo",
    carga: "30 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso foi desenvolvido para profissionais em início de carreira que buscam crescimento rápido e sólido no mundo corporativo. Ele apresenta as principais ferramentas de governança e projetos, com foco em controles internos, fluxos de melhoria e estratégias de redução de custos. Com uma abordagem prática, o curso oferece uma base sólida para capacitar os participantes a se tornarem agentes de transformação nas empresas, contribuindo para o sucesso organizacional e o próprio desenvolvimento profissional.",
    oQueLeva:
      "Entendimento das bases de processos e sua aplicação no dia a dia corporativo.\n Conhecimento inicial sobre projetos, suas fases e ferramentas de controle.\n Estratégias práticas de redução de custos e melhoria contínua.\n Ferramentas essenciais para alinhar a gestão de pessoas e negócios.",
    paraQuem:
      "Profissionais recém-formados que desejam iniciar sua carreira no mundo corporativo.\n Pessoas em busca de ferramentas práticas e estratégicas para o mercado de trabalho.\n Indivíduos interessados em compreender os fundamentos de processos, projetos e cultura organizacional.",
    modulos: [
      {
        titulo: "Módulo 1 - Ferramentas de Processos",
        topicos: [
          "O que são processos internos e externos.",
          "A importância dos processos de negócios para a empresa.",
          "Gestão de indicadores: quem não gerencia processos, não gerencia indicadores.",
        ],
      },
      {
        titulo: "Módulo 2 - Ferramentas de Projetos",
        topicos: [
          "O que é um projeto e sua relevância.",
          "Entendendo as fases de um projeto.",
          "Integração entre processos e projetos.",
          "Comunicação e empatia no gerenciamento de projetos.",
        ],
      },
      {
        titulo: "Módulo 3 - Melhoria Contínua",
        topicos: [
          "Surgimento e conceito de melhoria contínua.",
          "Qualidade em produtos e serviços: fundamentos essenciais.",
          "Principais ferramentas e certificações.",
          "A importância da melhoria contínua para o desenvolvimento de sua carreira.",
        ],
      },
      {
        titulo:
          "Módulo 4 - Cultura Organizacional e seu Impacto na Estratégia do Negócio",
        topicos: [
          "Conceitos fundamentais de cultura organizacional.",
          "Como a cultura impulsiona a estratégia organizacional.",
          "Premissas e pilares da cultura organizacional.",
          "Diagnóstico e implementação de mudanças culturais.",
          "O papel do Business Partner como facilitador da cultura desejada.",
        ],
      },
    ],
  },
  {
    id: "2",
    banner: bannerCurta2,
    categoriaCurta: "gestao",
    cardImg: cardGestao2,
    cardDescricao:
      "A eficiência logística se constrói com organização, gestão estratégica, otimização de processos e controle eficaz.",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "renato",
    categoria: "curta",
    nome: "Formação em Logística: Do Abastecimento à Distribuição",
    carga: "32 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso foi desenvolvido para profissionais em início de carreira que desejam ingressar e crescer no setor de logística. Ele apresenta as principais ferramentas e práticas relacionadas à governança logística, operações diárias e estratégias de controle.\n Os participantes aprenderão a gerenciar processos logísticos, reduzir custos e implementar melhorias operacionais. Com uma abordagem prática, o curso oferece uma base sólida para profissionais que buscam desempenhar um papel estratégico no setor, desde o abastecimento até a distribuição.",
    oQueLeva:
      "Compreensão das bases de logística em compras, armazenamento e transporte.\n Ferramentas para controles internos e fluxos de melhoria operacional.\n Conhecimento inicial sobre planejamento logístico e previsibilidade de insumos.\n Habilidades para gerenciar custos e desafios da cadeia logística.",
    paraQuem:
      "Profissionais recém-formados que desejam ingressar no setor de logística.\n Pessoas interessadas em aprender as ferramentas e processos essenciais para a área logística.\n Indivíduos que buscam uma base sólida para atuar em operações logísticas no mercado corporativo.",
    modulos: [
      {
        titulo: "Módulo 1 - Logística de Abastecimento",
        topicos: [
          "Gestão de insumos.",
          "Prazos e políticas de recebimento e abastecimento de linhas.",
          "Desenvolvimento de fornecedores.",
          "Controle de qualidade e quantidade de insumos.",
          "Gestão de processos e indicadores.",
        ],
      },
      {
        titulo: "Módulo 2 - Logística Interna",
        topicos: [
          "Armazenagem e estoque.",
          "Inventário e controle de insumos.",
          "Políticas de controle interno.",
          "Planejamento e gerenciamento de custos de abastecimento.",
        ],
      },
      {
        titulo: "Módulo 3 - Logística de Fabricação",
        topicos: [
          "Abastecimento de linhas produtivas.",
          "Picking e organização.",
          "Planejamento e controle de fluxos para produção.",
        ],
      },
      {
        titulo: "Módulo 4 - Logística de Distribuição",
        topicos: [
          "Armazenagem e distribuição de produtos.",
          "Roteirização e otimização de transportes.",
          "Operação e gestão de torres de controle.",
        ],
      },
    ],
  },
  {
    id: "3",
    banner: bannerCurta3,
    categoriaCurta: "gestao",
    cardImg: cardGestao3,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "carminha",
    categoria: "curta",
    nome: "Gestão de Pequenos Negócios: Empreendedorismo e Resultados",
    carga: "44 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso foi desenvolvido para quem deseja crescer como empreendedor ou gestor de pequenos negócios. Ele aborda o comportamento empreendedor como base para o sucesso, apresentando estratégias práticas de gestão, planejamento financeiro e marketing, além de destacar a importância de liderança e inovação. O objetivo é transformar desafios em oportunidades e implementar práticas sustentáveis para alcançar resultados sólidos e duradouros.",
    oQueLeva:
      "Reconhecer e desenvolver características de um empreendedor de sucesso.\n Gerir pequenos negócios com eficiência e foco em resultados.\n Criar estratégias práticas para superar desafios e aproveitar oportunidades.\n Aplicar conhecimentos de gestão financeira, marketing e inovação em negócios menores.\n Planejar e executar um plano de crescimento sustentável e flexível.",
    paraQuem:
      "Micro e pequenos empreendedores.\n Pessoas que desejam abrir seu próprio negócio.\n Gestores de pequenas empresas que buscam expandir e melhorar seus resultados.",
    modulos: [
      {
        titulo:
          "Módulo 1 - Comportamento Empreendedor e Habilidades Essenciais",
        topicos: [
          "O que faz um empreendedor se destacar.",
          "Como trabalhar características como persistência, resiliência e liderança.",
          "Identificação e diagnóstico do seu perfil empreendedor.",
        ],
      },
      {
        titulo: "Módulo 2 - Fundamentos de Gestão de Pequenos Negócios",
        topicos: [
          "Passos para estruturar e formalizar um negócio.",
          "Gestão administrativa e de recursos de forma eficiente.",
          "Reconhecendo os principais desafios e oportunidades no mercado.",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento Estratégico e Financeiro",
        topicos: [
          "Como planejar e acompanhar os resultados do negócio.",
          "Controle de fluxo de caixa e gestão de custos.",
          "Precificação: quanto cobrar por produtos e serviços.",
        ],
      },
      {
        titulo: "Módulo 4 - Marketing e Relacionamento com Clientes",
        topicos: [
          "Estratégias de marketing eficazes e de baixo custo.",
          "Ferramentas digitais para aumentar a visibilidade.",
          "Construindo relacionamentos fortes e duradouros com clientes.",
        ],
      },
      {
        titulo: "Módulo 5 - Inovação e Sustentabilidade nos Negócios",
        topicos: [
          "Como inovar em produtos e processos.",
          "Sustentabilidade como vantagem competitiva.",
          "Estudos de casos reais de negócios inovadores.",
        ],
      },
      {
        titulo: "Módulo 6 - Elaboração do Plano de Negócios",
        topicos: [
          "Estruturando o plano: objetivos, metas e estratégias práticas.",
          "Ferramentas para acompanhar e ajustar o planejamento.",
          "Apresentação de planos de negócios criados pelos participantes.",
        ],
      },
    ],
  },
  {
    id: "4",
    banner: bannerCurta1,
    categoriaCurta: "gestao",
    cardImg: cardGestao1,
    cardDescricao:
      "A arte de vender e negociar exige preparo, estratégias bem definidas e foco em resultados.",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "carminha",
    categoria: "curta",
    nome: "Gestão de Vendas e Negociação com Clientes e Fornecedores",
    carga: "44 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso foi desenvolvido para quem deseja aprimorar suas habilidades em vendas e negociação, com foco na construção de relações comerciais que gerem resultados sólidos. Serão exploradas técnicas práticas de negociação, estratégias para gerenciar clientes e fornecedores, e como alinhar essas práticas ao cenário atual. O objetivo é capacitar os participantes para fechar acordos vantajosos, construir parcerias estratégicas e alcançar resultados que fazem a diferença.",
    oQueLeva:
      "Compreender as principais técnicas de negociação e relacionamento.\n Utilizar ferramentas práticas para organizar e gerenciar clientes e fornecedores.\n Aplicar estratégias para superar desafios e criar conexões de alto impacto.\n Negociar em cenários complexos de forma estratégica e assertiva.\n Utilizar tecnologias, como o CRM, para melhorar resultados e otimizar a gestão.",
    paraQuem:
      "Profissionais de vendas que desejam se destacar em suas áreas.\n Gestores que buscam estratégias eficazes para liderar negociações.\n Empreendedores que querem construir parcerias sólidas e duradouras.\n Líderes empresariais interessados em melhorar a gestão de relacionamentos.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos da Gestão de Vendas e Negociação",
        topicos: [
          "O que é negociação estratégica e como aplicá-la no dia a dia.",
          "Diferentes tipos de negociação e quando utilizá-los.",
          "A relação entre vendas e negociação: construindo parcerias duradouras.",
        ],
      },
      {
        titulo: "Módulo 2 - Técnicas de Negociação e Gestão de Relacionamentos",
        topicos: [
          "Comunicação assertiva e escuta ativa como ferramentas essenciais.",
          "Como construir acordos que sejam vantajosos para todos os lados.",
          "Estratégias práticas para gerenciar clientes e fornecedores com eficiência.",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento Estratégico em Negociações",
        topicos: [
          "Identificação de oportunidades e mapeamento de interesses.",
          "Técnicas de persuasão e influência inspiradas em princípios clássicos.",
          "Como analisar cenários para tomar decisões mais assertivas.",
        ],
      },
      {
        titulo: "Módulo 4 - Ferramentas de Gestão de Clientes e Fornecedores",
        topicos: [
          "Introdução ao CRM e como ele ajuda na gestão de relacionamentos.",
          "Dicas para fidelizar clientes e fortalecer laços com fornecedores.",
          "Exemplos práticos e estudos de caso para aplicar o que foi aprendido.",
        ],
      },
      {
        titulo: "Módulo 5 - Negociações na Era da Indústria 5.0",
        topicos: [
          "Como o foco nas pessoas transforma as negociações.",
          "Tendências e inovações em vendas e gestão de relacionamentos.",
          "Ética e sustentabilidade como diferenciais nas negociações atuais.",
        ],
      },
    ],
  },
  {
    id: "5",
    banner: bannerCurta2,
    categoriaCurta: "gestao",
    cardImg: cardGestao2,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "luciane",
    categoria: "curta",
    nome: "Gestão de Conflitos",
    carga: "30 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso capacita os participantes a compreenderem a dinâmica dos conflitos organizacionais e a desenvolverem habilidades para gerenciá-los de forma eficaz. Serão abordados os diferentes níveis e fontes de conflitos, bem como estratégias e estilos de resolução, promovendo um ambiente de trabalho mais produtivo e harmonioso.",
    oQueLeva:
      "Compreensão sobre as causas, tipos e impactos dos conflitos organizacionais.\n Técnicas para gerenciar conflitos de maneira construtiva e estratégica.\n Desenvolvimento da inteligência emocional para lidar com situações de conflito.\n Habilidades para promover uma comunicação assertiva e eficaz.\n Estratégias para transformar conflitos em oportunidades de crescimento organizacional.",
    paraQuem:
      "Empresas que desejam aprimorar a gestão de conflitos em suas equipes.\n Profissionais que buscam melhorar suas habilidades de mediação e resolução de conflitos.\n Líderes e gestores que desejam criar ambientes de trabalho colaborativos e produtivos.\n Pessoas interessadas em desenvolver competências para lidar com desafios interpessoais no ambiente corporativo.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução aos Conflitos",
        topicos: [
          "Definição e tipos de conflito.",
          "Conflitos intrapessoais, interpessoais, culturais e organizacionais.",
          "Causas comuns de conflitos.",
          "Exercícios práticos.",
        ],
      },
      {
        titulo: "Módulo 2 - Fontes, Tipos e Níveis de Conflitos",
        topicos: [
          "Principais fontes de conflitos pessoais e organizacionais.",
          "Níveis de conflito: latente, percebido, sentido e manifesto.",
          "Classificação dos conflitos: leve, mediano, grave e gravíssimo.",
          "Exercícios práticos.",
        ],
      },
      {
        titulo: "Módulo 3 - Estilos de Gerenciamento de Conflitos",
        topicos: [
          "Competir, colaborar, evitar e acomodar.",
          "Identificação e adaptação de estilos conforme a situação.",
          "Exercícios práticos.",
        ],
      },
      {
        titulo: "Módulo 4 - Conflitos em Ambientes Organizacionais",
        topicos: [
          "Impacto dos conflitos na produtividade e no clima organizacional.",
          "Aspectos positivos e negativos dos conflitos.",
          "Oportunidades de inovação e mudança.",
          "Estudo de caso.",
        ],
      },
      {
        titulo: "Módulo 5 - Estratégias para o Gerenciamento de Conflitos",
        topicos: [
          "Técnicas de negociação e mediação.",
          "Empatia e inteligência emocional na gestão de conflitos.",
          "Comunicação assertiva e feedback construtivo.",
          "TKI - Método para administrar conflitos.",
          "Exercícios práticos.",
        ],
      },
    ],
  },
  {
    id: "6",
    banner: bannerCurta3,
    categoriaCurta: "gestao",
    cardImg: cardGestao3,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Cargos e Salários",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso capacita os participantes a desenvolver, implementar e gerir estruturas de cargos e salários de forma estratégica, alinhando os objetivos da organização às melhores práticas de remuneração e benefícios. Serão abordados conceitos fundamentais, metodologias de descrição e avaliação de cargos, e estratégias de remuneração variável. Esse curso é uma excelente oportunidade para desenvolver competências essenciais na gestão de cargos e salários, promovendo melhorias significativas na retenção de talentos e na eficiência organizacional.",
    oQueLeva:
      "Conhecimento para elaborar uma estrutura de cargos e salários eficiente.\n Ferramentas práticas para descrição e avaliação de cargos.\n Habilidade de análise de mercado para definição de faixas salariais.\n Estratégias para implantar políticas de remuneração e benefícios.",
    paraQuem:
      "Profissionais de Recursos Humanos e Gestão de Pessoas.\n Consultores e analistas de gestão organizacional.\n Gestores de pequenas, médias e grandes empresas.\n Estudantes e recém-formados interessados em atuar na área de remuneração.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos de Cargos e Salários",
        topicos: [
          "Introdução aos conceitos de cargos e salários.",
          "Importância estratégica da gestão de remuneração.",
          "Normas e regulamentações aplicáveis (CLT e legislação trabalhista).",
        ],
      },
      {
        titulo: "Módulo 2 - Descrição e Estruturação de Cargos",
        topicos: [
          "Técnicas para levantamento de informações sobre cargos.",
          "Elaboração de descrições de cargos detalhadas e precisas.",
          "Estruturação hierárquica e organogramas.",
        ],
      },
      {
        titulo: "Módulo 3 - Avaliação e Classificação de Cargos",
        topicos: [
          "Métodos de avaliação de cargos (quantitativos e qualitativos).",
          "Definição de critérios e pesos para avaliação.",
          "Aplicação prática e estudos de caso.",
        ],
      },
      {
        titulo: "Módulo 4 - Pesquisa Salarial e Definição de Faixas",
        topicos: [
          "Métodos para realizar pesquisas salariais no mercado.",
          "Análise comparativa e definição de faixas salariais.",
          "Políticas de remuneração fixa e variável.",
        ],
      },
      {
        titulo:
          "Módulo 5 - Implantação de Política de Remuneração e Benefícios",
        topicos: [
          "Etapas para implantar e comunicar uma política salarial.",
          "Gestão de planos de carreira e retenção de talentos.",
          "Monitoramento e ajustes contínuos.",
        ],
      },
    ],
  },
  {
    id: "7",
    banner: bannerCurta1,
    categoriaCurta: "gestao",
    cardImg: cardGestao1,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Gente e Cultura",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso aborda as etapas e estratégias necessárias para estruturar e implementar uma área de Gente e Cultura nas organizações. Ele foca na valorização do capital humano e na construção de uma cultura organizacional forte, alinhada aos objetivos estratégicos da empresa. Com uma abordagem prática, o curso oferece ferramentas para engajar colaboradores e lideranças, promovendo transformação organizacional e fortalecendo a gestão estratégica de pessoas.",
    oQueLeva:
      "Conhecimento dos pilares fundamentais da área de Gente e Cultura.\n Estratégias para criar e fortalecer a cultura organizacional.\n Ferramentas práticas para alinhar a gestão de pessoas aos objetivos estratégicos da empresa.\n Métodos para engajar colaboradores e lideranças na implementação da área.\n Experiência na elaboração de políticas e programas voltados ao desenvolvimento humano.",
    paraQuem:
      "Profissionais de Recursos Humanos e Desenvolvimento Organizacional.\n Líderes e gestores interessados em estruturar uma área de Gente e Cultura.\n Pequenos e médios empresários que buscam profissionalizar a gestão de pessoas.\n Consultores que atuam em projetos de transformação organizacional.\n Estudantes e recém-formados que desejam ingressar na área de gestão estratégica de pessoas.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos de Gente e Cultura",
        topicos: [
          "Conceitos e importância da área de Gente e Cultura.",
          "Diferenças entre Gente e Cultura e Recursos Humanos tradicional.",
          "Pilares principais: atração, retenção, desenvolvimento e cultura organizacional.",
        ],
      },
      {
        titulo:
          "Módulo 2 - Diagnóstico Organizacional e Planejamento Estratégico",
        topicos: [
          "Ferramentas para análise do ambiente interno e externo.",
          "Alinhamento entre os objetivos organizacionais e a gestão de pessoas.",
          "Como desenvolver um planejamento estratégico para a área de Gente e Cultura.",
        ],
      },
      {
        titulo: "Módulo 3 - Estruturação da Área de Gente e Cultura",
        topicos: [
          "Passo a passo para a criação da área.",
          "Políticas e práticas fundamentais: recrutamento, onboarding e desenvolvimento de talentos.",
          "Estruturação de equipes e definição de papéis.",
        ],
      },
      {
        titulo: "Módulo 4 - Fortalecimento da Cultura Organizacional",
        topicos: [
          "Construção de valores, missão e visão organizacionais.",
          "Estratégias para promover engajamento e senso de pertencimento.",
          "Como medir e transformar a cultura organizacional.",
        ],
      },
      {
        titulo: "Módulo 5 - Sustentação e Melhoria Contínua",
        topicos: [
          "Métricas e indicadores de sucesso para a área de Gente e Cultura.",
          "Planos de ação para a melhoria contínua e inovação.",
          "Casos práticos: exemplos de empresas que se destacam na gestão de Gente e Cultura.",
        ],
      },
    ],
  },
  {
    id: "8",
    banner: bannerCurta2,
    categoriaCurta: "gestao",
    cardImg: cardGestao2,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Treinamento & Desenvolvimento",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso capacita os participantes a planejar, desenvolver e implementar programas de treinamento e desenvolvimento alinhados aos objetivos estratégicos das organizações. Com foco em inovação e metodologias eficazes, o curso aborda desde a análise de necessidades até a avaliação de resultados. O curso oferece as ferramentas e competências essenciais para quem deseja liderar iniciativas de treinamento e desenvolvimento de forma estratégica, promovendo o crescimento individual e organizacional.",
    oQueLeva:
      "Capacidade de identificar lacunas de competências nas equipes.\n Ferramentas para planejar e executar treinamentos eficazes.\n Conhecimento em metodologias de ensino e aprendizagem corporativa.\n Estratégias para avaliar o impacto dos programas de desenvolvimento.\n Certificado de conclusão para potencializar sua atuação no mercado.",
    paraQuem:
      "Profissionais e analistas de Recursos Humanos.\n Consultores e gestores de treinamento e desenvolvimento.\n Educadores corporativos e facilitadores.\n Estudantes de Administração, Psicologia e áreas correlatas.\n Líderes e gestores que desejam desenvolver suas equipes.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos do Treinamento e Desenvolvimento",
        topicos: [
          "O papel estratégico do T&D nas organizações.",
          "Diferença entre treinamento, capacitação e desenvolvimento.",
          "Normas e regulamentações aplicáveis ao T&D.",
        ],
      },
      {
        titulo: "Módulo 2 - Levantamento de Necessidades de Treinamento (LNT)",
        topicos: [
          "Métodos para identificar lacunas de competências.",
          "Análise de necessidades organizacionais, setoriais e individuais.",
          "Ferramentas para diagnóstico assertivo.",
        ],
      },
      {
        titulo: "Módulo 3 - Planejamento e Design de Programas de Treinamento",
        topicos: [
          "Estruturação de objetivos e conteúdos.",
          "Escolha de metodologias e formatos (presencial, remoto, híbrido).",
          "Cronograma e recursos necessários.",
        ],
      },
      {
        titulo: "Módulo 4 - Execução e Condução de Treinamentos",
        topicos: [
          "Técnicas de facilitação e engajamento.",
          "Uso de tecnologias e ferramentas interativas.",
          "Dinâmicas de grupo e estudos de caso.",
        ],
      },
      {
        titulo: "Módulo 5 - Avaliação e Impacto dos Programas de T&D",
        topicos: [
          "Métodos de avaliação de resultados (ROI e outros indicadores).",
          "Feedbacks dos participantes e melhoria contínua.",
          "Relatórios e apresentação de resultados para a liderança.",
        ],
      },
    ],
  },
  {
    id: "9",
    banner: bannerCurta3,
    categoriaCurta: "gestao",
    cardImg: cardGestao3,
    cardDescricao:
      "A excelência no atendimento é a combinação de conhecimentos, técnicas, comunicação eficaz, empatia e fidelização de clientes.",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Qualidade no Atendimento: Excelência, Inovação e Resultados",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso de Qualidade no Atendimento: Excelência, Inovação e Resultados, capacita os participantes a oferecerem uma experiência positiva e memorável ao cliente. Focado em técnicas de comunicação, empatia, resolução de conflitos e gestão de expectativas, o curso é uma ferramenta essencial para quem busca excelência no atendimento e fidelização de clientes.",
    oQueLeva:
      "Habilidades práticas para melhorar o relacionamento com o cliente.\n Técnicas de comunicação eficiente e empática.\n Estratégias para lidar com situações desafiadoras e resolver conflitos.\n Estratégias para avaliar o impacto dos programas de desenvolvimento.\n Melhoria na percepção de qualidade do serviço oferecido.",
    paraQuem:
      "Profissionais de atendimento ao cliente.\n Gerentes e supervisores que lideram equipes de atendimento.\n Empreendedores que buscam melhorar a experiência de seus clientes.\n Profissionais de vendas e suporte técnico.\n Estudantes interessados em ingressar no mercado de atendimento.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução à Qualidade no Atendimento",
        topicos: [
          "Conceito de qualidade no atendimento.",
          "Importância da experiência do cliente para o sucesso do negócio.",
          "Princípios básicos de um bom atendimento.",
        ],
      },
      {
        titulo: "Módulo 2 - Comunicação e Empatia no Atendimento",
        topicos: [
          "Técnicas de comunicação assertiva.",
          "Escuta ativa e identificação de necessidades do cliente.",
          "Prática da empatia como diferencial no atendimento.",
        ],
      },
      {
        titulo: "Módulo 3 - Resolução de Conflitos e Situações Desafiadoras",
        topicos: [
          "Estratégias para lidar com reclamações.",
          "Gestão de conflitos com clientes difíceis.",
          "Transformando críticas em oportunidades.",
        ],
      },
      {
        titulo: "Módulo 4 - Fidelização e Encantamento do Cliente",
        topicos: [
          "Superação das expectativas do cliente.",
          "A importância do feedback no atendimento.",
          "Técnicas para fidelizar e encantar clientes.",
        ],
      },
      {
        titulo: "Módulo 5 - Planejamento e Gestão da Qualidade no Atendimento",
        topicos: [
          "Ferramentas para mensurar a qualidade do atendimento.",
          "Cultura de melhoria contínua no ambiente de trabalho.",
          "Estudo de casos e implementação de boas práticas.",
        ],
      },
    ],
  },
  {
    id: "10",
    banner: bannerCurta1,
    categoriaCurta: "gestao",
    cardImg: cardGestao1,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Gestão de Riscos Psicossociais e Conformidade com a NR-1",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "Este curso capacita os participantes a compreender e aplicar os requisitos da NR-1 para a gestão de riscos psicossociais no ambiente de trabalho. Com foco na saúde mental, segurança ocupacional e melhoria das condições laborais, o curso apresenta estratégias para identificar, gerenciar e monitorar riscos como assédio moral, assédio sexual, sobrecarga de trabalho e outros fatores que impactam o bem-estar e a produtividade dos colaboradores.",
    oQueLeva:
      "Conhecimento detalhado sobre a NR-1 e seus impactos organizacionais.\n Ferramentas práticas para a implementação do Programa de Gerenciamento de Riscos (PGR).\n Estratégias para prevenir e gerenciar riscos psicossociais no ambiente de trabalho.\n Métodos eficazes para engajar a liderança e garantir conformidade legal.\n Capacitação para promover um ambiente de trabalho seguro e saudável.",
    paraQuem:
      "Profissionais de Recursos Humanos e Segurança do Trabalho.\n Líderes e gestores que desejam melhorar as condições de trabalho.\n Psicólogos organizacionais e consultores de saúde ocupacional.\n Advogados e profissionais da área jurídica trabalhista.\n Pequenos e médios empresários que buscam adequação à NR-1.",
    modulos: [
      {
        titulo:
          "Módulo 1 - Introdução à NR-1 e sua Relevância no Contexto Atual",
        topicos: [
          "História e objetivos da NR-1.",
          "Impactos das atualizações da norma.",
          "Relação entre saúde mental e segurança ocupacional.",
        ],
      },
      {
        titulo:
          "Módulo 2 - Identificação e Classificação de Riscos Psicossociais",
        topicos: [
          "Conceitos de assédio moral, assédio sexual e violência no trabalho.",
          "Sobrecarga de trabalho e falta de apoio social.",
          "Métodos de avaliação e identificação de riscos.",
        ],
      },
      {
        titulo:
          "Módulo 3 - Implementação do Programa de Gerenciamento de Riscos (PGR)",
        topicos: [
          "Estrutura e etapas do PGR.",
          "Elaboração de documentos e relatórios.",
          "Monitoramento e revisão contínua dos riscos.",
        ],
      },
      {
        titulo: "Módulo 4 - Capacitação e Envolvimento da Alta Liderança",
        topicos: [
          "Treinamento de funcionários para identificação e gestão de riscos.",
          "Estratégias de comunicação com a liderança.",
          "Criação de uma cultura organizacional de segurança e bem-estar.",
        ],
      },
      {
        titulo: "Módulo 5 - Garantia de Conformidade Legal e Melhoria Contínua",
        topicos: [
          "Práticas para auditorias e inspeções.",
          "Indicadores de desempenho em saúde e segurança ocupacional.",
          "Planos de ação para redução do adoecimento mental e melhoria contínua.",
        ],
      },
    ],
  },
  {
    id: "11",
    banner: bannerCurta2,
    categoriaCurta: "gestao",
    cardImg: cardGestao2,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "maria",
    categoria: "curta",
    nome: "Analista de Recrutamento e Seleção",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso capacita os participantes a planejar e executar processos de recrutamento e seleção estratégicos, utilizando ferramentas modernas e técnicas baseadas em competências para identificar e contratar os melhores talentos. Serão abordados conceitos teóricos e atividades práticas para aprimorar a tomada de decisão na área de seleção. Este curso é ideal para quem busca excelência no processo de seleção e deseja contribuir diretamente para o desenvolvimento e sucesso organizacional por meio da contratação de talentos estratégicos.",
    oQueLeva:
      "Domínio das etapas do processo de recrutamento e seleção.\n Técnicas para análise de perfis e avaliação por competências.\n Ferramentas práticas para conduzir entrevistas e dinâmicas.\n Capacidade de identificar talentos alinhados à cultura organizacional.",
    paraQuem:
      "Profissionais e analistas de Recursos Humanos.\n Gestores de equipes e líderes empresariais.\n Estudantes e recém-formados em Psicologia, Administração ou áreas correlatas.\n Empreendedores que desejam contratar profissionais adequados ao seu negócio.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos do Recrutamento e Seleção",
        topicos: [
          "Conceito e importância estratégica do recrutamento e seleção.",
          "Tipos de recrutamento (interno, externo, misto).",
          "Alinhamento do processo seletivo com a estratégia organizacional.",
        ],
      },
      {
        titulo: "Módulo 2 - Planejamento e Atração de Talentos",
        topicos: [
          "Elaboração de descrições de vagas e perfis desejados.",
          "Estratégias de divulgação e atração de candidatos.",
          "Uso de tecnologias e plataformas para recrutamento.",
        ],
      },
      {
        titulo: "Módulo 3 - Avaliação por Competências",
        topicos: [
          "Identificação de competências técnicas e comportamentais.",
          "Metodologias para avaliação de candidatos.",
          "Aplicação prática de testes e dinâmicas.",
        ],
      },
      {
        titulo: "Módulo 4 - Entrevistas e Técnicas Avançadas de Seleção",
        topicos: [
          "Estruturação e condução de entrevistas assertivas.",
          "Perguntas situacionais e comportamentais.",
          "Análise de respostas e tomada de decisão baseada em dados.",
        ],
      },
      {
        titulo: "Módulo 5 - Integração e Retenção de Talentos",
        topicos: [
          "Processo de onboarding eficiente.",
          "Estratégias para promover engajamento e retenção.",
          "Alinhamento de expectativas e acompanhamento inicial.",
        ],
      },
    ],
  },
  {
    id: "12",
    banner: bannerCurta3,
    categoriaCurta: "gestao",
    cardImg: cardGestao3,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "regina",
    categoria: "curta",
    nome: "Liderança em Ação",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso é destinado a profissionais de diversas áreas que desejam desenvolver competências técnicas e comportamentais para liderar equipes com eficácia. Indicado para aqueles que ainda não ocupam cargos de liderança, mas buscam crescimento profissional e novos desafios. A abordagem prática capacita os participantes para os desafios da liderança moderna, oferecendo ferramentas para gerenciar equipes, promover engajamento e alcançar resultados consistentes.",
    oQueLeva:
      "Assumir cargos de liderança com confiança e base técnica sólida.\n Utilizar estratégias eficazes de gestão de equipes.\n Desenvolver habilidades para resolver conflitos e inspirar colaboradores.\n Compreender os papéis e desafios do líder em diferentes contextos.\n Aprimorar comunicação assertiva, inteligência emocional e tomada de decisão.\n Construir um estilo de liderança autêntico e eficaz.",
    paraQuem:
      "Profissionais que desejam se preparar para cargos de liderança.\n Pessoas em busca de crescimento e ascensão profissional.\n Indivíduos que reconhecem a importância do desenvolvimento técnico e comportamental.\n Profissionais que buscam uma abordagem prática para liderar e impulsionar resultados.",
    modulos: [
      {
        titulo: "Módulo 1 - Introdução à Liderança",
        topicos: [
          "O que é liderança.",
          "Diferenças entre líder e chefe.",
          "Características de um líder eficaz.",
          "Desafios da liderança em ambientes diversos.",
          "Liderança no século XXI.",
        ],
      },
      {
        titulo: "Módulo 2 - Autoconhecimento e Desenvolvimento Pessoal",
        topicos: [
          "A importância do autoconhecimento na liderança.",
          "Identificação de pontos fortes e áreas de melhoria.",
          "Estilos de liderança.",
          "Feedback como ferramenta de desenvolvimento pessoal.",
          "Planejamento de desenvolvimento pessoal.",
        ],
      },
      {
        titulo: "Módulo 3 -  Comunicação e Relacionamento Interpessoal",
        topicos: [
          "A comunicação como pilar da liderança.",
          "Técnicas de comunicação eficaz.",
          "Gestão de conflitos.",
          "Construção de relacionamentos saudáveis e de confiança.",
          "Comunicação não-verbal e paraverbal.",
          "Comunicação em cenários diversos.",
        ],
      },
      {
        titulo: "Módulo 4 - Gestão de Equipes e Delegação",
        topicos: [
          "Fundamentos da gestão de equipes.",
          "Motivação e engajamento.",
          "Delegação de tarefas: planejamento e execução.",
          "Liderança em equipes diversas.",
          "Gestão de conflitos em equipe.",
        ],
      },
      {
        titulo: "Módulo 5 - Inteligência Emocional e Resiliência",
        topicos: [
          "Introdução à inteligência emocional (IE).",
          "Autogestão emocional e liderança.",
          "Empatia e conexão humana.",
          "Construção da resiliência.",
          "Gerenciamento de estresse e bem-estar.",
          "Aplicação prática da inteligência emocional na liderança.",
        ],
      },
      {
        titulo: "Módulo 6 - Liderança Prática",
        topicos: [
          "Estudos de caso reais: solucionando desafios de liderança.",
          "Simulações e dinâmicas práticas.",
          "Elaboração de um plano de ação pessoal para assumir cargos de liderança.",
        ],
      },
    ],
  },
  {
    id: "13",
    banner: bannerCurta3,
    categoriaCurta: "gestao",
    cardImg: cardGestao3,
    cardDescricao: "teste",
    cardTag1: "CURTA-DURAÇÃO",
    cardTag2: "EAD",
    cardTag3: "PRESENCIAL",
    cardTag4: "GESTÃO",
    variant: "sergiolopes",
    categoria: "curta",
    nome: "Analista Lean: Eficiência e Melhoria Contínua",
    carga: "40 horas",
    modalidade: "Aulas remotas ao vivo",
    data: "Consulte-nos para mais informações",
    inscricao: "De 03 de fevereiro a 03 de março de 2025",
    sobre:
      "O curso é um programa prático e teórico que capacita profissionais a aplicarem os princípios Lean para melhorar a eficiência operacional, reduzir desperdícios e promover a melhoria contínua nos processos organizacionais. Focado em ferramentas práticas e estudos de caso reais, o curso oferece as competências necessárias para transformar os desafios operacionais em oportunidades de inovação e resultados.",
    oQueLeva:
      "Habilidade de identificar e eliminar desperdícios nos processos.\n Conhecimento sobre ferramentas Lean, como Kaizen, 5S, Kanban, e Value Stream Mapping (VSM).\n Capacidade de liderar projetos de melhoria contínua.\n Certificação reconhecida como Analista Lean.\n Networking com profissionais de diferentes setores.",
    paraQuem:
      "Profissionais das áreas de Administração, Engenharia de Produção, Logística, Qualidade, Tecnologia da Informação, Saúde, Educação, e áreas ligadas a processos de gestão e operações que buscam aprimorar a eficiência de processos em suas organizações.\n Líderes e gestores interessados em implementar práticas Lean.\n Estudantes e recém-formados que desejam se especializar em gestão de processos.\n Empreendedores que desejam otimizar operações de negócios.",
    modulos: [
      {
        titulo: "Módulo 1 - Fundamentos do Lean Thinking",
        topicos: [
          "Introdução ao pensamento Lean.",
          "Princípios e objetivos do Lean.",
          "Identificação de desperdícios (os 8 desperdícios do Lean).",
        ],
      },
      {
        titulo: "Módulo 2 - Mapeamento de Fluxo de Valor (VSM)",
        topicos: [
          "Conceitos básicos de VSM.",
          "Construção do mapa de estado atual.",
          "Desenho do mapa de estado futuro.",
          "Identificação de gargalos e oportunidades de melhoria.",
        ],
      },
      {
        titulo: "Módulo 3 -  Ferramentas Lean para Operações e Gestão",
        topicos: [
          "Kaizen: Ciclo PDCA para melhoria contínua.",
          "5S: Organização e padronização de espaços de trabalho.",
          "Kanban: Gestão visual e controle de fluxo.",
          "Poka-Yoke: Prevenção de erros.",
        ],
      },
      {
        titulo: "Módulo 4 - Liderança Lean e Gestão de Equipes",
        topicos: [
          "Como engajar times na filosofia Lean.",
          "Comunicação eficaz em projetos de melhoria.",
          "Indicadores de desempenho e métricas Lean (KPIs).",
        ],
      },
      {
        titulo: "Módulo 5 - Projetos Lean e Estudos de Caso",
        topicos: [
          "Planejamento e execução de projetos Lean.",
          "Estudos de caso: Aplicações práticas em diferentes indústrias.",
          "Elaboração de um plano de ação Lean para a sua organização.",
        ],
      },
    ],
  },

  //CURSOS MBA---------------------------------------------------
  {
    id: "13",
    variant: "ademar",
    mbaLink: "https://www.fecap.br/mba/mba-accounting/",
    cardImg: cardGestao1,
    cardDescricao:
      "O MBA Accounting da FECAP desenvolve habilidades de liderança nas áreas contábil e financeira, com uma matriz curricular flexível. Oferece condições especiais e conclusão acelerada para formados em áreas específicas pela FECAP.",
    cardTag1: "MBA",
    categoria: "mba",
    nome: "MBA ACCOUNTING",
    carga: "480 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de MBA Accounting da FECAP desenvolve habilidades de gestão e pensamento crítico para assumir posições de liderança na área contábil, administrativa e financeira. O conteúdo do curso oferece amplitude e especialização e fortalece a visão holística. A matriz curricular permite aperfeiçoamento sob medida, pois é o aluno quem escolhe parte das disciplinas em busca de uma formação única totalmente alinhada a suas necessidades. Condições especiais para formados no curso de Contabilidade Empresarial com IFRS e USGAAP, Controladoria, Finanças Corporativas ou Gestão tributária pela FECAP, além de dispensa de disciplinas e conclusão na metade do tempo.",
    paraQuem:
      "O MBA Accounting é voltado para gestores ou futuros gestores com experiência profissional superior a 3 anos. São profissionais que buscam o aperfeiçoamento contínuo para enfrentar os desafios das organizações e assumir posições de destaque no mercado de trabalho. Os cursos de pós-graduação da FECAP permitem aperfeiçoamento profissional e desenvolvimento pessoal, capacitando o aluno para atuar com integridade em uma área específica no mercado de trabalho.",
  },
  {
    id: "14",
    variant: "jose",
    mbaLink: "https://www.fecap.br/mba/mba-em-agribusiness-marketing-commerce/",
    cardImg: cardGestao2,
    cardDescricao:
      "O MBA em Agribusiness é voltado para empreendedores e profissionais de diversas áreas, com foco na gestão do agronegócio, abordando comércio de alimentos, fibras, agroenergia e biocomércio.",
    cardTag1: "MBA",
    categoria: "mba",
    nome: "MBA em Agribusiness, Marketing & Commerce",
    carga: "380 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "Empreendedores, profissionais que já atuam, ou não, em algum segmento do agronegócio, alunos formados em diversas áreas acadêmicas objetivando canalizar seu foco empresarial, carreiras, dentro do universo do agronegócio em todas as suas possibilidades e ao mesmo tempo obter o “estado da arte da gestão do complexo do agronegócio “, com ênfase nas políticas e práticas do comércio de alimentos, fibras, rações, agroenergia e o biocomércio.",
    paraQuem:
      "Preparado com as competências necessárias para ser um gestor em organizações do complexo do agronegócio, no antes, dentro ou pós porteira das fazendas, da mesma forma no cooperativismo, associativismo, ONGs, mídia, nas funções públicas e/ou privadas, em organizações da sociedade civil , com valor agregado de práticas de comércio para aplicação em iniciativas próprias empreendedoras e/ou desenvolvimento de suas carreiras.",
  },
  {
    id: "15",
    variant: "roberto",
    mbaLink: "https://www.fecap.br/mba/mba-em-gestao-de-negocios/",
    cardImg: cardGestao3,
    cardDescricao:
      "O MBA em Gestão de Negócios prepara alunos para cargos de gestão e direção, com ênfase em práticas empresariais. É ideal para quem busca empreender ou qualificar sua carreira em administração, com certificação da ANAMBA.",
    cardTag1: "MBA",
    categoria: "mba",
    nome: "MBA em Gestão de Negócios",
    carga: "480 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de MBA em Gestão de Negócios capacita o aluno para ocupar cargos de gestão e direção de empresas, por meio de conhecimento teórico e prático. A matriz do curso também foi desenhada para atender a empreendedores que gerenciam seus próprios negócios. As disciplinas oferecem aos participantes conhecimentos sólidos em gestão empresarial, sendo recomendadas para quem não teve formação anterior em administração de empresas. O MBA em Gestão de Negócios é certificado pela Associação Nacional de MBA (ANAMBA) e sua matriz desperta nos alunos uma veia empreendedora, qualificando-os não só profissionalmente, mas também agregando no desenvolvimento pessoal.",
    paraQuem:
      "Os cursos de pós-graduação da FECAP permitem aperfeiçoamento profissional e desenvolvimento pessoal, capacitando o aluno para atuar com integridade em uma área específica no mercado de trabalho. Além disso, nossos cursos de especialização com metodologia empreendedora foram destaques no Guia do Estudante e classificados entre os melhores do Brasil, pela revista Você S/A.",
  },
  {
    id: "16",
    variant: "sergio",
    mbaLink: "https://www.fecap.br/mba/mba-em-gestao-de-riscos-e-compliance/",
    cardImg: cardGestao1,
    cardDescricao:
      "O MBA em Gestão de Riscos e Compliance oferece conhecimentos em gestão de riscos, controles internos e compliance, proporcionando uma formação sólida e multidisciplinar para os alunos.",
    cardTag1: "MBA",
    categoria: "mba",
    nome: "MBA em Gestão de Riscos e Compliance",
    carga: "480 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de MBA em Gestão de Riscos e Compliance proporciona aos alunos conhecimentos sólidos sobre gestão de riscos corporativos, controles internos e compliance. Os alunos terão acesso a um conjunto de temas multidisciplinares, que fornecem uma consistente formação em gestão de riscos corporativos.",
    paraQuem:
      "A infraestrutura da FECAP atende a todas as necessidades do aluno durante o curso, com laboratório de informática de alta tecnologia, salas de aula equipadas e uma biblioteca com acervo de mais de 60 mil exemplares.",
  },
  {
    id: "17",
    variant: "marcelo",
    mbaLink: "https://www.fecap.br/mba/mba-executivo-em-financas/",
    cardImg: cardGestao2,
    cardDescricao:
      "O MBA Executivo em Finanças da FECAP prepara o aluno para cargos de direção financeira, com foco teórico e prático, oferecendo um aprofundamento sólido em finanças e formando especialistas na área.",
    cardTag1: "MBA",
    categoria: "mba",
    nome: "MBA Executivo em Finanças",
    carga: "480 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso de MBA Executivo em Finanças da FECAP capacita o aluno para assumir cargos de direção de alto nível na área financeira, por meio de atividades teóricas e práticas das funções empresariais e do ambiente de negócios. Além disso, o curso oferece amplo e sólido aprofundamento em finanças, formando profissionais especialistas na área.",
    paraQuem:
      "Os cursos de pós-graduação da FECAP permitem aperfeiçoamento, capacitando o aluno para atuar com integridade em uma área específica. Além disso, nossos cursos de especialização foram destaque no Guia do Estudante e classificados entre os melhores do Brasil, pela revista Você S/A.",
  },
]
