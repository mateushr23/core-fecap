import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import { InfoForm } from "../../components/info-form"
import coreLogo from "../../assets/core-logo-big.png"
import novaGeracao from "../../assets/nova-geracao.png"
import missao from "../../assets/missao.png"
import visao from "../../assets/visao.png"
import valores from "../../assets/valores.png"

export function Institucional() {
  return (
    <div>
      <div className="h-[650px] bg-blue300 flex items-center justify-center">
        <img src={coreLogo} alt="Logo Core" />
      </div>
      <div className="flex">
        <div className="w-[1020px] bg-white100 flex flex-col items-center text-center justify-center">
          <div className="w-[720px]">
            <h1 className="text-blue300 font-bold text-4xl text-start">
              UMA EXPERIÊNCIA TRANSFORMADORA
            </h1>
            <h1 className="text-green200 font-bold text-4xl text-start mt-2">
              COM A INOVAÇÃO ESTRATÉGICA
            </h1>
            <div className="h-1 bg-green200 w-[145px] mt-6 mb-6" />
            <p className="text-blue300 text-xl text-justify">
              A CORE Escola de Negócios surgiu a partir do espírito empreendedor
              de um jovem determinado. Inspirado pelos princípios e sucessos
              obtidos na experiência vivida em uma empresa de Assessoria,
              Consultoria e Gestão, que hoje é uma de suas parceiras de
              negócios, ele decidiu criar a CORE Escola de Negócios. A CORE tem
              como principais compromissos a inovação e a excelência no
              desenvolvimento profissional e organizacional. Nossa equipe
              multidisciplinar é composta por profissionais altamente
              qualificados e comprometidos, com vasta experiência em suas
              respectivas áreas. Nosso trabalho é colaborativo e dinâmico,
              promovendo a criatividade e o desenvolvimento contínuo.
            </p>
          </div>
        </div>
        <img src={novaGeracao} alt="Escola Nova Geracao" />
      </div>
      <div className="h-[1440px] bg-blue300 flex items-center justify-center">
        <div className="flex flex-col gap-28">
          <div className="flex gap-12 items-center">
            <img src={missao} />
            <div className="w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">MISSÃO</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <p className="text-xl text-white mt-7">
                Oferecer soluções inovadoras e eficazes, de acordo com as
                necessidades específicas de cada cliente, acompanhando as
                tendências e demandas do mercado.
              </p>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <img src={visao} />
            <div className="w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">VISÃO</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <p className="text-xl text-white mt-7">
                Ser referência no mercado em nosso segmento, reconhecidos pela
                excelência dos nossos serviços e pelos impactos positivos
                apresentados nos resultados de nossos clientes e parceiros.
              </p>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <img src={valores} />
            <div className="w-[720px]">
              <h1 className="text-4xl text-green200 font-bold">VALORES</h1>
              <div className="h-1 w-[145px] bg-green200 mt-7" />
              <p className="text-xl text-white mt-7">
                Modernidade, Excelência, Inovação e Tecnologia, Comprometimento,
                Foco nos Resultados para nossos Clientes, Parceiros e Equipe,
                Integridade, Desenvolvimento Sustentável e Conexões
                Estratégicas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1000px] bg-white500 flex flex-col items-center relative">
        <h1 className="font-bold text-4xl text-white bg-green200 py-4 px-8 absolute top-[-7%] transform translate-y-1/2">
          EQUIPE ESPECIALIZADA CORE
        </h1>
        <div className="flex flex-col items-center w-[1300px] mt-72 text-center">
          <p className="text-blue300 font-bold text-3xl">
            Nossa equipe multidisciplinar é composta por profissionais altamente
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
          <p className="text-blue300 text-xl mt-6">
            Integrantes da nossa equipe também são convidados para participar de
            comitês de elaboração de normas, procedimentos e avaliações para
            certificações, prêmios e reconhecimentos por órgãos renomados como
            ABNT (Comitês CEE 063 e 309 – Gestão de Riscos e Governança nas
            Organizações), ABRASCE, FNQ, SEBRAE, SESCOOP, ONA, entre outros.
          </p>
        </div>
      </div>
      <div className="h-[1200px] bg-green200 relative flex flex-col items-center">
        <h1 className="font-bold text-4xl text-white bg-blue300 py-4 px-8 absolute top-[-6%] transform translate-y-1/2">
          DIFERENCIAS CORE
        </h1>
        <div className="grid-cols-3 grid-rows-2 grid gap-x-8 gap-y-12 mt-52">
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
          <div className="bg-green100 w-[460px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5">
            <h2 className="font-bold text-2xl text-white100">
              Inovação e Modernidade
            </h2>
            <p className="text-base text-white100">
              Compromisso com a Inovação e Tecnologia na implementação de
              soluções avançadas para melhorar processos e resultados.
            </p>
          </div>
        </div>
        <div className="bg-green100 w-[530px] h-[240px] rounded-3xl flex flex-col items-center text-center justify-center gap-5 mt-12">
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
