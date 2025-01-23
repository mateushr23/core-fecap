import { ChangeEvent, useState } from "react"
import { Carrossel } from "../../components/carrossel"
import { BannerEscola } from "../../components/banner-escola"
import { Parceiros } from "../../components/parceiros"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Card } from "../../components/card"
import search from "../../assets/images/search.png"
import banner2 from "../../assets/images/banner2.png"
import banner2Mobile from "../../assets/images/banner2Mobile.png"
import { Link, useNavigate } from "react-router-dom"
import { cursoData, Data } from "../../assets/cursos"
import leftArrow from "../../assets/images/left-green-arrow.png"
import rightArrow from "../../assets/images/right-green-arrow.png"

export function Home() {
  const [isCurtaButtonOpen, setCurtaIsButtonOpen] = useState(false)
  const [isTecnicoButtonOpen, setTecnicoIsButtonOpen] = useState(false)
  const [isMbaButtonOpen, setMbaIsButtonOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCursos, setFilteredCursos] = useState<Data[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const handleNext = () => {
    // Vai para o próximo card, volta ao início no final do array
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specificCursos.length)
  }

  const handlePrev = () => {
    // Volta para o card anterior, vai para o último no início do array
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + specificCursos.length) % specificCursos.length
    )
  }

  const specificCursos = cursoData.filter(
    (curso) =>
      (curso.id === "2" || curso.id === "4" || curso.id === "9") &&
      curso.categoria === "curta"
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value) {
      const filtered = cursoData.filter((curso) =>
        curso.nome.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
      setFilteredCursos(filtered)
    } else {
      setFilteredCursos([])
    }
  }

  const generateSlug = (categoria: string, id: string) =>
    `/curso/${categoria}/${id}`

  const handleSuggestionClick = (categoria: string, id: string) => {
    const slug = generateSlug(categoria, id)
    setSearchTerm("")
    setFilteredCursos([])
    navigate(slug)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Carrossel />
      {/* Barra de busca e botões de categorias */}
      <div className="h-[750px] flex flex-col items-center justify-center bg-white100">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 w-screen md:w-[600px] lg:w-[1000px] border border-green200 rounded-full py-6 px-8 relative">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-full focus:outline-none bg-white100 "
              type="text"
              placeholder="Pesquisar curso desejado..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {filteredCursos.length > 0 && (
              <ul className="absolute top-full z-10 w-screen md:w-[520px] lg:w-[920px] bg-white100 border rounded shadow-lg max-h-40 overflow-y-auto">
                {filteredCursos.map((curso) => (
                  <li
                    key={curso.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleSuggestionClick(curso.categoria, curso.id)
                    }
                  >
                    {curso.nome}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-24 flex flex-col lg:flex-row gap-14">
            <div className="relative">
              <button
                className="relative flex items-center p-2 gap-2 bg-gray100 w-full py-4 md:px-14 md:py-9 text-blue300 font-bold text-2xl shadow-md"
                onClick={() => setCurtaIsButtonOpen(!isCurtaButtonOpen)}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={
                      isCurtaButtonOpen ? "text-red200" : "text-green200"
                    }
                  >
                    {isCurtaButtonOpen ? "×" : "+"}
                  </span>
                  CURTA-DURAÇÃO
                </span>
                <div className="absolute bottom-0 w-full left-0 bg-green200 h-[12px]" />
              </button>
              {isCurtaButtonOpen && (
                <Link
                  to={"/curta-duracao"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md"
                >
                  <p className="text-2xl">CONHECER CURSOS</p>
                </Link>
              )}
            </div>
            <div className="relative">
              <button
                className="relative justify-center flex items-center gap-2 bg-gray100 w-full py-4 md:px-14 md:py-9 text-blue300 font-bold text-2xl shadow-md"
                onClick={() => setTecnicoIsButtonOpen(!isTecnicoButtonOpen)}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={
                      isTecnicoButtonOpen ? "text-red200" : "text-green200"
                    }
                  >
                    {isTecnicoButtonOpen ? "×" : "+"}
                  </span>
                  TÉCNICOS
                </span>
                <div className="absolute bottom-0 w-full left-0 bg-green200 h-[12px]" />
              </button>
              {isTecnicoButtonOpen && (
                <Link
                  to={"/tecnicos"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="absolute h-[40px]  w-full bg-green200 text-white text-center shadow-md"
                >
                  <p className="text-2xl">CONHECER CURSOS</p>
                </Link>
              )}
            </div>
            <div className="relative">
              <button
                className="relative justify-center flex items-center gap-2 bg-gray100 w-full py-4 md:px-14 md:py-9 text-blue300 font-bold text-2xl shadow-md"
                onClick={() => setMbaIsButtonOpen(!isMbaButtonOpen)}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={
                      isMbaButtonOpen ? "text-red200" : "text-green200"
                    }
                  >
                    {isMbaButtonOpen ? "×" : "+"}
                  </span>
                  MBA(FECAP)
                </span>
                <div className="absolute bottom-0 w-full left-0 bg-green200 h-[12px]" />
              </button>
              {isMbaButtonOpen && (
                <Link
                  to={"/mba"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md"
                >
                  <p className="text-2xl">CONHECER CURSOS</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Cursos de curta duracao */}
      <div className="h-[1200px] bg-white300 flex flex-col items-center">
        {/* Título */}
        <h1 className="text-blue300 font-bold text-2xl lg:text-4xl mt-40 text-center">
          NOSSOS CURSOS DE CURTA-DURAÇÃO
        </h1>
        <h2 className="text-green200 font-bold text-2xl lg:text-4xl mt-2 text-center">
          VÃO TE ALAVANCAR NO MERCADO DE TRABALHO!
        </h2>

        {/* Layout para telas pequenas (1 card com botões laterais) */}
        <div className="relative w-full flex justify-center items-center mt-20 xl:hidden">
          <div className="relative flex items-center justify-center">
            {/* Botão Anterior */}
            <button
              onClick={handlePrev}
              className="absolute  top-[50%] left-[-60px] transform -translate-y-1/2 px-4 py-2 rounded hover:bg-gray-400"
            >
              <img src={leftArrow} />
            </button>
            {/* Card atual */}
            <Card
              nome={specificCursos[currentIndex].nome}
              cardDescricao={specificCursos[currentIndex].cardDescricao}
              cardImg={specificCursos[currentIndex].cardImg}
              cardTag1={specificCursos[currentIndex].cardTag1}
              cardTag2={specificCursos[currentIndex].cardTag2}
              cardTag3={specificCursos[currentIndex].cardTag3}
              cardTag4={specificCursos[currentIndex].cardTag4}
              categoria={specificCursos[currentIndex].categoria}
              cursoId={specificCursos[currentIndex].id}
            />
            {/* Botão Próximo */}
            <button
              onClick={handleNext}
              className="absolute top-[50%] right-[-60px] transform -translate-y-1/2 px-4 py-2 rounded hover:bg-gray-400"
            >
              <img src={rightArrow} />
            </button>
          </div>
        </div>

        {/* Layout para telas grandes (3 cards exibidos lado a lado) */}
        <div className="hidden xl:flex gap-7 mt-20">
          {specificCursos.map((curso) => (
            <Card
              key={curso.id}
              nome={curso.nome}
              cardDescricao={curso.cardDescricao}
              cardImg={curso.cardImg}
              cardTag1={curso.cardTag1}
              cardTag2={curso.cardTag2}
              cardTag3={curso.cardTag3}
              cardTag4={curso.cardTag4}
              categoria={curso.categoria}
              cursoId={curso.id}
            />
          ))}
        </div>
        <Link
          to={"/curta-duracao"}
          onClick={() => window.scrollTo(0, 0)}
          className="mt-28 border-2 border-green200 text-green200 font-bold py-5 px-6 rounded-2xl text-center"
        >
          CONHEÇA TODOS OS CURTA-DURAÇÃO
        </Link>
      </div>
      <img
        className="w-full hidden xl:block"
        src={banner2}
        alt="Banner de desconto Fecap"
      />
      <img
        className="w-full xl:hidden"
        src={banner2Mobile}
        alt="Banner de desconto Fecap para mobile"
      />
      <BannerEscola />
      <Parceiros />
      <InCompany />
      <InfoForm />
    </div>
  )
}
