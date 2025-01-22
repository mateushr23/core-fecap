import whatsapp from "../assets/images/whatsapp.png"
import barChart from "../assets/images/bar-chart.png"
import fileText from "../assets/images/file-text.png"
import layers from "../assets/images/layers.png"
import circleCheck from "../assets/images/check-circle.png"
import incompany from "../assets/images/incompany.png"
import { Link } from "react-router-dom"
import { whatsappConfig } from "../assets/whatsapp-config"

export function InCompany() {
  const handleWhatsappRedirect = (): void => {
    const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "")
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o In-Company!`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="relative w-full">
      <img className="w-full" src={incompany} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
        <div className="ml-72 mr-[25%]">
          <div className="w-[310px]">
            <h1 className="text-white font-bold text-4xl mb-6">
              CAPACITAÇÃO
              <br /> IN COMPANY
            </h1>
            <p className="font-bold text-base text-silver">
              Soluções Educacionais no âmbito Profissional, Organizacional e
              Pessoal, de Alto Impacto.
            </p>
          </div>
          <div className="mt-10 flex gap-2">
            <Link
              to={"/incompany"}
              onClick={() => window.scrollTo(0, 0)}
              className="px-5 py-2 border-2 flex justify-center items-center border-silver font-bold text-sm rounded-2xl text-silver"
            >
              SOBRE IN-COMPANY
            </Link>
            <button
              onClick={handleWhatsappRedirect}
              className="flex gap-2 items-center justify-center border-2 border-green200 text-green200 font-bold text-sm rounded-2xl py-2 px-5"
            >
              <img src={whatsapp} alt="Ícone Whatsapp" />
              Enviar Whatsapp
            </button>
          </div>
        </div>
        <div className="bg-blue300 w-[560px] rounded-3xl px-20 py-10 flex gap-10">
          <div className="flex flex-col gap-8 mt-2">
            <img src={barChart} />
            <img src={fileText} />
            <img src={layers} />
            <img className="mt-4" src={circleCheck} />
          </div>
          <div className="flex flex-col gap-4 w-[340px]">
            <div>
              <h2 className="text-blue200 font-bold text-sm">Diagnóstico</h2>
              <p className="text-silver text-sm">
                Identificação e análise das necessidades, expectativas e
                resultados
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-sm">Planejamento</h2>
              <p className="text-silver text-sm">
                Desenvolvimento de plano de ação sob medida
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-sm">
                Implantação e acompanhamento{" "}
              </h2>
              <p className="text-silver text-sm">
                Implementação de soluções com
                <br />
                acompanhamento contínuo para ajustes conforme necessidade
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-sm">
                Avaliação de Resultados
              </h2>
              <p className="text-silver text-sm">
                Avaliação dos resultados alcançados de acordo
                <br />
                com os KPI’s, previamente definidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
