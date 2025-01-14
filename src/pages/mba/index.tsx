import { BannerEscola } from "../../components/banner-escola"
import { InCompany } from "../../components/in-company"
import { Parceiros } from "../../components/parceiros"
import banner from "../../assets/images/banner1.png"
import coreFecapLogo from "../../assets/images/core-fecap-white.png"
import { Card } from "../../components/card"
import { Diferenciais } from "../../components/diferenciais"
import { Qualidade } from "../../components/qualidade"

export function Mba() {
  return (
    <div>
      <img className="w-full" src={banner} alt="Banner de desconto Fecap" />
      <div className="h-[2050px] bg-black100 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="mt-48 text-white font-bold text-4xl">
            ESTAMOS PRONTOS PARA TE{" "}
            <span className="text-green200">LEVAR A OUTRO NÍVEL!</span>
          </h1>
          <img className="mt-32" src={coreFecapLogo} />
          <p className="text-white text-xl w-[960px] text-center mt-24">
            A Core é parceira fecap em todos MBA’s, escolhidos para você, com
            mestres e professores renomados do mercado, com qualificação para te
            passar toda experiência.
          </p>
        </div>
        <div className="mt-96 flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl bg-green200 w-[560px] py-4 text-center">
            MBA’S DISPONÍVEIS
          </h1>
          <div className="flex gap-7 mt-28">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Qualidade />
      <Diferenciais />
      <Parceiros />
      <InCompany />
      <BannerEscola />
    </div>
  )
}
