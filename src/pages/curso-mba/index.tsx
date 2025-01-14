import { BannerEscola } from "../../components/banner-escola"
import { Depoimentos } from "../../components/depoimentos"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Parceiros } from "../../components/parceiros"
import relogio from "../../assets/images/relogio.png"
import calendario from "../../assets/images/calendario.png"
import pin from "../../assets/images/pin.png"
import escrita from "../../assets/images/escrita.png"
import banner from "../../assets/images/banner-curso-mba.png"
import { Diferenciais } from "../../components/diferenciais"
import { Qualidade } from "../../components/qualidade"
import { useParams } from "react-router-dom"
import { cursoData } from "../../assets/cursos"
import { Professor } from "../../components/professor"

const revertSlug = (slug: string) => slug.replace(/-/g, " ").toLowerCase()

export function CursoMba() {
  const { id } = useParams<{ id: string }>()
  const nome = revertSlug(id || "") // Reverte o slug

  const curso = cursoData.find(
    (curso) => curso.categoria === "mba" && curso.nome.toLowerCase() === nome
  )

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
        <div className="bg-black200 flex-grow">
          <div className="flex flex-col mt-28 ml-28 gap-16">
            <div className="flex gap-8">
              <img src={relogio} />
              <div className="ml-2">
                <h2 className="text-xl text-white">Carga horária</h2>
                <h3 className="text-2xl text-white font-bold">16 horas</h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={calendario} />
              <div>
                <h2 className="text-xl text-white">Data do Curso</h2>
                <h3 className="text-2xl text-white font-bold">
                  De 10 a 11 de Março de 2025
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={pin} />
              <div className="ml-6">
                <h2 className="text-xl text-white">Localização</h2>
                <h3 className="text-2xl text-white font-bold">
                  Online e presencial (Híbrido)
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={escrita} />
              <div>
                <h2 className="text-xl text-white">Período de Inscrição</h2>
                <h3 className="text-2xl text-white font-bold">
                  até 10 de Fevereiro de 2025
                </h3>
              </div>
            </div>
          </div>
          <button className="mt-20 ml-28 bg-black200 text-green200 border border-green200 text-xl font-bold px-11 py-4 rounded-2xl">
            INSCREVA-SE
          </button>
        </div>
      </div>
      <Diferenciais />
      <div className="h-[1200px] bg-black100 flex flex-col items-center">
        <h1 className="font-bold text-white bg-green200 w-[560px] py-4 text-3xl text-center mt-52 mb-24">
          COORDENAÇÃO DO CURSO
        </h1>

        <Professor variant="jose" />
      </div>
      <Qualidade />
      <div className="h-[650px] bg-black100 flex flex-col items-center ">
        <h1 className="font-bold text-4xl bg-green200 p-4 text-white mt-32">
          COM A CORE, SEU MBA FICA MAIS FÁCIL
        </h1>
        <p className="text-white text-xl mt-12">
          Todo curso de MBA pela Core e FECAP tem
        </p>
        <h2 className="text-4xl text-green200 font-bold mt-2">
          15% DE DESCONTO
        </h2>
        <p className="text-xl text-white mt-2">
          Inscreva-se já com o cupom da Core e adquira seu MBA com facilidade.
        </p>
        <button className="border border-green200 font-bold text-xl bg-black100 px-6 py-4 rounded-2xl text-green200 mt-14">
          INSCREVA-SE
        </button>
      </div>
      <Depoimentos />
      <InfoForm />
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
