import escola from "../assets/escola-fachada.png"

export function BannerEscola() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        className="w-full h-auto object-cover"
        src={escola}
        alt="Banner da escola"
      />
      <div className="absolute flex-col inset-0 flex items-center justify-center">
        <div className="w-[800px] text-center">
          <h1 className="text-white font-bold text-4xl">
            VIVA UMA EXPERIÊNCIA TRANSFORMADORA
          </h1>
          <h2 className="text-green200 font-bold text-4xl mb-6 mt-2">
            COM A INOVAÇÃO ESTRATÉGICA
          </h2>
          <p className="text-white text-xl">
            A CORE é uma empresa jovem e moderna, dedicada a proporcionar aos
            seus clientes as melhores estratégias, alinhadas às demandas do
            mercado.
          </p>
          <button className="mt-8 border-2 border-green200 py-3 px-6 text-green200 font-bold rounded-2xl">
            CONHEÇA A CORE
          </button>
        </div>
      </div>
    </div>
  )
}
