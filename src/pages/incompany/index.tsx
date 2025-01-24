import bannerIncompany from "../../assets/images/banner-incompany.png"
import whatsapp from "../../assets/images/whatsapp.png"
import settingsLines from "../../assets/images/setting-lines.png"
import tutorial from "../../assets/images/tutorial.png"
import conquest from "../../assets/images/conquest.png"
// import bannerC5 from "../../assets/images/banner-c5.png"
import { BannerEscola } from "../../components/banner-escola"
import agronecociosBg from "../../assets/images/agronegocios-background.png"
import gestaoBg from "../../assets/images/gestao-background.png"
import { whatsappConfig } from "../../assets/whatsapp-config"

export function InCompany() {
  const handleWhatsappRedirect = (): void => {
    const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "")
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o In-Company!`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div>
      <div className="relative">
        <img src={bannerIncompany} />
        <div className="ml-4 md:ml-12 absolute inset-0 flex flex-col justify-center text-blue300 lg:ml-12">
          <div className=" md:text-4xl font-light">
            <h1>TREINAMENTOS</h1>
            <h1 className="font-bold lg:mt-4">IN COMPANY</h1>
          </div>
          <div className="mt-2 w-[600px] lg:mt-12">
            <h2 className="text-xs w-56 md:w-72 lg:w-auto md:text-xl font-bold lg:mb-4">
              Os Treinamentos In Company são soluções de aprendizagem
              personalizadas para atender às necessidades específicas da sua
              empresa.
            </h2>
            <p className="hidden text-xs lg:text-xl lg:inline">
              Nosso objetivo é atuar como parceiros estratégicos das
              organizações, oferecendo soluções educacionais customizadas para
              desenvolver habilidades técnicas, práticas e comportamentais em
              líderes e colaboradores, sempre alinhadas aos objetivos e
              resultados esperados.
            </p>
          </div>
          <button
            onClick={handleWhatsappRedirect}
            className=" mt-1 border-2 border-green200 rounded-xl w-36 py-1  lg:w-[250px] items-center flex justify-center gap-4 lg:p-3 text-green200 font-bold text-base lg:mt-16"
          >
            <img src={whatsapp} />
            Whatsapp
          </button>
        </div>
      </div>
      <div className="h-[700px] lg:h-[1040px] bg-blue300 flex flex-col items-center justify-center text-white text-center md:text-justify  md:hyphens-auto">
        <h1 className="text-4xl font-light text-center m-4">
          BENEFÍCIOS DOS{" "}
          <span className="font-bold">TREINAMENTOS IN COMPANY</span>
        </h1>
        <div className="flex flex-col mt-10 md:mt-14 gap-10 md:m-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center ">
            <img className="w-14  lg:w-auto" src={settingsLines} />
            <div className="w-[700px]">
              <h1 className="lg:text-2xl font-bold lg:mb-4">Personalização</h1>
              <p className="lg:text-xl text-white  hidden md:inline">
                Cada treinamento é cuidadosamente adaptado para refletir a
                realidade, os desafios e as particularidades da sua empresa,
                garantindo maior relevância e eficácia.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
            <img className="w-14 lg:w-auto" src={tutorial} />
            <div className="w-[700px]">
              <h1 className="lg:text-2xl font-bold">Flexibilidade</h1>
              <p className="lg:text-xl text-white mt-7 hidden md:inline">
                Oferecemos formatos presenciais e online ao vivo, permitindo que
                sua equipe participe de qualquer localidade, sem a necessidade
                de deslocamento.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
            <img className="w-14  lg:w-auto" src={conquest} />
            <div className="w-[700px]">
              <h1 className="lg:text-2xl font-bold">Engajamento</h1>
              <p className="lg:text-xl text-white mt-7 hidden md:inline">
                Utilizamos metodologias ativas e participativas, estruturadas na
                prática e fundamentadas em situações reais. Com foco no
                desenvolvimento de competências e na construção do conhecimento,
                nossas soluções incluem ferramentas inovadoras, para tornar o
                aprendizado mais dinâmico e envolvente.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <img src={bannerC5} />
        <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
          <div>
            <h1 className="font-light text-4xl">
              METODOLOGIA <span className="font-bold">C5</span>
            </h1>
            <p className="text-xl w-[550px] mt-7">
              Nossa abordagem é composta por cinco etapas essenciais para uma
              experiência de aprendizagem completa:
            </p>

            <div className="grid grid-cols-3 gap-14 mt-20">
              <div className="flex flex-col gap-7 w-[310px]">
                <h2 className="text-green200 font-bold text-2xl">
                  1. Diagnóstico
                </h2>
                <p className="text-xl">
                  Identificação e análise detalhada das necessidades,
                  expectativas e resultados desejados.
                </p>
              </div>
              <div className="flex flex-col gap-7 w-[310px]">
                <h2 className="text-green200 font-bold text-2xl">
                  2. Planejamento
                </h2>
                <p className="text-xl">
                  Desenvolvimento de um plano de ação sob medida, alinhado aos
                  objetivos estratégicos da organização.
                </p>
              </div>
              <div className="flex flex-col gap-7 w-[310px]">
                <h2 className="text-green200 font-bold text-2xl">
                  3. Implantação
                </h2>
                <p className="text-xl">
                  Execução das soluções conforme o plano de ação, com foco na
                  eficiência e qualidade.
                </p>
              </div>
              <div className="flex flex-col gap-7 w-[360px]">
                <h2 className="text-green200 font-bold text-2xl">
                  4. Acompanhamento
                </h2>
                <p className="text-xl">
                  Monitoramento contínuo para ajustes e melhorias, garantindo
                  que as soluções atendam às necessidades específicas.
                </p>
              </div>
              <div className="flex flex-col gap-7 w-[390px]">
                <h2 className="text-green200 font-bold text-2xl">
                  5. Avaliação de Resultados
                </h2>
                <p className="text-xl">
                  Análise dos resultados alcançados com base nos KPIs
                  previamente definidos, assegurando impacto mensurável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-[1100px] md:h-[690px] lg:h-[800px] bg-blue300 text-white flex flex-col text-center justify-center items-center ">
        <h1 className="font-light text-4xl">
          ÁREAS DE <span className="font-bold">ATUAÇÃO</span>
        </h1>
        <p className="lg:text-xl mx-4 mb-10 mt-10">
          Nossos treinamentos abrangem áreas estratégicas para o desenvolvimento
          organizacional:
        </p>
        <div className="flex flex-col md:flex-row gap-14 lg:m-10">
          <div className="relative ">
            <img className="w-80 lg:w-auto" src={agronecociosBg} />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl">Agronegócios</h1>
              <div className="h-1 w-[100px] bg-green200 mt-3" />
              <p className="text-lg w-[350px] text-center mt-3 hidden lg:inline">
                Soluções direcionadas ao setor agrícola, atendendo demandas
                específicas de sustentabilidade, inovação e gestão.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-80 lg:w-auto" src={gestaoBg} />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl">Gestão e Negócios</h1>
              <div className="h-1 w-[100px] bg-green200 mt-3 " />
              <p className="text-lg w-[430px] text-center mt-3 hidden lg:inline">
                Abrange um amplo espectro de competências organizacionais,
                incluindo: Administração, Desenvolvimento Comportamental,
                Logística, Liderança, Meio Ambiente, Marketing Vendas, Recursos
                Humanos e Saúde.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1400px] bg-blue400 text-white flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center h-[670px] w-full">
          <div className="xl:w-[980px] xl:ml-8 flex flex-col items-center justify-center">
            <div className="m-4">
              <h1 className="font-light text-3xl lg:text-5xl xl:text-6xl ">
                NOSSO
              </h1>
              <h1 className="font-bold text-3xl lg:text-5xl xl:text-6xl mt-2 xl:mt-4">
                DIFERENCIAL
              </h1>
              <p className="xl:text-3xl lg:text-xl xl:w-[630px] mt-8 xl:mt-12 pb-20">
                Atuamos tanto com{" "}
                <span className="font-bold">
                  empresas públicas quanto privadas
                </span>
                , desenvolvendo soluções personalizadas para:
              </p>
            </div>
          </div>
          <div className="flex-grow bg-green200 flex flex-col justify-center xl:gap-16 py-4 ">
            <div className=" p-4 xl:ml-12">
              <h1 className="font-bold text-2xl">
                Programas de Educação Continuada
              </h1>
              <p className="xl:text-xl mt-7">
                Capacitação contínua para equipes, promovendo atualização e
                desenvolvimento constantes.
              </p>
            </div>
            <div className=" xl:ml-12 p-4">
              <h1 className="font-bold text-2xl">Faculdade Corporativa</h1>
              <p className="xl:text-xl mt-7">
                Criação e gestão de academias de aprendizagem internas,
                alinhadas às estratégias corporativas.
              </p>
            </div>
            <div className="xl:ml-12 p-4">
              <h1 className="font-bold text-2xl">Consultoria</h1>
              <p className="xl:text-xl mt-7">
                Diagnóstico e implementação de estratégias educacionais e
                organizacionais, focadas em resultados tangíveis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="xl:w-[1300px] mt-44 xl:text-3xl text-center">
            Entre em <span className="font-bold">contato conosco</span> para
            desenvolver uma solução que atenda às necessidades específicas da
            sua
            <span className="font-bold"> organização</span> e impulsione os
            resultados do seu negócio.
          </p>
          <button
            onClick={handleWhatsappRedirect}
            className="relative top-10 xl:top-40 border-2 border-green200 rounded-xl w-[250px] items-center flex justify-center gap-4 p-3 text-green200 font-bold text-base"
          >
            <img src={whatsapp} />
            Enviar Whatsapp
          </button>
        </div>
      </div>
      <BannerEscola />
    </div>
  )
}
