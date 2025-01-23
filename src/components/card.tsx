import { Link } from "react-router-dom"
import { whatsappConfig } from "../assets/whatsapp-config"
import { cursoData } from "../assets/cursos"

interface CardProps {
  nome: string
  cardDescricao?: string
  cardImg?: string
  cardTag1?: string
  cardTag2?: string
  cardTag3?: string
  cardTag4?: string
  cursoId: string
  categoria: string
}

export function Card({
  nome,
  cardDescricao,
  cardImg,
  cardTag1,
  cardTag2,
  cardTag3,
  cardTag4,
  cursoId,
  categoria,
}: CardProps) {
  const curso = cursoData.find(
    (curso) => curso.id === cursoId && curso.categoria === categoria
  )

  const handleInscrevase = (): void => {
    if (curso) {
      if (categoria === "mba") {
        // Redirecionar para o link específico caso a categoria seja MBA
        window.open(curso.mbaLink, "_blank")
      } else {
        // Enviar mensagem no WhatsApp caso a categoria não seja MBA
        const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "")
        const message = encodeURIComponent(
          `Olá, gostaria de me inscrever no curso ${curso.nome}!`
        )
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(whatsappUrl, "_blank")
      }
    }
  }

  return (
    <div className="w-[280px] md:w-[380px] p-4 bg-white200 rounded-3xl shadow-md flex flex-col">
      <div className="bg-green200 md:h-[190px] rounded-3xl overflow-hidden">
        <img src={cardImg} />
      </div>
      <div className="flex-grow mx-4">
        <h1 className="mt-2 md:mt-7 text-gray500 font-bold md:text-2xl">
          {nome}
        </h1>
        <div className="flex flex-col gap-3 mt-4 md:mb-4">
          <div className="hidden md:flex gap-3">
            {cardTag1 && (
              <div className="text-green100 border-green200 border rounded-full px-4 py-2 text-xs w-fit">
                {cardTag1}
              </div>
            )}
            {cardTag2 && (
              <div className="text-gray400 border-gray500 border rounded-full px-4 py-2 text-xs w-fit">
                {cardTag2}
              </div>
            )}
            {cardTag3 && (
              <div className="text-blue100 border-blue200 border rounded-full px-4 py-2 text-xs w-fit">
                {cardTag3}
              </div>
            )}
          </div>
          {cardTag4 && (
            <div className="hidden md:inline text-brown100 border-brown100 border rounded-full px-4 py-2 text-xs w-fit">
              {cardTag4}
            </div>
          )}
        </div>
        <p className="text-gray500 text-sm">{cardDescricao}</p>
      </div>
      <div className="flex items-center justify-between mt-4 mx-4 mb-4">
        <button
          onClick={handleInscrevase}
          className="md:text-base text-sm border border-green200 rounded-2xl font-bold px-2 md:px-4 md:py-2 text-green200 hover:bg-green200 hover:text-white transition delay-80"
        >
          INSCREVA-SE
        </button>
        <Link
          to={`/curso/${categoria}/${cursoId}`}
          onClick={() => window.scrollTo(0, 0)}
          className="md:text-base text-sm text-gray300 underline hover:font-semibold transition delay-80"
        >
          SAIBA MAIS
        </Link>
      </div>
    </div>
  )
}
