import facebook from "../assets/images/facebook2.png"
import instagram from "../assets/images/instagram2.png"
import linkedin from "../assets/images/linkedin2.png"
import coreLogo from "../assets/images/core-logo.png"

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="h-[620px] bg-green200 flex flex-col md:flex-row justify-between items-center p-10">
        <div className="w-[320px] items-center flex flex-col text-center ">
          <img
            className="w-48 mb-8 lg:mb-16"
            src={coreLogo}
            alt="Logo da Core"
          />
          <p className="font-bold text-base text-white mb-2 md:mb-9">
            R. Laranjeiras Do Sul, 770 - Jardim das Américas, Primavera do Leste
            - MT
          </p>
          <p className="font-bold text-base text-white mb-2 md:mb-9">
            contato@corenegocios.com.br
          </p>
          <p className="font-bold text-base text-white mb-4">Nos siga em</p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/coreescoladenegocios"
              target="_blank"
            >
              <img className="" src={facebook} alt="Ícone do Facebook" />
            </a>
            <a
              href="https://www.instagram.com/coreescoladenegocios/"
              target="_blank"
            >
              <img src={instagram} alt="Ícone do Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/core-escola-de-neg%C3%B3cios"
              target="_blank"
            >
              <img src={linkedin} alt="Ícone do LinkedIn" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mb-4 pl-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white lg:mb-6">
              CURTA DURAÇÃO
            </h1>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Cursos de curta-duração
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Agro Business
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Liderança
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Contábil
            </a>
            <a className="text-base text-white hidden lg:inline" href="#">
              Sobre In-Company
            </a>
            <h1 className="font-bold text-2xl text-white mt-4 lg:mt-6">
              IN-COMPANY
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white lg:mb-6">MBA</h1>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Parceria FECAP
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Cursos disponíveis
            </a>
            <a className="text-base text-white hidden lg:inline" href="#">
              Diferenciais
            </a>
            <h1 className="font-bold text-2xl text-white mt-4 lg:mb-6 lg:mt-12">
              TÉCNICOS
            </h1>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Cursos técnicos
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Administração
            </a>
            <a className="text-base text-white hidden lg:inline" href="#">
              Agro
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white lg:mb-6">
              INSTITUCIONAL
            </h1>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              A Core Escola de Negócios
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Missão, Visão e Valores
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Diferenciais
            </a>
            <a className="text-base text-white mb-3 hidden lg:inline" href="#">
              Parceiros
            </a>
            <a className="text-base text-white hidden lg:inline" href="#">
              Nossa equipe
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-white100 h-[85px] font-inter text-base text-blue300 text-center justify-center flex items-center">
        2025 - CORE ESCOLA DE NEGÓCIOS - Todos direitos reservados | Política de
        Privacidade
      </footer>
    </div>
  )
}
