import LogoDigitalGlow from "./../../images/Logo/LogoDigitalGlow.svg";
import Image from "next/image";
import styles from "./Header.module.scss";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className={styles["Header__light"]}></div>
      <header className={styles["Header"]}>
        <div className={styles["Header__logo--division"]}>
          <Image
            src={LogoDigitalGlow}
            alt="Banner principal"
            width={1200}
            height={600}
            className={styles["Header__logo--image"]}
            priority
          />
        </div>
        <nav className={styles["Header__navigation"]}>
          <ul className={styles["Header__navigation--items"]}>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                O que fazemos
              </a>
            </li>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                Projetos
              </a>
            </li>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                Serviços
              </a>
            </li>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                Dúvidas
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles["Header__social"]}>
          <div className={styles["Header__social--division"]}>
            <RiTwitterXFill className={styles["Header__social--icon"]} />
          </div>
          <div className={styles["Header__social--division"]}>
            <RiInstagramLine className={styles["Header__social--icon"]} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
