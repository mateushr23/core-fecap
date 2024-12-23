import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import logo from "../assets/core-fecap-logo.png"
import user from "../assets/user.png"
import whatsapp from "../assets/whatsapp.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="flex flex-col">
      <div className="bg-blue300 h-[85px] flex justify-between items-center text-white px-32">
        <div className="flex gap-4 items-center">
          <p className="text-sm">Siga nossas red200es sociais</p>
          <div className="flex gap-1">
            <a href="https://www.facebook.com.br/" target="_blank">
              <img src={facebook} alt="Ícone do Facebook" />
            </a>
            <a href="https://www.instagram.com.br/" target="_blank">
              <img src={instagram} alt="Ícone do Instagram" />
            </a>
            <a href="https://www.linkedin.com.br/" target="_blank">
              <img src={linkedin} alt="Ícone do LinkedIn" />
            </a>
          </div>
        </div>
        <p>
          Entre em contato{" "}
          <span className="font-bold">contato@corenegocios.com.br</span>
        </p>
      </div>
      <div className="flex px-32 h-[100px] justify-between items-center bg-white text-black">
        <img src={logo} alt="Logo da Core e da Fecap" />
        <div className="flex gap-10 text-blue300 font-semibold text-sm">
          <Link to={"/"}>HOME</Link>
          <Link to={"/curta-duracao"}>CURTA DURAÇÃO</Link>
          <Link to={"/mba"}>MBA</Link>
          <Link to={"/tecnicos"}>TÉCNICOS</Link>
          <Link to={"/institucional"}>INSTITUCIONAL</Link>
        </div>
        <div className="flex gap-4">
          <button className="flex h-[50px] gap-1 text-white font-semibold px-4 text-sm bg-green200 rounded-full items-center">
            <img src={user} alt="Ícone de usuário" />
            ÁREA DO ALUNO
          </button>
          <button
            className="flex h-[50px] gap-1 border-2 rounded-full border-green200 text-sm 
          items-center p-4 font-semibold text-green200 "
          >
            <img src={whatsapp} alt="Ícone do WhatsApp" />
            FALE CONOSCO
          </button>
        </div>
      </div>
    </div>
  )
}
