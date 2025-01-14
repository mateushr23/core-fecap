import professor from "../assets/images/professor.png"
import networking from "../assets/images/networking.png"
import pasta from "../assets/images/pasta.png"
import contrucao from "../assets/images/construcao.png"

export function Diferenciais() {
  return (
    <div className="h-[930px] bg-black100 flex flex-col items-center justify-center">
      <h1 className="text-green200 font-bold text-4xl  border-2 border-white p-4">
        DIFERENCIAIS FECAP E CORE
      </h1>
      <div className="mt-32 flex items-cente justify-evenly w-full">
        <div className="flex flex-col items-center text-center justify-center w-[340px]">
          <img src={professor} />
          <div className="h-1 w-[138px] bg-green200 mt-6" />
          <p className="text-xl text-white mt-5">
            Corpo docente com relevante experiência profissional
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center w-[340px]">
          <img src={networking} />
          <div className="h-1 w-[138px] bg-green200 mt-6" />
          <p className="text-xl text-white mt-5">Possibilidade de networking</p>
        </div>
        <div className="flex flex-col items-center text-center justify-center w-[340px]">
          <img src={pasta} />
          <div className="h-1 w-[138px] bg-green200 mt-6" />
          <p className="text-xl text-white mt-5">
            Reconhecimento no mercado de trabalho
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center w-[340px]">
          <img src={contrucao} />
          <div className="h-1 w-[138px] bg-green200 mt-6" />
          <p className="text-xl text-white mt-5">
            Estrutura completa para alunos da Core
          </p>
        </div>
      </div>
    </div>
  )
}
