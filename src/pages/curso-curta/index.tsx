import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Pagamentos } from "../../components/pagamentos"
import { Parceiros } from "../../components/parceiros"
import relogio from "../../assets/images/relogio.png"
import calendario from "../../assets/images/calendario.png"
import pin from "../../assets/images/pin.png"
import dinheiro from "../../assets/images/dinheiro.png"
import escrita from "../../assets/images/escrita.png"
import downArrow from "../../assets/images/down-arrow.png"
import upperArrow from "../../assets/images/upper-arrow.png"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { cursoData } from "../../assets/cursos"
import { Professor } from "../../components/professor"
import { whatsappConfig } from "../../assets/whatsapp-config"

export function CursoCurta() {
  const [openModules, setOpenModules] = useState<string[]>([])
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const curso = cursoData.find(
    (curso) => curso.id === id && curso.categoria === "curta"
  )

  useEffect(() => {
    if (!curso) {
      navigate("/curta-duracao", { replace: true })
    }
  }, [curso, navigate])

  const toggleModule = (index: string) => {
    setOpenModules(
      (prev) =>
        prev.includes(index)
          ? prev.filter((id) => id !== index) // Remove o módulo do estado
          : [...prev, index] // Adiciona o módulo ao estado
    )
  }

  const handleWhatsappRedirect = (): void => {
    if (curso) {
      const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "")
      const message = encodeURIComponent(
        `Olá, gostaria de me inscrever no curso ${curso.nome}!`
      )
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <div>
      <div className="relative w-full">
        <img
          className="w-full"
          src={curso?.banner}
          alt="Banner curso curta duracao"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold lg:text-4xl text-center">
          {curso?.nome.toUpperCase()}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-screen lg:h-[1000px] bg-white300 flex flex-col items-center justify-center text-center p-4 ">
          <div className="p-4">
            <h1 className="text-blue300 font-bold text-3xl text-start">
              Sobre o Curso
            </h1>
            <p className="text-blue300 text-xl text-justify mt-4">
              {curso?.sobre}
            </p>
            <h1 className="text-blue300 font-bold text-3xl text-start mt-4">
              O que você leva do Curso
            </h1>
            <p className="text-blue300 text-xl text-justify mt-4 whitespace-pre-line">
              {curso?.oQueLeva}
            </p>
            <h1 className="text-blue300 font-bold text-3xl text-start mt-4 hyphens-auto">
              Para quem é este Curso
            </h1>
            <p className="text-blue300 text-xl text-justify mt-4 whitespace-pre-line hyphens-auto">
              {curso?.paraQuem}
            </p>
          </div>
        </div>
        <div className="bg-blue300 flex-grow">
          <div className="flex flex-col mt-8 justify-center items-center gap-16 lg:items-start">
            <div className="flex gap-8 w-screen items-center ml-20">
              <img className="w-14" src={relogio} />
              <div className="ml-4">
                <h2 className="text-xl text-white">Carga horária</h2>
                <h3 className="lg:text-2xl text-white font-bold">
                  {curso?.carga}
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center ml-20">
              <img className="w-14" src={calendario} />
              <div className="ml-2 w-[200px]">
                <h2 className="text-xl text-white">Dias e horários</h2>
                <h3 className="lg:text-2xl text-white font-bold">
                  {curso?.data}
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center ml-20">
              <img className="w-14" src={pin} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Modalidade</h2>
                <h3 className="lg:text-2xl text-white font-bold">
                  {curso?.modalidade}
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center ml-20">
              <img className="w-14" src={dinheiro} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Valores</h2>
                <h3 className="lg:text-2xl text-white font-bold">
                  Consultar valores
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center ml-20">
              <img className="w-14" src={escrita} />
              <div className="ml-2 w-[200px]">
                <h2 className="text-xl text-white">Período de Inscrição</h2>
                <h3 className="lg:text-2xl text-white font-bold">
                  {curso?.inscricao}
                </h3>
              </div>
            </div>
          </div>
          <button
            onClick={handleWhatsappRedirect}
            className="lg:mt-20 mt-10 mb-10 ml-10 lg:ml-28 w-[280px] bg-blue300 text-green200 border border-green200 hover:bg-green200 hover:text-blue300 transition delay-80 text-xl font-bold  py-4 rounded-2xl"
          >
            INSCREVA-SE
          </button>
        </div>
      </div>
      <div className="h-auto pb-52 bg-white100 flex justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-white bg-green200 font-bold w-[560px] py-5 text-4xl text-center mt-52 mb-20">
            MÓDULOS DO CURSO
          </h1>
          <div className="flex flex-col gap-2 m-4 lg:w-[1100px]">
            {curso?.modulos?.map((modulo, index) => (
              <div
                key={index}
                className={`border-2 border-green200 py-6 px-12 overflow-hidden transition-all duration-300 ${
                  openModules.includes(String(index)) ? "h-auto" : "h-auto"
                }`}
              >
                <div className="flex justify-between">
                  <h2 className="font-bold text-green200 text-2xl">
                    {modulo.titulo}
                  </h2>
                  {openModules.includes(String(index)) ? (
                    <img
                      className="cursor-pointer w-10 h-10"
                      src={upperArrow} // Substitua pelo caminho real do ícone
                      onClick={() => toggleModule(String(index))}
                    />
                  ) : (
                    <img
                      className="cursor-pointer w-10 h-10"
                      src={downArrow} // Substitua pelo caminho real do ícone
                      onClick={() => toggleModule(String(index))}
                    />
                  )}
                </div>
                {openModules.includes(String(index)) && (
                  <ul className="mt-4 list-disc pl-6 text-blue300">
                    {modulo.topicos.map((topico, i) => (
                      <li key={i}>{topico}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Professor variant={curso?.variant} />
      <Pagamentos />
      <div className="h-[650px] bg-white300 flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl bg-green200 p-4 text-white mt-52">
          SUA CARREIRA MERECE UM IMPULSO
        </h1>
        <p className="text-blue300 text-xl mt-12 lg:w-[915px] text-center">
          Venha para a Core e tenha os melhores especialistas para te ajudar a
          subir de nível, com estrutura pensada em você e todo suporte que
          precisar.
        </p>

        <button
          onClick={handleWhatsappRedirect}
          className="border border-green200 hover:bg-green200 hover:text-white300 transition delay-80 font-bold text-xl bg-white300 px-8 py-3 rounded-2xl text-green200 mt-8 "
        >
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
