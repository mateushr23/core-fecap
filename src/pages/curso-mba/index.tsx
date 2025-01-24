import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Parceiros } from "../../components/parceiros"
import relogio from "../../assets/images/relogio.png"
import calendario from "../../assets/images/calendario.png"
import pin from "../../assets/images/pin.png"
import escrita from "../../assets/images/escrita.png"
import banner from "../../assets/images/banner-curso-mba.png"
import bannerMobile from "../../assets/images/banner-curso-mba-mobile.png"
import { Diferenciais } from "../../components/diferenciais"
import { Qualidade } from "../../components/qualidade"
import { useNavigate, useParams } from "react-router-dom"
import { cursoData } from "../../assets/cursos"
import { Professor } from "../../components/professor"
import { useEffect } from "react"

export function CursoMba() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const curso = cursoData.find(
    (curso) => curso.id === id && curso.categoria === "mba"
  )

  useEffect(() => {
    if (!curso) {
      navigate("/mba", { replace: true })
    }
  }, [curso, navigate])

  const handleInscrevaseCurso = () => {
    if (curso) window.open(curso.mbaLink, "_blank")
  }

  const handleInscrevaseMba = () => {
    if (curso) window.open("https://www.fecap.br/mba/", "_blank")
  }

  return (
    <div>
      <div className="relative w-full">
        <img className="w-full hidden md:block" src={banner} />
        <img className="w-full md:hidden" src={bannerMobile} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl text-center">
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
              Para quem é este curso?
            </h1>
            <p className="text-blue300 text-xl text-justify mt-4">
              {curso?.paraQuem}
            </p>
          </div>
        </div>
        <div className="bg-black200  flex-grow ">
          <div className="flex flex-col mt-28 ml-28 gap-16">
            <div className="flex gap-8 w-screen items-center ">
              <img src={relogio} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Carga horária</h2>
                <h3 className="text-2xl text-white font-bold">
                  {curso?.carga}
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center">
              <img src={calendario} />
              <div>
                <h2 className="text-xl text-white">Data do Curso</h2>
                <h3 className="text-2xl text-white font-bold w-[300px]">
                  {curso?.data}
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center">
              <img src={pin} />
              <div className="ml-6">
                <h2 className="text-xl text-white">Localização</h2>
                <h3 className="text-2xl text-white font-bold w-[300px]">
                  Online e presencial (Híbrido)
                </h3>
              </div>
            </div>
            <div className="flex gap-8 w-screen items-center">
              <img src={escrita} />
              <div>
                <h2 className="text-xl text-white">Período de Inscrição</h2>
                <h3 className="text-2xl text-white font-bold w-[300px]">
                  até 10 de Fevereiro de 2025
                </h3>
              </div>
            </div>
          </div>
          <button
            onClick={handleInscrevaseCurso}
            className="mt-20 ml-20 w-[280px] bg-black200 text-green200 border border-green200 hover:bg-green200 hover:text-black200 transition delay-80 text-xl font-bold py-4 rounded-2xl"
          >
            INSCREVA-SE
          </button>
        </div>
      </div>
      <Diferenciais />
      <div className="h-[1200px] bg-black100 flex flex-col items-center">
        <Professor variant={curso?.variant} />
      </div>
      <Qualidade />
      <div className="h-[650px] bg-black100 flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl bg-green200 p-4 text-white mt-32">
          COM A CORE, SEU MBA FICA MAIS FÁCIL
        </h1>
        <p className="text-white text-xl mt-12">
          Todo curso de MBA pela Core e FECAP tem
        </p>
        <h2 className="text-4xl text-green200 font-bold mt-2">
          20% DE DESCONTO
        </h2>
        <p className="text-xl text-white mt-2">
          Inscreva-se já com o cupom da Core e adquira seu MBA com facilidade.
        </p>
        <button
          onClick={handleInscrevaseMba}
          className="border border-green200 font-bold text-xl bg-black100 px-6 py-4 rounded-2xl text-green200 hover:bg-green200 hover:text-black100 transition delay-80 mt-14"
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
