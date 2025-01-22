import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export function InfoForm() {
  const form = useRef<HTMLFormElement>(null) // Tipando a referência para HTMLFormElement
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [cargo, setCargo] = useState("")
  const [oQueDeseja, setOqueDeseja] = useState("")
  const [enviado, setEnviado] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Verifique se form.current não é null antes de usar
    if (form.current) {
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        console.error("Variáveis de ambiente não configuradas corretamente.")
        return
      }
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setEnviado(true)
          },
          (error) => {
            console.log("FAILED...", error.text)
          }
        )
    }
  }

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
        {enviado ? (
          <p className="items-center justify-center bg-white text-gray-400 rounded-3xl p-16 flex gap-10 flex-col w-[570px] shadow-md">
            Solicitação enviada com sucesso!
          </p>
        ) : (
          <form
            ref={form}
            className="bg-white rounded-3xl p-16 flex gap-10 flex-col w-[570px] shadow-md"
            onSubmit={sendEmail}
          >
            <input
              name="nome"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              name="email"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              name="celular"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={11}
              placeholder="Celular (Whatsapp)"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              onInput={(e) => {
                const target = e.target as HTMLInputElement
                target.value = target.value.replace(/[^0-9]/g, "") // Apenas números
              }}
              required
            />
            <input
              name="empresa"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="text"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
            <input
              name="cargo"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="text"
              placeholder="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
            />
            <input
              name="oQueDeseja"
              className="border border-gray400 rounded-lg p-3 font-semibold text-base"
              type="text"
              placeholder="O que deseja saber?"
              value={oQueDeseja}
              onChange={(e) => setOqueDeseja(e.target.value)}
              required
            />

            <p className="font-semibold text-base text-gray400">
              Nós usaremos seus dados para entrar em contato com você sobre as
              informações solicitadas neste formulário e sobre outras
              informações correlacionadas que podem ser de seu interesse. Você
              pode cancelar o envio da divulgação, a qualquer momento,
              utilizando o opt-out existente nas mensagens encaminhadas por nós.
              Para mais informações, acesse nossos avisos de privacidade
            </p>
            <button
              type="submit"
              className="bg-green200 hover:bg-green100 transition delay-80 py-5 px-10 rounded-2xl text-white font-bold text-2xl"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
