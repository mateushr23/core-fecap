import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import bannerCurta from "../../assets/banner-curta.png"
import search from "../../assets/search.png"
import { Card } from "../../components/card"
import { Depoimentos } from "../../components/depoimentos"

export function CurtaDuracao() {
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
        <div className="flex gap-4  w-[780px] justify-between">
          <div className="flex gap-2 border border-green200 rounded-full py-6 px-8">
            <img src={search} alt="Ícone lupa de pesquisa" />
            <input
              className="w-[300px] focus:outline-none bg-white300 "
              type="text"
              placeholder="Pesquisar curso desejado..."
            />
          </div>
          <select
            className="border w-[380px] focus:outline-none bg-white300 border-green200 rounded-full py-6 px-8 font-semibold text-base"
            name=""
            id=""
          ></select>
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
              ADM
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
      <Depoimentos />
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
