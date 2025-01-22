import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import carrossel1 from "../../assets/images/carrossel1.png"
import coreFecapLogo from "../../assets/images/core-fecap-white.png"
import { Card } from "../../components/card"
import { Diferenciais } from "../../components/diferenciais"
import { Qualidade } from "../../components/qualidade"
import { cursoData } from "../../assets/cursos"
import { useState } from "react"
import rightGreenArrow from "../../assets/images/right-green-arrow.png"
import leftGreenArrow from "../../assets/images/left-green-arrow.png"

export function Mba() {
  const filteredData = cursoData.filter((curso) => curso.categoria === "mba")
  const [startIndex, setStartIndex] = useState(0)
  const visibleCards = 3

  const handleNext = () => {
    if (startIndex + visibleCards < filteredData.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div>
      <img className="w-full" src={carrossel1} alt="Banner de desconto Fecap" />
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
            {filteredData.length > 0 ? (
              <>
                <div className="flex gap-7">
                  <button onClick={handlePrev} disabled={startIndex === 0}>
                    <img src={leftGreenArrow} />
                  </button>
                  {/* Container de cards visíveis */}
                  {filteredData
                    .slice(startIndex, startIndex + visibleCards)
                    .map((curso) => (
                      <Card
                        key={curso.id}
                        nome={curso.nome}
                        cardDescricao={curso.cardDescricao}
                        categoria={curso.categoria}
                        cursoId={curso.id}
                        cardImg={curso.cardImg}
                        cardTag1={curso.cardTag1}
                        cardTag2={curso.cardTag2}
                        cardTag3={curso.cardTag3}
                      />
                    ))}
                  <button
                    onClick={handleNext}
                    disabled={startIndex + visibleCards >= filteredData.length}
                  >
                    <img src={rightGreenArrow} />
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray300 text-lg mt-10">
                Nenhum curso nessa categoria.
              </p>
            )}
          </div>
        </div>
      </div>
      <Qualidade />
      <Diferenciais />
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
