import anambaLogo from "../assets/images/anamba-logo.png"

export function Qualidade() {
  return (
    <div className="h-[880px] bg-white300 flex flex-col items-center justify-center">
      <h2 className="text-blue300 text-4xl">
        QUALIDADE <span className="font-bold">FECAP</span>
      </h2>
      <p className="w-[990px] text-center mt-12 text-xl text-blue300">
        Os MBAs FECAP seguem os padrões de qualidade da ANAMBA - Associação
        Nacional de MBA, o que prova nossa excelência de ensino. Nosso curso MBA
        em Gestão de Negócios é acreditado global.
      </p>
      <img className="mt-32" src={anambaLogo} alt="Logo da Anamba" />
    </div>
  )
}
