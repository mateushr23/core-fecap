import { Link } from "react-router-dom"
import escola from "../assets/images/escola-fachada.png"

export function BannerEscola() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        className="w-full h-auto object-cover"
        src={escola}
        alt="Banner da escola"
      />
      <div className="absolute flex-col inset-0 flex items-center justify-center">
        <div className="w-[800px] text-center items-center flex flex-col">
          <h1 className="text-white font-bold text-xs md:text-xl lg:text-4xl">
            VIVA UMA EXPERIÊNCIA TRANSFORMADORA
          </h1>
          <h2 className="text-green200 font-bold text-xs md:text-xl lg:text-4xl mb-6 mt-2">
            COM EXCELÊNCIA, INOVAÇÃO E RESULTADOS
          </h2>
          <p className="mx-4 text-white text-sm lg:text-lg mb-8 hidden md:inline">
            A CORE é uma empresa jovem e moderna, dedicada a proporcionar aos
            seus clientes as melhores estratégias, alinhadas às demandas do
            mercado.
          </p>
          <Link
            to={"/institucional"}
            onClick={() => window.scrollTo(0, 0)}
            className="border-2 text-xs border-green200 py-1 px-3 md:py-3 md:px-6 text-green200 font-bold rounded-2xl"
          >
            CONHEÇA A CORE
          </Link>
        </div>
      </div>
    </div>
  )
}
