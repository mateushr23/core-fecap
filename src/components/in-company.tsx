import whatsapp from "../assets/images/whatsapp.png"
import barChart from "../assets/images/bar-chart.png"
import fileText from "../assets/images/file-text.png"
import layers from "../assets/images/layers.png"
import circleCheck from "../assets/images/check-circle.png"
import person from "../assets/images/person.png"

export function InCompany() {
  return (
    <div className="flex relative">
      <img
        className="absolute bottom-0 left-[48%] transform -translate-x-1/2"
        src={person}
      />
      <div className="bg-blue300 h-[800px] w-[800px] flex flex-col items-center justify-center">
        <div>
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
            <button className="px-5 py-2 border-2 border-silver font-bold text-sm rounded-2xl text-silver">
              SOBRE IN-COMPANY
            </button>
            <button className="flex gap-2 items-center justify-center border-2 border-green200 text-green200 font-bold text-sm rounded-2xl py-2 px-5">
              <img src={whatsapp} alt="Ícone Whatsapp" />
              Enviar Whatsapp
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-white400 to-gray200 flex-1 flex items-center">
        <div className="bg-blue300 ml-[40%] w-[560px] rounded-3xl px-20 py-10 flex gap-10">
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
