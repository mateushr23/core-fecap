import { ChangeEvent, useState } from "react"
import { Carrossel } from "../../components/carrossel"
import { BannerEscola } from "../../components/banner-escola"
import { Parceiros } from "../../components/parceiros"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Card } from "../../components/card"
import search from "../../assets/images/search.png"
import banner2 from "../../assets/images/banner2.png"
import { Link, useNavigate } from "react-router-dom"
import { cursoData, Data } from "../../assets/cursos"

export function Home() {
  const [isCurtaButtonOpen, setCurtaIsButtonOpen] = useState(false)
  const [isTecnicoButtonOpen, setTecnicoIsButtonOpen] = useState(false)
  const [isMbaButtonOpen, setMbaIsButtonOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCursos, setFilteredCursos] = useState<Data[]>([])
  const navigate = useNavigate()

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
          <div className="flex gap-2 w-full border border-green200 rounded-full py-6 px-8 relative">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-full focus:outline-none bg-white100 "
              type="text"
              placeholder="Pesquisar curso desejado..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {filteredCursos.length > 0 && (
              <ul className="absolute top-full z-10 w-[900px] bg-white100 border rounded shadow-lg max-h-40 overflow-y-auto">
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
          <div className="mt-24 flex gap-14">
            <div className="relative">
              <button
                className="relative flex items-center gap-2 bg-gray100 px-14 py-9 text-blue300 font-bold text-2xl shadow-md"
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
                className="relative flex items-center gap-2 bg-gray100 px-14 py-9 text-blue300 font-bold text-2xl shadow-md"
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
                  className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md"
                >
                  <p className="text-2xl">CONHECER CURSOS</p>
                </Link>
              )}
            </div>
            <div className="relative">
              <button
                className="relative flex items-center gap-2 bg-gray100 px-14 py-9 text-blue300 font-bold text-2xl shadow-md"
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
        <h1 className="text-blue300 font-bold text-4xl mt-40">
          NOSSOS CURSOS DE CURTA-DURAÇÃO
        </h1>
        <h2 className="text-green200 font-bold text-4xl mt-2">
          VÃO TE ALAVANCAR NO MERCADO DE TRABALHO!
        </h2>
        <div className="flex gap-7 mt-20">
          <Card />
          <Card />
          <Card />
        </div>
        <Link
          to={"/curta-duracao"}
          onClick={() => window.scrollTo(0, 0)}
          className="mt-28 border-2 border-green200 text-green200 font-bold py-5 px-6 rounded-2xl"
        >
          CONHEÇA TODOS OS CURTA-DURAÇÃO
        </Link>
      </div>
      <img src={banner2} alt="Banner de desconto Fecap" />
      <BannerEscola />
      <Parceiros />
      <InCompany />
      <InfoForm />
    </div>
  )
}
