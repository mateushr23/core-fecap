import banner1 from "../assets/images/banner1.png"
import leftArrow from "../assets/images/left-arrow.png"
import rightArrow from "../assets/images/right-arrow.png"

export function Carrossel() {
  return (
    <div className="relative w-full ">
      <img
        src={banner1}
        alt="Banner de inscrição da FECAP"
        className="w-full"
      />
      <img
        src={leftArrow}
        alt="Seta para a esquerda"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
      />
      <img
        src={rightArrow}
        alt="Seta para a direita"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
      />
    </div>
  )
}
