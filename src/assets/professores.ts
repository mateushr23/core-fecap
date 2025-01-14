import lucianoProfessor from "../assets/images/luciano-professor.png"
import joseProfessor from "../assets/images/jose-professor.png"

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
  },
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
  },
]
