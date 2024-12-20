import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import bannerCurta from "../../assets/banner-curta.png"
import search from "../../assets/search.png"

export function CurtaDuracao() {
  return (
    <div>
      <img src={bannerCurta} alt="Banner de desconto Fecap" />
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
      <div className="bg-white100 h-[2340px]"></div>
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
