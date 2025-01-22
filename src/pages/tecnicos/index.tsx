import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import bannerTecnico from "../../assets/images/banner-tecnico.png"
import { InfoForm } from "../../components/info-form"
import search from "../../assets/images/search.png"
import { Card } from "../../components/card"
import { useNavigate } from "react-router-dom"
import { useState, ChangeEvent } from "react"
import { Data, cursoData } from "../../assets/cursos"
import bannerAdm from "../../assets/images/banner-adm.png"
import bannerSaude from "../../assets/images/banner-saude.png"

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
          <h1 className="text-white font-bold text-4xl bg-green200 px-16 py-4">
            CURSOS OFERECIDOS!
          </h1>
          <div className="flex gap-7 mt-11">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col">
        <img className="w-full" src={bannerAdm} />
        <div className="absolute inset-0 flex items-center text-white gap-72">
          <div className="w-[880px] ml-32 text-justify hyphens-auto text-white">
            <h1 className="font-bold text-4xl ">
              CURSOS DE EXATAS E ADM NO MERCADO
            </h1>
            <p className="text-xl mt-12 font-thin">
              O profissional administrativo tem amplas possibilidades no mercado
              de trabalho! Com a duração de 12 meses, o curso Técnico em
              Administração capacita você a executar atividades administrativas
              relacionadas aos processos de gestão de pessoas, de operações
              logísticas, gestão de materiais e patrimônio, de marketing, de
              vendas e de finanças.
            </p>
            <p className="text-xl mt-4 font-thin">
              Atua em organizações públicas e privadas de segmentos variados,
              tais como das áreas de comércio, de serviços, da indústria, de
              consultoria, de ensino e pesquisa, relacionando-se com equipes de
              diversos setores da organização, por meio da prestação de serviços
              autônomos, temporários ou contrato efetivo.
            </p>
          </div>
          <div className="items-center flex flex-col">
            <h1 className="font-bold text-4xl w-[310px] text-center">
              PROFISSIONAL NO MERCADO
            </h1>
            <div className="bg-green200 rounded-3xl text-center mt-2 py-8 w-[420px] flex flex-col gap-2">
              <h3 className="font-bold text-xl">Média Salarial:</h3>
              <h2 className="font-bold text-4xl">R$ 3.507,18</h2>
              <p className="font-thin text-xl">Coordenador Administrativo</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col relative justify-center">
        <img className="w-full h-full" src={bannerSaude} />
        <div className="flex text-white gap-72 absolute">
          <div className="w-[880px] ml-32 text-justify hyphens-auto text-white">
            <h1 className="font-bold text-4xl ">CURSOS DE SAÚDE NO MERCADO</h1>
            <p className="text-xl mt-12 font-thin">
              O curso técnico em enfermagem prepara os estudantes para atuar
              como profissionais de saúde na área da enfermagem, fornecendo os
              conhecimentos e as habilidades necessários para cuidar de
              pacientes, auxiliar em procedimentos médicos, administrar
              medicamentos e colaborar com a equipe de saúde.
            </p>
            <p className="text-xl mt-4 font-thin">
              O mercado de trabalho é formado por profissionais que desempenham
              um papel crucial no fornecimento de cuidados diretos aos
              pacientes, trabalhando em colaboração com enfermeiros e outros
              profissionais de saúde, seja como auxiliar de enfermagem ou outros
              cargos que desempenham papéis relacionados à saúde coletiva.
            </p>
          </div>
          <div className="items-center flex flex-col">
            <h1 className="font-bold text-4xl w-[310px] text-center">
              PROFISSIONAL NO MERCADO
            </h1>
            <div className="bg-green200 rounded-3xl text-center mt-2 py-8 w-[420px] flex flex-col gap-2">
              <h3 className="font-bold text-xl">Média Salarial:</h3>
              <h2 className="font-bold text-4xl">R$ 3.325,24</h2>
              <p className="font-thin text-xl">Técnico de Enfermagem</p>
            </div>
          </div>
        </div>
      </div>
      <BannerEscola />
      <InCompany />
      <InfoForm />
    </div>
  )
}
