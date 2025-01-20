import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import bannerCurta from "../../assets/images/banner-curta.png"
import search from "../../assets/images/search.png"
import { Card } from "../../components/card"
import { ChangeEvent, useState } from "react"
import { cursoData, Data } from "../../assets/cursos"
import { useNavigate } from "react-router-dom"

export function CurtaDuracao() {
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
      <img
        className="w-full"
        src={bannerCurta}
        alt="Banner de desconto Fecap"
      />
      <div className="h-[590px] bg-white300 flex flex-col items-center justify-center">
        <h1 className="text-blue300 font-bold text-4xl mb-16">
          VEJA NOSSOS CURSOS DISPONÍVEIS
        </h1>
        <div className="flex gap-4 w-[780px] justify-between">
          <div className="flex gap-2 border border-green200 rounded-full py-6 px-8">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-[780px] focus:outline-none bg-white300 "
              type="text"
              placeholder="Pesquisar curso desejado..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {filteredCursos.length > 0 && (
              <ul className="absolute mt-12 z-10 w-[700px] bg-white100 border rounded shadow-lg max-h-40 overflow-y-auto">
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
      </div>
      <div className="bg-white100 h-[2340px] flex flex-col">
        <div className="flex flex-col items-center mt-44">
          <h1 className="text-white font-bold text-4xl bg-green200 px-5 py-4">
            CURSOS MAIS PROCURADOS!
          </h1>
          <div className="flex gap-7 mt-11">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col items-center mt-80">
          <h1 className="text-blue300 font-bold text-4xl">TODOS OS CURSOS</h1>
          <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center mt-4">
            POR CATEGORIA
          </h1>
          <div className="flex mt-32 gap-16">
            <button className="border border-brown100 text-brown100 px-20 py-4 text-2xl">
              AGRO
            </button>
            <button className="border border-red100 text-red100 px-20 py-4 text-2xl">
              BUSINESS
            </button>
            <button className="border border-blue100 text-blue100 px-20 py-4 text-2xl">
              LIDERANÇA
            </button>
            <button className="border border-green200 text-green200 px-20 py-4 text-2xl">
              GESTÃO
            </button>
          </div>
          <div className="flex gap-7 mt-32">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
