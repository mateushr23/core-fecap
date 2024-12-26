import { BannerEscola } from "../../components/banner-escola"
import { Depoimentos } from "../../components/depoimentos"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Pagamentos } from "../../components/pagamentos"
import { Parceiros } from "../../components/parceiros"
import relogio from "../../assets/relogio.png"
import calendario from "../../assets/calendario.png"
import pin from "../../assets/pin.png"
import dinheiro from "../../assets/dinheiro.png"
import escrita from "../../assets/escrita.png"
import banner from "../../assets/banner-curso-curta.png"
import downArrow from "../../assets/down-arrow.png"
import upperArrow from "../../assets/upper-arrow.png"
import { useState } from "react"
import lucianoProfessor from "../../assets/luciano-professor.png"
import { useParams } from "react-router-dom"
import { cursoData } from "../../assets/cursos"

const revertSlug = (slug: string) => slug.replace(/-/g, " ").toLowerCase()

export function CursoCurta() {
  const [isModuleOpen1, setIsModuleOpen1] = useState(false)
  const [isModuleOpen2, setIsModuleOpen2] = useState(false)
  const [isModuleOpen3, setIsModuleOpen3] = useState(false)
  const { id } = useParams<{ id: string }>()
  const nome = revertSlug(id || "") // Reverte o slug

  const curso = cursoData.find(
    (curso) => curso.categoria === "curta" && curso.nome.toLowerCase() === nome
  )

  const toggleModule1 = () => {
    setIsModuleOpen1((prev) => !prev)
  }

  const toggleModule2 = () => {
    setIsModuleOpen2((prev) => !prev)
  }

  const toggleModule3 = () => {
    setIsModuleOpen3((prev) => !prev)
  }

  return (
    <div>
      <img className="w-full" src={banner} alt="Banner curso curta duracao" />
      <div className="flex">
        <div className="w-[50%] h-[920px] bg-white300 flex flex-col items-center text-center">
          <div className="w-[570px]">
            <h1 className="text-blue300 font-bold text-3xl text-start mt-28">
              Sobre o Curso
            </h1>
            <p className="text-blue300 text-xl text-justify mt-8">
              {curso?.sobre}
            </p>
            <h1 className="text-blue300 font-bold text-3xl text-start mt-16">
              Para quem é este curso?
            </h1>
            <p className="text-blue300 text-xl text-justify mt-8">
              {curso?.paraQuem}
            </p>
          </div>
        </div>
        <div className="bg-blue300 flex-grow">
          <div className="flex flex-col mt-28 ml-28 gap-16">
            <div className="flex gap-8">
              <img src={relogio} />
              <div className="ml-4">
                <h2 className="text-xl text-white">Carga horária</h2>
                <h3 className="text-2xl text-white font-bold">16 horas</h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={calendario} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Data do Curso</h2>
                <h3 className="text-2xl text-white font-bold">
                  De 10 a 11 de Março de 2025
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={pin} />
              <div className="ml-8">
                <h2 className="text-xl text-white">Localização</h2>
                <h3 className="text-2xl text-white font-bold">
                  Online e presencial (Híbrido)
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={dinheiro} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Valores</h2>
                <h3 className="text-2xl text-white font-bold">
                  12x de R$498/mês{" "}
                  <span className="font-normal">(Total de R$5.976)</span>
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={escrita} />
              <div className="ml-3">
                <h2 className="text-xl text-white">Período de Inscrição</h2>
                <h3 className="text-2xl text-white font-bold">
                  até 10 de Fevereiro de 2025
                </h3>
              </div>
            </div>
          </div>
          <button className="mt-20 ml-28 bg-blue300 text-green200 border border-green200 text-xl font-bold px-11 py-4 rounded-2xl">
            INSCREVA-SE
          </button>
        </div>
      </div>
      <div className="h-auto pb-52 bg-white100 flex justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-white bg-green200 font-bold w-[560px] py-5 text-4xl text-center mt-52">
            MÓDULOS DO CURSO
          </h1>
          <div className="flex flex-col gap-2 w-[1100px]">
            <div
              className={`border-2 border-green200  py-6 px-12 mt-20 overflow-hidden transition-all duration-300 ${
                isModuleOpen1 ? "h-auto" : "h-auto"
              }`}
            >
              <div className="flex justify-between">
                <h2 className="font-bold text-green200 text-2xl">MÓDULO 1</h2>
                {isModuleOpen1 ? (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={upperArrow}
                    onClick={toggleModule1}
                  />
                ) : (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={downArrow}
                    onClick={toggleModule1}
                  />
                )}
              </div>
              {isModuleOpen1 && (
                <ul className="mt-4 list-disc pl-6 text-blue400">
                  <li>O papel de coordenador e supervisor;</li>
                  <li>Influência;</li>
                  <li>Inteligência emocional;</li>
                  <li>Administração do tempo.</li>
                </ul>
              )}
            </div>
            <div
              className={`border-2 border-green200  py-6 px-12 overflow-hidden transition-all duration-300 ${
                isModuleOpen2 ? "h-auto" : "h-auto"
              }`}
            >
              <div className="flex justify-between">
                <h2 className="font-bold text-green200 text-2xl">MÓDULO 2</h2>
                {isModuleOpen2 ? (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={upperArrow}
                    onClick={toggleModule2}
                  />
                ) : (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={downArrow}
                    onClick={toggleModule2}
                  />
                )}
              </div>
              {isModuleOpen2 && (
                <ul className="mt-4 list-disc pl-6 text-blue400">
                  <li>O papel de coordenador e supervisor;</li>
                  <li>Influência;</li>
                  <li>Inteligência emocional;</li>
                  <li>Administração do tempo.</li>
                </ul>
              )}
            </div>
            <div
              className={`border-2 border-green200 py-6 px-12  overflow-hidden transition-all duration-300 ${
                isModuleOpen3 ? "h-auto" : "h-auto"
              }`}
            >
              <div className="flex justify-between">
                <h2 className="font-bold text-green200 text-2xl">MÓDULO 3</h2>
                {isModuleOpen3 ? (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={upperArrow}
                    onClick={toggleModule3}
                  />
                ) : (
                  <img
                    className="cursor-pointer w-10 h-10"
                    src={downArrow}
                    onClick={toggleModule3}
                  />
                )}
              </div>
              {isModuleOpen3 && (
                <ul className="mt-4 list-disc pl-6 text-blue400">
                  <li>O papel de coordenador e supervisor;</li>
                  <li>Influência;</li>
                  <li>Inteligência emocional;</li>
                  <li>Administração do tempo.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1200px] bg-blue300 flex flex-col items-center">
        <h1 className="font-bold text-white bg-green200 w-[560px] py-4 text-3xl text-center mt-52 mb-24">
          PROFESSORES
        </h1>
        <div className="flex w-[1110px] h-[520px] items-center text-center bg-white100">
          <img
            className="h-full flex-grow"
            src={lucianoProfessor}
            alt="Professor Luciano Nurnberg"
          />
          <div className="w-[790px]  h-full text-justify text-blue300 bg-white100">
            <h1 className="ml-6 mt-12 font-bold text-3xl">
              Prof. Me. Luciano Nurnberg Peres
            </h1>
            <p className="mt-12 ml-6 mr-20 text-base">
              Doutorando em Controladoria e Contabilidade na FEA-USP e membro do
              Centro de Estudos em Contabilidade e Governo (ContGov) da FEA-USP.
              Possui graduação em Ciências Contábeis pela Universidade Estadual
              de Maringá (2014), graduação em Física pela Universidade Estadual
              de Maringá (2007) e mestrado em Controladoria e Contabilidade pela
              Universidade de São Paulo (2017). Atuou como empenhador na
              Prefeitura de Campo Mourão, auxiliar administrativo na Justiça
              Federal de Primeiro Grau no Paraná (2013) e na auditoria do
              Ministério Público do Estado do Paraná (2012/2013). De 2011 a
              2016, atuou em projetos de pesquisa e extensão. Em 2017 e 2018
              atuou como professor de Contabilidade Pública, tendo lecionado na
              Faculdade de Jandaia do Sul (FAFIJAN) e na Faculdade Maringá. Nos
              anos de 2017 a 2019, participou como avaliador de trabalhos do
              Congresso USP de Contabilidade. Professor dos cursos de Gestão
              Pública em EAD da FECAP.
            </p>
            <div className="flex gap-4 ml-6 mt-10">
              <a
                className="border-2 border-gray700 text-gray600 text-base font-semibold px-4 py-2 rounded-3xl"
                href="#"
              >
                Linkedin
              </a>
              <a
                className="border-2 border-gray700 text-gray600 text-base font-semibold px-4 py-2 rounded-3xl"
                href="#"
              >
                LATTES
              </a>
            </div>
          </div>
        </div>
      </div>
      <Depoimentos />
      <Pagamentos />
      <div className="h-[650px] bg-white300 flex flex-col items-center ">
        <h1 className="font-bold text-4xl bg-green200 p-4 text-white mt-52">
          SUA CARREIRA MERECE UM IMPULSO
        </h1>
        <p className="text-blue300 text-xl mt-12 w-[915px] text-center">
          Venha para a Core e tenha os melhores especialistas para te ajudar a
          subir de nível, com estrutura pensada em você e todo suporte que
          precisar.
        </p>

        <button className="border border-green200 font-bold text-xl bg-white300 px-8 py-3 rounded-2xl text-green200 mt-16">
          INSCREVA-SE
        </button>
      </div>
      <InfoForm />
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
