import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import { InfoForm } from "../../components/info-form"
import coreLogo from "../../assets/images/core-logo-big.png"
import novaGeracao from "../../assets/images/nova-geracao.png"
import missao from "../../assets/images/missao.png"
import visao from "../../assets/images/visao.png"
import valores from "../../assets/images/valores.png"

export function Institucional() {
  return (
    <div>
      <div className="h-[650px] bg-blue300 flex items-center justify-center">
        <img src={coreLogo} alt="Logo Core" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[1320px] bg-white100 flex flex-col items-center text-center justify-center">
          <div className=" w-screen lg:w-[600px] flex flex-col lg:items-start items-center p-4">
            <h1 className="text-blue300 font-bold text-2xl lg:text-4xl lg:text-start">
              VIVA UMA EXPERIÊNCIA TRANSFORMADORA QUE UNE
            </h1>
            <h1 className="text-green200 font-bold text-2xl lg:text-4xl lg:text-start mt-2">
              EXCELÊNCIA, INOVAÇÃO E RESULTADOS.
            </h1>
            <div className="h-1 bg-green200 w-[145px] mt-6 mb-6" />
            <div className="text-blue300 md:text-xl text-justify hyphens-auto flex flex-col gap-4">
              <p>
                A CORE Escola de Negócios nasceu do espírito empreendedor de um
                jovem determinado. Inspirado pelos princípios e sucesso
                alcançado em sua trajetória em uma empresa de Assessoria,
                Consultoria e Gestão — hoje uma de suas parceiras de negócios —,
                ele idealizou a CORE Escola de Negócios.
              </p>
              <p>
                Com o compromisso de oferecer inovação e excelência no
                desenvolvimento profissional, organizacional e pessoal, contamos
                com uma equipe multidisciplinar formada por profissionais
                altamente qualificados, especialistas tanto na área acadêmica
                quanto no mercado. Essa combinação única de expertise garante
                uma abordagem prática e estratégica, capaz de gerar resultados
                de alto impacto.
              </p>
              <p>
                Nosso trabalho é colaborativo e dinâmico, promovendo
                criatividade, aprendizado contínuo e a busca por soluções
                inovadoras e sustentáveis.
              </p>
            </div>
          </div>
        </div>
        <img src={novaGeracao} alt="Escola Nova Geracao" />
      </div>
      <div className="h-[500px] md:h-[1440px] bg-blue300 flex items-center justify-center md:p-8">
        <div className="flex flex-col gap-10 md:gap-28 ">
          <div className="flex gap-12 items-center justify-center">
            <img className="w-24 md:w-auto" src={missao} />
            <div className="md:w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">MISSÃO</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <p className="text-xl text-white mt-7 hidden md:block">
                Oferecer soluções de excelência, personalizadas para as
                necessidades específicas de cada cliente, alinhando-se às
                tendências e demandas do mercado.
              </p>
            </div>
          </div>
          <div className="flex gap-12 items-center justify-center">
            <img className="w-24 md:w-auto" src={visao} />
            <div className="md:w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">VISÃO</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <p className="text-xl text-white mt-7 hidden md:block">
                Ser referência em nosso segmento, reconhecidos pela
                superioridade de nossos serviços e pelos impactos positivos que
                promovemos nos resultados de nossos clientes e parceiros.
              </p>
            </div>
          </div>
          <div className="flex gap-12 items-center justify-center">
            <img className="w-24 md:w-auto md:mb-72" src={valores} />
            <div className="md:w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">VALORES</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <ul className="text-xl text-white mt-7 list-disc gap-2 md:flex flex-col text-justify hyphens-auto hidden">
                <li>
                  <span className="font-bold">Excelência</span>: Buscar
                  continuamente os mais altos padrões de qualidade.
                </li>
                <li>
                  <span className="font-bold">Inovação e Tecnologia</span>:
                  Estar na vanguarda para atender às demandas em constante
                  evolução.
                </li>
                <li>
                  <span className="font-bold">Comprometimento</span>: Agir com
                  responsabilidade e dedicação em tudo o que fazemos.
                </li>
                <li>
                  <span className="font-bold">Foco nos Resultados</span>:
                  Priorizar o sucesso e a satisfação de nossos clientes,
                  parceiros e equipe.
                </li>
                <li>
                  <span className="font-bold">Integridade</span>: Atuar de forma
                  ética e transparente.
                </li>
                <li>
                  <span className="font-bold">Desenvolvimento Sustentável</span>
                  : Promover soluções que equilibrem crescimento e
                  responsabilidade socioambiental.
                </li>
                <li>
                  <span className="font-bold">Conexões Estratégicas</span>:
                  Construir parcerias que gerem valor mútuo e fortaleçam nosso
                  impacto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1000px] bg-white500 flex flex-col items-center relative">
        <h1 className="font-bold text-4xl text-white bg-green200 py-4 px-8 absolute top-[-7%] transform translate-y-1/2 text-center">
          EQUIPE ESPECIALIZADA CORE
        </h1>
        <div className="flex flex-col items-center w-screen md:px-20 lg:px-40 mt-44 lg:mt-72 text-center">
          <p className="text-blue300 font-bold text-xl md:text-3xl">
            Nossa equipe multidisciplinar é composta por profissionais altamente
            <br />
            qualificados e comprometidos, com vasta experiência em suas
            respectivas áreas.
          </p>
          <p className="text-blue300 text-xl mt-6">
            É constituída por Doutores, Mestres e Especialistas, com mais de 20
            anos de experiência em desenvolvimento profissional, organizacional
            e gestão, nas áreas de Administração, Agronegócios, Educação, Meio
            Ambiente e Saúde, tanto no setor público quanto no privado. Vários
            dos profissionais possuem experiências como docentes universitários
            em cursos de Graduação, Pós-Graduação Lato e Stricto Sensu, possuem
            obras publicadas, são pesquisadores e orientadores de pesquisadores
            nas áreas de estratégia, governança e DEI, bem como consultores
            sistêmicos pessoais e organizacionais.
          </p>
          <p className="text-blue300 text-xl mt-6 md:inline hidden">
            Integrantes da nossa equipe também são convidados para participar de
            comitês de elaboração de normas, procedimentos e avaliações para
            certificações, prêmios e reconhecimentos por órgãos renomados como
            ABNT (Comitês CEE 063 e 309 – Gestão de Riscos e Governança nas
            Organizações), ABRASCE, FNQ, SEBRAE, SESCOOP, ONA, entre outros.
          </p>
        </div>
      </div>
      <div className="xl:h-[1200px] pb-10 bg-green200 relative flex flex-col items-center">
        <h1 className="font-bold text-4xl text-white bg-blue300 py-4 px-8 absolute top-[-6%] transform translate-y-1/2">
          DIFERENCIAS CORE
        </h1>
        <div className="xl:grid-cols-3 xl:grid-rows-2 grid gap-x-8 gap-y-12 mt-52">
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Equipe Multidisciplinar
            </h2>
            <p className="text-base text-white100">
              Profissionais altamente qualificados.
            </p>
          </div>
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Personalização e Adaptabilidade
            </h2>
            <p className="text-base text-white100">
              Capacidade de adaptar soluções às necessidades específicas de cada
              cliente, proporcionando serviços personalizados e eficazes.
            </p>
          </div>
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Conexões Estratégicas
            </h2>
            <p className="text-base text-white100">
              Parcerias com outras empresas e instituições para fortalecer a
              capacidade e oferecer soluções mais completas aos clientes.
            </p>
          </div>
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Ampla Gama de Serviços
            </h2>
            <p className="text-base text-white100">
              Oferta de uma variedade de soluções educacionais e serviços de
              consultoria, assessoria e gestão em diferentes áreas de atuação.
            </p>
          </div>
          <div className="bg-green300 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Excelência em Serviços
            </h2>
            <p className="text-base text-white100">
              Compromisso com a qualidade e busca constante pela excelência em
              todos os serviços oferecidos.
            </p>
          </div>
        </div>
        <div className="bg-green300 w-[530px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5 mt-12">
          <h2 className="font-bold text-2xl text-white100">
            Visão Integrada de Desenvolvimento Organizacional
          </h2>
          <p className="text-base text-white100">
            Abordagem holística considerando não apenas o crescimento econômico,
            mas também o desenvolvimento integral das pessoas e das
            organizações.
          </p>
        </div>
      </div>
      <Parceiros />
      <InCompany />
      <InfoForm />
    </div>
  )
}
