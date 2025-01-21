import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import logo from "../assets/images/core-fecap-logo.png"
import whatsapp from "../assets/images/whatsapp.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="flex flex-col">
      <div className="bg-blue300 h-[85px] flex justify-between items-center text-white px-32">
        <div className="flex gap-4 items-center">
          <p className="text-sm">Siga nossas redes sociais</p>
          <div className="flex gap-1">
            <a
              href="https://www.facebook.com/coreescoladenegocios"
              target="_blank"
            >
              <img src={facebook} alt="Ícone do Facebook" />
            </a>
            <a
              href="https://www.instagram.com/coreescoladenegocios/"
              target="_blank"
            >
              <img src={instagram} alt="Ícone do Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/core-escola-de-neg%C3%B3cios/"
              target="_blank"
            >
              <img src={linkedin} alt="Ícone do LinkedIn" />
            </a>
          </div>
        </div>
        <p>
          Entre em contato
          <span className="font-bold"> contato@corenegocios.com.br</span>
        </p>
      </div>
      <div className="flex px-32 h-[100px] justify-between items-center bg-white text-black">
        <img src={logo} alt="Logo da Core e da Fecap" />
        <div className="flex gap-10 text-blue300 font-semibold text-sm">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            HOME
          </Link>
          <Link to={"/curta-duracao"} onClick={() => window.scrollTo(0, 0)}>
            CURTA DURAÇÃO
          </Link>
          <Link to={"/mba"} onClick={() => window.scrollTo(0, 0)}>
            MBA
          </Link>
          <Link to={"/tecnicos"} onClick={() => window.scrollTo(0, 0)}>
            TÉCNICOS
          </Link>
          <Link to={"/institucional"} onClick={() => window.scrollTo(0, 0)}>
            INSTITUCIONAL
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="flex h-[50px] gap-1 border-2 rounded-full border-green200 text-sm 
          items-center p-4 font-semibold text-green200"
          >
            <img src={whatsapp} alt="Ícone do WhatsApp" />
            FALE CONOSCO
          </button>
        </div>
      </div>
    </div>
  )
}
