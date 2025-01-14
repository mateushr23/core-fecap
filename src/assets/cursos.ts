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
  {
    id: "1",
    variant: "luciano",
    categoria: "curta",
    nome: "Saúde Mental do colaborador: o bem mais precioso, para as áreas de RH/Saúde Ocupacional",
    carga: "16 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre:
      "O curso visa demonstrar a importância da saúde mental e implementar práticas que promovam o bem-estar no ambiente de trabalho. Além da Organização cumprir sua responsabilidade social, os colaboradores que têm sua saúde mental bem cuidada, tendem a ser mais produtivos, criativos e engajados em suas atividades, reduzindo o absenteísmo e melhorando o clima organizacional. Oferece informações sobre a gestão do estresse, identificação de sinais de conflitos na saúde mental, estratégias de autocuidado e ferramentas para um ambiente de trabalho saudável.",
    paraQuem:
      "PJ - Indicado para Organizações públicas ou privadas; Ongs, etc. \n PF - Para profissionais preocupados com a qualidade de sua saúde mental.",
    modulos: [
      {
        titulo: "Módulo 1 - Saúde Mental",
        topicos: [
          "Conceito de Saúde;",
          "Saúde física, mental, emocional, social, espiritual e ocupacional;",
          "Definição de saúde mental e sua importância no ambiente de trabalho;",
          "Fatores que influenciam a saúde mental dos trabalhadores;",
          "Identificação de Sinais e Sintomas em si mesmo e nos colegas;",
          "Impactos da Saúde Mental no Trabalho;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 2 - Estratégias de Prevenção - Técnicas de autocuidado",
        topicos: [
          "A importância da autoestima como ferramenta de autocuidado;",
          "Indicadores de autoestima alta e baixa;",
          "Dicas para melhorar a autoestima;",
          "Autocompaixão;",
          "Autopercepção da felicidade;",
          "Autocuidado no ambiente de trabalho;",
          "Exercícios.",
        ],
      },
      {
        titulo:
          "Módulo 3 - Estratégias de Prevenção - Gerenciamento do estresse",
        topicos: [
          "Definições do estresse;",
          "Causas do estresse;",
          "Sinais e sintomas físicos, cognitivos e emocionais;",
          "Fases do estresse;",
          "Estresse positivo e estresse negativo;",
          "Estresse pessoal e estresse profissional;",
          "Competências para gestão do estresse;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 4 - Ambiente de Trabalho Saudável",
        topicos: [
          "Definição e importância;",
          "Benefícios para a empresa e para os colaboradores;",
          "Criação de um ambiente que favoreça a saúde mental;",
          "Ambiente inclusivo para todos os colaboradores;",
          "Trabalho em equipe;",
          "Competência interpessoal;",
          "Gerenciamento de conflitos;",
          "O poder da empatia;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 5 - Comunicação como ferramenta de suporte e prevenção",
        topicos: [
          "Conceito de comunicação;",
          "Técnicas de comunicação;",
          "Comunicação assertiva;",
          "Respostas passivas, assertivas e agressivas;",
          "Expressão de sentimentos;",
          "Importância da observação e do diálogo;",
          "Técnicas de feedback positivo e motivacional.",
          "Estudo de caso.",
        ],
      },
    ],
  },
  {
    id: "2",
    variant: "jose",
    categoria: "curta",
    nome: "teste",
    carga: "16 horas",
    data: "De 10 a 14 de Março de 2025",
    sobre: "teste",
    paraQuem:
      "PJ - Indicado para Organizações públicas ou privadas; Ongs, etc. \n PF - Para profissionais preocupados com a qualidade de sua saúde mental.",
    modulos: [
      {
        titulo: "Módulo 1 - Saúde Mental",
        topicos: [
          "Conceito de Saúde;",
          "Saúde física, mental, emocional, social, espiritual e ocupacional;",
          "Definição de saúde mental e sua importância no ambiente de trabalho;",
          "Fatores que influenciam a saúde mental dos trabalhadores;",
          "Identificação de Sinais e Sintomas em si mesmo e nos colegas;",
          "Impactos da Saúde Mental no Trabalho;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 2 - Estratégias de Prevenção - Técnicas de autocuidado",
        topicos: [
          "A importância da autoestima como ferramenta de autocuidado;",
          "Indicadores de autoestima alta e baixa;",
          "Dicas para melhorar a autoestima;",
          "Autocompaixão;",
          "Autopercepção da felicidade;",
          "Autocuidado no ambiente de trabalho;",
          "Exercícios.",
        ],
      },
      {
        titulo:
          "Módulo 3 - Estratégias de Prevenção - Gerenciamento do estresse",
        topicos: [
          "Definições do estresse;",
          "Causas do estresse;",
          "Sinais e sintomas físicos, cognitivos e emocionais;",
          "Fases do estresse;",
          "Estresse positivo e estresse negativo;",
          "Estresse pessoal e estresse profissional;",
          "Competências para gestão do estresse;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 4 - Ambiente de Trabalho Saudável",
        topicos: [
          "Definição e importância;",
          "Benefícios para a empresa e para os colaboradores;",
          "Criação de um ambiente que favoreça a saúde mental;",
          "Ambiente inclusivo para todos os colaboradores;",
          "Trabalho em equipe;",
          "Competência interpessoal;",
          "Gerenciamento de conflitos;",
          "O poder da empatia;",
          "Exercícios.",
        ],
      },
      {
        titulo: "Módulo 5 - Comunicação como ferramenta de suporte e prevenção",
        topicos: [
          "Conceito de comunicação;",
          "Técnicas de comunicação;",
          "Comunicação assertiva;",
          "Respostas passivas, assertivas e agressivas;",
          "Expressão de sentimentos;",
          "Importância da observação e do diálogo;",
          "Técnicas de feedback positivo e motivacional.",
          "Estudo de caso.",
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
