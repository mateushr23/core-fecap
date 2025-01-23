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
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-10 justify-between">
        <div className="flex flex-col justify-center ml-4 md:ml-6 lg:ml-16">
          <div className="w-[120px] md:w-[300px] lg:w-[400px]">
            <h1 className="text-white text-lg font-bold lg:text-4xl mb-2">
              CAPACITAÇÃO
              <br /> IN COMPANY
            </h1>
            <p className="font-bold text-xs lg:text-base text-silver hidden md:inline">
              Soluções Educacionais no âmbito Profissional, Organizacional e
              Pessoal, de Alto Impacto.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:mt-10 md:flex-row">
            <Link
              to={"/incompany"}
              onClick={() => window.scrollTo(0, 0)}
              className="lg:px-5 lg:py-2 border px-2 py-1 lg:border-2 flex justify-center items-center border-silver font-bold text-xs  lg:text-sm rounded-2xl text-silver"
            >
              SOBRE
            </Link>
            <button
              onClick={handleWhatsappRedirect}
              className="flex gap-2 items-center py-1 justify-center border lg:border-2 border-green200 text-green200 font-bold text-xs lg:text-sm rounded-2xl lg:py-2 lg:px-5 md:px-2"
            >
              <img className="w-5" src={whatsapp} alt="Ícone Whatsapp" />
              Whatsapp
            </button>
          </div>
        </div>
        <div className="relative right-4 bg-blue300 ml-24 w-[160px] md:right-10 lg-right md:w-[250px] p-5 lg:w-[500px] rounded-3xl flex gap-3 lg:gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center lg:gap-8">
              <img className="w-6 lg:w-10 h-4 lg:h-10" src={barChart} />
              <div>
                <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                  Diagnóstico
                </h2>
                <p className="text-silver text-sm hidden lg:inline">
                  Identificação e análise das necessidades, expectativas e
                  resultados
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center lg:gap-8">
              <img className="w-6 lg:w-10 h-4 lg:h-10" src={fileText} />
              <div>
                <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                  Planejamento
                </h2>
                <p className="text-silver text-sm hidden lg:inline">
                  Desenvolvimento de plano de ação sob medida
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center lg:gap-8">
              <img className="w-6 lg:w-10 h-4 lg:h-10" src={layers} />
              <div>
                <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                  Implantação
                </h2>
                <p className="text-silver text-sm hidden lg:inline">
                  Implementação de soluções com acompanhamento
                  <br /> contínuo para ajustes conforme necessidade
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center lg:gap-8">
              <img className="w-6 lg:w-10 h-4 lg:h-10" src={circleCheck} />
              <div>
                <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                  Avaliação
                </h2>
                <p className="text-silver text-sm hidden lg:inline">
                  Avaliação dos resultados alcançados de acordo
                  <br />
                  com os KPI’s, previamente definidos
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-1 lg:gap-8 mt-2">
            <img className="w-5" src={barChart} />
            <img className="w-5" src={fileText} />
            <img className="w-5" src={layers} />
            <img className="w-5" src={circleCheck} />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 w-[160px] lg:w-[340px]">
            <div>
              <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                Diagnóstico
              </h2>
              <p className="text-silver  lg:text-sm hidden">
                Identificação e análise das necessidades, expectativas e
                resultados
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                Planejamento
              </h2>
              <p className="text-silver lg:text-sm hidden">
                Desenvolvimento de plano de ação sob medida
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                Implantação e acompanhamento{" "}
              </h2>
              <p className="text-silver lg:text-sm hidden">
                Implementação de soluções com
                <br />
                acompanhamento contínuo para ajustes conforme necessidade
              </p>
            </div>
            <div>
              <h2 className="text-blue200 font-bold text-xs lg:text-sm">
                Avaliação de Resultados
              </h2>
              <p className="text-silver lg:text-sm hidden">
                Avaliação dos resultados alcançados de acordo
                <br />
                com os KPI’s, previamente definidos
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
