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
import { useState } from "react";
import Risco from "../../images/Risco.svg";
import SetaExperiencia from "../../images/SetaExperiencia.svg";

import Layout from "../../images/Layout.svg";
import Cafe from "../../images/Cafe.svg";
import LogoDigitalGlow from "./../../images/Logo/LogoDigitalGlow.svg";

import DirectvImage from "../../images/directv.png";
import SkyImage from "../../images/sky.png";
import NorwayImage from "../../images/norway.png";
import NovaParabolicaImage from "../../images/novaparabolica.png";
import KahuImage from "../../images/kahu.png";

import Marquee from "react-fast-marquee";

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

  return (
    <div className={styles["Page__content"]}>
      <section className={styles["Apresentation"]}>
        <div className={styles["Apresentation__anunc"]}>
          <p>🚀 IMPULSIONE SEU NEGÓCIO</p>
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
          text="Desenvolvemos landing pages rápidas e inteligentes, criadas para
          transformar visitantes em clientes"
          disabled={false}
          speed={3}
          className={styles["Apresentation__subtitle"]}
        />
        <div className={styles["Apresentation__buttons"]}>
          <button className={styles["Apresentation__button"]}>
            Ver Projetos
          </button>
          <button className={styles["Apresentation__link"]}>
            Fale Conosco{" "}
            <IoIosArrowForward className={styles["Apresentation__icon"]} />
          </button>
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
            Você tem uma ideia incrível? Um projeto que está apenas esperando
            para ganhar vida? Estamos aqui para ajudarmos a transformar suas
            ideias em realidade!
          </p>
          <a
            href="https://www.linkedin.com/in/felipepanebiancopontin/"
            target="_blank"
          >
            <button className={styles["botao"]}>Fazer um orçamento</button>
          </a>
        </div>
      </section>
      <section className={styles.PrototipoSite}>
        <h1 className={styles.titulo}>
          Tudo do <span className={styles.destaque}>seu jeito</span> e como você{" "}
          <span className={styles.destaque}>imagina</span>
        </h1>
        <p className={styles.subtitulo}>Qual estilo combina com você?</p>
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
          importância
        </p>
      </section>

      <section className={styles.Ajuda} id="ajuda">
        <h1 className={styles.titulo}>
          Como eu posso <span className={styles.destaque}>te ajudar?</span>
        </h1>
        <div className={styles.divisoesAjuda}>
          <div className={styles.divisaoAjuda}>
            <div className={styles.divisaoInformacao}>
              <p className={styles.tituloAjuda}>Eu quero uma Landing Page</p>
              <span className={styles.subtituloAjuda}>
                Desenvolverei uma Landing Page para o seu negócio com um design
                moderno e atraente para gerar engajamento.
              </span>
              <a
                href="https://www.linkedin.com/in/felipepanebiancopontin/"
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
                href="https://www.linkedin.com/in/felipepanebiancopontin/"
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
        <button className={styles.botao}>BORA!</button>
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
      </footer>
    </div>
  );
};

export default MainPageContent;
