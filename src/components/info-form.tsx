export function InfoForm() {
  return (
    <div className="h-[1300px] bg-white300 items-center flex justify-center">
      <div className="flex gap-80">
        <div className="w-[400px]">
          <h1 className="text-blue300 font-bold text-4xl">
            QUER MAIS INFORMAÇÕES?
          </h1>
          <h2 className="text-xl font-bold text-blue300 mt-8">
            É muito fácil!
          </h2>
          <p className="text-xl text-blue300 mt-8">
            Faça seu cadastro e nós entraremos em contato com você!
          </p>
          <p className="font-bold text-gray300 text-base mt-12">
            R. Laranjeiras Do Sul, 770 - Jardim das Américas, Primavera do Leste
            - MT
          </p>
          <p className="font-bold text-gray300 text-base mt-10">
            contato@corenegocios.com.br
          </p>
        </div>
        <form
          className="bg-white rounded-3xl p-16 flex gap-10 flex-col w-[570px] shadow-md"
          action=""
        >
          <input
            className="border border-gray400 rounded-lg p-3 font-semibold text-base"
            type="text"
            placeholder="Nome completo"
          />
          <input
            className="border border-gray400 rounded-lg p-3 font-semibold text-base"
            type="text"
            placeholder="E-mail"
          />
          <input
            className="border border-gray400 rounded-lg p-3 font-semibold text-base"
            type="text"
            placeholder="Celular (Whatsapp)"
          />
          <select
            className="border border-gray400 rounded-lg p-3 font-semibold text-base"
            name=""
            id=""
          ></select>
          <select
            className="border border-gray400 rounded-lg p-3 font-semibold text-base"
            name=""
            id=""
          ></select>
          <p className="font-semibold text-base text-gray400">
            Nós usaremos seus dados para entrar em contato com você sobre as
            informações solicitadas neste formulário e sobre outras informações
            correlacionadas que podem ser de seu interesse. Você pode cancelar o
            envio da divulgação, a qualquer momento, utilizando o opt-out
            existente nas mensagens encaminhadas por nós. Para mais informações,
            acesse nossos avisos de privacidade
          </p>
          <button className="bg-green200 hover:bg-green100 transition delay-80 py-5 px-10 rounded-2xl text-white font-bold text-2xl">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
