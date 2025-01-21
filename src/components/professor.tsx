import { professorData } from "../assets/professores"

interface ProfessorProps {
  variant: string | undefined
}

export function Professor({ variant }: ProfessorProps) {
  const professor = professorData.find((prof) => prof.variant === variant)

  return (
    <div
      className={`h-[1200px] ${professor?.cores.div} flex flex-col items-center`}
    >
      <h1 className="font-bold text-white bg-green200 w-[560px] py-4 text-3xl text-center mt-52 mb-24">
        {professor?.titulo}
      </h1>
      <div
        className={`flex w-[1110px] h-[520px] items-center text-center ${professor?.cores.background}`}
      >
        <img
          className="h-full flex-grow"
          src={professor?.img}
          alt="Professor Luciano Nurnberg"
        />
        <div
          className={`w-[790px] h-full text-justify ${professor?.cores.text} `}
        >
          <h1 className="ml-6 mt-6 font-bold text-3xl">{professor?.nome}</h1>
          <p className="mt-8 ml-6 mr-20 text-base">{professor?.descricao}</p>
          <div className="flex gap-4 ml-6 mt-5">
            {professor?.linkedin && (
              <a
                className="border-2 border-gray700 text-gray600 text-base font-semibold px-4 py-2 rounded-3xl"
                href={professor?.linkedin}
                target="_blank"
              >
                Linkedin
              </a>
            )}

            {professor?.lattes && (
              <a
                className="border-2 border-gray700 text-gray600 text-base font-semibold px-4 py-2 rounded-3xl"
                href={professor?.lattes}
                target="_blank"
              >
                LATTES
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
