import { useState, useEffect } from "react"
import carrossel1 from "../assets/images/carrossel1.png"
import carrossel2 from "../assets/images/carrossel2.png"
import carrossel3 from "../assets/images/carrossel3.png"
import carrosselMobile1 from "../assets/images/carrosselMobile1.png"
import carrosselMobile2 from "../assets/images/carrosselMobile2.png"
import carrosselMobile3 from "../assets/images/carrosselMobile3.png"
import leftArrow from "../assets/images/left-arrow.png"
import rightArrow from "../assets/images/right-arrow.png"

export function Carrossel() {
  const desktopImages = [carrossel1, carrossel2, carrossel3]
  const mobileImages = [carrosselMobile1, carrosselMobile2, carrosselMobile3]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Função para avançar para a próxima imagem
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Função para retroceder para a imagem anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desktopImages.length - 1 : prevIndex - 1
    )
  }

  // Configuração do intervalo para troca automática de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 10000) // Troca a cada 10 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval)
  })

  // Detectar mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Define como "mobile" para telas menores que 768px
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const images = isMobile ? mobileImages : desktopImages

  const handleCarrosselClick = () => {
    const fecapUrl = `https://www.fecap.br/`
    window.open(fecapUrl, "_blank")
  }

  return (
    <div className="relative w-full">
      {/* Imagem principal do carrossel */}
      <img
        onClick={handleCarrosselClick}
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        className="w-full"
      />

      {/* Botão Anterior */}
      <img
        src={leftArrow}
        alt="Seta para a esquerda"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handlePrev}
      />

      {/* Botão Próximo */}
      <img
        src={rightArrow}
        alt="Seta para a direita"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  )
}
