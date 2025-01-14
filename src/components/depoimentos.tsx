import rightArrow from "../assets/images/right-green-arrow.png"
import leftArrow from "../assets/images/left-green-arrow.png"

export function Depoimentos() {
  return (
    <div className="h-[680px] bg-white300 flex justify-center items-center gap-44">
      <div>
        <h1 className="text-4xl text-blue300">
          DEPOIMENTOS DOS
          <br /> <span className="text-4xl font-bold">NOSOS ALUNOS</span>
        </h1>
        <div className="flex gap-10 mt-11">
          <button className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-md">
            <img className="mr-2" src={leftArrow} />
          </button>
          <button className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-md">
            <img className="ml-2" src={rightArrow} />
          </button>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="bg-white200 shadow-md rounded-3xl w-[370px] h-[370px] flex justify-center flex-col text-center p-8">
          <p className="text-base text-gray500">
            A CORE me ajudou a conseguir voltar ao mercado de trabalho em uma
            área que gosto muito, estou realmente feliz com o resultado que
            consegui e as aulas dos professores/mentores.
          </p>
          <h4 className="font-bold text-gray500 text-base mt-7">
            Diogo Machado
          </h4>
          <h4 className="text-gray400 text-base mt-4">Aluno Curta-Duração</h4>
        </div>
        <div className="bg-white200 shadow-md rounded-3xl w-[370px] h-[370px] flex justify-center flex-col text-center p-8">
          <p className="text-base text-gray500">
            A CORE me ajudou a conseguir voltar ao mercado de trabalho em uma
            área que gosto muito, estou realmente feliz com o resultado que
            consegui e as aulas dos professores/mentores.
          </p>
          <h4 className="font-bold text-gray500 text-base mt-7">
            Diogo Machado
          </h4>
          <h4 className="text-gray400 text-base mt-4">Aluno Curta-Duração</h4>
        </div>
      </div>
    </div>
  )
}
