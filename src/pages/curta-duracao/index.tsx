import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import bannerCurta from "../../assets/images/banner-curta.png"
import bannerCurtaMobile from "../../assets/images/bannerCurtaMobile.png"
import search from "../../assets/images/search.png"
import { Card } from "../../components/card"
import { ChangeEvent, useState } from "react"
import { cursoData, Data } from "../../assets/cursos"
import { useNavigate } from "react-router-dom"
import rightGreenArrow from "../../assets/images/right-green-arrow.png"
import leftGreenArrow from "../../assets/images/left-green-arrow.png"

export function CurtaDuracao() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCursos, setFilteredCursos] = useState<Data[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("todos")
  const navigate = useNavigate()
  const [todosIndex, setTodosIndex] = useState(0)
  const [maisProcuradosIndex, setMaisProcuradosIndex] = useState(0)

  const visibleCards = 3
  const visibleCardsSmallScreen = 1

  const specificCursos = cursoData.filter(
    (curso) =>
      (curso.id === "2" || curso.id === "4" || curso.id === "9") &&
      curso.categoria === "curta"
  )

  const filteredData = cursoData
    .filter((curso) => curso.categoria === "curta")
    .filter((curso) =>
      activeCategory === "todos"
        ? true
        : curso.categoriaCurta === activeCategory
    )

  const handleNext = () => {
    if (todosIndex + visibleCards < filteredData.length) {
      setTodosIndex(todosIndex + 1)
    }
  }

  const handlePrev = () => {
    if (todosIndex > 0) {
      setTodosIndex(todosIndex - 1)
    }
  }

  const handleNextMaisProcurados = () => {
    // Vai para o próximo card, volta ao início no final do array
    setMaisProcuradosIndex(
      (prevIndex) => (prevIndex + 1) % specificCursos.length
    )
  }

  const handlePrevMaisProcurados = () => {
    // Volta para o card anterior, vai para o último no início do array
    setMaisProcuradosIndex(
      (prevIndex) =>
        (prevIndex - 1 + specificCursos.length) % specificCursos.length
    )
  }

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

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category) // Atualiza a categoria ativa
    setTodosIndex(0) // Reinicia o índice de início
  }

  return (
    <div>
      <img className="w-full hidden xl:block" src={bannerCurta} />
      <img className="w-full xl:hidden" src={bannerCurtaMobile} />
      <div className="h-[590px] bg-white300 flex flex-col items-center justify-center">
        <h1 className="text-blue300 font-bold text-3xl md:text-4xl mb-16 text-center">
          VEJA NOSSOS CURSOS DISPONÍVEIS
        </h1>
        <div className="flex gap-2 w-screen md:w-[600px] lg:w-[1000px] border border-green200 rounded-full py-6 px-8 relative">
          <img src={search} alt="Ícone lupa de pesquisa" />
          <input
            className="w-full focus:outline-none bg-white300 "
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
      </div>
      <div className="bg-white100 h-[2340px] flex flex-col">
        <div className="flex flex-col items-center mt-44">
          <h1 className="text-white font-bold text-4xl bg-green200 px-5 py-4">
            CURSOS MAIS PROCURADOS!
          </h1>
          <div className="relative w-full flex justify-center items-center mt-20 xl:hidden">
            <div className="relative flex items-center justify-center">
              {/* Botão Anterior */}
              <button
                onClick={handlePrevMaisProcurados}
                className="absolute  top-[50%] left-[-60px] transform -translate-y-1/2 px-4 py-2 rounded hover:bg-gray-400"
              >
                <img src={leftGreenArrow} />
              </button>
              {/* Card atual */}
              <Card
                nome={specificCursos[maisProcuradosIndex].nome}
                cardDescricao={
                  specificCursos[maisProcuradosIndex].cardDescricao
                }
                cardImg={specificCursos[maisProcuradosIndex].cardImg}
                cardTag1={specificCursos[maisProcuradosIndex].cardTag1}
                cardTag2={specificCursos[maisProcuradosIndex].cardTag2}
                cardTag3={specificCursos[maisProcuradosIndex].cardTag3}
                cardTag4={specificCursos[maisProcuradosIndex].cardTag4}
                categoria={specificCursos[maisProcuradosIndex].categoria}
                cursoId={specificCursos[maisProcuradosIndex].id}
              />
              {/* Botão Próximo */}
              <button
                onClick={handleNextMaisProcurados}
                className="absolute top-[50%] right-[-60px] transform -translate-y-1/2 px-4 py-2 rounded hover:bg-gray-400"
              >
                <img src={rightGreenArrow} />
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
        </div>
        <div className="flex flex-col items-center mt-80">
          <h1 className="text-blue300 font-bold text-4xl">TODOS OS CURSOS</h1>
          <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center mt-4">
            POR CATEGORIA
          </h1>
          <div className="flex flex-col md:flex-row mt-32 gap-8 md:gap-16">
            <button
              onClick={() => handleCategoryFilter("todos")}
              className={`border ${
                activeCategory === "todos"
                  ? "bg-blue100 text-white100"
                  : "border-blue100 text-blue100 hover:bg-blue100 hover:text-white100"
              } transition delay-80 px-20 py-4 text-2xl`}
            >
              TODOS
            </button>
            <button
              onClick={() => handleCategoryFilter("agro")}
              className={`border ${
                activeCategory === "agro"
                  ? "bg-brown100 text-white100"
                  : "border-brown100 text-brown100 hover:bg-brown100 hover:text-white100"
              } transition delay-80 px-20 py-4 text-2xl`}
            >
              AGRO
            </button>
            <button
              onClick={() => handleCategoryFilter("gestao")}
              className={`border ${
                activeCategory === "gestao"
                  ? "bg-green200 text-white100"
                  : "border-green200 text-green200 hover:bg-green200 hover:text-white100"
              } transition delay-80 px-20 py-4 text-2xl`}
            >
              GESTÃO
            </button>
          </div>
          <div className="xl:hidden flex flex-col items-center gap-7 mt-32">
            {filteredData.length > 0 ? (
              <>
                <div className="flex gap-7">
                  <button onClick={handlePrev} disabled={todosIndex === 0}>
                    <img src={leftGreenArrow} />
                  </button>
                  {/* Container de cards visíveis */}
                  {filteredData
                    .slice(todosIndex, todosIndex + visibleCardsSmallScreen)
                    .map((curso) => (
                      <Card
                        key={curso.id}
                        nome={curso.nome}
                        cardDescricao={curso.cardDescricao}
                        cardImg={curso.cardImg}
                        cardTag1={curso.cardTag1}
                        cardTag2={curso.cardTag2}
                        cardTag3={curso.cardTag3}
                        cardTag4={curso.cardTag4}
                        cursoId={curso.id}
                        categoria={curso.categoria}
                      />
                    ))}
                  <button
                    onClick={handleNext}
                    disabled={
                      todosIndex + visibleCardsSmallScreen >=
                      filteredData.length
                    }
                  >
                    <img src={rightGreenArrow} />
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray300 text-lg mt-10">
                Nenhum curso nessa categoria.
              </p>
            )}
          </div>
          <div className="hidden xl:flex flex-col items-center gap-7 mt-32">
            {filteredData.length > 0 ? (
              <>
                <div className="flex gap-7">
                  <button onClick={handlePrev} disabled={todosIndex === 0}>
                    <img src={leftGreenArrow} />
                  </button>
                  {/* Container de cards visíveis */}
                  {filteredData
                    .slice(todosIndex, todosIndex + visibleCards)
                    .map((curso) => (
                      <Card
                        key={curso.id}
                        nome={curso.nome}
                        cardDescricao={curso.cardDescricao}
                        cardImg={curso.cardImg}
                        cardTag1={curso.cardTag1}
                        cardTag2={curso.cardTag2}
                        cardTag3={curso.cardTag3}
                        cardTag4={curso.cardTag4}
                        cursoId={curso.id}
                        categoria={curso.categoria}
                      />
                    ))}
                  <button
                    onClick={handleNext}
                    disabled={todosIndex + visibleCards >= filteredData.length}
                  >
                    <img src={rightGreenArrow} />
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray300 text-lg mt-10">
                Nenhum curso nessa categoria.
              </p>
            )}
          </div>
        </div>
      </div>
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
