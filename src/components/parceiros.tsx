import parceiros from "../assets/images/parceiros.png"

export function Parceiros() {
  return (
    <div className="bg-blue400 items-center text-center flex flex-col justify-center h-[800px]">
      <h1 className="text-white font-bold text-3xl md:text-4xl text-center m-2">
        AMPLA GAMA DE PARCEIROS PARA
      </h1>
      <h2 className="text-green200 font-bold text-3xl md:text-4xl mt-2 mx-2">
        TE ENTREGAR O MELHOR
      </h2>
      <div className="h-[4px] w-[240px] bg-green200 mt-6 mb-16" />
      <img
        className="w-80 md:w-auto px-4"
        src={parceiros}
        alt="Ícones das parcerias"
      />
    </div>
  )
}
