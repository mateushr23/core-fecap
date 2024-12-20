import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import banner from "../../assets/banner1.png"
import coreFecapLogo from "../../assets/core-fecap-white.png"
import { Card } from "../../components/card"
import anambaLogo from "../../assets/anamba-logo.png"
import professor from "../../assets/professor.png"
import networking from "../../assets/networking.png"
import pasta from "../../assets/pasta.png"
import contrucao from "../../assets/construcao.png"

export function Mba() {
  return (
    <div>
      <img className="w-full" src={banner} alt="Banner de desconto Fecap" />
      <div className="h-[2050px] bg-black100 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="mt-48 text-white font-bold text-4xl">
            ESTAMOS PRONTOS PARA TE{" "}
            <span className="text-green200">LEVAR A OUTRO NÍVEL!</span>
          </h1>
          <img className="mt-32" src={coreFecapLogo} />
          <p className="text-white text-xl w-[960px] text-center mt-24">
            A Core é parceira fecap em todos MBA’s, escolhidos para você, com
            mestres e professores renomados do mercado, com qualificação para te
            passar toda experiência.
          </p>
        </div>
        <div className="mt-96 flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center">
            MBA’S DISPONÍVEIS
          </h1>
          <div className="flex gap-7 mt-28">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="h-[880px] bg-white300 flex flex-col items-center justify-center">
        <h2 className="text-blue300 text-4xl">
          QUALIDADE <span className="font-bold">FECAP</span>
        </h2>
        <p className="w-[990px] text-center mt-12 text-xl text-blue300">
          Os MBAs FECAP seguem os padrões de qualidade da ANAMBA - Associação
          Nacional de MBA, o que prova nossa excelência de ensino. Nosso curso
          MBA em Gestão de Negócios é acreditado global.
        </p>
        <img className="mt-32" src={anambaLogo} alt="Logo da Anamba" />
      </div>
      <div className="h-[930px] bg-black100 flex flex-col items-center justify-center">
        <h1 className="text-green200 font-bold text-4xl  border-2 border-white p-4">
          DIFERENCIAIS FECAP E CORE
        </h1>
        <div className="mt-32 flex items-cente justify-evenly w-full">
          <div className="flex flex-col items-center text-center justify-center w-[340px]">
            <img src={professor} />
            <div className="h-1 w-[138px] bg-green200 mt-6" />
            <p className="text-xl text-white mt-5">
              Corpo docente com relevante experiência profissional
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center w-[340px]">
            <img src={networking} />
            <div className="h-1 w-[138px] bg-green200 mt-6" />
            <p className="text-xl text-white mt-5">
              Possibilidade de networking
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center w-[340px]">
            <img src={pasta} />
            <div className="h-1 w-[138px] bg-green200 mt-6" />
            <p className="text-xl text-white mt-5">
              Reconhecimento no mercado de trabalho
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center w-[340px]">
            <img src={contrucao} />
            <div className="h-1 w-[138px] bg-green200 mt-6" />
            <p className="text-xl text-white mt-5">
              Estrutura completa para alunos da Core
            </p>
          </div>
        </div>
      </div>
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
