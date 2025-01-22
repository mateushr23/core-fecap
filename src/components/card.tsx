interface CardProps {
  nome: string
  cardDescricao?: string
  cardImg?: string
  cardTag1?: string
  cardTag2?: string
  cardTag3?: string
}

export function Card({
  nome,
  cardDescricao,
  cardImg,
  cardTag1,
  cardTag2,
  cardTag3,
}: CardProps) {
  return (
    <div className="w-[380px] p-4 bg-white200 rounded-3xl shadow-md flex flex-col">
      <div className="bg-green200 h-[190px] rounded-3xl overflow-hidden">
        <img src={cardImg} />
      </div>
      <div className="flex-grow mx-4">
        <h1 className="mt-7 text-gray300 font-bold text-2xl">{nome}</h1>
        <div className="flex gap-3 mt-4 mb-4">
          {cardTag1 && (
            <div className="text-green100 border-green200 border rounded-full px-4 py-2 text-xs">
              {cardTag1}
            </div>
          )}
          {cardTag2 && (
            <div className="text-gray400 border-gray500 border rounded-full px-4 py-2 text-xs">
              {cardTag2}
            </div>
          )}
          {cardTag3 && (
            <div className="text-blue100 border-blue200 border rounded-full px-4 py-2 text-xs">
              {cardTag3}
            </div>
          )}
        </div>
        <p className="text-gray300 text-sm">{cardDescricao}</p>
      </div>
      <div className="flex justify-between mt-4 mx-4 mb-4">
        <button className="border border-green200 rounded-2xl font-bold px-4 py-2 text-green200 hover:bg-green200 hover:text-white transition delay-80">
          INSCREVA-SE
        </button>
        <button className="text-gray300 underline hover:font-semibold transition delay-80">
          SAIBA MAIS
        </button>
      </div>
    </div>
  )
}
