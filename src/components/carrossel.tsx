import { useState, useEffect } from "react"
import carrossel1 from "../assets/images/carrossel1.png"
import carrossel2 from "../assets/images/carrossel2.png"
import carrossel3 from "../assets/images/carrossel3.png"
import carrossel4 from "../assets/images/carrossel4.png"
import leftArrow from "../assets/images/left-arrow.png"
import rightArrow from "../assets/images/right-arrow.png"

export function Carrossel() {
  const images = [carrossel1, carrossel2, carrossel3, carrossel4]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Função para avançar para a próxima imagem
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Função para retroceder para a imagem anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Configuração do intervalo para troca automática de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 10000) // Troca a cada 5 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval)
  }) // Executa apenas uma vez após o primeiro render

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        className="w-full"
      />
      <img
        src={leftArrow}
        alt="Seta para a esquerda"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handlePrev}
      />
      <img
        src={rightArrow}
        alt="Seta para a direita"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  )
}
