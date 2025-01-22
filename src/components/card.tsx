interface CardProps {
  nome: string
  descricao?: string
}

export function Card({ nome, descricao }: CardProps) {
  return (
    <div className="w-[380px] p-4 bg-white200 rounded-3xl shadow-md">
      <div className="bg-green200 h-[190px] rounded-3xl"></div>
      <div className="mx-4">
        <h1 className="mt-7 text-gray300 font-bold text-2xl">{nome}</h1>
        <div className="flex gap-3 mt-4 mb-4">
          <div className="text-green100 border-green200 border rounded-full px-4 py-2 text-xs">
            CURTA-DURAÇÃO
          </div>
          <div className="text-gray400 border-gray500 border rounded-full px-4 py-2 text-xs">
            EAD
          </div>
          <div className="text-blue100 border-blue200 border rounded-full px-4 py-2 text-xs">
            LIDERANÇA
          </div>
        </div>
        <p className="text-gray300 text-sm">{descricao}</p>
        <div className="mt-4 flex justify-between mb-8">
          <button className="border border-green200 rounded-2xl font-bold px-4 py-2 text-green200 hover:bg-green200 hover:text-white transition delay-80">
            INSCREVA-SE
          </button>
          <button className="text-gray300 underline hover:font-semibold transition delay-80">
            SAIBA MAIS
          </button>
        </div>
      </div>
    </div>
  )
}
