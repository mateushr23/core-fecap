import { BannerEscola } from "../../components/banner-escola"
import { Depoimentos } from "../../components/depoimentos"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Parceiros } from "../../components/parceiros"
import relogio from "../../assets/relogio.png"
import calendario from "../../assets/calendario.png"
import pin from "../../assets/pin.png"
import escrita from "../../assets/escrita.png"
import banner from "../../assets/banner-curso-mba.png"
import { Diferenciais } from "../../components/diferenciais"
import professor from "../../assets/professor-mba.png"
import { Qualidade } from "../../components/qualidade"
import { useParams } from "react-router-dom"
import { cursoData } from "../../assets/cursos"

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
        <div className="flex w-[1110px] h-[520px] items-center text-center bg-black100">
          <img
            className="h-full flex-grow"
            src={professor}
            alt="Professor José Luiz Tejon"
          />
          <div className="w-[790px]  h-full text-justify text-white bg-black100">
            <h1 className="ml-6 mt-12 font-bold text-3xl">José Luiz Tejon</h1>
            <p className="mt-12 ml-6 mr-20 text-base">
              Doutor em Educação pela Ude Uruguay; Mestre em Arte, Educação e
              História da Cultura pela Universidade Mackenzie; Jornalista e
              publicitário pela fundação Casper Líbero. Especialista em
              marketing na Pace University Nova Iorque; em Agribusiness na
              Harvard Business School, em New Mídia no MIT e em Liderança no
              Insead.Foi professor de pós-graduação por 30 anos na ESPM e por 5
              anos no CEAG da FGV. Professor convidado de instituições como
              Fundação Dom Cabral, Fgv incompany, Fia-Pensa / Usp, Insper. Foi
              diretor de empresas, como Jacto S/A, Agroceres S/A, grupo do
              Jornal o Estado de São Paulo. Fundador e ex-presidente da ABMRA-
              Associação Brasileira de Marketing Rural e Agronegócio.Membro do
              conselho superior do Agro sustentável, do agronegócio da Fiesp,
              Conselho da Secretaria de Justiça e Cidadania do Estado de São
              Paulo. Conselheiro de empresas do agronegócio. Possui 34 livros em
              autoria e coautoria, colunista da rede Jovem Pan, do Estadão
              on-line, Mundo Coop, Feed Food, jornal A tarde da Bahia, O liberal
              do Pará , de diversas mídias e sócio diretor da
              Biomarketing.Responsável pelo segmento brasileiro no master
              science Fam, food & agribusiness management na Audencia Business
              School, Nantes, França. Coordenador do Agribusiness Center da
              FECAP.
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
