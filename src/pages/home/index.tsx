import { useState } from "react"
import { Carrossel } from "../../components/carrossel"
import { BannerEscola } from "../../components/banner-escola"
import { Parceiros } from "../../components/parceiros"
import { InCompany } from "../../components/in-company"
import { InfoForm } from "../../components/info-form"
import { Card } from "../../components/card"
import search from "../../assets/search.png"
import banner2 from "../../assets/banner2.png"

export function Home() {
  const [isCurtaButtonOpen, setCurtaIsButtonOpen] = useState(false)
  const [isTecnicoButtonOpen, setTecnicoIsButtonOpen] = useState(false)
  const [isMbaButtonOpen, setMbaIsButtonOpen] = useState(false)

  return (
    <div>
      <Carrossel />
      {/* Barra de busca e botões de categorias */}
      <div className="h-[750px] flex flex-col items-center justify-center bg-white100">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 w-full border border-green200 rounded-full py-6 px-8">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-full focus:outline-none bg-white100 "
              type="text"
              placeholder="Pesquisar curso desejado..."
            />
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
                <div className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md">
                  <p className="text-2xl">CONHECER CURSOS</p>
                </div>
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
                <div className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md">
                  <p className="text-2xl">CONHECER CURSOS</p>
                </div>
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
                <div className="absolute h-[40px] top-full w-full bg-green200 text-white text-center shadow-md">
                  <p className="text-2xl">CONHECER CURSOS</p>
                </div>
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
        <button className="mt-28 border-2 border-green200 text-green200 font-bold py-5 px-6 rounded-2xl">
          CONHEÇA TODOS OS CURTA-DURAÇÃO
        </button>
      </div>
      <img src={banner2} alt="Banner de desconto Fecap" />
      <BannerEscola />
      <Parceiros />
      <InCompany />
      <InfoForm />
    </div>
  )
}
