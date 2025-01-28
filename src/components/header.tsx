import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import logo from "../assets/images/core-fecap-logo.png"
import whatsapp from "../assets/images/whatsapp.png"
import { Link } from "react-router-dom"
import { whatsappConfig } from "../assets/whatsapp-config"
import { useState } from "react"
import { List } from "@phosphor-icons/react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsappRedirect = (): void => {
    const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "") // Remove caracteres não numéricos
    const message = encodeURIComponent(
      `Olá, gostaria de mais informações sobre os cursos.`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col">
      <div className="bg-blue300 h-[85px] flex justify-between items-center text-white px-8 lg:px-10 xl:px-20 ">
        <div className="text-xs md:text-sm flex gap-2 items-center">
          <p className=" flex-1">Siga nossas redes sociais</p>
          <div className="flex gap-1">
            <a
              href="https://www.facebook.com/coreescoladenegocios"
              target="_blank"
            >
              <img
                className="w-5 md:w-auto"
                src={facebook}
                alt="Ícone do Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/coreescoladenegocios/"
              target="_blank"
            >
              <img
                className="w-5 md:w-auto"
                src={instagram}
                alt="Ícone do Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/core-escola-de-neg%C3%B3cios/"
              target="_blank"
            >
              <img
                className="w-5 md:w-auto"
                src={linkedin}
                alt="Ícone do LinkedIn"
              />
            </a>
          </div>
        </div>
        <p className="relative left-4 md:left-4 text-xs md:text-base text-right ">
          Entre em contato
          <span className="font-bold"> contato@corenegocios.com.br</span>
        </p>
      </div>
      <div className="flex h-[100px] items-center bg-white text-black px-8 lg:px-10 xl:px-20 justify-between">
        {/* Logo */}
        <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="w-40 lg:w-auto xl:w-auto"
            src={logo}
            alt="Logo da Core e da Fecap"
          />
        </Link>

        {/* Menu (centralizado em telas maiores) */}
        <div className="hidden lg:flex gap-6 text-blue300 font-semibold text-sm">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            HOME
          </Link>
          <Link
            className="whitespace-nowrap"
            to={"/curta-duracao"}
            onClick={() => window.scrollTo(0, 0)}
          >
            CURTA-DURAÇÃO
          </Link>
          <Link to={"/mba"} onClick={() => window.scrollTo(0, 0)}>
            MBA
          </Link>
          {/* <Link to={"/tecnicos"} onClick={() => window.scrollTo(0, 0)}>
            TÉCNICOS
          </Link> */}
          <Link to={"/incompany"} onClick={() => window.scrollTo(0, 0)}>
            IN-COMPANY
          </Link>
          <Link to={"/institucional"} onClick={() => window.scrollTo(0, 0)}>
            INSTITUCIONAL
          </Link>
        </div>

        {/* Botões Menu Hambúrguer e WhatsApp */}
        <div className="flex items-center gap-4">
          {/* Menu Hamburguer */}
          <div className="relative lg:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <List size={28} />
            </button>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute right-0 top-full px-10 gap-4 py-4 flex-col items-center bg-white100 shadow-lg text-blue300 font-semibold text-sm z-40`}
            >
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                HOME
              </Link>
              <Link
                className="whitespace-nowrap"
                to={"/curta-duracao"}
                onClick={() => window.scrollTo(0, 0)}
              >
                CURTA-DURAÇÃO
              </Link>
              <Link to={"/mba"} onClick={() => window.scrollTo(0, 0)}>
                MBA
              </Link>
              {/* <Link to={"/tecnicos"} onClick={() => window.scrollTo(0, 0)}>
                TÉCNICOS
              </Link> */}
              <Link to={"/incompany"} onClick={() => window.scrollTo(0, 0)}>
                IN-COMPANY
              </Link>
              <Link to={"/institucional"} onClick={() => window.scrollTo(0, 0)}>
                INSTITUCIONAL
              </Link>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <button
            onClick={handleWhatsappRedirect}
            className="flex md:h-[50px] gap-1 border-2 rounded-full border-green200 text-sm items-center p-2 md:p-4 font-semibold text-green200"
          >
            <img src={whatsapp} alt="Ícone do WhatsApp" />
            <span className="hidden xl:inline">FALE CONOSCO</span>
          </button>
        </div>
      </div>
    </div>
  )
}
