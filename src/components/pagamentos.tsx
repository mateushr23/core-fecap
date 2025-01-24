import cartoes from "../assets/images/pagamento-cartoes.png"
import boleto from "../assets/images/boleto-pix.png"

export function Pagamentos() {
  return (
    <div className="h-[1100px] bg-blue300 flex flex-col  justify-center items-center text-center">
      <h1 className="font-bold text-4xl text-white bg-green200 py-4 px-8 lg:mt-24">
        FORMAS DE PAGAMENTO FACILITADAS!
      </h1>
      <p className="mt-14 text-white text-xl text-center font-thin">
        A Core disponibiliza formas de pagamento facilitadas para que você
        consiga dar o próximo passo
        <br /> da sua carreira, veja a baixo como você pode cursar conosco:
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:w-[1500px] ">
        <div>
          <h1 className="font-bold text-4xl text-white mt-20">
            CARTÕES DE CRÉDITO
          </h1>
          <div className="h-1 w-[380px] bg-green200 mt-4" />
          <p className="text-xl text-white">
            Cartões de Crédito em até 12x sem Juros ou a vista.
          </p>
        </div>
        <img src={cartoes} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:w-[1500px]">
        <div className="lg:mr-40">
          <h1 className="font-bold text-4xl text-white">PIX E BOLETO</h1>
          <div className="h-1 w-[380px] bg-green200 mt-4" />
          <p className="text-xl text-white">Preço a vista com desconto*.</p>
        </div>
        <img src={boleto} alt="" />
      </div>
      <p className="lg:mt-20 text-xl text-blue500">
        *Desconto aplicado somente no valor a vista do curso total, não na
        parcela.
      </p>
    </div>
  )
}
