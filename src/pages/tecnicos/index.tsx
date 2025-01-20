import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import bannerTecnico from "../../assets/images/banner-tecnico.png"
import { InfoForm } from "../../components/info-form"
import { Depoimentos } from "../../components/depoimentos"
import search from "../../assets/images/search.png"
import { Card } from "../../components/card"
import bannerExatas from "../../assets/images/banner-exatas.png"
import bannerSaude from "../../assets/images/banner-saude.png"
import bannerNegocios from "../../assets/images/banner-negocios.png"
import { Pagamentos } from "../../components/pagamentos"
import { useNavigate } from "react-router-dom"
import { useState, ChangeEvent } from "react"
import { Data, cursoData } from "../../assets/cursos"

export function Tecnicos() {
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
        src={bannerTecnico}
        alt="Banner de desconto Fecap"
      />
      <div className="h-[590px] bg-blue300 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-4xl mb-16">
          VEJA NOSSOS CURSOS DISPONÍVEIS
        </h1>
        <div className="flex gap-4  w-[780px] justify-between">
          <div className="flex gap-2 border border-green200 rounded-full py-6 px-8">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-[780px] focus:outline-none bg-blue300 text-white "
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
      <div className="h-[1040px] bg-white100 flex items-center justify-center">
        <div className="flex flex-col items-center ">
          <h1 className="text-white font-bold text-4xl bg-green200 px-5 py-4">
            CURSOS MAIS PROCURADOS!
          </h1>
          <div className="flex gap-7 mt-11">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="h-[3170px] bg-white300 flex flex-col items-center justify-center">
        <h1 className="text-blue300 font-bold text-4xl">TODOS OS CURSOS</h1>
        <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center mt-4">
          POR CATEGORIA
        </h1>
        <div className="mt-32">
          <img src={bannerExatas} alt="Banner exatas e adm" />
          <div className="flex gap-7 mt-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="mt-32">
          <img src={bannerSaude} alt="Banner exatas e adm" />
          <div className="flex gap-7 mt-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="mt-32">
          <img src={bannerNegocios} alt="Banner exatas e adm" />
          <div className="flex gap-7 mt-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Pagamentos />
      <Depoimentos />
      <BannerEscola />
      <InCompany />
      <InfoForm />
    </div>
  )
}
