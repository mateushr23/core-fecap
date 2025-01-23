import lucianoProfessor from "../assets/images/luciano-professor.png"
import joseProfessor from "../assets/images/jose-professor.png"
import ademarProfessor from "../assets/images/ademar-professor.png"
import marceloProfessor from "../assets/images/marcelo-professor.png"
import sergioProfessor from "../assets/images/sergio-professor.png"
import robertoProfessor from "../assets/images/roberto-professor.png"
import renatoProfessor from "../assets/images/renato-professor.png"
import carminhaProfessor from "../assets/images/carminha-professor.png"
import lucianeProfessor from "../assets/images/luciane-professor.png"
import mariaProfessor from "../assets/images/maria-professor.png"
import reginaProfessor from "../assets/images/regina-professor.png"
import sergiolopesProfessor from "../assets/images/sergiolopes-professor.png"

export interface Data {
  titulo: string
  img: string
  variant: string
  nome: string
  descricao: string
  cores: {
    div: string
    background: string
    text: string
  }
  lattes?: string
  linkedin?: string
}

export const professorData: Data[] = [
  {
    titulo: "PROFESSORES",
    img: lucianoProfessor,
    variant: "luciano",
    nome: "Prof. Me. Luciano Nurnberg Peres",
    descricao:
      "Doutorando em Controladoria e Contabilidade na FEA-USP e membro do Centro de Estudos em Contabilidade e Governo (ContGov) da FEA-USP. Possui graduação em Ciências Contábeis pela Universidade Estadual de Maringá (2014), graduação em Física pela Universidade Estadual de Maringá (2007) e mestrado em Controladoria e Contabilidade pela Universidade de São Paulo (2017). Atuou como empenhador na Prefeitura de Campo Mourão, auxiliar administrativo na Justiça Federal de Primeiro Grau no Paraná (2013) e na auditoria do Ministério Público do Estado do Paraná (2012/2013). De 2011 a 2016, atuou em projetos de pesquisa e extensão. Em 2017 e 2018 atuou como professor de Contabilidade Pública, tendo lecionado na Faculdade de Jandaia do Sul (FAFIJAN) e na Faculdade Maringá. Nos anos de 2017 a 2019, participou como avaliador de trabalhos do Congresso USP de Contabilidade. Professor dos cursos de Gestão Pública em EAD da FECAP.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    linkedin: "",
  },
  {
    titulo: "PROFESSOR",
    img: renatoProfessor,
    variant: "renato",
    nome: "Prof. Renato Binoto",
    descricao:
      "Com um perfil disruptivo e empreendedor, possui mais de 16 anos de experiência em Supply-Chain e Transformação digital, atuando em projetos e redesenho de processos, fazendo uso das melhores práticas de Lean e tecnologia. Já passou por Deloitte, Oracle, GS1, DHL, atualmente, diretor de negócios outsourcing em grandes players do mercado. É Docente de MBA em escolas renomadas em todo o Brasil e autor de 5 livros na área e conteudista de revistas. Vice-campeão do Prêmio BBM Mundo Logística, categoria Inovação em Supply Chain. Somado a seu insigne histórico profissional, Renato construiu uma consistente carreira acadêmica, sendo mestre em Engenharia de Transporte, MBA em Gestão de Negócios pela USP, segundo MBA em Finanças e controladoria, Black Belt, Scrum master e Graduado em Logística pela Fatec -Jaú",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    linkedin: "https://www.linkedin.com/in/renato-binoto-b2838224/",
  },
  {
    titulo: "PROFESSORA",
    img: carminhaProfessor,
    variant: "carminha",
    nome: "Profa. Me. Carminha Oliveira",
    descricao:
      "Mestre em Governança Corporativa e Empreendedorismo. Pós em Marketing pela ESPM e pela PUC em Desenvolvimento Local Integrado e Sustentável, graduada em Comunicação Social-Publicidade e Propaganda. Consultora Organizacional, docente de cursos de Pós-Graduação-MBA. Autora, pesquisadora e mentora. Diretora do Programa de TV Dica de Negócios e Apresentadora de Podcasts. Treinou mais de 40.000 pessoas em gestão de negócios. Conselheira de Varejo, da Associação comercial de São Paulo Mentora do Projeto Mulheres do Brasil. Coordenadora Grupo de Trabalho Empreendedorismo e Inovação ABMES. Especialista em despertar comportamentos empreendedores para alavancar carreiras e negócios, com excelência e alto impacto.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    linkedin: "https://www.linkedin.com/in/carminhaoliveira",
  },
  {
    titulo: "PROFESSORA",
    img: lucianeProfessor,
    variant: "luciane",
    nome: "Profa. Luciane Paula Ruotolo Ruis",
    descricao:
      "Profissional de Recursos Humanos com 25 anos de experiência, incluindo 10 anos em posições estratégicas no RH de grandes empresas como Ford Motor Company, Grupo Pão de Açúcar e Telefônica. Especializada em Gerenciamento Estratégico em Recursos Humanos pelo Centro Universitário das Faculdades Metropolitanas Unidas, com habilitação em Docência no Ensino Superior, graduação em Serviço Social pela mesma instituição.\n Atualmente, é coordenadora e professora de pós-graduação Lato Sensu no curso Serviço Social na Atenção Domiciliar - Home Care (EAD) da FACEC - Faculdade de Ciência e Educação do Caparaó. Atua também como Consultora de RH na empresa RELUZ - Consultoria e Treinamento Ltda, desempenhando atividades como recrutamento e seleção, treinamento e desenvolvimento, implantação de programas de RH, gestão de carreira, realização de palestras para SIPAT, consultoria empresarial para desenvolvimento de lideranças, gestão de equipes, rotinas administrativas e outros temas relacionados à área de Recursos Humanos. Atua capacitando profissionais e desenvolvendo equipes.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    lattes: "http://lattes.cnpq.br/3852817942810026",
  },
  {
    titulo: "PROFESSORA",
    img: mariaProfessor,
    variant: "maria",
    nome: "Profa. Me. Maria Luiza Marques de Abrantes",
    descricao:
      "Psicóloga, mestre em administração e valores humanos, especialista em administração de recursos humanos, especialista em Docência e Metodologias do Ensino Superior. Atua na formação de lideranças organizacionais desde a década de 80 em empresas públicas, privadas, terceiro setor e cooperativas; capacita gestores de R.H dentro da visão sistêmica e holística de seu trabalho junto às demais áreas de negócio e junto à governança, com conhecimentos atualizados e habilidades demandadas pelo mercado, como atuação estratégica e atualizada com os ODS, ESG, ISOs, Prêmios e demais reconhecimentos aos quais a empresa se candidata. Prepara o R.H para ser protagonista das mudanças organizacionais.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    lattes: "http://lattes.cnpq.br/3744052851642739",
  },
  {
    titulo: "PROFESSORA",
    img: reginaProfessor,
    variant: "regina",
    nome: "Profa. Regina Célia Valério Alvares da Silva",
    descricao:
      "Graduada em Serviço Social, Pós-Graduada em Gerenciamento Estratégico em Recursos Humanos e Pós-Graduada em Docência para o Ensino Superior, possui ampla experiência em Educação financeira, e Recursos Humanos. Atua como docente em cursos de qualificação profissional e gestão empresarial, abordando conteúdos como Contabilidade Básica, Técnicas de apresentação e de negociação, Gestão de Pessoas, rotinas administrativas, planejamento de eventos, ferramentas de avaliação de desempenho, excelência no atendimento ao cliente, departamento pessoal, comunicação empresarial, cultura organizacional, gestão de relacionamento interpessoal, gestão de conflitos e desenvolvimento de lideranças.\n É consultora comportamental com mais de 20.000 horas de avaliação de perfil profissional e especialista em psicodrama aplicado, coordenando grupos de trabalho em ONGs para o desenvolvimento de equipes e lideranças.\n Também atua como docente em cursos de pós-graduação na área de Serviço Social, além de ser Capacitadora nas áreas pública, privada e no terceiro setor, desenvolvendo temas diversos voltados para a melhoria organizacional e individual.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
    lattes: "http://lattes.cnpq.br/7338111012005484",
  },
  {
    titulo: "PROFESSOR",
    img: sergiolopesProfessor,
    variant: "sergiolopes",
    nome: "Prof. Me. Sérgio Lopes",
    descricao:
      "Mestre e graduado em Administração. Experiência profissional de 57 anos adquirida em empresas de diferentes portes e segmentos econômicos. Nos últimos 39 anos tem atuado ativamente como Consultor Empresarial, Docente em cursos de Graduação e de Pós-graduação/MBA e Instrutor em Cursos de Educação Corporativa, lecionando em diversos Estados do País. Conteudista e tutor de disciplinas de Cursos de Graduação e PG, modalidade EAD. Atua, também, como Palestrante, Pesquisador e Articulista e possui mais de 100 (cem) artigos publicados, em jornais, revistas e sites da Internet. Participa de projetos de voluntariado junto a Entidades de Classe. Suas áreas de atuação são Planejamento e Gestão Empresarial, Mudança e Inovação Organizacional, Qualidade, Recursos Humanos e LGPD. É membro do GEES/CRASP - Grupo de Excelência em Ética e Sustentabilidade desde 2007.",
    cores: {
      div: "bg-blue300",
      background: "bg-white100",
      text: "text-blue300",
    },
  },

  //MBA------------------------------------
  {
    titulo: "COORDENAÇÃO DO CURSO",
    img: joseProfessor,
    variant: "jose",
    nome: "José Luiz Tejon",
    descricao:
      "Doutor em Educação pela Ude Uruguay; Mestre em Arte, Educação e História da Cultura pela Universidade Mackenzie; Jornalista e publicitário pela fundação Casper Líbero. Especialista em marketing na Pace University Nova Iorque; em Agribusiness na Harvard Business School, em New Mídia no MIT e em Liderança no Insead.Foi professor de pós-graduação por 30 anos na ESPM e por 5 anos no CEAG da FGV. Professor convidado de instituições como Fundação Dom Cabral, Fgv incompany, Fia-Pensa / Usp, Insper. Foi diretor de empresas, como Jacto S/A, Agroceres S/A, grupo do Jornal o Estado de São Paulo. Fundador e ex-presidente da ABMRA-Associação Brasileira de Marketing Rural e Agronegócio.Membro do conselho superior do Agro sustentável, do agronegócio da Fiesp, Conselho da Secretaria de Justiça e Cidadania do Estado de São Paulo. Conselheiro de empresas do agronegócio. Possui 34 livros em autoria e coautoria, colunista da rede Jovem Pan, do Estadão on-line, Mundo Coop, Feed Food, jornal A tarde da Bahia, O liberal do Pará , de diversas mídias e sócio diretor da Biomarketing.Responsável pelo segmento brasileiro no master science Fam, food & agribusiness management na Audencia Business School, Nantes, França. Coordenador do Agribusiness Center da FECAP.",
    cores: {
      div: "bg-black100",
      background: "bg-black100",
      text: "text-white",
    },
    lattes: "http://lattes.cnpq.br/0864201401180043",
  },
  {
    titulo: "COORDENAÇÃO DO CURSO",
    img: ademarProfessor,
    variant: "ademar",
    nome: "Ademar Lucas",
    descricao:
      "Ademar Lucas, Empresário, Administrador de Empresas, Contador e Advogado, Mestre em Ciências Contábeis, cursou LLM (Master of Law) em Direito Societário, MBA Executivo em Administração e Especialista em Finanças Corporativas, Direito Tributário, Pós-graduado e especialista em Direito de Família e Sucessões, tendo ocupado cargos de VicePresidência, Diretoria Adm. Financeira, Jurídica, RH e Relações com Investidores em empresas multinacionais como Philips, Samsung, Delphi e em empresas nacionais de grande porte. Especialista em recuperação, gestão interina, avaliação, negociação e turnaround de organizações de médio e grande porte. Professor de cursos MBA e Pós-Graduação, de diversas matérias, ligadas às áreas financeira, controladoria, auditoria, projetos, direito societário, tributário e família em diversas instituições, tais como: IPT/USP, FIPE, Mauá Engenharia, FIAP e FECAP.",
    cores: {
      div: "bg-black100",
      background: "bg-black100",
      text: "text-white",
    },
    lattes: "http://lattes.cnpq.br/0643736714889103",
  },
  {
    titulo: "COORDENAÇÃO DO CURSO",
    img: marceloProfessor,
    variant: "marcelo",
    nome: "Marcelo Cambria",
    descricao:
      "Doutorando em Contabilidade na FEA-USP. Doutorando em Administração na FEI, linha Gestão Estratégica, Finanças Sustentáveis. Mestre em Controladoria e Contabilidade pela FEA/USP e bacharel em Ciências Contábeis pela FEA/USP. Professor e consultor de Contabilidade, Finanças, Mercado Financeiro e de Derivativos. Sócio-proprietário da MC Consult. Co-autor do livro “Curso de Mercado Financeiro - Tópicos Especiais” da Ed. Atlas e revisor do livro “Administração Financeira”, do Stephen Ross, 10ª edição, Ed. McGraw-Hill. 22 anos de experiência em finanças e mercado financeiro: na Sabesp, assessor do diretor executivo de finanças, contabilidade, riscos e relações com investidores. Experiência no maior banco privado do Brasil, na área de políticas contábeis para as operações da tesouraria do banco de investimentos, e também nas áreas de gestão de ativos, de produtos (B3 e Citibank), operações de custódia e de tesouraria (HSBC, Banco Barclays e BankBoston) e na corretora HSBC. Foi membro do Comitê de Serviços Qualificados de Custódia e Controladoria da ANBIMA em 2011. Participa da ABBC para a implementação de IFRS para bancos.",
    cores: {
      div: "bg-black100",
      background: "bg-black100",
      text: "text-white",
    },
    lattes: "http://lattes.cnpq.br/1143013323848625",
  },
  {
    titulo: "COORDENAÇÃO DO CURSO",
    img: sergioProfessor,
    variant: "sergio",
    nome: "Sergio Alexandre de Souza",
    descricao:
      "Mestre em Contabilidade, bacharel em Ciências Contábeis e em Administração de Empresas, formado por uma das principais empresas de auditoria externa (PriceWaterhouseCoopers). Experiência em alinhamento, desenvolvimento e condução de treinamentos em disciplinas da área de contabilidade e finanças, tendo atuado como instrutor em empresas como Banco Votorantim, Bradesco, Banco Itaú e Itaú BBA, FEBRABAN, CTEEP, TRENCH&ROSS, Rhodia, MWM, Scania, Petrobras, Alunorte etc., executando projetos de treinamento de capacitação e atualização de executivos de diferentes áreas.",
    cores: {
      div: "bg-black100",
      background: "bg-black100",
      text: "text-white",
    },
    lattes: "http://lattes.cnpq.br/5749041505702461",
  },
  {
    titulo: "COORDENAÇÃO DO CURSO",
    img: robertoProfessor,
    variant: "roberto",
    nome: "Roberto Flores Falcão",
    descricao:
      "Doutor (2018) e Mestre (2014) em Administração de Empresas pelo PPGA da FEA/USP, com ênfase em Marketing. Graduado em Administração de Empresas pela Universidade de São Paulo (2008), pós-graduado em Direito do Trabalho (2009) e especialista em Direito Civil e Direito do Consumidor (2010) pela EPD. Tem longa experiência em administração de negócios, com destaque para a atuação no varejo e ênfase em Marketing, Marketing de Serviços e Planejamento Estratégico. É professor em cursos de graduação (Administração, Relações Internacionais e Comunicação Social) da FECAP e do IBMEC, do MBA Marketing da FIA e da ESPM, e do Mestrado Profissional em Administração do Centro Universitário ALFA (GO). Professor convidado do curso Strategy and Marketing for Emerging Countries, ministrando aulas em inglês para alunos estrangeiros. Atua como palestrante e consultor na área de estratégia, marketing e gestão de serviços, especialmente para empresas de menor porte. Foi coordenador do curso de Administração e de Ciências Contábeis da faculdade FADISP, elaborando o PPC dos cursos e acompanhando visitas in loco (INEP) de recredenciamento dos cursos. Possui diversos artigos sobre empreendedorismo e administração de pequenos negócios. Também atuou em diversos projetos relacionados à Educação a Distância no SENAC, na FIA, na International Business School of São Paulo e no Grupo PlanoB.",
    cores: {
      div: "bg-black100",
      background: "bg-black100",
      text: "text-white",
    },
    lattes: "http://lattes.cnpq.br/7132191416728231",
  },
]
