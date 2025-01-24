import { useState, useEffect } from "react"
import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import carrossel1 from "../../assets/images/carrossel1.png"
import carrossel1Mobile from "../../assets/images/carrosselMobile1.png"
import coreFecapLogo from "../../assets/images/core-fecap-white.png"
import { Card } from "../../components/card"
import { Diferenciais } from "../../components/diferenciais"
import { Qualidade } from "../../components/qualidade"
import { cursoData } from "../../assets/cursos"
import rightGreenArrow from "../../assets/images/right-green-arrow.png"
import leftGreenArrow from "../../assets/images/left-green-arrow.png"

export function Mba() {
  const filteredData = cursoData.filter((curso) => curso.categoria === "mba")
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const visibleCardsSmallScreen = 1

  // Efeito para ajustar o número de cards visíveis com base na largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(visibleCardsSmallScreen) // Tela pequena
      } else {
        setVisibleCards(3) // Tela grande
      }
      // Recalcula o startIndex para garantir que ele esteja correto após o redimensionamento
      setStartIndex(0)
    }

    // Adiciona evento de resize na tela
    window.addEventListener("resize", handleResize)

    // Chama a função uma vez para garantir que o layout esteja correto na inicialização
    handleResize()

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleNext = () => {
    if (startIndex + visibleCards < filteredData.length) {
      setStartIndex(startIndex + visibleCards)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCards)
    }
  }

  return (
    <div>
      <img
        className="w-full hidden xl:block"
        src={carrossel1}
        alt="Banner de desconto Fecap"
      />
      <img
        className="w-full xl:hidden"
        src={carrossel1Mobile}
        alt="Banner de desconto Fecap para mobile"
      />
      <div className="h-[2050px] bg-black100 flex flex-col items-center">
        <div className="flex flex-col items-center w-screen text-center">
          <h1 className="mt-48 text-white font-bold text-4xl">
            ESTAMOS PRONTOS PARA TE{" "}
            <span className="text-green200">LEVAR A OUTRO NÍVEL!</span>
          </h1>
          <img className="mt-32" src={coreFecapLogo} />
          <p className="text-white text-xl lg:w-[960px] text-center mt-24">
            A Core é parceira fecap em todos MBA’s, escolhidos para você, com
            mestres e professores renomados do mercado, com qualificação para te
            passar toda experiência.
          </p>
        </div>
        <div className="mt-96 flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center">
            MBA’S DISPONÍVEIS
          </h1>
          {/* Tela pequena */}
          <div className="xl:hidden flex flex-col items-center gap-7 mt-32">
            {filteredData.length > 0 ? (
              <>
                <div className="flex gap-7">
                  <button onClick={handlePrev} disabled={startIndex === 0}>
                    <img src={leftGreenArrow} />
                  </button>
                  {/* Container de cards visíveis */}
                  {filteredData
                    .slice(startIndex, startIndex + visibleCardsSmallScreen)
                    .map((curso) => (
                      <Card
                        key={curso.id}
                        nome={curso.nome}
                        cardDescricao={curso.cardDescricao}
                        cardImg={curso.cardImg}
                        cardTag1={curso.cardTag1}
                        cardTag2={curso.cardTag2}
                        cardTag3={curso.cardTag3}
                        cardTag4={curso.cardTag4}
                        cursoId={curso.id}
                        categoria={curso.categoria}
                      />
                    ))}
                  <button
                    onClick={handleNext}
                    disabled={
                      startIndex + visibleCardsSmallScreen >=
                      filteredData.length
                    }
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
          {/* Tela grande */}
          <div className="hidden xl:flex flex-col items-center gap-7 mt-32">
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
                        cardImg={curso.cardImg}
                        cardTag1={curso.cardTag1}
                        cardTag2={curso.cardTag2}
                        cardTag3={curso.cardTag3}
                        cardTag4={curso.cardTag4}
                        cursoId={curso.id}
                        categoria={curso.categoria}
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
