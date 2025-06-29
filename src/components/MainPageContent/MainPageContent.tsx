"use client";

import styles from "./MainPageContent.module.scss";
import GradientText from "../GradientText/GradientText";
import { IoIosArrowForward } from "react-icons/io";
import ShinyText from "../ShinyText/ShinyText";
import DigitalGlowCiclo from "../../images/DigitalGlowCiclo.svg";
import DigitalGlowSite from "../../images/DigitalGlowSite.svg";
import Image from "next/image";
import { FaHeart, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";
import Hexagono from "../../images/Hexagono.svg";
import Seta from "../../images/SetaPrototipo.svg";
import { SetStateAction, useState } from "react";
import Risco from "../../images/Risco.svg";
import SetaExperiencia from "../../images/SetaExperiencia.svg";
import { FaBrush } from "react-icons/fa6";

import Layout from "../../images/Layout.svg";
import Cafe from "../../images/Cafe.svg";
import LogoDigitalGlow from "./../../images/Logo/LogoDigitalGlow.svg";

import DirectvImage from "../../images/directv.svg";
import SkyImage from "../../images/sky.svg";
import NorwayImage from "../../images/norway.svg";
import NovaParabolicaImage from "../../images/novaparabolica.svg";
import KahuImage from "../../images/kahu.svg";

import Marquee from "react-fast-marquee";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";

import luzQuadriculada from "../../images/LuzQuadriculada.svg";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const MainPageContent = () => {
  const [cores, setCores] = useState([
    "#3369E7",
    "#8E43E7",
    "#B84592",
    "#FF4F81",
    "#FF6C5F",
    "#FFC168",
    "#2DDE98",
    "#1CC7D0",
  ]);

  const [corAtual, setCorAtual] = useState("#2DDE98");

  const faqList = [
    {
      question: "Quanto custa uma landing page?",
      answer:
        "O valor varia conforme a complexidade, o número de seções e funcionalidades. Após entender sua ideia, envio um orçamento claro, justo e sem surpresas.",
    },
    {
      question: "Em quanto tempo a landing page fica pronta?",
      answer:
        "Em média entre 5 e 10 dias úteis, dependendo do escopo. Se for algo mais simples e você já tiver o conteúdo, pode ser ainda mais rápido.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles["Page__content"]}>
      <section className={styles["Apresentation"]}>
        <div className={styles["Apresentation__anunc"]}>
          <p>🚀 Impulsione seu negócio</p>
        </div>
        <h1 className={styles["Apresentation__title"]}>
          Criando páginas que{" "}
          <span className={styles["Apresentation__main--text"]}>convertem</span>{" "}
          e{" "}
          <span className={styles["Apresentation__main--text"]}>
            aceleram resultados
          </span>
        </h1>
        <ShinyText
          text="Desenvolvemos landing pages rápidas e estratégicas, criadas para
          transformar visitantes em clientes"
          disabled={false}
          speed={3}
          className={styles["Apresentation__subtitle"]}
        />
        <div className={styles["Apresentation__buttons"]}>
          <a href="https://www.instagram.com/digitalglowweb/">
            <button className={styles["Apresentation__button"]}>
              Ver Projetos
            </button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511953653952&text=Olá! gostaria de saber mais informações sobre a criação de landing page.">
            <button className={styles["Apresentation__link"]}>
              Fale Conosco{" "}
              <IoIosArrowForward className={styles["Apresentation__icon"]} />
            </button>
          </a>
        </div>
        <div className={styles["Apresentation__trust--container"]}>
          <Marquee
            speed={30}
            gradient={true}
            loop={0}
            gradientColor={"#121212"}
          >
            <Image
              src={DirectvImage}
              alt="DirectvImage"
              width={1200}
              height={600}
              className={styles["Apresentation__trust--image"]}
              priority
            />
            <Image
              src={SkyImage}
              alt="SkyImage"
              width={1200}
              height={600}
              className={styles["Apresentation__trust--sky"]}
              priority
            />
            <Image
              src={NorwayImage}
              alt="NorwayImage"
              width={1200}
              height={600}
              className={styles["Apresentation__trust--image"]}
              priority
            />
            <Image
              src={NovaParabolicaImage}
              alt="NovaParabolicaImage"
              width={1200}
              height={600}
              className={styles["Apresentation__trust--image"]}
              priority
            />
            <Image
              src={KahuImage}
              alt="KahuImage"
              width={1200}
              height={600}
              className={styles["Apresentation__trust--kahu"]}
              priority
            />
          </Marquee>
        </div>
        <p className={styles["Apresentation__trust--text"]}>
          Confiado por grandes empresas
        </p>
      </section>
      <section className={styles["Experience"]}>
        <div className={styles["Experience__division"]}>
          <h1 className={styles["Experience__title"]}>
            Destaque sua{" "}
            <span className={styles["Experience__main"]}>
              empresa no digital
            </span>
          </h1>
          <p className={styles["Experience__subtitle"]}>
            Ter um site não é mais opcional, é essencial para crescer e se
            destacar. Vamos criar a presença online que sua marca merece!
          </p>
          <div className={styles["Experience__div--disclaimer"]}>
            <div className={styles["Experience__div--anunc"]}>
              <p>✅ Design personalizado</p>
            </div>
            <div className={styles["Experience__div--anunc"]}>
              <p>⚡️ Alta performance</p>
            </div>
            <div className={styles["Experience__div--anunc"]}>
              <p>📱 100% responsivo</p>
            </div>
          </div>
        </div>
        <Image
          src={DigitalGlowCiclo}
          alt="Digital Glow Cicle"
          width={1200}
          height={600}
          className={styles["Experience__image"]}
          priority
        />
      </section>
      <section className={styles["TragaSeuProjeto"]}>
        <Image
          src={DigitalGlowSite}
          alt="Digital Glow Site"
          width={undefined}
          height={undefined}
          className={styles["imagem"]}
          priority
        />
        <div className={styles["divisao"]}>
          <h1 className={styles["titulo"]}>
            Traga o seu projeto e faremos ele se{" "}
            <span className={styles["destaque"]}>tornar real</span>
          </h1>
          <p className={styles["subtitulo"]}>
            Tem uma ideia que precisa sair do papel? Nós criamos a solução
            visual, funcional e estratégica para transformá-la em um site que
            gera resultados.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5511953653952&text=Olá! gostaria de fazer um orçamento para a criação do meu site."
            target="_blank"
          >
            <button className={styles["botao"]}>
              Fazer um orçamento gratuito
            </button>
          </a>
          <div className={styles["TragaSeuProjeto__div--disclaimer"]}>
            <div className={styles["TragaSeuProjeto__div--anunc"]}>
              <p>🚚 Entrega rápida</p>
            </div>
            <div className={styles["TragaSeuProjeto__div--anunc"]}>
              <p>🛠️ Suporte total</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.PrototipoSite}>
        <h1 className={styles.titulo}>
          Tudo do <span className={styles.destaque}>seu jeito</span> e como você{" "}
          <span className={styles.destaque}>imagina</span>
        </h1>
        <p className={styles.subtitulo}>O visual perfeito para o seu negócio</p>
        <div className={styles.cores}>
          <Image
            src={Seta}
            alt="Seta"
            width={undefined}
            height={undefined}
            className={styles.seta}
            priority
          />
          {cores.map((cor, id) => {
            return (
              <div
                onClick={() => setCorAtual(cor)}
                style={{ background: cor }}
                className={`${styles.cor}`}
                key={id}
              ></div>
            );
          })}
        </div>
        <p className={styles.textoAjuda}>Escolha uma cor para visualizar</p>
        <div className={styles.background}>
          <div className={styles.prototipo}>
            <div className={styles.blocoCima}>
              <div
                style={{ background: corAtual }}
                className={styles.divisaoIcone}
              >
                <Image
                  src={Hexagono}
                  alt="Hexagono"
                  width={undefined}
                  height={undefined}
                  className={styles.hexagono}
                  priority
                />
                <FaHeart
                  style={{ color: corAtual }}
                  className={styles.iconeHexagono}
                />
              </div>
              <div className={styles.divisaoTexto}>
                <div className={styles.textoCimaPrototipo}></div>
                <div className={styles.tituloPrototipo}></div>
                <div className={styles.conteudoPrototipo}></div>
                <div className={styles.conteudoPrototipo}></div>
                <div className={styles.conteudoPrototipo}></div>
                <div className={styles.conteudoPrototipo}></div>
                <div className={styles.textoBaixoPrototipo}></div>
              </div>
            </div>
            <div className={styles.blocoBaixo}>
              <div
                className={`${styles.divisaoBlocoBaixo} ${styles.divisaoBlocoBaixoEsquerda}`}
              >
                <div
                  style={{ background: corAtual }}
                  className={styles.divisaoIconeBaixo}
                >
                  <Image
                    src={Hexagono}
                    alt="Hexagono"
                    width={undefined}
                    height={undefined}
                    className={styles.hexagonoBaixo}
                    priority
                  />
                  <FaUserCircle
                    style={{ color: corAtual }}
                    className={styles.iconeHexagonoBaixo}
                  />
                </div>
                <div className={styles.divisaoTextoBaixo}>
                  <div className={styles.textoCimaPrototipoBaixo}></div>
                  <div className={styles.tituloPrototipoBaixo}></div>
                  <div className={styles.conteudoPrototipoBaixo}></div>
                </div>
              </div>
              <div className={styles.divisaoBlocoBaixo}>
                <div
                  style={{ background: corAtual }}
                  className={styles.divisaoIconeBaixo}
                >
                  <Image
                    src={Hexagono}
                    alt="Hexagono"
                    width={undefined}
                    height={undefined}
                    className={styles.hexagonoBaixo}
                    priority
                  />
                  <FaMapMarkerAlt
                    style={{ color: corAtual }}
                    className={styles.iconeHexagonoBaixo}
                  />
                </div>
                <div className={styles.divisaoTextoBaixo}>
                  <div className={styles.textoCimaPrototipoBaixo}></div>
                  <div className={styles.tituloPrototipoBaixo}></div>
                  <div className={styles.conteudoPrototipoBaixo}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Detalhe}>
        <h1 className={styles.titulo}>
          <Image
            src={SetaExperiencia}
            alt="SetaExperiencia"
            width={undefined}
            height={undefined}
            className={styles.seta}
            priority
          />
          <Image
            src={Risco}
            alt="Risco"
            width={undefined}
            height={undefined}
            className={styles.risco}
            priority
          />
          O <span className={styles.destaque}>detalhe importa</span> na
          experiência do usuário
        </h1>
        <p className={styles.subtitulo}>
          Todos os pequenos elementos que compõem o site são de extrema
          importância, por isso pensamos em tudo.
        </p>
        <div className={styles["Detalhe__div--disclaimer"]}>
          <Marquee
            speed={30}
            gradient={true}
            loop={0}
            gradientColor={"#171717"}
          >
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🖥️ Versão mobile</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🧠 Copy escrita estrategicamente</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🎨 Design profissional</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🛠️ Instalação no domínio do cliente</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🌐 Integração com redes sociais</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🔧 Suporte após publicação</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>📦 Entrega completa, sem pendências</p>
            </div>
          </Marquee>
          <Marquee
            speed={30}
            gradient={true}
            loop={0}
            direction={"right"}
            gradientColor={"#171717"}
          >
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🔒 Site seguro</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🔗 Link direto para WhatsApp ou e-mail</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>📊 Estrutura pensada</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🔎 Atenção aos mínimos detalhes</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>📈 Foco na conversão</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>👣 Jornada fluida</p>
            </div>
            <div className={styles["Detalhe__div--anunc"]}>
              <p>🧭 Hierarquia visual</p>
            </div>
          </Marquee>
        </div>
      </section>

      <section className={styles.Ajuda} id="ajuda">
        <h1 className={styles.titulo}>
          Como podemos <span className={styles.destaque}>ajudar</span>?
        </h1>
        <div className={styles.divisoesAjuda}>
          <div className={styles.luzQuadriculada}>
            <Image
              src={luzQuadriculada}
              alt="luzQuadriculada"
              width={undefined}
              height={undefined}
              className={styles.luzQuadriculada__image}
              priority
            />
          </div>
          <div className={styles.divisaoAjuda}>
            <div className={styles.divisaoInformacao}>
              <p className={styles.tituloAjuda}>Eu quero um site</p>
              <span className={styles.subtituloAjuda}>
                Vamos desenvolver um site para o seu negócio com um design
                moderno e atraente para gerar engajamento.
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=5511953653952&text=Olá! quero uma landing page para meu negócio."
                target="_blank"
              >
                <button className={styles.botaoAjuda}>Saber Mais</button>
              </a>
            </div>
            <Image
              src={Layout}
              alt="Layout"
              width={undefined}
              height={undefined}
              className={`${styles.imagemAjuda} ${styles.primeiraImagemAjuda}`}
              priority
            />
          </div>
          <div className={styles.divisaoAjuda}>
            <div className={styles.divisaoInformacao}>
              <p className={styles.tituloAjuda}>Eu quero bater um papo</p>
              <span className={styles.subtituloAjuda}>
                Se você tem uma ideia de projeto ou tem uma proposta de
                trabalho, clique no botão abaixo, será um prazer conversar com
                você.
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=5511953653952&text=Olá! tenho uma ideia de projeto e gostaria de bater um papo."
                target="_blank"
              >
                <button className={styles.botaoAjuda}>Contato</button>
              </a>
            </div>
            <Image
              src={Cafe}
              alt="Cafe"
              width={undefined}
              height={undefined}
              className={`${styles.imagemAjuda} ${styles.segundaImagemAjuda}`}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.Criar}>
        <h1 className={styles.titulo}>
          Vamos criar algo excepcional juntos 🚀
        </h1>
        {/* <p className={styles.subtitulo}>
          Confiança, experiência e dedicação em cada projeto
        </p> */}
        <button className={styles.botao}>BORA!</button>
      </section>

      <section className={styles.faq}>
        <h1 className={styles.titulo}>
          <span className={styles.destaque}>Perguntas</span> frequentes
        </h1>
        <p className={styles.subtitulo}>Dúvidas que talvez você tenha</p>
        <div className={styles.faqs}>
          {faqList.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className={styles.faqs__container}
            >
              <div className={styles.faq__division}>
                <p className={styles.faq__title}>{faq.question}</p>
                {activeIndex === index ? (
                  <FaAngleUp className={styles.faq__icon} />
                ) : (
                  <FaAngleDown className={styles.faq__icon} />
                )}
              </div>
              <div
                className={`${styles.faq__answer} ${
                  activeIndex === index ? `${styles.active}` : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.rodape}>
        <Image
          src={LogoDigitalGlow}
          alt="LogoDigitalGlow"
          width={undefined}
          height={undefined}
          className={styles.logo}
          priority
        />
        <div className={styles["Header__social"]}>
          <a href="https://x.com/digitalglow_web">
            <div className={styles["Header__social--division"]}>
              <RiTwitterXFill className={styles["Header__social--icon"]} />
            </div>
          </a>
          <a href="https://www.instagram.com/digitalglowweb/">
            <div className={styles["Header__social--division"]}>
              <RiInstagramLine className={styles["Header__social--icon"]} />
            </div>
          </a>
        </div>
        <p>Copyright © 2025 Digital Glow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPageContent;
