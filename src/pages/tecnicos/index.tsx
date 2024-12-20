import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import bannerTecnico from "../../assets/banner-tecnico.png"
import { InfoForm } from "../../components/info-form"
import { Depoimentos } from "../../components/depoimentos"
import search from "../../assets/search.png"
import { Card } from "../../components/card"
import bannerExatas from "../../assets/banner-exatas.png"
import bannerSaude from "../../assets/banner-saude.png"
import bannerNegocios from "../../assets/banner-negocios.png"
import cartoes from "../../assets/pagamento-cartoes.png"
import boleto from "../../assets/boleto-pix.png"

export function Tecnicos() {
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
              className="w-[300px] focus:outline-none bg-blue300 text-white "
              type="text"
              placeholder="Pesquisar curso desejado..."
            />
          </div>
          <select
            className="border w-[380px] focus:outline-none bg-blue300 text-white border-green200 rounded-full py-6 px-8 font-semibold text-base"
            name=""
            id=""
          ></select>
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
      <div className="h-[900px] bg-blue300 flex flex-col items-center relative">
        <h1 className="font-bold text-4xl text-white bg-green200 py-4 px-8 absolute top-[-8%] transform translate-y-1/2">
          FORMAS DE PAGAMENTO FACILITADAS!
        </h1>
        <p className="mt-24 text-white text-xl text-center">
          A Core disponibiliza formas de pagamento facilitadas para que você
          consiga dar o próximo passo
          <br /> da sua carreira, veja a baixo como você pode cursar conosco:
        </p>
        <div className="flex items-center w-[1500px]">
          <div>
            <h1 className="font-bold text-4xl text-white">
              CARTÕES DE CRÉDITO
            </h1>
            <div className="h-1 w-[380px] bg-green200 mt-4" />
            <p className="text-xl text-white">
              Cartões de Crédito em até 12x sem Juros ou a vista.
            </p>
          </div>
          <img src={cartoes} alt="" />
        </div>
        <div className="flex  items-center w-[1500px]">
          <div className="mr-40">
            <h1 className="font-bold text-4xl text-white">PIX E BOLETO</h1>
            <div className="h-1 w-[380px] bg-green200 mt-4" />
            <p className="text-xl text-white">Preço a vista com desconto*.</p>
          </div>
          <img src={boleto} alt="" />
        </div>
        <p className="mt-20 text-xl text-blue500">
          *Desconto aplicado somente no valor a vista do curso total, não na
          parcela.
        </p>
      </div>
      <Depoimentos />
      <BannerEscola />
      <InCompany />
      <InfoForm />
    </div>
  )
}
