import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules" // Ativa o uso de setas
// @ts-ignore
import "swiper/css"
// @ts-ignore
import "swiper/css/navigation"
import { useState, useEffect } from "react"
import carrossel1 from "../assets/images/carrossel1.png"
import carrossel2 from "../assets/images/carrossel2.png"
import carrossel3 from "../assets/images/carrossel3.png"
import carrosselMobile1 from "../assets/images/carrosselMobile1.png"
import carrosselMobile2 from "../assets/images/carrosselMobile2.png"
import carrosselMobile3 from "../assets/images/carrosselMobile3.png"

export function Carrossel() {
  const desktopImages = [carrossel1, carrossel2, carrossel3]
  const mobileImages = [carrosselMobile1, carrosselMobile2, carrosselMobile3]

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
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
      <Swiper
        modules={[Navigation]} // Ativando o módulo de navegação
        navigation // Adiciona botões de navegação automáticos
        loop={true} // Permite loop infinito
        autoplay={{ delay: 10000 }} // Troca automática a cada 10s
        spaceBetween={0} // Remove espaçamento entre slides
        slidesPerView={1} // Mostra um slide por vez
        className="w-full" // Garante que o carrossel ocupe toda a largura
        initialSlide={2} // Define o slide inicial (índice 2 = terceira imagem)
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              onClick={handleCarrosselClick}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
