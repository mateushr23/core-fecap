import facebook from "../assets/images/facebook2.png"
import instagram from "../assets/images/instagram2.png"
import linkedin from "../assets/images/linkedin2.png"
import coreLogo from "../assets/images/core-logo.png"

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="h-[620px] bg-green200 flex gap-[570px] justify-center items-center">
        <div className="w-[320px]">
          <img className="mb-16" src={coreLogo} alt="Logo da Core" />
          <p className="font-bold text-base text-white mb-9">
            R. Laranjeiras Do Sul, 770 - Jardim das Américas, Primavera do Leste
            - MT
          </p>
          <p className="font-bold text-base text-white mb-9">
            contato@corenegocios.com.br
          </p>
          <p className="font-bold text-base text-white mb-4">Nos siga em</p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com.br/" target="_blank">
              <img className="" src={facebook} alt="Ícone do Facebook" />
            </a>
            <a href="https://www.instagram.com.br/" target="_blank">
              <img src={instagram} alt="Ícone do Instagram" />
            </a>
            <a href="https://www.linkedin.com.br/" target="_blank">
              <img src={linkedin} alt="Ícone do LinkedIn" />
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white mb-6">
              CURTA DURAÇÃO
            </h1>
            <a className="text-base text-white mb-3" href="#">
              Cursos de curta-duração
            </a>
            <a className="text-base text-white mb-3" href="#">
              Agro Business
            </a>
            <a className="text-base text-white mb-3" href="#">
              Liderança
            </a>
            <a className="text-base text-white mb-3" href="#">
              Contábil
            </a>
            <a className="text-base text-white" href="#">
              Sobre In-Company
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white mb-6">MBA</h1>
            <a className="text-base text-white mb-3" href="#">
              Parceria FECAP
            </a>
            <a className="text-base text-white mb-3" href="#">
              Cursos disponíveis
            </a>
            <a className="text-base text-white" href="#">
              Diferenciais
            </a>
            <h1 className="font-bold text-2xl text-white mb-6 mt-12">
              TÉCNICOS
            </h1>
            <a className="text-base text-white mb-3" href="#">
              Cursos técnicos
            </a>
            <a className="text-base text-white mb-3" href="#">
              Administração
            </a>
            <a className="text-base text-white" href="#">
              Agro
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white mb-6">
              INSTITUCIONAL
            </h1>
            <a className="text-base text-white mb-3" href="#">
              A Core Escola de Negócios
            </a>
            <a className="text-base text-white mb-3" href="#">
              Missão, Visão e Valores
            </a>
            <a className="text-base text-white mb-3" href="#">
              Diferenciais
            </a>
            <a className="text-base text-white mb-3" href="#">
              Parceiros
            </a>
            <a className="text-base text-white" href="#">
              Nossa equipe
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-white100 h-[85px] font-inter text-base text-blue300 text-center justify-center flex items-center">
        2024 - CORE ESCOLA DE NEGÓCIOS - Todos direitos reservados | Política de
        Privacidade
      </footer>
    </div>
  )
}
